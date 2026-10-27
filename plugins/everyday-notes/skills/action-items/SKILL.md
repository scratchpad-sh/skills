---
name: action-items
description: Pulls every task, commitment, and follow-up out of any text into a checklist with owner, due date, and source line, and flags the vague ones. Use when someone asks "what do I need to do from this", wants only the to-dos from a meeting or thread (not a full write-up), or needs to know who promised what.
---

# Action items

Tasks hide in ordinary sentences. "I'll take a look", "can someone check
with finance", and "let's circle back next week" are all commitments, and in a
long thread or transcript they scatter until nobody remembers making them.
This skill finds them, writes each as a clear task, and keeps a pointer to the
line it came from, so anyone can check the context and nobody can say "I never
said that".

The source line is what makes the list trustworthy. A task without its source
gets argued about; a task with a quote attached gets done.

## When to use it

- After a meeting, from notes or a transcript.
- From a long email thread or chat where several people promised things.
- From a project document with tasks buried in the prose.
- From a pile of old notes, to find the follow-ups that never happened.

For full meeting notes with decisions and a summary, use `meeting-notes`. For
sorting a mixed inbox of captures, use `inbox-triage`. To clean up a single
messy note, use `tidy-up-notes`.

## What to ask for

- **The text.** Any amount.
- **Whose list it is**, if they only want their own tasks. Default: everyone's,
  grouped by owner, with theirs first if you know who they are.
- **Today's date**, only if relative dates ("Friday", "next week") need to be
  turned into real dates and you do not know it.

If they pasted text, start.

## How to do it

1. **Scan for commitment language.** First person ("I'll", "I can", "let me"),
   requests ("can you", "could someone", "please"), agreements ("sounds good,
   will do"), and soft ones ("we should", "worth looking into", "let's
   revisit"). Deadlines with no task attached ("before the launch") count
   too.
2. **Decide what counts.** A task is something a person or team will do. A
   wish ("it would be nice if") is not, unless someone took it on. When in
   doubt, include it and flag it as soft rather than drop it.
3. **Rewrite each as a verb-first task** with a clear finish line: "Send Raj
   the Q3 numbers", not "Q3 numbers".
4. **Owner.** Only who the text says. "I'll do it" means the speaker. "Someone
   should" is Unassigned. "We" is the group, and is often Unassigned in
   practice; flag it.
5. **Due date.** Only what the text says. Convert relative dates to real ones
   when you know the date of the source, and show the original ("Friday,
   2026-10-30"). In a thread that spans days, resolve each one against the
   date of its own message, not today. No date given means "No date". Never
   invent one.
6. **Source line.** Quote the shortest phrase that shows the commitment, with
   where it came from (speaker and timestamp, email sender and date, or line
   number).
7. **Flag vague items.** Missing owner, missing date, unclear outcome, or a
   task that is really a project. Say what is missing in a few words.
8. **Deduplicate.** If the same task appears twice, list it once with both
   sources. If two people both said they would do it, flag the overlap.
9. **Follow the thread to its end.** Later lines change earlier tasks. A task
   handed on ("Dev, can you take the spec?" "Sure.") goes under the new owner,
   with both lines as sources. A task reported done or called off leaves the
   checklist and gets one line under **Closed in the thread**, so nobody redoes
   it. A handoff nobody accepted stays with the original owner, flagged. A
   conditional offer ("I can take it if Ben runs out of time") is a backup,
   not a second owner: note it under Needs clarifying.

## The format

```markdown
# Action items: [Source], [YYYY-MM-DD]

## [Owner]
- [ ] [Verb-first task], due [date or No date]
  Source: "[short quote]" ([where])

## Unassigned
- [ ] [Task], due [date or No date]
  Source: "[short quote]" ([where])

## Needs clarifying
- [Task]: [what is missing: owner, date, or outcome]

## Closed in the thread
- [Task]: [done, cancelled, or handed to whom], "[short quote]" ([where])
```

## Example

Input (email thread, sent 2026-10-26): Maya: "I'll send the revised
contract by Wednesday." Tom: "Thanks. Someone should loop in legal. Also we
need to sort out the venue before it books up." Maya: "Good point, I can
call the venue tomorrow." Tom: "I'll update the budget sheet."

```markdown
# Action items: Venue contract thread, 2026-10-26

## Maya
- [ ] Send the revised contract, due Wednesday, 2026-10-28
  Source: "I'll send the revised contract by Wednesday" (Maya)
- [ ] Call the venue, due tomorrow, 2026-10-27
  Source: "I can call the venue tomorrow" (Maya)

## Tom
- [ ] Update the budget sheet, No date
  Source: "I'll update the budget sheet" (Tom)

## Unassigned
- [ ] Loop in legal, No date
  Source: "Someone should loop in legal" (Tom)
- [ ] Sort out the venue, No date
  Source: "we need to sort out the venue before it books up" (Tom)

## Needs clarifying
- Loop in legal: no owner and no date.
- Update the budget sheet: no date.
- Sort out the venue: "we" has no clear owner, and what "sorted" means
  (booked? deposit paid?) is not said. Maya's call covers the first step.
```

## Pitfalls

- **Assigning by proximity.** The person who raised a problem is not its
  owner unless they said so.
- **Inventing deadlines.** "ASAP" is not a date. Keep it as written and flag it.
- **Missing soft commitments.** "Let me look into it" is a task, and the one
  most often forgotten.
- **Tasks without finish lines.** "Budget" cannot be checked off. Rewrite it.
- **Dropping the source.** Without it, the list is your interpretation. With
  it, it is a record.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. When the tasks came from an existing note, offer to append the checklist
to that note so the tasks stay next to their context.
