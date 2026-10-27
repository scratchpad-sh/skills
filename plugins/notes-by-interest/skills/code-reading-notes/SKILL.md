---
name: code-reading-notes
description: Writes notes for learning an unfamiliar codebase, with entry points, a map of modules, data flow, key types, conventions, surprises, and questions for the team. Use when a developer joins a new project, is onboarding to a repo, has to change code they did not write, is reviewing an open-source project, or asks for help understanding how a codebase fits together.
---

# Code reading notes

Reading a new codebase is mapmaking. You start at the doors (where execution
begins), follow one real request or command through the building, and sketch
the rooms you pass. Notes made this way are worth keeping, because the
picture fades within days and the next person to join will need the same map.

These notes are not documentation of everything. They record what a reader
learned, in the order that made sense of it: where it starts, how the parts
connect, the few types everything else depends on, the house conventions,
the things that surprised you, and the questions only the team can answer.

## When to use it

- A developer is new to a team or repo and wants to get oriented.
- They need to change a part of a system they did not write.
- They are evaluating an open-source library before depending on it.
- They are reviewing a large pull request and need the surrounding context.
- They have a folder tree, some files, or rough notes and want a map.

For a running log of work done in a session, `dev-log` fits better. For a
hunt for one bug, use `bug-investigation-notes`. To write up why the code is
the way it is for the team, use `decision-record`.

## What to ask for

- **What you can see.** Access to the repo, a file tree, key files pasted, or
  the person's own notes. If you can read the repo, read it.
- **Their goal.** General orientation, or a specific change ("add a field to
  the invoice export"). Default: orientation, but a specific goal is better
  because it gives you a real path to trace.
- **Their background**, if it changes the level (new to the language, or
  only new to this repo). Default: an experienced developer new to the repo.

## How to do it

1. Start with what the project says about itself: README, build and package
   files, CI config, and the top-level folders. Note the language, framework,
   and how to run it and its tests.
2. Find the **entry points**: `main`, the server bootstrap, route tables, CLI
   command registration, job schedulers, event handlers. List each with its
   file path.
3. Trace **one real flow** end to end. Pick a representative action (a
   request, a command, a button press) and follow it through each file and
   function it touches, in order. One traced path teaches more than a dozen
   folder descriptions.
4. Write the **module map**: each important folder or package in one line,
   with what depends on what. Note layers if the code has them (handlers,
   services, data access) and where the code breaks its own layering.
5. Record the **key types**: the handful of data structures most functions
   take or return. Give the file, the important fields, and what they mean.
6. Note **conventions**: naming, error handling, how config and secrets are
   read, logging, test layout, how migrations are written. These are what a
   new contributor gets wrong in their first review.
7. Note **surprises**: code that does something other than its name says,
   dead code, two ways of doing the same thing, global state, magic values.
   State what you saw, not a verdict on the authors.
8. Write **questions for the team**: things the code cannot tell you (why a
   choice was made, whether something is still used, who owns a module).
9. For a **specific goal**, end with where the change goes: the files and
   functions to touch, the tests that cover them, and anything else that
   reads or writes the same data, each with its path. Search especially for
   code that filters or branches on the old values (a list of statuses, a
   switch), since a new value slips past those silently.
10. Cite every claim with a path (and line or function where useful) so it can
   be checked. If you did not read a file, do not describe its contents;
   write `[?] not read`. Keep the person's own hunches ("webhooks set the
   status, I think") as theirs, kept in their words with "I think" and
   `[?]`, until you see the code.

## The format

```markdown
# Code reading: [Repo or project]
[YYYY-MM-DD] · Goal: [orientation, or the specific change]

## Overview
- **Stack:** [language, framework, database, key libraries]
- **Run:** `[command]` · **Test:** `[command]`

## Entry points
- `[path]`: [what starts here]

## A flow traced: [action]
1. `[path:function]`: [what it does]
2. `[path:function]`: [next step]

## Module map
- `[folder]/`: [responsibility]. Depends on [modules].

## Key types
- **[Type]** (`[path]`): [what it represents]. Fields: [important fields].

## Conventions
- [Convention, with an example path]

## Surprises
- [What was unexpected] (`[path]`)

## Where the change goes (specific goal only)
- `[path:function]`: [what changes, and what else depends on it]

## Questions for the team
- [?] [Question]
```

## Example

Input: "new to our billing service. src/server.ts starts express. routes in
src/routes/. invoices.ts calls InvoiceService in src/services. uses knex,
db/migrations. weird: there's a utils/money.ts AND lib/currency.ts both doing
rounding"

```markdown
# Code reading: billing service
2026-10-27 · Goal: orientation

## Overview
- **Stack:** TypeScript, Express, Knex
- **Run:** [?] · **Test:** [?], usually in package.json scripts (added)

## Entry points
- `src/server.ts`: starts the Express server.
- `src/routes/`: route handlers.

## A flow traced: an invoice request
1. `src/routes/invoices.ts`: handles the route.
2. `src/services/` (InvoiceService): business logic.
3. Knex queries against the database. [?] exact file not traced yet.

## Module map
- `src/routes/`: HTTP handlers. Depend on services.
- `src/services/`: business logic.
- `db/migrations/`: Knex migrations.

## Surprises
- Two rounding helpers: `utils/money.ts` and `lib/currency.ts`.

## Questions for the team
- [?] Which rounding helper is current, and is the other one still used?
- [?] How do I run the service and tests locally?
```

## Pitfalls

- **Describing folders without a path through them.** A list of directories
  is not understanding. Trace one real flow first.
- **Guessing what a file does from its name.** Names lie. Read it, or mark it
  not read.
- **Judging the code.** "This is a mess" helps nobody. "Two helpers round
  money differently" is a finding the team can act on.
- **Writing everything down.** Stop at what the goal needs. A map of the
  whole country is useless for one trip.
- **Losing the questions.** The questions are often the most useful thing to
  bring to the first team conversation. Keep them as checkboxes.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A cleaned-up copy often makes a good start on the onboarding doc the repo
was missing.
