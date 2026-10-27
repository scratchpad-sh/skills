---
name: para-organizer
description: Sorts notes and folders into Projects, Areas, Resources, and Archives, and proposes a move plan they approve before anything changes. Use when someone mentions PARA or a second brain, wants to reorganize a messy notes app, has too many folders, does not know where a note belongs, or wants a folder structure based on what they are working on.
---

# PARA organizer

PARA is a way of organizing notes by how actionable they are, not by subject.
Tiago Forte developed it. Everything goes into one of four places:

- **Projects**: short efforts with a goal and an end ("Launch the website by
  December", "Plan Lisbon trip").
- **Areas**: ongoing responsibilities with a standard to keep but no end
  ("Health", "Finances", "Team").
- **Resources**: topics of interest that might be useful someday
  ("Typography", "Sourdough").
- **Archives**: anything inactive from the other three.

It works because the question "where does this go?" becomes "what am I using
it for?", which has a clearer answer than "what is it about?". Active work
stays small and in front; everything else stays findable without clutter.

## When to use it

- Someone's notes app has grown into dozens of folders with no logic.
- They do not know where a new note should go.
- They are setting up a new notes app and want a structure.
- A project just ended and they want to tidy up after it.
- They mention PARA by name.

For cleaning up the content of notes (duplicates, titles, merges), use
`tidy-up-notes`. For processing an inbox of new notes, use `inbox-triage`.
For titles and tags, use `note-titles-and-tags`.

## What to ask for

- **The current structure**: a list of folders and note titles, or access
  through a connected notes tool (list them yourself).
- **Their active projects**, in one line each. This is the one thing you
  cannot infer, and it decides most of the sort.
- **Whether to move things or only propose.** Default: propose. Never move,
  rename, or archive anything until the person approves the plan.

## How to do it

1. List everything you can see: folders, sub-folders, and loose notes.
2. **Projects first.** Match notes to the active projects the person named.
   A project must have an outcome and an end; "Marketing" is not a project,
   "Spring campaign" is. If something sounds like a project but has no end,
   ask, or put it in Areas. An active project with no folder yet gets a new
   one in the plan.
3. **Areas next.** Group ongoing responsibilities. Areas are usually few
   (five to fifteen) and stable. Name them as the responsibility ("Home",
   "Health"), not as a task.
4. **Resources** take the interest topics that are not tied to a current
   project or area. Keep them broad enough that each holds several notes.
5. **Archives** take finished projects, areas they no longer hold, and
   resources they have lost interest in. Archiving is not deleting; say so,
   because people resist it otherwise.
6. When a note fits two places, choose **the most actionable**: Project
   beats Area beats Resource. Note the choice so they can override it.
7. **Catch-all folders** (Ideas, Misc, Old stuff) usually hold several
   kinds of note. Moving one whole is fine as a first pass, but flag it to
   be sorted note by note later. Leave a large default or inbox folder where
   it is and plan to sort it in batches, starting with the active projects.
8. Keep depth shallow: the four top folders, one level of folders inside
   them, and notes. Deeper nesting is where things get lost.
9. Write the **move plan** as a table: item, from, to, and a short reason.
   Group it by destination so it can be checked quickly. Flag anything you
   are unsure of with `[?]`.
10. After approval, if a notes tool is connected, make the moves in small
    batches and report what moved. Never delete.

## The format

```markdown
# PARA move plan
[YYYY-MM-DD]

## Proposed structure
- **1 Projects**: [Project], [Project]
- **2 Areas**: [Area], [Area]
- **3 Resources**: [Topic], [Topic]
- **4 Archives**: [Item], [Item]

## Moves
| Item | From | To | Why |
| --- | --- | --- | --- |
| [Folder or note] | [Current place] | [Projects/Name] | [reason] |

## Needs your call
- [?] [Item]: [the question]

## After this
- [One habit to keep it working, such as archiving a project the day it ends]
```

## Example

Input: folders "Work", "Website redesign", "Recipes", "Taxes 2025",
"Running", "Ideas", "Old stuff". Active projects: website redesign (due
December), half marathon in March.

```markdown
# PARA move plan
2026-10-27

## Proposed structure
- **1 Projects**: Website redesign, Half marathon (March)
- **2 Areas**: Work, Finances
- **3 Resources**: Recipes, Ideas
- **4 Archives**: Old stuff

## Moves
| Item | From | To | Why |
| --- | --- | --- | --- |
| Website redesign | Top level | Projects/Website redesign | Active, ends in December |
| Running | Top level | Projects/Half marathon | Training has a race date |
| Taxes 2025 | Top level | Areas/Finances | Ongoing responsibility; its notes move in, no sub-folder |
| Work | Top level | Areas/Work | Ongoing, no end date |
| Recipes | Top level | Resources/Recipes | Reference, not tied to a project |
| Ideas | Top level | Resources/Ideas | Interest topics |
| Old stuff | Top level | Archives/Old stuff | Inactive |

## Needs your call
- [?] Running: after the race, should general running notes go to Areas/Health?
- [?] Taxes 2025: is the return filed? If so, archive it.
- [?] Ideas: a catch-all; sort its notes one by one in a later pass?

## After this
- When the website launches, move its folder to Archives the same day.
```

## Pitfalls

- **Sorting by subject.** "Marketing" sitting in Resources while a live
  campaign hides inside it defeats the method. Sort by use.
- **Calling an area a project.** A project ends. If it never ends, it is an
  area, and it will sit in Projects forever otherwise.
- **Moving without approval.** Reorganizing someone's notes is hard to undo.
  Propose first, move only after a yes.
- **Deep nesting.** Four levels down is where notes go to be forgotten. Keep
  it to two.
- **Fear of archiving.** Remind the person that archives are searchable.
  Moving something there is not losing it.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Save the move plan itself before making any moves, so there is a record
of where everything was.
