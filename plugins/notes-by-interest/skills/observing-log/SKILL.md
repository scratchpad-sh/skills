---
name: observing-log
description: Writes an amateur astronomer's observing log, with site, seeing and transparency, equipment, targets with times, what was seen, and sketch or imaging notes. Use when someone has been out with a telescope or binoculars and wants to log the night, has scribbled notes or a voice memo from the eyepiece, is working through an observing list such as the Messier objects, or wants to record an imaging run.
---

# Observing log

An observing log is the astronomer's lab notebook. For each session it
records where you were, what the sky was like, what equipment you used, and
for each target, when you looked and what you actually saw. Observers have
kept such logs for centuries; observing programs such as the Astronomical
League's certificates still ask for one as proof of observation.

The log matters because the same object looks very different with different
skies, apertures, and magnifications. "M13 resolved to the core at 150x in
steady seeing" means something next year only if you know the scope and the
sky that night. A good log also records failures honestly: "not found" and
"suspected only" are real observations.

## When to use it

- After a night out with a telescope, binoculars, or the naked eye.
- During a session, from voice memos or quick notes at the eyepiece.
- Working through a list (Messier, Caldwell, Herschel 400, double stars).
- Logging an astrophotography run: targets, exposures, and problems.
- Recording an event: an occultation, a meteor shower, a comet, an eclipse.

For general nature notes, `plant-field-notes` or `birding-log` fit better.
For the camera side of a daytime shoot, use `photo-shoot-log`.

## What to ask for

- **Site and date**, with start and end times. Times in local time or UT;
  record which.
- **Sky conditions**: seeing and transparency (on whatever scale they use),
  limiting magnitude or SQM reading if they have one, moon phase if they
  noted it, clouds, dew, wind, temperature.
- **Equipment**: telescope or binoculars (aperture, focal length), mount,
  eyepieces, and filters; camera and settings for imaging.
- **Targets and what they saw.**

If they gave notes, start. Do not look up or add the moon phase, object
magnitudes, or coordinates unless asked; mark missing conditions `[?]`.

## How to do it

1. Fill the **session header**: site (name, and Bortle class if they gave
   it), date, times, observers. A session that runs past midnight gets the
   double date ("2026-10-26/27"), so later targets stay with the right night.
   A day name ("Saturday") becomes the most recent such date, flagged `[?]`.
2. Record **seeing** and **transparency** separately. Seeing is steadiness
   of the air (how much stars twinkle and planets boil); transparency is
   clarity (haze, humidity, how faint you can see). People confuse them.
   Keep their scale and name it, and do not convert. For seeing that is often
   Antoniadi I to V or Pickering 1 to 10, which run in opposite directions
   (Antoniadi I and Pickering 10 are best); for either, often a simple 1 to 5.
3. List **equipment** once at the top. For each target, note the eyepiece,
   magnification, and filter used. If they give focal lengths, you may
   compute magnification (telescope focal length divided by eyepiece focal
   length) and say it was calculated.
4. For each **target**, record: designation and common name, time, the
   optics used, and **what was seen** in their words. Prompt for the details
   observers value: brightness and size, shape, central condensation,
   resolved stars, color, structure, averted vision needed, how it changed
   with magnification. For doubles: split or not, colors, separation as seen.
   For planets: features seen and the moments of good seeing.
5. Mark status honestly: **seen**, **suspected** (glimpsed with averted
   vision, not held), or **not found**. Never upgrade a suspected sighting.
   "Not found" means they looked; a detail nobody looked for (a central star,
   a dust lane) is `[not observed]`.
6. For **sketches**, note the field orientation (north up, mirror-reversed by
   a diagonal, etc.), field of view, and where the sketch is stored. For
   **imaging**, record camera, gain or ISO, exposure length, number of
   subframes, calibration frames, and problems (guiding, focus, clouds).
7. End with **session notes**: what worked, equipment issues, and targets
   to try next time.

## The format

```markdown
# Observing log: [Site], [YYYY-MM-DD]
[Start] to [end] ([local / UT]) · Observers: [names]

## Conditions
- **Seeing:** [value] ([scale])
- **Transparency:** [value] ([scale])
- **Limiting magnitude / SQM:** [value]
- **Moon:** [phase, up or down]
- **Weather:** [clouds, dew, wind, temperature]

## Equipment
- **Scope:** [aperture, focal length, type] on [mount]
- **Eyepieces:** [focal lengths] · **Filters:** [list]
- **Camera:** [for imaging]

## Targets
### [Designation] ([common name]) · [time]
- **Optics:** [eyepiece], [magnification]x, [filter]
- **Status:** [seen / suspected / not found]
- **Seen:** [description]
- **Sketch or image:** [notes]
- **Reference (not observed):** [catalog figures they quoted, with source]

## Session notes
- [What worked, problems, next time]
```

## Example

Input: "backyard 10/26, 9:30 to 11 pm local. seeing ok maybe 3/5, transparency
good 4/5. 8 inch dob 1200mm, 25mm and 10mm. M57 at 9:45 with the 10mm, small
gray smoke ring, dark center obvious. tried for the central star nope. Albireo
gold and blue, easy split with 25. dew killed the finder at 10:50."

```markdown
# Observing log: Backyard, 2026-10-26
21:30 to 23:00 (local) · Observers: [?]

## Conditions
- **Seeing:** about 3 ("ok maybe 3/5", 1 to 5 scale)
- **Transparency:** 4 (1 to 5 scale)
- **Weather:** dew by 22:50

## Equipment
- **Scope:** 8-inch Dobsonian, 1200 mm focal length
- **Eyepieces:** 25 mm (48x), 10 mm (120x) (magnification calculated)

## Targets
### M57 (Ring Nebula) · 21:45
- **Optics:** 10 mm, 120x
- **Status:** seen; central star not found
- **Seen:** small gray smoke ring, dark center obvious

### Albireo (Beta Cygni) · [?] time
- **Optics:** 25 mm, 48x
- **Status:** seen
- **Seen:** gold and blue, easy split

## Session notes
- Dew killed the finder at 22:50.
```

## Pitfalls

- **Mixing seeing and transparency.** They are different, and both matter.
  Record them separately with their scales.
- **Upgrading suspected sightings.** "Suspected" is a valid result; a faint
  galaxy logged as "seen" when it was a guess undermines the whole log.
- **Adding catalog facts as observations.** "Magnitude 8.8, 1.4 arcmin"
  is from a book, not the eyepiece. Keep reference data separate if added.
- **No optics per target.** A description without magnification cannot be
  compared next time.
- **Missing time zone.** Local and UT can differ by a date. Say which.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Including each target's designation in the note makes it easy to search
for every time you have observed it.
