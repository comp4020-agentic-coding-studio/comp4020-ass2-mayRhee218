# Your harness

Rules I hold the agent to for this repo, built up from how Assignment 2
actually went.

## Content

- Never remove a `STARTER_CONTENT` comment until the content it guards has
  actually been replaced. Removing it first and filling in the content after
  is backwards — if you catch yourself doing that, put the marker back.
- Alt text must describe the real image, not a generic placeholder. Look at
  the image before writing its alt text — for photos and posters this means
  actually viewing the file, not inferring from the filename.
- When a title, name, or term is being adapted across languages (e.g. a
  Korean drama's official English title), verify it — a web search against
  the real release — rather than trust an assumed romanisation or the
  spelling I happen to type in a prompt.
- Generic/placeholder site art (hero images, OG cards) should match the
  site's actual brand tokens (colours, style) rather than being arbitrary —
  check the theme's CSS for the real palette before generating anything.

## Process

- Run `pnpm check` and `pnpm check:evidence` after every content change,
  before calling it done. A red check later is mine, not inherited.
- Before staging: review `git status` and add specific paths. Never
  `git add -A`.
- Before any destructive git operation, check `git status` first.
- Commit in focused units (one concern per commit) so `PROCESS.md` citations
  point at something legible.
