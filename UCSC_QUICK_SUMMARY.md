# UCSC CM Portfolio - Quick Summary

## What I Built

Created a dedicated **UCSC Computational Media Portfolio** page that structures your work exactly how UCSC requires:

**URL (once deployed):** `https://ollieii.github.io/portofolio/#/portofolio/ucsc`

---

## The 3 Categories (What UCSC Wants)

### 1. TECHNICAL SYSTEMS (3 projects)
- **VR Telemetry Pipeline:** ML system for predicting quitting behavior (80% accuracy, 7K+ sessions)
- **Library of Meialia Systems:** Narrative engine + telemetry (Unity/C#/Lua, 3K+ Steam players)
- **POMG Solver:** Multi-agent RL framework (Nash Q, DQN, fictitious play)

### 2. CREATIVE WORKS (2 projects)
- **Beyond the Garden of Adrian:** VR theatre (Festival d'Avignon, intimacy research)
- **Library of Meialia Narrative:** 10K+ words of branching story, world-building, 8+ NPCs

### 3. INTERPRETIVE / WRITING (3 items)
- **VR Telemetry Paper:** TVCG manuscript (Methods, SHAP analysis, ethics) – **NEEDS PDF**
- **Garden of Adrian Paper:** IJPADM submission (qualitative analysis, embodiment) – **NEEDS PDF**
- **Milky Way Poster:** Astrophysics research (Gaia DR3, TensorFlow classifier) – **NEEDS PDF**

---

## What You MUST Do Before Submitting

### 🚨 CRITICAL: Add Writing Sample PDFs

The page is 100% functional **except** it links to 3 PDFs that don't exist yet.

**Add at least ONE** (VR Telemetry is highest priority):

1. **VR_Telemetry_Draft.pdf** → `frontend/portofolio/public/writing/`
2. **GOA_IJPADM_Submission.pdf** → `frontend/portofolio/public/writing/`
3. **Milky_Way_Poster.pdf** → `frontend/portofolio/public/writing/`

---

## How to Deploy

```bash
cd frontend/portofolio
npm run build
npm run deploy
```

Then submit this URL to UCSC:
```
https://ollieii.github.io/portofolio/#/portofolio/ucsc
```

---

## Why This Solves Your Problem

❌ **Before:** Generic portfolio with no CM framing, no writing samples, unclear contributions

✅ **After:** 
- Explicit Technical/Creative/Interpretive structure
- Clear "My Role" for every project
- Direct PDF links (once you add them)
- One-page TOC that screams "I understand CM programs"

---

## Time to Complete

- **If PDFs ready:** 15 minutes (copy files, deploy)
- **If PDFs need compilation:** 1-2 hours (write up methods, export figures, combine into PDF)
- **If no PDFs yet:** Start with VR Telemetry writeup (Methods + Results = sufficient)

---

## Full Details

See `UCSC_PORTFOLIO_SETUP.md` for:
- Complete checklist
- Testing instructions
- How to add Google Drive links temporarily
- Optional enhancements

---

## Bottom Line

**Your current site alone:** Not enough (no CM framing, no real writing samples)

**Your site + this new UCSC page:** Absolutely sufficient (if you add the PDFs)

**Next step:** Add at least 1 PDF, deploy, submit the URL.
