#!/usr/bin/env node
// Validates every skill against STYLE.md and keeps the README catalogue in step.
//   node scripts/check.mjs           check only (exit 1 on any error)
//   node scripts/check.mjs --write   also rewrite the README catalogue
//   node scripts/check.mjs --skills-only   skip the README
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const write = process.argv.includes('--write');
const skipReadme = process.argv.includes('--skills-only');
const errors = [];
const warnings = [];

const SECTIONS = ['When to use it', 'What to ask for', 'How to do it', 'The format', 'Example', 'Pitfalls'];
const SAVING = /^## Saving the (note|draft)$/m;
// Em and en dashes, plus the look-alikes (figure dash, horizontal bar, minus sign) and their HTML entities.
const DASHES = new RegExp(`[${String.fromCharCode(0x2012, 0x2013, 0x2014, 0x2015, 0x2212)}]|&[mn]dash;`, 'i');

const marketplace = JSON.parse(readFileSync(join(root, '.claude-plugin/marketplace.json'), 'utf8'));
const plugins = marketplace.plugins.map((p) => p.name);
const TITLES = {
  'note-taking-methods': 'Note-taking methods',
  'notes-by-interest': 'Notes by interest',
  'everyday-notes': 'Everyday notes',
  writing: 'Writing',
};

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === '.git' || name === 'node_modules' || name === 'dist') continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, out);
    else out.push(path);
  }
  return out;
}

// No em or en dashes anywhere in the repo.
for (const file of walk(root)) {
  if (!/\.(md|json|mjs|js|yml|yaml|txt)$/.test(file)) continue;
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    if (DASHES.test(line)) errors.push(`${relative(root, file)}:${i + 1}: em dash, en dash, or look-alike`);
  });
}

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return null;
  const fields = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-z-]+):\s*(.*)$/);
    if (!kv) continue;
    const value = kv[2];
    const quoted = /^".*"$|^'.*'$/.test(value);
    // Plain YAML scalars cannot hold ": " or " #", or start with a flow or block indicator.
    if (!quoted && (/: | #/.test(value) || /^[[\]{}>|*&!%@`'"]/.test(value))) {
      fields.__yaml = kv[1];
    }
    fields[kv[1]] = quoted ? value.slice(1, -1).replace(/\\(["\\])/g, '$1') : value;
  }
  return { fields, body: text.slice(m[0].length) };
}

const seen = new Map();
const catalogue = {};

for (const plugin of plugins) {
  const pluginDir = join(root, 'plugins', plugin);
  const manifest = join(pluginDir, '.claude-plugin/plugin.json');
  if (!existsSync(manifest)) errors.push(`plugins/${plugin}: missing .claude-plugin/plugin.json`);
  const skillsDir = join(pluginDir, 'skills');
  catalogue[plugin] = [];
  if (!existsSync(skillsDir)) continue;

  for (const dir of readdirSync(skillsDir).sort()) {
    if (!statSync(join(skillsDir, dir)).isDirectory()) continue;
    const file = join(skillsDir, dir, 'SKILL.md');
    const rel = relative(root, file);
    if (!existsSync(file)) { errors.push(`${rel}: missing`); continue; }
    const text = readFileSync(file, 'utf8');
    const parsed = parseFrontmatter(text);
    if (!parsed) { errors.push(`${rel}: no frontmatter`); continue; }
    const { fields, body } = parsed;
    if (fields.__yaml) {
      errors.push(`${rel}: "${fields.__yaml}" is not valid plain YAML (reword, or wrap the value in double quotes)`);
      delete fields.__yaml;
    }

    const extra = Object.keys(fields).filter((k) => k !== 'name' && k !== 'description');
    if (extra.length) errors.push(`${rel}: unexpected frontmatter field(s): ${extra.join(', ')}`);
    if (fields.name !== dir) errors.push(`${rel}: name "${fields.name}" does not match folder "${dir}"`);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(dir) || dir.length > 64) errors.push(`${rel}: bad skill name`);
    if (seen.has(dir)) errors.push(`${rel}: duplicate name, also in ${seen.get(dir)}`);
    seen.set(dir, plugin);

    const desc = fields.description || '';
    if (!desc) errors.push(`${rel}: empty description`);
    if (desc.length > 1024) errors.push(`${rel}: description is ${desc.length} chars (max 1024)`);
    if (!/\bUse when\b/i.test(desc)) warnings.push(`${rel}: description does not say "Use when"`);
    const first = desc.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? desc;
    if (first.length > 180) warnings.push(`${rel}: first sentence is ${first.length} chars`);

    if (!/^# .+/m.test(body)) errors.push(`${rel}: no H1 title`);
    let last = -1;
    for (const s of SECTIONS) {
      const at = body.search(new RegExp(`^## ${s}$`, 'm'));
      if (at === -1) errors.push(`${rel}: missing "## ${s}"`);
      else if (at < last) errors.push(`${rel}: "## ${s}" is out of order`);
      else last = at;
    }
    if (!SAVING.test(body)) errors.push(`${rel}: missing "## Saving the note" (or "draft")`);
    if (!/```markdown\n/.test(body)) warnings.push(`${rel}: no fenced markdown template`);

    const lines = text.split('\n').length;
    if (lines < 70 || lines > 230) warnings.push(`${rel}: ${lines} lines (aim for 90 to 180)`);

    catalogue[plugin].push({ name: dir, line: first });
  }
}

// Plugin manifests agree with the marketplace.
for (const entry of marketplace.plugins) {
  const manifest = join(root, 'plugins', entry.name, '.claude-plugin/plugin.json');
  if (!existsSync(manifest)) continue;
  const p = JSON.parse(readFileSync(manifest, 'utf8'));
  if (p.name !== entry.name) errors.push(`${entry.name}: plugin.json name is "${p.name}"`);
  if (p.version !== entry.version) errors.push(`${entry.name}: version ${p.version} in plugin.json, ${entry.version} in marketplace.json`);
}

// README catalogue, between the markers.
const total = Object.values(catalogue).reduce((n, list) => n + list.length, 0);
const block = marketplace.plugins.map((p) => {
  const rows = catalogue[p.name].map((s) =>
    `| [\`${s.name}\`](plugins/${p.name}/skills/${s.name}/SKILL.md) | ${s.line.replace(/\|/g, '\\|')} |`);
  return [`### ${TITLES[p.name] ?? p.name} (${rows.length})`, '', p.description, '',
    '| Skill | What it does |', '| --- | --- |', ...rows].join('\n');
}).join('\n\n');
const readmePath = join(root, 'README.md');
const readme = readFileSync(readmePath, 'utf8');
const re = /(<!-- catalogue:start -->\n)[\s\S]*?\n?(<!-- catalogue:end -->)/;
if (skipReadme) {
  // Skills only: leave the README alone.
} else if (!re.test(readme)) errors.push('README.md: catalogue markers missing');
else {
  const next = readme
    .replace(re, `$1${block}\n$2`)
    .replace(/<!-- count -->\d+<!-- \/count -->/g, `<!-- count -->${total}<!-- /count -->`);
  if (next !== readme) {
    if (write) { writeFileSync(readmePath, next); console.log('README.md catalogue updated'); }
    else errors.push('README.md: catalogue is stale (run npm run catalogue)');
  }
}

for (const w of warnings) console.log(`warning  ${w}`);
for (const e of errors) console.log(`error    ${e}`);
console.log(`${total} skills, ${errors.length} error(s), ${warnings.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
