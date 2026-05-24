import {
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  FlaskConical,
  Gamepad2,
  Laptop,
  LineChart,
  Link2,
  Mail,
  Rocket,
  ShieldCheck,
  Trophy,
  Wrench,
} from "lucide-react";

export const profile = {
  name: "Farzan",
  resumeName: "Farjan Alam",
  title: "AI & Machine Learning Sophomore at SRMIST",
  location: "Chennai, Tamil Nadu, India",
  email: "farjanalam16@gmail.com",
  phone: "+91 8100511088",
  image: "/assets/farzan-profile.jpg",
  resume: "/assets/Farzan_Resume.pdf",
  site: "https://alamfarjan.lovable.app",
  subtitles: [
    "AI/ML Engineer",
    "Systems Builder",
    "Research Curious",
    "AIML Student @ SRM",
    "Kaggle Experimenter",
  ],
  intro:
    "I build applied ML systems, interpretability experiments, and rough ideas that can survive outside a notebook. Currently studying AI/ML at SRMIST with a 9.35 CGPA.",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/SyntaxSaviour",
      icon: Code2,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/farjan-alam",
      icon: Link2,
    },
    {
      label: "Email",
      href: "mailto:farjanalam16@gmail.com",
      icon: Mail,
    },
  ],
};

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Builds" },
  { href: "#lab", label: "Lab" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const heroNotes = [
  "currently reading transformers",
  "gym + code + coffee",
  "Kaggle shelf active",
  "debugging assumptions",
  "overengineering monitor on",
];

export const about = {
  bio:
    "I’m an AI/ML engineering student interested in turning research-heavy AI ideas into runnable systems. I like models that can be tested, inspected, and explained without losing the fun of building them.",
  points: [
    "Transformer interpretability keeps me curious.",
    "Autonomous systems make me think in loops, sensors, and constraints.",
    "Kaggle is where I practice sharper baselines and cleaner comparisons.",
    "Gaming and tinkering taught me to enjoy messy systems with fast feedback.",
  ],
  terminal: [
    { command: "whoami", output: "AI/ML student building useful intelligent systems" },
    {
      command: "cat focus.txt",
      output: "transformers | interpretable AI | autonomous systems | agents",
    },
    {
      command: "status --today",
      output: "testing ideas, tuning baselines, lifting heavy things",
    },
  ],
  lore: [
    {
      title: "Tactical FPS Brain",
      text: "I like problems where timing, information, and decisions all matter.",
      color: "bg-brutal-blue",
      icon: Gamepad2,
    },
    {
      title: "Pattern Hunter",
      text: "Hidden structure, messy clues, and technical rabbit holes are my comfort zone.",
      color: "bg-brutal-yellow",
      icon: FlaskConical,
    },
    {
      title: "Gym Enthusiast",
      text: "Progressive overload applies to code, models, and training logs.",
      color: "bg-brutal-green",
      icon: Trophy,
    },
    {
      title: "AI Agent Curious",
      text: "I’m interested in tools that can plan, act, and explain themselves.",
      color: "bg-brutal-pink",
      icon: Bot,
    },
    {
      title: "Systems Builder",
      text: "SensaNet, robotics-adjacent AI, and industrial intelligence keep pulling me in.",
      color: "bg-brutal-red",
      icon: Cpu,
    },
  ],
};

export const skillGroups = [
  {
    title: "AI/ML",
    icon: BrainCircuit,
    color: "bg-brutal-yellow",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Medical Image Processing",
      "NLP Biomarkers",
      "Anomaly Detection",
      "Transfer Learning",
      "Model Deployment",
      "Semantic Analysis",
      "LLM APIs",
      "AI Agents",
      "Research",
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    color: "bg-brutal-blue",
    skills: ["Python", "Java", "C", "C++", "JavaScript", "SQL", "TypeScript"],
  },
  {
    title: "Frameworks",
    icon: Wrench,
    color: "bg-brutal-green",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Keras",
      "NumPy",
      "Pandas",
      "OpenSMILE",
      "Whisper",
      "Librosa",
      "OpenAI API",
      "Hugging Face",
    ],
  },
  {
    title: "Data + Tools",
    icon: LineChart,
    color: "bg-brutal-pink",
    skills: [
      "Tableau",
      "Power BI",
      "Excel",
      "Altair",
      "Data Modeling",
      "Predictive Analytics",
      "Audio Processing",
      "Kaggle",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "bg-brutal-red",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Dev Tools",
    icon: Laptop,
    color: "bg-white dark:bg-zinc-200",
    skills: [
      "AWS SageMaker",
      "AWS Bedrock",
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "REST APIs",
      "MLOps",
      "HuggingFace Spaces",
    ],
  },
];

export const marqueeSkills = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "OpenAI API",
  "AWS Bedrock",
  "Hugging Face",
  "MLOps",
  "Whisper",
  "OpenSMILE",
  "Kaggle",
  "MySQL",
  "Docker",
  "Transformers",
  "AI Agents",
  "Computer Vision",
  "NLP",
];

