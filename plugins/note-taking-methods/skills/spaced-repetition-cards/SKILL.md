---
name: spaced-repetition-cards
description: Turns notes into well-made flash cards, one fact per card with cloze deletions where they fit, as Q/A pairs and a tab-separated block for Anki. Use when someone wants flash cards, Anki or Quizlet cards, cards for spaced repetition, or to memorize material from their notes, such as facts for a test a few days away.
---

# Spaced repetition cards

Spaced repetition shows a card just before it would be forgotten, and each
successful recall pushes the next showing further out. Software like Anki
handles the schedule. What it cannot do is make good cards, and bad cards
are the main reason people give up: a card that asks three things at once,
or one that can be answered by recognizing its wording, gets failed or
passed for the wrong reasons until the deck feels like a chore.

This skill makes cards that work, following the rules experienced users
converge on, most clearly set out by Piotr Wozniak, the creator of
SuperMemo, as the minimum information principle: each card asks for one
small thing, and asks it in a way that makes the person actually retrieve
it.

## When to use it

- Someone has notes, a chapter, or a list and wants flash cards from it.
- They are learning vocabulary, terms, dates, formulas, or anatomy.
- They use Anki or another spaced repetition app and want an import file.
- They have cards that are not working and want them rewritten.

For self-test questions inside study notes, use `cornell-notes`. For a
summary to cram from, use `exam-revision-sheet`. For a vocabulary notebook,
use `language-learning-notebook`.

## What to ask for

- **The material**: notes, a chapter, a list, or existing cards to fix.
- **What they need to be able to do**: recall a definition, recognize a
  term, produce a word in another language, apply a formula. Default:
  infer from the material and say what you assumed.
- **The app.** Default: Anki-friendly output plus plain Q/A pairs that work
  anywhere.

## How to do it

1. Decide what is **worth a card**. Not every sentence in the notes is.
   Make cards for facts the person must recall, not for things they already
   know or can look up when needed. Understanding comes first; cards hold
   what is understood.
2. **One fact per card.** A card that asks for a list of five causes becomes
   five cards, or a cloze for each item in a short, fixed list. If the
   answer has an "and", consider splitting.
3. Choose the **card type**:
   - **Basic Q/A** for definitions, causes, and "why" questions.
   - **Cloze deletion** for facts inside a sentence, written
     `{{c1::hidden part}}`. Hide the key word or number, never a filler word.
   - **Reversed** (both directions) only for pairs the person must produce
     both ways, like vocabulary.
4. Write the **question so it has one right answer.** "What about
   mitochondria?" has many. "What process in the mitochondria makes most of
   a cell's ATP?" has one.
5. Keep **answers short**: a word, a number, a phrase. If the answer is a
   paragraph, the card is really several cards.
6. Add **context cues** where a question could be ambiguous, in a short
   prefix: "(Biology) ..." or "(French) ...".
7. Avoid **cards answered by their wording**: if the question contains the
   answer's first letters or a giveaway word, rewrite it.
8. Keep the facts exactly as the source has them. Never add facts to fill a
   deck. If a fact in the notes looks wrong or the notes contradict
   themselves, list it under "Check before carding" and make no card of it
   yet; a wrong card gets memorized.
9. Output the cards twice: as a readable list (Q/A, then Cloze) and as
   tab-separated blocks for import, one for Basic cards and one for Cloze.
   Each line is one card: front, a tab, back, a tab, tags (space-separated).
   A cloze line has the cloze text as its front and an empty back. Do not use
   tabs or line breaks inside a field; use `<br>` if a break is needed.
   For Quizlet or another app without cloze cards, turn each cloze into a
   Q/A card and give one block of front, a tab, and back, with no tags.

## The format

````markdown
# Cards: [Topic]
[YYYY-MM-DD] · [Source] · [Count] cards

## Q/A
1. **Q:** [Question]
   **A:** [Answer]

## Cloze
1. [Sentence with {{c1::hidden part}}]

## Check before carding
- [Fact that looks wrong or conflicts, and why]

## Anki import (Basic)
```
[Front]	[Back]	[tags]
```

## Anki import (Cloze)
```
[Text with {{c1::cloze}}]		[tags]
```
````

## Example

Input: "photosynthesis happens in chloroplasts. uses light, water, CO2.
makes glucose and oxygen. chlorophyll is the green pigment that absorbs
light."

````markdown
# Cards: Photosynthesis
2026-10-27 · Biology notes · 5 cards

## Q/A
1. **Q:** (Biology) In which organelle does photosynthesis happen?
   **A:** The chloroplast
2. **Q:** (Biology) What is the pigment that absorbs light for photosynthesis?
   **A:** Chlorophyll

## Cloze
1. Photosynthesis uses light, water, and {{c1::carbon dioxide}}.
2. Photosynthesis makes {{c1::glucose}} and {{c2::oxygen}}.

## Anki import (Basic)
```
(Biology) In which organelle does photosynthesis happen?	The chloroplast	biology photosynthesis
(Biology) What is the pigment that absorbs light for photosynthesis?	Chlorophyll	biology photosynthesis
```

## Anki import (Cloze)
```
Photosynthesis uses light, water, and {{c1::carbon dioxide}}.		biology photosynthesis
Photosynthesis makes {{c1::glucose}} and {{c2::oxygen}}.		biology photosynthesis
```
````

To import: in Anki, choose File, then Import, pick the file saved as `.txt`,
set the separator to Tab, choose the Basic or Cloze note type to match the
block, and map the last column to Tags. If any field uses `<br>`, tick
"Allow HTML in fields".

## Pitfalls

- **Lists on one card.** "Name the five causes" fails often and teaches
  little. Split, or use one cloze per item.
- **Cards for what is not understood.** Memorizing words for an idea that
  makes no sense yet is wasted reviews. Suggest understanding first.
- **Cloze on the wrong word.** Hiding "the" or "is" tests nothing. Hide the
  fact.
- **Ambiguous questions.** If two answers are right, the person will fail
  the card for the wrong reason. Add context or narrow it.
- **Too many cards.** Twenty good cards beat a hundred weak ones. Each card
  costs review time for months.
- **Tabs inside fields.** A stray tab shifts every column in the import.
  Check the TSV block before giving it.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. For import, the tab-separated block also needs to be saved as a plain
`.txt` file, since pasting into a notes app may turn tabs into spaces.
