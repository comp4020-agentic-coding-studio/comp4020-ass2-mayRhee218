# Process overview

I decided early that a good version of this course should treat Korean dramas as imperfect evidence, not as documentaries. Many people learn about Korean culture through dramas, but dramas often exaggerate or change real life for entertainment. So, the main goal of this course is to teach students to compare what they see in dramas with reality.

This idea also shaped the assessments. They focus on analysis rather than memorising facts. The Close Analysis Essay asks students to find examples of how one drama changes or exaggerates reality. The Final Comparative Essay asks students to compare two dramas through a cultural theme. This same idea also guided how I worked with the agent, not just what I asked it to build.

The starter's contract tests
([`a3d786b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/a3d786b))
only check the basic structure: a valid course code, twelve different weeks, one lecture with a real deck, and assessment weights that add up to 100%. These were easy to pass once I built the main course structure
([`32f8642`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/32f8642))
— one instructor, twelve sessions and lectures, three assessments, and course policies. But passing these checks does not mean the course is good. They do not check whether the content is true. This difference became important when I decided what I would and would not accept from the agent.

Twice, I found problems that were technically complete but did not fit the main idea of the course. First, two drama titles were written as simple romanisations instead of their real English release titles. This was especially important because the course is about checking what dramas show against reality. I corrected the titles and asked the agent to check the official English titles before making other changes
([`6be18b6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/6be18b6)).
The second problem was the use of generic stock images for the hero and social card. The instructor was also a placeholder who did not fit the idea of a course taught by a Korean professor. I asked the agent to replace these with better, course-specific images and a proper portrait
([`e89671e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/e89671e),
[`4810c26`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/4810c26)),
and then changed the instructor to someone who is actually Korean
([`1476a37`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-mayRhee218/commit/1476a37)).

In `CLAUDE.md`, I told the agent to check titles and names against real sources, instead of trusting a guessed romanisation or spelling. This is a simple technical version of what I want students to do when they study the dramas.

However, I deliberately did not create a `spec/` check for factual accuracy. Whether a drama's portrayal of Korean society is "accurate" or "exaggerated" is often a matter of judgement. It is not something a simple automated test can decide. That is why I chose to check it myself rather than make `pnpm check` decide it. 
