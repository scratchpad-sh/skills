---
name: kitchen-test-log
description: Logs a recipe test with the version number, what changed from the last version and why, the results, tasting notes, and what to change next. Use when a recipe developer, food blogger, baker, homebrewer, or serious home cook is testing and tweaking a recipe, comparing batches, troubleshooting a bake that failed, or wants a test kitchen log for a recipe in progress.
---

# Kitchen test log

Recipe development is an experiment run in a kitchen. A recipe developer bakes
version 1, changes something, bakes version 2, and compares. Without a log,
three batches later nobody remembers whether the good one had the extra yolk
or the longer rest, and two changes made at once make it impossible to say
which one helped.

So the log is built around versions. Each test records the full working recipe
(or the differences from the last version), exactly what changed and why, the
conditions that can quietly change a result (oven, pan, ingredient brand,
room temperature), what came out, how it tasted, and the single most promising
change to try next. Over a series, it shows a recipe converging.

## When to use it

- Testing a recipe through several versions before publishing or keeping it.
- Troubleshooting something that keeps going wrong (sunken cakes, tough
  dough, a split sauce).
- Comparing two methods side by side in one session.
- Adapting a recipe (gluten-free, a smaller pan, high altitude) and tracking
  what each attempt did.

When the recipe is final, turn it into a clean card with `recipe-card`. For
tasting notes on a product rather than a recipe, use `tasting-notes`. For a
general experiment record, use `lab-notebook`.

## What to ask for

- **The recipe being tested** and the **previous version's log**, if any.
  Default: treat this as version 1 and record the full recipe.
- **What they changed** and why.
- **What came out**: appearance, texture, taste, and anything measured (rise,
  spread, weight, internal temperature, time to doneness).
- **Tasters' comments**, if others tasted it.

If they described the batch, start, and mark missing conditions `[?]`.

## How to do it

1. Number the **version** (v1, v2, v2b for a side-by-side variant) and date it.
   Link the previous version.
2. Record **changes from the last version** as a short table: what, from, to,
   and the reason or hypothesis ("more brown sugar for chew"). Flag it if
   more than one variable changed, since the result cannot then be credited to
   either. A condition that shifted on its own (a cold kitchen, a longer
   proof) counts as a variable too.
3. Write the **working recipe** for this version, or only the changed lines if
   the previous log has the full recipe. Weights are best for testing; keep the
   units the cook used. If they did not measure, record the change in their
   words ("more tamarind, a little less water"), never as an invented
   quantity, and suggest measuring that ingredient next time. A rough guess
   the cook gave ("maybe 20g?") stays, labeled as their guess.
4. Record **conditions**: oven (and whether it runs hot, if known), rack
   position, pan size and material, ingredient brands where they matter (flour
   protein, butter fat, chocolate percentage), room or dough temperature,
   altitude, rest times.
5. Record **results** observably: rise, spread, color, crumb, texture, yield,
   time to doneness, internal temperature if taken. Photos are referenced by
   name. For a side-by-side, give each variant its own labeled line.
6. Write **tasting notes** in specific terms: sweetness, salt, acidity,
   texture, aroma, aftertaste, and what changed overnight if they tasted it the
   next day. Put tasters' comments under their names as given.
7. Give the **verdict** compared with the last version: better, worse, or
   different, and on what.
8. Propose **next changes**, one main variable per test, ranked. Explain the
   reasoning briefly using what the results showed, and mark general baking
   knowledge you add as "(added)".

## The format

```markdown
# [Recipe] v[n]: [YYYY-MM-DD]
Previous: v[n-1] · Goal: [what this recipe should be]

## Changes from v[n-1]
| What | From | To | Why |
|---|---|---|---|

## Recipe (v[n])
- [Quantity] [ingredient]
1. [Step]

## Conditions
- Oven: [oven] · Rack: [position] · Pan: [pan] · Brands: [brands] · Temps: [temperatures]

## Results
- [Observable result]
- Photos: [names]

## Tasting notes
- [Specific note]
- [Taster]: "[comment]"

## Verdict
[Better / worse / different than v[n-1], on what]

## Next test
1. [Change] · Because: [reason]
```

## Example

Input: "choc chip cookies v3. went from 1 egg to 1 egg + 1 yolk, rested
dough 24h fridge (v2 no rest). 350F, 12 min, half sheet, parchment. less
spread, chewier center, deeper toffee flavor. edges a bit pale. Maya said
'best yet but needs salt'"

```markdown
# Chocolate chip cookies v3: 2026-10-27
Previous: v2 · Goal: [?]

## Changes from v2
| What | From | To | Why |
|---|---|---|---|
| Eggs | 1 egg | 1 egg + 1 yolk | [?] |
| Dough rest | None | 24 h, fridge | [?] |

Note: two variables changed, so the chewier center cannot be credited to
either one alone.

## Recipe (v3)
- [?] Not given here; same as v2 except the changes above.

## Conditions
- Oven: 350 °F · Pan: half sheet, parchment · Bake: 12 min · Rack: [?]

## Results
- Less spread than v2. Chewier center. Edges a bit pale.

## Tasting notes
- Deeper toffee flavor.
- Maya: "best yet but needs salt"

## Verdict
Better than v2 on texture and flavor.

## Next test
1. More salt, keeping everything else as v3. Because: Maya's note. Flaky
   salt on top is one way to add it (added).
2. Then bake 1 to 2 minutes longer for the pale edges (added).
3. Later, test v3 without the rest to see which change mattered.
```

## Pitfalls

- **Changing several things at once without saying so.** Flag it and plan a
  test that separates them.
- **Unrecorded conditions.** A new bag of flour or a different pan explains
  many "mystery" results.
- **Vague results.** "Turned out good" cannot be compared. Describe spread,
  crumb, color, and time.
- **Inventing a reason for a result.** Offer likely causes as hypotheses,
  marked "(added)", not as findings.
- **Losing the full recipe.** Every few versions, write the complete current
  recipe out.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. One note per version, titled with the recipe and version number, keeps a
test series in order; adding each new test to one running note works too.
