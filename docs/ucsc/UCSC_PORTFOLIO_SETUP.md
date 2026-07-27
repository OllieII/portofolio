# UCSC Computational Media Portfolio - Setup Guide

## Overview

I've created a dedicated UCSC Computational Media Portfolio page at:
**https://ollieii.github.io/portofolio/#/portofolio/ucsc**

This page explicitly frames your work in the **Technical / Creative / Interpretive** structure that UCSC CM requires.

---

## What's Already Done ✅

### 1. Page Structure Created
- New route: `/portofolio/ucsc`
- Added to navigation header as "UCSC CM"
- Clean 3-section layout matching UCSC requirements

### 2. Projects Mapped

**Technical Systems (3 items):**
1. VR Telemetry & Early-Quit Prediction System
2. Library of Meialia – Narrative & Telemetry Systems
3. POMG Solver – Multi-Agent RL Framework

**Creative Works (2 items):**
1. Beyond the Garden of Adrian – VR Theatre Performance
2. Library of Meialia – Narrative Design & World-Building

**Interpretive / Writing (3 items):**
1. VR Telemetry Analysis paper (TVCG draft)
2. Beyond the Garden of Adrian paper (IJPADM submission)
3. Milky Way Density Structure poster

### 3. Your Contributions Clearly Stated
Each project includes:
- 1-2 sentence summary
- "My Role" section with specific technical/creative contributions
- Links to project pages, GitHub, Steam, etc.

---

## What You Need to Do 📋

### CRITICAL: Add Writing Sample PDFs

The page currently links to 3 PDFs that **don't exist yet**. You MUST add at least one (ideally all three):

#### 1. VR Telemetry Paper (HIGHEST PRIORITY)
**File path:** `frontend/portofolio/public/writing/VR_Telemetry_Draft.pdf`

**What to include:**
- Your TVCG manuscript draft
- Methods section (feature extraction, ML pipeline)
- Results with SHAP analysis figures
- Discussion of ethical implications
- Cross-game generalization results

**If you don't have a full draft yet:**
- Compile your methods writeup + experimental results
- Add 2-3 key figures (SHAP plots, ROC curves)
- Write 1-2 pages of discussion/implications
- Even a 5-page technical report is sufficient

#### 2. Garden of Adrian Paper
**File path:** `frontend/portofolio/public/writing/GOA_IJPADM_Submission.pdf`

**What to include:**
- Your co-authored paper with Megan Reilly
- A/B testing methodology
- Qualitative analysis section
- Discussion of intimacy/embodiment findings

**If not ready:**
- Ask Megan for the latest draft
- Or compile your survey analysis + methods section

#### 3. Milky Way Poster
**File path:** `frontend/portofolio/public/writing/Milky_Way_Poster.pdf`

**What to include:**
- Research poster you presented
- Can export from PowerPoint/LaTeX as PDF

---

## How to Add PDFs

### Option 1: If you have the files locally
1. Copy PDFs to: `frontend/portofolio/public/writing/`
2. Name them exactly:
   - `VR_Telemetry_Draft.pdf`
   - `GOA_IJPADM_Submission.pdf`
   - `Milky_Way_Poster.pdf`

### Option 2: Use Google Drive temporarily
1. Upload PDFs to Google Drive
2. Set sharing to "Anyone with the link can view"
3. Update the links in `UCSCPortfolio.js`:

```javascript
// Replace this:
<PDFLink href={`${process.env.PUBLIC_URL}/writing/VR_Telemetry_Draft.pdf`}>

// With this:
<PDFLink href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing">
```

---

## Optional Enhancements

### Add GitHub Repo Links
If you have public repos for any projects:
1. Update the GitHub links in `UCSCPortfolio.js`
2. Change from `https://github.com/OllieII` to specific repo URLs

### Add More Projects
If you have other strong technical/creative/interpretive work:
1. Add new `<ProjectItem>` blocks
2. Follow the same structure (title, summary, role, links)

### Customize Descriptions
Current descriptions are based on your CV and project JSONs. Feel free to:
- Tighten summaries to 1-2 sentences
- Emphasize CM-specific aspects (interaction design, user research, etc.)
- Add links to videos, demos, itch.io pages

---

## Testing Before Submission

### 1. Local Testing
```bash
cd frontend/portofolio
npm start
```
Visit: `http://localhost:3000/#/portofolio/ucsc`

### 2. Check All Links
- Click every "Project Page" link → should go to your existing portfolio pages
- Click every PDF link → should download/open the paper
- Click GitHub/Steam links → should go to correct URLs

### 3. Mobile Testing
- Resize browser window to phone size
- Check that text is readable
- Verify all buttons/links work

---

## Deployment

Once PDFs are added and you've tested locally:

```bash
cd frontend/portofolio
npm run build
npm run deploy
```

Your UCSC portfolio will be live at:
**https://ollieii.github.io/portofolio/#/portofolio/ucsc**

---

## What to Submit to UCSC

### Option 1: Direct Link (Recommended)
Submit this URL:
```
https://ollieii.github.io/portofolio/#/portofolio/ucsc
```

This gives them the structured TOC they need without forcing them to explore your full site.

### Option 2: Main Site + Note
Submit:
```
https://ollieii.github.io/portofolio/

Note: For UCSC CM portfolio requirements, see dedicated page at:
https://ollieii.github.io/portofolio/#/portofolio/ucsc
```

---

## Why This Works

✅ **Explicit Technical/Creative/Interpretive framing** – No guessing required

✅ **Clear contribution breakdown** – "My Role" sections for every project

✅ **Direct links to writing samples** – PDFs downloadable, not just blurbs

✅ **Table-of-contents structure** – One-page overview with jump links

✅ **Professional presentation** – Matches your portfolio aesthetic

✅ **Shows CM range** – ML/systems + game design + research writing

---

## Quick Start Checklist

- [ ] Add at least 1 writing sample PDF (VR Telemetry is highest priority)
- [ ] Test all links on local dev server
- [ ] Deploy to GitHub Pages
- [ ] Visit live URL and verify everything works
- [ ] Submit URL to UCSC

**Estimated time to complete:** 30-60 minutes (depending on how ready your PDFs are)

---

## Questions?

The page is fully functional except for the PDF links. Once you drop in those 3 PDFs (or even just 1), you're ready to submit.

If UCSC asks for specific formatting changes, let me know and I can adjust the layout.
