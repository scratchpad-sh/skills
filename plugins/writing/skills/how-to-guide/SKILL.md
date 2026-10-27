---
name: how-to-guide
description: Writes step-by-step instructions people can follow, with what you need first, one action per step, expected results, warnings up front, and troubleshooting. Use when someone asks to "write instructions", "a how-to", "a step-by-step guide", or "document this process", wants an SOP or standard operating procedure, or has notes on doing something and wants others to be able to repeat it.
---

# How-to guide

Instructions are read by someone in the middle of doing the thing, with their
eyes going back and forth between the page and the task. That reader needs
different writing from a reader who sits down to learn. They need to know
before they start what they will need. They need one action at a time, in the
order they will do it, so they can find their place again after looking away.
They need to know what success looks like after each step, so they can tell
whether to continue. And they need warnings before the dangerous step, not
after it.

Technical writers have long practice at this, and the conventions are worth
keeping even for a recipe, a home repair, or an office procedure. This skill
writes from the person's own knowledge of the process. Where a step is missing
or unclear in their notes, it asks rather than guessing, because a guessed step
in instructions is a step someone will follow.

## When to use it

- Documenting a process for a team: onboarding, a monthly report, a release.
- Instructions for a customer, a client, a family member, or a future self.
- Setting up software, a device, or an account.
- A home, garden, or craft procedure someone wants to share.

For a reusable checklist of things to verify, use `checklist-maker`. For a blog
post that tells the story of how something was done, use `blog-post`. For
handing over ongoing work, use `handoff-notes`. For a recipe specifically,
`recipe-card` has the conventions.

## What to ask for

- **The process**, in any form: notes, a voice memo, a list of commands, or a
  description of doing it once.
- **Who will follow it** and what they already know. Default: someone capable
  who has never done this task.
- **The setting**: which version, device, or system, if it matters.

If a step in their notes is ambiguous ("set up the thing"), ask about it
specifically rather than writing around it. Ask about at most three gaps at
once, the ones that would stop the reader, and draft the rest with
`[NEEDS: what is missing]` in place.

## How to do it

1. **State the result in the title and first line.** "Set up a shared family
   calendar" and "When you finish, everyone will see each other's events on
   their phones."
2. **List prerequisites before step 1.** What they need (tools, accounts,
   access, files, materials), what must already be true, and roughly how long
   it takes. Nothing should send the reader away halfway through to get
   something.
3. **Write numbered steps, one action each.** Start each with a verb in the
   imperative: "Open", "Click", "Pour", "Tighten". If a step has "and then",
   split it. Five to fifteen steps is typical; more than about fifteen, group
   them under subheadings for each phase. When the steps differ by platform or
   case (Mac and Windows, new and returning users), give each case its own
   short section rather than an "if" in every step. Notes often list steps
   out of order; put them in doing order and tell the person what moved.
4. **Put the condition before the action.** "If the light is red, unplug the
   router" not "Unplug the router if the light is red." The reader acts on the
   first words they read.
5. **Name what they will see.** After any step where it is not obvious, add the
   expected result: "A green check appears next to the file name." This is how
   the reader knows they are on track.
6. **Put warnings before the step they apply to.** "Warning: this deletes all
   local files. Back up first." comes before the step that deletes, never
   after. Keep warnings for real risks: data loss, injury, cost, things that
   cannot be undone. Too many warnings and readers skip them all. A check
   that can end the procedure gets its own step starting with the condition
   and "stop": "If it reads 40 or over, stop and call Dana."
7. **Use exact names.** Button labels, menu paths, file names, and settings
   exactly as the reader will see them, in bold or code formatting. Menu paths
   with a separator: **Settings > Privacy > Location**.
8. **Keep explanation out of the steps.** If the reader needs to know why,
   put one short sentence after the step, or a note at the end. Steps are for
   doing.
9. **Add troubleshooting.** The two to five things most likely to go wrong,
   each as the symptom the reader sees, then the fix. Use only problems the
   person knows about or that follow directly from the steps.
10. **Walk through it as the reader.** Start from nothing but the
    prerequisites and follow each step literally. Any place you would need
    to guess is a gap: mark it `[NEEDS: what is missing]` and ask.

## The format

```markdown
# [Do the task]

[One line: what you will have when you finish.]

**You'll need**
- [Tool, access, file, or material]
**Before you start:** [What must already be true]
**Time:** [About how long]

## Steps
1. [Verb + one action, with exact names in bold.]
   You should see: [expected result]
2. [Action.]

> **Warning:** [Risk.] [What to do first.]

3. [The risky action.]

## If something goes wrong
- **[Symptom the reader sees]:** [Fix]
- **[Symptom]:** [Fix]

## Notes
- [Why a step matters, or an optional variation]
```

## Example

Input: "how to reset the office printer when it jams. open front panel, pull
out the drum (green handle), remove paper slowly, dont touch the shiny roller,
put drum back, close, it reboots. if it still says jam check the back tray."

```markdown
# Clear a paper jam in the office printer

When you finish, the jam is cleared and the printer has rebooted.

**You'll need:** [NEEDS: anything besides your hands?]
**Time:** [NEEDS: about how long]

## Steps
1. Open the front panel.
2. Pull out the drum by its **green handle**.

> **Warning:** Do not touch the shiny roller inside. [NEEDS: why (damage to
> the roller, or is it hot?), so people take it seriously]

3. Pull the jammed paper out slowly.
4. Put the drum back in.
5. Close the front panel.
   You should see: the printer reboots on its own.

## If something goes wrong
- **It still says "jam" after rebooting:** check the back tray for paper.
  [NEEDS: how to open the back tray]
```

## Pitfalls

- **Two actions in one step.** "Open the panel and remove the drum" makes the
  reader lose their place. Split it.
- **Warnings after the step.** By the time the reader sees it, they have done
  the damage. Always before.
- **Vague references.** "Click the button" when there are three. Use the exact
  label.
- **Explaining inside steps.** Background in the middle of an action slows the
  reader down. Keep the why short, or move it to the notes.
- **Guessing missing steps.** A plausible invented step is worse than a gap.
  Mark `[NEEDS: ...]` and ask.
- **Secrets in the guide.** Codes and passwords get copied and forwarded.
  Say where to find them, never what they are.
- **No sign of success.** Without "you should see", a reader who went wrong at
  step 3 finds out at step 9.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app. A title that starts with the task ("Clear a printer jam") makes the guide
easy to find.
