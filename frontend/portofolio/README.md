# Portfolio frontend

React frontend for Olly Guo's portfolio, deployed at
`https://ollieii.github.io/portfolio/`.

## Commands

- `npm start` — run the development server.
- `npm test -- --watchAll=false` — run the test suite once.
- `npm run build` — create the production build.
- `npm run deploy` — build and publish the `build` directory to GitHub Pages.

## Content

Editable portfolio copy and project data live in `src/content`:

- `site.js` — shared navigation, homepage, section, and interface copy.
- `projects.js` — project cards, media, and case-study details.
- `cv-data.json` — CV content.
- `blog-posts.json` — blog content.

Components render the interface; content files describe it.

## Routing

The app is hosted below `/portfolio`. `BrowserRouter` owns that deployment
basename, so internal React routes and `Link` destinations must not repeat it.
