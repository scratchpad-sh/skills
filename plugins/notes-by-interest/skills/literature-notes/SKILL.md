---
name: literature-notes
description: Writes notes on an academic paper (question, method, findings, limitations, relevance, and quotes with page numbers) plus a literature review matrix row. Use when a researcher or grad student is reading a journal article, preprint, or book chapter and wants paper notes, a reading summary, an annotated bibliography entry, or a row for their lit review table.
---

# Literature notes

Literature notes are what a researcher writes after reading a paper, so they
never have to read it the same way twice. A good set answers the questions
that come up later, when writing: what did this paper ask, how did it find
out, what did it actually show, how far can that be trusted, and what does it
mean for my own project. Quotes are kept word for word with page numbers, so
they can be cited without going back to the PDF.

The matrix row at the end is the bridge to the literature review. Each paper
becomes one row with the same columns, and once there are twenty rows, the
patterns (methods everyone uses, populations nobody has studied, findings that
disagree) are visible at a glance.

## When to use it

- Reading a paper for a thesis, dissertation, grant, or review.
- Building a literature review matrix or synthesis table.
- Preparing for a journal club or a reading group.
- Catching up on a field and wanting comparable notes on each paper.

For permanent, linked idea notes drawn from many readings, use
`zettelkasten`. For general book reading, use `reading-journal`. For a careful
first read of a difficult text, use `sq3r-reading`.

## What to ask for

- **The paper**: the PDF text, the abstract and sections, or their own
  highlights. An abstract alone gives thin notes; say so.
- **Their research question or project**, in a sentence, so the "relevance"
  section is about their work. Default: leave relevance as prompts.
- **Matrix columns**, if they already have a review table. Default: the
  columns in the template.
- **Citation style.** Default: APA 7.

If they gave the paper and their topic, start.

## How to do it

1. Write the **full citation** from the paper itself: authors, year, title,
   journal, volume, issue, pages, and DOI. Never fill in a missing DOI, page
   range, or volume from memory. Mark it `[?]`.
2. State the **research question or aim** as the authors frame it, and their
   **hypotheses** if any. If the material does not state the question, infer
   it and mark it `(added)`.
3. Describe the **method** with the details that decide how much to trust the
   result: design, sample size and who the sample was, setting, measures,
   analysis, and timeframe. For theoretical or qualitative work: the approach,
   the corpus or cases, and how they were chosen.
4. List the **findings** with numbers exactly as reported (effect sizes,
   confidence intervals, p-values, themes). Separate what the data showed from
   what the authors conclude, and say so when the conclusion claims more than
   the design allows (causal words from a correlational study).
5. Record **limitations** in two groups: those the authors state, and those
   the reader notices (sample, design, measures, generalizability, conflicts
   of interest). Label the second group as the reader's own critique. If the
   authors state none, write "Stated: none" (or "none in the parts read");
   that is worth knowing, and it is not a gap to fill from your critique.
6. Write **relevance to my work**: what it supports, contradicts, or leaves
   open for their project, and whether they would cite it for a claim, a
   method, or a gap.
7. Keep **quotes** word for word, in quotation marks, with page numbers (or
   section and paragraph for unpaginated sources). Never paraphrase inside
   quotation marks.
8. Add **follow-ups**: papers it cites that are worth reading, named only as
   the person gave them (point to the reference list), and terms to look up.
9. Write the **matrix row** last, compressing the notes into the same columns
   every time, a few words per cell so twenty rows still read at a glance.

## The format

```markdown
# [First author] ([year]): [Short title]

**Citation:** [Full citation, style]
**Read:** [YYYY-MM-DD] · **Parts read:** [full text, abstract, or highlights] · **Tags:** [tags]

## Question and aim
- [Research question] · Hypotheses: [if any]

## Method
- Design: [design] · Sample: [n, who] · Setting: [where, when]
- Measures: [measures] · Analysis: [analysis]

## Findings
- [Finding with numbers as reported]
- Authors conclude: [conclusion]

## Limitations
- Stated: [limitation]
- My critique: [limitation]

## Relevance to my work
- [How it bears on my question]

## Quotes
- "[Exact words]" (p. [n])

## Follow-ups
- [ ] [Reference or term to look up]

## Matrix row
| Author (year) | Question | Method | Sample | Key finding | Limitations | Use for |
|---|---|---|---|---|---|---|
| [Author (year)] | [Question] | [Method] | [Sample] | [Finding] | [Limitations] | [Use] |
```

## Example

Input: highlights from a paper by Rivera and Chen (2024), a survey of 412
undergraduates about phone use during study, finding self-reported phone
checks correlated with lower exam scores (r = -.31), and a highlighted line
on page 9: "Students rarely noticed how often they checked." The person
studies attention and note-taking.

```markdown
# Rivera (2024): Phone checking during study

**Citation:** Rivera, [?], & Chen, [?] (2024). [?] Full title, journal,
and DOI not in the highlights.
**Read:** 2026-10-27 · **Parts read:** highlights · **Tags:** attention, phones, students

## Question and aim
- Is phone checking during study related to exam performance? (added)

## Method
- Design: survey · Sample: 412 undergraduates
- Measures: self-reported phone checks; exam scores

## Findings
- Phone checks correlated with lower exam scores, r = -.31.

## Limitations
- Stated: none in the highlights.
- My critique: correlational and self-reported; cannot show that phone use
  causes lower scores.

## Relevance to my work
- Supports framing distraction as a cost in study sessions. Cite for the
  association, not for causation.

## Quotes
- "Students rarely noticed how often they checked." (p. 9)

## Matrix row
| Author (year) | Question | Method | Sample | Key finding | Limitations | Use for |
|---|---|---|---|---|---|---|
| Rivera & Chen (2024) | Phone checks vs exams | Survey | 412 undergrads | r = -.31 | Correlational, self-report | The association |
```

## Pitfalls

- **Abstract-only notes passed off as full notes.** Say which parts were read.
- **Invented citation details.** A wrong DOI or page range costs hours later.
  Mark gaps `[?]`.
- **Mixing the authors' claims with the data.** Keep "found" and "conclude"
  apart.
- **Paraphrase in quotation marks.** Only exact words get quotes.
- **No relevance section.** Without it, the notes summarize the paper but do
  not help write anything.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Titling each note "Author (year): short title" keeps a literature folder
sorted and easy to cite from, and the matrix rows can be collected into one
review note.