type FeaturedBuild = {
  title: string;
  kicker: string;
  year: string;
  color: string;
  rotate: string;
  summary: string;
  tech: string[];
  github?: string;
  demo?: string;
  discuss?: string;
  hero?: boolean;
};

type ResearchPlaygroundItem = {
  title: string;
  kicker: string;
  year: string;
  color: string;
  rotate: string;
  summary: string;
  tech: string[];
  actions: string[];
};

export const featuredBuilds: FeaturedBuild[] = [
  {
    title: "CogniSafe",
    kicker: "Hero build",
    year: "2025",
    color: "bg-brutal-yellow",
    rotate: "-rotate-1",
    summary:
      "Voice-based cognitive decline screening using acoustic features, Whisper transcription, NLP biomarkers, and anomaly scoring.",
    tech: ["Python", "Whisper", "openSMILE", "NLP", "Anomaly Detection"],
    github: "https://github.com/SyntaxSaviour",
    demo: "https://github.com/SyntaxSaviour",
    hero: true,
  },
  {
    title: "AgriTech AI",
    kicker: "Applied AI",
    year: "2025",
    color: "bg-brutal-green",
    rotate: "rotate-1",
    summary:
      "Crop-support AI prototype focused on disease signals, field context, and decision-friendly recommendations.",
    tech: ["Python", "Computer Vision", "TensorFlow", "Data Analysis", "APIs"],
    github: "https://github.com/SyntaxSaviour",
    demo: "https://github.com/SyntaxSaviour",
  },
  {
    title: "Student Dropout Prediction System",
    kicker: "Predictive analytics",
    year: "2025",
    color: "bg-brutal-pink",
    rotate: "rotate-1",
    summary:
      "Interpretable ML workflow for spotting student risk early through academic, attendance, and engagement signals.",
    tech: ["Python", "Scikit-learn", "Pandas", "MySQL", "Data Analysis"],
    github: "https://github.com/SyntaxSaviour",
    demo: "https://github.com/SyntaxSaviour",
  },
  {
    title: "DermaAI",
    kicker: "Medical AI",
    year: "2025",
    color: "bg-brutal-blue",
    rotate: "-rotate-1",
    summary:
      "Two-stage skin lesion pipeline combining ResUNet segmentation with EfficientNetB0 classification on ISIC data.",
    tech: ["Python", "TensorFlow", "ResUNet", "EfficientNetB0", "Medical Imaging"],
    github: "https://github.com/SyntaxSaviour",
    demo: "https://github.com/SyntaxSaviour",
  },
  {
    title: "ALICE",
    kicker: "Interface build",
    year: "2025",
    color: "bg-white dark:bg-zinc-200",
    rotate: "rotate-1",
    summary:
      "Desktop assistant interface built with JavaFX, OpenAI models, and a MySQL memory layer for structured conversations.",
    tech: ["Java", "JavaFX", "OpenAI API", "MySQL"],
    discuss: "#contact",
  },
];

