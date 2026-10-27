---
name: training-log
description: Writes a training log entry with session type, sets and reps or distance and pace, effort (RPE), sleep and soreness, and notes for next time. Use when a runner, lifter, climber, cyclist, swimmer, or anyone training wants to log a workout, has rough notes or watch data to tidy up, keeps a weekly training log, or wants to see what they did last time before the next session.
---

# Training log

A training log is the record that makes progress visible. Coaches ask
athletes to keep one because memory is a poor judge of training: last week's
session always feels easier or harder than it was. A good log records what
was actually done (not what the plan said), how hard it felt, and the
recovery context around it, so patterns show up over weeks.

The core of any entry is the same across sports: what kind of session it
was, the work done in that sport's units, the effort (often as RPE, the
rating of perceived exertion, usually on a 1 to 10 scale), and a line for the
next session. This skill records; it does not coach.

## When to use it

- After a workout, from notes, a watch summary, or memory.
- Keeping a week of entries in one place.
- Before a session, to pull up what was done last time.
- Tracking a return from a layoff, where the person wants to see the trend.
- They ask for a workout log, lifting log, run log, or climbing log.

For practicing an instrument, `practice-log` fits better. For a
weekly reflection that includes training among other things, use
`weekly-review`. For meal planning around training, use `meal-plan`.

## What to ask for

- **The session**: what was done, in any form.
- **Sport and units**: kg or lb, km or miles, pace or speed. Default: the
  units they used.
- **Effort**: RPE or reps in reserve if they track it. Default: record what
  they say ("felt easy") without converting it to a number.
- **Recovery context** if they track it: sleep, soreness, stress, HRV.

Do not ask for anything they do not normally track. If they gave the
session, start.

## How to do it

1. Head the entry with date, **session type** (easy run, intervals, long
   run, strength, hypertrophy, bouldering, limit, recovery), and duration.
2. Record the **work** in the sport's own shape:
   - **Lifting:** exercise, then sets × reps × load, one line per exercise.
     Note RPE or reps in reserve per set if given, and tempo or pauses.
     Mark warm-up sets separately from working sets.
   - **Running, cycling, swimming:** distance, time, average pace or speed,
     and splits or intervals with their recoveries. Heart rate, elevation,
     cadence, or power only if given.
   - **Climbing:** grades and styles (flash, onsight, redpoint, attempts),
     problems or routes by name or color, wall angle, and hang-board or
     campus work as sets.
   - **Anything else:** what was done, how much, how long.
3. Record **how it felt**: RPE for the session (and per set or interval if
   given), and their own words. Keep their words; "legs heavy on the hills"
   carries information a number does not.
4. Record **recovery context**: sleep hours and quality, soreness and where,
   stress, illness, anything unusual.
5. Note **pain or injury** exactly as they describe it, where it was, and
   when it started, in its own **Pain** section (not under soreness, which is
   the ordinary ache of training). Do not diagnose or advise. If they describe sharp,
   worsening, or unusual pain, you may say it is worth getting checked, and
   no more.
6. Write **notes for next session** only from what they said or planned
   ("go up to 62.5 kg on squats", "start intervals slower"). Do not
   prescribe loads, paces, or progressions of your own.
7. If they give earlier entries, add a short **compared with last time** line
   with the plain facts (same load, one more rep; 10 s/km faster at similar
   RPE). Compare like with like (four reps against four), and say when a
   figure is one you worked out ("average, computed"). No judgments.
8. For a **week**, add a summary table: sessions, total distance or volume,
   and the hard days.

## The format

```markdown
# [Session type], [YYYY-MM-DD]
Duration: [time] · [Distance or volume] · RPE: [n]/10 (only if they gave a session RPE) · [Location, HR, if given]

## Work
- **[Exercise or segment]:** [sets × reps × load / distance, time, pace]
- **[Intervals]:** [goal, recoveries], then one numbered line per rep

## How it felt
[Their words.]

## Recovery
- **Sleep:** [hours, quality]
- **Soreness:** [where, how much]
- **Other:** [stress, illness, notes]

## Pain
- [Where, what it felt like, when it started, how it is now, in their words]

## Compared with last time
- [Plain facts, if earlier entries were given]

## Next session
- [What they said they would do]
```

## Example

Input: "lower body day. squat 3x5 at 100kg, last set grindy maybe rpe 9. RDL
3x8 70kg. walking lunges 3x10 each leg w 16kg dbs. slept like 6h. left knee a
bit achy on the lunges. next time stay at 100 on squat"

```markdown
# Strength: lower body, 2026-10-27
Duration: [?]

## Work
- **Squat:** 3 × 5 × 100 kg. Last set grindy, about RPE 9.
- **Romanian deadlift:** 3 × 8 × 70 kg
- **Walking lunges:** 3 × 10 each leg, 16 kg dumbbells

## How it felt
Last squat set was grindy.

## Recovery
- **Sleep:** about 6 hours

## Pain
- Left knee a bit achy on the lunges

## Next session
- Stay at 100 kg on squat.
```

## Pitfalls

- **Logging the plan instead of the session.** If they planned five sets and
  did four, write four.
- **Coaching.** Suggesting a deload, a new pace, or a stretch for the knee is
  advice they did not ask for. Record; do not prescribe.
- **Converting feelings to numbers.** "Felt easy" is not RPE 4 unless they
  say so.
- **Losing warm-ups and working sets in one line.** Keep them apart, or the
  volume is wrong.
- **An entry full of blanks.** Leave out lines for things they do not track
  (HRV, sleep, session RPE) rather than marking each one `[?]`.
- **Mixed units.** If they switch between kg and lb or km and miles, keep
  each as given and label it.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Many people prefer one running note per training block or month, with each
session appended at the top, so the last session is the first thing they see.
