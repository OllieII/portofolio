# Repository cleanup checklist

## Problem

- [x] Preserve the existing user-owned worktree and distinguish current changes
      from disposable files.
- [x] Separate generated artifacts, obsolete documentation, unused source, and
      unreferenced media rather than treating them as equivalent.
- [x] Confirm that the deleted legacy JSON files were replaced by canonical
      sources under `src/content`.

## Safe cleanup completed

- [x] Remove local development and preview log files.
- [x] Ignore those log filenames so they do not return.
- [x] Replace the generic Create React App README with repository-specific
      setup, content ownership, routing, and deployment information.
- [x] Remove the abandoned backend, its tracked `node_modules`, and unused
      root dependency manifests.
- [x] Remove three replaced local trailer videos and unreferenced starter
      images.
- [x] Update repository documentation that still described the deleted runtime
      JSON architecture.

## Candidates requiring proof before deletion

- [ ] Blog components that are not mounted by the current router.
- [x] Skills visualization components and position data that are not mounted by
      the current homepage.
- [x] Old home-card components that are not imported.
- [x] Compatibility and starter files that are no longer imported.
- [ ] Remaining public images absent from current project-content references;
      retain unless their archival value is confirmed.
- [ ] Root-level reference images and archived project documents.

## Validation

- [x] Run the complete test suite: 17 tests passed.
- [x] Run the optimized production build.
- [x] Verify the homepage, CV, and a direct project route.
