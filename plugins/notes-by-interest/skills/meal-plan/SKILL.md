---
name: meal-plan
description: Plans a week of meals with a shopping list grouped by store section, prep-ahead steps, and ways to reuse leftovers, respecting stated diets and allergies. Use when a home cook asks for a meal plan, a week of dinners, a grocery list, meal prep for the week, or help using what is already in the fridge and pantry.
---

# Meal plan

A weekly meal plan answers "what's for dinner?" once, on a calm afternoon,
instead of every evening at six. A good one fits the week as lived: quick meals
on busy nights, a bigger cook when there is time, ingredients that carry
across meals so half a bunch of cilantro does not rot, and planned leftovers.

The shopping list is half the value: grouped by store section, it is one pass
through the shop. Prep-ahead steps move work to when there is time for it.
This skill respects stated diets, allergies, and dislikes, and makes no
nutrition or health claims.

## When to use it

- Planning the coming week's dinners (or all meals).
- Building a grocery list from a plan or a set of recipes.
- Using up what is in the fridge, freezer, or pantry.
- Planning a Sunday meal prep session.

For one recipe, use `recipe-card`; for a reusable grocery checklist,
`checklist-maker`; for tracking recipe experiments, `kitchen-test-log`.

## What to ask for

- **Who is eating**: how many, and any **diets, allergies, or strong
  dislikes**. Always ask about allergies if they have not said.
- **Which meals and which days.** Default: dinners, seven days.
- **The week's shape**: busy nights, nights out, when there is time to cook.
  Default: assume weeknights need 30 minutes or less.
- **What they already have** to use up, and any recipes they want included.
- **A budget**, only if they raise it. Default: none stated.

Ask two or three questions at most. With headcount and allergies known, start.

## How to do it

1. Treat every stated **allergy and diet as a hard rule** across all meals,
   sauces, and garnishes, and name the allergen in the header. Note hidden
   sources when relevant (fish sauce, nut oils, soy in stock, gluten in soy
   sauce) as things to check on labels, not as guarantees.
2. When diets in the household **conflict** (one vegetarian, one not; one
   person on a medical diet), plan a shared base with a split protein or
   topping where possible, and mark which meals are split. Never make one
   person eat around another's allergen or medical diet (celiac): keep the
   shared base safe for everyone rather than cooking twice.
3. Match meals to the **week's shape**: the quickest meals on the busiest
   nights, a bigger or slower cook on a free day, and a "leftovers" or
   "freezer" night.
4. **Share ingredients** across meals: a whole roast chicken on Sunday becomes
   Tuesday's tacos, a bunch of herbs is used in two dishes, one batch of rice
   serves twice. Note each carry-over.
5. Use what they already have first, and say where each item was used.
6. Plan **leftovers on purpose**: say which meal makes extra, how much, and
   which later meal uses it.
7. Write a **prep-ahead list** for one session: what to wash, chop, cook, or
   marinate, and roughly how long it takes. Only suggest storage times the
   person's recipes give; when cooked food waits several days for a later
   meal, say so plainly so they can judge.
8. Build the **shopping list** from the full plan, one item per checkbox,
   quantities added up and sized for the headcount, grouped by store section
   (produce, meat and seafood, dairy and eggs, bakery, pantry, frozen, other).
   Leave off what they have; mark "check pantry" for unmentioned staples.
9. On a **tight budget**, lean on cheap staples (beans, eggs, rice, frozen
   vegetables), fewer distinct ingredients, and more reuse. Do not quote
   prices or promise the list fits a budget; prices vary by store, so offer
   to mark the items most likely to cost the most.

## The format

```markdown
# Meal plan: [week of date]
For: [people] · Avoid: [allergies and diets] · Use up: [items]

## The week
| Day | Meal | Time | Notes |
|---|---|---|---|
| [Day] | [Meal] | [minutes] | [makes extra / uses leftovers] |

## Prep ahead ([day], about [time])
- [ ] [Task]

## Leftovers plan
- [Meal] makes extra [item] → [later meal]

## Shopping list
**Produce**
- [ ] [Quantity] [item]

**Meat and seafood**
- [ ] [Quantity] [item]

**Dairy and eggs**
- [ ] [Quantity] [item]

**Pantry**
- [ ] [Quantity] [item]

**Frozen**
- [ ] [Quantity] [item]

## Check before shopping
- [Staples to check, labels to read]
```

## Example

Input: "2 adults, 1 kid. kid has a peanut allergy. no pork. busy mon wed thu.
have half a bag of spinach and a lot of rice. dinners only, mon-fri"

```markdown
# Meal plan: week of 2026-11-02
For: 2 adults, 1 child · Avoid: peanuts, pork · Use up: spinach, rice

## The week
| Day | Meal | Time | Notes |
|---|---|---|---|
| Mon | Egg fried rice with spinach and peas | 20 min | Uses rice, spinach |
| Tue | Roast chicken, potatoes, green beans | 75 min | Makes extra chicken |
| Wed | Chicken quesadillas | 20 min | Uses Tue chicken |
| Thu | Pasta with tomato sauce and spinach | 20 min | Finishes spinach |
| Fri | Black bean tacos with rice | 30 min | Uses rice |

## Prep ahead (Sunday, about 30 min)
- [ ] Cook a pot of rice for Monday (or use day-old rice if you have it).
- [ ] Wash and dry the green beans.

## Leftovers plan
- Tue roast chicken makes extra chicken → Wed quesadillas

## Shopping list
**Produce**
- [ ] 1 lb green beans
- [ ] 2 lb potatoes
- [ ] 1 onion
- [ ] 1 lime
- [ ] Lettuce or cabbage for tacos

**Meat and seafood**
- [ ] 1 whole chicken

**Dairy and eggs**
- [ ] 6 eggs
- [ ] Shredded cheese

**Pantry**
- [ ] Tortillas
- [ ] 1 can black beans
- [ ] Pasta
- [ ] 1 jar tomato sauce

**Frozen**
- [ ] 1 bag peas

## Check before shopping
- Read labels for peanuts and "may contain" warnings (tortillas, sauces,
  bakery items), and check the fried rice oil is not peanut oil.
- No pork: some flour tortillas are made with lard, so check the label. (added)
- Check pantry: oil, soy sauce, garlic, and taco spices.
```

## Pitfalls

- **Seven new recipes in one week.** Repeat formats, share ingredients, and
  plan a leftovers night.
- **Health claims.** Do not describe meals as healthy, clean, balanced, or
  good for a condition. For a medical diet, plan to the rules they give and
  suggest a dietitian or doctor for the rules themselves.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. The shopping list's checkboxes can be ticked off in the store on a phone.
