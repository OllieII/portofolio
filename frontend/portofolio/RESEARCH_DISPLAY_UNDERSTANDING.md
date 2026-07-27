# Research display understanding checklist

This checklist tracks what should be understood about the research-card layout
change.

## 1. The problem

- [x] The research lens hard-coded one project as the large featured card.
- [x] Three selected projects used a separate compact-card component and grid.
- [x] The hard-coded selection omitted a project whose primary category is
      `research` and included a game project as supporting research.

## 2. The solution

- [x] Select every project whose primary `category` is `research`.
- [x] Sort those projects by their existing research-lens priority.
- [x] Render every selected project with the same large media-and-evidence card.
- [x] Preserve the featured project's detailed evidence copy and derive the
      other cards' focus, methods, and summary from existing project content.
- [x] Confirm the optimized production build succeeds.
- [x] Replace the obsolete starter test with a current portfolio-route test.
- [x] Confirm the complete test suite passes: 3 suites and 8 tests.

## 3. Broader context and impact

- [x] Adding a future research-category project automatically adds a large card.
- [x] Games and experience projects remain available in their own sections and
      other portfolio lenses.
- [x] On narrower screens, each large card retains the existing stacked layout.
- [x] Confirm the rendered research lens contains four large cards and no
      compact research cards.

## Understanding check

- [ ] Explain why filtering by `category` is safer than maintaining a list of
      project IDs.
- [ ] Explain what content fills the three evidence rows on non-featured cards.
