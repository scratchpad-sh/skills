---
name: family-history-notes
description: Writes genealogy research notes for a person or family, with cited facts, conflicting evidence, a research log, and next leads. It keeps evidence separate from conclusions and records nil searches as well as finds. Use when a family historian is researching an ancestor or building a family tree, has census, parish, or vital records to organize, hits a brick wall, finds records that disagree, or wants a research log.
---

# Family history notes

Genealogists learn early that a family tree is only as good as its sources.
A name and a date copied from someone else's tree, with no record behind it,
is a rumor. Good research notes tie every fact to the record it came from,
keep track of what was searched (including the searches that found nothing),
and keep the evidence apart from the conclusion drawn from it.

This skill follows careful genealogical practice: cite the source for every
fact; weigh original records over derivative ones and firsthand informants
over secondhand; record negative searches; and write conclusions as reasoned
arguments, open to revision. The Genealogical Proof Standard, published by the
Board for Certification of Genealogists, sets out these ideas formally.

## When to use it

- Researching a specific ancestor or couple.
- Organizing downloaded records, certificates, or photos of documents.
- Two records disagree (ages, birthplaces, spellings) and the person needs
  to weigh them.
- Hitting a brick wall and wanting to see what has and has not been tried.
- Resuming research after months away.

For a research write-up turned into a family story, `personal-essay` or
`notes-to-draft` fit better. For notes on a published book or article, use
`literature-notes`. For interviewing a living relative, use
`interview-notes`, then bring the facts here with the interview cited as the
source.

## What to ask for

- **The research subject**: full name (with variants), rough dates, and places.
- **The records**: transcriptions, abstracts, or descriptions of each record,
  with where it was found (archive, website and collection, film number,
  page, line).
- **The research question**, if they have one ("Who were Mary Doyle's
  parents?"). Default: build the person's profile and let questions emerge.

Ask for source details when a record has none; a fact without a source is the
first thing to fix.

## How to do it

1. State the **research question**, as specific as the material allows.
2. Write the **facts**, one per line: event, date, place, and a numbered
   citation. Record names, dates, and spellings exactly as the record gives
   them; add a standardized form in brackets if helpful. Never correct a
   spelling silently. Head the note with the name the family uses; write a
   life year that a record only implies (an obituary) as "about 1935".
3. Write **citations** that let someone find the record again: what it is,
   who created it, when, the repository or website and collection, and the
   specific item (page, line, entry, image number). For each, note whether
   the source is **original** or **derivative** (an index, a transcription,
   someone's tree), and whether the information is **primary** (from a
   firsthand informant at the time) or **secondary**.
4. Before weighing a conflict, check that the records are the same person:
   say what links them (place, spouse, children, occupation), and say so if
   the link is thin; one parish can hold two men of one name. Then lay the
   **conflicting evidence** side by side in a table: what each record says,
   the source, and its likely reliability. Never resolve a conflict by picking
   the convenient answer; if you suggest which is more reliable, give the
   reason (a birth certificate made at the time usually outweighs an age on a
   death certificate given by a grieving child).
5. Keep the **research log**: date searched, repository or database, what
   was searched (name variants, date range, place), and the result: found,
   possible (hits not yet matched to the person), or **nil**. A nil search is
   evidence too, and it stops the same search being repeated.
6. Write **conclusions** separately, labeled by confidence ("proved",
   "probable", "possible", "not yet supported"), with the reasoning and the
   facts it rests on. A tree from another researcher is a lead, not
   evidence; record it as such.
7. List **next leads** as specific searches: the record type, the
   repository, and why it might answer the question.
8. Never fill in a date, parent, or place from general knowledge or
   probability. Use `[?]` and add a lead.

## The format

```markdown
# [Full name] ([birth year]-[death year])
Research question: [question] · Updated [YYYY-MM-DD]

## Facts
| Event | Date | Place | Detail | Source |
| --- | --- | --- | --- | --- |
| [Birth / marriage / census / death] | [as recorded] | [as recorded] | [names, ages, occupation] | [1] |

## Sources
1. [Citation]. Original or derivative: [type]. Information: [primary / secondary / undetermined].

## Conflicting evidence
| Question | Record says | Source | Notes on reliability |
| --- | --- | --- | --- |
| [Birth year] | [value] | [n] | [reason] |

## Research log
| Date | Where | Searched for | Result |
| --- | --- | --- | --- |
| [YYYY-MM-DD] | [repository or database] | [names, years, places] | [found / possible / nil] |

## Conclusions
- **[Conclusion]** ([proved / probable / possible]): [reasoning, citing facts]

## Next leads
- [ ] [Record type] at [repository]: [why]
```

## Example

Input: "Patrick Doyle. 1901 Ireland census, Ballinakill, Co. Galway, house 12:
Patrick 34, farmer. 1911 census same townland: Patrick 48. death cert 1931 says
age 70, informant son James. searched Clifden parish baptisms 1855-1870 on
irishgenealogy.ie, nothing."

```markdown
# Patrick Doyle ([?]-1931)
Research question: When was Patrick Doyle born? · Updated 2026-10-27

## Facts
| Event | Date | Place | Detail | Source |
| --- | --- | --- | --- | --- |
| Census | 1901 | Ballinakill, Co. Galway | house 12; age 34; farmer | [1] |
| Census | 1911 | Ballinakill, Co. Galway | age 48 | [2] |
| Death | 1931 | [?] | age 70; informant son James | [3] |

## Sources
1. 1901 Census of Ireland, Ballinakill, Co. Galway, house 12. [?] Where
   viewed.
2. 1911 Census of Ireland, Ballinakill, Co. Galway. [?] House number and
   where viewed.
3. Death certificate, Patrick Doyle, 1931. [?] Registration district.
   Information: secondary for age (informant is his son).

## Conflicting evidence
| Question | Record says | Source | Notes on reliability |
| --- | --- | --- | --- |
| Birth year | about 1867 (age 34) | [1] | ages in Irish censuses are often inconsistent (added) |
| Birth year | about 1863 (age 48) | [2] | |
| Birth year | about 1861 (age 70) | [3] | given by his son after death |

## Research log
| Date | Where | Searched for | Result |
| --- | --- | --- | --- |
| [?] | irishgenealogy.ie, Clifden parish baptisms | Patrick Doyle, 1855-1870 | nil |

## Conclusions
- **Born between about 1861 and 1867** (possible): the three ages disagree;
  no birth record yet. [?] The death record matches on name only; its place
  is not recorded here.

## Next leads
- [ ] Civil birth registers, if he was born in 1864 or later, when Irish
  civil birth registration began (added).
- [ ] Baptisms in the parish that covers Ballinakill, if not Clifden.
```

## Pitfalls

- **Facts without sources.** Every line needs a citation, even "Grandma
  said so" (cited as an interview with the date).
- **Correcting the record.** Write "Patk Doyle" if the record says so. The
  spelling may be the clue.
- **Dropping nil searches.** Without them, the same search gets repeated in
  a year, and the absence is not weighed.
- **Choosing between conflicts silently.** Show every version and the
  reasoning for any preference.

## Saving the note

If a notes app is connected (for example the Scratchpad connector, or any notes
tool you can call), offer to save the result there as a new note with a clear,
searchable title, or to add it to an existing note the person names. Otherwise,
give the whole note as one Markdown block that pastes cleanly into any notes
app. One note per person, titled with full name and life years, keeps namesakes
(three Patrick Doyles in one parish) from merging by accident.
