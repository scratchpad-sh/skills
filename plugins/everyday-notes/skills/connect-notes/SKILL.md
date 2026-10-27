---
name: connect-notes
description: Finds the links between a set of notes (shared ideas, contradictions, answered questions) and proposes links or a hub note with a reason for each. Use when someone wants to connect their notes, find related notes, build a map of content or an index note, see what their notes have in common, or spot where their notes disagree.
---

# Connect notes

A note on its own is a fact. Two notes linked with a reason are an idea. The
value of a large collection of notes is mostly in the connections: the
article that answers a question raised in a meeting, the two project notes
that assume different deadlines, the five scattered notes that are secretly
about the same problem.

A link is only useful if its reason is stated. "Related" tells the reader
nothing; "Both argue onboarding fails in week one, from different data"
tells them why to click. This skill finds the connections, writes the reason
for each, and proposes them before changing anything.

## When to use it

- Someone has a set of notes on a theme and wants to see how they fit.
- They want a hub, index, or map note for a topic.
- They suspect notes contradict each other.
- They want to find what an older note connects to before writing something
  new.

For building a linked note system from scratch, `zettelkasten` or
`evergreen-notes` fit better. For naming and tagging notes, use
`note-titles-and-tags`. For pulling a single draft out of linked notes, use
`notes-to-draft`. To get a direct answer to a question from their notes, use
`answer-from-notes`.

## What to ask for

- **The notes**: pasted, or a folder, tag, or search in a connected notes app.
  Default: if they name a topic, search for it and confirm the set first.
- **What they want out of it**: links between existing notes, a hub note, or
  a report of connections. Default: a short report plus a proposed hub note.
- **How they link**: wiki links (`[[Note title]]`), Markdown links, or plain
  "See:" lines. Default: match what their notes already use.

## How to do it

1. **Read every note in the set** and write a one-line gist for each. Work
   from the gists to see the shape, and go back to the notes for detail. If
   a search returns more than about thirty notes, show the list and ask
   which to keep before reading them all; say plainly if any note could not
   be read in full.
2. **Look for five kinds of connection**:
   - **Same idea**: two notes make the same point, maybe in different words.
   - **Builds on**: one note extends, applies, or gives an example of another.
   - **Answers**: one note raises a question another note answers.
   - **Contradicts**: two notes disagree on a fact, number, or conclusion.
   - **Same question**: notes circling a problem none of them solves.
3. **Keep only strong links.** A link must pass the test: would someone
   reading note A be glad to be sent to note B? Shared keywords are not
   enough. Five strong links beat thirty weak ones. Name any note left
   unlinked and why, so the person knows it was read, not missed.
4. **Write a reason for every link**, one line, specific to the two notes.
5. **Treat contradictions carefully.** Quote both sides with their notes'
   titles. Do not decide which is right; say what would settle it. List a
   contradiction only under Contradictions, not again under Links. Notes
   that say the same thing twice are a **Same idea** link; mention that they
   could be merged, but leave merging to the person.
6. **Propose a hub note** when four or more notes share a theme: a short
   intro, the notes grouped by role (background, arguments, examples, open
   questions), and one line per note. A note can sit in the hub as context
   without a link, but its line must not imply a connection no note makes.
7. **Name the gaps.** Questions the notes raise that no note answers are often
   the most useful output.
8. **Propose, then wait.** Show the links and hub note first. Add links to
   existing notes or create the hub only after a yes, and never rename, merge,
   or delete notes as part of connecting them unless asked and confirmed.

## The format

```markdown
# Connections: [Theme or set]

## Links
- [[Note A]] and [[Note B]]: **[Same idea / Builds on / Answers / Same
  question]**. [One-line reason]

## Contradictions
- [[Note A]] says "[claim]"; [[Note B]] says "[claim]". To settle: [what
  would decide it]

## Gaps
- [Question no note answers]

## Proposed hub note: [Theme]
[One or two sentences on what this cluster is about]

### [Group, such as Background]
- [[Note]]: [one line]

### Open questions
- [Question]

Not linked: [[Note]]: [why]
```

## Example

Input: four notes. "Churn interview, Bea" (users quit in week one, could not
find import). "Onboarding redesign brief" (goal: cut week-one churn, deadline
2026-12-01). "Q3 metrics" (week-one churn 38%). "Board prep" (says onboarding
ships 2026-12-15).

```markdown
# Connections: Onboarding and early churn

## Links
- [[Churn interview, Bea]] and [[Onboarding redesign brief]]: **Answers**.
  Bea's "could not find import" is a concrete cause for the churn the brief
  targets.
- [[Q3 metrics]] and [[Onboarding redesign brief]]: **Builds on**. The 38%
  week-one churn figure is the baseline the brief's goal implies.

## Contradictions
- [[Onboarding redesign brief]] says the deadline is 2026-12-01;
  [[Board prep]] says onboarding ships 2026-12-15. To settle: check with
  the project owner which date is current.

## Gaps
- Is import the main cause of week-one churn, or one user's experience?

## Proposed hub note: Onboarding and early churn
Notes on why new users leave in week one and the redesign meant to fix it.

### Evidence
- [[Q3 metrics]]: week-one churn at 38%.
- [[Churn interview, Bea]]: could not find import.

### Plan
- [[Onboarding redesign brief]]: goal and deadline.
- [[Board prep]]: what the board has been told.
```

## Pitfalls

- **Linking by keyword.** Two notes mentioning "budget" are not necessarily
  related. Link by idea.
- **Links without reasons.** A bare link is a guess for the reader. Always
  give the one line.
- **Settling contradictions yourself.** Show both and say what would decide.
- **Too many links.** A note with twenty links is as hard to use as one with
  none. Keep the strongest.
- **Changing notes without asking.** Adding links edits someone's notes.
  Propose first.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. In a connected notes app, the yes from step 8 comes before any change to
existing notes.
