# VR Telemetry Writing Sample - Quick Compilation Template

If you don't have a full TVCG draft yet, here's what to include in a 5-8 page technical report:

---

## Suggested Structure

### 1. Title & Author
```
Using Head Movements to Predict Performance and Early Quitting in Virtual Reality

Olly (Ziqi) Guo and Kevin Ponto
Wisconsin Institute for Discovery, University of Wisconsin–Madison
```

### 2. Abstract (1 paragraph)
- Problem: Early quitting in educational VR
- Approach: Head-movement telemetry + ML
- Results: 80% within-game, 73% cross-game ROC-AUC
- Contribution: Interpretable features for adaptive systems

### 3. Introduction (~1 page)
- Why early quitting matters in educational VR
- Prior work on telemetry/engagement
- Gap: No interpretable behavioral predictors
- Your contribution: Rotation-based features + cross-game validation

### 4. Methods (~2 pages)

#### 4.1 Data Collection
- Source: Open Game Data repository (WID)
- Games: List the VR titles used
- Sessions: 7,000+ total, balanced quit/complete
- Features: Quaternion → Euler → interval segmentation

#### 4.2 Feature Engineering
```python
# Pseudocode or brief description:
1. Extract quaternion rotations from VR telemetry
2. Convert to per-frame Euler deltas (yaw, pitch, roll)
3. Segment into direction-consistent intervals
4. Bin interval durations on power-of-2 scales
5. Generate histograms (frequency + magnitude)
```

#### 4.3 Models & Validation
- Classifiers: Random Forest, XGBoost, Logistic Regression
- Splits: Within-game (80/20), time-based, cross-game
- Metrics: ROC-AUC, accuracy, precision/recall
- Interpretability: SHAP values, partial dependence plots

### 5. Results (~2 pages)

#### 5.1 Within-Game Performance
- Table: ROC-AUC for each game (~0.80 average)
- Confusion matrices
- Feature importance plot

#### 5.2 Cross-Game Generalization
- Train on Game A, test on Game B/C/D
- Results: ~0.73 ROC-AUC (moderate transfer)
- Discussion: What features generalize?

#### 5.3 Interpretability Analysis
- SHAP plot: Top 10 features
- Interpretation: Oscillatory search → quitting risk
- Partial dependence: Frozen gaze patterns

### 6. Discussion (~1 page)

#### 6.1 Key Findings
- Head movements are predictive across games
- Interpretable patterns (search, freeze, rapid scanning)
- Real-time deployment feasibility

#### 6.2 Implications for Adaptive Systems
- Intervention design: Hints, difficulty scaling
- Ethical considerations: Transparency, user control
- Deployment scenarios: New players, new games

#### 6.3 Limitations
- Generalization drops for very different games
- Head movement ≠ cognitive state (proxy)
- Need user studies for intervention validation

### 7. Conclusion (½ page)
- Recap: Interpretable early-quit detection
- Contribution: Cross-game robustness + SHAP analysis
- Future work: Real-time adaptive feedback

### 8. References
- Open Game Data repository
- Prior VR engagement research
- SHAP/interpretability papers
- Educational VR literature

---

## Essential Figures (3-5 minimum)

1. **Feature extraction pipeline diagram**
   - Quaternion → Euler → Intervals → Histograms

2. **ROC curves**
   - Within-game performance (multiple lines for different games)

3. **SHAP summary plot**
   - Top 10-15 features, color-coded by impact

4. **Cross-game transfer matrix**
   - Heatmap: Train game (rows) vs Test game (columns)

5. **Partial dependence plot** (optional)
   - Show how a specific feature (e.g., yaw oscillation frequency) relates to quit probability

---

## Writing Tips

### Use Present Tense for Methods
"We extract quaternion rotations from VR telemetry and convert them to Euler angles..."

### Be Specific About Contributions
"Unlike prior work that relies on gameplay events, our approach uses only passive head-movement telemetry, enabling real-time prediction without game-specific instrumentation."

### Quantify Everything
- "7,000+ sessions across 4 VR games"
- "80% ROC-AUC within-game, 73% cross-game"
- "Top 3 features explain 65% of variance (SHAP)"

### Address Ethics Early
"While our system enables adaptive interventions, we emphasize the importance of user transparency and opt-in consent for behavioral modeling."

---

## LaTeX Template (if compiling from scratch)

```latex
\documentclass{article}
\usepackage{graphicx}
\usepackage{amsmath}
\usepackage{cite}

\title{Using Head Movements to Predict Performance and Early Quitting in Virtual Reality}
\author{Olly (Ziqi) Guo and Kevin Ponto}
\date{2025}

\begin{document}
\maketitle

\begin{abstract}
[Your abstract here]
\end{abstract}

\section{Introduction}
[Your intro]

\section{Methods}
\subsection{Data Collection}
[Details]

\subsection{Feature Engineering}
[Pipeline description]

\section{Results}
\subsection{Within-Game Performance}
See Figure~\ref{fig:roc}.

\begin{figure}[h]
\centering
\includegraphics[width=0.8\textwidth]{roc_curves.png}
\caption{ROC curves for within-game prediction}
\label{fig:roc}
\end{figure}

\section{Discussion}
[Your discussion]

\section{Conclusion}
[Your conclusion]

\bibliographystyle{plain}
\bibliography{references}

\end{document}
```

---

## If You're Short on Time

### Minimum Viable Version (3-4 pages):
1. **Introduction** (½ page): Problem + your approach
2. **Methods** (1 page): Feature extraction + models
3. **Results** (1 page): Within-game + cross-game ROC-AUC
4. **Discussion** (½ page): Interpretability + ethics
5. **2-3 figures**: Pipeline, ROC curves, SHAP plot

This is sufficient to show:
- Technical depth (ML pipeline, feature engineering)
- Research rigor (cross-validation, interpretability)
- Writing ability (clear methods, thoughtful discussion)

---

## Exporting from Jupyter/Python

If you have notebooks with your analysis:

```python
# Generate key figures
import matplotlib.pyplot as plt

# ROC curves
plt.figure(figsize=(8, 6))
for game, fpr, tpr in results:
    plt.plot(fpr, tpr, label=f"{game} (AUC={auc:.2f})")
plt.xlabel("False Positive Rate")
plt.ylabel("True Positive Rate")
plt.legend()
plt.savefig("roc_curves.png", dpi=300, bbox_inches='tight')

# SHAP summary
import shap
shap.summary_plot(shap_values, X_test, show=False)
plt.savefig("shap_summary.png", dpi=300, bbox_inches='tight')
```

Then compile in Word/Google Docs with figures embedded.

---

## Quick Checklist

- [ ] Abstract (100-150 words)
- [ ] Methods section (describe pipeline)
- [ ] Results with at least 2 figures
- [ ] Discussion (interpretability + ethics)
- [ ] Export as PDF
- [ ] Name it `VR_Telemetry_Draft.pdf`
- [ ] Place in `public/writing/` folder

**Time estimate:** 2-4 hours (if you have figures/results ready)

---

## Alternative: Use Existing Writeups

If you have:
- Conference paper draft
- Thesis chapter
- Lab report
- Research proposal

→ Just export that as PDF. Even if incomplete, it's better than nothing.

The key is showing **you can write technical research**, not having a perfect manuscript.
