---
name: lecture-prep-notes
description: Plans a lecture with learning outcomes, timed segments, examples, questions for the room, likely confusions, and a reflection to fill in afterward. Use when a professor, lecturer, or teaching assistant wants to prepare a lecture, plan a class session, turn slides or a reading into a teaching plan, or rework last year's lecture notes.
---

# Lecture prep notes

Lecture prep notes are the plan a lecturer carries into the room: what students
should be able to do by the end, how the time is spent, which examples carry
the ideas, where to stop and ask the room something, and where students are
likely to get lost. They are different from slides. Slides are what the
students see; prep notes are what the lecturer needs to run the session well.

The structure follows how attention and learning work in a lecture hall.
Attention fades after a stretch of uninterrupted talk, so the plan breaks the
hour into segments with a change of activity between them. Outcomes come first
because they decide what can be cut when time runs short. A reflection section
at the end turns this year's plan into a better one next year.

## When to use it

- Preparing a new lecture from a reading, a textbook chapter, or a topic.
- Reworking last year's slides or notes for a new term.
- A teaching assistant planning a section or tutorial.
- Planning a guest lecture for an unfamiliar audience.

For K-12 or adult education lessons with guided and independent practice, use
`lesson-plan`. For notes from someone else's lecture, use `cornell-notes`. For
the reading behind the lecture, use `literature-notes`.

## What to ask for

- **The topic and material**: slides, a reading, last year's notes, or an
  outline. Default: plan from the topic; mark missing content `[?]` followed by what is missing.
- **Length, class size, and level.** Default: 50 minutes, a mid-sized
  undergraduate class, and say so.
- **Where it sits in the course**: what came before and what comes next.
  Default: ask, since it shapes what can be assumed.

Ask two or three questions at most. If they gave material and a length, start.

## How to do it

1. Write **two to four learning outcomes**, each starting with an
   observable verb (explain, calculate, compare, predict, critique). "Understand
   X" is not an outcome; "Explain why X happens when Y" is.
2. Note **prior knowledge** the lecture assumes, and one quick way to check it
   at the start.
3. Divide the time into **segments of roughly 10 to 15 minutes**, each tied to
   an outcome, with a running clock (0:00, 0:12, ...), filling about 80
   percent of the time. Put a change of mode between segments: a question,
   a short problem, a pair discussion, a demo.
4. For each segment, list the **key points** (at most three), the **example**
   that carries them, and the **board work or slide** reference. Prefer one
   concrete, worked example over three quick ones.
5. Write **questions for the room** in the words to be used aloud. Mix a
   quick check ("Hands up if...") with one real thinking question per
   segment, and note the answer you expect and how long to wait.
6. List **likely confusions**: misconceptions about this topic, terms that mean
   something different in everyday speech, steps students tend to skip. Pair
   each with how to address it.
7. Mark **what to cut** if time runs short and **what to add** if it runs
   long.
8. End with a **closing**: a one-minute summary tied to the outcomes, and a
   bridge to next class or the assignment.
9. Leave a **reflection** section with prompts, blank, to fill in after
   teaching. If they are reworking an old lecture and have last year's
   reflections, apply them and say where.

## The format

```markdown
# [Course] Lecture [n]: [Topic]
[YYYY-MM-DD] · [Length] · [Room or format] · [Class size and level]

## Learning outcomes
By the end, students can:
1. [Verb] [outcome]

## Assumes
- [Prior knowledge] · Check: [quick question]

## Plan
### 0:00 Opening ([minutes])
- [Hook, question, or recap]

### 0:05 [Segment title] ([minutes]) · Outcome [n]
- Key points: [point], [point]
- Example: [example]
- Ask: "[question]" (expect: [answer]; wait [seconds])

### [time] Closing
- [Summary tied to outcomes] · Next: [bridge]

## Likely confusions
- [Misconception] → [how to address it]

## If time runs short / long
- Cut: [item] · Add: [item]

## Materials
- [ ] [Slides, handout, demo kit]

## After the lecture
- What landed:
- What lost them:
- Questions students asked:
- Change next time:
```

## Example

Input: "intro stats, lecture 9, sampling distributions, 50 min, ~120
students. they did normal distribution last week. hypothesis tests next."

```markdown
# Intro stats Lecture 9: Sampling distributions
2026-10-27 · 50 min · ~120 students, intro level

## Learning outcomes
By the end, students can:
1. Explain the difference between a sample's distribution and the sampling
   distribution of the mean.
2. Predict how the spread of sample means changes with sample size.

## Assumes
- Normal distribution (last week). Check: "What share of data falls within
  one SD of the mean?"

## Plan
### 0:00 Opening (5 min)
- Ask: "If 30 of you each sampled 10 students' heights, would your means
  match?"

### 0:05 Many samples, many means (15 min) · Outcome 1
- Example: build a histogram of the room's sample means live.
- Ask: "What shape is this?" (expect: a hump in the middle; wait 10 s)

### 0:20 Sample size and spread (15 min) · Outcome 2
- Ask pairs: "What happens with n = 40?" (2 min)

### 0:35 Pairs report back (10 min) · Outcome 2
- Take three pair answers; sketch the narrower histogram for n = 40.

### 0:45 Closing
- Two outcomes in one minute. Next: using this to test a claim.

## Likely confusions
- Mixing up SD of the data and standard error → two plots side by side.

## If time runs short / long
- Cut: the pairs report back (0:35) · Add: [?]

## After the lecture
- What landed:
- What lost them:
- Questions students asked:
- Change next time:
```

## Pitfalls

- **Outcomes that cannot be observed.** "Appreciate" and "understand" give no
  way to tell whether the lecture worked.
- **Fifty minutes of content for a fifty-minute slot.** Plan core content for
  about 80 percent of the time, and mark the rest as the first to cut.
- **Questions with no wait.** Note the wait time; silence is the room thinking.
- **Inventing course facts.** Do not invent dates, readings, or assignment
  details. Mark them `[?]`.
- **Skipping the reflection.** Without it, next year starts from scratch.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Keeping each lecture's note in a course folder means next year's prep
starts from this year's reflections.
