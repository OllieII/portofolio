export const projects = [
  {
    id: 2,
    category: 'research',
    media: `${process.env.PUBLIC_URL}/img/Waddle/1.jpg`,
    title: 'Predicting Early Quitting from VR Telemetry',
    brief: 'Interpretable behavioral modeling across 7,000+ VR sessions, extended into a testable product-intervention proposal.',
    meta: 'Behavioral modeling / VR telemetry',
    signal: 'From embodied signals to testable intervention',
    tags: ['behavioral modeling', 'VR', 'interpretable ML', 'user state'],
    slug: 'vr-early-quit-prediction',
    details: {
      media: [
        '/img/Waddle/1.jpg',
        '/img/Waddle/2.png',
        '/img/Waddle/3.png',
        '/img/Waddle/4.png',
        '/img/Waddle/5.png',
      ],
      sections: [
        {
          heading: 'Project Description',
          body: 'This project asks whether early head-movement telemetry can identify sessions at risk of quitting. We extract quaternion-based head rotations (and positions when available) from gameplay logs, convert them to per-frame Euler deltas, and segment the stream into direction-consistent intervals in yaw, pitch, and roll. Interval durations and movement magnitudes are binned on power-of-two time scales to create length-invariant behavioral features. Using more than 7,000 sessions, we train group-aware classifiers (Random Forest, XGBoost, Logistic Regression) and evaluate them with within-game, time-based, and held-out-game splits. T-tests, hand-crafted detectors, SHAP, and partial-dependence plots help distinguish predictive associations from explanations that still require validation.',
        },
        {
          heading: 'My Responsibility',
          body: 'Implemented the head-rotation feature pipeline from raw VR telemetry\nConstructed balanced session-level datasets (quit vs. non-quit)\nTrained and compared multiple classifiers (Random Forest, XGBoost, Logistic Regression)\nEvaluated robustness with time-based and cross-game splits\nRan SHAP and other interpretability analyses to identify movement patterns associated with completion and early quitting',
        },
        {
          heading: 'Product Translation (Proposed)',
          body: 'The model results motivate a product hypothesis, not a claim of proven impact: when sustained high quitting risk coincides with an actionable moment, offer an optional contextual help prompt. The proposed primary metric is whether the player completes a meaningful next action within 120 seconds. Guardrails include immediate headset removal, unproductive dwell time, interruption, discomfort, and perceived loss of autonomy. A triggered randomized experiment would compare eligible high-risk moments with and without the prompt. This intervention and its effects have not yet been deployed or validated.',
        },
        {
          heading: 'Tech Stack',
          body: 'Python, NumPy, pandas, SciPy, scikit-learn, XGBoost, h5py (HDF5), matplotlib',
        },
      ],
    },
    lenses: {
      research: {
        order: 1,
        summary: 'Can early head movement reveal when a learner is likely to leave a VR session, and do those signals generalize across games? I built a feature and modeling pipeline over 7,000+ sessions, then tested it with within-game, time-based, and held-out-game splits. Results reached about 0.80 ROC-AUC within games and 0.73 on held-out games; SHAP patterns remain predictive associations, not validated psychological explanations.',
        emphasis: 'Validating interpretable behavioral signals across VR contexts',
        featuredEvidence: '7,000+ sessions; ~0.80 within-game ROC-AUC and ~0.73 held-out-game ROC-AUC.',
      },
      product: {
        order: 1,
        summary: 'Educational VR teams need earlier evidence of where players disengage. From raw head-rotation telemetry and quit outcomes across 7,000+ sessions, I engineered behavioral features and trained interpretable classifiers that reached about 0.80 ROC-AUC within games and 0.73 on held-out games. The signals could support a carefully triggered help prompt, but that intervention has not been deployed or validated.',
        emphasis: 'Turning early-quit signals into a measurable intervention hypothesis',
        featuredEvidence: 'Cross-context model performance and SHAP evidence from 7,000+ VR sessions.',
      },
      creative: {
        headline: 'Using movement data as feedback for experience design',
        priority: 4,
      },
    },
  },
  {
    id: 3,
    category: 'research',
    media: `${process.env.PUBLIC_URL}/img/GOA/GOA0.png`,
    title: 'Virtual Theatre: Beyond the Garden of Adrian',
    brief: 'An immersive theatre study where narrative, embodiment, and spatial interaction become the research material.',
    meta: 'VR theatre / interaction',
    signal: 'Studying actor-audience presence in VR',
    tags: ['VR', 'HCI', 'theatre', 'presence', 'embodiment'],
    slug: 'beyond-the-garden-of-adrian',
    details: {
      media: [
        '/img/GOA/2.png', '/img/GOA/6.png', '/img/GOA/7.png',
        '/img/GOA/8.png', '/img/GOA/9.png', '/img/GOA/11.png',
        '/img/GOA/12.png', '/img/GOA/13.png', '/img/GOA/14.png',
        '/img/GOA/16.png', '/img/GOA/17.png', '/img/GOA/18.png',
        '/img/GOA/21.png', '/img/GOA/23.png', '/img/GOA/24.png',
        '/img/GOA/25.png', '/img/GOA/27.png', '/img/GOA/28.png',
        '/img/GOA/29.png', '/img/GOA/32.png',
      ],
      sections: [
        {
          heading: 'Project Description',
          body: 'Beyond the Garden of Adrian is a virtual theatre experience created in Unity and adapted from a one-on-one immersive theatre performance by Adrian Howells. The experiment explores the potential for building intimate experiences in a virtual environment and how each element uniquely contributes to audience immersion and embodiment.',
        },
        {
          heading: 'My Responsibility',
          body: 'Designed and implemented two versions of Beyond the Garden of Adrian for structured comparison\nCollaborated with the team to design and implement interactive elements while aligning technical decisions with the artistic vision\nOptimized the VR experience based on audience feedback to provide smooth and immersive interaction',
        },
        {
          heading: 'Tech Stack',
          body: 'Unity, C#, Blender, Adobe Photoshop, Oculus VR',
        },
      ],
    },
    lenses: {
      research: {
        order: 2,
        summary: 'How do design choices in a one-on-one virtual theatre experience shape presence, embodiment, and actor-audience interaction? I helped build two Unity/C# versions, collaborated on the interactive design, and iterated from participant feedback. The project provides system-building and study evidence, but the current public record does not support a separate behavioral-marker project or a quantified causal claim.',
        emphasis: 'Studying presence, embodiment, and audience agency in virtual theatre',
        featuredEvidence: 'Two implemented VR versions and participant-informed iteration.',
      },
      product: {
        order: 2,
        summary: 'An intimate VR theatre experience needed interaction choices that preserved presence while supporting smooth participant engagement. I helped build two Unity/C# versions and iterated the experience from audience feedback. This work supports interactive prototyping and design decisions for immersive products; it does not establish a deployed personalization or causal experiment result.',
        emphasis: 'Using participant evidence to improve an immersive interaction',
        featuredEvidence: 'Two Unity/C# VR prototypes developed and refined with audience feedback.',
      },
      creative: {
        headline: 'Building narrative systems where spatial interaction shapes the story',
        priority: 1,
      },
    },
  },
  {
    id: 4,
    category: 'research',
    media: `${process.env.PUBLIC_URL}/img/POMDP/output.png`,
    title: 'Partially Observable Markov Decision Process',
    brief: 'Comparing Nash Q-learning, DQN, and fictitious play in multi-agent reinforcement learning environments.',
    meta: 'RL / multi-agent systems',
    signal: 'Solving strategy under uncertainty',
    tags: ['reinforcement learning', 'multi-agent systems', 'uncertainty', 'ML'],
    slug: 'partially-observable-markov-decision-process',
    details: {
      media: ['/img/POMDP/3.png', '/img/POMDP/1.png', '/img/POMDP/2.png'],
      sections: [
        {
          heading: 'Project Description',
          body: 'This research explores partially observable Markov games and multi-agent reinforcement learning across several benchmark problems: a competitive Car-Truck 3x3 grid world, the classic Tiger POMDP, Rock-Paper-Scissors with learning dynamics, and a general DQN setup for single-agent control. The goal is to systematically compare game-theoretic learning (Nash Q-learning, Nash-QMDP, fictitious play) and deep RL methods (DQN with replay, target networks, epsilon-greedy exploration), under both full and partial observability.',
        },
        {
          heading: 'My Role',
          body: 'Designed and implemented the Car-Truck grid world, Tiger POMDP, Rock-Paper-Scissors, and reward-only POMG transition models\nImplemented Nash Q-learning with linear-programming-based equilibrium computation and Nash-QMDP style value iteration\nBuilt DQN agents with experience replay, target networks, and epsilon-greedy exploration\nImplemented fictitious play and best-response dynamics for Rock-Paper-Scissors\nConstructed belief-state and reward-state transition matrices and analyzed their effect on policy behavior\nCompared convergence and stability across Nash Q, DQN, and fictitious play',
        },
        {
          heading: 'Tech Stack',
          body: 'Python, NumPy, SciPy, Matplotlib, Jupyter Notebooks, Linear Programming (PuLP), GitHub',
        },
      ],
    },
    lenses: {
      research: {
        order: 3,
        summary: 'How should agents learn when state and other agents’ strategies are only partly observable? I implemented benchmark environments and compared Nash Q-learning, DQN, Nash-QMDP, and fictitious play through convergence and policy behavior. The work clarifies algorithmic behavior in controlled simulations; it does not make a claim about human decision-making.',
        emphasis: 'Modeling adaptive decision-making under partial observability',
        featuredEvidence: 'Implemented multiple environments and compared learning dynamics across four algorithm families.',
      },
      product: {
        order: 4,
        summary: 'Adaptive systems often act with incomplete state information. I built controlled multi-agent and partially observable environments and compared Nash Q-learning, DQN, Nash-QMDP, and fictitious play. The work offers technical grounding for reasoning about adaptive policies, but it is simulation research rather than a validated user-facing deployment.',
        emphasis: 'Reasoning about adaptive policies under incomplete information',
        featuredEvidence: 'Controlled comparisons across Nash Q-learning, DQN, Nash-QMDP, and fictitious play.',
      },
      creative: {
        headline: 'Exploring uncertainty as a structure for strategic interaction',
        priority: 6,
      },
    },
  },
  {
    id: 5,
    category: 'research',
    media: `${process.env.PUBLIC_URL}/img/Milky/Milky1.png`,
    title: 'Probe the Milky Way Density Structure',
    brief: 'Computational modeling of galactic density distributions, using data analysis to make structure visible.',
    meta: 'Astrophysics / modeling',
    signal: 'Turning observation data into structure',
    tags: ['computational modeling', 'data analysis', 'visualization'],
    slug: 'milky-way-density-structure',
    details: {
      media: ['/img/Milky/Slide1.png', '/img/Milky/Milky0.png', '/img/Milky/Milky1.png'],
      sections: [
        {
          heading: 'Project Description',
          body: 'Used Gaia DR3 stellar catalogues and a Milky Way-like N-body simulation to probe the Galaxy’s bar and density structure. I trained a TensorFlow model on Gaia photometry to automatically identify red clump giants (standard-candle tracers), then applied the classifier to hundreds of millions of stars and to the simulation to locate bar-induced dark gaps and compare observed and simulated density patterns.',
        },
        {
          heading: 'My Responsibility',
          body: 'Cleaned and filtered Gaia DR data and constructed training and test samples\nImplemented and tuned the TensorFlow red-clump classifier and evaluated it on held-out data\nApplied the model to Gaia data and the N-body simulation and generated comparison plots and maps\nInterpreted bar density profiles and dark gaps with the team and designed the research poster',
        },
        {
          heading: 'Tech Stack',
          body: 'Python, NumPy, pandas, SciPy, Matplotlib, Astropy',
        },
      ],
    },
    lenses: {
      research: {
        order: 4,
        summary: 'Can a learned stellar classifier help reveal structure that is difficult to observe directly in the Milky Way? I prepared Gaia and simulation data, trained a TensorFlow red-clump classifier, evaluated it on held-out data, and generated comparative density maps. The analysis supports astronomical structure inference, not claims about people or interactive systems.',
        emphasis: 'Testing computational methods that reveal hidden structure',
        featuredEvidence: 'Held-out classifier evaluation followed by observed-versus-simulated density comparisons.',
      },
      product: {
        order: 3,
        summary: 'A large observational dataset needed reliable tracers before researchers could compare Galactic structure. I cleaned Gaia data, constructed training and test samples, trained a TensorFlow classifier, and applied it across observed and simulated data to produce interpretable density maps. This demonstrates large-scale data preparation and model-to-analysis translation, not a product deployment.',
        emphasis: 'Turning large observational datasets into interpretable signals',
        featuredEvidence: 'A held-out classifier applied to Gaia observations and an N-body simulation.',
      },
      creative: {
        headline: 'Using computation to reveal large-scale invisible patterns',
        priority: 5,
      },
    },
  },
  {
    id: 1,
    category: 'games',
    media: `${process.env.PUBLIC_URL}/img/LOM/Lom0.png`,
    title: 'Library of Meialia',
    brief: 'A 2D roguelike with 80+ skills, 50+ items, and 20+ mobs across 4 biomes. Lead Narrative Designer role.',
    meta: 'Steam game / narrative',
    signal: 'Narrative systems inside roguelike play',
    tags: ['game design', 'narrative systems', 'player agency', 'systems design'],
    slug: 'library-of-meialia',
    details: {
      media: [
        '<iframe src="https://www.youtube.com/embed/bmvixL7_W3U?si=n01pKqSLFrixn6K4"></iframe>',
        '<iframe src="https://www.youtube.com/embed/phOQqNVjwQc?si=Ax3zJgtA3FK0zCYz"></iframe>',
        '<iframe src="https://www.youtube.com/embed/O75uy3WHBLg?si=pIvCF0UF4TefT6pz"></iframe>',
        '/img/LOM/1.jpg', '/img/LOM/2.jpg', '/img/LOM/3.jpg',
        '/img/LOM/4.jpg', '/img/LOM/5.jpg',
      ],
      sections: [
        {
          heading: 'Project Description',
          body: 'Library of Meialia is a 2D roguelike pixel game developed by Minerva Studio. The player takes the role of the dragon Almos, exploring the ancient library of Meialia and gradually uncovering its secrets. The game features 80+ skills, 50+ unique items, and 20+ mobs across four biomes, each with a unique boss. While still in early access, the game has already reached 3,000+ players.\n\nSteam page: https://store.steampowered.com/app/3102950/Library_of_Meialia/',
        },
        {
          heading: 'My Responsibility',
          body: 'Served as Lead Narrative Designer while contributing to game design, programming, marketing, and project management\nCollaborated with other team leads to align combat flow and story progression\nLed story arc, world-building, character development, and dialogue writing\nDesigned and implemented in-game tools for displaying and managing storylines\nContributed to level and enemy design',
        },
        {
          heading: 'Tech Stack',
          body: 'Unity, C#, Lua, Aseprite, Inky, GitHub, System Design',
        },
      ],
    },
    lenses: {
      research: {
        order: 5,
        summary: 'How can narrative and progression systems preserve player agency inside a dense roguelike? As lead narrative designer, I aligned story structure with combat and progression while contributing implementation and project coordination. The shipped early-access game reached 3,000+ players, but the current evidence does not support behavioral telemetry or controlled research claims.',
        emphasis: 'Building a playable system around narrative agency and progression',
        featuredEvidence: 'A shipped early-access game with 3,000+ players and cross-functional design ownership.',
      },
      product: {
        order: 5,
        summary: 'A content-dense roguelike needed narrative, combat, and progression to work as one player experience. As lead narrative designer, I coordinated story systems with other team leads and contributed design, implementation, marketing, and project management. The early-access game reached 3,000+ players; no behavioral metric or experiment result is claimed.',
        emphasis: 'Coordinating a shipped game experience across narrative and progression',
        featuredEvidence: '3,000+ early-access players and lead ownership across narrative systems.',
      },
      creative: {
        headline: 'Designing narrative agency inside dense roguelike systems',
        priority: 2,
      },
    },
  },
  {
    id: 6,
    category: 'games',
    media: `${process.env.PUBLIC_URL}/img/OtherSide/0.png`,
    title: 'The Otherside',
    brief: 'A puzzle game combining word solving, chase mechanics, and maze exploration. Game and level design lead.',
    meta: 'Puzzle / level design',
    signal: 'Language puzzles under pressure',
    tags: ['game design', 'level design', 'puzzles', 'player agency'],
    slug: 'the-otherside',
    details: {
      media: ['/img/OtherSide/1.png', '/img/OtherSide/2.png'],
      sections: [
        {
          heading: 'Project Description',
          body: 'The Otherside is a puzzle game in active development that combines word puzzles, chase mechanics, and maze exploration. The player is a firefly who has lost their memory and awakened in a strange maze with spiders in pursuit. They collect scattered characters to retrieve their memory and find a way out.\n\nItch.io page: https://ollieii.itch.io/the-other-side',
        },
        {
          heading: 'My Responsibility',
          body: 'Designed and iterated the game mechanics and levels\nCollaborated with the artist and programmer to create a cohesive atmosphere\nManaged the team and project timeline\nConducted playtesting and adjusted the design based on feedback',
        },
        {
          heading: 'Tech Stack',
          body: 'Unity, C#, Game Design, Level Design, Project Management',
        },
      ],
    },
    lenses: {
      research: {
        order: 6,
        summary: 'How do word puzzles, pursuit, and maze navigation combine into a legible but tense play experience? I led game and level design, collaborated across disciplines, and adjusted the design through playtesting. The project offers iterative design evidence, while the current record contains no formal study or quantified outcome.',
        emphasis: 'Studying comprehension and persistence through iterative puzzle design',
        featuredEvidence: 'Playtest-informed iteration of mechanics, levels, pacing, and atmosphere.',
      },
      product: {
        order: 6,
        summary: 'A puzzle game combining word solving, chase pressure, and maze exploration needed readable difficulty and pacing. I designed and iterated mechanics and levels, managed the team timeline, and used playtesting feedback to adjust the experience. This supports qualitative product iteration; no quantified behavioral outcome is claimed.',
        emphasis: 'Improving puzzle pacing through playtest-informed iteration',
        featuredEvidence: 'Mechanics and levels revised from direct playtesting feedback.',
      },
      creative: {
        headline: 'Combining language, pursuit, and maze design into a tense puzzle loop',
        priority: 3,
      },
    },
  },
  {
    id: 7,
    category: 'experience',
    media: `${process.env.PUBLIC_URL}/img/CS639/0.png`,
    title: 'CS639 Deep Learning for Computer Vision',
    brief: 'Implemented CNNs, GANs, and object detection algorithms from scratch using PyTorch and NumPy.',
    meta: 'Computer vision / PyTorch',
    signal: 'Building core vision models from scratch',
    tags: ['computer vision', 'deep learning', 'PyTorch', 'NumPy'],
    slug: 'deep-learning-for-computer-vision',
    details: {
      media: ['/img/CS639/0.png', '/img/CS639/1.png', '/img/CS639/2.png'],
      sections: [
        {
          heading: 'Project Description',
          body: 'This work was completed with Yibo Kong for CS639 at the University of Wisconsin-Madison in 2024. The course adapts material from Stanford CS231n and Michigan EECS 498-007/598-005. The projects implement foundational deep-learning algorithms and architectures, including neural-network forward and backward passes, from scratch.\n\nGitHub repository: https://github.com/OllieII/-CS639-Deep-Learning-for-Computer-Vision/tree/main',
        },
        {
          heading: 'My Responsibility',
          body: 'Implemented image classification, k-nearest neighbors, SVM, Softmax, ReLU, and fully connected networks\nImplemented convolutional networks, batch normalization, Kaiming initialization, and max pooling\nBuilt FPN and FCOS object detection with box regression, centerness, and non-maximum suppression\nImplemented GANs, style transfer, total-variation regularization, and Gram matrices',
        },
        {
          heading: 'Tech Stack',
          body: 'Python, PyTorch, NumPy, Matplotlib, Jupyter Notebook',
        },
      ],
    },
    lenses: {
      research: {
        order: 7,
        summary: 'What implementation details make modern visual models work? I built core classifiers, convolutional networks, object detection, GANs, and style-transfer components from foundational operations. The work demonstrates technical depth and reproducibility, but it is coursework rather than a novel empirical HCI contribution.',
        emphasis: 'Building technical foundations for intelligent visual systems',
        featuredEvidence: 'From-scratch implementations spanning classification, detection, GANs, and style transfer.',
      },
      product: {
        order: 7,
        summary: 'Intelligent interfaces depend on reliable visual-model building blocks. I implemented classification, convolutional networks, FCOS detection, GANs, and style transfer from foundational operations using PyTorch and NumPy. The project demonstrates model implementation depth, not a deployed product outcome.',
        emphasis: 'Implementing visual-model building blocks from first principles',
        featuredEvidence: 'Working implementations of classification, detection, GAN, and style-transfer pipelines.',
      },
      creative: {
        headline: 'Understanding visual models as tools for creative systems',
        priority: 7,
      },
    },
  },
];

export const getProjectById = id =>
  projects.find(project => String(project.id) === String(id) || project.slug === id);

export default projects;
