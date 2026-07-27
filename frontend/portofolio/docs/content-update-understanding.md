# Portfolio content update — understanding checklist

This checklist records what must be understood and verified before the content
update is considered complete.

## 1. The problem

- [x] State the newest agreed personal positioning in one or two sentences.
- [x] Identify the intended readers and the different paths they may take
      through the portfolio.
- [x] Separate confirmed facts from positioning/copy choices.
- [x] Identify stale dates, broken characters, and cross-file inconsistencies.

## 2. The solution

- [x] Explain why each change belongs in `cv-data.json`, `projects.js`, or
      `site.js`.
- [x] Explain how homepage messaging, lens ordering, project copy, and CV facts
      reinforce the same positioning.
- [x] Check edge cases: URLs, project IDs/slugs, current/past dates, publication
      status, typography/encoding, and factual claims.
- [x] Validate that all edited files still parse/build successfully.

## 3. Broader context and impact

- [x] Explain how the update changes the first impression for research,
      product, and creative-technology readers.
- [x] Check which pages/components consume each edited field.
- [x] Confirm that new copy adds no unsupported claim or status. Existing
      time-sensitive dates and publication statuses were intentionally left
      unchanged pending factual confirmation.

## Validation

- `cv-data.json` parses as valid JSON.
- The optimized production build compiles successfully.
- Project IDs, slugs, links, publication statuses, and experience dates were
  preserved.
- The Penguin intervention is labeled as proposed and not yet deployed or
  validated.

## Current evidence

- The three requested files currently frame the portfolio around behavioral
  modeling, VR/HCI, interpretable ML, adaptive interaction, and game/narrative
  systems.
- Several entries still use `Present`; their correct end dates require
  confirmation.
- Mojibake is present in at least the Milky Way project description and the
  research-thread text.
- The newest discussion conclusion has been recovered from the preceding career
  planning task.

## Recovered discussion decision

- Shared direction: computational user understanding—model user state from
  behavioral data, then use the evidence for product decisions or adaptive
  interaction.
- Industry targets: Product Data Scientist and user-behavior-related Applied
  Scientist roles.
- Academic target: Behavioral Modeling / Computational HAI PhD, rather than
  broad qualitative or interface-design-led HCI.
- Product framing emphasizes metrics, diagnosis, intervention, and evaluation.
  Applied-science/research framing emphasizes modeling, validity, uncertainty,
  and generalization.
- A proposed intervention or polished demo must not be described as deployed
  product impact.
- The Creative Systems visitor path is intentionally hidden from this portfolio.
  Its project-level copy remains in the content data for possible reuse in a
  separate creative portfolio.

## Webpage inspection: duplicated portfolio base path

### Problem

- [x] Explain why the project cards currently generate URLs such as
      `/portofolio/portofolio/projects/2`.
- [x] Explain why the duplicated URL can appear to work while the intended
      public URL `/portofolio/projects/2` renders an empty page.
- [x] Identify the affected visitor paths: homepage project cards, research-lens
      cards, CV project links, and externally linked project URLs.

### Solution

- [x] Explain the single-owner rule: `BrowserRouter` owns the deployment
      `basename`, while route definitions and internal `Link` destinations must
      be relative to that basename.
- [x] Check route edge cases for the homepage, CV, UCSC portfolio, every project
      ID, direct page loads, and browser back navigation.

### Broader impact

- [x] Explain why this matters for shareable URLs, bookmarks, search results,
      analytics, and links from the CV or other sites.

### Inspection evidence

- `BrowserRouter` is configured with `basename="/portofolio"`.
- The project route is also declared as `/portofolio/projects/:id`.
- Project cards also link to `/portofolio/projects/:id`.
- Therefore React Router prepends the basename again and emits
  `/portofolio/portofolio/projects/:id`.
- In the local browser, the duplicated URL renders the case study, while the
  intended `/portofolio/projects/2` URL renders only the shared header and an
  empty main area.

### Resolution

- The route declarations now omit the deployment basename:
  `/projects/:id` and `/ucsc-cm-portfolio-2026`.
- Internal React project links now use `/projects/:id`; `BrowserRouter` adds
  `/portofolio` exactly once.
- Absolute links in CV content and the UCSC portfolio retain
  `/portofolio/projects/:id`, which is the correct public URL.
- The optimized production build compiled successfully. Browser verification
  found zero doubled paths on the homepage or CV; direct project and UCSC URLs
  rendered correctly, and browser back navigation returned to the CV.

## Rename `/portofolio` to `/portfolio`

### Dependency

- [x] Confirm that the current GitHub remote repository is named `portofolio`.
- [x] Rename the GitHub repository to `portfolio`, or confirm that it has
      already been renamed.
- [x] Update the React basename, package homepage, local preview base, CV URLs,
      UCSC links, and HTML title to use the corrected spelling.
