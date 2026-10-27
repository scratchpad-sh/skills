---
name: tone-rewrite
description: Rewrites a short message, post, reply, or bio in a requested tone or more clearly, keeping every fact and the writer's intent, and notes what changed. Use when someone says "make this more professional", "less harsh", "friendlier", "say this nicer", "firmer", "sound more confident", "more casual", or "is this clear?", or pastes a text, chat message, piece of feedback, review comment, or social post and worries how it will land.
---

# Tone rewrite

Tone is how a message sounds to the person reading it, and it lives in small
choices: which word comes first, how many hedges there are, whether the
sentence blames a person or describes a problem, an exclamation mark, a
missing greeting. People usually know what they want to say and only doubt
how it will land. The job is to change those small choices and nothing else.

The hard rule is that a tone change never changes the message. "Less harsh"
does not mean "less firm"; a no stays a no, a deadline stays the same date,
and a complaint still names the problem. This skill rewrites the text, then
says in a few lines what changed and why, so the writer learns the move and
can decide whether they agree.

## When to use it

- A chat message, text, or reply they are nervous about sending.
- Feedback on someone's work that feels too blunt, or too soft to be heard.
- A post, bio, or short paragraph that sounds wrong for its audience.
- A request or refusal that needs to be firmer, or kinder, or both.
- "Is this clear?" about anything short.

To draft a whole email from scratch, use `email-drafter`. For simpler words
for a general reader, `plain-language` fits better. To cut length, use
`tighten-prose`. If the problem is that it sounds machine-written, use
`remove-ai-tells`. To sound like a specific person, use `voice-match`.

## What to ask for

- **The text.**
- **The tone they want.** Default: if they only say "fix this" or "make it
  better", read the situation (a message to a manager about a missed
  deadline wants calm and direct) and say which tone you aimed for.
- **Who reads it and where**, only if it changes the result and is not
  obvious: a chat message to a teammate and a post to clients differ.
  Default: infer from the text.

If they gave the text and a tone, start. Do not ask more than one question.

## How to do it

1. **List what must survive** before rewriting: every fact, number, date,
   name, ask, refusal, deadline, and consequence. Check the rewrite against
   this list at the end. Nothing on it may be dropped, softened into a maybe,
   or made stronger. Venting, sarcasm, and insults are not on it, but if one
   carries a real point (a past incident, a boundary), keep the point in
   plain words.
2. **Find what carries the current tone.** Usually a few spots do most of
   the work: an opening that accuses, a sarcastic question, "always" or
   "never", all caps, stacked hedges, an apology in every line. Change those
   first and leave neutral sentences alone.
3. **Apply the tone the person asked for:**
   - **More professional:** drop slang, venting, sarcasm, and exclamation
     marks; state the point and the ask plainly. Professional is not longer
     or stiffer, and it never means corporate filler.
   - **Friendlier or warmer:** add warmth at the open or close (thanks for
     something specific they mentioned, a real acknowledgment), not hedges
     in the middle. With nothing specific to thank them for, skip the thanks.
   - **Less harsh:** describe the work or the event, not the person. Replace
     "you always" with the instance the text gives; if it gives none, cut
     the generalization rather than invent an example. Keep the request.
   - **Firmer:** cut "just", "sorry to bother you", "if possible", and
     "I was wondering if". State the ask and the date once, as a sentence,
     not a question. Polite and firm go together.
   - **More confident:** cut empty qualifiers ("I think", "kind of", "just")
     and lead with the point, but never inflate a claim: "helped with" does
     not become "led", "a couple of startups" does not become "two", and a
     hope ("hopefully moving into a lead role") stays a hope.
   - **More casual:** contractions, shorter sentences, fewer formalities,
     matched to the platform.
   - **Clearer:** put the point or ask first, one idea per sentence, and
     name things instead of "it" and "this". Where the meaning is genuinely
     ambiguous, ask or mark `[?]`; do not pick a meaning silently.
4. **Keep the writer.** Their names for things, their sign-off, their
   recurring phrases, and their level of formality on everything the request
   did not touch. Dates, times, and numbers stay in their form ("Nov 9",
   "6 pages"): this is a message to send, not a dated note. Do not add emoji unless they used them or asked for casual.
5. **Add nothing they did not offer.** No new apology, admission of fault,
   promise, offer of help, or compliment. If a small addition would really
   help (a thank-you, an offer to talk), put it in and flag it under What
   changed as `(proposed)` so they can cut it.
6. **Keep the length close** to the original, unless the tone itself needs a
   sentence more or less. Do not pad.
7. **Say what tone cannot fix.** If the content is the problem (criticizing
   someone by name in a group channel, a claim that is not true, an angry
   message sent at midnight), say so in one line, gently, after the rewrite.
8. **For "is this clear?"**, give a one-line verdict first, then the specific
   spots a reader could stumble on, then a clearer version only if needed.
9. **Offer one alternative** only when the target could fairly mean two
   things (friendlier as in warmer but still formal, or as in casual). Label
   each version by what it does. Otherwise give one rewrite.

## The format

```markdown
**Verdict:** [Only for "is this clear?": one line, then each spot a reader
could stumble on]

**Rewrite ([tone]):**

[The rewritten text, ready to paste]

**What changed**
- [Change]: [why it shifts the tone]
- [Anything added, marked (proposed)]

**Alternative ([what this version does differently]):**

[Second version, only when the tone target is ambiguous]

**Worth knowing:** [one line on anything tone cannot fix, if there is one]
```

## Example

Input: "make this less harsh but still firm. it's for slack: 'this is the
third time the report has been late. I need it by thursday 5pm, no excuses.
if it's not done I'm escalating to Dana.'"

```markdown
**Rewrite (less harsh, still firm):**

The report has been late three times now, so I need to be clear: it's due
Thursday at 5 p.m. If something is getting in the way, tell me today. If
it isn't in by then, I'll have to bring Dana in.

**What changed**
- "No excuses" is gone: it assumes bad faith before they have said
  anything. The fixed deadline does the same work without the edge.
- "Escalating" became "bring Dana in": the same consequence, said as a
  step you will take rather than a threat.
- "If something is getting in the way, tell me today" is new (proposed).
  It invites a reason before the deadline, not after. Cut it if you do not
  want to offer that.
- Kept: three times, Thursday 5 p.m., and Dana.

**Worth knowing:** if this is a channel others can see, the same words will
land much harder there than in a direct message.
```

## Pitfalls

- **Softening the substance.** "Would you be able to maybe look at this
  when you get a chance?" is not a gentler "I need this by Friday". It is a
  different, weaker message. Keep the ask and the date.
- **Professional as padding.** "I hope this message finds you well" and "per
  my last message" add length and sound worse. Plain and direct reads as
  professional.
- **Inventing the evidence.** Making feedback specific is good, but only with
  examples the writer gave. Otherwise cut the vague charge.
- **Silent additions.** An apology or an offer of help the writer did not
  make can create obligations. Flag every addition.
- **Rewriting everything.** If two phrases carry the harshness, change two
  phrases. A message that no longer sounds like its writer will read as odd
  to someone who knows them.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app. If the original came from a note, offer to replace its text only after the
person approves the changes, or to save the result as a new version beside it.
Most rewrites are copied straight into a chat or email, so keep the rewritten
text itself free of headings and markers.
