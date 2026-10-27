---
name: weekly-review
description: Guides a weekly review that clears the inboxes, looks back at wins, misses, and loose ends, checks the calendar, updates projects, and picks priorities. Use when someone wants to do a weekly review, plan the week ahead, reset on a Friday or Sunday, or feels behind and wants to get back on top of things.
---

# Weekly review

A weekly review is a standing appointment with yourself to get back to zero:
empty the inboxes, see what last week actually produced, look at what is
coming, and decide what next week is for. David Allen made it the keystone of
*Getting Things Done*, and the reason holds for any system: lists and notes only
stay trustworthy if someone regularly checks them against reality.

Allen's own checklist runs in three phases (get clear, get current, and get
creative). This skill uses a simpler three: **clear** (get everything in one
place), **look back** (learn from the week), and **look ahead** (choose), so
the choices at the end are made with a clear head and full information.

## When to use it

- The end of the week, or a Sunday evening, as a routine.
- After a chaotic week, to regain a sense of control.
- Before a week with a big deadline, to plan around it.
- When someone says their lists are out of date and they no longer trust them.

For a single day's plan, use `daily-note`. To process a large backlog of
captures in depth, run `inbox-triage` as the first step. For a new project
that comes out of the review, `project-brief` gives it a home.

## What to ask for

- **How guided they want it.** Default: walk through it step by step, one
  phase at a time, waiting for their answers.
- **Material**, if they have it: last week's daily notes, a task list, a
  project list, or next week's calendar. Default: work from what they tell
  you.
- **Whether to read their notes first**, if a notes app is connected. Default:
  only when they ask.
- **Time available.** Default: 30 to 45 minutes. The 15-minute version keeps
  the clear, one line each for wins and misses, the calendar, and priorities.

If they give a dump of the week rather than wanting to be walked through,
write the note from it, mark the gaps `[?]`, and ask about the gaps after.

## How to do it

1. **Read the notes first, if asked.** When a notes app is connected and they
   ask, read the week's daily notes, meeting notes, and any project note they
   name before asking anything. Draft the wins, misses, and loose ends from
   them, marking each with its source, for example "(from 2026-10-21 daily
   note)". Then ask only for what notes cannot show: how the week felt and
   what matters next.
2. **Clear: gather.** Ask them to list everything open: email flagged, notes
   inbox, paper, messages, voice memos, things in their head. Do not sort yet;
   just get it written. Ask "anything else nagging you?" once at the end.
3. **Clear: process.** For each item, decide quickly: do now if under two
   minutes, add to a task list, add to the calendar, file, or discard. For a
   large pile, suggest `inbox-triage` and continue with the rest.
4. **Look back: wins.** What got done or went well. Ask for specifics; wins
   are easy to forget by Friday and matter for morale and reviews.
5. **Look back: misses.** What did not get done or went badly, and one line on
   why (blocked, underestimated, deprioritized, avoided). Patterns in the
   "why" across weeks are the real insight. Keep it factual, not harsh.
   After a week lost to illness or a crisis, name the cause once instead of
   listing every miss, move what slipped to new dates, and do not pad wins.
6. **Look back: loose ends.** Things waiting on others, promises made in
   passing, and replies owed. Skim last week's calendar for meetings that
   left a follow-up. These are what slip.
7. **Look ahead: calendar.** Go through the next week (and glance two to four
   weeks out) for deadlines, travel, prep needed for meetings, and birthdays.
   Each one that needs prep becomes a task. Give each its date and weekday.
   If the review is late, plan only the days still ahead.
8. **Look ahead: projects.** For each active project, confirm the next action
   exists and is concrete. A project with no next action is stalled. Ask
   whether any project should be paused or dropped, and whether anything on
   a someday or maybe list is ready to start; fewer active projects usually
   means more finished ones.
9. **Choose priorities.** Three things that would make next week a success,
   written as outcomes. Check them against the calendar: if the week is full
   of meetings, three may be too many.
10. **Close.** One line on how the week felt and one thing to do differently.
    Keep the review note so next week's review can check how it went.

## The format

```markdown
# Weekly review: [first day] to [last day of the week reviewed]

## Cleared
- [Inbox or place]: [cleared / n items left]

## Wins
- [Specific win]

## Misses
- [What]: [why]

## Loose ends
- [ ] [Waiting on or owed]: [who]

## Next week's calendar
- [YYYY-MM-DD] ([weekday]): [Event] (prep: [task, if any])

## Projects
| Project | Status | Next action |
| --- | --- | --- |
| [Name] | [On track / Stalled / Paused] | [Concrete action] |

## Priorities for next week
1. [Outcome]
2. [Outcome]
3. [Outcome]

## Reflection
- **How it felt:** [One line]
- **Do differently:** [One thing]
```

## Example

Input: "shipped the onboarding redesign. didn't write the blog post again,
kept getting pulled into support. waiting on legal for the contract. next
week: board meeting thursday, need slides. projects: hiring (no movement),
blog, onboarding v2"

```markdown
# Weekly review: 2026-10-19 to 2026-10-25

## Cleared
- [?] Not covered in the notes; ask what is still open.

## Wins
- Shipped the onboarding redesign.

## Misses
- Blog post: pulled into support (missed again).

## Loose ends
- [ ] Contract review: waiting on legal

## Next week's calendar
- 2026-10-29 (Thursday): Board meeting (prep: make slides)

## Projects
| Project | Status | Next action |
| --- | --- | --- |
| Hiring | Stalled | [?] No next action given |
| Blog | Stalled | [?] Block writing time away from support (suggested) |
| Onboarding v2 | [?] | [?] |

## Priorities for next week
1. Board slides ready before Thursday's meeting
2. [?]
3. [?]

## Reflection
- **How it felt:** [?]
- **Do differently:** [?] Protect writing time from support (suggested)
```

## Pitfalls

- **Skipping the clear.** Planning on top of an unprocessed inbox means
  planning with half the information.
- **Turning misses into self-criticism.** The goal is the pattern ("support
  keeps eating writing time"), not blame.
- **Projects without next actions.** "Hiring" is not a task. Ask for the very
  next physical step.
- **Too many priorities.** If everything is a priority, the week will be
  decided by whatever is loudest.
- **Making it too long.** A two-hour review gets skipped. Offer the short one.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A "Weekly reviews" folder, one note per week, makes the patterns across
weeks easy to see.
