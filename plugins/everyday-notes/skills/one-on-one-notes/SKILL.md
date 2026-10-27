---
name: one-on-one-notes
description: Keeps running notes for a recurring manager and report 1:1, with their topics first, feedback both ways, career threads, and commitments carried forward. Use when someone is preparing for or writing up a one-on-one, wants a 1:1 agenda or template, or asks what they promised their manager or report last time.
---

# One-on-one notes

A one-on-one belongs to the report more than the manager. It is the one
meeting where their concerns come first, where feedback travels both ways, and
where slow topics like growth and career get regular airtime instead of only
coming up at review time. The notes matter because the value of a 1:1 is
cumulative: the thread from week to week is what turns a chat into a working
relationship.

So these notes live in one running document per person, newest session on
top, and each session starts by checking what was promised last time.

## When to use it

- Preparing an agenda before a 1:1, as the manager or the report.
- Writing up a 1:1 just after it, from memory or jottings.
- Starting a running 1:1 note for a new report or a new manager.
- Looking back before a review to see themes, feedback, and progress.

For a group meeting, use `meeting-notes`. For a hiring or research
conversation, use `interview-notes`. To pull a list of tasks from many past
sessions, `action-items` fits better.

## What to ask for

- **Which side they are on**: manager or report. Default: infer from how they
  talk about the other person.
- **Last session's notes**, if they exist. These supply the carried-over
  commitments and open threads.
- **What happened or what they want to raise**: jottings, a summary, or a list
  of topics.

Do not ask about the relationship or performance beyond what they offer. If
they gave you material, start.

## How to do it

1. **Carry over first.** From last session, list every commitment made by
   either person and mark each done, in progress, or not started, based only
   on what the person tells you. Ask if you cannot tell. A commitment that has
   slipped three times is worth naming gently, not hiding: put the count in
   its status ("not started, fourth time").
2. **Their topics first.** Put the report's items at the top of the agenda,
   then the manager's. When writing up, keep that order even if the
   conversation wandered.
3. **Feedback both ways.** Record feedback given to the report and feedback
   given to the manager in separate lines. Write it as specific behavior and
   effect ("the handoff doc on Tuesday saved the support team a day"), not
   adjectives ("great job"). If the person only wrote an adjective, keep it
   and do not invent the specifics.
4. **Career and growth threads.** Keep a short standing section for longer
   arcs (a skill they are building, a role they want, a project that would
   stretch them). Update it only when something moved; most weeks it will not.
5. **Commitments.** List new ones with the owner. In a 1:1 the manager's
   commitments matter as much as the report's, and they are the ones most
   often forgotten.
6. **Mood and load**, only if the person mentioned it. A one-line note ("said
   the on-call week was rough") helps spot patterns. Never infer feelings that
   were not stated.
7. **Keep the tone fair.** Write as if the other person might read it.
   Facts and quotes, not judgments about character.
8. **Sensitive matters.** If the 1:1 touched on health, a complaint about a
   colleague, harassment, or family circumstances, record only what is
   needed to follow up ("Raised a concern about a teammate; agreed next
   step: X") and suggest keeping the details, including the colleague's
   name, out of the running note unless the person asks to keep them. Say
   that some concerns may need to go to HR under their company's policy;
   do not give legal or HR advice of your own.

## The format

```markdown
# 1:1 [Manager] and [Report]

## [YYYY-MM-DD]

### From last time
- [x] [Verb-first task]: **[Owner or Unassigned]**, due [date or No date]
- [ ] [Verb-first task]: **[Owner or Unassigned]**, due [date or No date]
  ([status])

### [Report]'s topics
- [Topic]: [what was said, what was agreed]

### [Manager]'s topics
- [Topic]: [what was said, what was agreed]

### Feedback
- **To [report]:** [specific behavior and effect]
- **To [manager]:** [specific behavior and effect]

### Career and growth
- [Thread]: [what moved, or "no change"]

### Commitments
- [ ] [Verb-first task]: **[Owner or Unassigned]**, due [date or No date]

### Notes
- [Load, mood, or context, only if stated]

---

## [Earlier date]
...
```

## Example

Input (manager's jottings): "1:1 w Sam. last time I said I'd ask about the
conference budget: didn't. Sam wants to lead the search migration. stressed
about on-call. I told Sam the incident writeup was really clear, the VP
shared it. Sam said my feedback on PRs comes too late. I'll review within a
day. Sam to draft a migration plan by next 1:1"

```markdown
# 1:1 Me and Sam

## 2026-10-27

### From last time
- [ ] Ask about conference budget: **Me**, No date (not started)

### Sam's topics
- Wants to lead the search migration.

### My topics
- None recorded.

### Feedback
- **To Sam:** The incident writeup was really clear; the VP shared it.
- **To me:** Feedback on PRs comes too late.

### Career and growth
- Leading a migration: Sam asked to lead search. First step is a plan.

### Commitments
- [ ] Ask about conference budget: **Me**, No date (carried over)
- [ ] Review Sam's PRs within one day: **Me**, No date (ongoing)
- [ ] Draft a search migration plan: **Sam**, due next 1:1

### Notes
- Stressed about on-call (from my jottings).
```

## Pitfalls

- **Manager's agenda on top.** It turns the 1:1 into a status meeting. Their
  topics go first.
- **Dropping the carry-over.** Unchecked promises are how trust erodes. Start
  every session with last time's list.
- **Status updates crowding everything out.** If the notes are all project
  status, suggest moving status to a written update and keeping the 1:1 for
  what cannot be written.
- **Vague feedback.** "Doing great" helps no one at review time. Keep what was
  actually said, and prompt for the specific example if the person has it.
- **Diagnosing feelings.** Note what was said ("stressed about on-call"), not
  conclusions ("burning out").

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Prefer adding each session to the top of one running note per person
rather than starting a new note every week. Give only the new session, ready
to paste above the last one, unless they ask for the whole note.
