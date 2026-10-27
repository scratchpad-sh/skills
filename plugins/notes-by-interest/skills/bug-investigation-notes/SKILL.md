---
name: bug-investigation-notes
description: "Keeps structured notes during a bug hunt: symptoms, repro steps, hypotheses with evidence, experiments, root cause, fix, and a regression test. Use when a developer is debugging, chasing a flaky test or production issue, wants to write up a bug they fixed, a postmortem, or a root cause analysis, or asks for help organizing what they know about a bug so far."
---

# Bug investigation notes

Debugging goes wrong in a familiar way: you form a theory, start changing
code, and two hours later cannot say which change did what or what you have
already ruled out. Writing the investigation down as you go turns it into a
small experiment: state a hypothesis, predict what you would see if it were
true, run one test, record the result.

These notes keep observation, theory, and conclusion separate. They also end
with the parts that stop the bug coming back: the root cause stated plainly,
the fix, and a test that fails without the fix.

## When to use it

- A developer is mid-hunt and pastes logs, stack traces, or rough notes,
  asking "what do we know so far?"
- A bug is intermittent or flaky and attempts need careful tracking.
- A production incident needs a technical write-up of cause and fix.
- They fixed something and want the reasoning recorded for the team.

For a general record of a coding session, `dev-log` fits better. For learning
how unfamiliar code works before debugging it, use `code-reading-notes`. For
the team decision about a larger change the bug exposed, use
`decision-record`.

## What to ask for

- **The symptom**: what happens, what should happen, and the exact error
  text or log lines.
- **Environment**: version or commit, OS, browser, config, data. Default:
  record what is given and mark the rest `[?]`.
- **What they have tried**, and what happened each time; and **how often**
  it reproduces. Ask for the exact error if they paraphrased it, then start.

## How to do it

1. Write **symptoms** as observations only: what was seen, where, when, how
   often, and since when. No guesses in this section. Quote errors and stack
   traces verbatim.
2. Write **reproduction steps** as a numbered list someone else could follow,
   with expected and actual results. Note the reproduction rate ("3 of 10
   runs"). If there is no reliable repro yet, say so; getting one is
   usually the first task.
3. Note **what changed** recently if known (a deploy, a dependency bump, new
   data). "It worked last Tuesday" points to a bisect.
4. List **hypotheses**, each with evidence for, evidence against, and a test
   that would tell them apart. Rank them by how cheap the test is and how well
   the hypothesis fits all the evidence, not only some of it.
5. Log **experiments** in order: what was done, what was predicted, what
   actually happened, and which hypothesis that confirms or rules out. Change
   one thing at a time; if the person changed several at once, note that the
   result is ambiguous. Keep ruled-out hypotheses visible, marked "ruled out"
   with the experiment that did it.
6. When found, state the **root cause** as a chain: the trigger, the faulty
   code or assumption, and why it produced the symptom. "Race condition" is a
   label, not a cause. Distinguish the root cause from the proximate one,
   and never declare one the evidence has not shown: if the bug stopped
   without explanation, write "not reproduced since [change]; cause
   unconfirmed".
7. Record the **fix** (commit or PR if given) and the **regression test**:
   what it checks, and confirmation that it failed before the fix. A test
   that never failed proves nothing. A change that only hides the symptom
   (a longer timeout, a retry, a pinned version) is a workaround: label it
   so under Fix, and keep the status at investigating.
8. Add **related risks**: other places with the same pattern.
9. Mid-hunt, end with **Next step**: the one or two cheapest experiments
   that would separate the open hypotheses, marked `(suggested)`. Leave out
   sections with nothing in them yet, but keep Root cause, Fix, and
   Regression test even when they only hold `[?]`: they show what is owed.

## The format

```markdown
# Bug: [Short description of the symptom]
[YYYY-MM-DD] · [Ticket or issue, if any] · Status: [investigating / likely fixed, cause unconfirmed / fixed / cannot reproduce]

## Symptoms
- [Observation]
- Error: `[verbatim text]`
- Environment: [version, OS, browser, config]

## Reproduction
1. [Step]
2. [Step]
- **Expected:** [result]
- **Actual:** [result]
- **Rate:** [always / n of m]

## Recent changes
- [Deploy, dependency, data, config]

## Hypotheses
| # | Hypothesis | For | Against | Test | Status |
| --- | --- | --- | --- | --- | --- |
| H1 | [Idea] | [evidence] | [evidence] | [test] | [open / likely / unlikely / ruled out / confirmed] |

## Experiments
1. [What was done]. Predicted: [x]. Saw: [y]. So: [H1 ruled out].

## Root cause
[Trigger] → [faulty code or assumption] → [symptom].

## Fix
- [Change, commit, or PR]

## Regression test
- [What it checks]. Failed before the fix: [yes / not checked].

## Related risks
- [Same pattern elsewhere]

## Next step
- [ ] [Cheapest experiment that separates the open hypotheses] (suggested)
```

## Example

Input: "checkout total sometimes off by a cent. only for orders with 3+ items
w/ discount. thought it was the tax calc, but tax test passes with the same
numbers. switched discount calc from float to cents integer and can't repro
anymore in 50 runs."

```markdown
# Bug: Checkout total sometimes off by one cent
2026-10-27 · Status: likely fixed, cause unconfirmed

## Symptoms
- Order total is sometimes one cent off.
- Seen only on orders with three or more items and a discount.

## Reproduction
1. [?] Exact items and discount not recorded. **Rate:** intermittent

## Hypotheses
| # | Hypothesis | For | Against | Test | Status |
| --- | --- | --- | --- | --- | --- |
| H1 | Tax calculation rounds wrong | total is off | tax test passes with the same numbers | tax unit test | ruled out |
| H2 | Discount uses floats | only discounted orders | none yet | switch to integer cents | likely |

## Experiments
1. Ran the tax test with the same numbers. Saw: passes. So: H1 ruled out.
2. Changed the discount calculation from floats to integer cents. Saw: no
   repro in 50 runs. So: H2 likely.

## Root cause
Likely floating-point rounding in the discount calculation. [?] Why only
orders with three or more items are affected is not explained, and no failing
case has been shown.

## Fix
- Discount calculation changed from floats to integer cents. [?] Commit or PR.

## Regression test
- [ ] Write a test with a known failing order and confirm it fails on the
  old code (suggested).
```

## Pitfalls

- **Theories in the symptoms.** "Tax is broken" there steers everyone
  wrong. Observations only; one change at a time, or note the ambiguity.
- **Trusting a short clean streak.** At a 1 in 4 failure rate, six passes
  in a row happen by chance about one time in six. Run enough times that
  chance is unlikely, and keep the status at "cause unconfirmed" until then.
- **A test that never failed.** Check the regression test against the old
  code, or say it was not checked.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Titling the note with the exact error text makes it findable the next
time the same message appears.
