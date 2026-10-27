---
name: rapid-logging
description: Turns a day's jottings into bullet journal rapid-log bullets marked as tasks, events, and notes, and migrates open tasks forward to a new day or month. Use when someone asks for rapid logging, bullet journal style notes, or a symbol-coded daily log, wants a messy list written as a symbol-coded bullet journal log, or wants to carry over unfinished tasks.
---

# Rapid logging

Rapid logging is a way of writing down a day in short bullets, each marked
with a symbol that says what kind of entry it is: a task to do, an event that
happens, or a note to remember. Ryder Carroll created it as the core of his
Bullet Journal method. Entries are one line each and written as they come, so
logging takes seconds and never needs a layout planned in advance.

The second half is **migration**: at the end of a day, week, or month, every
open task is looked at again and either done, moved forward, scheduled, or
crossed out as no longer worth doing. Rewriting a task by hand is a small
cost on purpose; a task not worth rewriting is often not worth doing.

## When to use it

- Someone has a brain dump, scribbles, or a messy list and wants it sorted.
- They keep a daily log and want yesterday's open tasks carried forward.
- They are setting up a new month and want to migrate from the old one.
- They ask for rapid logging, signifiers, or task migration by name.

For a full daily note with sections and links, use `daily-note`. For a
weekly reflection and plan, use `weekly-review`. To pull tasks out of
meeting notes, use `action-items`.

## What to ask for

- **The raw material**: a brain dump, yesterday's log, or last month's
  pages.
- **What they want**: a new log, a migration, or both. Default: infer from
  the input. A log with open tasks and a new date means migration.
- **Their own symbols**, if they already use some. Default: the key below.

## How to do it

1. Use this **key**, in plain characters that work in any notes app:
   - `- [ ]` task, open
   - `- [x]` task, done
   - `- [>]` task, migrated forward
   - `- [<]` task, scheduled to a later date (add the date)
   - `- ~~task~~` task, dropped as no longer relevant (no checkbox, so it
     does not show as open)
   - `- o` event (something that happens, at a time or on a day)
   - `- ` note (a plain bullet)
   - `- !` idea or insight
   - **Bold** the text of a priority task, only when the person marks it
     urgent or important.
   If they have their own symbols, keep their meanings, but write them in
   this key's form when theirs would not survive Markdown (`*` and `-` both
   render as plain bullets), and show the mapping once.
2. Write each entry as **one short line**, in the person's words, cut to the
   essential. "Call dentist re: crown" not "I need to remember to call the
   dentist about my crown."
3. Classify each item: is it something to **do** (task), something that
   **happens** (event), or something to **remember** (note)? When unsure,
   ask whether it needs action. If it does, it is a task.
4. Keep entries in the order they came within a day. Do not regroup by type;
   the date heading is the structure. An event or deadline for a later day
   is noted today and also goes under that day's heading (or a "Later"
   list), so it is not lost when today ends.
5. Indent related notes under the task or event they belong to.
6. **Migrating**: for each open task, decide with the person (or propose):
   - still relevant and soon: copy to the new day and mark the old one `[>]`;
   - for a specific later date: mark `[<]` with the date;
   - no longer worth doing: strike it through.
   Point out any task migrated three or more times and ask whether to drop
   it or break it into a smaller first step. A task the person says was done
   on the new day is `[>]` on the old day and `[x]` on the new one.
7. Never mark anything done that the person did not say was done.

## The format

```markdown
# [Date, e.g. 2026-10-27, Tuesday]

- [ ] [Task]
- [ ] **[Priority task]**
- o [Event, time if known]
  - [Note about the event]
- [Note]
- ! [Idea]

**Later**
- [YYYY-MM-DD]: [Event or deadline]

**Migrated from [previous date]**: [count]
```

## Example

Input: "monday: dentist call, team standup 9:30 went long, maria said budget
due friday!, buy cat food, idea: newsletter about winter gardening, finish
slides (still not done from last week)". Tuesday's log wanted.

```markdown
# 2026-10-26, Monday

- [>] Call dentist
- o Team standup, 9:30
  - Ran long
- Maria: budget due Friday
- [>] Buy cat food
- ! Newsletter issue on winter gardening
- [>] Finish slides

# 2026-10-27, Tuesday

- [ ] Call dentist
- [ ] Buy cat food
- [ ] Finish slides

**Later**
- 2026-10-30: Budget due (from Maria)

**Migrated from 2026-10-26**: 3

Questions: Is the budget yours to do? If so, it becomes a priority task for
Friday. "Finish slides" has been carried since last week: drop it, schedule
it, or start with one smaller step (for example "outline slides 1 to 5")?
```

## Pitfalls

- **Writing paragraphs.** Rapid logging works because entries are short.
  Cut every line to the essential words.
- **Forcing every item into a task.** "Standup ran long" is a note, not a
  task. Over-tasking makes the list feel endless.
- **Migrating everything automatically.** The value is the decision at each
  migration. Propose, and let the person decide what to drop.
- **Dropping the history.** Mark migrated tasks `[>]` rather than deleting
  them, so the old day still shows what happened.
- **Marking things done on a guess.** Only the person knows what is done.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. If they keep a daily note, offer to append today's log to it instead of
creating a new note.
