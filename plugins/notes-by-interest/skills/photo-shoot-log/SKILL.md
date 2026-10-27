---
name: photo-shoot-log
description: Logs a photo shoot with location, light, gear, settings for key frames, what worked, what to retry, client or model details, and a culling plan. Use when a photographer wants to write up a shoot, keep a shooting log, record settings and lighting setups, note a client session, or plan a cull and edit after a wedding, portrait, product, landscape, or street session.
---

# Photo shoot log

A shoot log is the record a photographer keeps so the next shoot starts ahead
of this one. EXIF already stores shutter speed, aperture, ISO, and focal
length, so the log is for everything the camera does not know: where the light
came from and what modified it, why a setting was chosen, where the strobe
stood, what the client asked for, what the location was like at that hour,
and which frames are worth the editing time.

Kept over months, these logs become a working reference. "How did I light that
headshot?" has an answer, a recurring client's preferences are written down,
and the same mistake (a missed focus on a moving subject, a blown sky) shows
up as a pattern instead of a surprise.

## When to use it

- Right after a session, from memory, voice notes, or a quick list.
- Recording a lighting setup worth repeating.
- A client or model session where releases, preferences, and deliverables
  need tracking.
- Planning the cull and edit for a big take (a wedding, an event).

To plan a shoot location beforehand, use `location-scouting-notes`. For
the client conversation before a shoot, use `client-call-notes`. For a
night of observing the sky, use `observing-log`.

## What to ask for

- **What happened**: their notes, in any order.
- **Shoot type, date, and location.** Default: today, and ask for the type if
  unclear.
- **Settings for the frames that matter**, if they have them. Default: point
  out that EXIF holds the exposure triangle, and log only what they give plus
  what EXIF cannot know (lighting, modifiers, distances, intent).

Do not ask for every frame's settings. A handful of key frames is the point.

## How to do it

1. Head the log with date, shoot type, client or project, and location.
   Leave out the weather for an indoor shoot.
2. Describe the **light**: natural or artificial, direction relative to the
   subject, quality (hard or soft), and conditions (overcast, open shade, golden
   hour, mixed fluorescent). For flash or strobes: each light's role (key,
   fill, rim, background), modifier, rough position, and power if given. A
   simple position note ("key 45° camera left, slightly above") is worth more
   than a paragraph.
3. List **gear**: bodies, lenses, lights, modifiers, filters, tripod, and any
   gear that failed or was missing.
4. Record **key frames** in a table: frame number or file name, what it is,
   lens and focal length, aperture, shutter, ISO, white balance, and a note on
   why. Only include values the person gave.
5. Write **what worked** and **what to retry** as specific, technical lines:
   "Shutter at 1/250 froze the kids; 1/125 blurred hands", not "action shots
   were tricky".
6. For client or model work, note **people details**: names as they gave them,
   releases signed, preferences ("prefers left side", "no shots from below"),
   deliverables, and deadlines. Keep only what is needed to do the job: a
   phone number or address belongs in the client file, so write "contact in
   client file" instead. Note any shot the client asked for and did not get,
   here and under retry.
7. Write the **culling plan**: card or folder names, the number of frames if
   known, the rating pass (for example, a first pass picking keepers, a second
   ranking them), the target count to deliver, edit style, and delivery date.
   Turn "in 3 weeks" into a date counted from the shoot, and keep their words
   beside it.
8. Add **backup status**: cards copied, where, and whether cards can be
   formatted. If a card failed or files are missing, put a **Backup problem**
   line directly under the heading, with the frames at risk and what has been
   tried, and add "do not format that card" to the checklist.

## The format

```markdown
# [YYYY-MM-DD] [Shoot type]: [Client or project]
Location: [place] · Time: [start to end] · Weather: [conditions]
**Backup problem:** [only if a card failed: frames at risk, recovery status]

## Light
- [Natural/artificial, direction, quality]
- [Light]: [role], [modifier], [position], [power]

## Gear
- Body: [camera] · Lenses: [lenses] · Lighting: [lights, modifiers] · Other: [gear]

## Key frames
| Frame | Subject | Lens | f/ | Shutter | ISO | WB | Why |
|---|---|---|---|---|---|---|---|

## What worked
- [Specific]

## Retry next time
- [Specific]

## People
- [Name, role] · Release: [yes/no/?] · Notes: [preferences]

## Cull and edit
- [ ] Back up cards to [locations]
- [ ] First pass: [method] · Target: [count] · Style: [edit look]
- Deliver by: [YYYY-MM-DD] · How: [gallery, drive]
```

## Example

Input: "headshots for Dana at her office 10/27. window light from left, big
silver reflector right. 85mm 1.8. f/2.8 1/200 iso 400 for most. tried f/1.8,
only one eye sharp. ceiling lights green tint. she wants 5 finals by friday,
signed release. ~300 frames"

```markdown
# 2026-10-27 Headshots: Dana
Location: Dana's office · Time: [?]

## Light
- Key: window light from camera left.
- Fill: large silver reflector, camera right.
- Ceiling fluorescents added a green tint.

## Gear
- Lens: 85mm f/1.8 · Reflector: large, silver · Body: [?]

## Key frames
| Frame | Subject | Lens | f/ | Shutter | ISO | WB | Why |
|---|---|---|---|---|---|---|---|
| Most | Head and shoulders | 85mm | 2.8 | 1/200 | 400 | [?] | Main setting |
| [?] | Same | 85mm | 1.8 | [?] | [?] | [?] | Test: only one eye sharp |

## Retry next time
- Turn off the ceiling lights or gel them, to avoid green tint (suggested).
- Stay at f/2.8 or narrower for two-eye sharpness at this distance.

## People
- Dana, client · Release: signed · Wants: 5 finals

## Cull and edit
- [ ] Back up about 300 frames
- [ ] First pass for keepers, then pick 5 · Correct green cast
- Deliver by: 2026-10-30
```

## Pitfalls

- **Re-typing EXIF.** Log the reasoning and the light; the file already has
  the numbers.
- **Vague retries.** "Do better with focus" teaches nothing. Name the setting
  or the move.
- **Invented settings.** If they did not say the ISO, leave `[?]`. A wrong
  setting in a log is worse than none.
- **Too much personal detail.** Keep client and model notes to what the job
  needs.
- **No backup line.** A log that says "cards formatted" before "backed up
  twice" has its order wrong.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Titles that start with the date and shoot type make a shoot folder easy
to search when the same client or setup comes back.
