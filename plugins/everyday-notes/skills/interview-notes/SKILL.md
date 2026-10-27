---
name: interview-notes
description: Writes up a job, research, or journalism interview with answers, marked verbatim quotes, observations apart from interpretation, and follow-ups. For hiring, it adds evidence against the role's criteria. Use when someone has notes or a transcript from an interview (an oral history included), is writing an interview scorecard or debrief, or needs quotes they can trust.
---

# Interview notes

Interview notes are evidence. A hiring panel compares candidates from them, a
researcher builds findings on them, and a journalist may print a quote from
them. That only works if the notes keep three things apart: what the person
actually said (quoted exactly, or clearly paraphrased), what the interviewer
saw, and what the interviewer concluded. Mixing them is how a vague impression
turns into a "fact" about someone.

This skill handles three kinds of interview with one shape and a few
differences: hiring interviews add evidence against criteria, research
interviews add themes, and journalism interviews add attribution terms.

## When to use it

- After a job interview, to write a scorecard or debrief notes.
- After a user research or customer discovery interview, where the aim is
  learning, not selling.
- After a reporting interview, to sort quotes from background.
- Before an interview, to set up the question list and criteria.

For a sales or client conversation, use `client-call-notes`. For a group
meeting, use `meeting-notes`. To pull themes across many research interviews,
`connect-notes` can link them once each has its own note. For interviewing
a relative about family history, use `family-history-notes`.

## What to ask for

- **The kind of interview**: hiring, research, or journalism. Default: infer
  from the material.
- **The material**: a transcript, recording summary, or the interviewer's
  notes.
- **For hiring, the criteria** the role is assessed on. If there are none,
  write the notes without a criteria section and suggest setting criteria
  before the next interview.
- **For journalism, the attribution terms** agreed (on the record, on
  background, off the record). Default: mark `[?]` and ask.

## How to do it

1. **Quotes.** Put words in quotation marks only when they are verbatim from a
   transcript or the interviewer marked them as exact. Everything else is a
   paraphrase and reads as one ("Said she prefers..."). Words the notes hedge
   ("said something like", "roughly") are a paraphrase even inside quotation
   marks. With a recording, add the timestamp after each quote.
2. **Questions and answers.** Keep the question asked with each answer,
   in the words used if you have them; otherwise paraphrase it as a topic.
   An answer means little without the question, and a leading question
   ("Wouldn't you say...?") weakens the answer it got. Flag leading questions.
3. **Observations.** Record what was seen or heard: "Paused about ten seconds
   before answering", "Drew the architecture without being asked". Do not
   write "seemed nervous" or "clearly smart" here.
4. **Interpretation.** Put conclusions in their own section, written as the
   interviewer's view, each tied to the observation or quote it rests on.
5. **Hiring: evidence against criteria.** For each criterion, list the
   evidence for and against, then a rating only if the person gives one. Write
   "No evidence" when a criterion was not covered; that is a gap, not a fail.
   Keep out anything unrelated to the job (age, family, accent, appearance).
6. **Research: themes.** Note needs, pains, workarounds, and surprises.
   Separate what they said they do from what they described actually doing;
   the second is more reliable. Use a participant ID unless the person says
   names are fine, and leave out anything the participant asked to keep off
   the record, along with health or other personal details the research
   does not need. Say in one line that something was left out, so a teammate
   does not read the notes as complete.
7. **Journalism: attribution.** Mark each quote with its terms. Never let an
   off-the-record remark sit beside on-the-record quotes without a label.
8. **Follow-ups.** Questions to ask next time, claims to verify, and promises
   made (sending materials, a decision date).

## The format

```markdown
# Interview: [Name or participant ID], [Role or topic]
[YYYY-MM-DD] · [Interviewer] · [Hiring / Research / Journalism] · [Recording: yes/no]

## Questions and answers
**Q: [Question]**
- [Paraphrase of answer]
- "[Verbatim quote]" ([timestamp])

## Observations
- [What was seen or heard, no judgment]

## Interpretation
- [Interviewer's view], based on [observation or quote]

## Evidence against criteria
| Criterion | For | Against |
| --- | --- | --- |
| [Criterion] | [Evidence] | [Evidence or No evidence] |

## Follow-ups
- [ ] [Question, check, or promise]
```

Drop the criteria table for research and journalism. For research, add
`## Themes` with bullets labeled **Need**, **Pain**, **Workaround**, and **Said
vs did**. For journalism, add an attribution label on each quote. With no
date given, use today's only if they are writing up now; otherwise `[?]`.

## Example

Input: "hiring, backend eng, candidate R. Okafor. criteria: system design,
debugging, collaboration. asked about a hard bug. she said 'I bisected the
deploys and found it in an hour' (12:40). drew a diagram unprompted. asked
how she handles disagreement, said she writes a doc and asks for comments.
didn't get to system design. seemed very sharp."

```markdown
# Interview: R. Okafor, Backend engineer
2026-10-27 · Me · Hiring · Recording: yes

## Questions and answers
**Q: About a hard bug**
- Described finding a bug by bisecting deploys.
- "I bisected the deploys and found it in an hour" (12:40)

**Q: How she handles disagreement**
- Writes a document and asks for comments.

## Observations
- Drew a diagram without being asked.

## Interpretation
- Interviewer's impression: "very sharp", based on the bisecting answer and
  the unprompted diagram.

## Evidence against criteria
| Criterion | For | Against |
| --- | --- | --- |
| System design | No evidence | No evidence |
| Debugging | Bisected deploys to find a bug | None recorded |
| Collaboration | Writes a doc and asks for comments | None recorded |

## Follow-ups
- [ ] Cover system design in the next round.
```

## Pitfalls

- **Paraphrase dressed as a quote.** Once in quotation marks, it gets repeated
  as exact. Quote only what is verbatim.
- **Impressions in the evidence.** "Confident" and "not a culture fit" are
  conclusions. Find the behavior behind them or leave them in interpretation.
- **Writing up days later.** Memory fills gaps with the overall impression.
  Encourage writing up the same day and mark reconstructed parts `[?]`.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Hiring notes often hold personal data, so suggest a private folder and
keeping them only as long as the hiring process needs.
