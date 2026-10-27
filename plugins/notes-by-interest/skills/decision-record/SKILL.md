---
name: decision-record
description: Writes a decision record (an ADR is one kind) with context, options considered and their trade-offs, the decision, its consequences, and a status. Use when a person or team has made or is about to make a significant choice (a database, a framework, a vendor, or a policy), asks for an ADR, a decision log entry, or a design decision doc, or wants to record why something was decided so future readers do not relitigate it. To look up a past decision in existing notes, answer-from-notes fits better.
---

# Decision record

A decision record captures one significant decision: the situation that
forced it, the options on the table, what was chosen, and what follows from
the choice. Michael Nygard popularized the format for software, as the
architecture decision record (ADR), in a 2011 post, "Documenting Architecture
Decisions", with a short template of title, status, context, decision, and
consequences. Many teams add an explicit list of options considered, which
this skill does.

Decision records are short, numbered, and never rewritten once accepted. When
a decision changes, a new record supersedes the old one, so the history of why
things look the way they do stays readable. The record's real reader is the
person two years from now asking "why on earth did they do this?"

## When to use it

- A person or team is choosing between technologies, vendors, policies, or
  approaches.
- A decision was made in a meeting or chat thread and needs writing down.
- Someone keeps reopening a settled question and the reasons need recording.
- A decision is being reversed and the old record needs superseding.
- They ask for an ADR, a decision log entry, a design decision, or a "why we
  chose X" doc.

For a running log of a work session, `dev-log` fits better. For the scope and
goals of a whole project, use `project-brief`. For a persuasive case aimed at
winning people over, use `persuasive-argument`. To find a decision already
recorded in their notes, use `answer-from-notes`. To compare options side by
side first, use `charting-notes`.

## What to ask for

- **The decision**, or the question if it is not yet decided.
- **The context**: the problem, the constraints (time, budget, team skills,
  scale, compliance), and what triggered the decision now.
- **The options** they considered and what they know about each.
- **Status.** Default: "Proposed" if not yet decided, "Accepted" if it was.
- **Number and date**, if they keep a numbered series. Default: `ADR-[?]`
  and today's date.

If they pasted a thread or meeting notes, extract these and start; ask only
for what is missing.

## How to do it

1. Title the record with the decision, not the topic: "Use PostgreSQL for the
   events store", not "Database".
2. Write **context** as neutral facts: the forces at play, including the ones
   pulling against each other. No advocacy here. Someone who disagreed with
   the outcome should agree the context is fair.
3. List each **option** with its real trade-offs: pros and cons in the
   terms that matter for this context (operational cost, team familiarity,
   lock-in, performance at the stated scale, reversibility). Include "do
   nothing" or "keep the current approach" when it was a real option.
4. Write the **decision** in active voice and one or two sentences: "We will
   use X for Y." Then the main reasons, tied back to the context. If it is not
   decided yet, keep the status Proposed and write "We propose X" for the
   option the person favors; if the group is split, say so and name who
   decides, rather than picking a winner.
5. Write **consequences**: what becomes easier, what becomes harder, new work
   it creates, risks accepted, and what would make the team revisit it. Bad
   consequences belong here too; an ADR with only upsides is a sales pitch.
   While it is undecided, give the consequences per leading option.
6. Set the **status**: Proposed, Accepted, Rejected, Deprecated, or
   Superseded by ADR-[n]. If it supersedes an earlier record, link it.
7. Keep it to one decision. If the material holds two, write two records,
   or name the second at the end and offer to draft it next.
8. Use only facts and figures the person gave. If a trade-off depends on a
   number nobody measured, write `[?] not measured` rather than estimating.

## The format

```markdown
# ADR-[number]: [Decision as a short sentence]

- **Status:** [Proposed / Accepted / Rejected / Deprecated / Superseded by ADR-n]
- **Date:** [YYYY-MM-DD]
- **Deciders:** [names or team, if given]
- **Supersedes:** [ADR-n, if any]

## Context
[The problem, constraints, and forces, stated neutrally.]

## Options considered
### [Option A]
- **Pros:** [pro]; [pro]
- **Cons:** [con]; [con]

### [Option B]
- **Pros:** [pro]
- **Cons:** [con]

## Decision
We will [decision]. [Main reasons, tied to the context.]

## Consequences
- **Easier:** [what improves]
- **Harder:** [what gets worse or costs more]
- **Follow-up work:** [tasks this creates]
- **Revisit if:** [condition that would reopen this]
```

## Example

Input: "we picked Redis for the job queue over SQS. team already runs redis for
caching, SQS would mean new AWS setup and we're on hetzner. downside: redis
persistence, we could lose jobs on crash. decided by me and Priya last
thursday."

```markdown
# ADR-[?]: Use Redis for the background job queue

- **Status:** Accepted
- **Date:** [?] (decided last Thursday)
- **Deciders:** [?] (you) and Priya

## Context
Background jobs need a queue. The team already runs Redis for caching. The
infrastructure is hosted on Hetzner, not AWS.

## Options considered
### Redis
- **Pros:** already running and familiar to the team; no new provider
- **Cons:** jobs could be lost if Redis crashes, depending on persistence
  settings

### Amazon SQS
- **Pros:** fully managed, so there are no queue servers to run (added)
- **Cons:** needs new AWS setup alongside Hetzner

## Decision
We will use Redis for the job queue, because it is already in our stack and
SQS would add a second provider.

## Consequences
- **Easier:** no new provider to set up; the team already runs Redis.
- **Harder:** a Redis crash can lose queued jobs.
- **Follow-up work:** review Redis persistence settings for the queue.
- **Revisit if:** lost jobs become a real problem.
```

## Pitfalls

- **A topic as the title.** "Queue" says nothing. Name the decision.
- **Strawman options.** If the rejected options have no pros listed, the
  record will not survive the first skeptic. Give each its honest case: ask
  the person for it, or add widely known strengths marked `(added)` for them
  to confirm, rather than leaving `[?]` where a real advantage belongs.
- **Hiding the downsides.** Consequences that are all good make the record
  untrustworthy. The costs are what future readers most need.
- **Editing an accepted record.** Write a new ADR that supersedes it, and
  update only the old one's status line.
- **Inventing benchmarks.** Numbers nobody measured become facts once
  written. Mark them as unknown.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Many teams also keep ADRs in the repo (often `docs/adr/`), numbered in
order, so they travel with the code.
