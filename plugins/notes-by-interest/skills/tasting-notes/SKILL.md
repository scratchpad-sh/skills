---
name: tasting-notes
description: Writes structured tasting notes for wine, coffee, tea, beer, whisky, or chocolate, from appearance and aroma to finish, overall impression, and score. The vocabulary and stages adjust to each drink. Use when someone tastes something and wants to record it, keeps a cellar or coffee log, is at a tasting or cupping, wants to compare bottles or roasts, or has rough impressions to turn into proper notes.
---

# Tasting notes

Tasting notes turn a fleeting impression into something you can compare
later. Every serious tasting tradition (wine, specialty coffee, tea, beer,
whisky, craft chocolate) uses roughly the same order: look, smell, taste,
feel, and how long it lasts. What changes from drink to drink is the
vocabulary and the things that matter most: acidity and tannin in wine,
sweetness and clean cup in coffee, liquor and leaf in tea, carbonation and
bitterness in beer, the effect of water in whisky, snap and melt in
chocolate.

A useful note is specific and honest. "Fruity" tells you little; "red
cherry, then a little orange peel" lets you recognize the bottle again. And
the taster's own words are worth more than borrowed ones.

## When to use it

- At a tasting, cupping, or bottle share, to capture impressions quickly.
- Keeping a log of wines, coffees, teas, beers, whiskies, or bars.
- Comparing several side by side (a flight).
- Deciding whether to buy again, and remembering why.

For a recipe or a cooking experiment, use `recipe-card` or `kitchen-test-log`.
For the travel day the tasting happened on, use `travel-journal`.

## What to ask for

- **What it is**: producer, name, and the details that identify it. Wine:
  vintage, region, grape. Coffee: origin, process, roaster, roast date, brew
  method. Tea: type, origin, harvest, steep time and temperature. Beer:
  brewery, style, ABV. Whisky: distillery, age, cask, ABV, with or without
  water. Chocolate: maker, origin, cacao percentage.
- **Their impressions**, in any order and any words.
- **Scoring scale**, if they use one. Default: none, or out of five if they
  want a score. Never convert between scales: a 4 out of 5 is not an 88
  out of 100.

If they gave impressions, start. Ask for identifying details only if the
note would be useless without them.

## How to do it

1. Record the **identity** first, using the fields for that drink, plus date,
   place, and price if given.
2. Sort their impressions into the stages: **appearance**, **aroma** (or nose,
   or dry and wet fragrance for coffee), **taste** (palate, flavor),
   **mouthfeel** (body, texture), **finish** (length and what lingers). Use
   the stage names each tradition uses:
   - **Wine:** color and depth; nose; palate with sweetness, acidity, tannin,
     alcohol, body; finish length.
   - **Coffee:** fragrance (dry), aroma (wet), flavor, acidity, body,
     sweetness, aftertaste, balance.
   - **Tea:** dry leaf, wet leaf, liquor color, aroma, taste, mouthfeel,
     aftertaste, how it changes over infusions.
   - **Beer:** appearance and head, aroma, flavor, bitterness, carbonation,
     body, finish.
   - **Whisky:** color, nose, palate, finish, and how water changed each.
   - **Chocolate:** appearance and snap, aroma, melt, flavor development,
     finish.
   Leave out a stage they did not describe rather than filling it. When
   their notes run nose and palate together, write one "Nose and palate"
   line rather than guessing which stage each word belongs to.
3. Keep their descriptors. You may sharpen a vague word into a more specific
   one only by asking, or by offering it as a suggestion ("fruity: red fruit
   or tropical?"). Never add descriptors they did not say. Label or seller
   notes they report go on their own line, marked as the label's.
4. Record **intensity and structure** where they gave it: light or full,
   short or long finish, high or low acidity.
5. Note **faults** if they mentioned them, by their usual names (cork taint,
   oxidation, under-extraction, skunked, diacetyl), as the taster's
   observation, not a diagnosis.
6. Write the **overall** in one or two sentences in their voice, and the
   **score** in their scale. Add "would buy again" if they said.
7. For a **flight**, head the note with the occasion, date, and place,
   write each item in the same structure, then a short comparison table.
   If the scores use different scales, keep each as given and say in one
   line that they do not compare directly.

## The format

```markdown
# [Producer] [Name] ([Drink])
[Identifying details] · Tasted [YYYY-MM-DD] at [place] · [Price]

**Appearance:** [color, clarity, head, leaf, snap]
**Aroma:** [descriptors]
**Taste:** [descriptors, sweetness, acidity, bitterness, tannin]
**Mouthfeel:** [body, texture, carbonation]
**Finish:** [length, what lingers]
**With water / later infusions:** [what changed, if tried]
**Faults:** [none noted, or as observed]

**Overall:** [one or two sentences]
**Score:** [n] / [scale] · Buy again: [yes / no / maybe]

For a flight, end with:

| Item | Aroma | Taste | Finish | Score |
|---|---|---|---|---|
| [name] | [key words] | [key words] | [length] | [n] |
```

## Example

Input: "coffee, Ethiopia Guji natural from Heart, roasted Oct 14, v60 15g/250g.
smells like blueberry jam. tastes berry, bit of cocoa, bright. light body,
kinda tea-like. finish clean, not long. 4/5 would get again"

```markdown
# Heart Ethiopia Guji, natural (Coffee)
Roasted 2026-10-14 · V60, 15 g coffee to 250 g water · Tasted 2026-10-27

**Aroma:** blueberry jam
**Taste:** berry, a little cocoa; bright acidity
**Mouthfeel:** light body, tea-like
**Finish:** clean, not long
**Faults:** none noted

**Overall:** Berry and bright, light and tea-like. Would get again.
**Score:** 4 / 5 · Buy again: yes
```

## Pitfalls

- **Borrowed vocabulary.** Copying the descriptors from the bag or label
  makes the note an advertisement. Record what the taster found.
- **Missing identity.** A beautiful note on "that red from Saturday" cannot
  be acted on. Get the producer and the key details.
- **Ignoring preparation.** For coffee and tea, the brew recipe changes the
  cup as much as the bean or leaf. Record it.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A folder per drink, with notes titled by producer and name, makes it easy
to find every bottle or bag from the same maker.
