---
name: problem-solving-journal
description: "Logs work on a math problem or puzzle: understanding it, failed attempts and why, the insight, the solution, and the general technique to remember. Use when someone is working on a competition problem, a puzzle, a homework problem, or a Project Euler task, wants to record how they cracked it, is stuck and wants to organize what they have tried, or asks for a problem journal."
---

# Problem-solving journal

A problem journal records not just the answer but the path to it, including
the wrong turns. It follows the four phases George Pólya set out in *How to
Solve It*: understand the problem, devise a plan, carry out the plan, and look
back. The last phase is the one most people skip, and it is where the lasting
value is: the technique you will reach for next time.

Experienced problem solvers keep such journals because solutions are easy to
forget and techniques are reusable. A good entry lets you, months later, see
not just what the answer was but what made it findable.

## When to use it

- Someone is working through competition problems (AMC, olympiad, Putnam),
  puzzle books, or coding puzzles.
- They are stuck and want to lay out what they know and have tried.
- They solved something and want to capture the insight before it fades.
- They are building a personal collection of techniques.

For studying a proof that someone else wrote, `proof-notes` fits better. For
flash cards of the techniques, use `spaced-repetition-cards`. For a coding
bug rather than a puzzle, use `bug-investigation-notes`.

## What to ask for

- **The problem**, stated exactly, with its source if known.
- **Their work so far**: attempts, scratch work, partial results.
- **Where they are**: stuck, solved, or read a solution. Default: infer from
  their message.
- **Whether they want hints or the answer**, if they are stuck. Default:
  hints only (step 6).

## How to do it

1. **Understand.** Restate the problem in your own words. List the unknown,
   the data, and the conditions (Pólya's three questions). Note small cases
   tried, a diagram if one helps, and anything suspicious (a number that
   looks chosen, a condition that seems unnecessary). If the person is unsure
   of the statement itself, mark it `[?]`, and test the versions against
   their own small cases when that settles which one is right.
2. **Attempts.** Log each approach the person tried, in order: the idea,
   how far it got, and **why it failed or stalled**. "Induction on $n$:
   the step needs a bound I do not have" teaches more than "induction didn't
   work". Keep these even after the problem is solved.
3. **Insight.** Name the moment it turned: the substitution, invariant,
   symmetry, auxiliary construction, or reframing. Say what prompted it if
   the person said ("noticed the answer for small $n$ was always a square").
4. **Solution.** Write it cleanly, separate from the messy work, with each
   step justified. Use LaTeX in `$...$` for math and a code block for a
   program. Check it: verify small cases or plug the answer back in.
5. **Look back.** Write the general **technique** in one line that would
   apply to other problems ("When a process repeats, look for a quantity it
   never changes"). Add related problems if the person knows any, and ask
   whether the result can be generalized or proved another way.
6. If the person is stuck and wants hints, give the **smallest useful
   hint** first (a question, a small case to try), not the method. Offer the
   next hint only if they ask. A stuck entry leaves out Insight, Solution,
   and Look back (its technique line would name the method) and ends with
   **Next to try**: the hints given and the person's own next idea.
7. Record time spent and the source if given; both help when reviewing.
8. If the person read an official solution, note it honestly ("insight from
   the solution, not found myself"). That is still worth recording.

## The format

```markdown
# Problem: [Short name]
[YYYY-MM-DD] · [Source] · Time: [time spent] · Status: [stuck / solved / read solution]

## The problem
[Exact statement.]

## Understanding
- **Unknown:** [what is asked]
- **Data:** [what is given]
- **Conditions:** [constraints]
- **Small cases:** [results]

## Attempts
1. **[Approach]:** [how far it got]. Stalled because [reason].

## Next to try
- [Hint given, or the person's next idea]

## Insight
[The idea that cracked it, and what prompted it.]

## Solution
[Clean, justified solution.]
**Check:** [verification]

## Look back
- **Technique:** [one-line reusable idea]
- **Related:** [problems, if known]
- **Questions:** [generalization, other proofs]
```

## Example

Input: "8x8 chessboard, remove two opposite corners, can you tile it with
dominoes? tried drawing tilings, kept getting stuck with 2 squares left. then
realized color: corners are same color, each domino covers 1 black 1 white"

```markdown
# Problem: Mutilated chessboard
2026-10-27 · [?] source · Status: solved

## The problem
Remove two opposite corners from an 8×8 board. Can the remaining 62 squares
be tiled with 1×2 dominoes?

## Understanding
- **Unknown:** whether a tiling exists
- **Data:** 62 squares; dominoes cover 2 squares each
- **Conditions:** dominoes cannot overlap or hang off the board

## Attempts
1. **Drawing tilings by hand:** always ended with two squares left that no
   domino could cover. Stalled because trying cases cannot prove
   impossibility.

## Insight
Color the board: the two removed corners are the same color.

## Solution
Every domino covers one black and one white square. Opposite corners are
the same color, so 62 squares remain with 32 of one color and 30 of the
other. Thirty-one dominoes would cover 31 of each. So no tiling exists.
**Check:** $64 - 2 = 62$, and $32 \neq 30$.

## Look back
- **Technique:** to prove something impossible, find an invariant (here, a
  coloring) that every move preserves and the target violates.
- **Questions:** what if the two removed squares are different colors?
```

## Pitfalls

- **Only the clean solution.** Without the failed attempts, the entry
  teaches the answer but not the path. Keep the dead ends and why they died.
- **A technique too specific to reuse.** "Color the chessboard" is about one
  problem; "look for an invariant" is about hundreds.
- **Spoiling a problem.** If the person is still working, give hints in small
  steps, and only the answer on request.
- **Unverified solutions.** Check small cases or substitute back. Say so if
  a step is not yet proved.
- **Claiming insights the person did not have.** If the idea came from a
  solution or a friend, record that.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Tag each entry with its technique (invariant, pigeonhole, extremal
principle) to make the journal a searchable toolkit, and keep the `$...$`
source, which displays as typeset where the app renders LaTeX and still reads
clearly where it does not.
