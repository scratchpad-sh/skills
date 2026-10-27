---
name: newsletter-issue
description: Writes a newsletter issue from the week's notes and links, with one main story, a few short items, a sign-off, and subject line options. Use when someone says "write this week's newsletter", "draft my newsletter", "turn these links into an issue", or keeps a running note of things to share with subscribers.
---

# Newsletter issue

A newsletter is a letter that happens to go to many people. The ones people
keep opening sound like a particular person talking to them, have a reason to
exist this week, and respect the reader's time. The ones that get archived
unread are link dumps with a logo on top.

The structure that works for most personal and small-business newsletters is
simple: one main story that gets real space, a handful of short items that each
say why they are worth a click, and a sign-off that sounds like the writer. This
skill builds an issue in that shape from whatever the person collected during
the week, and writes subject lines, which decide whether any of it gets read.

## When to use it

- Someone keeps a note of links, thoughts, and news through the week and needs
  to turn it into an issue.
- A personal newsletter sent weekly, every two weeks, or monthly.
- A small business, club, or project update for members or customers.
- A newsletter that has drifted into link lists and wants a voice back.

For a standalone article meant for search and sharing, use `blog-post`. For
subject lines and headlines on their own, use `headlines-and-titles`. To match
the writer's own voice closely, run `voice-match` on past issues first.

## What to ask for

- **The week's material**: notes, links (with a line on why each caught their
  eye), news, and anything they want to say.
- **Past issues or the newsletter's usual shape**, if there is one. Match it
  over these defaults.
- **The audience** and their relationship to the writer (paying customers,
  friends, followers of their work). Default: people who chose to subscribe
  because they like the writer's taste.
- **Length.** Default: 500 to 900 words, readable in under five minutes.

## How to do it

1. **Pick the main story.** The item with the most to say: a thing the writer
   did, learned, made, or thinks. Prefer the writer's own experience over
   someone else's link. If nothing stands out, ask which item they care about
   most this week.
2. **Write the opening as a letter.** A line or two in the first person, about
   something real from the week, leading into the main story. No "Welcome to
   issue 47 of..." unless that is the newsletter's tradition.
3. **Give the main story room.** Three to six paragraphs: what happened or what
   it is, why it matters to this reader, and the writer's take. A take is the
   point of a newsletter; summarizing someone else's article is not enough.
   If a second item also has the writer's take in the notes (a book they
   finished, a trip), give it a short section of one or two paragraphs
   after the main story rather than squeezing it into a short item.
4. **Write the short items.** Three to six, each a bold lead or link text plus
   one to three sentences saying what it is and why the reader might care.
   "Worth reading" is not a reason. "The best explanation of compound interest
   I've seen, with no math beyond multiplication" is.
5. **Use only links and facts from the notes.** Never invent a URL, a quote
   from a linked piece, or a detail about an article the writer has not
   described. If a link has no note, ask, or mark `[NEEDS: why this one]`.
6. **Add housekeeping last and short**: an event, a sale, a schedule change.
   One line each. Check a stated weekday against its date ("Thurs 11/19")
   and ask if they do not match. Write dates for readers ("Thursday,
   November 19"), not in the year-first form used for notes.
7. **Sign off in the writer's voice.** A question to reply to, a line about
   next week, or just the name. Inviting replies is the cheapest way to make a
   newsletter feel like correspondence.
8. **Write subject lines.** Five options. Most should be specific to this
   issue's main story; a mailbox shows maybe 40 to 60 characters, so front-load
   the interesting words. Add preview text (the line shown after the subject)
   for the best two.
9. **Read it as a subscriber.** Would you open it, and would you read past the
   first item? Cut anything that is only filler to make it look full. If
   the notes are too thin for the usual length, say so after the draft and
   name the `[NEEDS:]` holes that would fill it most, rather than padding.

## The format

```markdown
**Subject line options**
1. [Specific to the main story]
2. [...]
3. [...]
4. [...]
5. [...]

**Preview text:** [For options 1 and 2]

---

[Greeting, if the newsletter uses one]

[Opening: a line or two from the week, leading in]

## [Main story heading]
[Three to six paragraphs with the writer's take]

## [Section name for short items, e.g. "Elsewhere"]
- **[Item or link text]**: [what it is and why it is worth the click]
- **[Item]**: [...]

## [Housekeeping, if any]
- [One line]

[Sign-off line]
[Name]
```

## Example

Input notes: "this week: finally finished the oak bench after 3 months. joinery
was the hard part, redid the mortises twice. link: article on Japanese hand
saws (pull stroke = thinner blade). link: local lumber yard now sells offcuts
by the pound. reminder: workshop open house Sat 10am."

```markdown
**Subject line options**
1. The bench is done (third try on the mortises)
2. Three months, one oak bench
3. What I got wrong cutting mortises
4. A bench, a saw, and offcuts by the pound
5. Finished. Finally.

**Preview text:** 1: Plus why pull saws can be thinner, and an open house
Saturday. 2: The joinery was the hard part.

---

Hi all,

The oak bench is finished. It took three months.

## The mortises, twice
The joinery was the hard part. I redid the mortises twice.
[NEEDS: what went wrong the first two times, a sentence on each.]

## Elsewhere
- **Japanese hand saws**: an article on why pull saws can use a thinner
  blade: they cut on the pull stroke. [NEEDS: link] [NEEDS: a line on why
  it caught your eye]
- **Offcuts by the pound**: the local lumber yard now sells them.
  [NEEDS: a line on what you would use them for]

## Open house
- The workshop is open Saturday at 10am. Come say hello.

What's on your bench this week? Hit reply.
[Name]
```

## Pitfalls

- **A link dump.** Ten links with no reasons is a bookmark folder. Fewer items,
  each with a reason.
- **No take on the main story.** Readers subscribed for the writer, not a
  summary. Ask what they think if the notes do not say.
- **Corporate voice.** "We're excited to share" sounds like a press release.
  Write as one person to another.
- **Invented details about links.** Describe a link only from the writer's
  notes. Ask when there is nothing to go on.
- **Generic subject lines.** "Newsletter #47" or "This week's update" get
  skipped. Name what is inside.
- **Padding to look full.** A short issue with one good story beats a long one
  with filler.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app. A dated title ("Newsletter 2026-10-27") keeps past issues easy to find,
and the same block pastes into most email tools.
