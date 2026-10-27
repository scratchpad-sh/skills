---
name: zettelkasten
description: "Turns reading or loose thoughts into Zettelkasten notes: literature notes plus permanent notes that each hold one idea, carry an ID, and link to others. Use when someone mentions a Zettelkasten or slip box, wants atomic linked notes, or wants to process a book or article into a personal knowledge base that grows over time."
---

# Zettelkasten notes

A Zettelkasten ("slip box") is a collection of short notes, each holding one
idea in the writer's own words, each with a fixed ID, and each linked to the
notes it relates to. The sociologist Niklas Luhmann kept one for decades and
credited it with much of his output. It works because the value sits in the
links: a new note is only finished when it has been placed among the old
ones, so over time the box starts suggesting connections the writer did not
plan.

The method, as Sönke Ahrens lays it out in *How to Take Smart Notes*, uses
three kinds of note. **Fleeting notes** are quick captures
that get thrown away once processed. **Literature notes** record what a
source says, briefly and with a reference. **Permanent notes** are the
writer's own ideas, written to stand alone and linked into the box. This
skill does the processing: it turns raw material into literature notes and
proposes permanent notes linked to what the person already has.

## When to use it

- Someone has finished a book, paper, or article and wants to keep what
  mattered in a linked system.
- They have a pile of fleeting notes or highlights to process.
- They have an existing note collection and want a new idea placed into it.
- They ask for a Zettelkasten, slip box, or "atomic notes" by name.

For concept notes with claim titles that are revised over months, use
`evergreen-notes`. For one structured note per source with no linking step,
use `literature-notes`. To find links across notes already written, use
`connect-notes`.

## What to ask for

- **The material.** Highlights, a chapter, a transcript, or their own fleeting
  notes. Start as soon as you have it.
- **Their existing notes**, or at least their titles and IDs, so links point
  at real notes. If a notes tool is connected, search it yourself. Default:
  propose links only to notes created in this session and list "look for
  links to" topics for the person to check.
- **Their ID scheme**, if they have one. Default: a timestamp ID such as
  `202610271430`, which sorts by creation time and never collides.

## How to do it

1. Read the whole source before writing anything. Ask what in it would still
   matter to this person in five years.
2. Write **literature notes** first: one short note per source, a few bullet
   points in your own words with page or timestamp references, plus any
   quotation kept exact and in quotation marks. These record what the author
   said, not what you think. If the material is the person's own thinking
   with no source, skip this step and write **Source**: own thought, [YYYY-MM-DD].
   For a podcast, talk, or video, title the note with the speaker and the
   show or talk ("Lit: [Speaker] on [Show], [episode]"), mark an unknown
   episode `[?]`, use timestamps, and attribute any figure to the speaker,
   since a number heard once may be misremembered.
3. Pick the ideas worth a **permanent note**. Usually three to seven from a
   book, one to three from an article. An idea qualifies when it is useful
   outside its source, surprising, or an answer to a question the person
   cares about.
4. Write each permanent note as one idea, in full sentences, as if explaining
   it to someone who never read the source. No "as mentioned above". Aim for
   one to three short paragraphs. When the idea is the person's own,
   sparked by a source, write it in their voice and give both: **Source**:
   own thought, [YYYY-MM-DD]; builds on [[ID Literature note]].
5. Give each permanent note an ID and a title that states the idea, not the
   topic: "Spaced practice beats massed practice for long-term recall", not
   "Spacing".
6. Link each note. For every link, say **why** the notes connect in a short
   phrase ("contradicts", "an example of", "explains why"). A bare list of
   links decays into noise.
7. Name an **entry point**: the index, hub, or structure note where this
   cluster should be listed, or propose a new one if three or more notes now
   share a theme.
8. List fleeting notes that were processed so the person can delete them.

## The format

```markdown
# [ID] [Title that states one idea]

[One to three short paragraphs in your own words. Self-contained.]

**Links**
- [[ID Title of related note]]: [why they connect]
- [[ID Title of related note]]: [why they connect]

**Source**: [[ID Literature note title]], [page or timestamp]
**Entry point**: [[Hub or index note]]
```

```markdown
# [ID] Lit: [Author], [Short title]

- [Point in your own words] (p. [page])
- "[Exact quotation]" (p. [page])

**Permanent notes from this source**: [[ID Title]], [[ID Title]]
```

## Example

Input: highlights from chapter 2 of *Make It Stick* by Brown, Roediger, and
McDaniel: "testing yourself improves retention more than rereading (p. 31)",
"the effort of retrieval is what strengthens the memory (p. 33)". Existing note: `202609120910 Desirable
difficulties make learning feel slower but stick better`.

```markdown
# 202610271430 Lit: Brown et al., Make It Stick, ch. 2

- Self-testing improves retention more than rereading. (p. 31)
- Retrieval effort is what strengthens the memory. (p. 33)

**Permanent notes from this source**: [[202610271435 Recall works because it is effortful]]
```

```markdown
# 202610271435 Recall works because it is effortful

Pulling an idea out of memory strengthens it more than seeing it again.
The struggle to remember is the mechanism, not a side effect, which is
why easy rereading leaves less behind than testing yourself.

**Links**
- [[202609120910 Desirable difficulties make learning feel slower but stick better]]: the broader principle this is a case of
- [?] Look for a note on flash cards or self-quizzing to link as an application.

**Source**: [[202610271430 Lit: Brown et al., Make It Stick, ch. 2]], p. 31-33
**Entry point**: [?] your hub note on learning, if you have one (none shown)
```

## Pitfalls

- **Notes that hold two ideas.** If the title needs "and", split it.
- **Copying the source into permanent notes.** A permanent note is your
  understanding. Quotations belong in the literature note.
- **Links without reasons.** "See also" lists become unreadable. Every link
  says how the notes relate.
- **Inventing links to notes that do not exist.** Link only to notes the
  person showed you or you found. Otherwise suggest a search.
- **Turning every highlight into a permanent note.** Most highlights stay in
  the literature note. Permanent notes are for ideas worth building on.
- **Topic titles.** "Memory" is a folder, not a note. Title the claim.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Save each permanent note as its own note, titled with its ID and title,
so links between them resolve.
