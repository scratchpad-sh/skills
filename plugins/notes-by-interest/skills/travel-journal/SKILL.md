---
name: travel-journal
description: Writes a travel journal entry and trip log, with where, what we did, food, people met, costs, tips for next time, and the small moments worth remembering. Use when someone is traveling and wants to record the day, has photos, voice memos, or scribbled notes from a trip to turn into a journal, wants a running trip log with expenses, or is writing up a trip after getting home.
---

# Travel journal

A travel journal does two jobs that pull in different directions. It is a
practical log (where you slept, what it cost, which bus actually ran) and it
is a memory keeper (the smell of the bakery at 6 a.m., what the old man at
the next table said). Most travelers keep only one or the other. The useful
journal keeps both, in separate places on the page, so the facts stay
findable and the moments stay vivid.

The habit that matters most is writing the same day. Details fade fast, and
a few lines tonight beat a page written from memory a month later.

## When to use it

- At the end of a travel day, from notes, photos, or a voice memo.
- Partway through a trip, to keep a running log with costs.
- After getting home, to write up a trip from photos and receipts.
- Planning a return visit and wanting "tips for next time" in one place.
- They ask for a travel diary, trip log, or travel journal.

For the essay a trip might become, use `personal-essay` or `blog-post`. For
a packing or pre-trip list, use `checklist-maker`. For the general daily note
at home, use `daily-note`.

## What to ask for

- **The day's raw material**: notes, voice memo transcript, photo captions,
  or a quick description.
- **Where and when**: date, town, and day number of the trip. Default: infer
  from what they wrote, or mark `[?]`.
- **Currency** for costs. Default: the local currency they used, with a home
  currency conversion only if they give the rate.
- **Who is traveling.** Default: write "we" or "I" as they do.

If they gave notes, start. One question at most at the end of a long day.

## How to do it

1. Head the entry with day number, date, and place. For travel days, write
   the route: "Lisbon → Porto by train".
2. **What we did**: in order, briefly. Times only where they matter (a
   sunrise, a train). Keep place names exactly as the person spelled them,
   or mark a spelling to check with `[?]`.
3. **Food**: what, where, and their verdict in their words. A named dish and
   a named place are what make this useful next time.
4. **People**: who they met and the one detail that made them memorable. Use
   only names and details they gave. Leave out someone else's health or other
   private detail unless the person says the journal stays private, and
   say what you left out so they can put it back.
5. **Costs**: a small table by category (lodging, transport, food, tickets,
   other), with a day total. Add only amounts they gave; never estimate a
   price. A price "each" times the number traveling, as they gave both, is
   fine; show the sum in the line. Keep a running trip total if earlier
   days are available. Paid in
   more than one currency: add a currency column and total each separately,
   converting only with a rate they gave. An item with no amount stays in the
   table as `[?]`, and the total says it leaves that item out.
6. **Tips for next time**: practical lessons, written as instructions to a
   future self: "Buy the metro card at the airport; the city kiosks only take
   cash."
7. **Small moments**: the two or three sensory details or exchanges worth
   remembering, in the person's voice. Do not embellish or add atmosphere
   they did not describe. This is the section they will treasure, so keep
   their exact phrases.
8. For a **trip log** across days, keep a short table at the top (day, date,
   place, where we slept, day total) and add entries below it.

## The format

```markdown
# Day [n]: [Place], [YYYY-MM-DD]
[Route, if a travel day] · Weather: [as noted]

## What we did
- [Activity]
- [Activity]

## Food
- **[Dish]** at [place]: [verdict]

## People
- [Name or description]: [detail]

## Costs ([currency])
| Item | Category | Amount |
| --- | --- | --- |
| [item] | [lodging / transport / food / tickets / other] | [n] |
| **Day total** | | **[n]** |

## Tips for next time
- [Practical lesson]

## Small moments
- [Detail in the person's words]
```

## Example

Input: "day 4 kyoto. fushimi inari early, 7am basically empty, climbed to the
top, legs dead. lunch kitsune udon near the station 800 yen, so good. hostel
2,900. trains 230 + 230. older lady at the shrine shop gave us a free omamori
because we were first customers. note: bring water up the mountain, vending
machines get pricier near the top"

```markdown
# Day 4: Kyoto, [?] date

## What we did
- Fushimi Inari early, around 7 a.m. Almost empty.
- Climbed to the top. Legs dead.

## Food
- **Kitsune udon** near the station: "so good".

## People
- An older woman at the shrine shop gave us a free omamori because we were
  her first customers.

## Costs (JPY)
| Item | Category | Amount |
| --- | --- | --- |
| Kitsune udon | food | 800 |
| Hostel | lodging | 2,900 |
| Train | transport | 230 |
| Train | transport | 230 |
| **Day total** | | **4,160** |

## Tips for next time
- Bring water up the mountain; vending machines get pricier near the top.

## Small moments
- A free omamori at the shrine shop "because we were first customers".
- Fushimi Inari at 7 a.m., "basically empty".
```

## Pitfalls

- **Writing a guidebook.** Background on a landmark they did not mention
  pads the entry. Record their day, not Wikipedia's.
- **Embellishing the moments.** "The golden light danced on ancient stones"
  is not what they said. Keep their plain words; they will mean more later.
- **Estimated costs.** A guessed price corrupts the budget. Record only
  what they paid, and mark gaps.
- **Tips too vague to use.** "Go early" is weaker than "Arrive by 7 a.m.;
  crowds build by 9."
- **Facts and feelings in one paragraph.** Keep the log and the memories in
  their own sections so each can be found.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. One folder per trip, with a note per day, keeps the trip easy to reread
and the costs easy to total.
