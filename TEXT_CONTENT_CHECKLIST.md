# Website text-content checklist

This document tracks the content-management model we are discussing and the
ideas that should be understood before changing it.

## 1. The current problem

- [x] Understand that visible text currently has more than one source.
- [x] Understand which text is embedded directly in React components.
- [x] Understand which text is stored in JavaScript data objects.
- [x] Understand which text is loaded from JSON files in `public/`.
- [x] Understand why project summary/detail duplication can drift out of sync.
- [x] Understand the loading and error behavior introduced by runtime `fetch()`.
- [x] Understand that the current repository has no CMS or database.

## 2. Recommended first solution

- [x] Treat content as its own layer, separate from presentation components.
- [x] Give every project one canonical record containing both card and detail copy.
- [x] Put global interface copy in a small site-content module.
- [x] Keep repeated collections (projects, CV entries, navigation) as structured data.
- [x] Keep tiny component-only labels close to the component when they are not
      editorial content.
- [ ] Add a documented schema or runtime validation so malformed content fails
      clearly.
- [x] Understand the tradeoff between build-time imports and runtime JSON fetches.

## 3. Possible later solutions

- [ ] Understand when Markdown/MDX would make long case studies easier to edit.
- [ ] Understand when a headless CMS becomes worth its authentication, schema,
      preview, deployment, and maintenance costs.
- [ ] Understand how localization would change the content shape.

## 4. Wider impact

- [x] Know which files an editor would change for homepage, projects, and CV.
- [x] Know which file an editor would change for blog content.
- [x] Know how a content change reaches the deployed GitHub Pages site:
      edit content, build, then deploy the generated bundle.
- [ ] Know how images and internal links should be referenced consistently.
- [ ] Know how to check missing projects, malformed data, and stale duplicated copy.

## Current recommendation

For the present site, use repository-managed content rather than adding a CMS:

1. Create `src/content/site.js` for homepage, navigation, lens, and reusable UI copy.
2. Create `src/content/projects.js` as the single source for each project's card
   metadata and full case-study sections.
3. Keep CV as structured data in `src/content/cv-data.json` and import it at build
   time for consistent loading.
4. Use Markdown/MDX only if case studies become substantially longer or a
   writing-first editing experience is desired.
5. Reconsider a headless CMS when editing must happen without Git/code, multiple
   people edit content, or drafts and scheduled publishing are required.

## Refactor progress

- [x] Phase 1: create `src/content/projects.js`.
- [x] Phase 1: combine card metadata and detail-page content into each canonical
      project record.
- [x] Phase 1: make project list and detail components import content at build time.
- [x] Phase 1: preserve existing numeric project URLs while adding stable slugs.
- [x] Phase 1: verify an optimized production build.
- [x] Phase 1 cleanup: remove archived `public/ProjectDescription/project*.json`.
- [x] Phase 2: create `src/content/site.js` and migrate global interface copy.
- [x] Phase 3 (partial): move section introductions from runtime JSON to a
      build-time import.
- [x] Phase 3: move CV content to `src/content/cv-data.json` and load it with a
      build-time import.
- [x] Cleanup: move blog posts to `src/content/blog-posts.json`.
- [x] Cleanup: remove obsolete `public/sections.json`.
