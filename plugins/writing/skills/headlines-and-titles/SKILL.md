---
name: headlines-and-titles
description: Writes title and headline options in plain, curious, benefit, and number styles, explains the trade-offs, and never promises what the piece does not deliver. Use when someone asks for "a title", "headline ideas", "a better subject line", "what should I call this", or has a draft or talk that needs a name.
---

# Headlines and titles

A title has one job before any other: to tell the right reader that this piece
is for them. Everything else (curiosity, wit, keywords) is in service of that.
Titles fail in two opposite ways. Some are so plain they could sit on any piece
on the subject ("Thoughts on remote work"). Others promise more than the piece
delivers, which earns the click and loses the reader's trust for next time.

The useful range sits between those, and it depends on where the title will
appear. A search result rewards plain words that match what people type. A
social feed rewards curiosity and specifics. An inbox rewards clarity about
what is inside. A talk title has to survive being read aloud by a host. This
skill writes options across styles, says what each trades, and recommends one.

## When to use it

- A blog post, article, essay, or newsletter needs a title.
- An email or newsletter needs a subject line.
- A talk, workshop, or presentation needs a title for a program.
- A draft title feels flat or overpromises.

For naming notes, `note-titles-and-tags` fits better. For the whole piece,
`blog-post` and `newsletter-issue` include title options as part of the draft.

## What to ask for

- **The piece**, or a summary of what it says and its main takeaway. A title
  written without reading the piece is a guess.
- **Where the title will appear**: search, social, inbox, conference program,
  notes app. Default: a blog or website, where search and sharing both matter.
- **Constraints**: length limits, house style, words that must be included.
- **Their working title**, if they have one.

## How to do it

1. **Find what the piece actually delivers.** One sentence: what the reader
   gets. Every title must be true to that sentence. Note the most specific
   thing in the piece: a number, a result, a surprising claim, a vivid phrase.
2. **Write options in four styles**, two or three each. Skip a style that
   does not fit and say why (Number when the piece has no real count or
   figure, Benefit when it offers the reader nothing practical) rather than
   forcing one:
   - **Plain:** says exactly what it is. "How to repot a root-bound plant."
     Best for search, reference, and how-to. Trade-off: no pull for browsers.
   - **Curious:** opens a question the piece answers. "Why my monstera stopped
     growing (it wasn't the light)." Best for feeds and newsletters. Trade-off:
     says less about content; turns into clickbait if the answer is ordinary.
   - **Benefit:** names what the reader gains. "Repot once and your plant will
     grow for two years." Best for practical pieces. Trade-off: can sound like
     an ad; the benefit must be real and supported by the piece.
   - **Number:** a list or a figure. "Five signs your plant needs a bigger
     pot." Best when the piece really is a list. Trade-off: overused; an odd,
     specific number from the piece beats a round invented one.
3. **Use specifics from the piece.** A real number, a named thing, a phrase
   the writer used. Specific titles beat general ones in every style.
4. **Check length for the setting.** Search results show roughly 50 to 60
   characters; inbox subject lines around 40 to 60 on a phone. Put the
   important words first so a cut-off title still makes sense. Where length
   matters, give a count for every option. For email, pair the subject line
   with preview text (the line shown beside it) when a second option fits.
5. **Test each option:**
   - Does the piece deliver exactly this? If the title asks a question, does
     the piece answer it?
   - Could this title sit on someone else's piece about the same topic? If so,
     it is too generic.
   - Would the intended reader recognize it as for them?
   - Read it aloud. Is it easy to say (essential for talks)?
6. **Recommend one** and say why it fits the setting. If the writer has a
   working title, judge it by the same tests and say keep, fix, or retire.
   Offer a subtitle where the form allows one: a curious title with a plain
   subtitle often gets both jobs done ("The fold: on learning to cook from memory").
7. **Never write clickbait.** No "you won't believe", no withheld answers to
   trivial questions, no shock words for ordinary content, no numbers the piece
   does not contain.

## The format

```markdown
**What the piece delivers:** [One sentence]
**Where it appears:** [Setting]

**Plain**
1. [Title] ([characters])
2. [Title]

**Curious**
3. [Title]
4. [Title]

**Benefit**
5. [Title]

**Number**
6. [Title]

**Recommended:** [Number and title]
[Why it fits the setting, and any subtitle]

**Trade-offs**
- [Style]: [what it gains and gives up for this piece]
```

## Example

Input: a post about switching a small bakery's custom cake orders from paper
slips to a shared tablet spreadsheet, which cut missed orders from about five
a week to one. For the bakery's blog, shared on Instagram.

```markdown
**What the piece delivers:** How one bakery cut missed orders from about
five a week to one by moving order slips to a shared spreadsheet.
**Where it appears:** blog, shared on Instagram.

**Plain**
1. Moving our order slips to a shared spreadsheet (46)
2. How we track custom cake orders now

**Curious**
3. The paper slip that kept losing us cake orders
4. Why we stopped writing orders on paper

**Benefit**
5. From five missed orders a week to one

**Number**
6. One spreadsheet, one missed order a week

**Recommended:** 3. The paper slip that kept losing us cake orders
It reads well on Instagram, names a problem other bakers have, and the post
answers it. Use number 1 as the subtitle for search.

**Trade-offs**
- Plain: easy to find by search, but nobody scrolling stops for it.
- Benefit: the strongest result, but "five to one" needs the post's context
  to make sense.
```

## Pitfalls

- **Writing before reading.** A title from the topic alone misses the specific
  thing that makes this piece worth reading.
- **Promising more than the piece gives.** "The only guide you'll need" on a
  short post. Match the claim to the content.
- **Generic titles.** If it fits any piece on the topic, it is a label. Add a
  specific.
- **Cleverness over clarity.** A pun the reader needs the piece to understand
  does not work on its own. Pair it with a plain subtitle.
- **Ignoring the setting.** A curious title can sink in search results; a
  plain one can vanish in a feed. Choose for where it lives.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app. Saving the options in the note holding the piece keeps the unused ones on
hand for a social post or a later revision.
