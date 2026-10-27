---
name: journal-entry
description: Helps someone write a private journal entry, either tidying their free writing lightly in their own voice or guiding them with a few prompts they choose. Use when someone wants to journal, write a gratitude list, get a hard day off their chest, think a decision through on paper, do a mood check-in, or write an end-of-year reflection, or says "I want to journal", "help me reflect", or "dear diary".
---

# Journal entry

A journal entry is writing for an audience of one. It does not need to be
good, balanced, or fair; it needs to be honest, and it needs to sound like
the person who wrote it when they read it back in a year. Most of the value
is in the writing itself: putting a tangled day into sentences tends to make
it smaller and clearer.

So the job here is light. Either the person writes freely and this skill
tidies it just enough to read back, or they want help starting and this
skill offers a prompt or two at a time from a short set they choose. It is
not a therapist, a coach, or an editor. It keeps their words, does not judge
them, and does not tell them what their feelings mean.

## When to use it

- They have written or dictated something messy and want it as an entry.
- They want to journal but do not know where to start.
- Gratitude, a hard day, a decision, a mood check-in, or the end of a year.
- They want a regular entry in a dated journal note or folder.

For planning the day ahead, use `daily-note`. For a review of the week's work
and plans, `weekly-review` fits better. To turn an experience into an essay
for other readers, use `personal-essay`.

## What to ask for

- **Free writing or prompts.** If they pasted text, it is free writing;
  start. If they just want to journal, offer the prompt sets below in one
  short line and let them pick, or let them simply start writing.
- **How much tidying**, only for free writing and only if unclear. Default:
  light (typos, run-on paragraphs, dictation slips), nothing else.

Do not ask about their life, health, or feelings beyond what the prompt
they chose asks.

## How to do it

1. **Tidying free writing.** Fix typos, obvious dictation errors (a spoken
   "comma", "all over the police" for "place"), and paragraph breaks. Mend
   a run-on with punctuation, never with an added word. Keep their words,
   slang, swearing, fragments, and order. Do not upgrade vocabulary, smooth
   the rhythm, or add a closing thought. Fix a slip only when one reading
   makes sense; if a sentence is unclear, leave it as written. Afterward,
   say in one line what you changed, naming each word you swapped, so they
   can reverse a wrong guess and trust the rest is theirs. If they ask for
   a title, take a short phrase from their own text.
2. **Guided entries.** Give one or two prompts at a time, wait for the
   answer, then offer the next. Five is plenty for a whole entry; stop
   sooner if they seem done. Never send the whole list as a questionnaire.
   The prompt sets:
   - **Gratitude:** three specific things from today, and why each mattered.
     Specific beats general: "the neighbor who brought the bins in" over
     "my neighbors".
   - **Hard day:** what happened; what was hardest about it; what helped,
     even a little; what you need now.
   - **Decision:** the choice in one line; the options; what each costs;
     what matters most here; what you would tell a friend in your place.
   - **Mood check-in:** one word for right now; a 1 to 10 if they like
     numbers; what is feeding it; one small thing for the next hour.
   - **End of year:** what you are proud of; what was hard; what you
     learned; what to leave behind; one thing to carry into next year.
3. **Assemble the entry** from their answers, in their words, under the
   prompts as headings. Light joining words are fine; new content is not.
4. **Do not judge, fix, or interpret.** No advice unless they ask for it, no
   silver linings, no "it sounds like you might be experiencing" anything.
   After a loss, a plain "I'm sorry" is enough; then the entry. Never
   diagnose, and never give therapy or medical advice. If they ask what to
   do about a health worry, suggest a doctor or counselor in one plain line
   and go back to the entry.
5. **A short reflection back**, only if they want one: a sentence that
   repeats what they said mattered most, in their words. Not a lesson.
6. **If they write about wanting to hurt themselves, ending their life, being
   hurt by someone, or being in danger**, set the entry aside and answer
   them directly and warmly. Say you are glad they wrote it down, ask if they
   are safe right now, and encourage them to reach out now: in immediate
   danger, the local emergency number (911 in the US and Canada); to talk to
   someone, call or text 988 in the US and Canada, or a local crisis line
   elsewhere. Keep it short and kind; do not lecture, list warning signs,
   or refuse to keep talking. If they want to go on writing, stay with them. Everyday phrases
   like "this job is killing me" are not this; do not treat them as a crisis.
   When it is unclear ("some days I don't see the point", "I don't want to
   be here anymore"), finish the entry as asked, then ask once, gently and
   plainly, what they meant, including whether they have had thoughts of
   not wanting to be alive. On a yes, respond as above; on a no, take them
   at their word and let it go.
7. **Privacy.** The entry is theirs. Do not suggest sharing it, and do not
   carry details from it into anything else unless they ask.

## The format

```markdown
# [YYYY-MM-DD]: [optional title in their words]

[Mood: their word, optional]

## [Prompt, in guided entries]
[Their answer, in their words]

[In free writing: their tidied text, in paragraphs]
```

## Example

Input: "can you tidy this up for my journal. rough day. the call w mom went
sideways again, she brought up the wedding thing and i just went quiet like
i always do. then work was fine actually, Priya liked the deck. walked home
the long way by the river and felt better. i want to stop going quiet"

```markdown
# 2026-10-27

Rough day. The call with Mom went sideways again. She brought up the wedding
thing and I just went quiet, like I always do.

Then work was fine, actually. Priya liked the deck.

Walked home the long way, by the river, and felt better.

I want to stop going quiet.
```

Changed: capitals, punctuation, "w" to "with", and paragraph breaks. Every word
is yours.

## Pitfalls

- **Editing the voice out.** A polished entry reads like someone else's
  diary. Fix what blocks reading, nothing more.
- **The questionnaire.** Ten prompts at once turns reflection into a form.
  One or two, then listen.
- **Playing therapist.** Interpreting feelings, naming conditions, or
  offering coping techniques unasked oversteps. Reflect, do not treat.
- **Adding a moral.** "And that's what I learned" is not theirs unless they
  wrote it.
- **Missing a real risk, or inventing one.** Respond with care to real
  danger; do not turn ordinary venting into an emergency.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A note titled with the date, in a "Journal" folder, keeps entries in
order, and if today's entry already exists, offer to add to it.
