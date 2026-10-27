---
name: boxing-notes
description: Organizes notes with the boxing method, grouping related points into labeled boxes by theme so each box can be studied and reviewed on its own. Use when someone asks for the boxing method or boxed notes, takes notes on a tablet, wants notes that are easy to review in chunks, or has scattered notes that need grouping by theme.
---

# Boxing notes

The boxing method groups related notes inside a drawn box, one box per
theme, each with a short label. On paper or a tablet the boxes are literal
rectangles; the page ends up as a set of separate chunks rather than one long
stream. It works because each box is a unit of study: the eye can take in
one box, cover it, recall it, and move on. Boxes also make the boundaries
between topics visible, which a running list hides.

It is popular with tablet note-takers because boxes can be drawn, moved, and
resized. In Markdown, a box becomes a labeled section with a horizontal rule
between boxes, or a quote block for a box that should stand out. This skill
sorts notes into boxes and writes them that way.

## When to use it

- Someone has notes that wander across several themes and wants them
  grouped.
- They study in short sessions and want chunks they can review one at a
  time.
- They take notes on a tablet and want a layout to copy.
- They ask for the boxing method or "boxed notes".

For a strict hierarchy, use `outline-notes`. For self-test questions on each
chunk, `cornell-notes` adds cue questions. For a one-page cram sheet, use
`exam-revision-sheet`.

## What to ask for

- **The notes or source.** Start when you have them.
- **Whether they will draw the boxes by hand.** Default: Markdown sections.
  If they are copying onto a tablet, add a suggested page layout.

## How to do it

1. Read all the notes and list the themes. Three to eight boxes is the
   useful range for one lecture or chapter. Fewer, and the boxes are too big
   to review in one look; more, and they become a list again. Thin
   material may hold only two themes: use two boxes rather than splitting
   one to make up the count.
2. A box holds **one theme a person could explain in a minute**. If a theme
   has more than about seven points, split it into two boxes.
3. Give each box a **label** of two to five words that says what is inside.
   Add a one-line "In short" summary under the label: this is the line the
   person tries to recall before reading the box.
4. Put each point in exactly one box. If a point fits two, put it where it
   explains most, and add a short "see [Box]" pointer in the other.
5. Order boxes so the ones that build on others come later. Number them so
   the person can refer to "box 3".
6. Collect anything that fits no box in a final **Other** box rather
   than forcing it in. The person's own to-dos and questions ("look up",
   "check the slides") go there as `- [ ]` items, apart from the content.
7. If they are drawing by hand, suggest a layout after the note: two columns
   of boxes in box order (down the left, then the right), a star on the box
   that matters most (say, the likely exam topic), and space left in each box
   for additions after review.

## The format

```markdown
# [Topic]
[YYYY-MM-DD] · [Source]

---

### Box 1: [Label]
*In short: [one-line summary]*
- [Point]
- [Point]

---

### Box 2: [Label]
*In short: [one-line summary]*
- [Point]
- See Box 1 for [related point]

---

### Other
- [Point that fits no box]
```

## Example

Input: "bio ch 7 cell resp. glycolysis in cytoplasm, glucose to 2 pyruvate,
2 ATP net. krebs in mitochondria matrix. ETC inner membrane, most ATP here,
needs oxygen. no oxygen = fermentation, lactic acid in muscles. yeast makes
ethanol. overall ~30ish ATP per glucose"

```markdown
# Biology: Cellular respiration
2026-10-27 · Chapter 7

---

### Box 1: Glycolysis
*In short: glucose is split in the cytoplasm for a small ATP gain.*
- Happens in the cytoplasm.
- Glucose becomes 2 pyruvate.
- Net gain: 2 ATP.

---

### Box 2: Krebs cycle
*In short: the next stage, inside the mitochondria.*
- Happens in the mitochondrial matrix.
- [?] Inputs and outputs not in these notes.

---

### Box 3: Electron transport chain
*In short: where most of the ATP is made, and it needs oxygen.*
- On the inner mitochondrial membrane.
- Produces most of the ATP.
- Requires oxygen.

---

### Box 4: Without oxygen
*In short: with no oxygen, cells turn to fermentation.*
- Muscles make lactic acid.
- Yeast makes ethanol.

---

### Other
- Total yield is roughly 30 ATP per glucose.
```

## Pitfalls

- **Boxes that are too big.** A box with fifteen points cannot be reviewed
  in one look. Split it.
- **Labels that do not describe.** "Part 2" says nothing. The label should
  let the person guess the contents.
- **Forcing everything into a box.** An Other box is better than a box
  that is secretly two themes.
- **Duplicating points across boxes.** Duplicates drift apart when one is
  edited. Use a "see Box N" pointer instead.
- **Skipping the "In short" line.** It is what turns each box into a
  self-test.
- **An "In short" line firmer than its box.** If a point inside is marked
  `[?]` (a date the person doubted), the summary line leaves it out.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app.
