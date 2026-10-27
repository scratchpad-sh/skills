---
name: songwriting-notebook
description: Captures a song idea as a working page with title, hook, lyric drafts, chords and key, structure, tempo and feel, reference tracks, and open questions. Use when a songwriter or musician has a voice memo, a lyric fragment, a chord progression, or a half-finished song and wants it written down, organized, or picked back up later.
---

# Songwriting notebook

A songwriting notebook page is where a song lives between the moment it shows
up and the moment it is finished, which can be weeks or years. Ideas arrive in
pieces: a title on the train, a chorus melody hummed into a phone, a chord
change found while noodling. The page collects those pieces in one place and
names what each one is (a hook, a verse draft, a progression), so the next time
the writer sits down, the song is waiting instead of scattered.

Two habits make the page useful. Every lyric draft is kept, dated or numbered,
because a discarded line from draft 2 often turns out to be the right one. And
the open questions are written down, because knowing what the song still needs
(a bridge, a second verse that moves the story, a better last line) is what
gets it finished.

## When to use it

- A voice memo or lyric fragment that needs to be written down before it is
  lost.
- Picking an old idea back up.
- Organizing a half-written song before a co-write or a session.
- Keeping a song bank where each idea has the same shape.

For practice on songs already written, use `practice-log`. For story notes
behind a concept album or a musical, use `story-bible`. For a quick cleanup
of a rambling memo, use `voice-memo-cleanup`.

## What to ask for

- **The idea**: lyrics, a memo transcript, chords, or a description of the
  melody.
- **Working title**, if they have one. Default: use the strongest line from
  the lyrics as a working title, marked "working".
- **Key, tempo, and chords**, if known. Default: record what they give; never
  work out a key or chords they did not state.

Do not ask anything else first. A song idea is fragile; get it down, then list
what is missing.

## How to do it

1. Head the page with the **working title**, the date, and the status (seed,
   in progress, finished draft, demoed). In a co-write, list the writers, and
   mark a line or idea with its author's name when they say who brought it.
2. Write the **hook**: the line or phrase the song is built around, in the
   writer's exact words, and where it sits (chorus, title line, riff). If there
   is a melodic or instrumental hook, describe it as they did.
3. Write a one-line **what it's about**: the situation, the feeling, or the
   story, from the writer's words. This keeps later drafts honest. If they
   have not said, write `[?]` rather than reading it off the lyrics.
4. Write the **lyrics** as drafts, labeled by section (Verse 1, Chorus, Bridge).
   Keep every draft the writer gave. Put alternative lines under the line they
   would replace, marked "alt". Keep spelling and slang exactly as written.
   On an existing page, add new lyrics as the next draft of that section
   ("Chorus, draft 2, [YYYY-MM-DD]") above the old one; never overwrite. If they
   ask for help with lines, put your ideas under a separate "Suggestions"
   heading, never in the lyrics.
5. Record **music**: key, chords per section in the order played (with bars
   per chord if given), capo, tuning, time signature, and any notes on melody
   ("chorus jumps up an octave on 'gone'"). When a key or progression
   changes on an existing page, add the new one dated and keep the old.
6. Write the **structure** as a sequence (V1, Pre, Ch, V2, Ch, Br, Ch), marking
   sections that do not exist yet.
7. Record **tempo and feel**: BPM if given, plus words for the groove (half
   time, shuffle, straight eighths, laid back) and the arrangement idea.
8. List **reference tracks** they mention, and what each is a reference for
   (the drum feel, the vocal delivery, the chord color). Never add references
   of your own as if they had chosen them; offer suggestions separately,
   marked `(proposed)`.
9. List **open questions**: what each unfinished section needs, rhymes that
   feel forced, a line that says the same thing twice.
10. Record the **memo or file** names where the melody lives.

## The format

```markdown
# [Working title] (working)
[YYYY-MM-DD] · Status: [seed / in progress / finished draft / demoed] · Writers: [names, if a co-write]

**Hook:** "[exact words]" · [where it sits]
**About:** [one line]

## Lyrics
### [Section]
[Line]
[Line]
  alt: [alternative]

## Music
- Key: [key] · Capo: [fret] · Tuning: [tuning] · Time: [time signature]
- [Section]: | [chord] | [chord] | [chord] | [chord] |
- Melody notes: [how the melody moves]

## Structure
[V1] [Ch] [V2] [Ch] [Br?] [Ch]

## Tempo and feel
- [BPM] · [groove words] · [arrangement idea]

## References
- [Artist, "Song"]: for [what]

## Open questions
- [?] [What the song still needs]

## Files
- [Memo name or location]
```

## Example

Input: "voice memo 'porch idea 3'. chorus: 'you left the porch light on / like
you knew I'd find my way back home'. maybe 'like you knew I wasn't gone'. G C
Em D in the chorus, capo 2. slow, like 70, brushes. kind of a Gillian Welch
vibe. song about coming home after a long time away. no verses yet"

```markdown
# You Left the Porch Light On (working)
2026-10-27 · Status: seed

**Hook:** "you left the porch light on" · chorus, first line
**About:** coming home after a long time away

## Lyrics
### Chorus
You left the porch light on
Like you knew I'd find my way back home
  alt: Like you knew I wasn't gone

### Verse 1
[not written]

## Music
- Capo: 2 · Key: [?] (not stated)
- Chorus: | G | C | Em | D | (shapes, capo 2)

## Structure
[V1?] [Ch] [V2?] [Ch]

## Tempo and feel
- About 70 BPM · slow · brushes

## References
- Gillian Welch: for the overall feel

## Open questions
- [?] Which chorus line: "find my way back home" or "wasn't gone"?
- [?] Verse 1: where has the singer been, and why come back now?

## Files
- Voice memo "porch idea 3"
```

## Pitfalls

- **Polishing the lyrics uninvited.** Record the writer's words. Suggest
  changes only when asked, and keep them separate as "suggestions".
- **Throwing away old drafts.** Keep every version.
- **Guessing the key from chord shapes with a capo.** State what they gave and
  mark the key `[?]` unless they said it.
- **References with no reason.** Say what each one is a reference for.
- **No open questions.** The list of what is missing is what gets a song
  finished.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A "Songs" folder with one note per song, titled by working title, makes a
song bank that is easy to revisit.
