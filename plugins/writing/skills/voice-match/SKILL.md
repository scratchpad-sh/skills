---
name: voice-match
description: Learns a person's writing voice from samples, writes a short voice profile they can save and reuse, then writes or rewrites text in that voice. Use when someone says "write this like me", "match my style", "make it sound like me", "capture my voice", or shares past writing and wants new text that sounds like theirs.
---

# Voice match

A writing voice is not a mood like "friendly" or "professional". It is a set of
habits you can observe and count: how long the sentences run and how much they
vary, which words appear and which never do, whether the writer opens with the
point or circles in, how they joke, whether they use contractions,
parentheses, or semicolons, how they end. Two writers can both be "casual" and
sound nothing alike.

This skill reads samples, names those habits in a short profile, and writes to
the profile. The profile is the useful part: the person can save it, check it
("yes, that's me" or "I never do that"), correct it, and paste it into any
future request.

## When to use it

- Someone wants a draft (a post, an email, a bio, a newsletter) that sounds
  like them.
- Text written by someone else, or by an AI tool, needs to sound like the
  person who will sign it.
- A team or brand wants a consistent voice drawn from its best existing
  writing.
- A writer wants to see their own habits described.

To strip generic machine phrasing first, use `remove-ai-tells`. For fiction
characters' voices in conversation, use `dialogue-polish`.

## What to ask for

- **Samples.** Three to five pieces, ideally 1,500 words or more in total, of
  the kind of writing they want matched (emails to match emails, posts to
  match posts). Fewer samples give a rougher profile; say so.
- **What to write or rewrite**, with the facts and content it should contain.
- **Anything in the samples that is not them**: edited by someone else,
  written for an unusual occasion.

If they already have a saved voice profile, use it and skip to writing.

## How to do it

1. **Read the samples for habits, not content.** Ignore what they say; watch
   how they say it.
2. **Measure what you can.** Rough average sentence length and its range (do
   they mix 4-word sentences with 40-word ones?). Paragraph length. How often
   they use questions, contractions, first person, and direct address.
3. **Collect vocabulary.** Words and phrases they repeat; register (do they
   say "use" or "utilize", "kids" or "children"?); swearing or not; jargon from
   their field; words they conspicuously never use.
4. **Notice structure.** Do they open with the point, a story, or a question?
   Do they end with a call to action, a joke, a single short line, or just
   stop? How do they move between ideas (connectives, white space, headings)?
5. **Notice humor and stance.** Dry, self-deprecating, absurd, none? Confident
   or hedged? Do they argue with the reader or alongside them?
6. **Notice punctuation and formatting.** Parentheses for asides, semicolons,
   exclamation marks, ellipses, lowercase starts, lists versus prose, bold.
7. **Write the profile.** Eight to twelve lines, each a habit with a short
   quoted example from the samples. Include a "never" list; it is often the
   most useful part. With a thin sample, "never" only means "not seen";
   label it that way.
8. **Write to the profile.** Draft the requested text using the person's
   content only. Match the rhythm and habits without copying distinctive
   one-off lines from the samples; a voice is the pattern, not the phrases.
   Fixed formulas the writer repeats on purpose (a greeting, a sign-off, how
   they sign their name) are the exception: keep those exactly. A joke or
   aside may play only on facts the person gave; a quip that claims
   something new ("you asked for these") is invented content.
9. **Check against the samples.** Read a paragraph of the samples, then a
   paragraph of yours. Anything that jumps out as not them (a word, a
   flourish, a too-tidy ending) goes.
10. **Ask for corrections.** The person knows their voice better than the
    samples do. Update the profile with what they say.

## The format

```markdown
# Voice profile: [Name]
Based on: [samples used, e.g. 4 newsletter issues, about 3,000 words]

- **Sentences:** [average and range, e.g. short, often under 12 words, with
  an occasional long one for a list]
- **Openings:** [how pieces begin]
- **Endings:** [how pieces end]
- **Vocabulary:** [register, favorite words, field jargon]
- **Humor:** [kind and frequency]
- **Stance:** [confident, tentative, conversational]
- **Punctuation:** [habits]
- **Formatting:** [prose or lists, headings, bold]
- **Never:** [words, moves, or punctuation they avoid]

---

## [The requested text]
[Draft in the voice]

---

**Where I was unsure:** [habits the samples did not show]
```

## Example

Input: three short posts by a woodworker. Sample lines: "Glue it. Clamp it.
Walk away. Seriously, walk away." / "I have ruined more walnut than I'd like
to admit (it's a lot)." / "Anyway. Sharpen your chisels." Request: a post
announcing a beginner class on Saturday, 9 to 12, $40.

```markdown
# Voice profile: [Name] (woodworking posts)
Based on: 3 short posts (a thin sample; treat as a first pass)

- **Sentences:** very short, often fragments; runs of two-word imperatives.
- **Openings:** straight into an instruction or a confession.
- **Endings:** a one-line shrug ("Anyway.") then a practical order.
- **Vocabulary:** plain shop words (glue, clamp, walnut); no jargon unexplained.
- **Humor:** self-deprecating, in parentheses ("(it's a lot)").
- **Stance:** bossy in a friendly way; talks to one reader.
- **Punctuation:** parentheses for asides; periods, not exclamation marks.
- **Formatting:** short paragraphs, no headings, no lists.
- **Never** (not seen in 3 posts): exclamation marks, emoji.

---

## Beginner class, this Saturday

You want to start. You're nervous about the tools. Fair.

Saturday, 9 to 12, I'm teaching a beginner class. We'll cover the basics,
and you'll make your first mistakes in a room where nobody minds (everyone
makes them; ask me about walnut).

$40. [NEEDS: anything people should bring or wear]

Anyway. Come make something.

---

**Where I was unsure:** the samples never mention prices or dates, so the
logistics line is my guess at how you would handle them. Fill in or cut the
bracket; I did not want to invent what to bring.
```

## Pitfalls

- **Describing a vibe instead of habits.** "Warm and witty" cannot be written
  to. "Self-deprecating asides in parentheses, about once a paragraph" can.
- **Caricature.** Using every habit in every sentence turns a voice into an
  impression. Match the frequency, not just the features.
- **Copying signature lines.** Reusing "Anyway. Sharpen your chisels." reads
  as a parody. Write new lines with the same pattern.
- **Inventing content to sound right.** A voice match carries the person's
  facts in the person's style. It never adds anecdotes, customer reactions,
  or claims they did not supply, even as a throwaway joke.
- **Mixing registers.** Samples of formal reports will not tell you how
  someone writes a toast. Match samples to the task, or say the profile may
  not transfer.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app. Offer to save the voice profile as its own note too, titled "Voice
profile: [name]", so it can be pasted into any future request.
