---
name: essay-structure
description: Structures an argumentative or expository essay around an arguable thesis, claim-led paragraphs, a fair counterargument, and a conclusion that adds something. Use when someone has an essay assignment or a research paper to plan, says "help me structure my essay", "write a thesis", or has a draft whose argument does not hold together.
---

# Essay structure

An argumentative or expository essay has a structure that teachers repeat
because it works: a thesis that makes a claim, paragraphs that each prove one
part of it, evidence that is explained rather than dropped in, and a fair look
at the other side. The five-paragraph essay is a training version of this
shape; real essays keep the logic and drop the rigid count.

The weak point in most essays is the analysis between thesis and evidence:
the sentences that say how a quote or figure proves the claim. Make that link
explicit in every paragraph, using the person's own sources and ideas.

## When to use it

- A student with an essay prompt and some reading or notes.
- A research paper or literature review that needs an argument, not a list.
- A draft essay that "goes off topic" or "just summarizes".

For a narrative essay from the writer's own life, use `personal-essay`; for an
op-ed, `persuasive-argument`. To weigh sources first, `qec-notes`; for general
outlining, `outline-first`; for notes on the readings, `literature-notes`.

## What to ask for

- **The prompt or assignment**, word for word if there is one, plus length and
  any required sources or citation style.
- **Their position**, even if rough ("I think the author is wrong about...").
- **Their sources and notes**: quotes, page numbers, data.

If there is no position yet, help find one (step 1) before structuring.

## How to do it

1. **Write the thesis.** One or two sentences that make a claim a reasonable
   person could dispute, scoped to what the evidence can prove. Test it: is it
   arguable (not a fact), specific (not "there are pros and cons"), and does
   it answer the prompt's actual question? A "to what extent" or "how far"
   prompt wants a degree ("yes, but only..."), not a side. Replace a
   both-sides thesis with the person's own leaning, and say in one line why.
   For expository essays, the thesis states what it explains and why.
2. **Add the "because".** A strong thesis carries its reasons ("X, because
   A, B, and C" or "Although Y, X"), in its sentence or the next. The reasons
   become the body sections.
3. **Plan each body paragraph as claim, evidence, analysis, link.**
   - **Topic sentence:** a claim that supports the thesis, not a fact or a
     summary of a source.
   - **Evidence:** a quote, example, or figure from the person's sources, with
     its citation.
   - **Analysis:** two or three sentences explaining how the evidence proves
     the claim. This is where the grade is. "This shows that..." is the start,
     not the analysis.
   - **Link:** a sentence tying the paragraph back to the thesis or forward to
     the next.
4. **Order the reasons** from most basic to most significant, or so each
   depends on the last; never bury the strongest. Under about 1,000 words
   there is room for two or three body sections plus the counterargument, so
   merge or drop reasons rather than thin each one out.
5. **Place the counterargument.** State the best opposing view fairly, in a
   form its holders would recognize, then answer it: concede what is true,
   then show why the thesis still holds, or narrow the thesis. It can be its
   own paragraph before the conclusion, or woven into the paragraph it most
   threatens.
6. **Plan the introduction.** Open with something specific (a case, a
   tension, a puzzling fact from the sources), give only the context the
   reader needs, and end with the thesis.
7. **Plan the conclusion.** Do not repeat the introduction. Answer "so what?":
   what follows if the thesis is right, what it changes, what question it
   opens, or how it connects to something larger.
8. **Mark gaps.** Any paragraph without evidence gets `[NEEDS: source for
   ...]`, collected again under Gaps. So does a source the person half
   remembers ("Guardian? 2019 i think") and evidence from class notes, which
   needs a citable source. Never invent a quote, citation, page number, or
   statistic: a made-up page number can sink an academic essay.
9. **Offer to draft** paragraph by paragraph once the person approves the
   structure; if it is their essay to write, the structure is the deliverable.

## The format

```markdown
# [Working title]

**Prompt:** [The question being answered]
**Thesis:** [One or two sentences, with the "because"]

## Introduction
- Hook: [specific case, tension, or fact]
- Context: [only what the reader needs]
- Thesis (as above)

## Body 1: [Topic sentence as a claim]
- Evidence: [quote or fact] ([citation])
- Analysis: [how it proves the claim]
- Link: [back to thesis or on to next]

## Body 2: [Topic sentence]
- Evidence:
- Analysis:
- Link:

## Counterargument
- Opposing view, stated fairly: [...]
- Response: [concede, rebut, or narrow]

## Conclusion
- So what: [implication or larger connection]

## Gaps
- [NEEDS: ...]

**Word budget:** [only if a length was given: words per section]
```

## Example

Input: "Prompt: Was the printing press the main cause of the Protestant
Reformation? I think it was necessary but not sufficient. Sources: Eisenstein
on print spreading Luther's pamphlets fast; notes that earlier reformers like
Hus failed without print; political support from German princes (Pettegree)."

```markdown
# Necessary, not sufficient: print and the Reformation

**Prompt:** Was the printing press the main cause of the Reformation?
**Thesis:** The printing press was necessary to the Reformation but not its
main cause, because print spread Luther's ideas faster than earlier reformers
could manage, while the political protection of German princes decided
whether those ideas survived.

## Introduction
- Hook: Hus, an earlier reformer, failed without print.
- Context: what changed between Hus and Luther.

## Body 1: Print let Luther's ideas outrun suppression.
- Evidence: speed of pamphlet circulation (Eisenstein) [NEEDS: page];
  Hus's failure without print (your notes) [NEEDS: source]
- Analysis: the difference between Hus and Luther is the press, so print
  explains why Luther's ideas could not be contained.
- Link: so print was necessary, which is half the thesis.

## Body 2: Print alone could not protect a reformer.
- Evidence: princes' support (Pettegree) [NEEDS: specific example]
- Analysis: without protection, wide circulation would have made Luther
  more visible, and so easier to silence.
- Link: so print was not sufficient, which is the other half.

## Counterargument
- Opposing view: without print, no Reformation, so print is the main cause.
- Response: concede it was necessary; "necessary" is not "main".

## Conclusion
- So what: technology spreads ideas, but power decides which ones last.

## Gaps
- [NEEDS: Eisenstein page; a source on Hus; a prince protecting Luther]
```

## Pitfalls

- **A thesis that is a fact or a topic.** "The Reformation began in 1517" is
  not arguable. Make a claim.
- **Topic sentences that summarize sources.** "Eisenstein discusses print"
  is a summary. "Print let ideas outrun suppression" is a claim.
- **Dropped quotes.** Evidence with no analysis after it asks the reader to do
  the arguing. Always explain how it proves the point.
- **A straw-man counterargument.** Answering a weak version convinces no one.
- **A conclusion that repeats the introduction.** Go one step further.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app. Saving the structure beside the reading notes keeps the gaps next to the
material that fills them.
