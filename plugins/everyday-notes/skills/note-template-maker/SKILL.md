---
name: note-template-maker
description: Designs a reusable note template for any recurring situation, with a prompt in each section that tells the writer what to put there, and a filled-in example. Use when someone wants a template for notes they take again and again (site visits, vet appointments, sprint retros, parent-teacher meetings, client onboarding) or says "make me a template for". To write up a single meeting rather than a template, meeting-notes fits better.
---

# Note template maker

A template is a set of questions you agree to answer every time. Its value is
that the questions are decided once, on a calm day, instead of in the moment
when you are rushed and forget to ask about the warranty or write down the
dosage. A good template is short enough to fill in quickly, and each section
tells the writer exactly what belongs there.

The difference between a useful template and a form nobody fills in is the
prompts. A heading that says "Notes" invites nothing. A prompt that says "What
did the vet say to watch for at home, in their words?" gets the answer that
matters.

## When to use it

- Someone takes the same kind of note repeatedly and wants it consistent.
- A team wants everyone's notes on a recurring event to look the same.
- Someone keeps forgetting to record a particular detail.
- They have a few past notes of one kind and want a template distilled
  from them.

For a step-by-step process to follow rather than notes to fill in, use
`checklist-maker`. For daily, meeting, or 1:1 notes, the ready-made
`daily-note`, `meeting-notes`, and `one-on-one-notes` skills already carry
templates; start there and adapt.

## What to ask for

- **The situation**: what happens, how often, and who writes the note.
- **What they need from the note later**: what question will they look it up
  to answer? This decides the sections more than anything else.
- **Past examples**, if they have any. Default: design from the description.
- **Where it will be filled in**: phone, laptop, or paper. Default: phone,
  which favors short sections and checkboxes.

Ask at most three questions, then draft. Iterating on a draft is faster than
interviewing.

## How to do it

1. **Start from later.** List the three to five questions the person will
   want this note to answer in a month or a year, and show them above the
   template so the person can correct them. Every section must serve one of
   them; cut any that do not. With past notes, keep the sections most of
   them share, and turn what was missing when they needed it into a prompt.
2. **Order sections the way the situation unfolds.** Before, during, and
   after for an appointment. Arrival, inspection, and next steps for a site
   visit. The writer should fill top to bottom.
3. **Write a prompt for each section** as a direct question or instruction
   in square brackets: `[What did they recommend, and why?]`. Say what kind
   of answer fits (a number, a yes or no, a quote, a list).
4. **Use structure where it saves typing**: checkboxes for things that are
   always checked, `Label: value` lines for facts that always appear (date,
   location, cost), and free text only where judgment is needed. Where a
   section may be empty, ask for "none" so a blank never means skipped.
5. **Put identifying details at the top** (date, who, where) so notes of
   this type are easy to tell apart and search.
6. **End with next steps** in nearly every template. Most recurring notes
   exist to drive a follow-up.
7. **Keep it short.** Aim for one screen. If a section would be blank most of
   the time, make it optional or drop it.
8. **Suggest a title pattern** so all notes made from it sort together.
9. **Show a filled example** so the person can see the template at work,
   key sections only. Fill it from one of their past notes and leave that
   note's gaps as `[?]`, or label it as made-up sample data.

## The format

```markdown
# Template: [Situation]
Title pattern: [Type]: [Distinguishing detail], [YYYY-MM-DD]
Built to answer: [question], [question], [question]

---

# [Type]: [Detail], [YYYY-MM-DD]
**Date:** [YYYY-MM-DD] · **Who:** [Names] · **Where:** [Place]

## [Section]
[Prompt: what to write here, and in what form]

## [Section]
- [ ] [Always-checked item]

## Next steps
- [ ] [What happens next, who does it, by when]
```

## Example

Input: "I take my dog to the vet every few months and always forget what they
said. Need a template. I'll fill it on my phone in the waiting room and right
after."

```markdown
# Template: Vet visit
Title pattern: Vet: [Pet], [reason], [YYYY-MM-DD]
Built to answer: what did the vet say, what medication and dose, when is the
next vaccine or test due

---

# Vet: [Pet], [reason], [YYYY-MM-DD]
**Date:** [YYYY-MM-DD] · **Vet:** [Name] · **Clinic:** [Name]

## Before (fill in the waiting room)
- **Reason for visit:** [one line]
- **Questions to ask:** [list, so you do not forget]
- **Changes since last visit:** [eating, energy, weight, behavior]

## What the vet found
- **Weight:** [number and unit]
- **Findings:** [what they said, in their words where possible]

## Treatment
- **Medication:** [name, dose, how often, how long]
- **Next vaccine or test due:** [YYYY-MM-DD]

## Watch for at home
[What signs mean call the clinic? Write them as the vet said them.]

## Cost
[Total, and anything insurance should cover]

## Next steps
- [ ] [Follow-up appointment, refill, or test, with date]
```

Filled example (made-up sample data), briefly: "Vet: Biscuit, limping,
2026-10-27" with weight 12.4 kg, "mild sprain, rest for a week", medication
with dose and days, and "call if not putting weight on it by Friday" under
Watch for at home.

## Pitfalls

- **Headings without prompts.** "Notes" gets left blank or filled with
  everything. Ask a question.
- **Too many sections.** A template that takes ten minutes gets abandoned.
  One screen.
- **Designed from the event, not from later use.** Ask what they will look
  the note up for, and build backward.
- **Paired notes with no link.** For before and after notes (move-in and
  move-out, pre-op and post-op), give the second a field naming the first.
- **Rules baked into prompts.** For money, legal, or health templates, prompt
  for facts and records, not for what the rules allow.
- **Locking it in.** Suggest revising the template after three uses.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A "Templates" folder, or the app's own template feature if it has one,
keeps the template one tap away.
