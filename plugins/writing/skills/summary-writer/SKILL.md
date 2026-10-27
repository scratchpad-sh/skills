---
name: summary-writer
description: Summarizes any text at a requested length for a named reader, keeping the conclusions, numbers, and caveats, and noting what was left out. It is a summary to read or send, rather than notes to keep. Use when someone asks to "summarize this", "give me the gist", "TL;DR", "write an executive summary", or needs a long report, article, paper, thread, or transcript boiled down for themselves or someone else.
---

# Summary writer

A summary is a decision about what matters, made on someone else's behalf. The
same 30-page report summarizes differently for the executive deciding whether
to fund it, the engineer who will implement it, and the student writing about
it. So the first question is not "what does it say?" but "who is reading the
summary, and what will they do with it?"

Good summaries share a few habits. They lead with the conclusion, not the
background. They keep the numbers exactly, because "costs rose sharply" and
"costs rose 4%" are different summaries. They keep the caveats that change how
much to trust the conclusion. And they say what they left out, so the reader
knows when to go to the source.

## When to use it

- A long report, paper, article, or chapter someone needs the gist of.
- An executive summary for a document the person wrote.
- A long email thread or chat log before a meeting.
- A transcript or recording someone does not have time to review.
- A summary to share with a team, a client, or a class.

For study notes that help someone learn the material, `cornell-notes` or
`study-guide` fit better. For notes that capture a source in the reader's own
words, `source-to-notes` or `literature-notes` fit better. For the action items
in a thread, use `action-items`. For layered highlights in a note kept over
time, use `progressive-summarization`.

## What to ask for

- **The text.** Read all of it. If it is longer than you can read in full, say
  which parts you covered.
- **The length**: one line, one paragraph, one page, or a word count.
  Default: one paragraph, plus a one-line version on top.
- **The reader and their purpose.** Default: the person asking, who wants to
  know what the text concludes and whether to read it in full.

## How to do it

1. **Read the whole text before writing.** Introductions and abstracts
   sometimes promise conclusions the body hedges or changes. Summarize what
   the text shows, not what it says it will show.
2. **Find the conclusion.** What does the text claim, decide, find, or
   recommend? This leads the summary. For narrative or descriptive text, it is
   the main event or the central point. If the text reaches no conclusion
   (a thread that ends unresolved), say so plainly; that is the finding.
3. **Pick what the reader needs.** For a decision-maker: conclusion,
   recommendation, cost, risk, deadline. For a practitioner: method, results,
   limits. For a general reader: what happened, why it matters. If the
   reader must decide or act, say so in the first line.
4. **Keep numbers exact.** Copy figures, dates, and units as given. Do not
   round unless the reader needs it, and say "about" if you do. Never compute a
   new figure the source did not state. When a later message replaces a
   figure, lead with the newest and keep the old one only for comparison.
5. **Keep the caveats that change the conclusion.** Sample size, a limitation
   the authors stress, a condition ("only for new customers"), disagreement
   among sources. Drop routine caveats that do not change the meaning.
6. **Attribute.** Keep it clear who claims what: "The authors argue" versus
   "The data show". Do not turn an opinion in the source into a fact in the
   summary.
7. **Write to the length.**
   - **One line:** the conclusion and its most important number or condition.
   - **One paragraph:** conclusion first, then the two or three supporting
     points, then the main caveat.
   - **One page:** a short paragraph up top, then sections for findings or
     arguments, method or evidence, limits, and implications, in the reader's
     order of interest.
8. **Note what you left out.** One line naming the material omitted (methods
   detail, the history section, the appendix tables), so the reader knows
   where to look. Name only material that is really in the source.
9. **Add nothing.** No opinion of your own, no outside facts, no
   recommendation the source did not make. If the person asks for your view,
   give it separately and label it.

## The format

```markdown
# Summary: [Title of source]
[Author or origin] · [YYYY-MM-DD] · For: [reader]

**In one line:** [Conclusion with its key number or condition]

[One-paragraph summary: conclusion, two or three supporting points, the main
caveat.]

## [Optional: sections for a one-page summary]
- **Findings:** [...]
- **Evidence or method:** [...]
- **Limits:** [...]
- **Implications:** [only as the source states them]

**Left out:** [What was omitted and where it is in the source]
```

## Example

Input: a four-page internal memo proposing a four-day work week trial. Key
points: a 3-month trial for the support team only; productivity measured by
tickets resolved and customer satisfaction; a pilot at a partner company saw
tickets resolved hold steady; risk of coverage gaps on Fridays, handled by a
rotating Friday shift; decision needed by November 15. It also has a background
section on other companies' trials and an appendix of draft survey questions.
Reader: the head of operations.

```markdown
# Summary: Four-day week trial proposal
Internal memo · For: head of operations

**In one line:** The memo proposes a 3-month four-day-week trial for the
support team only, with a decision needed by November 15.

The trial would measure tickets resolved and customer satisfaction. The case
rests on a pilot at a partner company, where tickets resolved held steady.
The main risk is coverage on Fridays, which the memo proposes to handle with
a rotating Friday shift.

**Left out:** the memo's background section on other companies' trials, and
its draft survey questions.
```

## Pitfalls

- **Leading with background.** "This memo discusses..." wastes the line the
  reader is most likely to read. Lead with the conclusion.
- **Vague numbers.** "Significant savings" for "$40,000 a year" throws away
  the most useful fact.
- **Dropping the caveat that matters.** A finding from 12 people is not a
  finding from 12,000. Keep the limit that changes the conclusion.
- **Turning claims into facts.** "Remote work raises productivity" versus "The
  authors argue remote work raises productivity". Keep the attribution.
- **Adding your own analysis.** A summary reports. Give opinions only when
  asked, and label them.
- **Summarizing the introduction only.** Read to the end. Conclusions often
  change on the last pages.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app. Adding it to the top of the note holding the source, with the source's
title and date, keeps the summary traceable.
