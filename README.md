# Scratchpad Skills

**<!-- count -->90<!-- /count --> free, open-source note-taking and writing skills for AI
assistants.** Cornell notes and the Zettelkasten. Recipe cards and birding
logs. Meeting notes, weekly reviews, and blog posts. Each one teaches your
assistant to do one kind of note or one kind of writing the way someone who
really knows it would.

Made by [Scratchpad](https://scratchpad.sh), the notes app where your next
great idea lands. The skills work with any assistant and any notes app, no
account needed. They are at their best when your assistant can save straight
into your notes, which is
[what Scratchpad's connector is for](#use-them-with-scratchpad).

```sh
npx skills add scratchpad-sh/skills
```

---

- [What a skill is](#what-a-skill-is)
- [Install](#install)
- [What is inside](#what-is-inside)
- [The catalogue](#the-catalogue)
- [How the skills are written](#how-the-skills-are-written)
- [Use them with Scratchpad](#use-them-with-scratchpad)
- [Make your own, or improve one](#make-your-own-or-improve-one)
- [License](#license)

## What a skill is

A skill is a short instruction file (a `SKILL.md`) that an AI assistant loads
when it is relevant. You do not call it by name. You ask the way you always
would, "can you turn these lecture notes into something I can study from?",
and the assistant notices it has a skill for that, reads it, and follows it.

Without a skill, an assistant asked for "Cornell notes" gives you something
that looks roughly right. With one, it knows that the cue column should hold
questions rather than headings, that the summary should connect ideas instead
of listing them, and that anything it adds from general knowledge must be
marked so you can tell what your professor actually said.

That is the difference this repo is for: the judgment calls that a
practitioner makes without thinking, written down so your assistant makes
them too.

Skills are an open format. These work in Claude (the apps and Claude Code),
and in other assistants that read `SKILL.md` folders, such as Codex, Cursor,
GitHub Copilot, and Gemini CLI. If your assistant has no skills support at
all, you can still paste a `SKILL.md` into a chat and say "follow this".

## Install

### Any assistant, with the skills CLI

```sh
npx skills add scratchpad-sh/skills
```

The [skills CLI](https://skills.sh) asks which assistants you use and which
skills you want, and puts them where each assistant looks.

Every skill is also listed on
[skills.sh](https://skills.sh/scratchpad-sh/skills), with a page of its own.

To install one skill, name it with `--skill`:

```sh
npx skills add scratchpad-sh/skills --skill cornell-notes
```

Repeat `--skill` to install a few:

```sh
npx skills add scratchpad-sh/skills --skill cornell-notes --skill study-guide
```

Every skill's name is in [the catalogue](#the-catalogue).

### Claude Code, as plugins

The repo is a Claude Code plugin marketplace with one plugin per collection,
so you can take the whole set or only the part you need.

```
/plugin marketplace add scratchpad-sh/skills
/plugin install note-taking-methods@scratchpad-skills
/plugin install notes-by-interest@scratchpad-skills
/plugin install everyday-notes@scratchpad-skills
/plugin install writing@scratchpad-skills
```

### The Claude apps (claude.ai, desktop, and mobile)

Each skill is attached as its own zip to the
[latest release](https://github.com/scratchpad-sh/skills/releases/latest).
Download the ones you want, then in Claude open **Settings**, find **Skills**,
and upload them. Skills you add there follow you to every Claude app.

### By hand

Copy a skill's folder into your assistant's skills folder. For Claude Code that
is `~/.claude/skills/` (for you) or `.claude/skills/` (for one project):

```sh
git clone https://github.com/scratchpad-sh/skills.git
cp -R skills/plugins/note-taking-methods/skills/cornell-notes ~/.claude/skills/
```

## What is inside

Four collections. Install one, or all of them.

**Note-taking methods.** The established ways to take notes, each explained
and applied to your material: Cornell notes, the Zettelkasten, evergreen
notes, outlines, mind maps, sketchnote plans, the charting, sentence, boxing,
and flow methods, progressive summarization, PARA, the Feynman technique,
SQ3R, rapid logging, QEC (question, evidence, conclusion) notes, and flash
cards that actually work.

**Notes by interest.** Notes shaped for what you do, with the fields a
practitioner actually records:

| If you are... | Try |
| --- | --- |
| A student | `study-guide`, `exam-revision-sheet`, `case-brief`, `lab-notebook` |
| A teacher or professor | `lecture-prep-notes`, `lesson-plan` |
| A researcher | `literature-notes`, `lab-notebook` |
| A photographer | `photo-shoot-log`, `location-scouting-notes` |
| A cook | `recipe-card`, `kitchen-test-log`, `meal-plan` |
| A botanist or gardener | `plant-field-notes`, `garden-journal` |
| A musician | `practice-log`, `songwriting-notebook` |
| A writer | `story-bible`, `scene-cards` |
| A developer | `dev-log`, `code-reading-notes`, `decision-record`, `bug-investigation-notes` |
| A math lover | `proof-notes`, `problem-solving-journal` |
| A reader, traveler, or learner | `reading-journal`, `travel-journal`, `language-learning-notebook` |
| Out in the field or under the stars | `birding-log`, `observing-log` |
| A taster, a family historian, or in training | `tasting-notes`, `family-history-notes`, `training-log` |
| At the table for a tabletop RPG | `campaign-notes` |

**Everyday notes.** The notes everyone keeps, and the upkeep that keeps them
useful: meeting agendas and meeting notes, one-on-ones, interviews, client
calls, notes from articles and podcasts, voice memo cleanup, daily notes,
journal entries, weekly reviews, inbox triage, tidying, titles and tags,
linking notes, note templates, checklists, project briefs, handoff notes,
pulling the action items out of anything, and answering questions from your
own notes.

**Writing.** Getting from notes to finished writing, then making it good:
notes to a first draft, outlining, essays, personal essays, blog posts,
newsletters, emails, how-to guides, persuasive pieces, fiction scenes, and
dialogue, plus titles and headlines, and summaries of anything long. Then the
editing passes: plain language, tightening, removing the tells of AI-written
prose, changing the tone, matching your own voice, a developmental edit, and a
final proofread.

## The catalogue

Every skill, generated from the files themselves.

<!-- catalogue:start -->
### Note-taking methods (17)

The established ways to take notes, from Cornell notes and the Zettelkasten to mind maps, charting, and the Feynman technique.

| Skill | What it does |
| --- | --- |
| [`boxing-notes`](plugins/note-taking-methods/skills/boxing-notes/SKILL.md) | Organizes notes with the boxing method, grouping related points into labeled boxes by theme so each box can be studied and reviewed on its own. |
| [`charting-notes`](plugins/note-taking-methods/skills/charting-notes/SKILL.md) | Turns notes or a reading into a comparison chart, with the things being compared as rows and the categories that matter as columns. |
| [`cornell-notes`](plugins/note-taking-methods/skills/cornell-notes/SKILL.md) | Turns a lecture, reading, or talk into Cornell notes, with cue questions, notes under each, and a summary at the bottom. |
| [`evergreen-notes`](plugins/note-taking-methods/skills/evergreen-notes/SKILL.md) | Writes evergreen notes, each titled with a claim, holding one concept, linked densely to other notes, and meant to be revised over time. |
| [`feynman-notes`](plugins/note-taking-methods/skills/feynman-notes/SKILL.md) | Runs the Feynman technique on a concept: a plain explanation for a beginner, the gaps it exposes, a return to the source, and a simpler second try. |
| [`flow-notes`](plugins/note-taking-methods/skills/flow-notes/SKILL.md) | Turns a lecture or reading into flow notes: concepts joined by labeled arrows that show causes, effects, and relationships, not a transcript. |
| [`mind-map-notes`](plugins/note-taking-methods/skills/mind-map-notes/SKILL.md) | Builds a mind map from a topic, notes, or a brainstorm, as a nested list with one central idea and branches, plus optional Mermaid mindmap code to draw it. |
| [`outline-notes`](plugins/note-taking-methods/skills/outline-notes/SKILL.md) | Turns a lecture, chapter, document, or talk into an outline, with main topics as headings and supporting points indented beneath them by level of detail. |
| [`para-organizer`](plugins/note-taking-methods/skills/para-organizer/SKILL.md) | Sorts notes and folders into Projects, Areas, Resources, and Archives, and proposes a move plan they approve before anything changes. |
| [`progressive-summarization`](plugins/note-taking-methods/skills/progressive-summarization/SKILL.md) | Distills a saved article or note in layers (trimmed passages, bold, highlights, and an executive summary) so it can be reread in seconds. |
| [`qec-notes`](plugins/note-taking-methods/skills/qec-notes/SKILL.md) | Turns readings into Question, Evidence, Conclusion notes: a question worth arguing, the evidence for and against, and a conclusion rated for strength. |
| [`rapid-logging`](plugins/note-taking-methods/skills/rapid-logging/SKILL.md) | Turns a day's jottings into bullet journal rapid-log bullets marked as tasks, events, and notes, and migrates open tasks forward to a new day or month. |
| [`sentence-notes`](plugins/note-taking-methods/skills/sentence-notes/SKILL.md) | Takes notes with the sentence method, one numbered line per new fact or idea as it comes, then groups the lines by topic afterward. |
| [`sketchnote-planner`](plugins/note-taking-methods/skills/sketchnote-planner/SKILL.md) | Plans a sketchnote page as a text plan to draw from by hand: layout, title, hierarchy, icons, containers, and connectors. |
| [`spaced-repetition-cards`](plugins/note-taking-methods/skills/spaced-repetition-cards/SKILL.md) | Turns notes into well-made flash cards, one fact per card with cloze deletions where they fit, as Q/A pairs and a tab-separated block for Anki. |
| [`sq3r-reading`](plugins/note-taking-methods/skills/sq3r-reading/SKILL.md) | Guides a chapter through SQ3R (Survey, Question, Read, Recite, Review), with notes for each stage from survey to review plan. |
| [`zettelkasten`](plugins/note-taking-methods/skills/zettelkasten/SKILL.md) | Turns reading or loose thoughts into Zettelkasten notes: literature notes plus permanent notes that each hold one idea, carry an ID, and link to others. |

### Notes by interest (33)

Notes shaped for what you do: students, teachers, researchers, photographers, cooks, gardeners, botanists, musicians, writers, developers, math lovers, and more.

| Skill | What it does |
| --- | --- |
| [`birding-log`](plugins/notes-by-interest/skills/birding-log/SKILL.md) | Turns birding field notes into a checklist-style sighting log with location, effort, weather, species counts, and field marks, ready to enter into eBird. |
| [`bug-investigation-notes`](plugins/notes-by-interest/skills/bug-investigation-notes/SKILL.md) | Keeps structured notes during a bug hunt: symptoms, repro steps, hypotheses with evidence, experiments, root cause, fix, and a regression test. |
| [`campaign-notes`](plugins/notes-by-interest/skills/campaign-notes/SKILL.md) | Keeps tabletop RPG session notes and a running campaign log with NPCs, places, loot, quests and hooks, GM-only secrets, and a read-aloud recap. |
| [`case-brief`](plugins/notes-by-interest/skills/case-brief/SKILL.md) | Briefs a court case for class, with facts, procedural history, issue, holding, reasoning, rule, concurrences and dissents, and notes for cold calls. |
| [`code-reading-notes`](plugins/notes-by-interest/skills/code-reading-notes/SKILL.md) | Writes notes for learning an unfamiliar codebase, with entry points, a map of modules, data flow, key types, conventions, surprises, and questions for the team. |
| [`decision-record`](plugins/notes-by-interest/skills/decision-record/SKILL.md) | Writes a decision record (an ADR is one kind) with context, options considered and their trade-offs, the decision, its consequences, and a status. |
| [`dev-log`](plugins/notes-by-interest/skills/dev-log/SKILL.md) | Writes a developer's working log for a coding session or project, with what was tried, what happened, commands run, decisions made, and where to pick up next. |
| [`exam-revision-sheet`](plugins/notes-by-interest/skills/exam-revision-sheet/SKILL.md) | Compresses a course or unit into a one-page cram sheet of formulas, definitions, dates, key facts, and the classic mistakes to avoid. |
| [`family-history-notes`](plugins/notes-by-interest/skills/family-history-notes/SKILL.md) | Writes genealogy research notes for a person or family, with cited facts, conflicting evidence, a research log, and next leads. |
| [`garden-journal`](plugins/notes-by-interest/skills/garden-journal/SKILL.md) | Writes a garden journal entry or season log with what was planted where, dates, weather, pests and what was done about them, harvests, and notes for next year. |
| [`kitchen-test-log`](plugins/notes-by-interest/skills/kitchen-test-log/SKILL.md) | Logs a recipe test with the version number, what changed from the last version and why, the results, tasting notes, and what to change next. |
| [`lab-notebook`](plugins/notes-by-interest/skills/lab-notebook/SKILL.md) | Writes a dated lab notebook entry with the aim, materials and settings, procedure as run with deviations, raw observations, results, and next steps. |
| [`language-learning-notebook`](plugins/notes-by-interest/skills/language-learning-notebook/SKILL.md) | Keeps a language learner's notebook of vocabulary with example sentences, grammar patterns, mistakes they make, phrases heard in the wild, and review cues. |
| [`lecture-prep-notes`](plugins/notes-by-interest/skills/lecture-prep-notes/SKILL.md) | Plans a lecture with learning outcomes, timed segments, examples, questions for the room, likely confusions, and a reflection to fill in afterward. |
| [`lesson-plan`](plugins/notes-by-interest/skills/lesson-plan/SKILL.md) | Writes a timed lesson plan with an objective, materials, warm-up, direct instruction, guided and independent practice, differentiation, and assessment. |
| [`literature-notes`](plugins/notes-by-interest/skills/literature-notes/SKILL.md) | Writes notes on an academic paper (question, method, findings, limitations, relevance, and quotes with page numbers) plus a literature review matrix row. |
| [`location-scouting-notes`](plugins/notes-by-interest/skills/location-scouting-notes/SKILL.md) | Writes location scouting notes with access, parking, permits, light direction by time of day, angles, power and sound, hazards, and backup spots. |
| [`meal-plan`](plugins/notes-by-interest/skills/meal-plan/SKILL.md) | Plans a week of meals with a shopping list grouped by store section, prep-ahead steps, and ways to reuse leftovers, respecting stated diets and allergies. |
| [`observing-log`](plugins/notes-by-interest/skills/observing-log/SKILL.md) | Writes an amateur astronomer's observing log, with site, seeing and transparency, equipment, targets with times, what was seen, and sketch or imaging notes. |
| [`photo-shoot-log`](plugins/notes-by-interest/skills/photo-shoot-log/SKILL.md) | Logs a photo shoot with location, light, gear, settings for key frames, what worked, what to retry, client or model details, and a culling plan. |
| [`plant-field-notes`](plugins/notes-by-interest/skills/plant-field-notes/SKILL.md) | Writes plant field notes with habitat, a description part by part, measurements, photos, and a tentative ID with its confidence and supporting features. |
| [`practice-log`](plugins/notes-by-interest/skills/practice-log/SKILL.md) | Logs a music practice session with goals, warm-up, passages worked on, tempo (BPM) reached, problems and the fixes that worked, and the next session's plan. |
| [`problem-solving-journal`](plugins/notes-by-interest/skills/problem-solving-journal/SKILL.md) | Logs work on a math problem or puzzle: understanding it, failed attempts and why, the insight, the solution, and the general technique to remember. |
| [`proof-notes`](plugins/notes-by-interest/skills/proof-notes/SKILL.md) | Annotates a mathematical proof with the claim, the strategy in one sentence, each step and its justification, where the key idea lives, and variations to try. |
| [`reading-journal`](plugins/notes-by-interest/skills/reading-journal/SKILL.md) | Writes a reading journal entry for a book, with first impressions, quotes with page numbers, characters or arguments, a rating, and book club notes. |
| [`recipe-card`](plugins/notes-by-interest/skills/recipe-card/SKILL.md) | Turns a messy recipe, blog post, or voice memo into a clean card with yield, times, ingredients, steps with doneness cues, make-ahead notes, and scaling. |
| [`scene-cards`](plugins/notes-by-interest/skills/scene-cards/SKILL.md) | Turns a draft, outline, or list of scene ideas into scene cards, one per scene, with POV, goal, conflict, outcome, what changes, and where it sits in the plot. |
| [`songwriting-notebook`](plugins/notes-by-interest/skills/songwriting-notebook/SKILL.md) | Captures a song idea as a working page with title, hook, lyric drafts, chords and key, structure, tempo and feel, reference tracks, and open questions. |
| [`story-bible`](plugins/notes-by-interest/skills/story-bible/SKILL.md) | Builds and maintains a story bible for a novel or series, with characters, places, a timeline, the rules of the world, and a continuity list. |
| [`study-guide`](plugins/notes-by-interest/skills/study-guide/SKILL.md) | Builds a study guide for a unit or course, with topics ranked by weight, what to know for each, practice questions, and a schedule up to the exam. |
| [`tasting-notes`](plugins/notes-by-interest/skills/tasting-notes/SKILL.md) | Writes structured tasting notes for wine, coffee, tea, beer, whisky, or chocolate, from appearance and aroma to finish, overall impression, and score. |
| [`training-log`](plugins/notes-by-interest/skills/training-log/SKILL.md) | Writes a training log entry with session type, sets and reps or distance and pace, effort (RPE), sleep and soreness, and notes for next time. |
| [`travel-journal`](plugins/notes-by-interest/skills/travel-journal/SKILL.md) | Writes a travel journal entry and trip log, with where, what we did, food, people met, costs, tips for next time, and the small moments worth remembering. |

### Everyday notes (20)

Meetings, daily notes, weekly reviews, inboxes, and the everyday work of keeping notes tidy, findable, and useful.

| Skill | What it does |
| --- | --- |
| [`action-items`](plugins/everyday-notes/skills/action-items/SKILL.md) | Pulls every task, commitment, and follow-up out of any text into a checklist with owner, due date, and source line, and flags the vague ones. |
| [`answer-from-notes`](plugins/everyday-notes/skills/answer-from-notes/SKILL.md) | Answers a question from someone's own notes in a connected notes app, citing the note and date behind every claim, and says when the notes are silent. |
| [`checklist-maker`](plugins/everyday-notes/skills/checklist-maker/SKILL.md) | Builds a short checklist for a recurring process (packing, publishing, closing the books), in the order things happen, in read-do or do-confirm style. |
| [`client-call-notes`](plugins/everyday-notes/skills/client-call-notes/SKILL.md) | Writes up a client or sales call with the client's goals and pains in their words, budget, timeline, scope, objections, next steps, and follow-up email points. |
| [`connect-notes`](plugins/everyday-notes/skills/connect-notes/SKILL.md) | Finds the links between a set of notes (shared ideas, contradictions, answered questions) and proposes links or a hub note with a reason for each. |
| [`daily-note`](plugins/everyday-notes/skills/daily-note/SKILL.md) | Builds a daily note with a top three, the schedule, a running log, quick captures, and an end-of-day shutdown, blank or filled in. |
| [`handoff-notes`](plugins/everyday-notes/skills/handoff-notes/SKILL.md) | Writes handoff notes that let someone pick up work cold, with the current state, open threads, where things live, gotchas, decisions, and the first step. |
| [`inbox-triage`](plugins/everyday-notes/skills/inbox-triage/SKILL.md) | Sorts a pile of quick captures into do, schedule, delegate, file, project, task, or discard, and proposes the whole plan before changing anything. |
| [`interview-notes`](plugins/everyday-notes/skills/interview-notes/SKILL.md) | Writes up a job, research, or journalism interview with answers, marked verbatim quotes, observations apart from interpretation, and follow-ups. |
| [`journal-entry`](plugins/everyday-notes/skills/journal-entry/SKILL.md) | Helps someone write a private journal entry, either tidying their free writing lightly in their own voice or guiding them with a few prompts they choose. |
| [`meeting-agenda`](plugins/everyday-notes/skills/meeting-agenda/SKILL.md) | Prepares a meeting agenda with a purpose and outcome, timed items, an owner and decision for each, pre-reads, and items carried from last time. |
| [`meeting-notes`](plugins/everyday-notes/skills/meeting-notes/SKILL.md) | Turns a meeting transcript, recording summary, or rough jottings into meeting notes with decisions, action items, owners, due dates, open questions, and a summary. |
| [`note-template-maker`](plugins/everyday-notes/skills/note-template-maker/SKILL.md) | Designs a reusable note template for any recurring situation, with a prompt in each section that tells the writer what to put there, and a filled-in example. |
| [`note-titles-and-tags`](plugins/everyday-notes/skills/note-titles-and-tags/SKILL.md) | Suggests clear, searchable note titles and a small, consistent set of tags or folders, so a title says what is inside instead of "Untitled" or "Notes 3". |
| [`one-on-one-notes`](plugins/everyday-notes/skills/one-on-one-notes/SKILL.md) | Keeps running notes for a recurring manager and report 1:1, with their topics first, feedback both ways, career threads, and commitments carried forward. |
| [`project-brief`](plugins/everyday-notes/skills/project-brief/SKILL.md) | Writes a one-page home note for a project covering why, goal and definition of done, scope and non-goals, milestones, people, risks, and links. |
| [`source-to-notes`](plugins/everyday-notes/skills/source-to-notes/SKILL.md) | Turns an article, video, podcast, nonfiction book, or web page into notes with the main argument, key points, evidence, located quotes, and the reader's take. |
| [`tidy-up-notes`](plugins/everyday-notes/skills/tidy-up-notes/SKILL.md) | Cleans up a messy note without losing anything, fixing structure, headings, lists, duplicates, and typos, then reports exactly what changed. |
| [`voice-memo-cleanup`](plugins/everyday-notes/skills/voice-memo-cleanup/SKILL.md) | Turns a rambling voice memo transcript into a clean note that keeps the speaker's voice and every idea, and lists anything that sounded like a task. |
| [`weekly-review`](plugins/everyday-notes/skills/weekly-review/SKILL.md) | Guides a weekly review that clears the inboxes, looks back at wins, misses, and loose ends, checks the calendar, updates projects, and picks priorities. |

### Writing (20)

Turn notes into writing, then make it clear, short, and yours: essays, posts, emails, guides, fiction, and editing.

| Skill | What it does |
| --- | --- |
| [`blog-post`](plugins/writing/skills/blog-post/SKILL.md) | Writes a blog post from notes, with a specific opening promise, scannable sections, real examples, a useful ending, and title and meta description options. |
| [`developmental-edit`](plugins/writing/skills/developmental-edit/SKILL.md) | Gives big-picture feedback on a draft as a prioritized edit letter about its point, structure, gaps, cuts, and where readers get lost, without line edits. |
| [`dialogue-polish`](plugins/writing/skills/dialogue-polish/SKILL.md) | Revises dialogue so it sounds like real people, with distinct voices, subtext, dead and on-the-nose lines cut, better tags and beats, and a read-aloud test. |
| [`email-drafter`](plugins/writing/skills/email-drafter/SKILL.md) | Drafts emails that get answered, with the ask in the first two lines, context after, one clear next step, and a tone that fits the relationship. |
| [`essay-structure`](plugins/writing/skills/essay-structure/SKILL.md) | Structures an argumentative or expository essay around an arguable thesis, claim-led paragraphs, a fair counterargument, and a conclusion that adds something. |
| [`fiction-scene`](plugins/writing/skills/fiction-scene/SKILL.md) | Drafts or revises a fiction scene around a goal, a conflict, and a turn, with sensory detail, emotion shown through action, and a steady point of view. |
| [`headlines-and-titles`](plugins/writing/skills/headlines-and-titles/SKILL.md) | Writes title and headline options in plain, curious, benefit, and number styles, explains the trade-offs, and never promises what the piece does not deliver. |
| [`how-to-guide`](plugins/writing/skills/how-to-guide/SKILL.md) | Writes step-by-step instructions people can follow, with what you need first, one action per step, expected results, warnings up front, and troubleshooting. |
| [`newsletter-issue`](plugins/writing/skills/newsletter-issue/SKILL.md) | Writes a newsletter issue from the week's notes and links, with one main story, a few short items, a sign-off, and subject line options. |
| [`notes-to-draft`](plugins/writing/skills/notes-to-draft/SKILL.md) | Turns a pile of notes (fragments, quotes, and half-thoughts) into a first draft with a clear point, a deliberate order, and connecting sentences. |
| [`outline-first`](plugins/writing/skills/outline-first/SKILL.md) | Builds and tests an outline before any drafting, with a one-sentence point, a named reader, sections written as claims, and the evidence under each. |
| [`personal-essay`](plugins/writing/skills/personal-essay/SKILL.md) | Helps write a personal essay from real memories by finding the subject under the story, balancing scene and reflection, and finding an ending that lands. |
| [`persuasive-argument`](plugins/writing/skills/persuasive-argument/SKILL.md) | Builds a persuasive piece from the audience's current belief to a clear claim, with the writer's best evidence, a fair counterargument, and a specific ask. |
| [`plain-language`](plugins/writing/skills/plain-language/SKILL.md) | Rewrites text in plain language, answering the reader's question first, with short sentences, common words, and jargon defined or cut, keeping every fact. |
| [`proofread`](plugins/writing/skills/proofread/SKILL.md) | Proofreads a finished text for typos, grammar, punctuation, consistency, and formatting, fixing only errors, listing every fix, and flagging style questions. |
| [`remove-ai-tells`](plugins/writing/skills/remove-ai-tells/SKILL.md) | Edits text so it reads like a person wrote it, removing stock phrases, reflexive threes, false contrasts, signposting, bland hedges, and generic endings. |
| [`summary-writer`](plugins/writing/skills/summary-writer/SKILL.md) | Summarizes any text at a requested length for a named reader, keeping the conclusions, numbers, and caveats, and noting what was left out. |
| [`tighten-prose`](plugins/writing/skills/tighten-prose/SKILL.md) | Cuts wordiness from a draft without losing meaning or voice, aiming at a stated cut (20 percent by default) and reporting what went. |
| [`tone-rewrite`](plugins/writing/skills/tone-rewrite/SKILL.md) | Rewrites a short message, post, reply, or bio in a requested tone or more clearly, keeping every fact and the writer's intent, and notes what changed. |
| [`voice-match`](plugins/writing/skills/voice-match/SKILL.md) | Learns a person's writing voice from samples, writes a short voice profile they can save and reuse, then writes or rewrites text in that voice. |
<!-- catalogue:end -->

## How the skills are written

Every skill follows one shape, set out in [STYLE.md](STYLE.md), so the
second one you use works like the first:

- **When to use it**, and which sibling skill fits better nearby.
- **What to ask for**, with a sensible default for everything you leave out,
  so the assistant asks only what it cannot work out, two or three questions
  at most, and then gets on with it.
- **How to do it**, as concrete steps with the expert's judgment calls.
- **The format**, a Markdown template that pastes cleanly into any notes app.
- **An example**, from messy input to the finished note.
- **Pitfalls**, the mistakes that make this kind of note fail.

A few rules hold across all of them. Notes reflect your source: an assistant
following these skills does not invent facts, quotes, or figures, and marks
gaps with `[?]` instead of filling them. Skills that reorganize your notes
propose the changes and wait for a yes. And a skill about health, law, or
money makes notes about what a source says; it does not give advice of its
own.

Every skill here was written for this repo. None is copied or adapted from
another collection.

## Use them with Scratchpad

[Scratchpad](https://scratchpad.sh) is a notes app, and an
[MCP server](https://scratchpad.sh/docs/connecting/assistants/), so Claude,
ChatGPT, Cursor, Codex, and anything else that speaks MCP can search, read, and
write your notes, within permissions you choose. Connect it, and every skill
here saves its result straight into your notes:

- "Turn this transcript into meeting notes" lands as a **new note**, or on
  the running note for a recurring meeting.
- "Do my weekly review" files each week's review as **its own note**, so the
  patterns across weeks are easy to see.
- "Find links between my notes on the Romantics" can actually **search** your
  notes, and asks before adding a single link.
- "What did we decide about the venue?" gets an answer **from your own
  notes**, with the note and date behind every part of it.

To connect, add `https://app.scratchpad.sh/api/mcp` as a connector in your
assistant. [Here is how](https://scratchpad.sh/docs/connecting/assistants/).

**[Get Scratchpad at scratchpad.sh](https://scratchpad.sh)**

You don't need Scratchpad to use the skills. Without a connected notes app,
they give you the finished note as Markdown, ready to paste anywhere.

## Make your own, or improve one

Found a skill that could be better, or a kind of note we have missed? See
[CONTRIBUTING.md](CONTRIBUTING.md). The short version:

1. Read [STYLE.md](STYLE.md).
2. Add `plugins/<collection>/skills/<your-skill>/SKILL.md`.
3. Run `npm run check`, then `npm run catalogue` to update this README.
4. Open a pull request.

## License

[MIT](LICENSE). Use the skills, change them, ship them in your own product.
A link back to [scratchpad.sh](https://scratchpad.sh) is appreciated, never
required.
