---
name: sketchnote-planner
description: "Plans a sketchnote page as a text plan to draw from by hand: layout, title, hierarchy, icons, containers, and connectors. Use when someone wants to make a sketchnote or visual notes, asks how to lay out a hand-drawn page, or wants their notes turned into a plan they can draw on paper or a tablet."
---

# Sketchnote planner

A sketchnote is a page of hand-drawn notes that mixes words, simple pictures,
boxes, and arrows. Mike Rohde popularized the term and the practice. People
make them because the act of choosing what to draw forces them to pick the
few ideas that matter, and a finished page is easy to remember: the memory
of where something sat on the page, and what was drawn next to it, helps
recall.

The hard part for most people is not drawing but planning: what goes on the
page, how big, and where. This skill does that planning in words. It does not
draw. It hands the person a plan they can follow with a pen: a layout, the
title treatment, what goes in each zone, which simple icons to draw, and how
to connect the parts.

## When to use it

- Someone wants to turn a talk, chapter, podcast, or their own notes into a
  sketchnote.
- They are about to sketchnote a live talk and want a layout ready.
- They are new to sketchnoting and want a plan that keeps the page from
  getting crowded.
- They ask for visual notes or a sketchnote layout.

For a mind map in text or Mermaid, use `mind-map-notes`. For notes about
causes and effects with arrows, use `flow-notes`. For a typed one-page
summary, use `exam-revision-sheet` or `summary-writer`.

## What to ask for

- **The content**: notes, a transcript, a chapter, or the talk's agenda if
  they are planning ahead of a live talk.
- **The page**: paper size and orientation, or a tablet. Default: one
  landscape page, letter or A4.
- **Their comfort with drawing.** Default: beginner, so icons stay to simple
  shapes anyone can draw in ten seconds.

## How to do it

1. Pick the **five to seven ideas** that deserve space on the page. A
   sketchnote that tries to hold everything becomes a crowded page of small
   writing. Everything else is left out on purpose, and listed under "Left
   off the page" so they can add it back. Planning ahead of a live
   talk from its agenda, make one zone per agenda item with a container and
   heading only, and leave the words to fill in live.
2. Choose a **layout** that matches the content's shape:
   - **Linear** (rows, left to right, top to bottom) for a talk that goes
     point by point.
   - **Radial** (title in the center, ideas around it) for one topic with
     several facets.
   - **Path** (a winding road or numbered steps) for a process or story.
   - **Columns** for a comparison.
   - **Popcorn** (ideas scattered where they fit) for a talk that jumps
     around; plan only the title and leave space.
   On a portrait page, rows or a top-to-bottom path fit best.
3. Set a **hierarchy** of three text sizes: the title (biggest, block
   letters), section headings (medium, in a container), and body (small,
   short phrases). Say which text goes at which size.
4. For each idea, give a **container** (box, banner, cloud, speech bubble,
   circle) and an **icon**: a simple drawing built from basic shapes
   (lightbulb for an idea, clock for time, stick figure for a person, arrow
   target for a goal). Describe how to draw it in a few strokes if it is not
   obvious.
5. Plan **connectors**: arrows for sequence or cause, dotted lines for loose
   links, numbers for order.
6. Plan a **limited palette**: black for text, one gray for shadows, and one
   accent color for the most important idea only.
7. Place zones in reading order and leave about a fifth of the page empty,
   saying where: live talks always run longer than expected.
8. Give a **drawing order**: title and containers first, then words, then
   icons, then connectors, then shading and color last. On a tablet, put
   each stage on its own layer.

## The format

```markdown
# Sketchnote plan: [Title]
[Page size and orientation] · [Layout type]

## Title
- Text: "[Title]" in [style], [position]
- Extras: [speaker name, date, small icon]

## Zones (in reading order)
1. **[Idea]**: [position]
   - Container: [shape]
   - Words: "[short phrase]"
   - Icon: [what to draw, in simple shapes]
2. **[Idea]**: [position]
   - ...

**Leave empty:** [where the spare space is]

**Left off the page:** [ideas cut, so they can add one back]

## Connectors
- [Zone] → [Zone]: [arrow style and meaning]

## Color
- Accent ([color]) on: [one element]

## Drawing order
1. [Step]
```

## Example

Input: notes from a talk, "Sleep and learning": sleep consolidates
memories; REM and deep sleep do different jobs; all-nighters hurt recall;
naps help; keep a regular schedule.

```markdown
# Sketchnote plan: Sleep and learning
Landscape, letter · Path layout

## Title
- Text: "SLEEP & LEARNING" in block capitals, top left
- Extras: small crescent moon beside it, date under it

## Zones (in reading order)
1. **Sleep saves memories**: start of the path, left
   - Container: cloud
   - Words: "Sleep = save button"
   - Icon: a brain with a floppy-disk square on it
2. **Two kinds of sleep**: second stop
   - Container: two side-by-side boxes
   - Words: "Deep" and "REM" with "[?] what each does" under each
   - Icon: a wavy line (deep) and an eye (REM)
3. **All-nighters**: third stop, path dips down
   - Container: banner
   - Words: "All-nighter = less recall"
   - Icon: a coffee cup and a clock at 3:00
4. **Naps help**: fourth stop
   - Container: circle
   - Words: "Naps help"
   - Icon: a bed drawn as a rectangle with a pillow
5. **Regular schedule**: end of the path, right
   - Container: box with a drop shadow
   - Words: "Same bedtime, every night"
   - Icon: a calendar grid with check marks

**Leave empty:** a strip along the bottom, for a takeaway or late additions.

## Connectors
- A dotted winding path joins zones 1 to 5, numbered stops

## Color
- Accent (blue) on: the "save button" cloud only

## Drawing order
1. Title and containers, then words, icons, the dotted path, and blue last
```

## Pitfalls

- **Planning too much text.** Body text is short phrases, not sentences. If
  a zone needs a paragraph, cut it to the one line worth remembering.
- **Icons that need artistic skill.** Every icon should be buildable from
  circles, squares, triangles, and lines.
- **Color everywhere.** One accent color makes the key idea stand out. Five
  colors make nothing stand out.
- **No empty space.** A full plan leaves no room for what the speaker says
  next.
- **Inventing content for empty zones.** Mark gaps `[?]` in the plan rather
  than filling them from general knowledge.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Suggest they attach a photo of the finished page to the same note.
