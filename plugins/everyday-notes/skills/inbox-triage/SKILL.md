---
name: inbox-triage
description: Sorts a pile of quick captures into do, schedule, delegate, file, project, task, or discard, and proposes the whole plan before changing anything. Use when someone has an overflowing notes inbox, a brain dump or long list of jotted ideas and to-dos, a backlog of unsorted notes, or asks to "clean up my inbox" or "process my captures".
---

# Inbox triage

Capturing is easy; deciding is the work. An inbox of quick notes, voice memos,
links, and half-tasks grows until it stops being useful, because every look at
it means re-reading items that were never decided. Triage makes one decision
per item, once, so the inbox can go back to zero.

There are seven outcomes for any capture: **do** it now (it takes two minutes
or less), **schedule** it for a date, **delegate** it to someone, **file** it
into an existing note or folder, turn it into a **project** (more than one
step), add it to the **task** list, or **discard** it. Asking "what is the
very next action, and is it mine?" decides most items in seconds.

## When to use it

- A notes inbox or "Unsorted" folder has grown past a quick glance.
- Someone pastes a long list of jotted tasks and ideas.
- As the first step of a weekly review.
- After a trip or a busy stretch, to catch up.

For the full weekly routine, use `weekly-review`. To clean up one messy note
rather than sort many, use `tidy-up-notes`. To pull tasks out of a long
document, use `action-items`. To set up a folder system first, `para-organizer`
fits better.

## What to ask for

- **The captures**: pasted text, or permission to read an inbox folder in a
  connected notes app.
- **Where things can go**: their existing folders, projects, and task list.
  Default: if a notes app is connected, list the folders and use those;
  otherwise propose a small set and ask.
- **Who they can delegate to**, only if items clearly belong to someone else.

## How to do it

1. **Read everything first.** Group duplicates and near-duplicates (the same
   idea captured three times) and treat them as one item, noting the merge.
2. **Decide each item.** Ask in order: Is it still relevant? If not,
   discard. Does it need action? If not, file it (reference) or discard it.
   Is the next action under two minutes? Do. Is it someone else's? Delegate.
   Does it have a date? Schedule. More than one step? Project. Otherwise, it
   is a task for the task list. A delegated item goes under Delegate only,
   written as the handoff ("Ask Theo to fix the gate latch"), not also under
   Do now. A date the capture implies but does not give ("before the trial
   ends") still goes under Schedule, as `[?]` with what to look up.
3. **Rewrite vague items as actions.** "Dentist" becomes "Call the
   dentist to book an appointment". Add only what the capture or the person
   supplies; a name or detail you would have to guess goes to "Needs your
   call". Keep the original text beside the rewrite so nothing is lost in
   translation.
4. **File by where it will be looked for**, not by topic in the abstract. A
   restaurant recommendation belongs where they plan trips or dinners, not in
   a folder called "Food".
5. **Flag what you cannot decide.** Items you do not understand go in a short
   "Needs your call" list. Do not guess what "the thing with R" means.
6. **Present the plan** as lists grouped by outcome, in the format below.
   Put anything due today or tomorrow, or plainly urgent (a fraud alert, a
   deadline), at the very top under "Urgent" so a long plan cannot bury
   it. A deadline that has already passed goes there too, as a question
   ("due 2026-10-20: already done?"). Leave out empty sections. Do not
   move, rename, merge, or delete anything yet.
7. **Wait for a yes.** Let the person change any line. Then, if a notes app is
   connected, apply only the approved changes. Never delete; offer to move
   discards to an archive or a "Discarded" note unless the person explicitly
   says to delete specific items.
8. **Report** what was done and what is left in the inbox.

## The format

```markdown
# Inbox triage: [YYYY-MM-DD]
[n] items · [n] merged duplicates

## Urgent (due today, tomorrow, or overdue)
- [ ] [Verb-first action], due [YYYY-MM-DD] (was: "[original]")

## Do now (two minutes or less)
- [ ] [Verb-first action], due today (was: "[original]")

## Schedule
- [YYYY-MM-DD]: [Action] (was: "[original]")

## Delegate
- [ ] [Verb-first action]: **[Person]**, due [date or No date] (was:
  "[original]")

## File
- [Destination note or folder]: "[original]"

## New projects
- **[Project name]**: first action: [action] (was: "[original]")

## Tasks
- [ ] [Verb-first action], due [date or No date] (was: "[original]")

## Discard
- "[original]": [reason]

## Needs your call
- [?] "[original]": [what is unclear]
```

## Example

Input captures: "book club pick??", "renew passport", "idea: garage
shelves", "Sam's birthday 11/14", "renew passport!!", "article on sleep
https://example.com/sleep", "email Jo re invoice", "the thing w/ R"

```markdown
# Inbox triage: 2026-10-27
8 items · 1 merged duplicate

## Do now (two minutes or less)
- [ ] Email Jo about the invoice, due today (was: "email Jo re invoice")

## Schedule
- 2026-11-14: Sam's birthday, add to calendar (was: "Sam's birthday 11/14")

## File
- Reading list: "article on sleep https://example.com/sleep"

## New projects
- **Garage shelves**: first action: measure the wall (suggested)
  (was: "idea: garage shelves")

## Tasks
- [ ] Renew passport, No date (was: "renew passport" and "renew passport!!",
  merged)

## Needs your call
- [?] "book club pick??": choose a book, or find out what was picked?
- [?] "the thing w/ R": not enough to go on.
```

Nothing has been moved yet. Reply with changes, or "yes" to apply.

## Pitfalls

- **Acting before approval.** Moving or deleting someone's notes without a
  yes breaks trust in the whole system. Always propose first.
- **Guessing at cryptic items.** Ask. A wrong guess files the item somewhere
  it will never be found.
- **Projects disguised as tasks.** "Renovate the kitchen" on a task list never
  gets done. Give it a project and a first step.
- **Filing everything as "maybe someday".** If most items land there, the
  triage has only moved the inbox. Push for a decision.
- **Losing the original wording.** Keep it beside each rewrite.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Apply moves in a connected app only after the yes in step 7.