- [x] Build and verify homepage, CV, project, and direct-load URLs under
      `/portfolio`.

Changing the application path before the GitHub repository is renamed would
cause the GitHub Pages deployment to request assets from a path that does not
exist.

### Rename verification

- The production build compiled successfully for `/portfolio`.
- Browser checks confirmed the homepage, CV, PDF download, and direct project
  URLs contain no user-facing `portofolio` spelling.
- The local Git remote now targets `https://github.com/OllieII/portfolio.git`.
- The renamed public repository was verified at
  `https://github.com/OllieII/portfolio`, and the updated Git remote can list
  its branches successfully.

## Navigation and Work lenses

### The problem

- [x] Explain why global navigation and a Work lens answer different user
      questions.
- [x] Explain why Research is a work characteristic, Games is an application
      context, and Other Projects is a misleading catch-all rather than three
      mutually exclusive project categories.
- [x] Identify the conflict when one project legitimately belongs to several of
      those descriptions.

### The proposed solution

- [x] Confirm the global destinations: About, Work, CV, with Contact included
      only if it has a distinct destination or section.
- [x] Explain that Work is one unified project collection and that Product &
      Applied Science, Research, and All Work are viewing modes over that
      collection.
- [x] Confirm that a homepage lens card opens Work with the corresponding lens
      selected, while All Work reveals the complete collection.
- [x] Confirm that XR, Games, Behavioral Modeling, Machine Learning, and Design
      Research remain available as project-level tags or future filters rather
      than primary navigation.
- [x] Confirm the homepage label change from Portfolio Lenses to Choose a View,
      while retaining One core direction, viewed through two lenses.

### Edge cases and implementation impact

- [x] Decide whether Contact earns a global navigation item or remains part of
      About/the footer.
- [x] Preserve direct URLs such as `/?lens=research#projects` and define the
      fallback for an unknown `lens` value as All Work.
- [x] Make Work navigation open `#projects` without imposing a lens.
- [x] Ensure the selected lens has a visible and accessible active state.
- [x] Replace the All Work presentation that currently re-creates the old
      Research/Games/Other Projects category hierarchy.
- [x] Update navigation and URL behavior tests, then run the production build.

### Broader context

- [x] Explain why simpler global navigation reduces premature interpretation
      while allowing the project content and lens framing to carry the site's
      real complexity.
- [x] Check the impact on shareable URLs, browser back navigation, mobile
      navigation, analytics, and future tag/filter behavior.

### Resolution and validation

- `Header.js` now renders only About, Work, and CV. Work clears any selected
  lens and opens `#projects`.
- Homepage Lens links and the Work switcher use shareable
  `?lens=<lens>#projects` URLs. Unknown lens values fall back to All Work.
- Product, Research, and All Work all read the same `projectData` array. Product
  and Research change priority and lens-specific headlines without creating
  duplicate project records.
- Research now presents all seven projects, including game and technical work,
  rather than filtering on the legacy `research` category.
- All Work renders one unified project grid. Legacy categories no longer create
  top-level navigation or separate Work sections; descriptive tags remain on
  the project cards.
- Contact links currently live inside the About hero and there is no separate
  Contact section, so Contact intentionally remains outside global navigation.
- Lens-aware project links preserve the selected lens in the query string.
  Detail pages display the lens-specific project headline and return to the
  same Work view; direct project URLs return to All Work.
- Detail section ordering is driven by lens configuration. For the VR telemetry
  project, Product foregrounds `Product Translation (Proposed)`, while Research
  foregrounds the research description and moves the proposed translation
  after the methods/technology evidence.
- The selected Lens exposes `aria-current="page"` in addition to its visual
  active state.
- Existing location-based analytics include the lens query string, so Product
  and Research views remain distinguishable without adding separate routes.
- Four test suites and sixteen tests pass. The optimized production build
  compiles successfully for the `/portfolio/` base path, and the homepage,
  Product, Research, project-detail, and CV URLs all return HTTP 200 locally.
- Screenshot-level visual verification remains pending because the in-app
  browser was unavailable during this run.

## Product & Applied Data Science / HCI & Human-Centered AI Lens refactor

### Problem and design judgment

- [x] Work remains one canonical collection. A Lens is a reading context, not
      a mutually exclusive category and not a second copy of a project.
- [x] Stable identity and facts remain on the canonical project record:
      `id`, `slug`, title, media, neutral summary, tags, and detail sections.
- [x] Lens metadata may change explicit order, audience-specific summary,
      emphasis, first evidence, and detail-section order.
- [x] All Work uses the neutral `brief` and canonical detail order. It does not
      inherit Product or Research language.
- [ ] Explain why copying project objects would eventually create conflicting
      titles, URLs, dates, teams, and results.
