/**
 * Portfolio Data Configuration
 * Centralized data store for personal branding, education, and projects.
 * Easily customize text, educational milestones, and links here.
 */

export const personalInfo = {
  name: "Sameer Shah",
  role: "BS Artificial Intelligence Student",
  institution: "SZABIST University",
  status: "BS AI Student @ SZABIST • Exploring Foundations",

  headline: {
    prefix: "Building ideas into",
    highlight: "intelligent",
    suffix: "experiences.",
  },

  bio: "An undergraduate artificial intelligence student exploring the convergence of mathematical logic, neural systems, and modern creative computing. Driven by curiosity to understand how algorithms can solve real-world problems from first principles.",

  aboutNarrative: [
    "My interest in computing stems from an appreciation for analytical systems and theoretical science. Having built my foundational base through Cambridge O Levels and GCE A Levels in mathematics and sciences, I am currently pursuing a Bachelor of Science in Artificial Intelligence (BSAI) at SZABIST.",
    "Rather than treating machine learning as a black box, I am committed to understanding the underlying mathematics—calculus, linear algebra, and discrete optimization. Alongside my academic coursework, I build hands-on software experiments with Python and modern web frameworks to test ideas in the open."
  ],

  contact: {
    email: "sameer.shah@example.com", // [PLACEHOLDER] Replace with your actual email address
    github: "https://github.com/your-username", // [PLACEHOLDER] Replace with your GitHub profile
    linkedin: "https://linkedin.com/in/your-username", // [PLACEHOLDER] Replace with your LinkedIn profile
  }
};

export const tickerItems = [
  "ARTIFICIAL INTELLIGENCE",
  "AUTOMATION",
  "MACHINE LEARNING",
  "PYTHON",
  "WEB DEVELOPMENT",
  "NEURAL NETWORKS",
  "CREATIVE TECHNOLOGY"
];

export const educationHistory = [
  {
    id: "szabist-bsai",
    degree: "BS Artificial Intelligence (BSAI)",
    institution: "SZABIST University",
    period: "2024 – Present",
    status: "CURRENT",
    isCurrent: true,
    focus: "Discrete Mathematics, Algorithmic Thinking, Linear Algebra, Programming Fundamentals",
    cardFront: "/cards/szabist-bsai-front.svg",
    cardBack: "/cards/szabist-bsai-back.svg",
    preset: "cosmos",
    foilColor: "#e2e8f0",
    intensity: 0.88,
    edgeSparkle: 0.85
  },
  {
    id: "cambridge-alevels",
    degree: "GCE A Levels",
    institution: "Cambridge Assessment International Education",
    period: "Completed",
    status: "COMPLETED",
    isCurrent: false,
    focus: "Advanced Mathematics, Physics & Computational Problem Solving",
    cardFront: "/cards/cambridge-alevels-front.svg",
    cardBack: "/cards/cambridge-alevels-back.svg",
    preset: "shards",
    foilColor: "#cbd5e1",
    intensity: 0.85,
    edgeSparkle: 0.8
  },
  {
    id: "cambridge-olevels",
    degree: "Cambridge O Levels",
    institution: "Cambridge International",
    period: "Completed",
    status: "COMPLETED",
    isCurrent: false,
    focus: "Sciences, Computer Studies & Analytical Foundations",
    cardFront: "/cards/cambridge-olevels-front.svg",
    cardBack: "/cards/cambridge-olevels-back.svg",
    preset: "swirl",
    foilColor: "#e2e6ec",
    intensity: 0.85,
    edgeSparkle: 0.8
  }
];

export const technicalInterests = [
  {
    category: "Languages & Core Tools",
    note: "Primary languages used for coursework, problem solving, and interface development.",
    items: [
      { name: "Python", status: "Primary Language" },
      { name: "C / C++", status: "Algorithmic Problem Solving" },
      { name: "JavaScript (ES6+)", status: "Web Logic" },
      { name: "Git & GitHub", status: "Version Control" },
      { name: "HTML5 & Modern CSS", status: "UI Structuring" }
    ]
  },
  {
    category: "Theoretical & AI Concepts",
    note: "Areas of active academic focus and algorithmic study.",
    items: [
      { name: "Linear Algebra & Calculus", status: "Mathematical Base" },
      { name: "Data Structures & Algorithms", status: "Foundational" },
      { name: "Machine Learning Fundamentals", status: "Coursework / Lab" },
      { name: "Discrete Mathematics", status: "Academic" }
    ]
  },
  {
    category: "Active Explorations & Roadmap",
    note: "Emerging domains and technologies currently being researched and practiced.",
    items: [
      { name: "Deep Learning Architectures", status: "Exploring" },
      { name: "PyTorch Framework", status: "Self-Study" },
      { name: "Applied Automation Workflows", status: "Experimenting" },
      { name: "React.js & WebGL Visuals", status: "Creative Development" }
    ]
  }
];

export const projects = [
  {
    id: "01",
    title: "Personal AI Developer Portfolio",
    description: "A fast, responsive personal portfolio built with Next.js and React. Features an interactive WebGL dither canvas, custom text-scrambling reveal, and an intellectual scientific theme inspired by research labs.",
    tags: ["Next.js", "React", "WebGL / OGL", "CSS Glassmorphism", "IntersectionObserver"],
    githubUrl: "https://github.com/your-username/ai-portfolio", // [PLACEHOLDER]
    demoUrl: "#home",
    isLive: true
  },
  {
    id: "02",
    title: "Python Algorithmic Problem Solving",
    description: "A structured repository of algorithmic solutions, data structure implementations, and mathematical problem-solving exercises developed as part of academic learning.",
    tags: ["Python", "Algorithms", "Data Structures", "Time Complexity Analysis"],
    githubUrl: "https://github.com/your-username/algorithmic-python", // [PLACEHOLDER]
    demoUrl: null,
    isLive: false
  },
  {
    id: "03",
    title: "Introductory Machine Learning Experiments",
    description: "Exploratory Jupyter notebooks implementing fundamental regression and classification models, data preprocessing pipelines, and performance evaluation metrics.",
    tags: ["Python", "NumPy", "Scikit-Learn", "Model Evaluation"],
    githubUrl: "https://github.com/your-username/ml-experiments", // [PLACEHOLDER]
    demoUrl: null,
    isLive: false
  }
];
