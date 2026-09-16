# Portfolio content map

The React app imports editorial content at build time from
`frontend/portofolio/src/content`.

| Path | Purpose |
| --- | --- |
| `site.js` | Shared navigation, homepage, section, lens, and interface copy |
| `projects.js` | Project cards, media references, case-study sections, and lens emphasis |
| `cv-data.json` | CV content and project links |
| `blog-posts.json` | Blog metadata and Markdown, displayed at `/blog` and `/blog/:slug` |

Project media, downloadable PDFs, icons, and browser metadata remain under
`frontend/portofolio/public`. Their paths are referenced by the source files or
components above.

The legacy runtime JSON folders (`public/ProjectDescription`, `public/Blogs`,
`public/sections.json`, and `public/cv-data.json`) are obsolete and have been
removed.

When editing content, change the canonical file in `src/content`, run the tests,
and create a production build.
