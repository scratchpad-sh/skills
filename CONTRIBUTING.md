# Contributing

Thank you for helping. Improvements to existing skills are as welcome as new
ones: a better example, a pitfall you have run into, a field a practitioner
in your hobby would never leave out.

## Before you start

- Read [STYLE.md](STYLE.md). Every skill uses the same sections, in the same
  order, and follows the same house rules.
- Check [the catalogue](README.md#the-catalogue). If a skill already covers
  most of your idea, improve it rather than adding a near-duplicate.
- Write it yourself. Do not copy or adapt skills from other collections.

## Adding a skill

1. Pick the collection: `note-taking-methods`, `notes-by-interest`,
   `everyday-notes`, or `writing`.
2. Create `plugins/<collection>/skills/<skill-name>/SKILL.md`. The folder name
   is the skill's name: lowercase words joined by hyphens.
3. Run the checks. They need only Node 18 or later, no installs.

   ```sh
   npm run check        # validates every skill
   npm run catalogue    # rewrites the catalogue in README.md
   ```

4. Try it. Load the skill in an assistant and give it a realistic, messy
   input. If the result would not satisfy someone who does this for a living,
   the skill needs more work.
5. Open a pull request that says who the skill is for and what you tested it
   on.

## What makes a skill good

- It knows things. A recipe card skill that says "list the ingredients" adds
  nothing; one that says "keep the source's weights, never convert cups to
  grams by guesswork, and write doneness as a cue the cook can see" does.
- It asks little. Defaults for everything a person might not say.
- It never invents. Notes reflect the source, and gaps are marked.
- It is short enough to load quickly: about 90 to 180 lines.

## House rules

No em dashes or en dashes anywhere (the check fails on them), the Oxford comma
always, and plain words over clever ones.
