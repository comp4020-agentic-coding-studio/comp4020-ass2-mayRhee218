# Assignment 2

This repo's name (`comp4020-ass2-mayRhee218`) means `pnpm check:evidence`
expects no reflection here — `PROCESS.md` is the written account it actually
reads. This file is extra, not counted, kept only because I wanted the two
standing prompts answered somewhere.

**What was the breakthrough that moved the work forward?**

Realising that "done" meant looking, not just building. The starter template
happily typechecks and builds around wrong drama titles, a stock hero image,
and an instructor who isn't Korean — none of that trips a type error. The
turn came when I stopped trusting a green `pnpm check` as the finish line and
started asking whether each piece of content was actually *true*: checking a
drama's real English release title against the source rather than a
romanisation, opening an image before writing its alt text, reading the
theme's own CSS for its palette instead of picking colours that merely looked
fine. The checks caught structure; only looking caught correctness.

**What did this work change about who I want to be as a software developer?**

I want to be someone who treats an automated check as a floor, not a ceiling.
It's tempting to stop the moment the pipeline is green — this assignment kept
showing me that green pipelines and wrong content coexist easily. The habit
I'm keeping is the one this repo's `CLAUDE.md` now writes down: verify against
the real thing, not the assumption, before calling anything finished.
