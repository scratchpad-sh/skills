---
name: plant-field-notes
description: Writes plant field notes with habitat, a description part by part, measurements, photos, and a tentative ID with its confidence and supporting features. Use when a botanist, naturalist, student, or hiker wants to record a wild plant they found (not one they grow), write up field notes, or work toward an ID from what they saw.
---

# Plant field notes

Field notes record a plant as it was found, in enough detail that the
observation still means something later: to the person keying it out at home,
to a herbarium curator, or to a community science platform. Botanists describe
a plant part by part in a fixed order, because identification keys ask about
specific features (leaf arrangement, leaf type, margins, flower parts, fruit
type), and a feature not written down in the field is usually impossible to
recover.

The identification is always kept separate from the description. The
description is what was seen and measured; the ID is an interpretation with a
confidence level and the features that support it. That separation keeps the
record useful even if the ID turns out to be wrong, which it often does.

Field notes are a record, not a guide to use. Never treat an identification in
these notes as a reason to eat, touch, or use a plant.

## When to use it

- After a walk, survey, or field class, from scribbles, photos, or a voice
  memo.
- Recording a plant they could not identify, to key out later.
- Preparing an observation for a herbarium label or a community science
  upload.
- Keeping a running list of species seen at one site over seasons.

For birds, use `birding-log`. For a home garden's plantings and harvests, use
`garden-journal`. For a trip as a whole, use `travel-journal`.

## What to ask for

- **What they saw**: notes, photos described, or a voice memo.
- **Date and location**, as precise as they are willing to share. Default:
  record what they give. For rare or sensitive species, suggest keeping exact
  coordinates private.
- **Their ID guess**, if they have one, and what made them think so.

Do not ask more. Every feature they did not observe gets `[not observed]`,
which is itself useful information for a key.

## How to do it

1. Record **date, time, location** (place name, coordinates and their source
   or accuracy if given, elevation if given), and **observer**.
2. Describe **habitat**: vegetation type, light (full sun, shade), moisture,
   soil or substrate, slope and aspect, associated species they named, and
   disturbance (trail edge, mowed, burned).
3. Describe **habit**: herb, shrub, tree, vine, grass-like; annual or
   perennial if evident; height; growth form; how many plants and how spread.
4. Describe **stem**: shape in cross-section (round, square, winged), hairs,
   color, sap if it was noticed.
5. Describe **leaves**: arrangement (alternate, opposite, whorled, basal),
   simple or compound (and how), shape, margin (entire, toothed, lobed),
   venation, surface and hairs, size, smell when crushed if they checked.
6. Describe **flowers**: color, number of petals or parts, symmetry (radial or
   bilateral), size, arrangement (single, cluster, spike, umbel), and position.
   With no flowers or fruit, say so and record the stage (vegetative, in bud,
   gone to seed); keys and later visits need it. For ferns, grasses, and
   sedges, record what their keys ask instead (sori, ligules, spikelets,
   stem cross-section).
7. Describe **fruit and seeds**: type (berry, capsule, pod, nutlet, achene),
   color, size, and stage.
8. Record **measurements** with units exactly as given; note whether they were
   measured or estimated.
9. List **photos taken** by number, each with what it shows (whole plant, leaf
   underside, flower front, scale object).
10. Write a **tentative ID** at the level the evidence supports (family, genus,
    or species), with a confidence (low, medium, high), the observed features
    that support it, the features that would confirm or rule it out, and
    look-alikes. Never present an ID as certain. Record their own ID, or a
    friend's, as that person's, with the reason they gave.
11. List **to check**: features to look for next visit, a key or flora to
    consult, an expert or platform to ask.

## The format

```markdown
# [YYYY-MM-DD] [Location]: [Tentative ID or "Unknown [habit] #n"]
Observer: [name] · Time: [time] · Coordinates: [as given, accuracy]

## Habitat
- [Vegetation, light, moisture, substrate, associates, disturbance]

## Description
- **Habit:** [herb, shrub, tree, or vine; height]
- **Stem:** [shape, hairs, color]
- **Leaves:** [arrangement]; [simple/compound]; [shape]; [margin]; [size]
- **Flowers:** [color, parts, arrangement]
- **Fruit:** [type, color]

## Measurements
- [Part]: [value, unit] ([measured/estimated])

## Photos
- [Number]: [what it shows]

## Tentative identification
- **ID:** [taxon] · **Confidence:** [low/medium/high]
- **Supporting features:** [features that fit]
- **Would confirm or rule out:** [feature to check]
- **Look-alikes:** [similar taxa]

## To check
- [ ] [Next step]
```

## Example

Input: "10/27 oak woods behind the reservoir, shady creek bank. ~60cm herb,
square stem, opposite leaves toothed, smells minty crushed. small pale purple
flowers in whorls around the stem. no fruit seen. photos 14-19, 17 is the
flower close up. maybe a mint?"

```markdown
# 2026-10-27 Reservoir oak woods: Mint family? (Lamiaceae)
Observer: [?] · Time: [?] · Coordinates: [?]

## Habitat
- Oak woods, shady creek bank.

## Description
- **Habit:** herb, about 60 cm
- **Stem:** square in cross-section
- **Leaves:** opposite; toothed margin; minty smell when crushed;
  [simple or compound, shape, and size not observed]
- **Flowers:** small, pale purple, in whorls around the stem
- **Fruit:** not observed

## Photos
- 14-19: plant · 17: flower close-up

## Tentative identification
- **ID:** Lamiaceae (mint family), possibly *Mentha* · **Confidence:** medium
  for family, low for genus
- **Supporting features:** square stem, opposite leaves, minty smell,
  flowers whorled around the stem
- **Would confirm or rule out:** flower shape under a hand lens, leaf shape
  and size, whether the flower whorls are in the leaf axils or in a terminal
  spike
- **Look-alikes:** other aromatic mint-family genera; your guess was "a mint".
  Some plants outside the mint family, such as vervains (*Verbena*), also
  have square stems and opposite leaves, and a mint smell alone does not
  confirm an ID. (added)

## To check
- [ ] Key it out in a regional flora with photo 17.
- Not for eating or tea on the strength of these notes.
```

## Pitfalls

- **Writing the ID as the title with no hedge.** Use "?" or the confidence
  level until it is confirmed.
- **Describing only the flower.** Keys often turn on leaves, stems, and fruit.
- **Mixing description and interpretation.** "Leaves look like mint" belongs in
  the ID section, not the description.
- **Inventing features to complete the description.** `[not observed]` is
  better than a guess.
- **Treating notes as safe to forage from.** Many edible plants have toxic
  look-alikes. Do not give edibility, medicinal, or handling advice; describe
  what was seen. If asked "can I eat it?", say outside the note that these
  notes cannot answer that, and suggest an in-person ID by a local expert.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A folder per site lets observations from the same place build up across
seasons.
