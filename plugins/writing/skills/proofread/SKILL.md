---
name: proofread
description: Proofreads a finished text for typos, grammar, punctuation, consistency, and formatting, fixing only errors, listing every fix, and flagging style questions. Use when someone asks to "proofread", "check my grammar", "spell check", "check for typos", "catch mistakes", "give it a final read", or is about to send, submit, or publish something.
---

# Proofread

Proofreading is the last pass, and its discipline is restraint. A proofreader
fixes what is wrong and leaves what is merely different from how they would
write it. The author has already made the style choices; the proofreader's job
is to make sure nothing embarrassing goes out: a misspelled name, "their" for
"there", a figure that says 12 in one paragraph and 21 in the next, a heading
in a different case from its siblings.

Every change is listed, so the author can accept or reject each one. Anything
that is a matter of taste (a long sentence, a word that might be better) goes
in a separate list of questions, unchanged in the text.

## When to use it

- A document is finished and about to be sent, submitted, or published.
- A cover letter, application, report, post, or email that must be clean.
- After an edit, to catch errors the edit introduced.

If the text still needs cutting, use `tighten-prose`. If it needs restructuring,
use `developmental-edit`. For a rewrite into simpler words, use
`plain-language`. Proofreading comes after all of those.

## What to ask for

- **The text.**
- **The style conventions**, if any: American or British spelling, a house
  style guide (AP, Chicago), serial comma or not. Default: infer from the
  text. If it uses "color" and the serial comma consistently, keep both;
  correct only the inconsistencies. If two conventions are mixed with no
  clear majority, follow the one the audience suggests (British for a UK
  reader) and say so under Consistency choices. Spelling inside a
  quotation keeps the speaker's form and does not count toward the majority.
- **Anything unusual on purpose**: invented words, brand spellings, quoted
  material with original errors.

Do not ask more. Start.

## How to do it

1. **Read once for meaning** without changing anything, so you know what the
   text intends. Note names, numbers, and terms as they first appear; they set
   the standard for consistency.
2. **Spelling and typos.** Misspellings, doubled words ("the the"), missing
   words, homophones (its and it's, their and there, affect and effect,
   complement and compliment, principal and principle, discreet and discrete).
   Spell-checkers miss real words in the wrong place; read for those.
3. **Grammar.** Subject-verb agreement (especially with a long phrase between
   them), pronoun agreement and unclear antecedents, dangling modifiers, tense
   shifts, "fewer" and "less", "who" and "whom" only if the register is formal.
4. **Punctuation.** Comma splices, missing commas after long introductory
   clauses, apostrophes in plurals ("the 1990's"), mismatched quotation marks
   and parentheses, punctuation inside or outside quotes per the text's
   convention, stray double spaces.
5. **Consistency.** Build a quick list as you go and check every instance:
   - Names and titles spelled the same way every time.
   - Numbers: figures that should match do match; numerals versus words
     follow one rule; units and currency formatted the same way.
   - Dates in one format.
   - Capitalization of headings (title case or sentence case, not both) and
     of terms ("Board" and "board").
   - Spelling variants ("email" and "e-mail", "OK" and "okay").
   - List punctuation and parallel grammar in bulleted lists.
6. **Formatting.** Broken links or Markdown, heading levels that skip, numbered
   lists that restart, inconsistent spacing, stray formatting characters.
7. **Change only errors.** If a sentence is correct but clumsy, leave it and
   add a style question. Do not rephrase, reorder, or "improve". A form
   used once ("November 14th", "9am") has nothing to be inconsistent with;
   if it is an accepted style, leave it and do not list it. Skip questions
   about choices the author plainly made (a short form in a subject line).
8. **Facts are not yours to fix.** If a figure looks wrong (a total that does
   not add up, a date that conflicts), flag it as a question. Do not change it.
9. **Report.** Give the corrected text, then a numbered list of fixes, then
   the style questions. Every change, including a consistency change, is a
   numbered fix, one change per fix; nothing left alone goes in Fixes.
   Consistency choices only names the form you kept, one line each,
   pointing at its fixes.

## The format

```markdown
## Corrected text
[The full text with only errors corrected]

---

**Fixes** ([count])
1. [Location, e.g. para 2]: "[before]" to "[after]" ([reason, e.g. homophone])
2. [...]

**Consistency choices**
- [e.g. "email" throughout (fix 3)]

**Questions (not changed)**
- [Location]: [Possible issue in style or fact, and why you did not change it]
```

## Example

Input: "Dear Ms. Okafor, Thank you for meeting with me on Tuesday. Its been
great to learn more about the role, and I'm excited about the teams plans for
2027. As I mentioned, I led a team of 12 engineers at Brightline, where we
cut costs by 30%. Our team of twelve engineers also shipped the new billing
system, which was a huge, huge project. I look forward to hearing from you.
Best regards, Sam Ortiz"

```markdown
## Corrected text
Dear Ms. Okafor,

Thank you for meeting with me on Tuesday. It's been great to learn more about
the role, and I'm excited about the team's plans for 2027. As I mentioned, I
led a team of 12 engineers at Brightline, where we cut costs by 30%. Our team
of 12 engineers also shipped the new billing system, which was a huge, huge
project.

I look forward to hearing from you.

Best regards,
Sam Ortiz

---

**Fixes** (4)
1. Para 1: "Its" to "It's" (contraction of "it has").
2. Para 1: "teams plans" to "team's plans" (possessive).
3. Para 1: "twelve" to "12" (matches the earlier "12 engineers").
4. Layout: greeting, closing, and signature on their own lines.

**Consistency choices**
- Numerals for "12 engineers", as first written (fix 3).

**Questions (not changed)**
- "huge, huge project": the repetition may be deliberate emphasis. In a
  formal letter, one "huge" (or a specific measure of size) may read better.
- "a team of 12 engineers" appears twice in a row. Intentional?
```

## Pitfalls

- **Editing instead of proofreading.** Rewording a correct sentence is not a
  fix. It belongs in the questions list, if anywhere.
- **Silent changes.** Every change goes in the list, even a comma.
- **"Correcting" a deliberate choice.** A fragment for effect, a brand's
  lowercase name, dialect in a quote. When in doubt, ask.
- **Fixing facts.** A number that looks wrong is a question for the author.
- **Imposing a different convention.** If the text consistently uses British
  spelling or no serial comma, follow it unless asked to change.
- **Enforcing myths.** A split infinitive, a sentence ending in a
  preposition, or one starting with "And" or "But" is not an error. Leave
  them, and do not list them as questions either.
- **Missing the consistency pass.** Most errors that survive spell-check are
  inconsistencies between two correct-looking spellings or numbers.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app. If the original came from a note, offer to replace its text only after the
person approves the changes, or to save the result as a new version beside it.
