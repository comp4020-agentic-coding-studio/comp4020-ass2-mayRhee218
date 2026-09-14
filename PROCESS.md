# Process overview

## What I built

SLOP2282, "Learning Korean Culture with 12 Korean Dramas" — a twelve-week
course that treats one Korean drama a week as a primary source rather than a
documentary, running from a 2003 royal-court epic through to a 2026 Netflix
satire. Each week pairs a screening with a lecture asking what the drama gets
right about its period or setting and what it invents, and the assessment
(weekly responses, a mid-point close-analysis essay, a final comparative
essay) tracks that same question across the semester's recurring themes —
division, hierarchy, work, gender, status, appearance.

## What a good course looks like

As Korean dramas expand globally, many people are indirectly experiencing
Korean culture by watching them. However, in some cases, these dramas do not
accurately reflect reality, or they often heavily exaggerate it even when
they do.

This course is designed to help students indirectly understand Korean
culture through dramas, while also building media literacy by identifying
exaggerated elements through the direct experiences of a Korean professor.

The selected dramas are not just simple romances or story-driven shows; they
were chosen for how well they showcase Korean society, history, and culture.

Each week, students will watch a drama through a screening, listen to a
lecture explaining it, and write a short report expressing their opinions
based on the lesson.

For the Close Analysis Essay, students will choose one of the dramas watched
between Weeks 1 and 6 and provide evidence demonstrating how certain aspects
were distorted or overly romanticized compared to actual Korean culture.

For the Final Comparative Essay, students will write a comparative analysis
of two dramas centered around a specific theme.

Through these essay-based assessments, students will develop the ability to
support their ideas with logical evidence, rather than simply memorizing
information.

## How I got here

I started from the starter template's contract tests
([`a3d786b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/a3d786b)),
which fixed the shape of what had to exist before I built anything: a valid
SLOP course code, twelve distinct weeks, at least one lecture with a real
slide deck, and assessment weights summing to 100.

The main build
([`32f8642`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/32f8642))
replaced the starter's placeholder course, people, sessions, lectures,
assessments, policies and deck with the actual twelve-week syllabus: course
and site config for SLOP2282, one instructor, twelve sessions and lectures
(one per drama), three weighted assessments, real policies, and a week-1
deck.

From there the work was mostly closing the gap between "technically
complete" and "actually correct":

- Two of the English drama titles I'd used were wrong — direct
  romanisations of the Korean rather than the shows' real English release
  titles. I asked for the fix directly:

  > There were some miss for the english title. Lady dua(korean title is
  > "레이디 두아") should be "The Art of Sarah", and Gangnam Beauty(korean
  > title is "내 id는 강남미인") should change to "My id is Gangnam Beauty"

  which I verified against each show's actual release before renaming the
  session files, updating the linked lecture, and giving both sessions a
  real poster image and alt text
  ([`6be18b6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/6be18b6)).
  That same commit added real poster art — sourced from a folder of poster
  images and wired through a new `poster`/`posterAlt` schema field — to all
  twelve sessions, following the request:

  > For the image, use corresponding poster image from here: …/posters

- The two remaining generic starter images (the homepage hero and the
  OG/social card) and the placeholder instructor portrait were still
  unreplaced. I asked for both to be dealt with in one go:

  > generic site images -> I hope you create it. marisol-quaye.avif
  > (instructor photo) is here: [photo attached]

  which produced a real instructor photo (resized and wired into the people
  collection) and a hand-authored brand-matched illustration — a gold sun
  over layered dark hills, built from the theme's actual palette rather than
  anything arbitrary — for both the hero and the card
  ([`e89671e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/e89671e),
  [`4810c26`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/4810c26)).

- Last, the convener didn't fit a Korean-drama course:

  > Change course convener's name from Marisol Quaye to May Rhee. She is
  > Korean

  which renamed the person entry, the photo, and every `teachers:` reference
  across all twelve sessions and lectures
  ([`1476a37`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/1476a37)).

Throughout, I treated `pnpm check` (typecheck, a11y, broken links, the
contract tests) and `pnpm check:evidence` as the gate before calling anything
done, and used the dev server to look at what actually rendered rather than
trusting the build log alone.
