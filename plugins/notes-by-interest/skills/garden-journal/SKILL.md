---
name: garden-journal
description: Writes a garden journal entry or season log with what was planted where, dates, weather, pests and what was done about them, harvests, and notes for next year. Use when a gardener (houseplants included) wants to log today's garden work, record plantings or a harvest, track pests and problems, sum up a growing season, or plan next year's beds from this year's notes.
---

# Garden journal

A garden journal is the memory a garden needs, because the most useful facts
are a year old by the time they matter. Which tomato variety split in August?
When did the last frost actually come? Which bed had the squash, so it should
not have squash again? Did the row cover keep the flea beetles off? None of
that is remembered in March without notes.

The entries are short and dated, and they keep the same handful of facts every
time: what was done in which bed, the weather, what is growing or struggling,
and what was picked. A season log rolls those entries up into what worked,
what did not, and a plan for next year.

## When to use it

- Logging a day or weekend in the garden.
- Recording plantings with varieties, dates, and locations.
- Tracking a pest, disease, or problem and what was tried.
- Writing an end-of-season summary and next year's plan.
- Planning crop rotation from where things grew this year.

For botanical observations of wild plants, use `plant-field-notes`. For a
quick bulleted daily log of everything, use `rapid-logging`. For a reusable
seasonal checklist, use `checklist-maker`.

## What to ask for

- **What they did and saw**, in any form.
- **Kind of entry**: a dated entry or a season summary. Default: a dated
  entry.
- **Their garden layout**: bed names or numbers, containers, plot. Default:
  use the names they use and keep them consistent.
- **Region or zone**, if they want planning notes. Default: do not assume
  frost dates or zone; ask or mark `[?]`.

If they described the day's work, start.

## How to do it

1. Date the entry and record the **weather**: today's conditions and recent
   rain, frost, or heat as they describe it. Keep their numbers (rain gauge,
   soil temperature). A bare weekday ("sat") means the most recent one: write
   its date with the weekday and `[?]`. A day with no month ("no rain since
   the 9th") stays as they said it, with `[?]`.
2. Log **plantings** per bed: crop, variety, seed or transplant, quantity,
   spacing if given, seed source and lot if they note it. A plant with no bed
   (a houseplant, a pot, the fence row) goes under the spot they name, such as
   "Indoors, living room". Varieties matter most; "tomato" is not enough to
   repeat or avoid a result. If they did not name one, write `'[?]'`; never
   guess it from the crop. Gather every open question (varieties, amounts,
   dates) into one short list after the note.
3. Log **care**: watering, feeding (product and amount as given), mulching,
   pruning, staking, thinning.
4. Log **problems** with three parts: what was seen (symptoms, where, how
   many plants), what they think it is (marked as their guess, and only if
   they said it, not read into what they did), and what they did. Do not
   diagnose it for them; offer possibilities only as "(added)" suggestions
   to check.
5. Log **harvests** with amounts and units as given (weight, count, bunches)
   and quality notes.
6. Write **observations**: first flowers, first fruit, bolting, seedlings up,
   pollinators, birds.
7. Add **to do** and **notes for next year** as separate lists. Next-year notes
   are the payoff: "Sow carrots two weeks later; the early ones rotted",
   "Never plant 'Brandywine' by the fence again, too much shade".
8. For a **season log**, roll entries up per bed: what grew, planting and first
   harvest dates, total harvest if recorded, problems, and a verdict per
   variety (grow again, change, drop). Add a rotation note for next year based
   on crop families they grew in each bed.

## The format

```markdown
# Garden: [YYYY-MM-DD]
Weather: [today] · Recent: [rain, frost, heat]

## Planted
- **[Bed]**: [crop] '[variety]', [seed/transplant], [quantity]

## Care
- [What was done, where]

## Problems
- **[Bed/crop]**: Saw: [symptoms] · Think: [their guess] · Did: [action]

## Harvest
- [Crop]: [amount, unit] · [quality]

## Observations
- [What was noticed]

## To do
- [ ] [Task]

## Next year
- [Lesson]
```

Leave out any section with nothing in it; a three-line entry is fine.

## Example

Input: "oct 27. first light frost last night, basil blackened. pulled the
basil and the last peppers from bed 2, about 3 lbs peppers. planted 40
garlic cloves 'Music' in bed 4. aphids still on kale in bed 1, sprayed with
water again. next year the kale needs row cover from the start"

```markdown
# Garden: 2026-10-27
Weather: first light frost last night

## Planted
- **Bed 4**: garlic 'Music', cloves, 40

## Care
- Bed 2: pulled the basil and the last peppers.

## Problems
- **Bed 1, kale**: Saw: aphids still present · Did: sprayed off with water
  again
- **Bed 2, basil**: Saw: blackened by frost · Did: pulled it

## Harvest
- Peppers: about 3 lb · last of the season

## Observations
- First frost of the season, 2026-10-27.

## To do
- [ ] Mulch the bed 4 garlic, if that is your usual practice (suggested).
- [ ] Keep checking the kale for aphids (suggested).

## Next year
- Cover the kale with row cover from planting.
- First frost this year came on 2026-10-27 (for timing basil and peppers).
```

## Pitfalls

- **No varieties.** A journal that says "tomatoes did badly" cannot guide next
  year.
- **No bed names.** Rotation planning needs to know where things grew.
- **Diagnosing pests or diseases.** Record what was seen and their guess;
  suggest checking with a local extension service or garden center.
- **Assuming frost dates or a zone.** Use dates they observed, not averages
  you supply.
- **Skipping the next-year list.** It is the reason to keep the journal.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Adding each dated entry to one running note per season keeps the whole
year in one place for the end-of-season review.
