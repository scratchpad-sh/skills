---
name: tighten-prose
description: Cuts wordiness from a draft without losing meaning or voice, aiming at a stated cut (20 percent by default) and reporting what went. Use when someone says "tighten this", "make it shorter", "cut this down", "it's too wordy", or has a word limit to hit.
---

# Tighten prose

Wordiness is rarely one big problem. It is a hundred small ones: "in order to"
where "to" works, "the fact that" in front of a clause, a paragraph that
announces what it is about to say, three hedges on one claim. Each costs the
reader a moment, and together they bury the sentence's real verb. Cutting them
makes writing faster to read and usually more confident, because the claims
stop hiding behind padding.

Tightening is not rewriting. The author's meaning, facts, and voice stay. A
sentence that is long because it is carrying a lot is fine; a sentence that is
long because it is circling is not. This skill cuts to a stated target and
shows its work, so the writer can put back anything they miss.

## When to use it

- A draft is over a word limit (an abstract, an application, an op-ed).
- Someone says their writing is wordy, padded, or slow.
- An email or report that should be read quickly.
- A final pass before sending, after the structure is right.

If the problem is structure (the point is unclear, sections are in the wrong
order), start with `developmental-edit`; tightening a muddled draft only
produces a shorter muddled draft. To change the register for general readers,
use `plain-language`. To make text sound less machine-written, use
`remove-ai-tells`. For errors only, use `proofread`.

## What to ask for

- **The text.**
- **The target.** A percentage or a word count. Default: about 20 percent
  shorter, as a soft target: if the text is already tight, stop short of it
  and say so rather than cutting content. A hard limit (a 250-word abstract)
  is the one case where content goes, and only as step 9 describes.
- **Anything that must stay**: required phrases, quotes, legal wording.
  Default: quoted speech, names, figures, and terms of art stay word for word
  even when they are not listed.

If they pasted the text and nothing else, use the default and start.

## How to do it

Work in this order, from the cheapest cuts to the most judgment-heavy. Count
words before and after.

1. **Cut throat-clearing.** Openings that announce instead of say: "It is
   important to note that", "In this section I will discuss", "As we all
   know", "It goes without saying". Start with the claim.
2. **Cut redundancies.** "Past history", "end result", "advance planning",
   "each and every", "completely eliminate", "free gift", "basic
   fundamentals". Also redundant categories: "blue in color", "large in size",
   "a period of time".
3. **Replace wordy phrases.** "In order to" becomes "to"; "due to the fact that"
   becomes "because"; "at this point in time" becomes "now"; "has the ability
   to" becomes "can"; "in spite of the fact that" becomes "although"; "with
   regard to" becomes "about".
4. **Unbury verbs.** Turn nominalizations back into verbs: "conduct an
   analysis of" becomes "analyze"; "make a decision" becomes "decide"; "provide
   assistance to" becomes "help". This often removes a weak verb and a
   preposition at once.
5. **Remove empty intensifiers and filler.** "Very", "really", "actually",
   "basically", "quite", "rather", "somewhat", "in fact", "certainly". Keep one
   only where the emphasis is earned.
6. **Thin the hedges.** One hedge per claim, placed where the doubt really is.
   "It may possibly be the case that this could suggest" becomes "This
   suggests". Keep hedges that carry real uncertainty; that is meaning, not
   padding.
7. **Collapse "there is" and "it is" openings.** "There are three reasons that
   explain why" becomes "Three reasons explain why".
8. **Cut repeated ideas.** Writers often say a thing, then say it again in
   different words "to be clear". Keep the better version.
9. **Only then, cut content**, if still over a hard limit: the weakest example,
   the second of two similar points, background the reader already has. Never
   do this silently. List each content cut separately. If padding alone lands
   well under a hard limit, spend the spare words restoring a precise term or
   a phrase of the author's that you cut.
10. **Read for rhythm.** After cutting, a paragraph of only short sentences can
    turn choppy. Join two where it helps. Keep the author's characteristic
    phrases even if they are a word longer.

## The format

```markdown
## Tightened text
[The full revised text]

---

**Length:** [before] words to [after] words ([percent] shorter)

**What went**
- [Category]: [examples, e.g. "in order to" to "to" (4 places)]
- [Category]: [examples]

**Content cut** (only if needed to hit a hard limit)
- [What was removed and where]

**Kept on purpose**
- [Anything long that stayed because it carries meaning or voice]

**Off target** (only if well over or under)
- [Why, and an offer of a lighter or deeper version]
```

## Example

Input (62 words): "It is important to note that at this point in time our team
has made the decision to conduct a review of the onboarding process. This is
due to the fact that there have been a number of complaints from new users,
which may possibly suggest that the current process is perhaps somewhat
confusing to people who are new to the product."

```markdown
## Tightened text
Our team has decided to review the onboarding process. Several new users have
complained, which suggests the current process confuses them.

---

**Length:** 62 words to 21 words (66 percent shorter)

**What went**
- Throat-clearing: "It is important to note that".
- Wordy phrases: "at this point in time" (cut), "due to the fact that".
- Buried verbs: "made the decision" to "decided"; "conduct a review of" to
  "review".
- Stacked hedges: "may possibly suggest... perhaps somewhat" to "suggests".
- "There are" opening: "there have been a number of complaints" to "have
  complained".
- Repeated idea: "people who are new to the product" restated "new users".

**Kept on purpose**
- "Suggests" keeps one hedge; the complaints do not prove the cause.

**Off target**
- Well past the 20 percent default because nearly every cut word was
  padding; no content went. Want a lighter version that keeps more of the
  original wording?
```

## Pitfalls

- **Cutting meaning with the padding.** "Most" to "all", or a dropped
  exception, changes the claim. Reread every cut sentence against the original.
- **Removing every hedge.** Real uncertainty belongs in the text. Make it one
  precise hedge, not zero.
- **Flattening the voice.** A writer's aside or turn of phrase may be the best
  thing in the paragraph. Tighten around it.
- **Trimming a term of art.** "Large-scale prints", "end user", or "net
  revenue" can look like padding and are not. Keep the term.
- **Silent content cuts.** If you removed an example or a point, say so.
- **Telegraphic prose.** Dropping articles and connectives ("Team decided
  review. Complaints suggest confusion.") is shorter and worse.
- **Ignoring the target.** If you were asked for 20 percent and cut 50, say why,
  and offer a lighter version.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app. If the original came from a note, offer to replace its text only after the
person approves the changes, or to save the result as a new version beside it.
