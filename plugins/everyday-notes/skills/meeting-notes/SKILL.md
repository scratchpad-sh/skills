---
name: meeting-notes
description: Turns a meeting transcript, recording summary, or rough jottings into meeting notes with decisions, action items, owners, due dates, open questions, and a summary. Use when someone pastes a transcript or their scribbles from a meeting or from a call with a contractor, doctor, or other provider, asks to "write up the meeting", or wants minutes or a recap to send.
---

# Meeting notes

Good meeting notes are not a record of who said what. They are a record of
what changed because the meeting happened: what was decided, who will do what
by when, and what is still unresolved. Someone who missed the meeting should
be able to read the top three lines and know whether they need to read the
rest.

This skill works from whatever the person has: a full transcript, an
automated recording summary, a chat log, or a handful of bullets typed during
the call. It sorts the material into a fixed shape so every set of notes reads
the same way.

## When to use it

- A transcript or recording summary needs turning into notes people will read.
- Someone has rough jottings from a meeting and wants them cleaned up.
- A recap needs to go to attendees or to people who missed it.
- Someone asks "what did we actually decide?" about a meeting.

For a recurring manager and report conversation, `one-on-one-notes` fits
better. For a call with a client or prospect, use `client-call-notes`. To pull
only the tasks out of a long document, use `action-items`. To record one
significant decision with its reasoning, use `decision-record`. To plan the
agenda before a meeting, use `meeting-agenda`.

## What to ask for

- **The material.** Transcript, summary, or notes. If they have none, offer to
  take notes as they describe the meeting.
- **Meeting name and date.** Default: infer from the material, or use today's
  date and mark the name `[?]`.
- **Who attended**, if the material does not show it. Default: list the
  speakers you can see and note that the list may be incomplete.
- **Who it is for**, only if it changes the tone (a recap sent to a client
  reads differently from internal notes). Default: the attendees.

If they pasted material, start.

## How to do it

1. Read everything once before writing. Meetings circle back: a topic
   "decided" at minute ten is often reopened at minute forty. The last word
   counts.
2. Find the **purpose**: why the meeting was called, in one line. If the
   material does not say, infer it from the topics and mark it `(added)`.
3. Pull out **decisions**. A decision is something the group agreed and will
   act on. Phrases like "let's go with", "agreed", "we'll do", and "final
   answer" signal one. "We should probably" and "I think" do not; those are
   open questions or suggestions. When in doubt, list it as an open question
   rather than inventing a decision.
4. Pull out **action items**. Each one gets an owner and a due date only if
   the material gives them. Write "Unassigned" and "No date" plainly when it
   does not; never assign a task to the person who raised it just because
   they raised it. A choice only one party can make (the homeowner picking
   tile) is theirs without being said. A tentative offer ("I can probably look at it") keeps that
   owner, marked "(tentative)". Turn a relative due date ("Friday") into a
   calendar date only when the meeting date is known. Start each item with a
   verb.
5. List **open questions**: things raised and not settled, with who is
   expected to answer if anyone said so.
6. Write **discussion notes** grouped by topic, not by time, and leave
   the section out when everything is already above. Keep them short:
   the positions taken and the reasons, not the back-and-forth. Attribute a
   view to a person only when it matters (a concern raised by legal is worth
   naming).
7. Write the **summary** last: three lines for someone who missed it. Line one
   is the main outcome, line two the most important next step, line three
   anything they personally need to know or do.
8. Keep exact numbers, names, dates, and product names as spoken. Mark
   anything inaudible or garbled in a transcript as `[?]` rather than
   guessing. Leave out door codes and passwords even if they were said.
9. **Notes to send** to attendees or the other party: use names, not "me";
   turn each `[?]` into a plain question in the text ("Rob, is the
   electrician Tony?"); drop "(added)". Keep anything private to the
   person's side (a budget limit, a doubt about the contractor) out, and
   tell them what you left out.

## The format

```markdown
# [Meeting name]: [YYYY-MM-DD]

**Attendees:** [Names]
**Purpose:** [One line]

## Summary
- [Main outcome]
- [Most important next step]
- [What a reader who missed it needs to know]

## Decisions
- [Decision], because [reason, if given]

## Action items
- [ ] [Verb-first task]: **[Owner or Unassigned]**, due [date or No date]

## Open questions
- [?] [Question] ([who will answer, if said])

## Discussion
### [Topic]
- [Key point or position]

## Next meeting
[Date, if set; leave the section out otherwise]
```

## Example

Input: "product sync tues. me, Priya, Dan, Lena. pricing page: Dan wants to
drop the free tier, Priya says no, churn data first. agreed: keep free tier
for now, revisit in Nov. Lena to pull churn numbers by friday. someone needs
to update the FAQ. launch date still 11/12? Dan thinks it might slip"

```markdown
# Product sync: 2026-10-27

**Attendees:** Priya, Dan, Lena, and the note-taker
**Purpose:** Pricing page and launch timing (added)

## Summary
- The free tier stays for now; pricing will be revisited in November.
- Lena is pulling churn numbers by Friday to inform that review.
- The 2026-11-12 launch date is not confirmed and may slip.

## Decisions
- Keep the free tier for now and revisit in November, pending churn data.

## Action items
- [ ] Pull churn numbers: **Lena**, due Friday 2026-10-30
- [ ] Update the FAQ: **Unassigned**, No date

## Open questions
- [?] Is the 2026-11-12 launch date still on? (Dan thinks it might slip)

## Discussion
### Pricing page
- Dan proposed dropping the free tier.
- Priya asked to see churn data before changing it.
```

## Pitfalls

- **Transcribing instead of summarizing.** Notes that follow the meeting
  minute by minute bury the outcomes. Group by topic and lead with decisions.
- **Inventing owners or dates.** "Someone should" is unassigned. Say so; the
  gap is useful information for whoever reads the notes.
- **Promoting suggestions to decisions.** If nobody agreed, it is an open
  question. A wrong "decision" in the notes becomes a real one later.
- **Losing the reversal.** If a point was agreed and then reopened, record
  where it ended up, not where it started.
- **A summary that lists topics.** "We discussed pricing and launch" tells the
  reader nothing. State the outcome.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. For a recurring meeting, offer to append to the running note for that
series so past decisions stay in one place.
