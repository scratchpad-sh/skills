---
name: client-call-notes
description: Writes up a client or sales call with the client's goals and pains in their words, budget, timeline, scope, objections, next steps, and follow-up email points. Use when someone who sells a product or service just got off a discovery call, sales call, or client check-in, or wants notes they can turn into a proposal or follow-up.
---

# Client call notes

A client call produces two things worth keeping: what the client wants, in
the words they used, and what each side promised next. The first is what a
good proposal is built from (clients say yes to their own words read back to
them). The second is what keeps a deal or project from drifting.

These notes are written for the freelancer or small business owner, not for
the client. They can be frank about uncertainty ("budget unclear") while the
follow-up email points stay polished enough to send.

## When to use it

- Right after a discovery or sales call with a prospect.
- After a check-in or kickoff with an existing client.
- Before writing a proposal, quote, or statement of work.
- When someone needs the follow-up email points from a call.

For an internal team meeting, use `meeting-notes`. To write the follow-up email
itself in full, use `email-drafter` once these notes exist. For a project that
has been won and is starting, `project-brief` gives it a home note. For a
research interview with no sale in view, use `interview-notes`.

## What to ask for

- **The material**: their notes, a transcript, or a description of the call.
- **Who the client is** and whether this is a new prospect or an existing
  client. Default: infer from the material.
- **What they sell**, if it is not clear, so scope can be read against it.

If they gave you the material, start.

## How to do it

1. **Goals and pains in their words.** Pull the client's own phrases for what
   they want and what hurts now, in quotation marks when the material has
   them. "Our site looks like it's from 2012" is more useful in a proposal
   than "wants a modern redesign". Only exact words go in quotation marks; a
   paraphrase goes without them, so a proposal never quotes the client saying
   something they did not say. When more than one person spoke for the
   client, name who said each, and keep disagreements as separate lines.
2. **Why now.** Note any trigger the client gave (a launch, a new hire, a
   competitor, a deadline). It sets the real timeline and urgency.
3. **Budget as stated.** Record the exact figure or range and how it was said
   ("about 10k", "whatever it takes", "need to check with my partner"). If
   budget was not discussed, write "Not discussed". Never estimate one.
4. **Timeline as stated.** Same rule: their words and any hard date.
5. **Decision process.** Who decides, who else has a say, and what the client
   said about how they will choose. Mark unknowns.
6. **Scope.** Split into what is clearly in, what was mentioned as maybe, and
   what is out. Scope creep starts in the "maybe" column, so keep it visible.
7. **Objections and concerns.** Each concern, who raised it, and how it was
   answered on the call, or "Not answered" or "Partly answered" if it hung.
8. **Next steps.** Both sides' commitments with dates as stated, including the
   client's ("will send brand files"): waiting on a client's files is the most
   common reason projects stall.
9. **Follow-up email points.** Three to six bullets: thanks, what you heard
   (their goals in their words), what was agreed, what you will send and when,
   and what you need from them. Write them as plain statements ready to draft
   from. Promise nothing not agreed on the call; mark a new offer "(suggested)".
10. **Your read.** One short private section for fit and red flags, kept apart
    from the facts and labeled as the person's view.

## The format

```markdown
# Call: [Client], [Purpose]
[YYYY-MM-DD] · [Who was on the call] · [New prospect / Existing client]

## Goals (their words)
- "[Their exact words]", or [a close paraphrase, no quotation marks]

## Pains (their words)
- "[Their exact words]", or [a close paraphrase, no quotation marks]

## Why now
- [Trigger or deadline, or Not discussed]

## Budget
- [As stated, or Not discussed]

## Timeline
- [As stated, or Not discussed]

## Decision
- [Who decides, how, by when, or [?]]

## Scope
- **In:** [Item]
- **Maybe:** [Item]
- **Out:** [Item]

## Objections
- [Concern]: [how it was answered, or Not answered]

## Next steps
- [ ] [Verb-first task]: **[Owner or Unassigned]**, due [date or No date]

## Follow-up email points
- [Point]

## My read (private)
- [Fit, red flags, gut feeling]
```

## Example

Input: "call w/ Marta, Fernwood Bakery. wants online ordering for pickup,
'we lose orders every saturday because the phone rings off the hook'. maybe
delivery later. budget 'around 5 to 8k'. wants it before holiday season.
worried about fees from ordering platforms. I said custom avoids per-order
fees. her husband co-owns, he'll decide with her. I send proposal by thurs.
she'll send menu."

```markdown
# Call: Fernwood Bakery, Online ordering
2026-10-27 · Marta, me · New prospect

## Goals (their words)
- Online ordering for pickup.

## Pains (their words)
- "We lose orders every Saturday because the phone rings off the hook."

## Why now
- Wants it live before the holiday season.

## Budget
- "Around 5 to 8k"

## Timeline
- Before the holiday season. Exact date [?].

## Decision
- Marta and her husband (co-owner) decide together.

## Scope
- **In:** Online ordering for pickup.
- **Maybe:** Delivery, later.
- **Out:** Nothing stated.

## Objections
- Fees from ordering platforms: answered that a custom build avoids
  per-order fees.

## Next steps
- [ ] Send proposal: **Me**, due Thursday 2026-10-29
- [ ] Send menu: **Marta**, No date

## Follow-up email points
- Thanks for the time today.
- Heard: Saturday phone orders are being lost; pickup ordering is the fix.
- Proposal coming by Thursday for pickup ordering; delivery noted for later.
- Need: the current menu.

## My read (private)
- [?] Not given. Add your own view of fit and red flags.
```

## Pitfalls

- **Translating their words into yours.** Keep the client's phrasing; it is
  the most persuasive thing you can put in a proposal.
- **Losing the "maybe" items.** Unwritten maybes become assumed inclusions.
- **Mixing your read with the facts.** Keep gut feeling in its own section so
  the notes stay trustworthy if shared.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A folder per client keeps every call, quote, and brief for that client
together.
