export const siteText = {
  seo: {
    defaultTitle: 'Home',
  },
  navigation: {
    about: 'About',
    work: 'Work',
    cv: 'CV',
  },
  homepage: {
    name: 'Olly Guo',
    portraitAlt: 'Olly Guo',
    caption: 'Computational user understanding through the behavioral traces people leave in interactive systems.',
    introduction: 'I use behavioral telemetry and interpretable models to identify user states and friction, then translate the evidence into product hypotheses, measurable interventions, and research questions about adaptive human-AI systems.',
    chips: [
      'MSCS @ UIUC',
      'Behavioral modeling',
      'Product data science',
      'Computational HAI',
    ],
    scrollPrompt: 'Selected work',
    contactLinks: {
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      instagram: 'Instagram',
    },
  },
  lensExplorer: {
    eyebrow: 'Choose a view',
    title: 'One core direction, viewed through two lenses.',
    introduction: 'The same work can support product decisions or contribute new knowledge about people and interactive systems.',
    paths: [
      {
        key: 'product',
        audience: 'For product and applied-science teams',
        title: 'Product & Applied Data Science',
        summary: 'Behavioral and event data translated into product evidence, intervention hypotheses, and rigorous evaluation.',
        bestFor: 'Best for: Product Data Scientist, Behavioral Data Science, and Applied Scientist roles.',
        cta: 'View Industry Path',
      },
      {
        key: 'research',
        audience: 'For research readers',
        title: 'HCI & Human-Centered AI Research',
        summary: 'Interactive systems, human experience, interpretable models, validity, and generalization.',
        bestFor: 'Best for: PhD committees, faculty, and research labs.',
        cta: 'View Research Path',
      },
    ],
    archivePrompt: 'Prefer the complete archive?',
    archiveLink: 'View all work.',
    separator: 'Selected work',
  },
  work: {
    viewAsLabel: 'View as:',
    lensContextLabel: 'Viewing as',
  },
  buttons: {
    openCaseStudy: 'Open case study',
    viewAllProjects: 'View all projects',
    backToProjects: 'Back to projects',
    viewFullSize: 'View full size',
    close: 'Close',
  },
  projectDetail: {
    fallbackTitle: 'Project Details',
    notFoundTitle: 'Project not found',
    noMedia: 'No media available for this project.',
    increaseFontSize: 'Increase font size',
    decreaseFontSize: 'Decrease font size',
  },
  productView: {
    title: 'Behavioral Data → Product Decisions',
    introduction: [
      'I turn behavioral and event data into evidence that can guide product decisions. My work combines telemetry pipelines, statistical analysis, interpretable machine learning, and interactive prototyping to identify where users struggle, disengage, or respond differently across contexts.',
      'I am particularly interested in products where behavior unfolds over time—games, learning systems, immersive experiences, and human-centered AI. I connect predictive performance with practical questions: what should be measured, what might be changed, and how an intervention should be evaluated.',
    ],
    capabilitiesLabel: 'Product Data Workflow / Capabilities',
    capabilities: [
      {
        stage: 'Instrumentation & data',
        evidence: ['Event logs and session telemetry', 'Raw head-movement streams', 'Session-level outcome datasets'],
      },
      {
        stage: 'Analysis',
        evidence: ['Python and pandas', 'Behavioral feature engineering', 'Statistical comparison with SciPy'],
      },
      {
        stage: 'Modeling',
        evidence: ['scikit-learn and XGBoost', 'Group-aware evaluation', 'Time-based and held-out-context splits'],
      },
      {
        stage: 'Interpretation',
        evidence: ['SHAP feature attribution', 'Partial-dependence analysis', 'Hand-crafted behavioral detectors'],
      },
      {
        stage: 'Deployment',
        evidence: ['Unity/C# interactive VR prototypes', 'Iterative experience delivery informed by participant feedback'],
      },
      {
        stage: 'Infrastructure',
        evidence: ['HDF5 session datasets', 'Python feature, model, and interpretation pipeline'],
      },
    ],
    projectsLabel: 'Projects through this lens',
  },
  researchView: {
    title: 'Human-Centered AI & Interactive Systems',
    introduction: [
      'I study how people experience and interact with intelligent, immersive, and playful systems—and how computational methods can help us understand, evaluate, and improve those interactions.',
      'My work spans behavioral modeling, interpretable machine learning, VR/XR, learning technologies, and interactive system design. Across projects, I combine system building, empirical studies, and quantitative analysis, while paying particular attention to validity, generalization, and human agency.',
    ],
    threadLabel: 'Current research thread',
    thread: 'Connecting behavioral traces with user experience, interpretable models, and adaptive interaction across immersive and learning contexts.',
    approachLabel: 'Research approach',
    approach: 'Build interactive systems → study human experience → model behavioral patterns → translate evidence into better design.',
    featuredLabel: 'Featured through this lens',
    projectLabel: 'Viewed through this lens',
    coreQuestionLabel: 'Research question',
    focusLabel: 'Research focus',
    evidenceLabel: 'First evidence',
    coreQuestion: 'Which early behavioral signals reliably represent user state and friction, and how well do they generalize across users and interactive contexts?',
    methodsLabel: 'Methods',
    methods: 'VR telemetry / behavioral modeling / interpretable ML / HCI',
    relevanceLabel: 'What was learned / boundaries',
    relevance: 'This project grounds my current direction in computational user understanding while making the limits of behavioral inference explicit.',
    supportingLabel: 'Supporting Work',
    supportingTitle: 'Additional evidence for the research trajectory',
    methodsListLabel: 'Research Methods I Use',
    methodsList: [
      'Behavioral telemetry',
      'Interpretable ML',
      'User-state modeling',
      'Cross-context evaluation',
      'Experimental and observational analysis',
    ],
    archiveLabel: 'Full Archive',
  },
};

export const lensConfig = {
  product: {
    label: 'Product & Applied Data Science',
    title: 'Behavioral Data → Product Decisions',
    detailSectionOrder: [
      'Product Translation (Proposed)',
      'Project Description',
      'My Responsibility',
      'My Role',
      'Tech Stack',
    ],
  },
  research: {
    label: 'HCI & Human-Centered AI Research',
    title: 'Human-Centered AI & Interactive Systems',
    detailSectionOrder: [
      'Project Description',
      'My Responsibility',
      'My Role',
      'Tech Stack',
      'Product Translation (Proposed)',
    ],
  },
  all: {
    label: 'All Work',
    title: 'All Work',
    description: 'The complete project collection, shown without prioritizing one reader or professional narrative.',
  },
};

export default siteText;
