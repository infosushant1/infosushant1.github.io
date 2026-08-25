export const portfolio = {
  name: "Sushant Sharma",
  location: "Bhopal, India",
  title: "Software Engineer | AI & ML",
  summary:
    "Computer Science Engineering student specializing in AI & ML, building practical AI applications, intelligent software systems, and machine-learning solutions.",
  about:
    "Computer Science Engineering student (AI & ML) with strong CS fundamentals, hands-on expertise in Python and Java, and experience building scalable software, network-adjacent anomaly detection, and distributed systems. Skilled in unit testing, secure coding practices, and cross-functional team leadership.",
  education: {
    degree: "Bachelor of Technology in CS Engineering (AI & ML)",
    institute: "Technocrats Institute of Technology (Excellence)",
    period: "Sep 2023 – Present"
  },
  contact: {
    email: "infosushii11@gmail.com",
    phone: "+91-7354116135"
  },
  profiles: [
    {
      name: "LinkedIn",
      short: "Professional profile & career network",
      url: "https://linkedin.com/in/sushant-sharma-0472082a6"
    },
    {
      name: "GitHub",
      short: "Projects, source code & technical work",
      url: "https://github.com/infosushant1"
    },
    {
      name: "Trailblazer",
      short: "Salesforce learning & developer profile",
      url: "https://www.salesforce.com/trailblazer/u0h391q36zw3e8y9te"
    }
  ],
  skills: {
    "Programming": ["Python", "Java", "ABAP"],
    "Computer Science": ["Data Structures & Algorithms", "Software Engineering"],
    "AI / ML & Agents": ["Deep Learning", "Pandas", "Random Forest", "Agentic AI"],
    "Cloud & Tools": ["Microsoft Azure", "GitHub", "SAP ABAP"],
    "Professional": ["Technical Communication", "Team Collaboration", "Leadership", "Knowledge Sharing", "Analytical Thinking", "Time Management"]
  },
  projects: [
    {
      number: "01",
      name: "LedgerIQ — AI Finance Controller",
      date: "Aug 2026",
      tech: ["Python", "Pandas", "LLM/AI"],
      description:
        "Built an AI-powered finance reconciliation platform that automatically reconciles orders, payment-gateway transactions, and bank settlements using deterministic matching and AI-assisted exception reasoning.",
      github: "https://github.com/infosushant1/ledgeriq-ai-finance-controller"
    },
    {
      number: "02",
      name: "AI Car Damage Detection & Repair Estimator",
      date: "Sep 2024",
      tech: ["Python"],
      description:
        "Developed a real-time vehicle damage detection pipeline and integrated Mistral LLM for automated repair-cost estimation.",
      github: "https://github.com/infosushant1/AI-Car-Damage-Detection-and-Repair-Estimator"
    },
    {
      number: "03",
      name: "Cyber Fraud Prediction System",
      date: "Feb 2025",
      tech: ["Python", "Random Forest"],
      description:
        "Designed a real-time prediction backend with structured data processing and automated machine-learning inference workflows.",
      github: "https://github.com/infosushant1/cyber-fraud-prediction-system"
    },
    {
      number: "04",
      name: "Voice2Insights",
      date: "Jan 2026",
      tech: ["Python"],
      description:
        "Created an end-to-end audio processing pipeline using Whisper and LLMs with automated JSON/CSV output formatting.",
      github: "https://github.com/infosushant1/Voice2Insights"
    }
  ],
  achievements: [
    {
      date: "Dec 2024",
      title: "Smart India Hackathon 2024 (SIH 24)",
      role: "Team Leader — National Grand Finale Finalist",
      description:
        "Led a team in building an AI smart agriculture solution, managing technical design, SDLC, requirements analysis, and delivery under tight deadlines."
    },
    {
      date: "Jan 2024",
      title: "SBILife Hack-AI-Thon 2024",
      role: "Team Leader — AI Software Development",
      description:
        "Engineered a modular Cyber Insurance Fraud Detection pipeline using Python, Random Forest, and SMOTE for optimized inference and preprocessing."
    }
  ],
  certifications: [
    {
      issuer: "Oracle",
      name: "Oracle Certified Associate: Agentic AI Foundations",
      credential: "1Z0-1157-26",
      url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=D49EEB71203535B07AE3C53C39F4F1E6A56A463124F7E07F3ACF33C1F1452DCE"
    },
    {
      issuer: "Salesforce Trailhead",
      name: "Platform Developer I & Agentforce Trails",
      note: "Completed learning trails — not presented as a Salesforce certification.",
      url: "https://www.salesforce.com/trailblazer/u0h391q36zw3e8y9te"
    },
    {
      issuer: "Microsoft",
      name: "Microsoft Certified: Azure Fundamentals",
      url: "https://www.credly.com/badges/3779d6c6-02fa-4e3c-ad12-5d9f29f6f8d8/public_url"
    },
    {
      issuer: "SAP",
      name: "SAP Certified Developer (ABAP)",
      url: "https://www.credly.com/badges/aa31f767-ebe3-4978-b0e5-97bda98c9bb5/public_url"
    }
  ]
} as const;
