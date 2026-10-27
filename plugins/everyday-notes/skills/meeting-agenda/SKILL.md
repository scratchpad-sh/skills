---
name: meeting-agenda
description: Prepares a meeting agenda with a purpose and outcome, timed items, an owner and decision for each, pre-reads, and items carried from last time. Use when someone asks for an "agenda for Monday's meeting", wants to "prep for the board meeting", asks "what should we cover", or has a meeting coming up and a list of topics, last meeting's notes, or a time slot to fill.
---

# Meeting agenda

An agenda is a promise about what a meeting will produce. The topics matter
less than the outcome line at the top: "by the end we will have chosen the
CRM" tells everyone why they are there, what to read, and when the meeting
has done its job. Meetings without one tend to fill the time with updates
that an email could have carried.

A good agenda puts decisions first, while people are fresh and before the
clock runs out, gives every item an owner and a time, and says what each
item needs from the room: a decision, input, or nothing (in which case it
probably belongs in writing). This skill builds one from whatever the person
has, and carries forward what the last meeting left open.

## When to use it

- A meeting is coming up and they have a list of topics, or only a vague
  sense of what to cover.
- A board, committee, or steering meeting that needs a formal order.
- A recurring team meeting that has drifted into a status round.
- They have last meeting's notes and want the open items carried forward.

To write up a meeting afterward, use `meeting-notes`. For a manager and
report 1:1, `one-on-one-notes` fits better. For a class session, use
`lesson-plan`. For the document a project kicks off with, use
`project-brief`.

## What to ask for

- **What the meeting is for**, and what should be true at the end. Default:
  infer from the topics and mark the outcome line `(proposed)`.
- **Length and date.** Default: 30 minutes, date `[?]`.
- **The topics**, and who brings each. Default: owner `[?]`. With no topics
  at all, ask; if they still want a draft, give the skeleton with `[?]`
  items rather than inventing topics.
- **Last meeting's notes**, if this is a recurring meeting.

Ask at most two of these, and only what you cannot infer. If they gave
topics and a length, start.

## How to do it

1. **Write the purpose and the outcome.** Purpose is why the meeting exists;
   outcome is what will be decided, agreed, or produced by the end. If no
   item needs a decision or live discussion, say so gently and suggest a
   written update instead, with a short agenda only if they still want the
   meeting. A meeting with a standing shape (a daily standup, a retro) keeps
   its shape; add only the one or two items that need the room.
2. **Classify each item** as Decide, Discuss (input wanted, no decision
   today), or Inform. Write what each needs as a question the room can
   answer: "Decide: HubSpot or Pipedrive?" beats "CRM".
3. **Order them**: decisions first, then discussion, then updates last. Move
   an update to just before a decision only when the decision depends on it.
   Suggest moving pure updates to a written note sent beforehand. Quick
   routine approvals can go first, as one short item. Say which items moved
   from the order the person gave, since it may be their group's usual one.
4. **Time every item** and make the total fit the slot with a buffer (about
   five minutes in an hour). If it does not fit, say what you cut or moved
   to async, and why. Give the main decision the most time, not the item
   that will talk the longest.
5. **One owner per item**: the person who brings it and drives it, not the
   chair by default. Never assign an owner the person did not name or
   clearly imply (whoever did the comparison brings it); otherwise `[?]`.
6. **Pre-reads.** List what to read, who sends it, and by when (the working day
   before is a sensible default, marked `(suggested)`). A decision with a
   comparison or a proposal behind it should come with that document.
7. **Carry over from last time.** From the previous notes, bring forward
   action items due by now and open questions, each with its owner and
   status only as the notes or the person state it. Put an open question
   that needs a decision into the main agenda; list status checks under
   Carried from last time, with agenda time only if one needs the room.
8. **Check the room.** If an item needs a decision, name who decides; if that
   person is not attending, flag it.
9. **For boards and committees**, follow their usual order if the person has
   one (approval of last minutes, reports, business), even where it is not
   decisions first. Group routine approvals into one item (a consent agenda)
   if their rules allow, and do not advise on quorum, voting, notice, or
   legal requirements; mark them `[?]` for the secretary to confirm.
10. **Proposed items** that the person did not list (a decision their notes
    imply is due) are marked `(proposed)`, never added silently.

## The format

```markdown
# [Meeting name]: [YYYY-MM-DD], [time], [length]

**Purpose:** [Why this meeting]
**Outcome:** By the end we will have [decided, agreed, produced ...]
**Attendees:** [Names] · **Decides:** [who, if relevant]

## Before the meeting
- Read [document] ([who sends it], by [YYYY-MM-DD])

## Agenda
1. **[Item]** ([n] min, [Owner])
   Decide: [question] / Discuss: [what input] / Inform: [what]
2. ...

## Carried from last time
- [Action or question]: [Owner], [status]

## Not on the agenda
- [Item moved to async, and how it will be shared]
```

## Example

Input: "agenda for Monday's team meeting, 45 min. need to pick the new CRM
(Raj compared HubSpot vs Pipedrive), Mei's update on Q4 hiring, talk about
holiday coverage. last notes: Tom to get quotes for office chairs (not done
yet), open q: move standup to 9:30?"

```markdown
# Team meeting: 2026-11-02, [?] time, 45 min

**Purpose:** Choose the CRM and settle open team logistics (proposed)
**Outcome:** By the end we will have picked a CRM and a standup time
(proposed).
**Attendees:** [?] · **Decides:** [?] (who signs off on the CRM?)

## Before the meeting
- Read Raj's HubSpot vs Pipedrive comparison (Raj, by 2026-10-30) (suggested)

## Agenda
1. **CRM choice** (20 min, Raj)
   Decide: HubSpot or Pipedrive?
2. **Standup time** (5 min, [?])
   Decide: move standup to 9:30?
3. **Holiday coverage** (15 min, [?])
   [?] Decide the rota today, or collect dates first?

## Carried from last time
- Office chair quotes: Tom, not done yet
- Move standup to 9:30?: now item 2

## Not on the agenda
- Q4 hiring update: Mei shares it in writing before Monday, questions at the
  end if time allows. (suggested)
```

That leaves 5 minutes of buffer.

## Pitfalls

- **Topics instead of questions.** "Budget" gives no one anything to prepare.
  "Approve the Q1 budget as proposed?" does.
- **Updates first.** They expand to fill the time and push the decision to
  the last five rushed minutes.
- **No outcome.** If the outcome line cannot be written, the meeting may not
  be needed. Say so.
- **More items than minutes.** An agenda that cannot fit is a promise
  broken at minute one. Cut or move items before the meeting, not during.
- **Dropped carry-overs.** Open items from last time that never reappear
  are how teams lose track. Bring them forward, even as one line.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. For a recurring meeting, saving the agenda at the top of the note the
meeting notes will go in keeps the plan and the record together.
