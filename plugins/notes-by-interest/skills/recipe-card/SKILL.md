---
name: recipe-card
description: Turns a messy recipe, blog post, or voice memo into a clean card with yield, times, ingredients, steps with doneness cues, make-ahead notes, and scaling. Use when someone wants to save a recipe, clean up or rewrite one, strip a recipe blog down to the recipe, write down a family recipe, or halve or double one.
---

# Recipe card

A recipe card is the recipe as a cook needs it at the stove: how much it
makes, how long it really takes, every ingredient in the order it is used, and
steps that say what to look for, not just how long to wait. Ovens, pans, and
ingredients vary, so "bake 25 minutes" is a guess, while "bake until golden at
the edges and a skewer comes out clean, about 25 minutes" works in any kitchen.

Most recipes arrive in a worse shape than this: a blog post with the recipe at
the bottom of a long story, a grandmother's card that says "flour, enough",
or a voice memo recorded while cooking. This skill keeps every quantity and
cue the source gave, puts them in a usable order, and flags what is missing
rather than filling it in.

## When to use it

- Saving a recipe from a website, a cookbook photo, or a message.
- Writing down a family recipe from memory or dictation.
- Cleaning up their own notes after cooking something that worked.
- Scaling a recipe up or down.

For recording changes across test batches, use `kitchen-test-log`. For a
week of dinners with a shopping list, use `meal-plan`. For notes on a wine,
coffee, or chocolate, use `tasting-notes`.

## What to ask for

- **The recipe**, in any form.
- **Scaling**, if they want it. Default: as written.
- **Units**: weights, volumes, or both. Default: keep the source's units and
  add the other only where the source gave both.

Do not ask anything else first. Gaps go in the card as `[?]`.

## How to do it

1. Pull out the recipe itself. Drop the story, but keep tips from it that
   change the result ("use Dutch-process cocoa", "the dough will look too wet,
   that is right").
2. Write **yield** (servings, pieces, or pan size) and **times**: active time,
   total time, and any resting, rising, or chilling time, separately. If the
   source's times seem to leave out a rest, say so rather than correcting it.
   With no stated total, you may add up the step times as a minimum, marked
   `(added)`; never guess prep time.
3. List **ingredients in the order they are used**, grouped by component when
   there are several (dough, filling, glaze). Write quantity, unit, ingredient,
   then preparation: "2 cloves garlic, minced". Keep weights and volumes the
   source gave. Never convert volume to weight from a guess; flour by the cup
   varies too much. Only convert if the person asks, and mark it approximate.
4. Write **method steps**, one action group per step, numbered. Put oven
   temperatures and pan prep in the first step that needs them. Give every
   timed step a **doneness cue** from the source ("until the onions are soft
   and translucent", "until it coats the back of a spoon", "internal
   temperature as the source states"). Where the source gives only a time, keep
   it and do not invent a cue. Keep the oven temperature exactly as given,
   with its scale and any fan or gas mark setting. If the scale is missing,
   add it only when the number allows one reading, marked `(added)`; if the
   temperature itself is missing, write `[?]` and list it under Gaps.
5. Add **make-ahead and storage** notes the source gave: what can be done the
   day before, how long it keeps, whether it freezes. Do not add food-safety
   limits of your own; if the source has none, leave the line out or mark it
   `[?]`.
6. **Scaling**: when they ask to scale, write the scaled amounts in the
   ingredient list and the yield (that is what they cook from), and keep the
   original amounts in the Scaling section. Say what does not scale in a
   straight line: pan size, baking time, salt and spices (adjust to taste),
   eggs (round, or use a beaten egg by weight). Note when a doubled batch needs two pans.
7. Credit the **source**: the site, the book and page, or the person.
8. List gaps under **Gaps**: a missing oven temperature, "a can" with no size,
   an ingredient in the steps that is not in the list. Also add that
   ingredient to the list with its amount as `[?]`, so the shopping and the
   mise en place are complete.

## The format

```markdown
# [Recipe name]
Makes: [yield] · Active: [time] · Total: [time]
Source: [where it came from]

## Ingredients
**[Component]**
- [Quantity] [unit] [ingredient], [prep]

## Method
1. [Step with cue], [time as a guide].

## Make ahead and storage
- [Note from the source]

## Scaling
- [How to scale, and what does not scale evenly]

## Notes
- [Tips from the source or the cook]

## Gaps
- [?] [Gap]
```

## Example

Input: "nana's banana bread. 3 really ripe bananas mashed, 1/3 c melted butter,
3/4 c sugar, 1 egg, 1 tsp vanilla, 1 tsp baking soda, pinch salt, 1.5 c
flour. mix wet, add dry, dont overmix. 350 about an hour til a toothpick is
clean. freezes great"

```markdown
# Nana's banana bread
Makes: 1 loaf [?] · Active: [?] · Total: [?] (bakes about 1 hour)
Source: Nana

## Ingredients
- 3 very ripe bananas, mashed
- 1/3 cup butter, melted
- 3/4 cup sugar
- 1 egg
- 1 tsp vanilla
- 1 tsp baking soda
- Pinch of salt
- 1 1/2 cups flour

## Method
1. Prepare a loaf pan [?] (size and greasing not given). Heat the oven to
   350°F, Fahrenheit since the source gives no scale. (added)
2. Mix the bananas, butter, sugar, egg, and vanilla.
3. Add the baking soda, salt, and flour. Stir just until combined; do not
   overmix.
4. Bake until a toothpick comes out clean, about 1 hour.

## Make ahead and storage
- Freezes well.

## Gaps
- [?] Loaf pan size, and whether to grease it.
- [?] Type of flour and sugar. Likely all-purpose and white; confirm. (added)
```

## Pitfalls

- **Inventing quantities.** "Pinch of salt" stays a pinch. Do not turn it into
  1/4 tsp.
- **Times without cues.** Keep every cue the source gave, and put it before
  the time.
- **Converting cups to grams from a table.** Ingredient weights vary. Only do
  it on request, marked approximate.
- **Ingredients out of order.** A cook reads the list as a plan for mise en
  place; it should follow the method.
- **Adding food-safety advice.** Keep the source's storage notes; do not
  invent safe-holding times or temperatures.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A "Recipes" folder, with the dish name as the title, makes a recipe easy
to find at the stove.
