---
name: remove-ai-tells
description: Edits text so it reads like a person wrote it, removing stock phrases, reflexive threes, false contrasts, signposting, bland hedges, and generic endings. Use when someone says a draft "sounds like AI", "sounds like ChatGPT", or "sounds robotic or generic", asks to "humanize this", wants it "more human", or is revising text drafted with an AI tool.
---

# Remove AI tells

Text drafted by a language model, or by a person writing on autopilot, has a
recognizable sound. The same moves recur: a contrast that knocks down a claim
nobody made, every list exactly three items long, a paragraph that opens by
announcing its own importance, a closing line about "the journey ahead". None
of these is wrong once. Repeated, they make prose feel assembled rather than
said, and readers stop trusting it.

This skill edits for that sound. The goal is writing that reads well and sounds
like a particular person: specific where the draft was vague, plain where it
was ornamental, and willing to just say the thing. It does not promise to get
text past AI detectors, and it should not be used to pass off work where
disclosure is required. What it does is make the writing better.

## When to use it

- A draft written with an AI tool that the person will publish or send under
  their name.
- Writing that feels generic, over-polished, or like a template.
- Marketing, LinkedIn posts, cover letters, and reports, where the tells
  cluster.
- Someone's own writing that has picked up the habits.

To match a specific person's voice once the tells are gone, follow with
`voice-match`. For wordiness alone, `tighten-prose` is narrower. For errors,
use `proofread`. For simpler words for a general reader, use `plain-language`.

## What to ask for

- **The text.**
- **Whose voice it should sound like.** A sample of the person's own writing
  helps most. Default: plain, direct, and conversational, matching the
  occasion.
- **What must stay**: facts, figures, names, required phrases.

## How to do it

Read the whole text once, marking the patterns below. Then edit, keeping every
fact and claim the draft makes. Do not add facts or examples of your own; where
a vague line needs a specific, ask the person for one or mark `[NEEDS: ...]`.

1. **Stock phrases.** Cut or replace the vocabulary that signals autopilot:
   "delve", "navigate the complexities", "in today's fast-paced world", "a
   testament to", "rich tapestry", "plays a crucial role", "it's worth
   noting", "unlock", "elevate", "seamless", "robust", "landscape", "realm",
   "embark on a journey", "game-changer". Say what is actually meant, usually
   in fewer words.
2. **"It's not X, it's Y."** The construction invents a wrong view in order
   to correct it. Keep it only when someone really holds X. Otherwise, state Y,
   in plain words but with the same meaning ("This wasn't just a job, it was
   a family" becomes "St. Brigid's felt like family", not a new sentiment).
   Watch its cousins: "This isn't just a tool. It's a philosophy." and "More
   than X, it's Y."
3. **Reflexive threes.** Three adjectives, three parallel clauses, three
   bullets, every time. Vary the count to what the content has: one strong
   word, two items, four. A real list of three is fine; a rhythm of threes in
   every sentence is the tell.
4. **Signposting.** "Let's dive in", "Here's the thing", "In this post, we'll
   explore", "It's important to understand that", "Let's break it down". Cut
   them and start with the substance.
5. **Bland hedges and balance.** "Can potentially", "may help to", "it depends
   on various factors", and the reflexive "however, it's important to consider
   both sides". If the writer has a view, state it. If there is real
   uncertainty, name what it depends on.
6. **Generic conclusions.** "In conclusion", "Ultimately", "At the end of the
   day", and endings that restate the opening or gesture at the future ("As
   technology continues to evolve..."). End on the last useful thing, or on a
   specific next step.
7. **Uniform rhythm.** Sentences all of medium length, paragraphs all three or
   four sentences, every paragraph opening with a topic sentence and closing
   with a summary line. Vary it: a short sentence after a long one, a
   one-line paragraph where something deserves weight.
8. **Over-formatting.** Bold scattered through prose, headings over every two
   paragraphs, bullets where sentences would connect the ideas. Convert to
   prose where the ideas depend on each other. Long dashes used to splice
   clauses in sentence after sentence are a tell of their own; replace most
   with a period, a comma, a colon, or parentheses.
9. **Empty praise and enthusiasm.** "Great question", "exciting", "powerful",
   exclamation marks, emoji used as bullet points. Remove unless the person's
   own voice uses them.
10. **Vague abstraction.** "Improve outcomes", "drive value", "foster
    collaboration". Replace with what concretely happens, from the draft or
    from the person. If the draft never says, mark it `[NEEDS: ...]`.
11. **Check the substance survived.** Compare claim by claim with the original.
    Then list the patterns you found and how many times, so the person learns
    to spot them, and any judgment call they may want to undo (a word cut
    that might be their voice, a line reworded beyond the tell).

## The format

```markdown
## Revised text
[The full edited text]

---

**Patterns removed**
- [Pattern]: [count], e.g. [one before and after]
- [Pattern]: [count]

**Needs from you**
- [NEEDS: what is missing]: [where a vague line needs a detail only the person has]

**Judgment calls** (leave out if none)
- [What changed beyond removing a tell, and how to put it back]
```

## Example

Input: "In today's fast-paced world, staying organized isn't just a
nice-to-have, it's a necessity. That's why we built Tally: a powerful,
intuitive, and seamless way to track your habits. Let's dive into how it can
help you unlock your full potential. Ultimately, Tally is more than an app.
It's a partner on your journey to a better you."

```markdown
## Revised text
You need to stay organized, so we built Tally to track your habits. It is
easy to use. [NEEDS: one sentence on what using it looks like, and one thing
it does that other trackers do not]

---

**Patterns removed**
- Stock phrases: 4 ("in today's fast-paced world", "seamless", "unlock your
  full potential", "journey to a better you").
- "It's not X, it's Y": 2 ("isn't just a nice-to-have, it's a necessity";
  "more than an app. It's a partner").
- Reflexive three: 1 ("powerful, intuitive, and seamless").
- Signposting: 1 ("Let's dive into").
- Generic conclusion: 1 (the "Ultimately" sentence).

**Needs from you**
- [NEEDS: a concrete feature]: the original says Tally tracks habits but
  never how, only that it is powerful and intuitive. "Easy to use" keeps the one claim that
  survives; a concrete feature from you would do more than any adjective.
```

## Pitfalls

- **Removing substance with the style.** Every claim and fact in the original
  should survive, in plainer words.
- **Inventing specifics.** Generic text tempts you to add a vivid detail. Ask
  the person instead; an invented statistic is worse than a vague line.
- **Swapping one tell for another.** Replacing "delve" with "dig into" in
  every paragraph is still a pattern. Read the result aloud for repetition.
- **Overcorrecting into choppiness.** Not every sentence should be short and
  blunt. Aim for natural variation.
- **Promising detector-proof text.** That is not the job, and no edit can
  guarantee it. The job is writing a reader trusts.
- **Erasing the person's own habits.** If they genuinely say "Here's the
  thing" in every talk, it is voice, not a tell. Ask when unsure.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app. If the original came from a note, offer to replace its text only after the
person approves the changes, or to save the result as a new version beside it.
