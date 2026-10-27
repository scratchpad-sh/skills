#!/usr/bin/env node
// Zips every skill into dist/<skill-name>.zip for uploading to the Claude apps,
// and the whole set into dist/scratchpad-skills.zip.
import { readdirSync, existsSync, rmSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
rmSync(dist, { recursive: true, force: true });
mkdirSync(dist);

let count = 0;
for (const plugin of readdirSync(join(root, 'plugins'))) {
  const skillsDir = join(root, 'plugins', plugin, 'skills');
  if (!existsSync(skillsDir)) continue;
  for (const skill of readdirSync(skillsDir)) {
    if (!existsSync(join(skillsDir, skill, 'SKILL.md'))) continue;
    // The zip holds the skill's folder, which is the layout the apps expect.
    execFileSync('zip', ['-qr', join(dist, `${skill}.zip`), skill, '-x', '*.DS_Store'], { cwd: skillsDir });
    count++;
  }
}
execFileSync('zip', ['-qr', join(dist, 'scratchpad-skills.zip'), 'plugins', 'README.md', 'LICENSE', '-x', '*.DS_Store'], { cwd: root });
console.log(`${count} skills zipped into dist/`);