export const researchPlayground: ResearchPlaygroundItem[] = [
  {
    title: "SensaNet",
    kicker: "Concept",
    year: "Research idea",
    color: "bg-brutal-red",
    rotate: "-rotate-1",
    summary:
      "Sensor-network AI concept for perception, anomaly detection, and autonomous feedback loops.",
    tech: ["AI Agents", "IoT", "Edge AI", "Anomaly Detection", "MLOps"],
    actions: ["Concept", "Discuss"],
  },
  {
    title: "Transformer Interpretability Lab",
    kicker: "Research direction",
    year: "Ongoing",
    color: "bg-white dark:bg-zinc-200",
    rotate: "rotate-1",
    summary:
      "Small reproducible probes for attention behavior, token attributions, and model failure modes.",
    tech: ["Transformers", "PyTorch", "Hugging Face", "Interpretability"],
    actions: ["Research", "Notes"],
  },
  {
    title: "BLAST Tool Presentation",
    kicker: "Technical communication",
    year: "2025",
    color: "bg-brutal-yellow",
    rotate: "-rotate-1",
    summary:
      "Technical communication piece explaining sequence alignment, scoring, and search intuition.",
    tech: ["Bioinformatics", "Presentation", "Research", "Data Interpretation"],
    actions: ["Notes", "Discuss"],
  },
  {
    title: "Kaggle + ML Experiment Shelf",
    kicker: "Experimentation",
    year: "Ongoing",
    color: "bg-brutal-blue",
    rotate: "rotate-1",
    summary:
      "Notebook bench for baselines, feature engineering, cross-validation, and metric-driven iteration.",
    tech: ["Kaggle", "Python", "Pandas", "Scikit-learn", "Visualization"],
    actions: ["Notes", "Research"],
  },
];

export const education = {
  title: "B.Tech in Artificial Intelligence and Machine Learning",
  place: "SRM Institute of Science and Technology, Chennai",
  date: "June 2024 - May 2028",
  detail: "CGPA 9.35. Focused on ML systems, deep learning, computer vision, NLP, analytics, and deployment.",
};

export const experience = [
  {
    title: "AI Deployment & Automation Intern",
    place: "EduSkills Foundation",
    date: "January 2026 - March 2026",
    body: "Production-minded AI deployment, automation workflows, and MLOps practice across cloud-backed model pipelines.",
    icon: Rocket,
    color: "bg-brutal-blue",
  },
  {
    title: "AWS Academy Generative AI Virtual Intern",
    place: "EduSkills Foundation",
    date: "October 2025 - December 2025",
    body: "Completed AWS Academy tracks in ML foundations, generative AI, and NLP with hands-on model training.",
    icon: Cpu,
    color: "bg-brutal-green",
  },
  {
    title: "Machine Learning Intern",
    place: "Cognifyz Technologies",
    date: "August 2025 - October 2025",
    body: "Built TensorFlow deep learning workflows and used transfer learning to improve training efficiency.",
    icon: BrainCircuit,
    color: "bg-brutal-pink",
  },
  {
    title: "Altair Data Science Master Virtual Intern",
    place: "EduSkills Foundation",
    date: "July 2025 - September 2025",
    body: "Worked through predictive analytics, regression, classification, clustering, and model evaluation.",
    icon: LineChart,
    color: "bg-brutal-red",
  },
  {
    title: "Google AI-ML Virtual Intern",
    place: "EduSkills Foundation",
    date: "April 2025 - June 2025",
    body: "Built and optimized TensorFlow models while strengthening practical deep learning fundamentals.",
    icon: ShieldCheck,
    color: "bg-white dark:bg-zinc-200",
  },
];

