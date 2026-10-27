---
name: lab-notebook
description: Writes a dated lab notebook entry with the aim, materials and settings, procedure as run with deviations, raw observations, results, and next steps. Use when a science student or researcher wants to write up an experiment, log a lab session, or clean up bench notes, keeps an electronic lab notebook, or wants notes to write a lab report from.
---

# Lab notebook entry

A lab notebook is the record of what was actually done, not what the protocol
said to do. Its first job is reproducibility: someone else (or the same person
in six months) should be able to repeat the work and understand why a result
came out the way it did. Its second job is honesty: the observation as seen,
written down at the time, before anyone knows which result is wanted.

So the entry keeps a few hard lines. Raw observations stay raw. Deviations
from the protocol are written down, because they explain most surprises later.
Interpretation lives in its own section, apart from the data.

## When to use it

- After a bench session, from scribbled notes, a voice memo, or photos of a
  paper notebook.
- A student writing up a teaching lab, or a researcher keeping an ELN.
- Logging a failed run, which matters as much as a good one.

For a formal write-up from many entries, `notes-to-draft` fits better. For a
running log of software work, use `dev-log`. For working through a stubborn
problem over days, use `problem-solving-journal`.

## What to ask for

- **The bench notes**, in whatever state they are in.
- **The protocol or method** they were following, or its name and version.
  Default: record "Protocol: [?]" and describe the procedure as run.
- **Date and project or experiment ID.** Default: today, and ask for the ID if
  their lab uses one.

## How to do it

1. Head the entry with the date, the experiment ID or title, the person, and
   the project. Link the previous entry in the series if they name it.
2. Write the **aim** in one or two sentences: the question or hypothesis, and
   what result would answer it.
3. List **materials and settings** precisely: reagent, supplier, catalog and
   lot number, concentration; organism or cell line and passage; instrument,
   model, and every setting used (temperature, speed, wavelength, gain,
   exposure, program name). Write units every time. Copy numbers exactly as
   given; never round or convert silently. A unit left off where the
   choice matters (a spin at "4000": rpm or × g?) is marked `[?]`.
4. Write the **procedure as run**, numbered, in the past tense. Reference the
   protocol for routine steps ("Steps 1-6 per SOP-12 v3") and write out only
   what was done differently or decided on the day.
5. Collect **deviations** in their own list as well as inline: what changed,
   why, and the likely effect. A spilled tube, a late incubation, a substituted
   reagent, a cold room at the wrong temperature.
6. Record **raw observations** as seen, with times when given: colors,
   readings, counts, gel bands, unexpected smells or precipitates. Use a table
   for repeated measurements (for a time series, a column per sample). Do not average or clean data here. When the
   notes mix a reading with a judgment ("cloudy, probably contaminated"), put
   the reading here and the judgment under interpretation, as the person's.
7. Note **data files**: file names, instrument export locations, image names,
   sample labels, and where samples are stored (freezer, box, position).
8. Write **results** as a first-pass summary of the data, then
   **interpretation** separately, with hedged wording that matches the
   evidence and the number of replicates (one flask per strain cannot
   separate a strain effect from flask variation). Never state a
   conclusion the observations do not support. For a calculation they ask
   for (doubling time, yield), show the formula, the inputs, and any choice
   you made, such as which points or window, so it can be checked.
9. End with **next steps**: what to repeat, change, or order, and open
   questions. List every `[?]` gap.

## The format

```markdown
# [YYYY-MM-DD] [Experiment ID]: [Short title]
Researcher: [name] · Project: [project] · Protocol: [name, version] · Previous: [ID]

## Aim
[Question or hypothesis, and what would answer it]

## Materials and settings
- [Reagent], [supplier] [cat. no.], lot [lot], [concentration]
- [Instrument model]: [setting = value, units]

## Procedure (as run)
1. [Step, past tense]

## Deviations
- [What changed] · [why] · [possible effect]

## Raw observations
| Time | Sample | Observation |
|---|---|---|

## Data and samples
- [File name] · [location]
- [Sample] · [storage location]

## Results
- [What the data show]

## Interpretation
- [Hedged reading of the results]

## Next steps
- [ ] [Action]

## Gaps
- [?] [Missing detail]
```

## Example

Input: "oct 27, PCR for gene X in 6 samples + neg ctrl. Taq master mix lot
4471. annealing 58 instead of 60 bc last time no bands. gel 1.5%, 100V 40 min.
bands ~500bp in 1,2,4,5,6. sample 3 nothing. neg ctrl clean. image gel_1027.tif"

```markdown
# 2026-10-27 [?]: PCR for gene X, samples 1-6
Researcher: [?] · Project: [?] · Protocol: [?]

## Aim
Amplify gene X from six samples and check product size on a gel.

## Materials and settings
- Taq master mix, lot 4471 ([?] supplier)
- Thermocycler: annealing 58 °C ([?] other steps and cycle count)
- Agarose gel 1.5%, run at 100 V for 40 min

## Procedure (as run)
1. Set up PCR for samples 1-6 and a negative control.
2. Ran gel at 100 V, 40 min, and imaged.

## Deviations
- Annealing at 58 °C, not the protocol's 60 °C. Reason: no bands in the
  last run. May increase nonspecific products (added).

## Raw observations
| Lane | Result |
|---|---|
| 1, 2, 4, 5, 6 | Band at about 500 bp |
| 3 | No band |
| Neg. control | Clean |

## Data and samples
- gel_1027.tif · [?] location

## Results
- Product of about 500 bp in samples 1, 2, 4, 5, and 6; none in sample 3;
  negative control clean.

## Interpretation
- Annealing at 58 °C gave product where the last run gave none. [?] Why
  sample 3 failed is not known.

## Next steps
- [ ] Repeat sample 3 and check its template quality.

## Gaps
- [?] Experiment ID, researcher, project, protocol, supplier, cycling
  program, ladder, expected product size, and where the gel image is saved.
```

## Pitfalls

- **Missing lot numbers and settings.** These are what explain a batch effect
  months later. Ask, or mark `[?]`.
- **Interpretation that outruns the data.** "No band" is an observation; "the
  gene is absent" is not supported by one gel.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A title starting with the date and experiment ID keeps entries in run
order, and where an institution requires a bound or signed notebook, this entry
supplements it.
