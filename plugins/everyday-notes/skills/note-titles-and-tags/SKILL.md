---
name: note-titles-and-tags
description: Suggests clear, searchable note titles and a small, consistent set of tags or folders, so a title says what is inside instead of "Untitled" or "Notes 3". Use when someone has badly named notes, wants help naming a note, wants a tagging system that stays small, or asks to rename or organize notes so they can find things again.
---

# Note titles and tags

A note is found in one of three ways: by searching for words, by browsing a
list of titles, or by following a tag or folder. A good title serves all
three. It says what is inside in the words the person would search for later,
so "Untitled", "Meeting", and "Notes 3" fail every time, and "Dentist: crown
options and costs, 2026-10" works years later.

Tags help only when there are few of them, used the same way every time. A
tag system with 300 tags, half used once, is a second mess on top of the
first. This skill keeps the set small and the rules written down.

## When to use it

- A notes app is full of "Untitled" and "New note" titles.
- Someone wants a better title for one note.
- Tags have multiplied (#work, #Work, #work-stuff) and need consolidating.
- Someone is setting up tags or folders for the first time.

For a whole folder structure built around projects and areas, `para-organizer`
fits better. For linking related notes together, use `connect-notes`. For
sorting an inbox of unprocessed captures, use `inbox-triage`.

## What to ask for

- **The notes**: titles plus enough content to know what each is about, or
  access to a connected notes app.
- **Their current tags or folders**, if any, so suggestions build on them.
- **Whether they prefer tags, folders, or both.** Default: folders for where
  a note lives, and a handful of tags for things that cut across folders
  (status, type).

## How to do it

1. **Read the content, not just the title.** The title must describe what is
   actually inside. If a note holds two unrelated things, propose splitting
   it: one row per new note, with "[old title] (split)" as its current
   title.
   If there is nothing to title from (a bare link, an empty note), write
   `[?]` and say what you need, such as the linked page's title.
2. **Write titles that answer "what is this?"** Lead with the subject the
   person would search for, then the specific angle, then a date or version
   only if it distinguishes the note. "Kyoto trip: day-by-day plan" beats
   "Trip plan" and "My amazing Japan adventure!".
3. **Use consistent patterns** for recurring note types so they sort
   together: `YYYY-MM-DD Weekday` for daily notes, `[Meeting name]:
   YYYY-MM-DD` for meetings, `1:1 [Manager] and [Report]` for running 1:1
   notes (one note per person, no date), `[Title]: [Author]` for source
   notes. Match any pattern they already use, and leave a title that
   already fits it alone.
4. **Keep titles short**: under about 60 characters, no filler words ("Notes
   on", "Some thoughts about"), and no characters that break file names
   (slashes, colons only where their app allows them).
5. **Design a small tag set.** Aim for no more than 10 to 20 tags in total,
   and only as many as the notes need now: five notes may need three. Good tags
   describe what a note is or its state (`#recipe`, `#reference`,
   `#waiting`), not its topic when a folder or the title already covers the
   topic. Pick one form (lowercase, singular, hyphens for spaces) and use it
   everywhere.
6. **Merge near-duplicates.** Map every variant (`#Work`, `#work-stuff`,
   `#job`) to one tag, and show the mapping.
7. **Assign tags and folders per note** in the renames table, using only the
   new set, so a yes leaves nothing to do by hand. Drop the Folder column
   if they do not use folders.
8. **Write the rules down** in a short "Tag guide" so future notes follow it.
9. **Propose, then wait.** Present the renames and tag changes as a table and
   change nothing until the person says yes. Apply only approved lines.

## The format

```markdown
# Titles and tags: proposal

## Renames
| Current title | Suggested title | Tags | Folder | Why |
| --- | --- | --- | --- | --- |
| [Old] | [New] | [#tag] | [Folder] | [What is inside] |

## Tag changes
| Current tags | Becomes |
| --- | --- |
| [#a, #A, #a-stuff] | [#a] |

## Tag guide
- **Form:** [lowercase, singular, hyphens]
- **[#tag]:** [when to use it]
- **Title patterns:** [type]: [pattern]
```

## Example

Input: five notes: "Untitled" (lasagna recipe from Aunt Rosa), "Notes 3"
(standup on 2026-10-20), "stuff" (list of books to read), "Meeting" (budget
meeting, 2026-10-22), "IDEAS!!!" (business ideas). Tags in use: #Recipes,
#recipe, #work, #Work-Meetings, #toread.

```markdown
# Titles and tags: proposal

## Renames
| Current title | Suggested title | Tags | Why |
| --- | --- | --- | --- |
| Untitled | Aunt Rosa's lasagna | #recipe | Searchable by dish and person |
| Notes 3 | Standup: 2026-10-20 | #work | Meeting pattern, sorts by date |
| stuff | Books to read | #to-read | Says what the list is |
| Meeting | Budget meeting: 2026-10-22 | #work | Meeting pattern |
| IDEAS!!! | Business ideas | none | Plain and searchable |

## Tag changes
| Current tags | Becomes |
| --- | --- |
| #Recipes, #recipe | #recipe |
| #work, #Work-Meetings | #work (meeting is clear from the title) |
| #toread | #to-read |

## Tag guide
- **Form:** lowercase, singular, hyphens between words.
- **#recipe:** any dish or drink to cook again.
- **#work:** anything for the job, meetings included.
- **#to-read:** lists and links to read later.
- **Title patterns:** meetings: [Name]: YYYY-MM-DD.
```

Nothing has been renamed yet. Reply "yes", or change any line.

## Pitfalls

- **Clever titles.** Search does not find puns. Use the plain words.
- **A tag for every topic.** That rebuilds the folder tree badly. Tags are for
  what cuts across.
- **Inconsistent forms.** `#Recipe` and `#recipe` split the same notes in two.
  Pick one form and state it.
- **Renaming without asking.** People navigate by the titles they remember.
  Always propose first.
- **New tags with no notes on them.** A tag guide without per-note tags
  leaves the retagging to the person. Fill the Tags column for every row.
- **Titles that drift from content.** Re-read the note; a title from an old
  draft misleads.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. In a connected notes app, the yes from step 9 comes before any rename,
retag, or move, and no note or tag is deleted without explicit confirmation.
