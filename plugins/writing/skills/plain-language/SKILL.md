---
name: plain-language
description: Rewrites text in plain language, answering the reader's question first, with short sentences, common words, and jargon defined or cut, keeping every fact. Use when someone asks to "make this plain English", "simplify this", "make it easier to read", wants a lower reading level or grade level, or has a letter, policy, form, health or legal notice, or technical page that ordinary readers struggle with.
---

# Plain language

Plain language is writing a reader can understand the first time they read it,
find what they need in, and act on. It is not dumbing down. A plain-language
version of a lease or a discharge note keeps every obligation and every number;
it just stops making the reader dig for them. The plain-language movement in
government and law has argued this for decades, and the core moves are well
known: answer the reader's question first, use the words they use, and make
the person who does something the subject of the sentence.

This skill rewrites a text for its real reader and shows what changed. For
health, legal, money, or safety text, it clarifies what the source says. It
does not add advice, soften a requirement, or decide what the source "really
means" where the source is ambiguous.

## When to use it

- A letter, notice, policy, or form that confuses the people who receive it.
- Health information, consent forms, or care instructions for patients.
- Legal or contract text someone wants to understand, or to explain to others.
- Technical documentation read by non-specialists.
- Anything written by experts for a general public.

To cut length without changing register, use `tighten-prose`. For step-by-step
instructions, `how-to-guide` builds them properly. For a short version of a
long text, use `summary-writer`.

## What to ask for

- **The text.**
- **The reader.** Who receives it, and what they are trying to do when they
  read it (pay a bill, decide on a treatment, know whether they are covered).
  Default: an adult reading quickly, maybe stressed, maybe in a second language.
- **What must not change.** Legal wording that must stay verbatim, required
  disclosures, defined terms. Default: keep every fact, number, date, and
  obligation; rewrite only the wording around them.

## How to do it

1. **Find the reader's question.** What does the reader most need to know?
   Usually: what is this, what do I have to do, by when, and what happens if I
   do not. Put the answer at the top, even if the original buries it on page
   two.
2. **Talk to the reader.** Use "you" for the reader and "we" for the sender.
   "Applicants must submit" becomes "You must send us".
3. **Make sentences active, with a real actor.** "The form must be submitted"
   hides who submits it. "You must send the form" does not. Keep the passive
   only when the actor is unknown or truly does not matter.
4. **One idea per sentence.** Aim for an average of 15 to 20 words, with
   variety. Break a sentence at each "which", "and", or semicolon that starts a
   new idea.
5. **Use common words.** "Use" not "utilize", "about" not "regarding", "end"
   not "terminate", "before" not "prior to", "if" not "in the event that". Turn
   nominalizations back into verbs: "make a determination" becomes "decide".
6. **Handle jargon deliberately.** For each technical term ask: does the reader
   need this word later (on a form, from a doctor, in a contract)? If yes,
   define it the first time in plain words and keep using it. If no, replace
   it. Never use two different words for the same thing.
7. **Show structure.** Headings phrased as the reader's questions ("What do I
   need to bring?"), numbered lists for steps, bullets for options, and a
   table when the reader compares options. Keep conditions before
   consequences: "If you miss the deadline, we will close your claim."
8. **Keep every fact.** Check each number, date, amount, deadline, condition,
   and exception against the original, in headings and the title too: "may
   shut off" never becomes "will". Plain is never less accurate.
   Text that must stay verbatim (a required disclosure, a defined term, a
   legal clause) stays word for word, set apart, with a plain explanation
   after it labeled as an explanation.
9. **Flag what you cannot resolve.** If the original is ambiguous (it could
   mean two things), do not choose. Mark it `[?]` and say what needs checking
   with whoever wrote it. A cautious reading offered meanwhile ("apply by the
   earlier date") is marked `(proposed)`.
10. **Show the changes.** After the rewrite, list the main changes and anything
    that must be checked by an expert before use.

## The format

```markdown
# [Title phrased for the reader, e.g. "Your new parking permit"]

[One or two sentences: what this is and the main thing the reader must know
or do.]

## [Reader's question, e.g. "What do I need to do?"]
1. [Step, one action]
2. [Step]

## [Reader's question, e.g. "What if I miss the deadline?"]
[Short answer, condition first]

## [Term the reader needs], explained
[Plain definition]

---

**What changed**
- [Main change, e.g. moved the deadline to the first line]
- [Jargon replaced or defined]

**Check before using**
- [?] [Ambiguity or wording that needs the author or an expert]
```

## Example

Input: "Pursuant to Section 4.2, in the event that the Tenant fails to remit
payment of rent within five (5) days subsequent to the due date, a late fee
in the amount of $50 shall be assessed and shall become immediately due and
payable."

```markdown
# Late rent

If you do not pay your rent within 5 days after the due date [?], you will
owe a $50 late fee. You must pay the fee right away. (Lease section 4.2)

---

**What changed**
- Put the condition and the cost in the first sentence.
- "Tenant" became "you"; "remit payment" became "pay".
- "Shall be assessed and shall become immediately due and payable" became
  "you will owe... you must pay the fee right away."

**Check before using**
- [?] "Within five days subsequent to the due date": does day 5 count as late?
  The original does not say. Confirm with the landlord before relying on it.
```

## Pitfalls

- **Dropping a condition to make it shorter.** "Except on public holidays" is
  three words and may be the whole point. Shorter is not plainer if it is wrong.
- **Choosing a meaning for an ambiguous original.** Flag it instead. Guessing
  turns a clarity edit into a change of terms.
- **Replacing a term the reader will meet again.** If their doctor will say
  "biopsy", keep "biopsy" and explain it.
- **Synonyms for variety.** "Payment", "remittance", and "fee" in one notice
  read as three different things. Pick one word per thing.
- **Condescending tone.** Plain language is respectful. Do not add
  reassurance, exclamation marks, or "simply" and "just".
- **Treating it as advice.** For health, legal, or money text, the rewrite
  explains what the document says. Note that it is not professional advice
  when the stakes are high.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app. If the original came from a note, offer to replace its text only after the
person approves the changes, or to save the result as a new version beside it.
