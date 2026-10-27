---
name: blog-post
description: Writes a blog post from notes, with a specific opening promise, scannable sections, real examples, a useful ending, and title and meta description options. Use when someone wants to "write a blog post", "turn these notes into a post", "write an article for my site", or has an idea, outline, or rough notes for a post on a personal, company, or project blog.
---

# Blog post

People read blog posts in a particular way: they arrive from a search, a feed,
or a link, decide in a few seconds whether the post will give them something,
and then scan before they commit to reading. A good post respects that. It says
early what the reader will get, it uses headings that let a scanner find the
part they need, and it delivers concrete things (an example, a number, a
method, a story) rather than general observations.

The person's experience, examples, and opinions are the substance; you
supply structure and finish.

## When to use it

- Notes, an outline, or a voice memo transcript to turn into a post.
- A how-it-went post, lesson learned, tutorial, opinion piece, or roundup.
- A company or project blog update.
- A draft that is not getting read and needs structure.

For a weekly email to subscribers, use `newsletter-issue`. For step-by-step
instructions only, `how-to-guide` is more rigorous. For a personal story with
a reflective point, use `personal-essay`. For more title options, use
`headlines-and-titles`.

## What to ask for

- **The notes or idea.**
- **Who reads the blog** and what they already know. Default: interested
  newcomers to the topic.
- **The point or takeaway.** If they have none, propose it from the notes.
- **Length.** Default: 800 to 1,200 words. If the notes only support a
  shorter post, write it and say in one line after the draft what would
  make it longer; never pad to reach a count.

Use a voice profile or past posts for tone if given; otherwise plain first
person.

## How to do it

1. **Name the promise.** One sentence: what the reader will know, be able to
   do, or see differently by the end. "How we cut our build time from 20
   minutes to 4" is a promise. "Thoughts on build times" is not.
2. **Pick the post type,** because it sets the structure:
   - **Lesson learned:** what happened, what went wrong, what we changed,
     what we'd tell you.
   - **How-to:** the result, what you need, the steps, the gotchas.
   - **Opinion:** the claim, the reasons, the strongest objection, what to do.
   - **List or roundup:** an intro on why these, then items each with a reason.
3. **Write the opening.** Two to four sentences: a specific situation, problem,
   or result, then the promise. Skip "In today's world" and definitions the
   reader already knows. The reader should know within 100 words whether this
   post is for them.
4. **Write scannable sections.** Headings that say something ("Caching was
   the wrong fix" beats "Caching"), short paragraphs, one idea each. Use lists
   for things that are actually parallel, and prose for reasoning.
5. **Ground every section in an example.** A number from their notes, a
   screenshot they can add, a before and after, a quote, a short story. Where
   the notes have none, mark `[NEEDS: an example of ...]` and ask.
6. **End usefully.** A short list of takeaways, the next step, a resource, or
   the question the writer is still working on. Not "In conclusion" and not a
   summary of the headings. Draw takeaways from what the notes actually show;
   advice the writer did not give goes in "Needs from you" as a suggestion.
7. **Write title options.** Four or five, in different styles (plain, benefit,
   number, curious). Each must be delivered by the post.
8. **Write meta descriptions.** Two options, each 140 to 160 characters (count
   them; estimates run long), saying what the reader gets. Include the main
   search term naturally if there is an obvious one.
9. **Read it as a scanner.** Headings and first sentences alone tell the story.

## The format

```markdown
# [Chosen title]

[Opening: specific situation or result, then the promise.]

## [Heading that makes a claim]
[Short paragraphs. Example. [NEEDS: ...] if missing.]

## [Heading]
[...]

## [Ending heading, e.g. "What I'd do next time"]
- [Takeaway or next step]

---

**Title options**
1. [Plain]
2. [Benefit]
3. [Number]
4. [Curious]

**Meta description options**
1. [140 to 160 characters]
2. [140 to 160 characters]

**Needs from you**
- [NEEDS: an example, link, screenshot, or number to add]
```

## Example

Input notes: "post idea: we moved our team standup from daily to 3x week.
people were zoning out. now mon/wed/fri, 10 min max. used a shared doc for
async updates on other days. feedback survey: 9 of 11 prefer it. one person
misses daily contact."

```markdown
# We cut standups to three a week. Nine of eleven people prefer it.

Our daily standup had become a meeting people zoned out of. So we tried
something: three standups a week, ten minutes each, and a shared doc for the
days in between. After the switch, nine of our eleven teammates said they
prefer it.

## Daily standups had stopped doing their job
[NEEDS: one moment that made it obvious people had tuned out?]

## The new rhythm: Monday, Wednesday, Friday
Ten minutes, hard stop. On the other days, everyone adds a few lines to a
shared doc. [NEEDS: what does a typical async update look like?]

## What we lost
One person misses the daily contact, and that is a real cost. [NEEDS: did
you do anything about it?]

## If you want to try it
- Cap the meeting. Ours is ten minutes, hard stop.
- Give the off days a written home. Ours is a shared doc.
- Ask the team afterward, including what they miss.

---

**Title options**
1. We moved standups to three days a week
2. Fewer standups, a shared doc instead: what changed for our team
3. Three standups a week instead of five: what 11 people told us
4. Why we stopped meeting every morning

**Meta description options**
1. Our team cut daily standups to three short ones a week, plus a shared doc
   for the other days. Nine of eleven prefer it. What changed, and the one
   real cost.
2. Why our team moved from daily standups to Monday, Wednesday, and Friday,
   ten minutes each, what nine of eleven teammates said, and what one person
   misses.

**Needs from you**
- [NEEDS: the moment that showed people had tuned out]
- [NEEDS: a sample async update]
- [NEEDS: anything you did for the person who misses daily contact]
```

## Pitfalls

- **A slow opening.** Background, definitions, or "I've been thinking about"
  lose the reader before the promise. Start with the specific.
- **Vague headings.** "Introduction", "Thoughts", and "Conclusion" give a
  scanner nothing. Make each heading say something.
- **No examples, or invented ones.** The writer's specifics are the reason to
  read this post, and readers notice a made-up one. Ask instead.
- **Titles the post does not deliver.** A title promising "the secret" for a
  post with ordinary advice costs trust. Match the promise.
- **Hardening a hedged number.** "I think like 30%?" becomes
  `[NEEDS: the exact figure]`, never "about 30%", and no title or meta
  description leans on it.

## Saving the draft

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the draft there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole draft as one Markdown block that pastes cleanly into any notes
app. The same block pastes into most blog editors.
