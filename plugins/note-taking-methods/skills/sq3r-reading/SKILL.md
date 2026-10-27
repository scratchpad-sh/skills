---
name: sq3r-reading
description: Guides a chapter through SQ3R (Survey, Question, Read, Recite, Review), with notes for each stage from survey to review plan. Use when someone asks for SQ3R, has a textbook chapter to study, wants to read more actively, or keeps finishing chapters without remembering them.
---

# SQ3R reading notes

SQ3R is a five-step method for studying a textbook chapter, developed by the
educational psychologist Francis P. Robinson. The steps are **Survey** the
chapter, turn its headings into **Questions**, **Read** to answer them,
**Recite** the answers from memory, and **Review** the whole thing later.

It works because it turns reading into a search. A reader with questions in
mind notices the answers; a reader without them lets the words slide past.
Reciting from memory, rather than rereading, is what fixes the material.
This skill writes the notes for each stage and keeps the person doing the
parts only they can do: the reading and the reciting.

## When to use it

- Someone has a textbook chapter, long article, or report to study.
- They read chapters but cannot recall them afterward.
- They want a structured way to prepare for a class discussion or exam.
- They ask for SQ3R by name.

For notes from a lecture rather than a reading, use `cornell-notes`. For
notes on a book read for pleasure or reflection, use `reading-journal`. For
analyzing an argument, use `qec-notes`.

## What to ask for

- **The chapter**: the text, or at least its title, headings, summary, and
  review questions. With only headings, you can do Survey and Question, and
  the person does the rest.
- **Where they are in the process.** Default: start at Survey. If they have
  read it already, start at Recite and use the questions to test them.
- **When the exam or class is**, to set the review dates. Default: review
  after one day, one week, and before the exam.

## How to do it

1. **Survey.** From the title, introduction, headings, figures, bold terms,
   summary, and end-of-chapter questions, write a short overview: what the
   chapter covers, how it is organized, and anything the person already
   knows about the topic. Do this before any detailed reading.
2. **Question.** Turn each heading into one or two questions. "Causes of the
   Great Depression" becomes "What caused the Great Depression, and which
   cause mattered most?" Add the chapter's own review questions under the
   section they belong to, or under their own heading if none fits yet.
   Prefer why and how questions over what questions.
3. **Read.** Have the person read one section at a time, looking for the
   answer to that section's questions. If you have the text, note the page
   or paragraph where each answer is, but do not hand them the answers yet.
4. **Recite.** After each section, the person answers its questions aloud
   or in writing, without looking. Then compare with the text: record the
   answer in brief, and mark anything they missed or got wrong. If they
   paste their recited answers, correct them against the text and say
   exactly what was missing. With only the headings, do not grade from
   general knowledge: say you cannot check, and point to the section.
5. **Review.** Once the chapter is done, write a short summary that links
   the sections, list the questions they missed, and set review dates. Each
   review is reciting answers to the questions again, not rereading.
6. Keep the questions and answers separate on the page, so the note can be
   used as a self-test.

## The format

```markdown
# SQ3R: [Book], [Chapter]
[YYYY-MM-DD] · Exam or class: [YYYY-MM-DD]

## Survey
- Covers: [one line]
- Structure: [sections, in order]
- Already know: [anything familiar]

## Questions and answers

### [Section heading]
**Q:** [Question]?
**A:** [Brief answer after reciting, with page]
- Missed on first recital: [what they got wrong or left out]

## Review
**Summary:** [Three to five sentences linking the sections.]

**Weak spots:** [Questions missed, to recite first next time]

**Review dates**
- [ ] [Date, one day later]
- [ ] [Date, one week later]
- [ ] [Date, before the exam]
```

## Example

Input: chapter headings from a biology textbook, "Ch. 12 Ecosystems: 12.1
Energy flow, 12.2 Food webs, 12.3 Nutrient cycles". The person read it and
recited: "energy comes from the sun, goes through producers and consumers.
food web shows who eats who."

```markdown
# SQ3R: Biology, Ch. 12 Ecosystems
2026-10-27 · Exam: [?]

## Survey
- Covers: how energy and nutrients move through living systems.
- Structure: energy flow, food webs, nutrient cycles.

## Questions and answers

### 12.1 Energy flow
**Q:** Where does an ecosystem's energy come from, and how does it move?
**A:** From the sun, through producers and then consumers.
- Missed on first recital: [?] cannot check without the text; compare with 12.1.

### 12.2 Food webs
**Q:** What does a food web show, and why is it a web and not a chain?
**A:** Who eats whom.
- Missed on first recital: why it is a web. Check 12.2.

### 12.3 Nutrient cycles
**Q:** How do nutrients move, and how is that different from energy?
**A:** Not yet recited.

## Review
**Summary:** [?] Write once 12.3 is recited.

**Weak spots:** 12.3 entirely; the "why a web" part of 12.2.

**Review dates**
- [ ] 2026-10-28
- [ ] 2026-11-03
```

## Pitfalls

- **Skipping the survey.** Jumping straight into reading loses the map that
  makes each section make sense.
- **Questions that only ask "what".** They produce definitions. Why and how
  questions produce understanding.
- **Giving the answers before the person recites.** The recall attempt is
  the learning. Answers come after.
- **Rereading instead of reviewing.** Review means reciting from the
  questions, then checking. Rereading feels like study but sticks less.
- **Answers from outside the chapter.** The exam is on this text. If you add
  context, mark it "(added)".

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. If the app supports reminders, offer to set them on the review dates.
