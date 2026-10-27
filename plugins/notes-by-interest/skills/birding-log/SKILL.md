---
name: birding-log
description: Turns birding field notes into a checklist-style sighting log with location, effort, weather, species counts, and field marks, ready to enter into eBird. It records effort (date, start time, duration, and distance), behavior and breeding evidence, and honest descriptions of uncertain birds. Use when a birdwatcher wants to log a walk, count, or trip, has rough notes or a voice memo from the field, needs help organizing sightings before submitting a checklist, or wants to describe a bird they could not identify.
---

# Birding log

A birding log records what was seen and heard on one outing, at one place,
over a known stretch of time. Serious birders keep it in the shape eBird (the
Cornell Lab of Ornithology's database) asks for, because the protocol is what
makes a list useful as data: where you were, when you started, how long and
how far you birded, whether you reported every species you identified, and a
count for each one.

The other half of a good log is honesty about uncertainty. A bird you are
not sure of is recorded at the level you are sure of ("gull sp.",
"Empidonax sp.") with the field marks you actually saw, so you or a reviewer
can judge it later.

## When to use it

- After a walk, a sit, or a trip, to turn field notes into a checklist.
- Before entering sightings into eBird or another database.
- When describing a bird they could not identify, to work out what to note.
- For a yard list, a big day, or a count with several stops (one list per
  location).
- They ask for a bird list, sightings log, or checklist.

For plants and general nature notes, `plant-field-notes` fits better. For a
year of seasonal observations in a garden, use `garden-journal`. For photos
taken on the outing, `photo-shoot-log` can track settings. For a night of
observing the sky, use `observing-log`.

## What to ask for

- **Location**: as specific as possible (a park and trail, or coordinates).
  eBird lists are tied to one location, so a long trip may need several logs.
- **Date, start time, and duration.** Ask if missing; these are required for
  a complete checklist.
- **Protocol**: stationary, traveling (with distance), or incidental (birds
  noticed while doing something else). Default: infer from what they say.
- **Complete or not**: did they try to report every species they identified?
  An incidental list is never complete in eBird.
  Default: ask; it matters for the data.
- **Party size**, if they want to submit. Default: `[?]`.

Bundle the missing header items into one short question ("What date, what
start time, how long, and did you report everything you identified?") and
draft the log while they answer.

## How to do it

1. Fill the **header**: location, date, start time, duration, protocol,
   distance for traveling counts, party size, and whether the list is
   complete. Mark missing items `[?]`. A weekday ("Sat") becomes the most
   recent such date, stated so they can correct it. Notes that cover two
   places or switch protocol (a sit, then a walk back) become two logs
   under one note, each with its own header; the second may say "Weather:
   as above".
2. Record **weather and conditions** briefly as they described them: sky,
   wind, temperature, tide or water level if relevant.
3. List **species in taxonomic order** if you know the order with
   confidence; otherwise in the order seen, and say so. Use standard
   English names. Keep a regional name the person chose, but correct a plain
   misspelling or casual form ("Grate Blue Heron", "red-wing") to the
   standard name and list each correction in the notes so they can check
   it. If a misspelling could be either of two species, ask; do not pick.
   Use a recent split or rename only when you are sure of it, and say so.
4. Give each species a **count**: an exact number, or an honest estimate.
   eBird prefers an estimate to "X" (present, not counted); use "X" only if
   they truly did not count. The estimate must be theirs: for "lots" or
   "everywhere", ask for a rough number rather than supplying one. A
   species seen but not counted ("didn't count the chickadees") still goes
   on the list as X; leaving it off makes a "complete" list false.
5. Note **how detected** where given (seen, heard, both; leave the cell
   blank when they did not say, not `[?]`) and **behavior or
   breeding codes** if they observed nesting, carrying food, or singing on
   territory. Do not assign a breeding code they did not observe.
6. For **uncertain birds**, record at the confident level ("hawk sp.",
   "Accipiter sp.", "Greater/Lesser Yellowlegs") and add a details line with
   field marks as observed: size compared with a known bird, shape, bill,
   plumage pattern, wing bars, eye ring, tail, behavior, call or song, light
   and distance. Never upgrade a bird to a species the person did not
   identify. You may suggest candidates, marked `(suggested)`, and the marks
   that would separate them, marked `(added)`.
7. Flag **rarities** (species they or the local checklist call unusual) with
   a reminder that eBird will ask for details, and keep their description
   word for word.
8. Add **notes** for anything else: banded birds, a photo or recording
   taken, disturbance, access tips. If they asked a question in their notes
   ("late for that?"), answer it there briefly, marked `(added)`.

## The format

```markdown
# Birding log: [Location], [YYYY-MM-DD]
- **Start:** [time] · **Duration:** [minutes]
- **Protocol:** [stationary / traveling / incidental] · **Distance:** [km or mi]
- **Party size:** [n] · **Complete checklist:** [yes / no]
- **Weather:** [sky, wind, temperature, other]

## Species ([n])
| Species | Count | Detected | Notes |
| --- | --- | --- | --- |
| [Common name] | [n] | [seen / heard / both] | [behavior, sex, age, breeding code] |

## Uncertain birds
### [Group sp. or "X/Y"]
- **Count:** [n]
- **Marks seen:** [size, shape, bill, plumage, behavior, voice]
- **Conditions:** [light, distance, duration of view]
- **Possible:** [candidates] (suggested)

## Notes
- [Photos, recordings, access, other]
```

## Example

Input: "Jamaica Bay west pond loop, 7:10 to 8:40, about 2.5 km, me + 1, cool
NW wind clear. 40ish Brant, 3 Great Egrets, Snowy Egret 1, heard Clapper Rail,
6 Tree Swallows, small falcon zipped past, dark, not sure merlin or kestrel,
didn't see facial pattern. reported everything I could ID"

```markdown
# Birding log: Jamaica Bay, West Pond loop, [?] date
- **Start:** 07:10 · **Duration:** 90 minutes
- **Protocol:** traveling · **Distance:** about 2.5 km
- **Party size:** 2 · **Complete checklist:** yes
- **Weather:** clear, cool, northwest wind

## Species (5, plus 1 uncertain)
Listed in the order given.
| Species | Count | Detected | Notes |
| --- | --- | --- | --- |
| Brant | 40 | seen | estimate |
| Great Egret | 3 | seen | |
| Snowy Egret | 1 | seen | |
| Clapper Rail | 1 | heard | |
| Tree Swallow | 6 | seen | |

## Uncertain birds
### falcon sp.
- **Count:** 1
- **Marks seen:** small falcon, dark overall, flew past fast
- **Conditions:** brief flyby; facial pattern not seen
- **Possible:** Merlin or American Kestrel (suggested)
  - Face pattern, upperpart color, and flight style would separate them.
    (added)
```

## Pitfalls

- **Guessing up.** A "probably a Merlin" logged as Merlin is a false record.
  Log "falcon sp." and the marks.
- **Missing effort data.** Without start time, duration, and distance, a list
  is anecdote, not data. Ask for them.
- **One list for many places.** A trip across three sites needs three lists
  for eBird.
- **"Complete" when it was not.** If they skipped gulls or did not note
  common birds, the list is incomplete. Say so.
- **Breeding codes from assumption.** Record only behavior actually seen.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Titling each log with location and date matches how eBird lists them,
which makes it easy to tick off which outings have been entered.
