---
name: exam-revision-sheet
description: Compresses a course or unit into a one-page cram sheet of formulas, definitions, dates, key facts, and the classic mistakes to avoid. Use when a student asks for a cheat sheet, cram sheet, revision sheet, review sheet, crib sheet, formula sheet, or "everything on one page" for the night before an exam, or needs to fit an allowed reference card.
---

# Exam revision sheet

A revision sheet is a single page that holds what has to be recalled exactly:
formulas, definitions, dates, names, rules, and the handful of mistakes the
student keeps making. It is not for learning a topic for the first time. It is
for the last read before the exam, or for the reference card some exams allow.

The value is in the cutting. Writing it forces the decision about what really
matters, and a sheet that runs to three pages has skipped that decision. The
test for every line: would getting this wrong cost marks, and is it hard to
reconstruct under pressure? If not, it goes.

## When to use it

- The night before, or the morning of, an exam.
- The exam allows a formula card or one page of notes and space is fixed.
- The student has a full study guide or Cornell notes and wants the essentials
  only.
- They ask for a "cheat sheet", "cram sheet", or "formula sheet".

For a full plan with practice and a schedule, use `study-guide`. For flash
cards that spread review over days, use `spaced-repetition-cards`. To quiz
themselves section by section, use `cornell-notes`.

## What to ask for

- **The material.** Notes, slides, a review sheet, a textbook chapter.
- **Size limit**, if the sheet is going into the exam room (one side, both
  sides, an index card). Default: one printed page.
- **What they always get wrong**, if they know. Default: pull it from quiz
  corrections or `[?]` marks in the notes, and leave the section short if
  there is no evidence.

If they gave you the material, start.

## How to do it

1. Read everything, then sort content into what must be recalled **exactly**
   (a formula, a date, a definition the marker will compare word for word) and
   what can be **reasoned out** (a process the student understands). Only the
   first kind earns space, plus one-line memory hooks for the second.
2. Group by topic, with the most heavily tested topic first. Within a topic,
   order formulas from general to special case.
3. Write each **formula** with every variable defined once and units where the
   source gave them. Add the condition it holds under ("constant
   acceleration only", "for small angles") when the source states it, because
   using a formula outside its conditions is a top source of lost marks.
4. Write **definitions** in the course's wording when precision is graded.
   Bold the key words a marker looks for. When the source only names something
   ("Newton 1-3") without stating it, write the standard statement and mark it
   `(added)` so the student checks it against the course; units and values the
   source did not give get the same mark.
5. Put **dates and sequences** as a compact timeline, not prose.
6. Write the **classic mistakes** as short "Not X, but Y" lines: sign errors,
   unit slips, commonly confused terms, the trap a past quiz set.
7. Compress hard. Use symbols, abbreviations the student already uses, and
   fragments. Cut examples unless one example is the fastest way to recall a
   rule.
8. Check the length against the limit (roughly 60 to 80 short lines for a
   printed page, 15 to 25 for one side of an index card). If it is over, cut
   the lowest-weight topic's detail before shrinking anything else. For a
   two-sided limit, mark the split with **Front** and **Back** lines.

## The format

```markdown
# [Course]: [Exam] revision sheet

## [Topic 1]
- `[formula]` · [variables] · [condition]
- **[Term]**: [definition, key words bold]

## [Topic 2]
- [Fact]

## Dates and sequences (drop if none)
- [Year]: [event] → [Year]: [event]

## Classic mistakes
- Not [wrong], but [right].

## Hooks (drop if none)
- [One-line memory aid]
```

## Example

Input: "physics 1 final. kinematics (const accel): v=v0+at, x=x0+v0t+1/2at^2,
v^2=v0^2+2a(x-x0). newton 1-3, F=ma, W=mg. energy KE=1/2mv^2, PE=mgh near
surface, conserved w/o friction. I always mess up signs on g and forget KE
has the 1/2. also mixing up mass and weight."

```markdown
# Physics 1: Final revision sheet

## Kinematics (constant acceleration only)
- `v = v0 + at`
- `x = x0 + v0·t + ½at²`
- `v² = v0² + 2a(x - x0)`
- v0, v: initial and final velocity · a: acceleration · t: time · x0, x:
  initial and final position
- Pick +up or +down once. With +up, a = -g. (added)

## Newton's laws (check the statements against your course's wording)
- **1st**: no **net** force, no change in velocity. (added)
- **2nd**: `ΣF = ma`, a vector sum, per axis. (added)
- **3rd**: equal and opposite, on **different** bodies. (added)
- Weight `W = mg`. Units: weight in N, mass in kg. (added)

## Energy
- `KE = ½mv²` · `PE = mgh` (near Earth's surface)
- No friction: `KE + PE` constant.

## Classic mistakes
- Not `KE = mv²`, but `½mv²`.
- Not a = +g with +up, but a = -g.
- Not "mass = weight", but W = mg.
- Not 3rd-law pairs on one body, but on two. (added)
```

## Pitfalls

- **Copying the notes in a smaller font.** If a line would not be missed in
  the exam, cut it.
- **Formulas without conditions.** A bare formula invites using it where it
  does not apply.
- **Undefined symbols.** At 8 a.m. the student will not remember what `k`
  meant in this chapter.
- **Unmarked outside material.** Use the course's notation and values.
  Anything supplied from outside the notes is marked `(added)`; anything
  missing is `[?]`.
- **No mistakes section.** It is often the most valuable part of the page.
- **Copying an error from the notes.** A formula wrong as written (a dropped
  minus in `pH = -log[H⁺]`) is fixed on the sheet with a short flag saying
  what the notes had, never copied or corrected silently.
- **Checking an exam's rules for them.** Say what size the sheet is; the
  student confirms what the exam allows.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app.
