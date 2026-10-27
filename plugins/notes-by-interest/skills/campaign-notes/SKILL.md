---
name: campaign-notes
description: Keeps tabletop RPG session notes and a running campaign log with NPCs, places, loot, quests and hooks, GM-only secrets, and a read-aloud recap. Use when a game master or player wants D&D session notes, a campaign log or journal, an NPC list, a quest or loot tracker, a "previously on" recap for next session, or to write up last night's game in Pathfinder, Call of Cthulhu, or any other system.
---

# Campaign notes

A campaign runs on memory, and memory is the first thing a table loses. By
session twelve nobody remembers the innkeeper's name, who carries the silver
dagger, or which hook the party promised to follow up. Good notes have two
layers: a short note per session, written soon after play, and a running log
(who, where, what, and what is still open) that each session updates.

A GM's notes hold what the players know and, kept apart, what they do
not; a player's hold only what their character knows. Either way they
record what happened at the table, never invented lore, names, or
numbers, because a made-up detail in the log becomes canon.

## When to use it

- Writing up a session from scribbles, a voice memo, or memory.
- Starting a campaign log, or rebuilding one from old session notes.
- Tracking NPCs, quests, loot, and experience or milestones over time.
- Preparing the recap to read at the start of next session.

For a novelist's world, `story-bible` fits better; for a real trip, `travel-journal`.

## What to ask for

- **The material**: notes, a recording summary, a chat log, or memory,
  plus the campaign log so far if one exists.
- **GM or player**, and if a player, which character. Default: infer from
  the notes ("I rolled" versus "they found"); ask if it is not clear.
- **The system**, only if it changes the terms (milestones or XP, sanity,
  stress, clocks). Default: use the words the notes use. If they pasted
  session notes, start.

## How to do it

1. **Recap in story order**, as short bullets: what the party did, chose,
   and found. Choices and consequences, not initiative order and damage
   totals. Keep good lines from the table if they wrote them down.
2. **NPCs met**: name, who they are, and their attitude toward the party
   (friendly, wary, hostile, unknown), plus what they want if the notes say.
   A forgotten name gets a description and `[?]`: "Old fisherman at the
   tavern [?]"; one spelled two ways keeps both, listed under Gaps. Never
   make up a name.
3. **Places**: new locations and anything learned about known ones.
4. **Loot and rewards**: item, who has it, properties only as stated, else
   `[?]`; coins and the split; experience or milestones exactly as awarded.
5. **Quests and hooks**: new, advanced, completed, and open (a thread the
   party noticed and has not followed), with who offered it and the reward.
6. **Party knows versus secrets.** For a GM, keep a separate **GM only**
   section for what the players have not learned: true motives, the twist,
   what is behind the door. A player's notes have no GM section; a theory
   goes under hooks as "the party suspects", never as fact, and their own
   character's secrets go in a **My character only** section kept out of
   anything shared with the table. Leave out anything a player learned out
   of character (a peek behind the screen), and say so in your reply, not
   in the note, where the table might later read it.
7. **Rulings**: the question, the ruling, and whether to check it later, so
   the same question gets the same answer next time. Give the rules as
   written only if asked, marked `(added)`, since editions differ.
8. **Next session**: prep the GM mentioned, players absent or joining, and
   a **"previously on" recap** to read aloud: four to six sentences, under a
   minute, spoken to the players, ending on where the last session stopped.
   It never includes anything from GM only or My character only. Mood in
   the wording is fine; a new fact is not. For a player, title it **Last
   time** and write it from their character's view, for their own reading.
9. **Update the campaign log**: one running note with the system, the
   party, and any table safety notes (lines and veils) the person gives at
   the top, then the same NPCs, Places, Quests and hooks, Loot, and Rulings
   sections, each entry tagged with the session it first appeared in
   ("S12"). Change statuses as play moves on (quest completed, NPC now
   hostile, item passed on). When this session contradicts the log (a name
   spelled two ways, a dead NPC who reappears), list it under Gaps rather
   than picking one. Unless they asked for the whole log, give only a short
   **Log changes** list; lasting numbers (Sanity, HP, level) go there too.

## The format

```markdown
# [Campaign]: Session [n], [real date]
[In-game date, if tracked] · Present: [players (characters)]

## Recap
- [What happened, in order]

## NPCs
- **[Name or description [?]]**: [who they are]. Attitude: [friendly,
  wary, hostile, unknown]. [Wants, if known]

## Places
- **[Place]**: [what was found or learned]

## Loot and rewards
- [Item]: [who has it]. [Properties, or [?]]
- [Coins and split] · [XP or milestone]

## Quests and hooks
- [ ] [Quest or hook]: [status, who offered it, reward promised]

## Rulings
- [Question]: [ruling]. [Check later, if said]

## GM only (or My character only, for a player)
- [Secret the players, or the rest of the table, do not know]

## Next session
- [Prep, absences]
**Previously on:** [Read-aloud recap]

## Gaps
- [?] [Gap or contradiction with the log]

## Log changes
- [Section]: [add / update] [entry] (S[n])
```

Leave out any section with nothing in it.

## Example

Input (GM): "sess 12. Bryn, Okoro, Vell reach Gullhaven. harbormaster Elsie
Vane, grumpy, wants smugglers gone, offers 100gp. fought 3 smugglers in the
fish cellar, found 40gp and a silver dagger, Okoro took it. old guy at the
tavern, forgot his name, says the lighthouse is haunted. SECRET Elsie takes
smuggler money. ruled Vell can draw a weapon while moving, check later.
milestone: level 4"

```markdown
# [?]: Session 12, [?] date
Present: Bryn, Okoro, Vell

## Recap
- In Gullhaven, harbormaster Elsie Vane offered 100 gp to be rid of the smugglers.
- Fought three smugglers in the fish cellar.

## NPCs
- **Elsie Vane**: harbormaster. Attitude: grumpy. Wants the smugglers gone.
- **Old man at the tavern [?]**: says the lighthouse is haunted.

## Places
- **Gullhaven**: arrived this session. Fight in a fish cellar there.

## Loot and rewards
- Silver dagger: Okoro. Properties [?]
- 40 gp from the cellar; split [?] · Milestone: level 4

## Quests and hooks
- [ ] Get rid of the smugglers: offered by Elsie Vane, 100 gp
- [ ] The haunted lighthouse (open hook)

## Rulings
- Drawing a weapon while moving: allowed for Vell. Check later.

## GM only
- Elsie Vane takes money from the smugglers.

## Next session
**Previously on:** You arrived in Gullhaven, where the harbormaster, Elsie
Vane, offered you a hundred gold to deal with the smugglers. In the fish
cellar you fought three of them and came away with forty gold and a silver
dagger. And an old man at the tavern told you the lighthouse is haunted.
```

## Pitfalls

- **Inventing the world.** A name, a stat block, or a bit of history that
  the GM never said becomes fact the moment it is in the log. Use `[?]`.
- **Secrets in the recap.** Check the read-aloud against GM only every time.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. A folder per campaign, with a note per session and one running log,
works well; if players can see the notes, keep GM only in a separate note.
