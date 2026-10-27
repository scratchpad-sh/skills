---
name: daily-note
description: Builds a daily note with a top three, the schedule, a running log, quick captures, and an end-of-day shutdown, blank or filled in. Use when someone wants a daily note, a daily planner page, a plan for today, a place to log the day, or a shutdown routine at the end of the workday. For reflective or gratitude journaling, journal-entry fits better.
---

# Daily note

A daily note is one page per day that does four jobs: it says what matters
most today, shows the fixed commitments, catches everything that comes up, and
closes the day so nothing carries over by accident. It works because there is
always exactly one obvious place to write something down: today's note.

The top three is the core. A long to-do list hides the important work among
the easy work; three items forces a choice. The shutdown at the end turns a
pile of captures into tomorrow's plan, so the next note starts clean.

## When to use it

- Starting the day and wanting a plan.
- Wanting a daily template to reuse.
- Logging what happened during the day, as it happens or at the end.
- Running an end-of-day shutdown to close loops and plan tomorrow.

For a short-form bullet log with signifiers, `rapid-logging` fits better. For
the weekly look back and ahead, use `weekly-review`. To sort a backlog of
captures across many days, use `inbox-triage`. For a reflective or gratitude
journal entry, use `journal-entry`.

## What to ask for

- **Template or filled?** Default: if they told you anything about today,
  fill it in; otherwise give the template.
- **Today's calendar and tasks**, if they want a plan. Default: work from what
  they said and leave the schedule blank if they gave none.
- **Yesterday's note**, if it exists, to carry over unfinished items.

Ask at most two questions. A daily note should take a minute, not a
conversation.

## How to do it

1. **Date title.** Use `YYYY-MM-DD` and the weekday. Consistent titles make
   daily notes sort and search well.
2. **Carry over.** From yesterday's note, bring unchecked items into today
   only if the person still wants them. Mark carried items so a task carried
   for the third time is visible; it probably needs to be split, delegated, or
   dropped. A carried item that makes the top three is listed there only, with
   its count, not a second time under Carried over.
3. **Top three.** Choose with the person, or suggest from their list: the
   items that would make today a good day if nothing else got done. Prefer
   one significant piece of work over three small errands. Write each as a
   concrete outcome ("Send the draft to Ana"), not an area ("Work on report").
4. **Schedule.** Fixed-time items only, in time order. Note gaps of an hour or
   more as focus blocks for the top three. Do not schedule every minute.
5. **Log.** Bullets of what actually happened, in order, with a time only
   where the person gave one; never guess times, and keep "around 11" as
   "~11:00". When filling from
   what the person says, use their words and keep it brief. Decisions,
   surprises, and who said what are worth logging; routine is not.
6. **Captures.** Ideas, tasks, links, and things to remember that came up.
   Do not sort them during the day. Sorting is the shutdown's job.
7. **Shutdown.** At the end of the day, walk through: what got done of the
   top three, where each capture goes (tomorrow, a project, a later list, or
   nowhere), what tomorrow's top three might be, and one line of reflection.
   The point is to stop thinking about work, knowing nothing is lost. When
   you run it for them, propose where each capture goes and tomorrow's top
   three, marked `(suggested)`; mark a half-done item with what is left
   ("half done: tests not reviewed"); bump the carry count on anything that
   moves to tomorrow. Never write the one line of reflection for them.

## The format

```markdown
# [YYYY-MM-DD] [Weekday]

## Top three
- [ ] [Concrete outcome]
- [ ] [Concrete outcome]
- [ ] [Concrete outcome]

## Schedule
- [HH:MM] [Event]
- [HH:MM to HH:MM] Focus: [top three item]

## Log
- [HH:MM, if known] [What happened]

## Captures
- [Idea, task, link, or reminder]

## Carried over
- [ ] [Item] (carried [n] times)

## Shutdown
- **Done:** [What of the top three got done]
- **Captures sorted:** [Where each went]
- **Tomorrow's top three:** [Draft]
- **One line:** [How the day went]
```

## Example

Input: "today: dentist at 9, team standup 10:30, need to finish the Q4
budget, call mom, also return library books. oh and an idea: newsletter
about our move. yesterday I didn't send the invoice to Kim"

```markdown
# 2026-10-27 Tuesday

## Top three
- [ ] Finish the Q4 budget
- [ ] Send the invoice to Kim (carried 1 time)
- [ ] Call Mom

## Schedule
- 09:00 Dentist
- 10:30 Team standup
- 11:00 onward Focus: Q4 budget (suggested)

## Log
-

## Captures
- Idea: newsletter about our move
- Return library books

## Shutdown
- **Done:**
- **Captures sorted:**
- **Tomorrow's top three:**
- **One line:**
```

## Pitfalls

- **Ten items in the top three.** It stops meaning anything. Three, and the
  rest go under captures or a later list.
- **Areas instead of outcomes.** "Budget" never gets checked off. "Finish the
  Q4 budget" does.
- **Skipping the shutdown.** Without it, captures pile up and the daily note
  becomes a graveyard. Even two minutes is enough.
- **Over-planning the schedule.** A plan with no slack fails by 10 a.m. Leave
  gaps.
- **Inventing a log.** When filling from what they said, log only what they
  told you happened.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. If today's note already exists, append to it rather than creating a
second note for the same day.
