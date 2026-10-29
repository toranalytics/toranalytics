### Hi, I'm Junebeom Seo 👋

I build tools that make coding agents learn how *you* work, and I measure whether they actually do.

**[Off the Wall](https://github.com/toranalytics/off-the-wall)**: an early plugin for Claude Code and Codex that quotes your own past corrections
from the same working directory back before each answer, shows what you correct most, and gives the orchestrator
model-selection guidance for subagents.

- Not a guarantee of better answers or lower cost. The evidence so far is one person's text replays plus a synthetic demo, one Codex smoke run and one headless Claude Code smoke run
- Hooks need to be trusted in Codex (`/hooks`) before they run; Claude Code support is experimental
- Measured so far (synthetic personal-preference tasks, Claude Code with haiku): the model followed a preference it could not otherwise know 1/33 times with no recall, 9/33 with Off the Wall and 17/33 with wide recall (the default since 0.3.0); see [the evidence and its limits](https://github.com/toranalytics/off-the-wall#evidence)
- No separate API key. Storage is local, but judging and reports send excerpts to your own model provider

```
/plugin install off-the-wall --marketplace toranalytics/off-the-wall
```

**Writing**

- [Off the Wall: a plugin that shows your past corrections back to your coding agent, word for word](https://toranalytics.github.io/en/otw-what-it-does/): what it does and does not do, with the test details at the end (also in [한국어](https://toranalytics.github.io/otw-what-it-does/) and [中文](https://toranalytics.github.io/zh/otw-what-it-does/))
- [My coding agent cost $1,064 last week. 44% of it was the cache re-writing itself](https://toranalytics.github.io/cache-leak/): two cache breakpoints that were placed to protect the cache, and what measuring them showed

Seoul, Korea · [blog](https://toranalytics.github.io) · [X @toranalytics](https://x.com/toranalytics)
