---
name: feynman-notes
description: "Runs the Feynman technique on a concept: a plain explanation for a beginner, the gaps it exposes, a return to the source, and a simpler second try. Use when someone asks for the Feynman technique, wants to check whether they really understand something, is stuck on a concept, or wants to explain an idea simply, even to explain it like I'm five."
---

# Feynman notes

The Feynman technique tests understanding by explanation: write the idea out
as if teaching a beginner, in plain words with no jargon, and notice where
the explanation stalls, hand-waves, or falls back on a term you cannot
define. Those spots are the gaps. Go back to the source for them, then
explain again, simpler. The technique is named after the physicist Richard
Feynman, known for his ability to explain hard ideas plainly; the four-step
form is a later summary of his approach rather than something he wrote down.

It works because recognizing an idea is not the same as being able to
produce it. Reading a chapter feels like understanding; writing the
explanation from a blank page shows whether it is. This skill helps the
person do the explaining, finds the gaps with them, and records the result
as a note they can return to.

## When to use it

- Someone wants to check whether they really understand a concept.
- They are stuck on an idea and the textbook explanation is not landing.
- They need to explain something to others (a class, a team, a client).
- They ask for the Feynman technique by name.

To explain a whole document plainly for an audience, use `plain-language`.
For flash cards to keep the idea once understood, use
`spaced-repetition-cards`. For worked problems in math, use
`problem-solving-journal`.

## What to ask for

- **The concept**, in a phrase.
- **Their own attempt at explaining it**, if they will write one. This is
  the most valuable input, because their gaps are what matter, not yours.
  Default: if they would rather not, write the first explanation yourself
  and then question it the way a beginner would.
- **The source** they are learning from, so you can point back to it.

## How to do it

1. **Explain it to a beginner.** Write (or take the person's) explanation
   aimed at a curious twelve-year-old: short sentences, everyday words, one
   concrete example. Every technical term must either be explained in plain
   words or cut.
2. **Find the gaps.** Read the explanation as a skeptical beginner and mark
   each spot where it:
   - uses a term without explaining it,
   - says what happens but not why,
   - jumps a step ("and so the price goes up"),
   - relies on an analogy that breaks if pushed,
   - could not answer the obvious next question ("but why does it?"),
   - says something the source contradicts, or predicts something the
     person already knows is false (if closer means summer, both
     hemispheres would have summer at once). A misconception is the most
     important gap: name it plainly and correct it, not just with a
     question. If the source is not to hand, correct it anyway, marked
     `(added)`, and say where in the source to confirm it.
   List each gap as a question.
3. **Go back to the source.** For each gap, say where to look (the chapter,
   the lecture, a page) and what to look for. If the person gave the source,
   find the answer in it and quote or cite it. Do not fill gaps from general
   knowledge without labeling it "(added)".
4. **Simplify again.** Rewrite the explanation with the gaps filled, shorter
   than before if possible. A good second draft usually has fewer words and
   a better example; if the first try was a single line, it will grow, but
   keep it to what a beginner needs. Do not state as fact anything a gap left unanswered.
   If you use an analogy, record where it breaks.
5. **Test it.** End with two or three questions a beginner might ask, and
   check the final explanation answers them. If it does not, that is the
   next round.
6. Keep the first attempt in the note. Seeing what changed is part of the
   learning.

## The format

```markdown
# Feynman: [Concept]
[YYYY-MM-DD] · Source: [where they are learning it]

## First explanation
[Plain explanation, as first written]

## Gaps
1. [Question the explanation could not answer]
   - Look in: [source and place]
   - Found: [answer, cited; or an answer not from the source, then (added); or [?]]

## Simpler explanation
[Rewritten explanation with the gaps filled]

## Beginner questions it should answer
- [Question]: [answered / not yet]

## Analogy (and where it breaks)
- [Analogy]: breaks when [limit]
```

## Example

Input: "explain compound interest. my try: you earn interest on your
interest so it grows faster." Source: chapter 3 of their personal finance
book.

```markdown
# Feynman: Compound interest
2026-10-27 · Source: personal finance book, ch. 3

## First explanation
You earn interest on your interest, so it grows faster.

## Gaps
1. Faster than what?
   - Look in: ch. 3, the comparison with simple interest
   - Found: [?] Check what the chapter compares it to.
2. When does the interest get added, and does that matter?
   - Look in: ch. 3, compounding frequency
   - Found: [?]
3. Why does the growth speed up over time instead of staying steady?
   - Look in: ch. 3, any table or chart of growth by year
   - Found: the rate applies to a balance that now includes past interest;
     confirm in ch. 3. (added)

## Simpler explanation
You put money in a jar. Say that once a year the bank adds a little extra, a
set share of whatever is in the jar. Next year, that share is taken from a bigger
amount, because last year's extra is in the jar too. So the extra gets
bigger every year, even though the rate never changes.

## Beginner questions it should answer
- Why does it grow more each year?: answered
- How often is the extra added?: not yet
- What if I take money out?: not yet

## Analogy (and where it breaks)
- Money in a jar: breaks when money is taken out, or when the extra is
  added more often than once a year (gap 2).
```

## Pitfalls

- **Writing the expert explanation.** If the explanation would satisfy a
  professor but not a twelve-year-old, the jargon is hiding the gaps.
- **Skipping the person's own attempt.** Their gaps are the point. Your
  smooth explanation teaches them less than finding where theirs breaks.
- **Filling gaps silently.** If the answer came from you, not their source,
  say so. They may be tested on the source's version.
- **Analogies with no limits.** Every analogy breaks somewhere. Say where,
  or it will mislead later.
- **Stopping after one round.** If the beginner questions are not answered,
  the technique says go around again.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app.
