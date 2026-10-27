---
name: outline-notes
description: Turns a lecture, chapter, document, or talk into an outline, with main topics as headings and supporting points indented beneath them by level of detail. Use when someone asks for outline notes or a structured summary, has a well-organized lecture or textbook chapter, or wants messy notes reorganized into a clear hierarchy.
---

# Outline notes

The outline method arranges notes by level: main topics at the top, the
points that support each topic indented under it, and details or examples
indented again under those. The indentation does the work of showing which
idea belongs to which, so a reader can see the shape of a whole lecture in a
glance and skim down only where they need detail.

It is the most common note-taking method for a reason: it matches how most
lectures, textbooks, and reports are already built. It is less suited to
material that jumps around or is mostly about relationships between ideas.
In Markdown, headings carry the top levels and nested bullets carry the rest.

## When to use it

- A lecture or chapter follows a clear structure (sections, subsections).
- Someone has messy notes and wants them reorganized into a hierarchy.
- They need a skimmable version of a long document, report, or manual.
- They ask for an outline or "outline notes".

For fast talks with no visible structure, `sentence-notes` captures first
and sorts later. For material about how ideas cause or affect each other,
`flow-notes` or `mind-map-notes` fit better. To outline a piece of writing
before drafting it, use `outline-first`. For comparing several things on
the same points, use `charting-notes`. For grouping points by theme rather
than hierarchy, use `boxing-notes`.

## What to ask for

- **The source**: notes, a transcript, slides, a chapter, or a document.
- **How deep to go.** Default: three levels (heading, point, detail). Go to a
  fourth level only for technical material that needs it.
- **Whether to keep the source's order.** Default: yes, unless the source is
  disorganized, in which case regroup by topic and say so.

## How to do it

1. Read the whole source first and find its real structure. A good lecture
   usually has three to seven main topics. Textbook headings are a strong
   hint, but check that each one is a real topic and not a single example.
2. Make the main topics `##` headings. Phrase them as the topic in a few
   words, not as a full sentence.
3. Under each, list the supporting points as top-level bullets. Each bullet
   is a short phrase or one sentence that carries a single point.
4. Indent details, examples, figures, and dates under the point they support.
   Ask of each indented line: "is this part of the line above?" If not, it
   belongs at a different level.
5. Keep **parallel structure**: siblings at the same level should be the same
   kind of thing (all causes, all steps, all examples). Mixing a cause, a
   date, and an opinion as siblings hides the logic.
6. Keep definitions, formulas, names, and numbers exactly as the source gave
   them. Bold key terms the first time they appear. When the source gives
   two figures for one thing ("36-38 is the old number, about 30-32 now"),
   keep both as siblings, with whose figure each is.
7. **Asides and hints.** A tangent (a story, a "look it up") goes under a
   short "Aside" heading near the end, so it does not break the hierarchy.
   An exam hint ("know where each stage happens") goes at the top. When
   every topic carries the same attributes (location, inputs, outputs),
   add a small table after the outline that lines them up.
8. When a bullet has only one indented sub-point, fold it into the line
   above. A level with one child is usually a sign the hierarchy is wrong. A
   `##` heading may still hold a single bullet when the source treats it as a
   topic of its own (a trigger event, a one-point conclusion).
9. End with a short list of `[?]` items for gaps or unclear points.

## The format

```markdown
# [Course or source]: [Topic]
[YYYY-MM-DD] · [Lecture, chapter, or document]

## [Main topic 1]
- [Supporting point]
  - [Detail or example]
  - [Detail or example]
- [Supporting point]

## [Main topic 2]
- [Supporting point]
  - [Detail]
    - [Finer detail, only if needed]

## Open questions
- [?] [Anything unclear or missing]
```

## Example

Input: "hist 210 week 3, causes of WWI. long term: militarism (arms race,
esp naval britain/germany), alliances (triple entente, triple alliance),
imperialism, nationalism (balkans, slav nationalism). short term trigger:
assassination franz ferdinand sarajevo june 1914. then july crisis,
ultimatum to serbia, mobilizations"

```markdown
# HIST 210: Causes of the First World War
2026-10-27 · Week 3 lecture

## Long-term causes
- **Militarism**: arms race, especially the naval race between Britain and Germany
- **Alliances**
  - Triple Entente
  - Triple Alliance
- **Imperialism** [?] no details given in lecture
- **Nationalism**
  - The Balkans
  - Slav nationalism

## The trigger
- Assassination of Franz Ferdinand, Sarajevo, June 1914

## The July Crisis
- Ultimatum to Serbia
- Mobilizations followed

## Open questions
- [?] What was said about imperialism? Check the slides.
- [?] Which countries mobilized, and in what order?
```

## Pitfalls

- **Too many levels.** Five levels of indentation is hard to read anywhere.
  If you need that many, split the topic into two headings.
- **Everything at the top level.** A flat list of thirty bullets is not an
  outline. Find the groups.
- **Full paragraphs in bullets.** Each line holds one point. Break long ones
  up or move the explanation to an indented line.
- **Mismatched siblings.** If one sibling is a cause and the next is an
  example of a different cause, the hierarchy is lying about the logic.
- **Copying headings blindly.** Some source headings are decoration. Outline
  the content, not the layout.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app.
