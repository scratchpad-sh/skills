---
name: study-guide
description: Builds a study guide for a unit or course, with topics ranked by weight, what to know for each, practice questions, and a schedule up to the exam. Use when a student preparing for a whole unit or course (not a single lecture) has a syllabus, lecture notes, slides, a review sheet, or past quizzes and asks for a study guide, a study plan, help preparing for a midterm or final a week or more away, or "what should I study first".
---

# Study guide

A study guide is a plan for an exam, not a copy of the notes. It answers three
questions a student actually has: what is going to be on it, what exactly do I
need to be able to do for each part, and when am I going to study each part
before the date. A good one is ranked: the topics that carry the most marks and
the ones the student is weakest on come first, so the limited hours go where
they count.

The evidence for weight is in the material the person gives you: the
syllabus's grading breakdown, how many lectures a topic took, what the
professor said would be on the exam, and what past quizzes asked. This skill
reads that evidence and says where each ranking came from.

## When to use it

- A midterm or final is coming and the student has a pile of material and no
  plan.
- They have a review sheet or exam outline and want it turned into something
  they can work through.
- They have past quizzes and want to know what patterns to expect.
- They ask for a "study guide", "study plan", or "what to study first".

For a one-page summary to read the night before, `exam-revision-sheet` fits
better. For flash cards from the guide, use `spaced-repetition-cards`. To turn
one lecture into self-test notes, use `cornell-notes`.

## What to ask for

- **The material.** Syllabus, notes, slides, review sheet, past quizzes or
  exams. The more of these, the better the ranking.
- **The exam date and format.** Multiple choice, short answer, problems, essay,
  open or closed book. Default: ask, because the format changes what "know it"
  means.
- **Hours available**, roughly per day. Default: one to two hours on weekdays,
  more on weekends, and say so.
- **Weak spots**, if they know them. Default: infer from low quiz scores or
  topics they flagged with confusion in their notes.

Ask at most two or three of these at once. If the material and the date are
there, start.

## How to do it

1. List every topic the exam can cover, using the syllabus or review sheet as
   the backbone. If neither exists, build the list from lecture headings.
2. Rank each topic by **weight** (High, Medium, Low) and give the reason in a
   few words: "3 lectures, 2 of 5 quiz questions", "prof said 'this will be on
   the final'", "one slide only". Never guess a percentage the syllabus did not
   give.
3. Mark each topic's **readiness** from the evidence: quiz scores, `[?]` marks
   in their notes, or what they told you. Order the guide by weight first and
   weakness second.
4. For each topic, write **what to know** as abilities, not subjects: "Derive
   the quadratic formula by completing the square", "Explain why the Treaty of
   Versailles weakened the Weimar Republic", "Draw and label a neuron". Match
   the exam format: problem exams need "solve", essay exams need "argue" and
   "compare".
5. Write **practice questions** for each High and Medium topic, two to four
   each, in the exam's own format. Where a past quiz exists, model the
   questions on its style and difficulty. Put answers or answer outlines in a
   separate section at the end, so the questions can be attempted cold. With
   no notes for a topic, keep its section to a line or two, say in one line
   under Answers that they need the notes, and offer to fill both in.
6. Pull out **patterns from past quizzes**: question types that repeat, topics
   that were tested every time, mistakes the student made more than once.
7. Build the **schedule** backward from the exam date. Interleave topics rather
   than doing one per day. Put the heaviest, weakest topics early so there is
   time for a second pass. Leave the last day for a timed practice run and
   light review, not new material. Fit the hours they gave you. If there is
   not time for every topic, say which Low topics to skim or skip, and why.
8. List what is **missing**: lectures with no notes, a topic on the syllabus
   with no material, a quiz they did not share.

## The format

```markdown
# [Course]: Study guide for [exam]
Exam: [date, time] · Format: [format] · Covers: [units or weeks]

## Topics by priority
| Topic | Weight | Why | Readiness |
|---|---|---|---|
| [Topic] | High | [evidence] | [Weak / OK / Solid] |

## [Topic 1] (High)
**Be able to:**
- [Ability, as a verb]
- [Ability]

**Practice:**
1. [Question in exam format]
2. [Question]

## [Topic 2] (Medium)
...

## Patterns from past quizzes
- [Pattern]

## Schedule
- [ ] **[YYYY-MM-DD]** ([hours]): [Topic], [task]; [second topic], [task]; recall [earlier topic]
- [ ] **[YYYY-MM-DD]**: Timed practice exam, review misses

## Answers
1. [Answer or outline]

## Gaps
- [?] [What is missing and where to get it]
```

## Example

Input: "bio 110 midterm fri oct 30, multiple choice + 2 short answer. syllabus
says units 1-3: cells, membranes, cellular respiration. respiration was 4
lectures. quiz 2 I got 5/10, all the ATP count ones wrong. 1.5 hrs a night."

```markdown
# BIO 110: Study guide for the midterm
Exam: 2026-10-30 · Format: multiple choice + 2 short answer · Covers: units 1-3

## Topics by priority
| Topic | Weight | Why | Readiness |
|---|---|---|---|
| Cellular respiration | High | 4 lectures, quiz 2 | Weak (5/10, ATP counts) |
| Membranes | Medium | Unit 2; no weight given (default) | [?] no quiz yet |
| Cells | Medium | Unit 1; no weight given (default) | [?] |

## Cellular respiration (High)
**Be able to:**
- Name the stages in order and where in the cell each happens.
- Count the ATP made at each stage, as your lecture gave the figures.

**Practice:**
1. Multiple choice style: which stage produces the most ATP? Then say why.
2. Short answer: trace one glucose molecule from glycolysis to the
   electron transport chain.

## Schedule
- [ ] **2026-10-27** (1.5 h): Respiration stages, redo quiz 2, then Cells
- [ ] **2026-10-28** (1.5 h): Membranes, then respiration ATP counts again
- [ ] **2026-10-29** (1.5 h): Timed mixed practice set, review misses

## Answers
1. [?] Answer from your lecture's ATP figures; the notes were not shared.
2. [?] Outline the stages in the order your lecture gave them, with where
   each happens; the notes were not shared.

## Gaps
- [?] No notes or quizzes for units 1 and 2 were shared, so readiness there is
  unknown.
```

## Pitfalls

- **A guide that is just the notes reorganized.** Every topic needs abilities
  and practice, or it is a summary.
- **Ranking without evidence.** Say why each topic is High. If nothing says,
  rank it Medium and flag it.
- **Inventing facts to fill a topic.** Practice questions can be new; the
  content they test must come from the course material. Mark anything added
  from general knowledge "(added)".
- **Cramming new material the last day.** The last session is for timed
  practice and the mistakes it shows.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Keeping the schedule as checkboxes lets the student tick off sessions as
they go.