export const certifications = [
  "AWS Academy Graduate - ML Foundations, Generative AI, NLP",
  "TensorFlow Developer - Google",
  "Altair RapidMiner Master - ML, Data Engineering, Applications & Use Cases, Platform Admin",
  "Data Structures & Algorithm - Corizo",
  "Deloitte Data Analytics - Forage",
  "PYTHONEERS - ACM SIGCHI",
];

export const achievements = [
  {
    group: "Awards",
    title: "Techknow 2024-2025 Award Winner",
    detail: "Recognition at SRMIST for technical learning and project momentum.",
    icon: Trophy,
    color: "bg-brutal-yellow",
  },
  {
    group: "Hackathons",
    title: "PYTHONEERS - ACM SIGCHI",
    detail: "Competitive programming and Python-focused technical participation.",
    icon: Code2,
    color: "bg-brutal-blue",
  },
  {
    group: "Certifications",
    title: "TensorFlow Developer + AWS Academy",
    detail: "Deep learning, ML foundations, generative AI, and NLP coursework.",
    icon: ShieldCheck,
    color: "bg-brutal-green",
  },
  {
    group: "Recognition",
    title: "Altair RapidMiner + Deloitte Analytics",
    detail: "Data engineering, analytics, and applied ML practice across guided programs.",
    icon: LineChart,
    color: "bg-brutal-pink",
  },
];

export const currentlyExploring = [
  {
    title: "Transformers",
    text: "Attention behavior, token dynamics, and practical model debugging.",
    icon: BrainCircuit,
    color: "bg-brutal-yellow",
  },
  {
    title: "AI Agents",
    text: "Tool-using systems that can plan, remember, act, and explain decisions.",
    icon: Bot,
    color: "bg-brutal-blue",
  },
  {
    title: "Interpretability",
    text: "Small experiments that make neural models easier to inspect and compare.",
    icon: FlaskConical,
    color: "bg-brutal-green",
  },
  {
    title: "Autonomous Systems",
    text: "Perception, feedback loops, and edge intelligence for messy environments.",
    icon: Cpu,
    color: "bg-brutal-pink",
  },
];

export const openTo = [
  {
    title: "Internships",
    text: "AI/ML engineering, data science, applied research, and model deployment.",
  },
  {
    title: "AI Research",
    text: "Transformers, interpretability, autonomous systems, and human-AI workflows.",
  },
  {
    title: "Collaborations",
    text: "Student teams, hackathons, prototype builds, and technical presentations.",
  },
  {
    title: "ML Engineering Roles",
    text: "Projects where clean baselines, useful metrics, and deployable systems matter.",
  },
];

export const askFarzan = {
  logs: [
    "booting farzan.exe",
    "loading transformer interpretability modules",
    "syncing Kaggle experiment shelf",
    "calibrating autonomous sensing concepts",
    "warning: overengineering tendency detected",
    "gym.exe running in background",
    "ready for recruiter input",
  ],
  prompts: [
    {
      label: "Current Focus",
      q: "current_focus",
      a: "I’m tightening the bridge between AI research and runnable systems: CogniSafe, interpretability probes, Kaggle baselines, and autonomous sensing concepts.",
    },
    {
      label: "Why AI?",
      q: "why_ai",
      a: "AI gives me a place where math, software, behavior, and imagination all collide. I like that I can ask a strange question, build a test, and learn from the failure.",
    },
    {
      label: "Featured Build",
      q: "featured_build",
      a: "CogniSafe is the strongest proof: it combines audio features, transcription, language biomarkers, and anomaly detection into one screening-oriented ML workflow.",
    },
    {
      label: "Research Direction",
      q: "research_direction",
      a: "I’m drawn to interpretable AI and autonomous systems because both force models to be more than impressive outputs. They need reasons, feedback, and constraints.",
    },
    {
      label: "What I’m Exploring",
      q: "exploring",
      a: "Transformers, agents, computer vision pipelines, sensor-network ideas, and the habit of turning rough experiments into clearer technical stories.",
    },
  ],
};
