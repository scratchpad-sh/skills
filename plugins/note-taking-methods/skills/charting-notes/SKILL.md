---
name: charting-notes
description: Turns notes or a reading into a comparison chart, with the things being compared as rows and the categories that matter as columns. Use when someone asks for the charting method or a comparison table, is studying several theories, people, products, periods, or options side by side, or wants facts organized so the differences jump out.
---

# Charting notes

The charting method organizes notes into a table: one row for each thing
being studied (a theory, a country, a product, a period) and one column for
each question asked of all of them (date, key idea, strengths, weaknesses).
Filling the grid forces the same questions on every item, so gaps show up as
empty cells and differences show up when the eye runs down a column.

It suits material that is already a set of comparable items: schools of
thought, historical periods, drug classes, competing tools. It is a poor fit
for a narrative or an argument, where the order and links between ideas
matter more than side-by-side facts.

## When to use it

- A lecture or chapter covers several items of the same kind.
- Someone is comparing options to make a decision.
- They are studying for an exam that asks "compare and contrast".
- They ask for a chart, a table, or the charting method.

For notes that show how ideas cause each other, use `flow-notes`. For a
single structured topic, use `outline-notes`. To record a decision once the
comparison is done, use `decision-record`.

## What to ask for

- **The material**: notes, a reading, slides, or the items to compare.
- **What to compare them on**, if they know. Default: infer the columns from
  what the source says about every item, and propose them before filling in
  a large chart.
- **The purpose** (exam, decision, overview), if not obvious. It decides
  whether to add a "So what" column or a verdict.

## How to do it

1. List the **items** (rows). Make sure they are the same kind of thing. A
   chart comparing two theories and one person who held them will not line
   up.
2. Choose the **categories** (columns): the questions the source answers for
   most items. Four to six columns is the readable limit. Put the identifying
   column first (name), then time or origin, then the substance.
3. Prefer columns that **discriminate**. "Studies behavior" is useless if all
   five theories study behavior. Ask what makes each item different.
4. Fill each cell with a short phrase, not a paragraph. Keep names, dates,
   and figures exactly as the source gives them, in the source's units. A
   figure the person hedged ("$1,450 I think?") keeps a `[?]` after it. If
   units differ across rows ($/week against $/month), convert only in a
   footnote marked `(added)`, with the assumption you used.
5. Mark empty cells `[?]` rather than guessing. An empty cell is useful: it
   tells the person what to look up, so list each one under Open questions.
   Write `n/a` when the category does not apply to that item, which is
   different from not knowing. An item with nothing known yet gets no row:
   name it under Open questions instead.
6. A fact the source gives for only one item ("they do meals") does not earn
   a column. Put it under **Other notes** so it is not lost.
7. If a cell needs more than about fifteen words, put a short phrase in the
   cell and a numbered footnote under the table.
8. If there are more than six columns or the cells are long, **flip** the
   table (items as columns) or split it into two charts by theme. Tables
   that wrap badly on a phone are hard to study from.
9. Below the chart, write two to four **takeaways**: the patterns visible
   only when the items sit side by side.
10. For a **decision**, add a "Fits your needs" row or a short verdict only
    against criteria the person stated, and say which criterion decided it.
    For health, legal, or money options, compare what the source says and
    leave the choice to them.

## The format

```markdown
# [Topic]: [What is being compared]
[YYYY-MM-DD] · [Source]

| [Item] | [Category 1] | [Category 2] | [Category 3] | [Category 4] |
| --- | --- | --- | --- | --- |
| [Item A] | [short phrase] | [short phrase] | [short phrase] | [short phrase] |
| [Item B] | [short phrase] | [?] | [short phrase] | [short phrase] |

1. [Footnote for a cell that needed more room]

## Other notes
- [Item]: [fact the source gives for this item only]

## Takeaways
- [Pattern or contrast that the chart makes visible]

## Open questions
- [?] [What the empty cells need]
```

## Example

Input: "psych 101 learning theories. classical conditioning, pavlov, dogs,
learn association between stimulus and response, involuntary. operant,
skinner, rats/pigeons, reinforcement and punishment shape voluntary behavior.
observational / social learning, bandura, bobo doll, learn by watching, no
direct reinforcement needed"

```markdown
# PSYCH 101: Three learning theories
2026-10-27 · Lecture notes

| Theory | Key figure | Classic study | What is learned | Behavior type |
| --- | --- | --- | --- | --- |
| Classical conditioning | Pavlov | Dogs | Link between a stimulus and a response | Involuntary |
| Operant conditioning | Skinner | Rats and pigeons | Behavior shaped by reinforcement and punishment | Voluntary |
| Observational learning | Bandura | Bobo doll | Behavior copied by watching others | [?] |

## Takeaways
- Observational learning needs no direct reinforcement; operant conditioning depends on it.
- Classical conditioning shapes involuntary responses; operant conditioning shapes voluntary behavior.

## Open questions
- [?] Did the lecture say whether observational learning is voluntary?
```

## Pitfalls

- **Columns that do not discriminate.** A column with the same value in every
  row is wasted width. Replace it with one that shows a difference.
- **Paragraphs in cells.** Tables with long cells are unreadable in most
  notes apps. Use footnotes.
- **Guessing to fill the grid.** An empty cell marked `[?]` is honest. A
  plausible guess is a future wrong answer on the exam.
- **Mixing kinds of rows.** Rows must be comparable or the columns stop
  meaning anything.
- **No takeaways.** The chart is the means. The patterns it reveals are what
  the person needs to remember.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app.
