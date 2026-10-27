---
name: persuasive-argument
description: Builds a persuasive piece from the audience's current belief to a clear claim, with the writer's best evidence, a fair counterargument, and a specific ask. Use when someone needs to "convince", "make the case for", "pitch", or "write a proposal", or is drafting an op-ed, a request to a manager, a letter to a council, or a case for a decision.
---

# Persuasive argument

Persuasion starts with the audience, not the argument. People change their
minds from where they currently stand, for reasons that matter to them, and
almost never because they were told they are wrong. So a persuasive piece is
built backward: first, what does this audience believe now and why; then, what
is the smallest honest step from there to the claim; then, which reasons would
move this audience in particular. The reasons that convinced the writer may not
be the ones that convince the reader.

The other half is fairness. An audience that sees its own best objection stated
well, and answered, trusts the writer more. An audience that sees a straw man
stops reading. This skill builds the argument from the person's own reasons and
evidence. It does not invent support, and it says plainly when the evidence is
thin, because a persuasive piece that overreaches is the easiest kind to
dismiss.

## When to use it

- A proposal or pitch to a manager, board, client, or funder.
- An op-ed or letter to an editor, council, or school board.
- An internal case for a decision, a change, or a budget.
- A cover letter or application statement that argues for the writer.
- A fundraising or advocacy appeal.

For an academic essay with a thesis and sources, use `essay-structure`. For a
record of a decision already made, use `decision-record`. For a short ask by
email, `email-drafter` is enough.

## What to ask for

- **The claim**: what the person wants the audience to believe or do.
- **The audience**: who exactly, what they believe now, what they care about
  (money, safety, reputation, fairness, ease), and what they are worried about.
  If the person does not know what the audience believes, ask; it changes
  everything else.
- **Their reasons and evidence**: facts, numbers, examples, experience,
  sources.
- **The setting and length.** Default: a one-page proposal or a 700-word op-ed.

## How to do it

1. **State the audience's current position fairly.** One or two sentences, as
   the audience would put it. "Parking is already hard downtown; removing
   spaces for bike lanes will hurt shops." If you cannot state it in a way
   they would agree with, you do not yet know who you are persuading.
2. **Set the claim at the right size.** The claim must be something this
   audience could accept from where they stand. "Try a protected bike lane on
   one street for six months" may succeed where "Replace parking with bike
   lanes" will not. A smaller claim that wins beats a bigger one that loses.
   If you narrow the person's claim, tell them and list it under weak spots,
   since it changes what they are asking for.
3. **Choose reasons for this audience.** From the person's reasons, pick the
   two to four that connect to what the audience cares about. Lead with common
   ground: a value or goal both sides share ("We all want busy shops").
4. **Pair every reason with evidence.** A number, an example, an expert source,
   a precedent, or direct experience, from what the person gave you. Where a
   reason has none, mark `[NEEDS: evidence]` and say how much weaker it is
   without it. Never invent a study, statistic, or quote. A figure the person
   half-remembers with no source ("I read somewhere it's 10%") stays out of
   the draft; list it under weak spots as `[NEEDS: source]`.
5. **Order for momentum.** Start with the reason the audience is most likely to
   accept, build to the most important, and keep the strongest piece of
   evidence near the end of the body.
6. **Answer the best counterargument.** The real one, at its strongest.
   Acknowledge what is true in it. Then answer: with evidence, by narrowing the
   claim, by showing the cost of the alternative, or by proposing a safeguard
   (a trial, a review date, a limit). If the audience has raised several
   objections, answer each briefly, grouping related ones. Place this after
   the reasons, or early if the audience will not listen until it is addressed.
7. **Make the call to action specific.** Who does what, by when. "Vote yes on
   the pilot at the March 4 meeting" not "Consider supporting bike lanes."
   Make the first step small and reversible where possible.
8. **Mind the tone.** Respect the audience's intelligence and motives. No
   sarcasm, no "obviously", no implying opponents are foolish. If the person
   vents about someone in the audience, keep it out of the draft.
9. **Report the weak spots.** After the draft, list claims that rest on thin
   evidence and the objections you did not answer. The header and weak spots
   are notes for the writer, outside the text they will send.

## The format

```markdown
**Audience:** [Who]
**They believe now:** [Their position, fairly stated]
**Claim:** [What they should believe or do]

---

# [Title]

[Opening: common ground or a concrete case that matters to this audience.]

[The claim, stated plainly.]

## [Reason 1, as a claim]
[Evidence. Why it matters to this audience.]

## [Reason 2]
[Evidence.] [NEEDS: evidence] if missing.

## [The concern, stated fairly]
[What is true in it. The answer.]

## [Call to action]
[Who does what, by when. The small first step.]

---

**Weak spots:** [Thin evidence, unanswered objections]
```

## Example

Input: "Want to convince our nonprofit's board to let staff work from home two
days a week. Board thinks people slack off at home. We lost 2 good staff last
year who cited commute. Our rent is up for renewal in June, could take a
smaller office. I don't have productivity data."

```markdown
**Audience:** the nonprofit's board.
**They believe now:** staff are less productive at home.
**Claim:** approve a six-month trial of two home days a week.

---

# A six-month trial of hybrid work

We all want to keep good people and spend donor money carefully. A hybrid
schedule could help with both, and a trial lets us find out before we commit.

## We are losing staff to the commute
Two good staff left last year, and both named the commute as a reason.
[NEEDS: what replacing them cost in time or money, if known.]

## The lease decision is coming either way
Our lease is up in June. If fewer people are in each day, we could consider a
smaller office. [NEEDS: rough cost difference.]

## The concern: will work get done?
It is a fair worry, and we do not yet have our own data to answer it. That is
the case for a trial: agree now on what we will measure, and review it at six
months.

## What we're asking
Approve a six-month trial at the next board meeting, with a review before any
lease is signed.

---

**Weak spots:** No productivity evidence either way. The lease saving is not
yet costed. Two departures is a small number; the board may see it as
anecdote. The trial is narrower than the permanent two days you asked for;
check you are happy to ask for that.
```

## Pitfalls

- **Arguing with your reasons, not theirs.** What convinced you may not move
  them. Choose reasons that connect to what the audience values.
- **Straw-manning the other side.** State the objection as its holders would.
  An easy win against a weak version persuades nobody.
- **Overclaiming.** One example is not a trend. Claim what the evidence
  supports, and say where it is thin.
- **A vague ask.** "Think about it" produces nothing. Name the action and the
  date.
- **Contempt.** Any hint that the audience is foolish ends the persuasion.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app.
