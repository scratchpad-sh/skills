---
name: outline-first
description: Builds and tests an outline before any drafting, with a one-sentence point, a named reader, sections written as claims, and the evidence under each. Use when someone wants to "outline this first", "plan an article", "structure a report or talk", or keeps writing drafts that wander and wants the skeleton right before writing.
---

# Outline first

An outline is the cheapest place to fix a piece of writing. Moving a section in
an outline takes a second; moving it in a finished draft means rewriting the
transitions on both sides. Most structural problems (a buried point, a section
that proves nothing, a reader left without the background they need) are
visible in an outline if the outline is written the right way.

The right way is claims, not topics. A topic outline ("Background", "Results",
"Discussion") only says what each part is about. A claim outline says what each
part shows ("Background: the old system failed under load twice in 2025"),
which means you can read the outline alone and know whether the argument holds.

## When to use it

- Before drafting an article, report, essay, proposal, or talk.
- When a draft keeps sprawling and the person wants to restart from structure.
- When several people need to agree on a document before anyone writes it.
- When someone has a topic and some material but no shape yet.

If they already have notes and want prose straight away, use `notes-to-draft`.
For an argumentative or school essay specifically, `essay-structure` adds the
thesis and counterargument conventions. For a document that needs a decision
from others, `persuasive-argument` fits better. For outline-style notes taken
during a lecture, use `outline-notes`.

## What to ask for

- **The subject and any material** (notes, sources, data, a previous draft).
- **The reader**: who they are and what they already know. Default: a smart
  outsider to the subject.
- **What the reader should do or believe after reading.** If the person does
  not know yet, that is the first thing to work out together.
- **Length and form.** Default: about 1,500 words, with headings. For a
  talk, length is in minutes.

Ask at most these. If the person gave a subject and material, propose a point
and start. Mark the point and anything else you supplied rather than took
from them (the ask, the length) "(proposed)".

## How to do it

1. **Write the point in one sentence.** A full sentence with a verb, one a
   reader could disagree with or act on. If you need "and" to join two
   unrelated ideas, there are two pieces: propose the one the reader can act
   on, make the other support or a "maybe", and say that you chose.
2. **Name the reader and their starting position.** What do they already know,
   what do they believe, and what question will they bring? The outline has to
   get them from there to the point.
3. **List the sections as claims.** Each section heading in the working outline
   is a sentence that the section proves or explains. Three to seven sections
   for most pieces. Each must be necessary for the point: if the point still
   stands without it, it goes in a "maybe" list.
4. **Put the evidence under each claim.** Facts, examples, quotes, data, or
   reasoning, from the person's material. Mark any claim with no evidence yet
   as `[NEEDS: ...]`. A claim with no support is the outline telling you
   where to research. A figure the person half-remembers ("I read somewhere")
   stays `[NEEDS: source]`, never evidence.
5. **Choose the order.** Ask what the reader needs to know before each section
   makes sense. Background they need goes just before the part that needs it,
   not all at the front. Put the strongest material either first or last, never
   in the middle where it is least remembered.
6. **Test the outline before any prose:**
   - Read only the claims, top to bottom. Do they make the point on their own?
   - Does each section depend on the one before it? If two can swap freely,
     consider whether either is needed.
   - Is any section only background or definitions? Fold it into the section
     that needs it.
   - Is one section carrying most of the weight? Split it.
   - Where will the reader object? Mark that spot for an answer.
7. **Write a one-line plan for the opening and the ending.** The opening
   raises the reader's question; the ending answers "so what now?"
8. **Show the outline and stop.** Do not draft until the person agrees. Offer
   to draft next, section by section or all at once.

## The format

```markdown
# Outline: [Working title]

**Point:** [One sentence]
**Reader:** [Who, what they know, what they believe now]
**After reading, they should:** [Believe, decide, or do what]
**Length and form:** [e.g. 1,500 words, article with headings]

## Opening
[How it raises the reader's question: a scene, a number, a problem]

## 1. [Claim this section proves]
- [Evidence]
- [Evidence]
- [NEEDS: missing support]

## 2. [Claim]
- [Evidence]
- Likely objection: [what the reader will push back on, and the answer]

## 3. [Claim]
- [Evidence]

## Ending
[What follows from the point: a decision, an implication, a next step]

## Maybe (cut unless needed)
- [Material that is interesting but not necessary]

## Outline check
- [Result of each test in step 6, one line each]
```

## Example

Input: "I want to write a post for our team wiki arguing we should stop doing
Friday deploys. Had 3 incidents on Fridays this year. People hate weekend
pages. Some say Friday is the only quiet day to ship."

```markdown
# Outline: Ship on Thursday

**Point:** We should stop deploying on Fridays, because Friday incidents
cost us weekends and the quiet-day benefit can be had on Thursday. (proposed)
**Reader:** the engineering team; they know the deploy process and some like
Friday deploys.
**After reading, they should:** agree to a trial of no Friday deploys.
(proposed)
**Length and form:** about 1,500 words, wiki post with headings. (proposed)

## Opening
The last Friday incident, told in two sentences. [NEEDS: date and what broke]

## 1. Friday deploys cause a disproportionate share of our incidents.
- 3 incidents on Fridays this year.
- [NEEDS: total incidents this year, to make the share meaningful]

## 2. A Friday incident costs more than the same incident on Tuesday.
- Weekend pages, which people hate.
- [NEEDS: what a weekend incident costs: hours, people, or fix time]

## 3. The quiet-day benefit does not require Friday.
- Likely objection: "Friday is the only quiet day." Answer: [NEEDS: check
  whether Thursday traffic is similar]

## Ending
A one-quarter trial, with incident counts compared at the end. (proposed)

## Outline check
- Claims alone make the case: yes, if the NEEDS items hold up.
- Section 1 is the weakest: three incidents means little without the total.
```

## Pitfalls

- **Topic headings.** "Background" tells you nothing about whether the piece
  works. Write each heading as a claim, even if the published headings end up
  shorter.
- **Drafting too early.** The outline exists so problems get fixed while they
  are cheap. Wait for agreement.
- **A chronological order by default.** The order you learned things is rarely
  the order a reader needs them. Choose order for the reader.
- **Hiding weak sections.** If a claim has no support, say so in the outline
  check. That is the most useful line in the whole outline.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app. When the draft comes later, saving it under the outline keeps the plan and
the prose together.
