### Hi, I'm Junebeom Seo 👋

I build tools that make coding agents learn how *you* work, and I measure whether they actually do.

**[Off the Wall](https://github.com/toranalytics/off-the-wall)**: an early plugin for Claude Code and Codex that quotes your own past corrections
from the same working directory back before each answer, shows what you correct most, and gives the orchestrator
model-selection guidance for subagents.

- Not a guarantee of better answers or lower cost. The evidence so far is one person's text replays plus a synthetic demo and one Codex smoke run
- Hooks need to be trusted in Codex (`/hooks`) before they run; Claude Code support is experimental
- No separate API key. Storage is local, but judging and reports send excerpts to your own model provider

```
/plugin install off-the-wall --marketplace toranalytics/off-the-wall
```

**Writing**

- [My coding agent cost $1,064 last week. 44% of it was the cache re-writing itself](https://toranalytics.github.io/cache-leak/): two cache breakpoints that were placed to protect the cache, and what measuring them showed

Seoul, Korea · [blog](https://toranalytics.github.io) · [X @toranalytics](https://x.com/toranalytics)
