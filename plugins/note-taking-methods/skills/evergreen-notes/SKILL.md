---
name: evergreen-notes
description: Writes evergreen notes, each titled with a claim, holding one concept, linked densely to other notes, and meant to be revised over time. Use when someone wants concept notes that grow, asks to turn ideas into claim-titled notes, wants to revisit and sharpen old notes, or mentions evergreen notes or Andy Matuschak.
---

# Evergreen notes

An evergreen note is written to be useful for years, not for one class or
one project. Each note holds one concept, its title states that concept as a
claim ("Writing is how thinking gets tested"), and it links to the notes it
builds on or argues with. The note is never "done": each time the person
comes back to it with new reading or experience, it gets sharper. The term
is most closely associated with Andy Matuschak, who wrote about the practice
in his public notes.

The claim title is the heart of it. A title like "Habits" is a bucket; a
title like "Habits form faster when the cue is fixed" is an idea you can
agree with, test, and link to in a sentence. Writing in this style, the
titles start to read like an argument, and a draft can be assembled by
stringing them together. It suits writers, researchers, and anyone who wants
their notes to compound.

## When to use it

- Someone wants to turn reading, conversations, or their own thinking into
  notes they will keep building on.
- They have old notes with vague titles and want them rewritten as claims.
- They want an existing note revisited with new material.
- They mention evergreen notes or "notes that grow".

For a box of atomic notes with IDs and a formal fleeting, literature, and
permanent pipeline, use `zettelkasten`. To find links among existing notes,
use `connect-notes`. To fix titles and tags across a whole collection, use
`note-titles-and-tags`.

## What to ask for

- **The material**: an idea, a reading, notes, or an existing note to revise.
- **Related notes they already have**, by title, or search a connected notes
  tool. Default: link only to notes you have actually seen, and suggest
  searches for the rest.
- **Whether this is new or a revision.** Default: infer it. If they pasted an
  existing note, treat it as a revision.

## How to do it

1. Find the concepts. A concept earns a note when it can be stated as a claim
   someone could disagree with, and it would be useful in more than one
   context.
2. Write the **title as a complete claim** in plain words, under about twelve
   words. Test it: can the title be used in a sentence ("This is why
   [title]")? If not, rewrite it. If the person offered the idea as a hunch,
   still title it as a plain claim and say "untested" under Sources.
3. Write the body to argue for the title. Start with the claim in a sentence
   or two, then the reasoning, an example, and where it stops being true.
   Short notes are fine. Use the person's voice, not the source's. Take the
   reasoning, example, and limit from the material or the person; where one
   is missing, leave an `[?]` prompt for it rather than supplying your own.
   An implication you draw yourself is marked `(added)`.
4. Link inside sentences where possible ("This is one reason
   [[Feedback loops shorten learning]]"), so each link carries its reason.
   Add a short list of related notes at the end only for links that did not
   fit the prose.
5. For a **revision**, keep what still holds, sharpen the title if the
   thinking moved, add the new material with its source, and record the
   change in a dated line under "Revisions". If the new material splits the
   idea in two, propose two notes. If a new concept overlaps a note they
   already have, ask to see that note: it may be a revision, not a new one.
6. Mark questions the note cannot yet answer as `[?]`. Those are where the
   next revision starts.
7. Point out any note that has grown to hold several claims and propose the
   split.

## The format

```markdown
# [Claim stated as a complete sentence]

[The claim in one or two sentences.]

[Why it holds. An example. Where it stops holding. Links woven into the
sentences, like [[Other claim title]].]

**Related**
- [[Claim title]]: [how it relates]

**Sources**: [author, title, or "own thinking"]
**Open**: [?] [What this note cannot answer yet]

**Revisions**
- [YYYY-MM-DD]: [what changed]
```

## Example

Input: an existing note titled "Meetings" that says "too many meetings, people
can't focus, maker vs manager schedule thing", plus new reading that a single
interruption costs far more than its own length. Existing notes: "Batching
interruptions protects deep work" and "Context switching has a cost beyond the
switch".

```markdown
# One meeting in the afternoon can cost a maker the whole afternoon

Deep work needs long, unbroken blocks, and a single interruption costs far
more than its own length: the time before a meeting is too short to start
anything hard, so it is lost too.

This is why a calendar that looks mostly free can still produce little. It
also explains why [[Batching interruptions protects deep work]]: grouping
meetings leaves the rest of the day whole. It holds less for people whose
work is mostly coordination, where the meeting is the work.

**Related**
- [[Context switching has a cost beyond the switch]]: the mechanism behind it

**Sources**: the maker and manager schedule idea; reading on interruption cost
**Open**: [?] Does a fixed "no meeting" morning work as well as a whole day?

**Revisions**
- 2026-10-27: Retitled from "Meetings" as a claim; added the cost of the gap before a meeting.
```

## Pitfalls

- **Topic titles.** "Productivity" can never be finished or linked in a
  sentence. Every title is a claim.
- **Hedged claims.** "Meetings might sometimes be bad" says nothing. State
  the claim plainly and put the limits in the body.
- **Never revising.** A note written once is a plain note. When the person
  shares new material, offer to update the notes it touches.
- **Losing the old thinking.** Record what changed in "Revisions" so the
  person can see how their view moved.
- **Links with no reason.** A link in a sentence explains itself. A bare
  link list does not.
- **Attributing the person's synthesis to a source.** Keep sources honest:
  what the source said, and what the person concluded, are different.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. For a revision, offer to replace the old note rather than create a second
copy, so links keep pointing at one place.
