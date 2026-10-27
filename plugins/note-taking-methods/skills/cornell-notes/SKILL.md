---
name: cornell-notes
description: Turns a lecture, reading, or talk into Cornell notes, with cue questions, notes under each, and a summary at the bottom. Use when someone asks for Cornell notes, wants notes they can quiz themselves from, or has one lecture, chapter, transcript, or set of slides to turn into self-test notes.
---

# Cornell notes

Cornell notes split a page into three parts: a wide column of notes taken
during the lecture or reading, a narrow column of cues (questions and key
terms) written afterward, and a short summary at the bottom. The system comes
from Walter Pauk at Cornell University. It works because the cue column turns
the notes into a self-test: cover the right side, read a question on the left,
and answer it from memory.

In Markdown there is no real left column, so this skill writes each cue as a
question with its notes directly under it. The effect is the same: the
questions can be read on their own, and the answers sit right below.

## When to use it

- Someone pastes messy lecture notes, a transcript, or slides and wants study
  notes.
- They are reading a textbook chapter or paper and want to remember it.
- They are preparing for an exam and want something to quiz themselves with.
- They ask for "Cornell notes" by name.

For a quick one-page cram sheet, `exam-revision-sheet` fits better. For flash
cards, use `spaced-repetition-cards`. For notes meant to grow into a linked
personal knowledge base, use `zettelkasten`. For grouping points by theme
rather than hierarchy, use `boxing-notes`.

## What to ask for

- **The source.** Raw notes, a transcript, slides, a chapter, or a link you can
  read. If they only give a topic with no source, ask for the material, or
  offer to write notes from general knowledge and label them as such.
- **The course or purpose**, if not obvious. Default: infer it from the source.
- **The level.** Default: match the source (an intro lecture stays at intro
  level).

Do not ask more than this. If they pasted material, start.

## How to do it

1. Read the whole source first. Find the five to ten ideas the lecture or
   chapter is really about. These become the sections.
2. For each idea, write the **notes**: short bullet points in plain words,
   keeping definitions, formulas, dates, names, and examples exactly as the
   source gave them. Shorten repetition, never content. If the speaker
   corrects an earlier statement, keep the correction, not the slip.
3. Write the **cue** for each section as a question that the notes answer. Good
   cues ask "why" and "how", not only "what": "Why does the Fed raise rates
   when inflation rises?" beats "Interest rates".
4. Add key terms as their own list when the source defines them.
5. Write the **summary**: three to five sentences, in plain words, that someone
   could read the night before the exam and recall the shape of the whole
   lecture. It connects the ideas; it does not list them.
6. Note anything the source left unclear as `[?]` with a short question, so the
   person can ask in the next class.
7. Put course admin the speaker mentions (a moved quiz, a reading, a
   deadline) in a **Class admin** line at the end, with dates written out.
   It is never a cue.

## The format

```markdown
# [Course or source]: [Topic]
[YYYY-MM-DD] · [Lecture, chapter, or source]

## [Cue question 1]?
- [Note]
- [Note]
  - [Supporting detail or example]

## [Cue question 2]?
- [Note]

## Key terms
- **[Term]**: [definition as the source gives it]

---

## Summary
[Three to five sentences tying the ideas together.]

## Open questions
- [?] [Anything unclear or missing in the source]

**Class admin:** [deadlines, readings, or changes announced, if any]
```

## Example

Input: "intro econ lec 4. supply/demand. demand curve slopes down bc people buy
less when price up. supply slopes up. eq where they cross. shift vs movement
along!! price ceiling = max price, causes shortage e.g. rent control"

```markdown
# Intro economics: Supply and demand
2026-10-27 · Lecture 4

## Why does the demand curve slope down?
- As price rises, people buy less of a good.

## Why does the supply curve slope up?
- As price rises, producers are willing to sell more. (added)

## What sets the market price?
- Equilibrium: the price where the supply and demand curves cross.

## What is the difference between a shift and a movement along a curve?
- A change in the good's own price is a movement along the curve. (added)
- [?] What causes a shift was not in these notes. Check the slides.

## What happens under a price ceiling?
- A price ceiling is a maximum price.
- It causes a shortage.
  - Example: rent control.

---

## Summary
Prices settle where the amount people want to buy matches the amount producers
want to sell. Demand falls and supply rises as price goes up, and the crossing
point is the equilibrium. A price ceiling sets a maximum price, and it causes
a shortage, as rent control shows.

## Open questions
- [?] What shifts a curve, as opposed to moving along it?
```

## Pitfalls

- **Cues that are just headings.** "Supply" cannot be answered. Write a
  question.
- **Copying the source.** Notes in plain, short words stick; a transcript
  pasted under headings does not.
- **A summary that lists topics.** "This lecture covered supply, demand, and
  ceilings" teaches nothing. Explain how the ideas connect.
- **Filling gaps from general knowledge without saying so.** If you add context
  the source did not give, mark it "(added)" so the person knows what was said
  in class and what was not.
- **Too many sections.** Ten cues for a 50-minute lecture is plenty. Merge
  small points under a bigger question.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A folder per course keeps a term's worth of Cornell notes easy to review.
