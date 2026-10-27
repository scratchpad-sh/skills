---
name: reading-journal
description: Writes a reading journal entry for a book, with first impressions, quotes with page numbers, characters or arguments, a rating, and book club notes. It centers what stayed with the reader, in their own words. Use when someone finishes or is partway through a book read for its own sake (a novel, a memoir, or any book they want to reflect on), keeps a reading log, wants notes toward a book review, is preparing for a book club, or has highlights and reactions to turn into a journal entry. To pull a nonfiction book's ideas out for reuse, source-to-notes fits better.
---

# Reading journal

A reading journal is a personal record of a book: not a review for strangers
and not a study guide, but what this reader noticed, felt, and wants to keep.
Readers have kept commonplace books of copied passages for centuries; the
modern version adds a few prompts so that a year later the note still brings
the book back.

The two things that matter most are the reader's own reactions, in their own
words, and the passages they marked, with page numbers so they can be found
again. Everything else is scaffolding.

## When to use it

- Someone has finished a book and wants to record it before the details fade.
- They are partway through and want a running entry to add to.
- They have Kindle highlights or photos of marked pages and want them tidied.
- They are going to a book club and want talking points.
- They keep a yearly reading log and want each book in the same shape.

For a scholarly source to cite in writing, `literature-notes` fits better.
For extracting the ideas of a nonfiction book for reuse, use
`progressive-summarization` or `source-to-notes`. For a textbook you are
studying, use `sq3r-reading`.

## What to ask for

- **The book**: title and author. Edition or format if page numbers matter
  (an ebook location is not a page).
- **Their notes**: highlights, quotes, reactions, voice memo transcripts.
- **Fiction or nonfiction.** Default: infer from the book. It decides whether
  the middle section is about characters or arguments.
- **Rating scale**, if they use one. Default: out of five.

Do not ask for an opinion they have not given. If they gave you notes, start.

## How to do it

1. Record the basics: title, author, dates started and finished if given,
   format, and how they came to it (a recommendation, a club pick) if they
   said.
2. Write **first impressions** from their words: what they expected, the
   opening, early reactions. If they wrote the entry only at the end, skip
   this section rather than inventing a "before".
3. Copy **quotes** exactly as given, with page numbers or ebook locations.
   Never complete, correct, or "improve" a quote, and never add a quote from
   memory of the book. If a quote has no page, mark `p. [?]`. Add the
   reader's comment under a quote when they gave one. A line they say is a
   paraphrase goes in plain text, labeled as one, never in quote marks.
4. For **fiction**, note the characters they cared about, what each wanted,
   and how they changed, plus anything about structure, voice, or setting the
   reader remarked on. For **nonfiction**, write the main argument in one or
   two sentences, the key claims with the evidence the book gives, and where
   the reader agreed or pushed back.
5. Write **what stayed with me** in the reader's voice: images, ideas, scenes,
   a change of mind. This is the section they will reread. Keep their
   phrasing. If they gave highlights but no reactions, leave it out and ask
   what stayed with them.
6. Record the **rating** and a one-line reason, if they gave one. For a book
   still in progress, leave out the rating section until the end, and put
   reactions under a heading for this batch from the first entry on
   ("### Through ch. 6 · 2026-10-27"), so later batches line up beneath it.
   First impressions is only for expectations and the opening.
7. If they mentioned a book club or discussion, write **book club notes**:
   three to five open questions that do not have one right answer, and a
   passage worth reading aloud. Draw them from the reader's own reactions
   where possible.
8. Avoid spoilers in the header and first impressions if the note may be
   shared; put endings under a "Spoilers" label.

## The format

```markdown
# [Title] by [Author]
[Format] · Started [YYYY-MM-DD] · Finished [YYYY-MM-DD] · [Rating]/5

## First impressions
[What they expected, the opening, early reactions.]

## Quotes
- "[Exact quote]" (p. [n])
  [Reader's comment, if any.]

## [Characters / The argument]
- **[Name or claim]:** [note]

## What stayed with me
[In the reader's words.]

## Rating
[n]/5. [One-line reason.]

## For book club
- [Open question]
- [Open question]
- **Passage to read aloud:** p. [n]

## Spoilers
[Ending notes, if any.]
```

## Example

Input: "Finished Klara and the Sun (Ishiguro), paperback. 4/5. Loved Klara's
voice, so careful and literal. quote p. 44 that I marked: 'I had to remind
myself...' can't remember the rest. Josie's mom felt cold until the end. Kept
thinking about whether Klara was right to trust the Sun. Club is Thursday."

```markdown
# Klara and the Sun by Kazuo Ishiguro
Paperback · Finished [?] · 4/5

## Quotes
- "I had to remind myself..." (p. 44)
  [?] Quote incomplete; check the page for the full line.

## Characters
- **Klara:** loved her voice, so careful and literal.
- **Josie's mother:** felt cold until the end.

## What stayed with me
Kept thinking about whether Klara was right to trust the Sun.

## Rating
4/5. [?] No reason given.

## For book club
- Was Klara right to trust the Sun? What does that trust say about her?
- Did your view of Josie's mother change by the end? When?
- How does Klara's literal way of seeing change how we read the other
  characters?
- **Passage to read aloud:** p. 44
```

## Pitfalls

- **Inventing quotes.** Even a famous line, if the reader did not give it,
  does not belong in their journal. Mark incomplete quotes `[?]`.
- **Writing a review.** The journal is the reader's response, not a
  balanced critique. Keep their voice and their opinions.
- **A plot summary instead of a response.** A short summary is fine when
  asked for; the reactions are the point.
- **Closed book club questions.** "Who is the narrator?" ends a discussion.
  Ask questions people can disagree about.
- **Spoilers in the opening lines** of a note that might be shared.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A "Reading" folder with one note per book, titled "Title by Author", makes
a year's reading easy to look back on.
