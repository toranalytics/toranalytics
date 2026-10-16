### Hi, I'm Junebeom Seo 👋

I build tools that make coding agents learn how *you* work, and I measure whether they actually do.

**[Off the Wall](https://github.com/toranalytics/off-the-wall)**: stop telling your coding agent the same thing twice.
A plugin for Claude Code and Codex that quotes your own past corrections back before each answer, shows what you
correct most, and routes subagents to cheaper models.

- Quoting your words beat summarising them into rules: 25 wins, 11 ties, 3 losses vs nothing attached;
  distilled rules did no better than random ones (39 replayed real requests, blind pairwise grading)
- Subagent routing: $0.17 instead of $0.30–0.44 on the same delegation, same result
- No API key, everything stays on your machine

```
/plugin install off-the-wall --marketplace toranalytics/off-the-wall
```

Seoul, Korea · [blog](https://toranalytics.github.io)
