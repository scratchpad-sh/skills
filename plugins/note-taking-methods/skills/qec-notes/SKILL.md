---
name: qec-notes
description: "Turns readings into Question, Evidence, Conclusion notes: a question worth arguing, the evidence for and against, and a conclusion rated for strength. Use when someone asks for QEC notes, is reading analytically for an essay or argument, needs to weigh evidence, or wants notes that build toward a position."
---

# Question, Evidence, Conclusion notes

QEC notes are built for thinking, not recording. Each block starts with a
**question** worth arguing about, gathers the **evidence** from the sources
that bears on it (for and against), and ends with a **conclusion** that says
what the evidence supports and how firmly. The result is a set of small,
argued positions rather than a summary of what each source said.

The method suits essay research, history and social science reading, policy
and business analysis, and any reading where the person will later have to
take a side. It keeps evidence tied to its source, which makes the essay
easier to write and the citations easier to find, and it shows at a glance
where a conclusion rests on one weak source.

## When to use it

- Someone is researching an essay, paper, or report that has to argue a
  point.
- They are reading several sources on one debate and want them weighed
  together.
- They are studying for an exam with "evaluate" or "to what extent"
  questions.
- They ask for QEC notes or "question, evidence, conclusion".

For the structure of the essay itself, use `essay-structure` or
`persuasive-argument`. For notes on a single source, use
`literature-notes`. For a legal case, use `case-brief`.

## What to ask for

- **The sources**: readings, excerpts, notes, or links you can read.
- **The big question or essay prompt**, if there is one. Default: infer two
  to five questions from the sources and confirm them before going far.
- **The citation style**, if it matters now. Default: author and page in
  parentheses.

## How to do it

1. Set the **questions**. A good QEC question can be answered more than one
   way and matters to the person's purpose: "Was the policy the main cause
   of the decline?" not "What was the policy?". Break a big essay prompt
   into two to five sub-questions.
2. For each question, collect **evidence** from the sources. Each item gets:
   - what the evidence is, briefly and specifically (a figure, an example, a
     study, a quotation kept exact),
   - its source and page (an unsure page stays as the person gave it, with
     `[?]`; a source known only through another is cited as "X, cited in Y",
     since the essay must cite Y unless they read X),
   - which way it points: **for**, **against**, or **mixed**,
   - a note on its strength: is it data, an expert opinion, an anecdote, or
     the author's assertion?
3. Look actively for **evidence against**. If the sources only argue one
   side, say so; that is a finding in itself.
4. Write the **conclusion** in two to four sentences: the answer the
   evidence best supports, and **how confident** that answer is (strong,
   moderate, or weak) and why. Name the evidence that would change it.
5. Keep the person's judgment separate from the sources' claims. The
   conclusion is theirs to own; the evidence is the sources'.
6. Add **gaps**: what evidence is missing that would settle the question.
   Put source material that answers none of the questions under **Not
   used**, with a reason, so nothing is dropped silently.
7. End with a short **thesis line** if the questions add up to a position
   for the essay.

## The format

```markdown
# QEC: [Topic or essay prompt]
[YYYY-MM-DD] · Sources: [short list]

## Q1. [Question]?

**Evidence**
- **For**: [Evidence] ([Source], p. [n]). *Strength: [data / expert / anecdote / assertion]*
- **Against**: [Evidence] ([Source], p. [n]). *Strength: [...]*
- **Mixed**: [Evidence] ([Source], p. [n]). *Strength: [...]*

**Conclusion** ([strong / moderate / weak]): [Two to four sentences.]
**Would change my mind**: [Evidence that would shift it]
**Gaps**: [?] [What is missing]

## Not used
- [Evidence] ([Source], p. [n]): [why it answers none of the questions]

## Thesis
[One or two sentences, if the questions add up to a position.]
```

## Example

Input: essay prompt "Did remote work lower productivity?" Notes: "Source A
(survey of managers, p. 4): 60% of managers believe productivity fell.
Source B (study of a call center, p. 12): output per hour rose 13% for
home workers. Source B p. 15: workers who chose remote work were happier.
Source C (op-ed): collaboration suffers when nobody is in the office."

```markdown
# QEC: Did remote work lower productivity?
2026-10-27 · Sources: A (manager survey), B (call center study), C (op-ed)

## Q1. Did measured output fall for remote workers?

**Evidence**
- **For**: 60% of managers believe productivity fell (A, p. 4). *Strength: opinion survey, not measured output*
- **Against**: Output per hour rose 13% for home workers in one call center (B, p. 12). *Strength: data, one setting*

**Conclusion** (moderate): The only measured data shows output rising, but
it comes from one call center, where tasks are easy to count (added).
Managers' belief that output fell is not itself evidence that it did.
**Would change my mind**: Measured output data from jobs with harder-to-count work.
**Gaps**: [?] Any measured data outside call centers.

## Q2. Does remote work hurt collaboration?

**Evidence**
- **For**: Collaboration suffers when nobody is in the office (C). *Strength: assertion, no data given*

**Conclusion** (weak): Only one source, an opinion piece, addresses this.
**Would change my mind**: Any study that measures collaboration directly.
**Gaps**: [?] Any study measuring collaboration.

## Not used
- Workers who chose remote work were happier (B, p. 15). Relevant to
  wellbeing, not to either question here.

## Thesis
The evidence here does not show that remote work lowered productivity;
the one measured result points the other way, though in a narrow setting.
```

## Pitfalls

- **Questions with one possible answer.** "When was the law passed?" is a
  fact, not a QEC question.
- **Evidence without sources.** Every item needs its source and page, or it
  cannot be used in the essay.
- **Treating opinions as data.** A survey of beliefs is evidence about
  beliefs. Label the strength of each item.
- **Conclusions stronger than the evidence.** If one study supports it, say
  "weak" or "moderate", not "proves".
- **Inventing counter-evidence.** If the sources do not contain the other
  side, say the other side is missing. Do not supply it from memory without
  labeling it "(added)".

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Keeping one QEC note per essay, with the sources linked from it, makes
the drafting step much easier.
