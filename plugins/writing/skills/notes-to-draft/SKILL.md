---
name: notes-to-draft
description: Turns a pile of notes (fragments, quotes, and half-thoughts) into a first draft with a clear point, a deliberate order, and connecting sentences. Use when someone says "turn my notes into a draft", "write this up", "I have all my notes but can't start", or pastes scattered notes and wants prose, with thin spots flagged rather than filled.
---

# Notes to draft

Most people who cannot start writing are not short of material. They have a
folder of fragments and no idea which one comes first, because they have not
yet decided what the fragments add up to. This skill does that deciding: it
finds the point the notes are circling, chooses an order that serves it, and
writes the connective tissue (the "because", "but", and "which means") that
notes leave out.

A first draft from notes should be honest about its notes. Where the material is
thin, the draft says so in a bracket instead of covering the gap with confident
invention. A visible hole is useful; a smooth paragraph of made-up support is a
trap the writer may not notice until a reader does.

## When to use it

- Someone has research notes, interview fragments, or a running note on a topic
  and wants a first draft.
- They have quotes and bullets for an article, report, talk, or essay but no
  structure.
- They want to see what their notes actually say before deciding what to write.

If they want to plan the structure before any prose, use `outline-first`. For a
specific form, `blog-post`, `newsletter-issue`, `essay-structure`, or
`personal-essay` carry the conventions of that form. To shrink a source to its
gist, use `summary-writer`.

## What to ask for

- **The notes.** All of them, as messy as they are. Do not ask the person to
  tidy them first.
- **What the draft is for** (an article, a report, a talk, an email to the team)
  and roughly how long. Default: a short article of 600 to 1,000 words. For
  a timed talk, budget about 130 words a minute and write to be heard.
- **Who will read it.** Default: an intelligent reader who was not in the
  person's head while they took the notes.

If they already know the point they want to make, take it. If not, propose one
(step 2) and let them confirm before you write the whole draft.

## How to do it

1. **Read everything before writing anything.** Sort each note into one of
   four piles in your head: a claim, evidence for a claim (a fact, number,
   quote, or example), a question, or an aside. Notes that are only asides are
   the first candidates to leave out.
2. **Find the point.** Write it as one declarative sentence a reader could
   disagree with: "Our onboarding loses people at the payment step, not the
   sign-up form" rather than "This draft is about onboarding." Look for the
   note the person underlined, repeated, or wrote with the most heat. If the
   notes support two different points, say so and ask which draft they want.
3. **Choose an order on purpose.** Common orders: problem then cause then fix;
   claim then reasons; chronological; general to specific; the surprise first,
   then how we got there. Pick the one that gets the reader to the point with
   the least backtracking, and say which you chose.
4. **Group the notes under the order.** Each group becomes a section or a
   paragraph, led by a sentence that states what the group shows. Evidence
   goes under the claim it supports. A quote goes where it proves something,
   never in a pile at the end.
5. **Write the connective tissue.** This is the real work. Between each
   paragraph, the reader needs to know why this comes next: a consequence
   ("so"), a contrast ("but"), an example ("for instance"), or an escalation
   ("worse"). If you cannot name the link between two paragraphs, the order is
   wrong; go back to step 3.
6. **Keep the person's material exact.** Quotes stay word for word, numbers
   stay as given, names stay spelled as written. Use their phrases where they
   are vivid; they are the voice of the draft.
7. **Flag gaps, do not fill them.** Where a claim has no support in the notes,
   write `[NEEDS: a number for how many users drop at payment]` or
   `[NEEDS: an example]`. Never invent a statistic, quote, source, or anecdote.
   A transition sentence you write is fine; a fact you write is not. When two
   notes disagree (12% in one, "about 15%, per Sam" in another), do not pick
   one: give both with their sources, or write `[NEEDS: which figure is right]`.
   First check they measure the same thing (families versus students).
8. **Write the opening last.** Once the body exists, open with the most
   concrete thing in the notes (a scene, a number, a quote) that leads to the
   point. End on what follows from the point: an implication, a decision, or
   the open question, not a summary of the sections.
9. **Report back.** After the draft, list what you left out and why, and the
   gaps under **Needs from you**, so the person knows what to research next.

## The format

```markdown
# [Working title]

**Point:** [One sentence the draft argues or explains]
**Order:** [The structure chosen, e.g. problem, cause, fix]
**Reader:** [Who it is for]

---

[Opening: the most concrete detail from the notes, leading to the point.]

## [Section heading, if the piece is long enough to need them]
[Paragraph led by a sentence stating what this group of notes shows,
then the evidence, then the link to the next section.]
[NEEDS: what is missing]

## [Next section]
[...]

[Ending: what follows from the point.]

---

**Left out:** [Notes not used, and why: off the point, repeated, or an aside]

**Needs from you**
- [NEEDS: what is missing] (every marker in the draft, in one list)
```

## Example

Input notes: "cafe loyalty cards. we tried stamp card 2025, ppl lost them.
app version: 40% signups never used. 'I just want my coffee' (customer, Mar).
regulars = 60% revenue?? Maria says the regulars know her by name, that's the
loyalty. idea: skip the program, train staff on names."

```markdown
# The loyalty program we already have

**Point:** Our regulars are loyal to the staff, not a points scheme, so we
should invest in that instead of another program.
**Order:** what we tried, why it failed, what actually works.
**Reader:** [?] assumed to be the cafe's owners; the notes do not say.

---

"I just want my coffee," a customer told us in March. That was not
rudeness. It was information.

We have tried to buy loyalty twice. The 2025 stamp card failed because people
lost the cards. The app did worse: 40% of the people who signed up never used
it once.

Meanwhile, the loyalty we were trying to build already existed. Maria points
out that the regulars know her by name. That is the relationship a points
program imitates, and we have the real one.
[NEEDS: confirm what share of revenue comes from regulars; the notes say 60%
with a question mark.]

So instead of a third program, we could train our staff to learn the
regulars' names.

---

**Left out:** nothing; the notes were short.

**Needs from you**
- [NEEDS: the regulars' share of revenue (currently a guess)]
```

## Pitfalls

- **Using every note.** A draft that includes everything has no point. Leave
  out what does not serve the point and list it, so nothing is lost.
- **A point that is a topic.** "Loyalty programs" is a topic. "Our regulars are
  loyal to people, not points" is a point. Only a point can order a draft.
- **Quotes dumped in a row.** Three quotes back to back is a scrapbook. Each
  quote needs a sentence before it saying what it shows.
- **Losing the person's voice.** Notes are full of their phrasing. Smoothing
  every line into neutral prose makes it someone else's draft.
- **Transitions that only connect grammatically.** "Additionally" and
  "Furthermore" join sentences without saying how the ideas relate. Name the
  real relation: because, but, so, for example.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app. Saving it next to the original notes keeps the gaps easy to check against
the source.
