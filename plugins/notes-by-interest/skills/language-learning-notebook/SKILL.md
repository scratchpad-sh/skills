---
name: language-learning-notebook
description: Keeps a language learner's notebook of vocabulary with example sentences, grammar patterns, mistakes they make, phrases heard in the wild, and review cues. Use when someone is learning a language and wants to organize new words from a lesson, class, app, show, or conversation, track their recurring mistakes, build a phrase list for a trip, or turn messy study notes into something they can review.
---

# Language learning notebook

A language notebook works best when it stores words the way they are used,
not as bare translations. Teachers and experienced learners agree on a few
habits: learn words in a sentence, record the parts that trip you up (gender,
irregular forms, the preposition a verb takes), keep a list of your own
mistakes, and note phrases heard from real speakers, because textbooks and
the street often disagree.

This skill turns lesson notes, app screenshots, or a list of words into
entries the learner can actually review, with cues for testing themselves.

## When to use it

- After a class, tutor session, or app lesson, to capture new material.
- After watching a show or talking with a native speaker, to keep phrases
  they heard.
- When a teacher's corrections keep repeating and the learner wants a
  mistakes list.
- Before a trip, to build a practical phrase list.
- When they ask for vocabulary notes, a grammar summary, or a phrasebook.

For turning entries into flash cards, use `spaced-repetition-cards`. For a single
lecture on grammar theory, `cornell-notes` may fit better.

## What to ask for

- **The target language and their native language.** Needed for glosses.
- **Their level.** Default: infer from the material (A1 to C2 if they use the
  CEFR scale).
- **The material**: words, sentences, corrections, screenshots, or notes.
- **Script preferences** for languages with more than one (romanization,
  furigana, pinyin with tone marks). Default: native script plus
  romanization for beginners, and the kana reading for any kanji.

If they gave words, start.

## How to do it

1. For each **vocabulary** item, record the dictionary form and the details
   that cause errors in that language: gender and article (German, French,
   Spanish), plural form, verb class or irregular stems, aspect pairs
   (Russian), measure words (Mandarin), tones, the preposition or case a verb
   takes ("se souvenir **de**"). Add part of speech and register (formal,
   slang, regional) where it matters.
2. Give each word an **example sentence**. Prefer the sentence the learner
   heard or was taught. If you write one, keep it at their level and mark it
   `(added)` so they know it is not from a teacher or native speaker. An
   unmarked sentence means it came from their material; no other label.
3. Write **grammar patterns** as a structure plus two short examples, not as
   rules in the abstract: "**ir a** + infinitive = going to: *Voy a comer.*"
   Note the exceptions they met.
4. Record **mistakes** in three columns: what they said, the correction, and
   why. Group repeating mistakes; a pattern like "uses *être* for *avoir*
   in passé composé" is worth more than ten individual fixes. Use only
   corrections they were given or that you are sure of.
5. Keep **heard in the wild** separate: phrases from real speakers, with
   where they heard them and what they think it meant. Mark meanings they
   are unsure of with `[?]` rather than guessing. Note register: what is
   normal in a bar may be rude at a bank.
6. Write **review cues**: native-language prompts that should produce the
   target phrase ("How do you say 'I've been here for two years'?"), and
   cloze sentences with the key word blanked.
7. Be careful with accuracy. If a gloss, gender, or form is uncertain,
   say so and suggest checking a dictionary; a wrong entry in a notebook gets
   memorized. If the learner's own note looks wrong, keep what they wrote,
   flag it, and give the likely correction; do not fix it silently or copy
   it as if it were right. Put the flag in the Details cell ("your note:
   i-adjective; likely na-adjective, confirm with your teacher (added)").

## The format

```markdown
# [Language] notebook: [Lesson, source, or date]
Level: [level] · [YYYY-MM-DD]

## Vocabulary
| Word | Meaning | Details | Example |
| --- | --- | --- | --- |
| [word] | [gloss] | [gender, plural, forms, case] | [sentence] ([translation]) |

## Grammar patterns
- **[Pattern]**: [meaning]
  - [Example] ([translation])
  - Exception: [note]

## Mistakes I make
| I said | Correct | Why |
| --- | --- | --- |
| [error] | [correction] | [rule or reason] |

## Heard in the wild
- "[Phrase]": [meaning as understood] ([where heard], [register])

## Review cues
- [Native-language prompt] → [target answer]
- [Cloze sentence with ___] → [missing word]
```

## Example

Input: "German lesson today. A2. der Schlüssel (key), pl. Schlüssel. sich
erinnern an + Akk. teacher corrected: I said 'ich habe nach Berlin gefahren',
should be 'bin'. heard on the tram: 'Na, alles klar?' i think = hey how's it
going"

```markdown
# German notebook: lesson
Level: A2 · 2026-10-27

## Vocabulary
| Word | Meaning | Details | Example |
| --- | --- | --- | --- |
| der Schlüssel | key | masculine; plural die Schlüssel | Wo ist mein Schlüssel? (Where is my key?) (added) |
| sich erinnern an | to remember | reflexive; *an* + accusative | Ich erinnere mich an den Tag. (I remember the day.) (added) |

## Mistakes I make
| I said | Correct | Why |
| --- | --- | --- |
| ich habe nach Berlin gefahren | ich **bin** nach Berlin gefahren | verbs of motion with no direct object take *sein* in the perfect (added) |

## Heard in the wild
- "Na, alles klar?": hey, how's it going? (on the tram, casual) [?] meaning
  as understood; confirm with teacher.

## Review cues
- I drove to Berlin. → Ich bin nach Berlin gefahren.
- Ich erinnere mich ___ den Tag. → an
```

## Pitfalls

- **Bare translations.** "Schlüssel = key" without gender or plural sets up
  errors later. Record what the language makes you know.
- **Unmarked invented examples.** Learners trust their notebook. Label
  sentences you wrote so real usage and illustrations stay distinct.
- **Mistakes listed one by one.** Group them into patterns; the pattern is
  what to practice.
- **Ignoring register.** Slang heard in a bar, written down without a note,
  ends up in a job interview.
- **Confident wrong glosses.** If unsure of a meaning or form, say so.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. Keeping "Mistakes I make" as one running note per language, rather than
per lesson, makes the patterns easier to see.
