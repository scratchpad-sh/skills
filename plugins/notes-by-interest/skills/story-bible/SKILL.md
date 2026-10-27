---
name: story-bible
description: Builds and maintains a story bible for a novel or series, with characters, places, a timeline, the rules of the world, and a continuity list. Use when a fiction writer wants to keep track of their book, asks for a story bible or series bible, needs a character sheet, is starting a sequel, or has drafts, outlines, or scattered notes to turn into one reference they can check while writing.
---

# Story bible

A story bible is the reference a writer keeps beside the manuscript so the
book agrees with itself: who the characters are, where and when things
happen, how the world works, and every small fact a reader might notice if it
changed (eye color, the dog's name, which hand was injured). By chapter
thirty, nobody remembers chapter three.

A good bible starts thin and grows with the draft. This skill builds it from
what the writer has and keeps it honest: it records what the text
establishes, not what would be nice to know.

## When to use it

- A writer is starting a novel or series and wants a place to keep the facts.
- They have a draft and want the established facts pulled out of it.
- They are writing a sequel and need to know what book one fixed in place.
- They keep contradicting themselves (an age, a travel time, a rule of
  magic) and want one source of truth.
- They ask for a character sheet, world-building notes, or a series bible.

For planning scenes, use `scene-cards`; for drafting one, `fiction-scene`;
for how characters talk, `dialogue-polish`; for a tabletop campaign,
`campaign-notes`.

## What to ask for

- **The material.** Draft chapters, an outline, notes, or a description from
  memory. If they give only an idea, build a skeleton with the headings and
  `[?]` placeholders rather than inventing a cast.
- **Scope.** One book or a series. Default: one book.
- **What exists already.** If they have a bible, add to it, never restart.

If they pasted material, start. Ask about genre only if it changes what
belongs in "Rules of the world".

## How to do it

1. Read everything first. List every named person, place, object, date,
   and stated rule before writing any section.
2. **Characters.** For each, record role, want (what they pursue), need or
   flaw (what stands in their way from inside), physical details, voice
   (speech habits, words they use or never use), relationships, and an arc
   line if the material shows one. Keep the writer's own phrases for voice:
   "says 'reckon', never swears" is more useful than "folksy".
3. Separate **main** characters from **minor** ones. Minor characters get a
   single line: name, role, the one or two facts on the page, and the chapter
   where they appear.
4. **Places.** Name, what it looks, sounds, and smells like as written,
   distances and travel times between places, and who lives or works there.
5. **Timeline.** Put events in story order with a date or relative marker
   ("Day 3", "two years before Ch. 1"). Ages and seasons drift easily, so tie
   them to the timeline: if she is 34 in Chapter 1 and the book spans two
   years, she cannot be 34 at the end.
6. **Rules of the world.** For speculative fiction, write each rule as a
   plain statement with its cost or limit and where it was established. For
   realist fiction, record house rules (the town's geography, the year's
   technology).
7. **Continuity list.** Every small fixed fact, each with the chapter that
   established it. This is the list the writer checks before revising.
8. **Contradictions, plans, and open questions.** When the material
   disagrees with itself, record both versions and the chapters, and do not
   pick one. A change the text explains (a faster trip on a forced march) is
   a second fact, not a contradiction. The writer's plans ("reveal in Ch. 12")
   go under Planned, never into the facts. List undecided things under open
   questions.
9. When updating an existing bible, add new facts with their chapter and log
   conflicts, leaving the existing entry until the writer decides. Report
   what was added and what conflicts, and give only the changed sections
   unless they ask for the whole bible.

## The format

```markdown
# Story bible: [Title]
[Book 1 of series, or standalone] · Updated [YYYY-MM-DD]

## Premise
[One or two sentences, in the writer's words if they gave them.]

## Main characters
### [Name]
- **Role:** [protagonist, antagonist, mentor...]
- **Wants:** [goal]
- **Flaw or need:** [inner obstacle]
- **Looks:** [age, build, hair, eyes, marks, clothes] (Ch. [n])
- **Voice:** [speech habits, vocabulary, tics]
- **Relationships:** [name: nature of the bond]
- **Arc:** [where they start, where they end, if known]

## Minor characters
- **[Name]:** [role]. [Fact]. (Ch. [n])

## Places
### [Place]
- [Description as written] (Ch. [n])
- [Distance or travel time to other places]

## Timeline
| When | Event | Chapter |
| --- | --- | --- |
| [Date or marker] | [Event] | [n] |

## Rules of the world
- **[Rule]:** [how it works]. Limit or cost: [limit]. (Ch. [n])

## Continuity list
- [Small fact] (Ch. [n])

## Contradictions to resolve
- [Fact A] (Ch. [n]) vs [Fact B] (Ch. [m])

## Planned (not yet on the page)
- [The writer's intention] (for Ch. [n])

## Open questions
- [?] [Undecided detail]
```

## Example

Input: "ch1: Mara Voss, 34, ferry pilot on Lake Orrin, left hand burned scar.
says 'right then' a lot. brother Tomas runs the boatyard. ch3: Tomas says she's
32. ferry crossing takes 40 min. ch4 the lake freezes in Ninth Month."

```markdown
# Story bible: [?] (title not given)
Standalone · Updated 2026-10-27

## Main characters
### Mara Voss
- **Role:** ferry pilot on Lake Orrin; [?] protagonist
- **Looks:** 34 (Ch. 1); burn scar on her left hand (Ch. 1)
- **Voice:** says "right then" often
- **Relationships:** Tomas: brother

## Minor characters
- **Tomas:** Mara's brother, runs the boatyard. (Ch. 1)

## Places
### Lake Orrin
- Ferry crossing takes 40 minutes. (Ch. 3)
- Freezes in Ninth Month. (Ch. 4)

## Continuity list
- Mara's scar: left hand, burn. (Ch. 1)
- Calendar uses numbered months ("Ninth Month"). (Ch. 4)

## Contradictions to resolve
- Mara is 34 (Ch. 1) vs Tomas says she is 32 (Ch. 3).

## Open questions
- [?] Mara's want and flaw are not on the page yet.
- [?] Is Tomas older or younger?
```

## Pitfalls

- **Inventing backstory.** Plausible filler becomes a second book the writer
  did not choose. Mark gaps `[?]`.
- **Resolving contradictions silently.** The writer decides; show both.
- **Facts without chapters.** Cite the chapter every time, or it cannot be
  checked.
- **Adjectives instead of details.** Not "mysterious", but what the text
  shows: the coat, the limp, the accent.
- **Rules with no limits.** A power with no cost is where plot holes come
  from. If the source gives none, note the missing limit as an open question.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. When a bible already exists, update that note rather than a new one.
