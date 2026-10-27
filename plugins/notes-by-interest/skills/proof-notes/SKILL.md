---
name: proof-notes
description: Annotates a mathematical proof with the claim, the strategy in one sentence, each step and its justification, where the key idea lives, and variations to try. Use when a math student or enthusiast wants to understand a proof from a textbook, lecture, or paper, asks to break down or annotate a proof, is studying for a proof-based exam, or wants to check their own proof step by step.
---

# Proof notes

Reading a proof line by line is not the same as understanding it. A
mathematician who understands a proof can say what it is trying to show, the
plan in a sentence, which step does the real work, and which hypotheses are
used where. The rest is bookkeeping. These notes make that structure visible.

The habit behind them is old and widely taught: restate the theorem in your
own words, name the technique (induction, contradiction, contrapositive,
construction, pigeonhole, diagonalization), justify every step, check where
each hypothesis is used, and then poke at the result by weakening a
hypothesis or trying a special case.

## When to use it

- A student is working through a proof in a textbook or lecture notes.
- They are revising for a proof-based exam and want to reconstruct key
  proofs.
- They wrote a proof and want each step checked and justified.
- A reader wants to understand a famous proof (Euclid on primes, the
  irrationality of $\sqrt{2}$, Cantor's diagonal argument).

For working on a problem that has not been solved yet, use
`problem-solving-journal`. For a whole lecture or chapter, `cornell-notes` or
`outline-notes` fit better. For flash cards of definitions and theorem
statements, use `spaced-repetition-cards`.

## What to ask for

- **The proof**, as text, LaTeX, or a photo transcription, and the exact
  statement being proved.
- **Definitions in force**, if the source uses nonstandard ones. Default:
  standard definitions at the level of the source.
- **Their level and goal**: understanding, exam recall, or checking their own
  work. Default: understanding.

If they only name a well-known theorem without a proof, ask whether to use
their textbook's proof or a standard one, and label which you used.

## How to do it

1. State the **claim** precisely, then in plain words. Identify the
   hypotheses and the conclusion separately; for an "if and only if", note
   that there are two directions.
2. Name the **strategy** in one sentence, including the technique: "By
   contradiction: assume a largest prime exists and build a number no prime
   on the list divides."
3. Break the proof into **numbered steps**. For each, write what is asserted
   and its **justification**: a definition, a hypothesis (say which), an
   earlier step, or a named theorem. Use LaTeX in `$...$` for the
   mathematics.
4. Fill small gaps the author skipped ("clearly", "it follows that") with
   the missing reasoning, and mark each filled gap `(added)` so the person
   can tell your additions from the source. Fill only routine gaps. If a step
   does not follow, or needs an idea the source never supplies, do not patch
   it: mark it `[?]`, say what is missing, and leave the fix to the person or
   their source.
5. Mark the **key idea**: the step where the real insight happens, usually
   one clever construction, choice, or estimate. Say why it works.
6. Run a **hypothesis check**: list each hypothesis and the step that uses
   it. A hypothesis used nowhere is a sign of a misread statement or a gap.
7. Suggest **variations**: drop or weaken a hypothesis and look for a
   counterexample, try a small case by hand, ask whether the converse holds,
   or try a different technique.
8. When checking the person's own proof, point to the exact step that fails
   and say why. Do not rewrite their proof unless asked; for graded work,
   pose the fix as a question under Variations. End with a one-line
   **verdict**: correct, correct with gaps filled, or a step does not follow.
9. Never assert a counterexample or a theorem you are not sure of. If unsure
   whether a variation holds, pose it as a question.

## The format

```markdown
# Proof: [Theorem name or short statement]
[YYYY-MM-DD] · [Source: book, section, lecture]

## Claim
[Precise statement in LaTeX.]
**In words:** [plain restatement]
- **Hypotheses:** [list]
- **Conclusion:** [what is shown]

## Strategy
[Technique]: [one-sentence plan]

## Steps
1. [Assertion]. *Because:* [definition, hypothesis, step n, or theorem].
2. [Assertion]. *Because:* [justification].

## Key idea
Step [n]: [what the insight is and why it works].

## Where each hypothesis is used
- [Hypothesis]: step [n]

## Variations to try
- [Weaken a hypothesis, special case, converse, other technique]

**Verdict** (checking your own proof only): [one line]
```

## Example

Input: "prove sqrt 2 is irrational. suppose sqrt2 = p/q in lowest terms. then
2q^2 = p^2 so p even, p = 2k, so q^2 = 2k^2 so q even. contradiction."

```markdown
# Proof: $\sqrt{2}$ is irrational
2026-10-27 · Your proof sketch

## Claim
$\sqrt{2} \notin \mathbb{Q}$.
**In words:** no fraction of whole numbers squares to exactly 2.
- **Hypotheses:** none; the claim is unconditional.
- **Conclusion:** $\sqrt{2}$ is not rational.

## Strategy
Contradiction: write $\sqrt{2}$ as a fraction in lowest terms and show both
parts must be even.

## Steps
1. Suppose $\sqrt{2} = p/q$ with $p, q$ integers, $q \neq 0$, and
   $\gcd(p, q) = 1$. *Because:* any rational can be reduced to lowest terms.
2. Then $p^2 = 2q^2$. *Because:* square both sides and multiply by $q^2$.
3. So $p^2$ is even, hence $p$ is even. *Because:* the square of an odd
   number is odd (added).
4. Write $p = 2k$. Then $4k^2 = 2q^2$, so $q^2 = 2k^2$. *Because:* substitute
   into step 2.
5. So $q$ is even. *Because:* same argument as step 3.
6. Then 2 divides both $p$ and $q$, contradicting $\gcd(p, q) = 1$.

## Key idea
Step 1: insisting on lowest terms is what turns "both even" into a
contradiction.

## Where each hypothesis is used
- None to check. The lowest-terms assumption is used in step 6.

## Variations to try
- Does the same proof show $\sqrt{3}$ is irrational? Where does it change?
- Why does it fail for $\sqrt{4}$? Find the step that breaks.
```

## Pitfalls

- **Restating the proof without structure.** Copying lines adds nothing.
  The strategy sentence and key idea are the point.
- **"Obvious" left unexamined.** The skipped steps are usually where a
  student's understanding breaks. Fill them in and mark them.
- **Ignoring unused hypotheses.** Every hypothesis should earn its place;
  if one is never used, say so.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. If the app renders LaTeX, the mathematics will display as typeset; if not,
the `$...$` source still reads clearly.
