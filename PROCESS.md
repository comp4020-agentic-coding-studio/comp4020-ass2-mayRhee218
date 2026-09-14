# Process overview

I decided early that a good version of this course would treat Korean
dramas as flawed evidence rather than documentary: dramas are how a lot of
people now experience Korean culture at all, but they exaggerate even when
they're trying not to, so the course's job is to teach students to hold a
drama up against reality rather than absorb it. That's why the assessments
are essay-based rather than recall-based — the Close Analysis Essay asks for
evidence of where one drama distorted reality, the Final Comparative Essay
compares two dramas against a theme — and it's the same instinct that ended
up steering how I directed the agent, not just what I asked it to build.

The starter's contract tests
([`a3d786b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/a3d786b))
only check shape: a real course code, twelve distinct weeks, one lecture
with a real deck, weights summing to 100. Passing those was easy once I'd
built out the actual syllabus
([`32f8642`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/32f8642))
— one instructor, twelve sessions and lectures, three assessments, real
policies. But shape isn't the vision. Nothing in that check cares whether
the content is *true*, and that gap is where directing this particular
course actually changed what I accepted from the agent.

Twice I caught the agent handing back something technically complete but
wrong in a way that undercut the course's own premise. The first was two
drama titles that were literal romanisations rather than the shows' real
English release titles — an irony I couldn't let stand in a course about
checking claims against reality, so I sent the correction and had it verify
both against their actual releases before touching anything downstream
([`6be18b6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/6be18b6)).
The second was generic stock art standing in for the hero and social card,
and a stand-in instructor who didn't fit a course built around "the direct
experience of a Korean professor." I asked for both to be fixed properly —
real, brand-matched art and a real portrait
([`e89671e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/e89671e),
[`4810c26`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/4810c26)),
then a convener who actually is Korean
([`1476a37`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/1476a37)).
Each time, the standard I was holding the agent to was the same one the
syllabus holds the dramas to.

The one piece of that standard I encoded directly into the harness is
`CLAUDE.md`'s rule to verify a title or name against the real thing —
a web search against the actual release — rather than trust an assumed
romanisation or whatever spelling I happened to type. It's a narrow,
mechanical version of exactly what I'm asking students to do to the dramas
themselves. What I deliberately didn't encode is any `spec/` check for
factual accuracy: whether a drama's portrayal of Korean society counts as
"accurate" or "exaggerated" is a judgment call, not an invariant a test can
assert, so that stays something I look at directly rather than something
`pnpm check` can enforce. `pnpm check` and `pnpm check:evidence` were the
floor throughout, never the ceiling — green just meant I hadn't broken
anything yet, not that the content was honest.
