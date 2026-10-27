---
name: project-brief
description: Writes a one-page home note for a project covering why, goal and definition of done, scope and non-goals, milestones, people, risks, and links. Use when someone is starting a project, needs a project one-pager, kickoff doc, or charter, or has a project scattered across messages and wants it in one place. For notes from the kickoff meeting itself, meeting-notes fits better.
---

# Project brief

Every project needs one note that answers the basic questions: why are we
doing this, what does done look like, what are we not doing, who is involved,
and where is everything? Without it, those answers live in people's heads and
drift apart. With it, a new collaborator can get oriented in five minutes and
an argument about scope can be settled by pointing at a line.

The two sections that do the most work are the **definition of done** and the
**non-goals**. A project without a finish line never finishes, and a project
without stated non-goals quietly grows until it misses its date.

Keep it to one page. It is a home note that links out to the detail, not the
detail itself.

## When to use it

- Starting a project at work, at home, or for a client.
- A project already exists but its purpose and scope are fuzzy.
- Someone new is joining and needs to get oriented.
- A project is spread across emails, chats, and docs and needs one home.

For notes from a single kickoff meeting, use `meeting-notes`. To record why a
specific choice was made, use `decision-record`. To pass a project to someone
else mid-flight, use `handoff-notes`. For personal folder structure around
projects, `para-organizer` fits better.

## What to ask for

- **What the project is** and why it is happening now.
- **What done looks like**, if they know. If not, help them define it; this is
  the most important question.
- **Material** they already have: messages, a plan, a deadline, a list of
  people. Default: build from what they describe and mark gaps `[?]`.

Ask at most three questions, then draft with gaps marked.

## How to do it

1. **Why.** Two or three sentences on the problem or opportunity and why now.
   If the "why" is weak, say so gently; it is the best moment to find out.
2. **Goal.** One sentence: the outcome, not the activity. "Customers can pay
   by invoice" rather than "Build invoicing".
3. **Definition of done.** Three to five observable conditions that mean the
   project is finished. Each should be checkable by someone other than the
   owner. Add a measure of success only if the person gives one; do not
   invent targets. If they have no definition of done, propose two or three
   conditions marked "(proposed)" for them to accept or change.
4. **Scope and non-goals.** In scope: the main pieces of work. Non-goals:
   things a reasonable person might expect to be included that are not. Good
   non-goals prevent real arguments ("Not redesigning the checkout page").
5. **Milestones.** Three to six checkpoints with dates as given, in date
   order. Mark unknown dates `[?]`; a month with no year that has already
   passed this year belongs to next year. A milestone is a result ("Pilot customer invoiced"), not a
   phase name.
6. **People.** Owner (one person), contributors, who decides when there is
   disagreement, and who needs to be kept informed. Only names the person
   gives. If they name two owners, list both and flag it as an open
   question; do not pick one for them.
7. **Risks.** The three to five things most likely to sink or delay it, each
   with a mitigation or "None yet". Include dependencies on other teams or
   people.
8. **Links.** Where the real work lives: documents, boards, folders, chats.
9. **Status line** at the top so the note doubles as a dashboard: status,
   last updated, and the earliest open milestone as **Next**.
10. **Constraints** the person states (budget, a fixed date, tools that must
   stay) go in Scope under **Limits**, not in Links.

## The format

```markdown
# Project: [Name]
**Status:** [Not started / On track / At risk / Done] · **Next:** [Milestone] · Updated [YYYY-MM-DD]

## Why
[Two or three sentences]

## Goal
[One sentence, an outcome]

## Definition of done
- [ ] [Observable condition]

## Scope
- **In:** [Piece of work]
- **Not doing:** [Non-goal]
- **Limits:** [Budget, fixed date, or tool, only if given]

## Milestones
| Milestone | Date |
| --- | --- |
| [Result] | [YYYY-MM-DD or [?]] |

## People
- **Owner:** [Name]
- **Contributors:** [Names]
- **Decides:** [Name]
- **Keep informed:** [Names]

## Risks
- [Risk]: [mitigation, or None yet]

## Links
- [Name]: [link]
```

## Example

Input: "project: move our family photos off old laptops into one shared
backup before the Christmas visit. I'll run it, my brother Ken has the
scans. done = everything in one place, deduped, backed up twice. not
organizing into albums yet. risk: Dad's laptop barely turns on."

```markdown
# Project: Family photo backup
**Status:** Not started [?] · **Next:** All photos backed up, before Christmas · Updated 2026-10-27

## Why
Family photos are spread across old laptops, and Dad's barely turns on.
The aim is one shared, backed-up copy before the Christmas visit.

## Goal
All family photos are in one shared place and safely backed up.

## Definition of done
- [ ] Every photo from the old laptops and Ken's scans is in one place
- [ ] Duplicates removed
- [ ] Backed up in two places

## Scope
- **In:** Copying, deduplicating, and backing up.
- **Not doing:** Organizing into albums (later).

## Milestones
| Milestone | Date |
| --- | --- |
| Everything in one place, deduped, backed up twice | Before the Christmas visit, [?] exact date |

## People
- **Owner:** Me
- **Contributors:** Ken (has the scans)

## Risks
- Dad's laptop barely turns on: None yet. Copy it first. (suggested)

## Links
- [?] Where will the shared backup live?
```

## Pitfalls

- **No definition of done.** Then the project ends when people get bored.
- **No non-goals.** Every unstated assumption becomes scope creep.
- **Two owners.** Shared ownership means nobody owns it. Flag it so the
  person can choose one.
- **Detail creep.** If the brief passes a page, move detail to linked notes.
- **Never updated.** Change the status line whenever a milestone moves.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Pinning the brief at the top of the project's folder makes it the first
thing anyone sees.
