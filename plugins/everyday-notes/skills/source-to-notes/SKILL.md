---
name: source-to-notes
description: Turns an article, video, podcast, nonfiction book, or web page into notes with the main argument, key points, evidence, located quotes, and the reader's take. These are notes to keep, not a summary to send, and they always carry the source link. Use when someone shares a link, a transcript, or e-reader highlights from a nonfiction book and asks for notes, wants a way to remember and reuse what they read, watched, or listened to, or wants to save a source for later use.
---

# Source to notes

Notes on a source are worth keeping when they answer three questions later:
what was the author actually arguing, what backed it up, and what did I think?
A summary alone answers the first. Notes that also keep the evidence, a few
exact quotes with their locations, and the reader's own reaction are the ones
that get reused in an essay, a decision, or a conversation months on.

The link and the locations matter as much as the content. A quote without a
timestamp or page cannot be checked or cited, and a note without its source
link is a rumor.

## When to use it

- Someone shares an article, essay, or web page and asks for notes.
- They paste a video or podcast transcript.
- They want to save something they read so they can find and use it later.
- They are collecting sources for a piece of writing or a decision.

For academic reading that feeds a literature review, `literature-notes` fits
better. For building notes into a long-term idea network, use `zettelkasten`
or `evergreen-notes`. For layered highlighting over time, use
`progressive-summarization`. For a short summary to send someone, use
`summary-writer`.

## What to ask for

- **The source**: the text, a transcript, or a link you can read. If you
  cannot open the link, ask them to paste the text.
- **Why they are reading it**, if it would change what to keep. Default: a
  general-purpose note.
- **Their own reaction**, after you draft. Default: leave the "My take"
  section with prompts for them to fill rather than inventing their view.

## How to do it

1. **Record the source details**: title, author or host, publication or show,
   date, link, and for audio or video the length. Mark missing details `[?]`.
   If they said why they are reading it, add a "Read for:" line, and let
   that purpose decide which points, gaps, and follow-ups to keep.
2. **Find the main argument** in one or two sentences: what the author wants
   the reader to believe or do. If the piece is descriptive rather than
   argumentative, say what it explains instead.
3. **Key points**: the claims that carry the argument (five to eight for a
   full article or episode, fewer for a short piece), in the order that makes
   the logic clear (not always the order presented). Plain words, short
   bullets. With more than one speaker, say who made each claim; a host's
   pushback is not the guest's argument.
4. **Evidence**: for each important point, what supports it (data, study,
   example, anecdote, expert opinion) and how strong it looks. Note when a
   big claim rests only on an anecdote. Keep figures exactly as given.
5. **Quotes**: two to five lines worth keeping verbatim, each with its
   location: a timestamp for audio and video, a page or section for text,
   a paragraph description for a web page. Only quote what is in the source.
   If a transcript has no timestamps, give the nearest section or say "no
   timestamp in transcript"; never estimate one.
6. **Counterpoints and gaps**: what the source does not address, where it
   overreaches, or who would disagree. When the publisher has a stake (a
   vendor's blog praising its own product, a sponsored episode), say so
   first. Mark each `(added)`, since these are your observations, not the
   author's.
7. **My take**: prompts for the reader (Do I agree? What would I use this
   for? What does it connect to?). Fill it only with what they tell you.
8. **Follow-ups**: sources the piece cites that are worth reading, and
   claims worth checking.

## The format

```markdown
# [Title]: [Author or host]
[Publication or show] · [YYYY-MM-DD] · [Type: article / video / podcast / page] ·
[Length, for audio or video]
Source: [link]
Read for: [their purpose, if they gave one]

## Main argument
[One or two sentences]

## Key points
- [Point]

## Evidence
- [Point]: [what supports it] ([data / study / anecdote / opinion])

## Quotes
- "[Exact words]" ([timestamp, page, or section])

## Counterpoints and gaps
- [Observation] (added)

## My take
- [The reader's own response]

## Follow-ups
- [ ] [Source to read or claim to check]
```

## Example

Input: a podcast transcript, "Deep Work Hour, ep. 52, guest Dr. Lena Ruiz",
in which she argues four-day weeks raise output, cites a 61-company UK trial
"where most companies kept the schedule", and says at 14:20 "the fifth day
was mostly meetings anyway".

```markdown
# Deep Work Hour, ep. 52: Dr. Lena Ruiz (guest)
Deep Work Hour · [?] date · Podcast · [?] length
Source: [?] link not given

## Main argument
Four-day weeks raise output, and the fifth day was mostly meetings
anyway.

## Key points
- Four-day weeks raise output.
- In a UK trial of 61 companies, most kept the four-day schedule.
- The fifth day was mostly meetings anyway.

## Evidence
- Trial results: a UK trial of 61 companies, "most" kept the schedule
  (study, as described by the guest; figures for output not given).
- Fifth day was mostly meetings: guest's own observation (opinion).

## Quotes
- "The fifth day was mostly meetings anyway." (14:20)

## Counterpoints and gaps
- Keeping the schedule is not the same as output rising. The output claim
  needs the trial's own figures. (added)

## My take
- Do I agree? Would this work in my team? [your answer]

## Follow-ups
- [ ] Find the UK trial report and check what it measured.
```

## Pitfalls

- **Summary without a source.** Always keep the link and the details; a note
  you cannot trace is hard to use.
- **Quotes without locations.** Add the timestamp or page every time.
- **Paraphrase in quotation marks.** Only verbatim words get quotes.
- **Carrying the author's confidence.** Note how strong the evidence is,
  especially when a sweeping claim rests on one story.
- **Notes as long as the source.** Five to eight key points. Cut the rest.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Titling the note with the source's title and author makes it easy to
find again and to cite.
