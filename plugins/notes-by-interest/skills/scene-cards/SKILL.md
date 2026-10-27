---
name: scene-cards
description: Turns a draft, outline, or list of scene ideas into scene cards, one per scene, with POV, goal, conflict, outcome, what changes, and where it sits in the plot. Use when a fiction writer wants to see the shape of a draft, reorder scenes, find scenes that do nothing, plan a revision, or asks for scene cards, index cards, or a scene list.
---

# Scene cards

Scene cards put each scene of a story on its own card so the writer can see
the whole book at once and move pieces around. Novelists and screenwriters
have used index cards on a corkboard for decades. Each card answers the same
few questions: whose scene is it, what do they want, what stands in the way,
how does it end, and what is different afterward.

The core test comes from Dwight Swain's scene and sequel model, popularized
for novelists in *Techniques of the Selling Writer*: a scene has a goal, a
conflict, and a disaster (or at least an outcome that is not simply "yes").
A card that cannot fill in "what changes" marks a scene that may not be
earning its place.

## When to use it

- A writer has a messy first draft and wants to see its structure.
- They want to reorder scenes or move a subplot without rereading the book.
- They suspect the middle sags and want to find the scenes that stall.
- They are outlining and want to plan scene by scene before drafting.
- They ask for scene cards, index cards, a beat sheet by scene, or a scene
  list.

For the reference facts of the world and cast, `story-bible` fits better. For
drafting one scene in full, use `fiction-scene`. For a big-picture critique of
the manuscript, use `developmental-edit`.

## What to ask for

- **The material.** Draft chapters, a synopsis, an outline, or a list of scene
  ideas. Default: work from whatever they gave.
- **Plot structure they use**, if any (three acts, Save the Cat, Hero's
  Journey, their own). Default: three acts, with the position given as a
  percentage of the way through the book when the material shows the whole
  length; otherwise `[?]`.
- **POV setup**, if not clear: single first person, rotating close third, and
  so on.

If they gave material, start.

## How to do it

1. Split the material into scenes. A new scene starts when time jumps, the
   place changes, or the POV switches. A chapter may hold one scene or five.
2. For each scene, fill the card from what the text shows:
   - **POV:** whose eyes we are in.
   - **Goal:** what the POV character wants in this scene, concrete enough to
     succeed or fail at ("get the key from his coat", not "find the truth").
   - **Conflict:** who or what is in the way.
   - **Outcome:** how it ends. Mark it **yes**, **no**, **yes, but**, or
     **no, and**. "Yes, but" and "no, and" pull the reader forward; a clean
     "yes" usually ends tension.
   - **What changes:** the value that turned, in a few words (trust to
     suspicion, safe to hunted). If nothing turns, write "nothing" plainly.
   - **Plot position:** act, beat, or percentage, and which thread it serves
     (main plot, a subplot by name). A percentage is words before the scene
     over the total; when you split a chapter evenly to place a scene, say
     the figures are estimates. A flashback's position is its place in the
     book; its story date goes on the time line.
   - **Two POVs in one scene:** give each character's goal on its own line,
     and note the switch in the structure read as a fact, not a fault.
3. For reflective scenes (Swain's "sequel": reaction, dilemma, decision),
   write the card with those three lines instead of goal and conflict. They
   are legitimate, but they should be short and end in a decision.
4. Add a **setting and time** line and a **word count** if the draft gives
   one; both help spot pacing problems.
5. After the cards, write a short **structure read**: scenes with no change,
   long runs in one POV or one thread, a subplot that vanishes for a third of
   the book, two scenes doing the same job. Suggest moves as options, not
   decisions.
6. Do not invent goals the text does not show. If a scene's goal is unclear,
   write `[?]`; that is itself a revision note. No soft guesses
   ("presumably", "likely"): if the text does not show it, it is `[?]`. A
   character's disbelief or mood is not a conflict; if nothing stands in
   the way, write that plainly.

## The format

```markdown
# Scene cards: [Title]
[Draft number or stage] · [YYYY-MM-DD]

### [Number]. [Short scene name]
- **Chapter / place / time:** [Ch. n], [setting], [when]
- **POV:** [character]
- **Goal:** [concrete want]
- **Conflict:** [obstacle]
- **Outcome:** [yes / no / yes, but / no, and]: [what happened]
- **What changes:** [from] to [to]
- **Plot position:** [act or %], [thread]
- **Words:** [count, if known]

---

## Structure read
- [Observation with scene numbers]
- **Possible moves:** [option, as a suggestion]
```

## Example

Input: "ch 2: June breaks into her late dad's office to find the will, her
stepbrother catches her, she lies and says she wanted a photo. ch 3: June at
the diner thinking about it, decides to call the lawyer."

```markdown
# Scene cards: [?] (title not given)
Draft [?] · 2026-10-27

### 1. The office
- **Chapter / place / time:** Ch. 2, her father's office, [?] time
- **POV:** June
- **Goal:** find her father's will
- **Conflict:** her stepbrother catches her
- **Outcome:** [?]: she is caught and lies that she came for a photo.
  Whether she found the will is not stated, so "yes, but" or "no, and" is
  open.
- **What changes:** secret to suspected
- **Plot position:** [?] (total length not given), main plot

### 2. The diner (sequel)
- **Chapter / place / time:** Ch. 3, the diner, [?]
- **POV:** June
- **Reaction:** thinking over the office scene
- **Dilemma:** [?] not stated in these notes
- **Decision:** call the lawyer
- **What changes:** stuck to acting
- **Plot position:** [?], main plot

---

## Structure read
- Both scenes are in June's POV; the stepbrother's suspicion has no scene of
  its own yet.
- **Possible moves:** if the diner scene runs long, the decision could close
  scene 1 instead.
```

## Pitfalls

- **Summaries instead of cards.** "June goes to the office" is a plot
  summary. The card needs her goal and what stopped her.
- **Abstract goals.** "Wants to be free" cannot fail in one scene. Find the
  concrete thing she is trying to do right now.
- **Every outcome a yes.** If most cards end in a clean success, say so in the
  structure read; that pattern explains a flat middle.
- **One card per chapter.** Chapters often hold several scenes; splitting
  them is where most of the insight comes from.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Keeping a separate set of cards per draft lets the writer compare the
shape of the book across revisions.
