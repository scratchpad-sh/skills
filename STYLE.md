# How a skill in this repo is written

Every skill here follows the same shape, so a person who has used one knows how
to use the next, and an AI that loads one gets the same quality of instruction
every time. Read this before adding or editing a skill. `npm run check` enforces
the mechanical parts.

## Where a skill lives

```
plugins/<plugin>/skills/<skill-name>/SKILL.md
```

The four plugins are `note-taking-methods`, `notes-by-interest`,
`everyday-notes`, and `writing`. A skill's folder name is its name: lowercase
words joined by hyphens, at most 64 characters, unique across the whole repo.
A skill is one `SKILL.md`. Add a `templates/` or `examples/` folder beside it
only when the skill genuinely needs a long file the AI should read on demand.

## Original work only

Every skill in this repo is written from scratch. Never copy, paraphrase, or
adapt a skill from another collection (skills.sh, GitHub, or anywhere else),
even when it covers the same ground. Write from what you know about the craft.

## Frontmatter

```yaml
---
name: cornell-notes
description: Turns a lecture, reading, or talk into Cornell notes, with cue questions, notes under each, and a summary at the bottom. Use when someone asks for Cornell notes, wants notes they can quiz themselves from, or is studying for a test and has raw notes, a transcript, slides, or a chapter to work from.
---
```

- `name` matches the folder exactly.
- `description` is what the AI reads to decide whether to load the skill, so it
  says **what the skill makes** and **when to use it**, with the words a person
  would actually type ("Cornell notes", "quiz myself", "studying for a test").
- The **first sentence** is the catalogue line in the README. Keep it under
  about 160 characters and start it with a verb in the third person ("Turns",
  "Keeps", "Writes", "Builds").
- The whole description stays under 1,024 characters. 250 to 600 is the sweet
  spot.
- No other fields.

## The body

Use these sections, in this order, with these exact headings. Write to the AI
in the second person and the imperative ("Ask for", "Write", "Never invent").

```markdown
# Title in plain words

One or two short paragraphs: what this kind of note is, why it works, and who
it is for. Credit a named method to its originator in one clause when the
attribution is well established (Walter Pauk for Cornell notes, Niklas Luhmann
for the Zettelkasten). Never invent history, dates, or statistics.

## When to use it

Bullets of the situations it fits. Then a short paragraph naming sibling
skills that fit better in nearby situations, by their skill name in backticks.

## What to ask for

What you need from the person, and the sensible default for each thing they
do not say. Ask only for what you cannot infer, and at most two or three
questions at once. If they gave you enough, start.

## How to do it

Numbered steps the AI follows. Concrete and specific to this kind of note:
the judgment calls an expert would make, not generic advice like "be clear".

## The format

The template, in a fenced `markdown` block, with placeholders in
`[square brackets]`.

## Example

A short, realistic worked example: a few lines of input and the note it
becomes. Invented but plausible. Keep it under about 45 lines.

## Pitfalls

Bullets of the mistakes that make this kind of note fail, and what to do
instead.

## Saving the note

(the standard paragraph below)
```

### The standard "Saving the note" paragraph

> If a notes app is connected (for example the Scratchpad connector, or any
> notes tool you can call), offer to save the result there as a new note with a
> clear, searchable title, or to add it to an existing note the person names.
> Otherwise, give the whole note as one Markdown block that pastes cleanly into
> any notes app.

Skills may add one sentence after it when there is something specific to say
(a recipe card might suggest a "Recipes" folder; a daily note might suggest
appending to today's note rather than creating a new one).

### The standard "Saving the draft" paragraph

A writing skill whose output is not a note (an email, a blog post) titles this
section `## Saving the draft` and uses this paragraph instead:

> If a notes app is connected (for example the Scratchpad connector, or any
> notes tool you can call), offer to save the draft there as a new note with a
> clear, searchable title, or to add it to an existing note the person names.
> Otherwise, give the whole draft as one Markdown block that pastes cleanly into
> any notes app.

A skill that edits existing text adds this sentence after it:

> If the original came from a note, offer to replace its text only after the
> person approves the changes, or to save the result as a new version beside
> it.

Then at most one skill-specific sentence, as for notes.

## Length

Aim for 90 to 180 lines. Long enough to carry real expertise, short enough to
load quickly. Cut anything an AI would do well without being told.

## Output rules every skill shares

- Output Markdown that pastes cleanly anywhere: headings, lists, `- [ ]`
  checkboxes, bold, and tables only where a grid genuinely helps.
- Notes reflect the source, and text with no marker came from it. Never
  invent facts, quotes, figures, names, or citations that were not in what the
  person gave you. Mark gaps with `[?]` and say what is missing. A list of
  gaps in the source uses `- [?]` bullets; `- [ ]` is only for an action.
- Label anything you add from general knowledge (context, a likely cause, a
  suggestion) with `(added)`, so the person can tell it from what their
  source said. Use these markers, spelled exactly this way, rather than
  inventing new ones.
- A draft written for readers (an essay, a post, a proposal), or a plan for
  one (an outline, an essay structure), marks a hole the writer must fill as
  `[NEEDS: what is missing]` instead of filling it.
- `(proposed)` marks content you offer for a draft or plan (a scene beat, a
  thesis, a title); `(suggested)` marks an action or step (a checklist item, a
  next step, a fix). Both mean the person accepts or rejects it; neither is a
  fact about the source.
- Every marker goes at the end of the item it marks, never at the start.
- In a field log, `[not observed]` marks a feature nobody checked, which a
  key or a later reader needs to tell apart from a gap in the notes.
- A date with no year takes the current year when the person is noting
  something recent, and its next occurrence when it is clearly upcoming
  ("Jan 15" written in October). Otherwise mark the year `[?]`.
- Keep the person's own words where they matter (a quote, a name, a phrase they
  clearly chose).
- Write dates as `2026-10-27`, which every reader parses the same way, even
  when the person wrote "10/27" or "Tuesday". Quote their wording only where
  it carries meaning ("sometime next week"). Two exceptions keep the
  person's wording: a skill that tidies their own text, and a quote or a flash
  card that must match how the source or a test states the date. Text the
  person will send or publish (an email, a post, a newsletter, a message)
  writes dates the way its readers would ("Thursday, November 12").
- For health, legal, money, or safety topics, the skill makes notes about what
  a source says; it does not give advice of its own.

## House writing rules

These apply to every file in the repo, including examples and templates.

- **Never use an em dash or an en dash.** Use a period, colon, comma, or
  parentheses. Hyphens in compound words ("well-known") and ranges ("4-20")
  are fine. The check fails on either dash.
- **Always use the Oxford comma**: "notes, quotes, and questions".
- Plain words over clever ones. Short sentences. No hype ("supercharge",
  "unlock", "game-changer", "seamless").
- Spell in American English.
