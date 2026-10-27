---
name: location-scouting-notes
description: Writes location scouting notes with access, parking, permits, light direction by time of day, angles, power and sound, hazards, and backup spots. Use when a photographer, filmmaker, or video crew has scouted a location (or is about to) and wants scout notes, a location report, a recce sheet, or a record of where the sun will be and how to get gear in.
---

# Location scouting notes

Scouting notes turn a walk around a place into the answers a shoot day needs:
can we get in, where do we park, do we need permission, where is the light at
the hour we plan to shoot, which angles work, and what can go wrong. Film crews
call it a recce or a tech scout; photographers often just call it scouting. The
point is the same: problems found on a quiet weekday cost nothing, and the
same problems found with a client and a crew waiting cost the day.

Light is the heart of it. A location that is perfect at 9 a.m. can be in flat
shade by noon and backlit at 5, so good notes record the compass orientation
of the main view and what the light was doing at the time of the scout, and
mark what still needs checking at the shoot hour.

## When to use it

- After visiting a location, from phone notes, photos, or a voice memo.
- Comparing several candidate locations for one shoot.
- Building a location library for repeat use.
- Briefing a crew or client who did not come on the scout.

For the shoot itself, use `photo-shoot-log`. For notes on a trip as an
experience rather than a job, use `travel-journal`. For a shareable list of
what to bring and check on the day, use `checklist-maker`.

## What to ask for

- **What they saw**: notes, photo captions, or a voice memo.
- **The planned shoot**: date, time window, and what is being shot (portraits
  for two, a three-person video crew, a product flat lay). Default: ask, since
  it decides what counts as a problem.
- **Location name and address or coordinates.** Default: record what they
  give; never guess an address.

If they gave notes and the shoot plan, start.

## How to do it

1. Head the note with the location name, address or GPS pin as given, the
   scout date and time, and the weather on the scout.
2. **Access**: how to get in, opening hours, gates or keys, a contact person,
   walking distance from parking to the spot, stairs, and whether a cart or
   gear load-in is practical.
3. **Parking**: where, cost, time limits, and room for a van if relevant.
4. **Permits and permissions**: whether the place is public or private, who
   owns or manages it, what they said or what signs said, and what is still
   unknown. Record; do not decide what the law requires. Mark anything unclear
   "check with [owner, city film office]".
5. **Light**: the compass direction the main view faces, sun and shade at the
   scout time, and the expected light at the planned shoot time if the person
   checked it with a sun-tracking app or knows it. Mark any time-of-day
   prediction you have not been given as "to check". Note artificial light,
   reflective surfaces, and tall buildings or trees that block the sun.
   Indoors, record the direction the windows face. For a long shoot, flag
   window light as a continuity risk and its timing "to check". A
   direction the person guessed ("south, I think") stays marked as a guess.
6. **Angles**: each good spot with lens or framing ideas, what is in the
   background, and what must be avoided (a dumpster, signage, a logo).
7. **Sound and power** for video: traffic, aircraft, HVAC, a nearby school
   bell; outlets, generator rules.
8. **Hazards**: traffic, uneven ground, water, crowds, cliffs, ticks, and the
   nearest restroom and shelter. Describe what was seen; do not rate it safe.
9. **Backup spots**: a covered or nearby alternative if weather or access
   fails.
10. **Photo references**: file names or image numbers for each spot, so the
    note and the pictures stay matched.
11. List **open questions** to resolve before the shoot.
12. For a section the scout did not cover, write `[?] not checked` when the
    shoot depends on it (access and load-in always; sound and power for
    video), and leave it out otherwise.
13. When comparing several places, write one note each, then a short table:
    light at the shoot time, access, permits, and the main risk.

## The format

```markdown
# Scout: [Location name]
Scouted: [date, time] · Weather: [conditions]
Address / pin: [as given] · For: [shoot, date, time window]

## Access
- [Entry, hours, contact, walk from parking, load-in]

## Parking
- [Where, cost, limits]

## Permits and permissions
- [Public/private, owner, what was said] · To confirm: [what is still unsettled]

## Light
- Main view faces: [direction]
- At scout ([time]): [what the light was doing]
- At shoot time: [known or "to check"]

## Spots and angles
1. **[Spot]**: [framing, lens idea, background] · Avoid: [what to keep out of frame] · Photos: [refs]

## Sound and power
- [Notes]

## Hazards
- [What was seen]

## Backup
- [Alternative spot]

## Open questions
- [?] [Question]
- [ ] [Something to do before the shoot]
```

## Example

Input: "scouted riverside park 10/27, 4pm, sunny. engagement shoot nov 7
~5pm. lot on Mill St, free. bridge faces west, sun behind it at 4.
willow grove by water is shaded, nice. lots of joggers on path. no signs
about permits, ask city? gazebo by lot if rain. pics IMG_2201-2214"

```markdown
# Scout: Riverside Park
Scouted: 2026-10-27, 4 p.m. · Weather: sunny
Address / pin: [?] · For: engagement shoot, 2026-11-07, about 5 p.m.

## Access
- [?] Not checked: the walk from the lot to the bridge and the grove.

## Parking
- Lot on Mill St, free. [?] Time limits.

## Permits and permissions
- No permit signs seen. To confirm: ask the city whether a permit is needed
  for this shoot.

## Light
- Bridge view faces west; at 4 p.m. the sun was behind the bridge (backlit).
- At shoot time: to check. Look up sunset for 2026-11-07 in a sun-position
  app. If the park is in the US or Canada, clocks fall back on 2026-11-01,
  between the scout and the shoot, so sunset will come about an hour earlier
  by the clock. (added)

## Spots and angles
1. **Bridge**: backlit couple, rim light. Photos: [?]
2. **Willow grove by the water**: open shade, soft. Photos: [?]

## Hazards
- Busy jogging path. Keep the couple and gear off it.

## Backup
- Gazebo by the lot, if it rains.

## Open questions
- [ ] Check sunset time for 2026-11-07 and consider moving the start earlier.
- [?] Permit question for the city.
- [?] Which of IMG_2201-2214 go with the bridge, and which with the grove?
```

## Pitfalls

- **Light notes without a direction.** "Nice light" is useless on another day.
  Record which way the view faces.
- **Predicting sun position from memory.** Note it as "to check" and suggest a
  sun-tracking app for the shoot date.
- **Deciding permits.** Say what was seen and who to ask, not whether one is
  required.
- **Notes without photo references.** Match every spot to its pictures.
- **No backup.** Weather and closures happen. Always name one alternative.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A "Locations" folder with one note per place builds into a library worth
returning to.
