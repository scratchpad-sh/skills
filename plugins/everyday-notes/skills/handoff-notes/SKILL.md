---
name: handoff-notes
description: Writes handoff notes that let someone pick up work cold, with the current state, open threads, where things live, gotchas, decisions, and the first step. Use when someone is going on leave, writing a handover or out-of-office notes, changing roles, handing a project or client to a colleague, briefing a house sitter or someone covering for them, or leaving notes for their future self before stepping away.
---

# Handoff notes

A handoff fails in a predictable way: the person leaving explains what the
work is, and leaves out what only they know. Where the password is. Why the
obvious approach was abandoned. Which client email needs a reply by Thursday.
The new person then spends a week rediscovering it, or makes the mistake the
old approach was avoiding.

Good handoff notes are written for someone smart who knows nothing about this
particular work, with no chance to ask questions. That includes future you,
who after three weeks away will remember surprisingly little. The test: could
they do something useful in their first hour from these notes alone?

## When to use it

- Going on vacation, parental leave, or sick leave.
- Changing roles or leaving a job.
- Handing a project or client to a colleague.
- Leaving instructions for a house sitter, a pet sitter, or a covering
  colleague (for a substitute teacher's plans, use `lesson-plan`).
- Pausing a personal project and wanting to restart it later.

For a project's permanent home note, use `project-brief`. For a repeated
process someone else will run, `checklist-maker` fits better. For the
reasoning behind one big choice, use `decision-record`. For a software project
log, `dev-log` covers the day-to-day.

## What to ask for

- **What is being handed over and to whom** (a colleague, a stranger, or
  future you). This sets how much context to include.
- **How long the handoff covers**: a week of cover or a permanent transfer.
- **Their material**: notes, task lists, messages, or just a brain dump.
  Default: ask for a brain dump and structure it.

Then ask the questions that pull out hidden knowledge (step 5 below), two at
a time. Those matter more than any document they paste. If they are short on
time, ask only "What is due first?" and "What would trip someone up?", and
draft from the answers.

## How to do it

1. **Start with the first thing to do.** One or two concrete actions for day
   one, at the very top. Someone overwhelmed reads the top and starts there.
2. **Current state.** Where things stand in a few sentences: what is done,
   what is not, and whether it is on track.
3. **In progress.** Every open thread with its status, the next step, any
   deadline, and who else is involved. Time-sensitive items first. For care
   (a pet, a house, a person) or cover of recurring duties, add a
   **Routine** section first: what happens daily and weekly, with times.
4. **Where things live.** Files, folders, tools, accounts, keys, and
   contacts, with links. Say where credentials are kept, never the
   credentials themselves. If they gave you one (a door code, a password),
   leave it out and tell them in your reply to send it another way.
5. **Gotchas.** Ask: "What would trip up someone new?", "What looks wrong
   but is deliberate?", "What did you learn the hard way?", "Who needs
   careful handling?". These answers are the most valuable part.
6. **Decisions and why.** Choices already made, with the reason, so the new
   person does not reopen them unknowingly. Mark which are firm and which are
   open to change.
7. **Who to ask.** People who can answer questions, and about what. Add
   whether the person leaving can be reached, and for what. When the
   handoff covers a pet, a home, or a person, ask for emergency contacts
   (vet, after-hours line, a neighbor) and mark any missing number `[?]`.
8. **What they can decide alone.** Clear authority avoids both paralysis and
   overreach.
9. **Read it as a stranger.** Find every "the usual way", "you know", and
   unexplained acronym, and expand it.
10. **Keep the unknowns.** Anything the person leaving does not know (a
    date, a login, who decided) stays in the note marked `[?]`, with who
    might know. A known gap is far cheaper than a silent one.

## The format

```markdown
# Handoff: [Work], [From] to [To]
[YYYY-MM-DD] · Covers [dates or "permanent"]

## Start here
1. [First concrete action]
2. [Second]

## Current state
[Two to four sentences]

## In progress
- **[Thread]**: [status]. Next: [step]. Due: [date or No date]. With: [people]

## Where things live
- [Thing]: [location or link]

## Gotchas
- [What trips people up, and what to do instead]

## Decisions and why
- [Decision]: [reason]. ([Firm / Open to change])

## Who to ask
- [Person]: [about what]
- Me: [reachable or not, and for what]

## You can decide
- [Things within their authority]
```

Add **Routine** above In progress when step 3 calls for it. Leave out any
section with nothing in it, except Start here.

## Example

Input: "going on leave 3 weeks from Friday. Priya covers the Fernwood
account. they need the menu page live by the 10th, it's built, waiting on
photos from Marta. hosting login in the team password manager. don't touch
the old booking plugin, it looks broken but their staff still use the admin.
we chose no delivery for v1, cost. Priya can approve small copy changes."

```markdown
# Handoff: Fernwood account, me to Priya
2026-10-27 · Covers three weeks from Friday 2026-10-30

## Start here
1. Check whether Marta has sent the menu photos.
2. If not, chase her: the menu page is due on the 10th (month [?]).

## Current state
The menu page is built and waiting only on photos from Marta.

## In progress
- **Menu page**: built. Next: add Marta's photos and publish. Due: the
  10th (month [?]). With: Marta.

## Where things live
- Hosting login: team password manager.

## Gotchas
- The old booking plugin looks broken. Do not touch it: their staff still
  use its admin.

## Decisions and why
- No delivery in version 1: cost. (Firm [?])

## Who to ask
- Marta: the menu photos.
- Me: [?] reachable during leave?

## You can decide
- Small copy changes.
```

## Pitfalls

- **Describing the work instead of the state.** The new person needs "what
  is happening now", not a project history.
- **Missing the tacit knowledge.** Ask the gotcha questions every time; that
  is where handoffs fail.
- **Credentials in the note.** Point to where they are stored.
- **No first step.** Without one, day one goes to reading everything.
- **Undated items.** "Soon" means nothing to someone new. Give the date or
  mark it unknown.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Save it where the new person will look first, such as the project's
folder or a shared note, and link it from the project brief if there is one.
