# Navigation and scroll behavior checklist

This checklist tracks what should be understood about the navigation fix.

## 1. The problem

- [x] Explain why preserving one scroll position across two client-side routes
      can make a newly opened page appear near its bottom.
- [x] Identify the three competing mechanisms in the old section navigation:
      route navigation, delayed timers, and repeated smooth-scroll calls.
- [x] Explain why scrolling to `projects` and then to a project category creates
      the visible up-then-down motion.

## 2. The solution

- [x] Explain why every navigation click should resolve to one final DOM target.
- [x] Explain why a route-state target is used when the requested section is on
      the home route.
- [x] Explain why both route-entry scrolling and the CV reset run before the
      browser paints the new route.
- [x] Understand that `scroll-margin-top` keeps a target from being hidden under
      the fixed header.

## 3. Edge cases and wider impact

- [x] Verify About, Research, Games, and Experience from the home page.
- [x] Verify those links when starting on the CV and project-detail routes.
- [x] Verify the CV starts at the top after leaving a deeply scrolled home page.
- [x] Verify direct `#projects` links and lens-filter links still scroll correctly.
- [x] Understand that browser Back/Forward entries can carry route state and that
      the same single-target rule is reapplied when such an entry is revisited.

## Implementation status

- [x] Replace chained timer-based scrolling with a single target per click.
- [x] Add a pre-paint top reset when the CV route mounts.
- [x] Add fixed-header spacing for project-category scroll targets.
- [x] Production build passes.
- [x] Focused automated navigation tests pass.
- [x] Browser verification passes.
