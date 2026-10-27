---
name: case-brief
description: Briefs a court case for class, with facts, procedural history, issue, holding, reasoning, rule, concurrences and dissents, and notes for cold calls. Use when a law student asks to brief a case, wants a case brief, an IRAC breakdown, or a case summary for class, is preparing for a cold call, or pastes a court opinion or casebook excerpt. Study notes only, not legal advice.
---

# Case brief

A case brief is a law student's one-page map of a judicial opinion. It pulls
out what happened, how the case got to this court, the precise legal question,
the answer, why the court answered that way, and the rule the case stands for.
Briefing forces the student to read an opinion actively, and the brief is what
they glance at when called on in class and what they later fold into a course
outline.

The hard parts are the ones a casebook does not label: separating the facts
that mattered to the decision from the background, stating the issue narrowly
enough to be useful, and telling the holding apart from dicta. This skill does
those carefully and keeps the student's own reading in charge. It describes
what a court said, never how the law applies to anyone's real situation.

## When to use it

- A student has a reading assignment and wants each case briefed.
- They are preparing for a cold call or a Socratic class.
- They pasted an opinion or a casebook excerpt and want it made sense of.
- They are building an outline and want briefs to draw from.

For a whole course outline, use `outline-notes`. For flash cards on rules and
elements, use `spaced-repetition-cards`. For notes on a law review article,
use `literature-notes`.

## What to ask for

- **The opinion text**, or the casebook excerpt. A case name alone is not
  enough to brief accurately. If they only give a name, ask for the text, or
  offer a brief from general knowledge, labeled unverified, with each point
  marked `(added)`.
- **The course and the topic** it was assigned under (Contracts, offer and
  acceptance). Default: infer from the opinion. The topic tells you which issue
  the professor cares about when an opinion decides several.
- **Brief length.** Default: about one page; "book brief" style if they ask
  for short.

If they pasted the opinion, start.

## How to do it

1. Read the whole opinion before writing. Identify the court, the year, and
   the citation; put `[?]` in the heading for any the excerpt cuts.
2. **Facts.** Keep only the facts the court relied on, plus the minimum needed
   to follow the story. Name parties by role (buyer, landlord, defendant
   employer) as well as name.
3. **Procedural history.** Who sued whom for what, what the trial court did,
   what each appellate court did, and who is appealing now. Use the opinion's
   terms (affirmed, reversed, remanded).
4. **Issue.** One question, answerable yes or no, that combines the legal rule
   with the key facts: "Does a newspaper ad listing goods at a price constitute
   an offer when it says 'first come, first served'?" not "Was there a
   contract?" If the opinion decides several, brief the one matching the
   topic in full and give each other one a line under Issue and Holding.
5. **Holding.** The answer to the issue, in one sentence, with the outcome
   (affirmed, reversed). Keep it as narrow as the court made it.
6. **Reasoning.** The steps the court took: precedent it followed or
   distinguished, statutory text, policy arguments. Number the steps.
7. **Rule.** The general principle the case stands for, written so it can drop
   straight into an outline. Put anything broad the court did not need to
   decide under dicta, never in the holding or rule.
8. **Concurrences and dissents.** Who wrote each, and the one point on which
   each parts from the majority. Dissents often become cold-call questions.
   If the excerpt shows none, write "None in the excerpt": casebooks often
   cut separate opinions, so do not claim the court had none.
9. **Notes for class.** Questions the student should be ready for, how the
   case relates to other assigned cases, and anything confusing marked `[?]`.
10. Quote sparingly, and only from the text given, with page or paragraph
    references when available.

## The format

```markdown
# [Case name], [citation] ([court] [year])
Course: [course] · Topic: [topic] · Briefed: [YYYY-MM-DD]

**Parties:** [Plaintiff/appellant] v. [Defendant/appellee]

## Facts
- [Fact the court relied on]

## Procedural history
- [Trial court result] → [appeal] → [this court]

## Issue
[Yes/no question combining rule and key facts]?

## Holding
[Answer]. [Affirmed / Reversed / Remanded].

## Reasoning
1. [Step]
2. [Step]

## Rule
[Principle, outline-ready]
- Dicta: [if any]

## Concurrence / Dissent
- **[Justice], [concurring / dissenting]:** [main point of departure]

## Notes for class
- [Likely question]
- [Connection to another case]
- [?] [Open question]
```

## Example

Input: a pasted casebook excerpt of Lefkowitz v. Great Minneapolis Surplus
Store (Minnesota Supreme Court, 1957), with no citation and no separate
opinions, in which a store's newspaper ad offered "1 Black Lapin Stole
Beautiful, worth $139.50 ... $1.00 First Come First Served"; the plaintiff
arrived first and said he was ready to pay $1, and the store refused, citing a
"house rule" that the offer was intended for women only. The excerpt mentions
an earlier ad but cuts its text. The trial court found for the plaintiff and
this court affirmed.

```markdown
# Lefkowitz v. Great Minneapolis Surplus Store (Minn. 1957)
Course: Contracts · Topic: Offer · Briefed: 2026-10-27

**Parties:** Lefkowitz (buyer, plaintiff) v. Great Minneapolis Surplus Store
(seller, defendant and appellant)

## Facts
- Store's newspaper ad: one lapin stole, "$1.00 First Come First Served".
- Plaintiff was first at the counter and said he was ready to pay $1.
- Store refused, citing a "house rule" that the offer was for women only.

## Procedural history
- Trial court: judgment for plaintiff. Store appealed. Affirmed.

## Issue
Is a newspaper ad an offer when it is clear, definite, and explicit and
leaves nothing open for negotiation?

## Holding
Yes. The ad was an offer the plaintiff accepted. Affirmed.

## Reasoning
1. Ads are usually invitations to negotiate, not offers.
2. But an ad that is clear, definite, and explicit, with nothing left to
   negotiate, can be an offer.
3. "First come first served" named who could accept.
4. The store could not add an unstated condition after acceptance.

## Rule
An advertisement is an offer when it is clear, definite, and explicit and
leaves nothing open for negotiation.

## Concurrence / Dissent
- None in the excerpt.

## Notes for class
- How does this differ from the usual rule for ads?
- [?] The excerpt cuts the earlier ad's text. Check the full opinion.
```

## Pitfalls

- **Facts as a retelling.** Cut facts the reasoning never touches.
- **Briefing from memory.** Never invent a citation, a quote, a vote count, or
  a justice's name. Mark what the text did not give as `[?]`.
- **Giving legal advice.** If the person asks how the case applies to their own
  situation, say this is a study brief and suggest a licensed lawyer.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A folder per course, each brief titled by case name, speeds up outlining.
