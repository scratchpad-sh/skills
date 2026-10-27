---
name: practice-log
description: Logs a music practice session with goals, warm-up, passages worked on, tempo (BPM) reached, problems and the fixes that worked, and the next session's plan. Use when a musician, music student, or teacher wants to log practice, track metronome tempos, record what went wrong in a passage, plan the next practice session, or keep a practice journal.
---

# Practice log

A practice log turns hours at the instrument into progress that can be seen.
Most practice time is lost to two habits: playing through pieces from the top
instead of working on the hard spots, and starting each session without
knowing what the last one achieved. A log fixes both. It names the passage
(by measure numbers, not "the middle bit"), the tempo it is clean at, what was
going wrong, and what fixed it, so the next session starts where this one
ended.

Tempo is the most useful number in it. "Measures 33-40 clean at 96, target
132" is a fact that can be built on. Over weeks, the BPM column shows real
progress on days when it does not feel like any.

## When to use it

- After a practice session, from quick notes or a voice memo.
- Preparing for a lesson, an audition, a recital, or a gig.
- Working a hard passage up to tempo over many days.
- A teacher wanting students to keep consistent logs.

For capturing a song idea, use `songwriting-notebook`. For a general training
log (running, lifting), use `training-log`. For a weekly look back across all
practice, use `weekly-review`.

## What to ask for

- **What they practiced**, and how it went.
- **Instrument and pieces**, if not obvious.
- **Goals** for the session, or the bigger goal (a recital date, an
  audition list). Default: infer from what they worked on.
- **Tempos**: where they started and where it was clean. Default: record only
  tempos they give.

If they described the session, start.

## How to do it

1. Date the entry and record the **duration** and instrument.
2. State the **goals** for the session in specific terms ("bars 17-24 at
   ♩ = 100 with no slips"), and the larger goal and its date if there is one.
3. Log the **warm-up**: scales, long tones, technical exercises, with keys
   and tempos given.
4. For each **piece or passage**: name it, locate it by measure numbers,
   section, or rehearsal mark, and record the **start tempo** and the
   **clean tempo** (the fastest tempo it went right several times in a row).
   Write the note value in the cell when it is not the quarter (♩. = 60).
   When a hard spot inside the passage is clean only at a lower tempo
   ("then it was clean at half tempo"), give it its own row; do not let the
   section's working tempo stand as the hard bars' clean tempo. If they gave no measure numbers or
   tempos, name the passage in their words with the location marked `[?]`,
   skip the tempo table, and make a metronome check part of the next plan.
5. Write **problems** as precise symptoms: "the shift to 4th position in m. 12
   lands flat", "rushing the sixteenths after the rest", "left hand drops out at
   the key change". Then the **fix** they used (slow practice, rhythm
   variations, chunking, practicing the shift alone, starting from the end) and
   whether it worked.
6. Note **what went well**, briefly. It matters for motivation and for knowing
   what to leave alone.
7. Write the **next session plan**: which passages first, the tempo to start
   at (usually a little below today's clean tempo), and one focus. Mark a plan
   you propose, rather than one they stated, `(suggested)`.
8. Add **questions for the teacher**, if they have one.
9. If they give an earlier tempo ("last week was 54"), or keep earlier
   logs, put it in the Last time column so the trend sits beside today's.

## The format

```markdown
# Practice: [YYYY-MM-DD]
[Instrument] · [duration] · Goal: [bigger goal and date]

## Session goals
- [Specific, measurable goal]

## Warm-up
- [Exercise], [key], [tempo]

## Pieces
### [Piece], [movement or section]
| Passage | Last time | Start BPM | Clean BPM | Target |
|---|---|---|---|---|
| mm. [x-y] | [BPM] | [BPM] | [BPM] | [BPM] |

- **Problem:** [precise symptom]
  **Fix:** [what was tried] · **Worked:** [yes/partly/no]

## Went well
- [What went well]

## Next session
1. [Passage] from [BPM] · Focus: [one thing to fix]

## Ask my teacher
- [Question]
```

## Example

Input: "45 min piano. scales Bb and Eb hands together 80. chopin nocturne op
9 no 2, mm 13-16 the run, started 50 now clean at 66, goal is 88ish. kept
tensing my wrist, dropping wrist helped. recital dec 12. Bach invention 8
sounded good at 100."

```markdown
# Practice: 2026-10-27
Piano · 45 min · Goal: recital, 2026-12-12

## Session goals
- Nocturne run (mm. 13-16) toward about 88.

## Warm-up
- Scales, B♭ and E♭ ([?] major or minor), hands together, 80

## Pieces
### Chopin, Nocturne Op. 9 No. 2
| Passage | Last time | Start BPM | Clean BPM | Target |
|---|---|---|---|---|
| mm. 13-16 (run) | | 50 | 66 | about 88 |

- **Problem:** wrist tensing in the run.
  **Fix:** dropping the wrist · **Worked:** yes

## Went well
- Bach, Invention No. 8: sounded good at 100.

## Next session (suggested)
1. Nocturne mm. 13-16 from about 62 · Focus: wrist dropped
2. Invention No. 8 at 100 as a check

## Ask my teacher
- [?] Which note value is the 88 target for in the run?
```

## Pitfalls

- **No measure numbers.** "The hard part" cannot be found again next week.
- **Recording the fastest tempo instead of the clean one.** The log tracks
  what is reliable, not what happened once.
- **Problems without fixes.** Write what was tried, even when it failed.
- **A next plan that is "practice more".** Name the passage, the start tempo,
  and the focus.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A running practice note per piece, or per week, makes the tempo trend easy
to see before a lesson.
