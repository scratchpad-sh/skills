---
name: checklist-maker
description: Builds a short checklist for a recurring process (packing, publishing, closing the books), in the order things happen, in read-do or do-confirm style. Use when someone keeps forgetting a step, wants a checklist for something they do repeatedly, wants to hand a process to someone else, or asks to turn a long procedure into a checklist.
---

# Checklist maker

A good checklist does not teach anyone how to do the job. It catches the
steps a competent person skips when tired, rushed, or interrupted: the
passport, the alt text, the bank reconciliation. That is the main lesson of
aviation and surgical checklists, as Atul Gawande described them in *The
Checklist Manifesto*, and it is why the best checklists are short.

There are two styles. A **read-do** checklist is followed line by line, doing
each step as it is read, for processes done rarely or in a fixed order. A
**do-confirm** checklist is run after doing the work from memory, pausing to
confirm nothing was missed, for processes done often by people who know them.
Choosing the right one matters more than the wording.

## When to use it

- Someone keeps forgetting the same step in a recurring task.
- A process is about to be handed to someone else.
- A mistake happened and they want it never to happen again.
- A long written procedure needs a quick version to use in the moment.

For a reusable template to fill in with notes, use `note-template-maker`. For
a full how-to that teaches the process, `how-to-guide` fits better. For
handing over ongoing work rather than a repeated process, use
`handoff-notes`.

## What to ask for

- **The process**: what it is, when it starts, and when it is finished.
- **What has gone wrong before.** These are the lines that earn a place.
- **Who uses it and how often.** Default: the person themselves, a few times a
  year, which suggests read-do.
- **Where it will be used**: phone, printed, or on screen. Default: phone.

If they describe the process in enough detail, draft first and ask after.

## How to do it

1. **Define the start and end.** A checklist runs from a clear trigger ("the
   night before the trip") to a clear finish ("door locked, keys in hand").
2. **List every step, then cut.** Write the full process, then keep only the
   steps that are (a) easy to forget, (b) costly if missed, or (c) required
   in a specific order. Steps nobody ever forgets come out. A step the
   person did not mention stays only as a line marked "(suggested)", so they
   can strike it.
3. **Aim for five to nine items per section.** If it runs longer, split it at
   natural pause points (before leaving, at the airport) into short sections,
   each with its own heading.
4. **Order by when it happens**, not by category. A packing list grouped by
   "clothes" and "toiletries" is a list; grouped by "the week before", "the
   night before", and "at the door" it is a checklist.
5. **Choose read-do or do-confirm** and say which at the top. If sections
   differ, say which in each section heading.
6. **Write each line as a short check**: the item and the state, a few words.
   "Passport: in bag" not "Make sure you have remembered your passport".
   Put any critical number or detail in the line itself, but only one they
   gave you. Where a line needs a number they did not give (a thermostat
   setting, a cutoff time), write `[?]` rather than a typical value.
7. **Mark the killer items**, the ones where a miss is expensive or
   irreversible, so they stand out.
8. **Write for the person who runs it.** If someone else will use it, spell
   out names, places, and who to report to that the asker would abbreviate.
   A step that applies only sometimes starts with its condition ("Tuesdays:
   trash to the road"); if the condition is unclear, mark it `[?]`.
9. **Add an "Updated" line** and a habit of revising after each use. A
   checklist that is never updated drifts out of date and gets ignored.

## The format

```markdown
# Checklist: [Process]
**Style:** [Read-do / Do-confirm] · **Start:** [Trigger] · **Done when:** [End state]
Updated [YYYY-MM-DD]

## [Pause point 1]
- [ ] [Item]: [state]
- [ ] **[Killer item]**: [state]

## [Pause point 2]
- [ ] [Item]: [state]

## After
- [ ] Note anything this checklist missed
```

## Example

Input: "checklist for publishing a blog post. I've forgotten alt text, left a
typo in the title, and once published with the draft URL slug. also need to
share on social and add to the newsletter. I do it weekly."

```markdown
# Checklist: Publishing a blog post
**Style:** Do-confirm · **Start:** Draft finished · **Done when:** Shared
Updated 2026-10-27

## Before publishing
- [ ] **Title**: read aloud once for typos
- [ ] **URL slug**: changed from the draft slug
- [ ] Images: alt text on every one
- [ ] Links: clicked and working (suggested)

## After publishing
- [ ] Live page: opened and checked on a phone (suggested)
- [ ] Social: shared
- [ ] Newsletter: post added to the next issue

## After
- [ ] Note anything this checklist missed
```

Do-confirm because it is done weekly; write the post from habit, then run
the list. The two items marked "(suggested)" were not in the request; keep
them only if the person agrees.

## Pitfalls

- **Too long.** A 40-line checklist gets skipped. Cut everything people
  reliably remember.
- **Teaching instead of checking.** Explanations belong in a guide. Lines on
  a checklist are prompts.
- **Grouped by category, not time.** Order by when each step happens.
- **Vague lines.** "Check images" can be ticked without checking anything.
  State what done looks like.
- **Never revised.** Every miss is a missing line. Add it after each use.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. For a repeated process, suggest duplicating the checklist each time it is
used, so the original stays unticked.
