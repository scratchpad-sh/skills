---
name: dev-log
description: Writes a developer's working log for a coding session or project, with what was tried, what happened, commands run, decisions made, and where to pick up next. Use when a developer wants to log a session, keep an engineering journal, record what they did today in code, leave themselves a note for tomorrow, or turn terminal history, commit messages, and scattered notes into a log.
---

# Dev log

A dev log is a running, dated record of a coding session: what you set out to
do, what you tried, what the machine said back, what you decided, and where
you stopped. It is written for one reader, yourself next week, who has lost
all the context that felt obvious today.

The value is in the parts nobody writes down: the approach that did not work
and why, the exact command that finally fixed the build, the error message
that cost an hour. Commit messages say what changed. The log says how you got
there and what to do next.

## When to use it

- At the end of a session, to capture where things stand before stopping.
- During a session, as a scratch log of commands and results.
- When resuming after a break, to rebuild a "pick up here" from history.
- On a side project worked on in short bursts, where context is lost between
  sessions.
- When someone pastes shell history, commit logs, or rough notes and wants
  them made readable.

For a structured hunt for one bug, `bug-investigation-notes` fits better. For
recording a design choice so a team can revisit it, use `decision-record`.
For passing work to someone else, use `handoff-notes`. For a log of anything
that is not code, `daily-note` is the general version.

## What to ask for

- **The raw material.** Rough notes, terminal history, commit messages, a
  chat transcript, or a description from memory.
- **The project and goal** for the session. Default: infer from the material.
- **Where they stopped**, if it is not clear. This matters most; ask if you
  cannot tell.

Do not ask for anything else. A short log today beats a perfect one never.

## How to do it

1. Open with the **goal** for the session in one line, and the branch or
   version if given.
2. Write **what I did** as a chronological list of attempts. Each attempt
   gets what was tried and what happened. When the material is shell history
   with no output, write "result not recorded" rather than guessing one, and
   ask about the attempts that look important. Keep failures; they are the most
   valuable lines in the log. "Tried bumping the timeout to 30s: still fails,
   so it is not a timeout" saves the next person (you) from trying it again.
3. Put **commands** in fenced code blocks exactly as given, with the key line
   of output when it mattered. From a long history, keep the commands that
   changed something or produced a result worth finding again; drop `cd`,
   `ls`, and repeated runs of the same command. Never reconstruct a command
   or an error message from memory; if the person paraphrased one, mark it
   "(paraphrased)".
4. Quote **error messages** verbatim and in full when they were given. A
   searchable error string is worth more than any summary of it.
5. Record **decisions** with a one-line reason: "Kept the old parser for now:
   the new one breaks the CSV import and that is out of scope today." If a
   decision is big enough to need options and trade-offs, suggest a
   `decision-record`.
6. List **links** that helped: issues, docs, Stack Overflow answers, PRs.
   Only links the person gave.
7. End with **next steps**: the first concrete action for the next session,
   written so it can be started cold ("Run `npm test -- auth` and read the
   third failure"), plus open questions and anything left in a half-done state
   (uncommitted changes, a stash, a temporary hack to undo).
8. Redact secrets. If the material includes an API key, password, or token,
   replace it with `[redacted]` and say so; if it looks like a real
   credential, suggest rotating it, since it is still in their history.
9. Keep the person's guesses as guesses: "you think the health check is the
   cause, not confirmed". A guess written as a finding sends next week's
   session down the wrong path.

## The format

````markdown
# Dev log: [Project], [YYYY-MM-DD]
**Goal:** [one line] · **Branch:** [branch, if given]

## What I did
1. [Attempt]: [result]
2. [Attempt]: [result]

## Commands
```sh
[command exactly as run]
# [key output line]
```

## Errors
```
[error message verbatim]
```

## Decisions
- [Decision]: [reason]

## Links
- [URL]: [what it helped with]

## State
- [Uncommitted changes, stashes, temporary hacks, flags left on]

## Next steps
- [ ] [First concrete action for next session]
- [ ] [Next action]
- [?] [Open question]
````

Leave out any section with nothing in it. When the template's inner code
fences would close the outer one, use four backticks for the outer fence in
the output.

## Example

Input: "trying to get the image upload working on staging. 413 errors. bumped
client_max_body_size in nginx to 20m, reloaded, still 413. turns out the load
balancer has its own 10mb limit. didn't change it yet, need ops access. left a
console.log in upload.ts"

````markdown
# Dev log: image upload, 2026-10-27
**Goal:** get image upload working on staging

## What I did
1. Uploads on staging return 413.
2. Raised `client_max_body_size` to `20m` in nginx and reloaded: still 413,
   so nginx was not the only limit.
3. Found the load balancer has its own 10 MB limit. Not changed yet.

## Errors
```
413 (paraphrased; full response not captured)
```

## State
- A `console.log` left in `upload.ts`. Remove before committing.

## Next steps
- [ ] Ask ops for access to raise the load balancer's body limit.
- [ ] Retest a file over 10 MB once it is raised.
- [?] Should the app reject large files before upload instead?
````

## Pitfalls

- **Only recording what worked.** The dead ends are the point. Keep them,
  with why they failed.
- **Paraphrased errors.** "Some permission error" cannot be searched. Quote
  the exact text or say it was not captured.
- **A vague "next".** "Keep working on uploads" restarts nothing. Write the
  first command or file to open.
- **Forgetting the mess left behind.** Debug prints, disabled tests, and
  stashes are easy to ship by accident. List them under State.
- **Secrets in the log.** Logs get pasted into tickets and chats. Redact.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. For a project worked on over many sessions, appending each day's log to
one running note per project keeps the history in one place.
