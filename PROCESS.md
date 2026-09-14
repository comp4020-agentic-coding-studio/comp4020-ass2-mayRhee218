# Process overview

## What I built

SLOP2282, "Learning Korean Culture with 12 Korean Dramas" — a twelve-week
course that treats one Korean drama a week as a primary source rather than a
documentary, running from a 2003 royal-court epic to a 2026 Netflix satire.
Each week pairs a screening with a lecture asking what the drama gets right
about its period or setting and what it invents, and the assessment (weekly
responses, a mid-point close-analysis essay, a final comparative essay)
tracks that same question across recurring themes — division, hierarchy,
work, gender, status, appearance.

## What a good course looks like

Korean dramas are how many people now indirectly experience Korean culture,
but dramas don't always reflect reality — they often exaggerate it even when
they're trying not to. This course uses that gap on purpose: students watch
each drama, get a lecture on what it gets right and wrong from a Korean
professor, and write short weekly reports. The dramas were chosen for how
well they showcase Korean society and history, not for plot. The Close
Analysis Essay asks students to pick a Weeks 1–6 drama and evidence where it
distorted or romanticized reality; the Final Comparative Essay compares two
dramas around one theme. Both push students to argue from evidence rather
than recite information.

## How I got here

I started from the starter template's contract tests
([`a3d786b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/a3d786b)),
which fixed what had to exist before I built anything: a valid course code,
twelve distinct weeks, a real slide deck, assessment weights summing to 100.

The main build
([`32f8642`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/32f8642))
replaced the starter's placeholders with the real twelve-week syllabus:
course and site config, one instructor, twelve sessions and lectures, three
weighted assessments, real policies, and a week-1 deck.

From there the work was closing the gap between "technically complete" and
"actually correct":

- Two English drama titles were direct romanisations rather than the shows'
  real release titles — *Lady Dua* should be "The Art of Sarah", *Gangnam
  Beauty* should be "My ID is Gangnam Beauty". I verified both against their
  actual releases, renamed the session files, updated the linked lecture, and
  gave every session real poster art from a supplied folder, wired through a
  new `poster`/`posterAlt` field
  ([`6be18b6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/6be18b6)).

- The homepage hero, the OG/social card, and the instructor portrait were
  still starter placeholders. I was given the real instructor photo and
  asked to invent the rest ("generic site images -> I hope you create it"),
  so I hand-authored a brand-matched illustration — a gold sun over layered
  dark hills, built from the theme's actual palette — for the hero and card,
  and wired in the real photo
  ([`e89671e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/e89671e),
  [`4810c26`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/4810c26)).

- Last, the convener didn't fit a Korean-drama course, so I renamed her
  throughout — person entry, photo, every `teachers:` reference across all
  twelve sessions and lectures
  ([`1476a37`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/1476a37)).

Throughout, `pnpm check` (typecheck, a11y, broken links, contract tests) and
`pnpm check:evidence` were the gate before calling anything done, and I used
the dev server to look at what actually rendered rather than trusting the
build log alone.
