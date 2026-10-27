---
name: voice-memo-cleanup
description: Turns a rambling voice memo transcript into a clean note that keeps the speaker's voice and every idea, and lists anything that sounded like a task. Use when someone pastes a voice memo, dictation, or speech-to-text transcript and wants it readable, or says "clean up this recording" or "turn my voice note into notes".
---

# Voice memo cleanup

People think out loud differently from how they write. A voice memo wanders,
repeats, corrects itself mid-sentence, and drops the best idea in the middle
of a tangent. The transcript keeps all of that, plus "um", "like", and
speech-to-text mistakes. Cleanup removes the noise of speaking while keeping
the substance of thinking: every idea, in the speaker's own words and voice.

The test of a good cleanup: the speaker reads it and says "yes, that is what I
meant", and nothing they said is missing. It should sound like them on a
clear day, not like an editor.

## When to use it

- A voice memo or dictation transcript needs to become a usable note.
- Someone recorded ideas on a walk or in the car.
- A speech-to-text draft is full of fillers and misheard words.
- Thoughts were recorded in several memos that belong in one note.

For a meeting recording with several people, use `meeting-notes`. For a
recorded interview, use `interview-notes`. To turn the cleaned note into a
piece for others to read, use `notes-to-draft` afterward.

## What to ask for

- **The transcript.** If they have several, ask for all of them and the order.
- **How clean.** Default: clean prose in their voice, grouped by topic. Offer
  "light" (fillers out, everything else as said) if they want it closer to
  the original.
- **Any names or terms** the transcription might have mangled, only if you
  see likely errors.

If they pasted a transcript, start.

## How to do it

1. **Read it all first.** Speakers often state the real point late ("so I
   guess what I'm saying is..."). Find the threads before editing anything.
2. **Remove the noise**: fillers (um, uh, like, you know, sort of, I mean),
   false starts, repeated words, and self-corrections. Keep the corrected
   version, not the first attempt: "Tuesday, no, Wednesday" becomes
   "Wednesday". A sentence that trails off stays unfinished or ends in
   `[?]`; never complete it with words they did not say.
3. **Keep the voice.** Keep their word choices, their phrases, their humor,
   and their hedges when the hedge carries meaning ("I'm not sure, but").
   Fix grammar only where it gets in the way of reading. Do not make casual
   speech formal.
4. **Group the thoughts.** Pull scattered mentions of the same idea together
   under a short heading. Keep the order within a group when it shows how the
   thinking developed.
5. **Fix likely transcription errors** only when the intended word is clear
   from context, and mark the change in a "Checked words" list. When unsure,
   keep the original and mark it `[?]`. If they switch languages, keep each
   part in the language it was spoken; translate only if asked.
6. **Keep every idea.** Tangents become short bullets under "Other thoughts",
   not cuts. Repetition collapses into one statement, keeping the clearest
   wording.
7. **List the tasks.** Anything that sounded like something to do ("I need
   to", "remind me to", "should probably") goes in a checklist at the end,
   in their words, with dates only if they said one. Relative times
   ("tonight", "tomorrow") are relative to the recording, not to today:
   keep their words, and add the date only when it is still ahead. An item
   about a different project or client gets a bracketed label
   ("(Kessler, separate topic)"), and you offer to file it in its own note.
   A "maybe" or "should probably" stays worded as a maybe in the list.
8. **Add a one-line gist** at the top so the note can be skimmed later.
   Date the title with the day it was recorded ("yesterday" means
   yesterday's date); use today only if they do not say.

## The format

```markdown
# [Topic in their words], [YYYY-MM-DD]

**Gist:** [One sentence]

## [Thread or idea]
[Cleaned sentences or bullets in the speaker's voice]

## [Thread or idea]
[...]

## Other thoughts
- [Tangent, kept short]

## Tasks
- [ ] [Task in their words] ([date if said])

## Checked words
- "[as transcribed]" read as "[likely word]"
```

## Example

Input: "ok so um, the thing about the garden, I think, like, we should move
the tomatoes to the, uh, south bed because they got no sun this year, like
none. and also, oh, I need to order seeds before, um, January, that's when
they sell out. what else. oh the compost bin is, it's falling apart. anyway.
tomatoes south bed, definitely, and maybe peppers next to them? yeah."

```markdown
# The garden, 2026-10-27

**Gist:** Move the tomatoes to the south bed for sun, maybe with peppers,
and order seeds early.

## Tomatoes and peppers
We should move the tomatoes to the south bed, because they got no sun this
year. Like, none. Tomatoes in the south bed, definitely, and maybe peppers
next to them.

## Other thoughts
- The compost bin is falling apart.

## Tasks
- [ ] Move the tomatoes to the south bed
- [ ] Order seeds before January (that's when they sell out)
```

## Pitfalls

- **Editing out the voice.** "Like, none" is them. Keep the emphasis that
  carries meaning; cut only the filler that does not.
- **Dropping tangents.** A side thought in a voice memo is often the thing
  they wanted to remember. Keep it, briefly.
- **Silently "fixing" words.** A misheard name changed without notice can
  become a wrong fact. List every correction.
- **Turning musings into commitments.** "Maybe peppers" stays a maybe.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. If the memo continues a topic they already have a note on, offer to add
it there instead.
