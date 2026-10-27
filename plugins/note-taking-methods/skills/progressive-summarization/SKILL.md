---
name: progressive-summarization
description: Distills a saved article or note in layers (trimmed passages, bold, highlights, and an executive summary) so it can be reread in seconds. Use when someone asks for progressive summarization, is building a second brain, wants to distill a long saved note or article, has a backlog of saved highlights they never reread and wants them distilled in layers, or wants a note made skimmable for later.
---

# Progressive summarization

Progressive summarization is a way of distilling saved material in layers,
each one smaller than the last, so a note can be understood at a glance
months later without rereading it all. Tiago Forte described it as part of
his *Building a Second Brain* approach. The layers are:

1. **Layer 1**: the saved material itself, already trimmed to the passages
   worth keeping.
2. **Layer 2**: the best of those passages in **bold**.
3. **Layer 3**: the best of the bold in ==highlight==.
4. **Layer 4**: a short executive summary in the person's own words, at the
   top.

The method works because it spreads effort over time: each layer is added
only when the note is used again, so only notes that keep proving useful get
the full treatment. A later reader can stop at whichever layer gives them
enough.

## When to use it

- Someone has saved an article, transcript, or set of highlights and wants
  it distilled.
- They have long notes they never reread because they are too long.
- They are coming back to a note for a project and want it skimmable.
- They ask for progressive summarization or "layers" of highlighting.

For a stand-alone summary with no layers, use `summary-writer`. To turn a
source into structured notes from scratch, use `source-to-notes` or
`literature-notes`. To file the result, use `para-organizer`.

## What to ask for

- **The material**: the article, transcript, or note.
- **Which layer to stop at.** Default: all four for a short piece, layers 1
  and 2 for a long one with an offer to continue, since the method says to
  add layers only as a note proves useful.
- **What they want it for**, if a project is mentioned. The project decides
  what counts as "best".

## How to do it

1. **Layer 1: trim.** Keep the passages that are surprising, useful, or
   well put. Drop introductions, filler, ads, and repetition. Copy what you
   keep word for word; this layer is still the source's text. For
   a long article, aim to keep a fifth or less. If they give their own
   highlights (from a reader app), those are layer 1; do not trim them
   further without asking, except that an exact duplicate is kept once and
   mentioned. Their own comments on a highlight go on an indented line
   starting "My note:", so they are never read as the source's words.
2. **Layer 2: bold.** Bold the phrases that carry the main points: about
   one in five of the kept sentences, and only the key part of a sentence
   when the rest is setup.
3. **Layer 3: highlight.** Within the bold, highlight with `==text==` only
   the few lines that would let someone recall the whole piece. About one in
   five of the bold, often three to six phrases in total. On a short set of
   hand-picked highlights the ratios give too little: bold about a third and
   highlight one or two. Not every app
   renders `==highlight==`; if theirs does not, use bold italics.
4. **Layer 4: executive summary.** Write three to five bullets at the top in
   the person's own plain words, saying what the piece means for them, not
   only what it says. You are drafting words for them, so mark the "what it
   means for me" bullet `(proposed)` for them to confirm or rewrite; only
   they know the use.
5. Keep each layer visible. Do not delete the lower layers when you add a
   higher one; the point is that a reader can drill down.
6. Keep the source reference and date saved, so the note can be traced.

## The format

```markdown
# [Title of the source]
[Author], [publication or link] · Saved [YYYY-MM-DD]

## Summary
- [Point in the person's own words]
- [Point]
- [What this means for them or their project]

---

## Notes
[Kept passage, with **the key phrase in bold**, and ==the most important
phrase highlighted==.]

[Kept passage.]

[Kept passage, with **a bold phrase**.]
```

## Example

Input: a pasted blog post about writing every day, around 1,200 words,
including: "The goal is not to write well every day. The goal is to keep the
habit alive, because a habit that survives a bad day is worth more than a
perfect session once a month." and "Set the bar so low you cannot fail: one
sentence counts." They want it for their newsletter.

```markdown
# [?] Title not given: a blog post on writing every day
[?] author, [?] link · Saved 2026-10-27

## Summary
- Daily writing is about keeping the habit, not about quality each day.
- Make the minimum tiny (one sentence) so a bad day does not break the streak.
- For my newsletter: a daily sentence may beat waiting for a perfect weekly
  draft (proposed).

---

## Notes
The goal is not to write well every day. **The goal is to keep the habit
alive, because ==a habit that survives a bad day is worth more than a
perfect session once a month.==**

**Set the bar so low you cannot fail: ==one sentence counts.==**
```

## Pitfalls

- **Bolding too much.** If half the note is bold, nothing is. Each layer
  should be roughly a fifth of the one below.
- **Doing all four layers on everything.** The method saves effort by
  distilling only notes that get used. Offer to stop early.
- **Rewriting the source in layers 1 to 3.** Those layers keep the source's
  words. Only the summary is in the person's words.
- **A summary that only restates.** The top layer should say why the piece
  matters to the person.
- **Losing the source.** Without author, link, and date, a distilled note
  cannot be checked or cited later.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. If the material came from an existing note, offer to update that note in
place so the layers build on one copy.
