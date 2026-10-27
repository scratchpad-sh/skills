---
name: lesson-plan
description: Writes a timed lesson plan with an objective, materials, warm-up, direct instruction, guided and independent practice, differentiation, and assessment. Use when a K-12 teacher, adult educator, tutor, or student teacher asks for a lesson plan, wants to plan a class period, needs a plan for a sub, or has a standard or topic to teach.
---

# Lesson plan

A lesson plan lays out one class period from the first minute to the last: the
one thing students should be able to do by the end, and the sequence that gets
them there. The sequence most teachers use moves responsibility from teacher to
student, often summed up as "I do, we do, you do": the teacher models, the
class practices together with support, and students then work on their own
while the teacher checks who has it.

A plan that works in a real room is specific where it matters. The objective
can be checked. The timing adds up to the period. The guided practice is
written out, not "practice together". Differentiation names actual changes for
actual groups. And the assessment at the end tells the teacher what to do
tomorrow.

## When to use it

- Planning tomorrow's class or a week of lessons.
- A student teacher writing plans for a placement or an observation.
- Leaving plans for a substitute.
- An adult education or ESL instructor planning a session.
- Turning a standard, a textbook section, or a topic into a period's work.

For a university lecture, use `lecture-prep-notes`. For a unit's worth of
study material for students, use `study-guide`. For a reusable template of
their school's format, use `note-template-maker`.

## What to ask for

- **Topic or standard**, and **grade or level**.
- **Period length.** Default: 50 minutes.
- **The class**: size, and any needs to plan for (English learners, IEP or 504
  accommodations, students working above level). Default: plan one support and
  one extension, and say so.
- **Materials or curriculum** they must use. Default: suggest common classroom
  materials and mark them `(proposed)`.

Ask two or three at most. Grade, topic, and length are enough to start.

## How to do it

1. Write **one objective** in student-facing, measurable terms: "Students will
   be able to [verb] [content] [condition or criterion]." Add the standard code
   if they gave one; never invent a code.
2. Add a **success criterion** a student could check themselves against: "I
   can find the main idea and two supporting details in a paragraph."
3. List **materials**, including copies, tech, and setup.
4. **Warm-up** (about 5 minutes): activates prior knowledge or reviews
   yesterday, and gets everyone working at once.
5. **Direct instruction** (I do): the teacher models the skill, thinking aloud.
   Write the example the teacher will use and the key vocabulary. Keep it short;
   it is usually the part that runs over. In a plan for a substitute, make
   this something a non-specialist can deliver (a worked example on a
   handout, a short reading), and add **Notes for the sub**: attendance and
   seating chart, where to leave work, and who to ask for help. Quotations,
   page numbers, or problems you take from a text they did not paste are
   marked `(added)` for the teacher to check before anything is printed.
6. **Guided practice** (we do): two or three problems or tasks done together
   or in pairs, with the check-for-understanding questions written out and what
   to do if many students miss them.
7. **Independent practice** (you do): the task, how much is enough, and what
   early finishers do.
8. **Differentiation**: specific supports (sentence frames, a worked example,
   fewer items, a partner) and extensions (a harder variant, a "why" question).
   Name the accommodation (extended time, a reader), never the student or
   a diagnosis, even if they gave one; who gets it stays on the teacher's
   own roster.
9. **Assessment**: an exit ticket or quick check tied directly to the
   objective, with what a correct answer looks like.
10. **Closure** (2 to 3 minutes, plus the exit ticket): students say or
    write what they learned.
11. Put a **minute count** on every part and make sure the total matches the
    period. Leave a short buffer for transitions.

## The format

```markdown
# [Subject] [Grade]: [Lesson title]
[YYYY-MM-DD] · [Period length] · Standard: [code or "none given"]

**Objective:** Students will be able to [verb] [content] [criterion].
**Success criterion:** I can [student-facing statement].

## Materials
- [Item]

## Plan
| Time | Part | What happens |
|---|---|---|
| [min] | Warm-up | [task] |
| [min] | I do | [modeling] |
| [min] | We do | [guided practice] |
| [min] | You do | [independent task] |
| [min] | Closure | [reflection and exit ticket] |

## Direct instruction
- Model: [example]
- Vocabulary: [terms]

## Guided practice
1. [Task] · Check: "[question]" · If many miss it: [reteach move]

## Independent practice
- [Task] · Enough is: [amount] · Early finishers: [extension]

## Differentiation
- Support: [specific change]
- Extension: [specific change]

## Assessment
- Exit ticket: [question] · Correct looks like: [answer]

## Notes for the sub (sub plans only)
- Attendance and seating chart: [where] · Leave work: [where] · Help: [who]

## Notes for next time
- [Blank, to fill in after teaching; leave out in a sub plan]
```

## Example

Input: "4th grade math, equivalent fractions, 45 min, 24 kids, 3 ELLs, a few
already fluent. we have fraction strips."

```markdown
# Math Grade 4: Equivalent fractions
2026-10-27 · 45 min · Standard: none given

**Objective:** Students will be able to generate two fractions equivalent to
a given fraction using fraction strips, with 3 of 4 correct.
**Success criterion:** I can show two fractions that equal 1/2 with strips.

## Plan
| Time | Part | What happens |
|---|---|---|
| 5 | Warm-up | Shade 1/2 of a rectangle three different ways |
| 7 | I do | Model 1/2 = 2/4 = 4/8 with strips, thinking aloud |
| 12 | We do | Pairs find equivalents for 1/3 and 3/4 |
| 13 | You do | Worksheet: 4 fractions, find two equivalents each (proposed) |
| 5 | Closure | Exit ticket |
| 3 | Buffer | Transitions: strips out, into pairs, worksheets handed out |

## Guided practice
1. Find a fraction equal to 1/3. Check: "How do you know they are equal?"
   If many miss it: line strips up at the left edge together.

## Differentiation
- Support (ELLs): word wall with "equivalent", "numerator", "denominator";
  sentence frame "___ is equal to ___ because ___".
- Extension: find an equivalent without strips and explain the pattern.

## Assessment
- Exit ticket: Write two fractions equal to 2/3. Correct: e.g. 4/6, 6/9.
```

## Pitfalls

- **Objectives that describe activities.** "Students will do a worksheet" is a
  task, not a goal.
- **Timing that does not add up.** Sum it before handing it over.
- **A long "I do".** Students learn in the "we do"; cut modeling first.
- **Vague differentiation.** "Support struggling students" is not a plan.
- **Inventing standards or curriculum details.** Use what they gave; mark the
  rest `[?]`.
- **Personal details about students.** Plan for needs, never name a student's
  diagnosis in a plan a sub or observer will read.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A folder per unit keeps a sequence of lessons in teaching order.