- [ ] Explain why a high predictive score does not by itself prove why a user
      behaved that way or that an intervention will improve outcomes.

### Reliable project identity mapping

- ID `2`, `vr-early-quit-prediction`: VR behavioral modeling / head-movement
  prediction.
- ID `3`, `beyond-the-garden-of-adrian`: Beyond the Garden of Adrian and the
  only currently public embodiment evidence. No separate behavioral-marker
  project exists in the canonical collection, so the work is not duplicated.
- No canonical project currently represents avatar-color systematic-review
  infrastructure. It is omitted from both lenses.
- ID `5`, `milky-way-density-structure`: astronomy ML.
- ID `4`, `partially-observable-markov-decision-process`: partially observable
  multi-agent research.
- Remaining work is ID `1` Library of Meialia, ID `6` The Otherside, and ID `7`
  Deep Learning for Computer Vision.

### Implemented Lens order

- Product: `2 → 3 → 5 → 4 → 1 → 6 → 7`.
- Research: `2 → 3 → 4 → 5 → 1 → 6 → 7`.
- Ordering uses each project's explicit `lenses.<lens>.order`; array position
  does not control a Lens.
- [ ] Explain why omitted projects should leave a gap in the recommendation
      mapping rather than be replaced by a loosely similar project.

### Product Lens

- Public name: Product & Applied Data Science.
- Core title: Behavioral Data → Product Decisions.
- Audience: Product Data Scientist, Behavioral Data Science, and Applied
  Scientist readers—not dashboard-only analyst positioning.
- A compact workflow precedes projects and groups only evidenced capabilities:
  instrumentation/data, analysis, modeling, interpretation, deployment, and
  infrastructure.
- Product summaries now answer the product/user problem, available data,
  analysis/model, measurable result where one exists, and the decision or
  deployment the evidence could support.
- Proposed interventions and unmeasured product effects remain explicitly
  proposed. Academic abstracts are not reused as Product card summaries.

### Capability evidence and exclusions

- Displayed from current project evidence: event logs and session telemetry;
  raw head-movement streams; session outcome datasets; Python, pandas, SciPy;
  behavioral feature engineering; scikit-learn and XGBoost; group-aware,
  time-based, and held-out-context evaluation; SHAP, partial dependence, and
  behavioral detectors; Unity/C# VR prototyping; HDF5-backed session data.
- Not displayed because the current canonical projects do not prove them:
  SQL, schema/version auditing, formal data-quality checks, A/B testing as a
  Product Data Science capability, causal inference, funnels, retention
  analysis, experimentation impact, deployed Unity inference/replay
  visualization, PostgreSQL, Docker, and NGINX.
- “Python feature, model, and interpretation pipeline” describes the documented
  analysis stages without making an unsupported reproducibility or production
  orchestration claim.
- [ ] Explain why an existing phrase such as “two A/B test versions” is not
      enough evidence to advertise experimentation capability without design,
      assignment, metrics, and results.

### Research Lens

- Public identity: HCI & Human-Centered AI Research.
- Core title: Human-Centered AI & Interactive Systems.
- The former telemetry chain is retained as a smaller current research thread,
  not the whole research identity.
- The broader approach is: build interactive systems → study human experience
  → model behavioral patterns → translate evidence into better design.
- Research summaries now foreground question, significance, method/system,
  validation, learning, and claim boundaries.
- ID `4` precedes astronomy in Research because adaptive decision-making under
  partial observability is closer to the stated HCAI trajectory; astronomy
  remains as supporting evidence for computational modeling.

### URL, accessibility, and detail behavior

- Product and Research project links preserve `?lens=<lens>`.
- Returning from a detail page restores the same Lens; direct/All Work detail
  URLs return to neutral Work.
- The selected switcher item exposes `aria-current="page"`.
- Detail pages use the same project identity and sections, while the selected
  Lens changes the lead, first evidence callout, and section ordering.
- Unknown Lens values safely fall back to All Work.

### Responsive and implementation validation

- [x] Confirm the Product workflow becomes three columns on desktop, two on
      intermediate widths, and one on mobile without horizontal overflow.
- [x] Confirm the long Lens labels wrap cleanly and remain usable by keyboard
      and touch.
- [x] Confirm Product, Research, All Work, and Lens-aware detail routes render
      correctly after tests and the production build.

### Validation evidence

- All 17 automated tests pass across four suites.
- The optimized production build compiles successfully for `/portfolio/`.
- Browser checks passed at 1440×900, 900×900, and 390×844.
- Product capability cards render in three, two, and one columns at those
  widths respectively; no tested page has horizontal overflow.
- Desktop and mobile checks confirmed the requested Product and Research
  ordering, `aria-current`, neutral All Work summaries, Lens-aware detail
  evidence, and return-to-Lens URL behavior.
