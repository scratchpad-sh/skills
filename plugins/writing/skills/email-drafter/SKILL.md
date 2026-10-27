---
name: email-drafter
description: Drafts emails that get answered, with the ask in the first two lines, context after, one clear next step, and a tone that fits the relationship. Use when someone says "write an email to", "help me reply to this", "draft a follow-up", "how do I say this politely", or needs to ask for something, decline, apologize, or chase an answer by email.
---

# Email drafter

Most email is read on a phone, in a preview pane, between other things. The
reader decides from the subject line and the first two lines whether to act
now, act later, or never. So an email that wants an answer has to put the
answer it wants at the top. Context goes after the ask, for the reader who
needs it, rather than before it, where it delays every reader.

The second job is tone, and tone comes from the relationship: a first email to
a stranger, a quick one to a close colleague, and a hard message to a client
are different emails even with the same ask. This skill drafts for both: what
the email must accomplish and who is reading it.

## When to use it

- Asking for something: a meeting, a decision, a favor, an introduction,
  payment.
- Replying to a pasted thread.
- Following up on an unanswered email.
- Hard emails: saying no, delivering bad news, apologizing, pushing back.
- Cold outreach to someone who does not know the writer.

For a regular update to many subscribers, use `newsletter-issue`. To pull the
action items out of a long thread, use `action-items`. For a status update
after a meeting, `meeting-notes` may produce the recap to send. To change the
tone of text already written, rather than draft a new email, use
`tone-rewrite`.

## What to ask for

- **What the email needs to achieve**: the one thing the reader should do,
  decide, or know.
- **Who the reader is** and the relationship (manager, client, stranger,
  friend), plus anything sensitive in it.
- **For replies, the thread**, pasted in full.
- **Facts the email depends on**: dates, amounts, names, attachments.

Default tone: friendly and direct, slightly more formal than the writer's
messages to friends. If they gave you the thread and a one-line goal, start.

## How to do it

1. **Write the ask first, in one sentence.** "Could you approve the revised
   budget by Thursday?" If you cannot write it, the email is not ready; ask
   the person what they want to happen.
2. **Write the subject line from the ask.** Specific and action-shaped:
   "Approval needed by Thu: revised Q4 budget" beats "Budget". For a reply,
   keep the thread's subject unless the topic has changed.
3. **Open with the ask or the answer.** In the first two lines. A greeting and
   one line of warmth are fine before it; three paragraphs of background are
   not.
4. **Add only the context the reader needs to act.** Why, what changed, and
   the one or two facts that matter. Anything else is an attachment or a link.
5. **Make the next step concrete.** One action, with a date if there is one:
   "If it looks right, a quick yes is all I need." Make it easy: offer two
   specific times instead of "let me know when works".
6. **Match the tone to the relationship.**
   - **Upward or to clients:** courteous, brief, confident. No over-apology.
   - **To peers:** direct and warm.
   - **To strangers:** say who you are and why them, in one line each, and
     make the ask small.
   - **Bad news or no:** say it plainly in the first lines, give the reason
     briefly, offer what you can instead. Do not bury the no.
   - **Apology:** name what went wrong, take responsibility once, say what
     happens next. No excuses after the apology.
   - **Replying to anger:** do not match the heat or rebut line by line.
     Name the specific problem in their terms, say what happens next and
     when, and correct a factual error once, calmly. Leave out anything the
     writer would regret seeing forwarded.
   - **Several at once** (an angry reader, an apology owed, and a no): own
     the problem first, then the next step, then the no with its reason.
7. **For replies:** answer every question asked in the thread, in the order
   asked, or say when you will. Quote or number them if there are several.
   Do not restate the whole thread back.
8. **For follow-ups:** assume good faith, restate the ask in one line, and make
   replying easier than last time (a yes or no question, a deadline).
9. **Cut.** Remove "I hope this email finds you well", "just checking in",
   "sorry to bother you", and "please don't hesitate to reach out" unless the
   writer's voice uses them. Most emails should fit on a phone screen.
10. **Never invent facts, commitments, or dates.** If the email needs a date
    the person did not give, mark `[NEEDS: date]`. Never promise on their behalf.
    If a line you wrote commits the writer to anything they did not say (a
    time, a role such as "I'll be your contact", an offer), list it under
    **Needs from you** as `[NEEDS: confirm ...]` so they confirm or cut it.

## The format

```markdown
**Subject:** [Specific, action-shaped]

[Greeting],

[The ask or the answer, in one or two sentences.]

[Context the reader needs to act, two to four sentences.]

[The next step, concrete and easy.]

[Sign-off],
[Name]

---

**Alternatives**
- [Option, e.g. a shorter version, or a warmer or firmer tone]

**Needs from you**
- [NEEDS: each item to fill in or confirm]
```

## Example

Input: "Need to email my landlord, Mr. Haddad. Kitchen faucet has been leaking
for 2 weeks, I texted him on the 10th, no reply. Want it fixed this week. I'm
home Tue and Thu afternoons. Want to stay polite, we get along fine."

```markdown
**Subject:** Kitchen faucet leak: could someone come Tue or Thu?

Hi Mr. Haddad,

Could you send someone to fix the kitchen faucet this week? It has been
leaking for two weeks now.

I texted about it on the 10th but think the message may have been missed.

I'm home Tuesday and Thursday afternoons, so either works for a visit. Just
let me know which day.

Thanks,
[Name]

---

**Alternatives**
- Firmer, if there is still no reply in a few days: open with "I'm following
  up on the kitchen leak I reported on the 10th and by email on [NEEDS: date]."

**Needs from you**
- [NEEDS: date] of your email, if you use the firmer version
- [NEEDS: confirm "the 10th" is clear without the month]
```

## Pitfalls

- **Burying the ask.** If the request is in the last paragraph, many readers
  never reach it. Move it up.
- **Several asks in one email.** The reader answers the easiest one. If there
  are several, number them, or send separate emails.
- **Vague next steps.** "Let me know your thoughts" gets no answer. Ask a
  question the reader can answer in one line.
- **Over-apologizing.** One apology, when it is owed. "Sorry to bother you"
  makes a reasonable ask sound like an imposition.
- **Promising for the writer.** Never add commitments, discounts, or dates
  they did not give you.
- **A wall of text on a phone.** Short paragraphs, white space, and links
  instead of pasted detail.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app. If an email tool is connected, offer to create the email as a draft there,
never to send it.
