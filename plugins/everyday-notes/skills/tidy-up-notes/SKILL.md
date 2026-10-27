---
name: tidy-up-notes
description: Cleans up a messy note without losing anything, fixing structure, headings, lists, duplicates, and typos, then reports exactly what changed. Use when someone asks to tidy, clean up, organize, or format a note, or has notes that grew messy over time and wants them readable without rewriting them.
---

# Tidy up notes

Notes get messy honestly: written fast, added to over weeks, pasted from
three places. Tidying makes them readable again. The rule that makes tidying
safe is simple: **change the shape, keep the content.** Every fact, number,
name, link, and opinion in the original must still be there afterward, in
the person's own words wherever possible.

A good tidy is invisible in the right way. The person should recognize their
own note, just easier to scan, and the change report should let them check
that nothing went missing.

## When to use it

- A note has grown into a wall of text or a jumble of fragments.
- Notes were pasted from several sources and need one structure.
- Lists, headings, and indentation are inconsistent.
- The same point appears in two places.

To condense a note into a shorter version, use `summary-writer` instead; tidying
keeps everything. To turn notes into a draft for others, use `notes-to-draft`.
To sort many separate notes, use `inbox-triage`. For prose that needs editing
rather than tidying, use `tighten-prose` or `proofread`.

## What to ask for

- **The note.** Pasted, or the name of a note in a connected app.
- **How light a touch.** Default: medium (structure, duplicates, typos, and
  consistent formatting, but no rewording beyond fixing obvious errors).
- **Any structure they want**, such as specific headings. Default: let the
  content suggest it.

If they gave you the note, start.

## How to do it

1. **Inventory first.** Before changing anything, list every distinct fact,
   task, link, date, number, and name in the note. This is the checklist the
   tidied version must pass.
2. **Find the natural sections.** Group related lines under short headings
   drawn from the content. Keep the original order within each group where
   order might matter (steps, a timeline).
3. **Fix lists.** Turn run-on lines into bullets, use one bullet style, keep
   existing checkboxes exactly as checked or unchecked, and fix indentation so
   sub-points sit under their parent. Turn a plain line into a `- [ ]` task
   only when it is plainly a to-do ("call Dave"), and report each one, since
   it changes what the person tracks. A conflict or detail that belongs to
   one item (an allergy, a link) moves under that item.
4. **Merge duplicates.** When two lines say the same thing, keep the more
   complete one. When they differ in a detail (two different dates for the
   same event), keep both and flag the conflict. Never pick one silently.
5. **Fix typos and obvious slips.** Spelling, doubled words, broken
   capitalization. Do not change jargon, names, deliberate shorthand ("w/",
   "2 wks", "ppl"), or their voice. Keep marks that signal emphasis or doubt
   ("PAID", "!!", "??"), and keep dates as they wrote them; never add a
   year. If you are not sure something is a typo, leave it.
6. **Keep everything else.** Stray thoughts that fit nowhere go in a short
   "Other" section at the end, not in the bin.
7. **Check against the inventory.** Every item from step 1 must appear. If
   anything is missing, put it back.
8. **Report the changes**: what was restructured, merged, fixed, and flagged,
   so the person can verify in under a minute.

## The format

```markdown
# [Original title, or a clearer one if it had none]

## [Section]
- [Point]
  - [Sub-point]

## [Section]
- [ ] [Task]

## Other
- [Anything that did not fit a section]
```

Followed, outside the note, by:

```markdown
**What changed**
- Structure: [sections created, lines moved]
- New tasks: [plain lines turned into checkboxes, if any]
- Merged: "[line]" with "[line]"
- Fixed: [typo] to [fix]
- Flagged: [conflicts or unclear items]
- Nothing removed.
```

## Example

Input: "kitchen reno. budget 15k. tiles from Stonecraft, ask about lead
time. contractor Dave 555-0142. budget 15k total. cabnets: white shaker.
need permit?? dave said 3 weeks. tiles maybe Tilebar instead. call Dave
re start date"

```markdown
# Kitchen reno

## Budget
- 15k total

## Contractor
- Dave, 555-0142
- Said 3 weeks [?] (what takes 3 weeks: the job, the start, or the permit?)
- [ ] Call Dave re start date

## Materials
- Cabinets: white shaker
- Tiles: Stonecraft, or maybe Tilebar instead
  - [ ] Ask about lead time

## Open questions
- [?] Need permit??
```

**What changed**
- Structure: grouped into Budget, Contractor, Materials, and Open questions.
- New tasks: "call Dave re start date" and "ask about lead time".
- Merged: "budget 15k" with "budget 15k total".
- Fixed: "cabnets" to "cabinets"; capitalized names.
- Flagged: "3 weeks" is unclear in the original.
- Nothing removed.

## Pitfalls

- **Rewriting instead of tidying.** If the person no longer recognizes their
  phrasing, you went too far.
- **Silent deletion.** Every removed line must be a merged duplicate, and
  every merge must be reported.
- **Resolving conflicts by guessing.** Two different numbers stay two numbers
  until the person says which is right.
- **Over-structuring.** Six headings for ten lines is worse than none. Use
  only as many sections as the content needs.
- **"Fixing" deliberate shorthand.** Their abbreviations are theirs. Fix only
  clear typos.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. To replace an existing note in a connected app, show the tidied version
and the change report first and get a yes; propose the edit as a reviewable
change if the app supports it, and never delete the original without explicit
confirmation.
