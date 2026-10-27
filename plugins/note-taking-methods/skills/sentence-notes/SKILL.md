---
name: sentence-notes
description: Takes notes with the sentence method, one numbered line per new fact or idea as it comes, then groups the lines by topic afterward. Use when someone asks for the sentence method, is taking notes on a fast talk, webinar, or meeting with no clear structure, or has a numbered list of jotted lines to clean up and organize.
---

# Sentence notes

The sentence method is the simplest way to keep up with a fast speaker:
every new fact, idea, or topic gets its own numbered line, written as a short
sentence, in the order it was said. There is no deciding where something
fits while the talk is moving. The structure comes afterward, when the lines
are grouped by topic and the repeats and dead ends are cut.

It is the method for talks that jump around, guest speakers, panels, and
lectures with many facts and little visible structure. It has two halves:
capture during the talk, and organize after it. This skill helps with both,
and does the second half for the person when they paste their raw lines.

## When to use it

- Someone is about to sit through a fast or unstructured talk and wants a
  way to keep up.
- They pasted a raw, numbered or line-by-line set of notes from a talk.
- They have a transcript and want the facts pulled out line by line first.
- They ask for the sentence method.

For a talk with a clear structure, `outline-notes` organizes as it goes. For
meetings with decisions and owners, use `meeting-notes`. To clean up a
spoken memo, use `voice-memo-cleanup`.

## What to ask for

- **Which half they need.** If they pasted notes, they need the organizing
  half; start. If they are about to attend a talk, give them the capture
  rules and a blank template.
- **The talk's title and speaker**, if not in the notes. Default: leave a
  `[?]` in the header.

## How to do it

**Capture (during the talk, or from a transcript)**

1. Start a new numbered line every time the speaker moves to a new fact,
   idea, or topic. When in doubt, start a new line: lines are cheap.
2. Write each line as a short sentence in your own words. Keep numbers,
   names, and quoted phrases exact; put direct quotes in quotation marks.
3. Leave a blank line or a `---` when the speaker clearly changes subject.
   This makes grouping easier later.
4. End a line with `*` for anything the speaker stressed, and `?` for
   anything missed or unclear. (A `*` at the start of a numbered line turns
   into a bullet when the Markdown renders.)

**Organize (after)**

5. Read every line once. Note the four to six topics the talk actually
   covered; they are often not the ones on the agenda.
6. Assign each line to a topic. Keep the original line numbers in
   parentheses so the person can trace a point back to its place in the talk.
7. Merge lines that say the same thing. Cut lines that were filler or
   repeated slides, but never drop a fact. When a later line corrects an
   earlier one, keep the correction and cite both line numbers.
8. Within each topic, order the lines so they make sense together, which may
   differ from the order they were said.
9. Turn the `*` lines into a short "Key points" list at the top, and keep
   each one under its topic as well.
10. Turn every `?` line into an open question at the bottom.
11. Pull out lines that are the note-taker's own, not the speaker's ("TODO
    check my shipping", "try this at work"), into a "My follow-ups" list of
    `- [ ]` items, so they are never filed as something the speaker said.
    Audience questions and answers go under a "Q&A" topic.

## The format

Capture:

```markdown
# [Talk title], [Speaker]
[YYYY-MM-DD]

1. [Fact or idea as a short sentence]
2. [Next fact]
3. [Something the speaker stressed] *
4. [Something missed] ?
```

Organized:

```markdown
# [Talk title], [Speaker]
[YYYY-MM-DD]

## Key points
- [Stressed point] (3)

## [Topic 1]
- [Sentence] (1)
- [Sentence] (5, 9)

## [Topic 2]
- [Sentence] (2)

## My follow-ups
- [ ] [The note-taker's own to-do] (6)

## Open questions
- [?] [What was missed or unclear] (4)
```

## Example

Input: "1 ocean covers 71% of earth 2 most of it unexplored 3 coral reefs
<1% of ocean floor but ~25% of marine species* 4 bleaching = coral expels
algae when water too warm 5 deep sea vents, life without sunlight 6 reefs
recovering in some places? 7 chemosynthesis at vents 8 bleaching events more
frequent"

```markdown
# Talk on the ocean (title [?]), speaker [?]
2026-10-27

## Key points
- Reefs: under 1% of the ocean floor, about 25% of marine species. (3)

## The ocean overall
- The ocean covers 71% of Earth. (1)
- Most of it is unexplored. (2)

## Coral reefs
- Reefs cover under 1% of the ocean floor but hold about 25% of marine
  species. (3)
- Bleaching: coral expels its algae when the water is too warm. (4)
- Bleaching events are becoming more frequent. (8)

## Deep sea vents
- Life at the vents exists without sunlight. (5)
- It runs on chemosynthesis. (7)

## Open questions
- [?] Are reefs recovering in some places, and where? (6)
```

## Pitfalls

- **Organizing during capture.** The point is to not decide while the talk
  is moving. Sorting comes after.
- **Losing the line numbers.** Without them, the person cannot find where
  something came up in a recording or the original notes.
- **Dropping facts while merging.** Merge repeats, never content. If two
  lines differ even slightly, keep both.
- **Keeping the talk's order in the final notes.** The raw order is the
  capture. The organized version groups by topic.
- **Treating a `?` line as a fact.** A half-heard line goes to open
  questions, not into the notes as if confirmed.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. If they captured into a note already, offer to replace the raw lines with
the organized version, or keep both with the raw lines at the bottom.
