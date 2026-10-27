---
name: dialogue-polish
description: Revises dialogue so it sounds like real people, with distinct voices, subtext, dead and on-the-nose lines cut, better tags and beats, and a read-aloud test. Use when someone says their dialogue "sounds stiff", "everyone sounds the same", "it's too on the nose", or wants a conversation in a story, novel, play, or screenplay to sound natural.
---

# Dialogue polish

Good dialogue is not how people talk. Real speech is full of "um", repetition,
and pleasantries that would bore a reader in a page. Good dialogue is how
people talk with the boring parts removed and the tension left in: people
interrupting, dodging, answering the question they wish they had been asked,
and saying less than they mean. The reader hears natural speech; the writer
has actually made something much more compressed.

Two failures account for most stiff dialogue. Everyone sounds the same (the
author's voice in every mouth), and everyone says exactly what they mean ("I
am angry because you forgot my birthday"). This skill revises a conversation to
fix both, keeping the writer's story, characters, and intent. It changes how
things are said, not what happens.

## When to use it

- A scene where the dialogue feels stiff, expository, or flat.
- Characters who are hard to tell apart without tags.
- Dialogue that explains the plot or the feelings out loud.
- A play or screenplay scene that needs to sound speakable.

For the whole scene's structure (goal, conflict, turn), use `fiction-scene`.
For keeping each character's traits and speech habits on record, use
`story-bible`. To match a real person's written voice, use `voice-match`.

## What to ask for

- **The dialogue**, with enough of the scene around it to understand what is
  happening.
- **Who the characters are**, briefly: age, background, relationship, what
  each wants in this conversation. Default: infer from the scene and say what
  you inferred.
- **What must survive**: plot information the reader has to get, a line the
  writer loves.

## How to do it

1. **Name what each speaker wants in this conversation**, and what they are
   avoiding. Dialogue comes alive when wants collide. If both characters want
   the same thing, find what they disagree about.
2. **Cut the dead lines.** Greetings, goodbyes, "How are you?" "Fine.",
   agreement noises, and repetition, unless one of them carries tension (a
   greeting that is too formal between spouses is doing work). Enter the
   conversation late.
3. **Push the meaning under the surface.** Find each on-the-nose line, where a
   character states their feeling or the theme outright, and give them
   something else to say: a deflection, a question back, a change of subject,
   a complaint about something small that stands in for something big. The
   reader should know what is meant without anyone saying it.
4. **Remove "as you know" exposition.** Characters do not tell each other
   things they both know. Move the information into conflict (one character
   uses it against the other), into narration, or cut it if the reader can
   wait.
5. **Make the voices distinct.** For each speaker, choose a few habits and
   apply them consistently: sentence length, formality, vocabulary from their
   job or background, what they joke about, whether they ask questions or make
   statements, whether they finish their sentences. Test: cover the tags and
   see whether you can tell who is speaking.
6. **Let people not answer.** Use non-sequiturs, questions answered with
   questions, and silences. One unanswered question can carry a scene.
7. **Fix tags and beats.**
   - Use "said" and "asked" almost always; they are invisible. Cut fancy tags
     ("she hissed", "he chortled") and adverbs on tags ("she said angrily").
   - Use an action beat instead of a tag only when the action means something
     (she pushes the plate away).
   - Leave out tags entirely in a two-person exchange once the rhythm is clear,
     but restore one every few lines so the reader does not lose track.
   - Put the tag at the first natural pause in a long line, not at the end.
   - In a play or screenplay, keep the script's format: no tags at all, a
     parenthetical only where the line would otherwise be misread, and
     meaningful action in the action lines.
8. **Read it aloud.** Every line should be sayable in one breath by that
   character. Trip over a line and it needs rewriting.
9. **Keep the story intact.** Same events, information, and outcome. Never
   add backstory or plot facts (a character's past, a new event). Small
   details a revision needs (a prop, a gesture, a time) are allowed,
   sparingly, only if listed under **New details**. Keep a line the writer
   named word for word. If a cut loses something the reader needs, say where
   it could go.
10. **Show the changes** in the format below, with before and after lines.

## The format

```markdown
**Who wants what**
- [Character]: wants [X], avoiding [Y]
- [Character]: wants [X], avoiding [Y]

---

[Revised dialogue, with the surrounding narration it needs]

---

**What changed**
- Cut: [lines removed and why]
- Subtext: "[before]" became "[after]"
- Exposition: [what moved, and where]
- Voice: [what now distinguishes each speaker]
- Tags: [what changed]

**Reader still needs:** [information moved or at risk, if any]

**New details:** [anything the original did not have, or None]
```

## Example

Input: "'Hi, Tom.' 'Hi, Sarah. How are you?' 'I'm fine. Actually, I'm upset
because you didn't come to my art show last night, and it made me feel like
you don't support my career,' Sarah said sadly. 'I'm sorry. As you know, I had
to work late because my boss gave me the Henderson report,' Tom explained."

```markdown
**Who wants what**
- Sarah: wants Tom to admit he chose work over her; avoiding saying how much
  it hurt.
- Tom: wants this to be about the Henderson report; avoiding the question of
  whether he could have left.

---

"How was the show?" Tom asked.

Sarah kept unpacking the canvases. "You could look at the pictures. Everyone
else posted pictures."

"Henderson report. He dropped it on me at five."

"At five." She set the last canvas face down. "So you were there until, what.
Midnight?"

He didn't answer that.

---

**What changed**
- Cut: the greetings, "I'm fine", and Tom's "I'm sorry" (his not
  apologizing now carries the scene; restore it if the apology matters).
- Subtext: "it made me feel like you don't support my career" became
  "Everyone else posted pictures."
- Exposition: "As you know, my boss gave me the Henderson report" became a
  terse excuse.
- Voice: Sarah repeats and presses with questions; Tom answers in fragments.
- Tags: "said sadly" and "explained" removed; action beats with the canvases.

**Reader still needs:** the show was last night. Confirm the narration nearby
establishes it.

**New details:** "at five", the canvases, the posted pictures, and Tom's
silence. Keep them only if they fit your story.
```

## Pitfalls

- **Polishing into sameness.** Making every character witty and terse is
  another way to give them all one voice. Some characters are long-winded,
  formal, or repetitive on purpose: that is voice, so keep the rambler
  rambling.
- **Subtext so deep it vanishes.** The reader must still be able to infer the
  meaning. If the scene's point is lost, restore one clearer line.
- **Phonetic dialect.** Heavy misspelling to show accent is hard to read and
  risks caricature. Use word choice and rhythm.
- **Beats on every line.** Constant sipping, sighing, and glancing clutter the
  page. A beat should mean something.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app. If the original came from a note, offer to replace its text only after the
person approves the changes, or to save the result as a new version beside it.
