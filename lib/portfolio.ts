export const portfolio = {
  name: "Tanzim Hossain Safin",
  title: "Backend Engineer",
  role: "Backend Engineer building reliable AI and Web3 systems",
  location: "Dhaka, Bangladesh",
  email: "tanzim.safin.dev@gmail.com",
  phone: "+880 17523 29950",
  availability: "Open to Software Engineering, Backend, AI Systems, and Blockchain roles",
  summary:
    "Computer Science graduate from BRAC University with a strong focus on backend engineering, privacy-preserving AI, and blockchain infrastructure. I build secure, production-minded systems with clear APIs, strong data modeling, and practical product thinking.",
  intro:
    "My work sits at the intersection of backend architecture, AI-enabled workflows, and distributed systems. I care about reliability, performance, and engineering clarity more than feature volume.",
  recruiterPitch:
    "This portfolio is structured for quick recruiter review: clear role alignment, real engineering projects, concrete technical depth, and direct access to code and resumes.",
  links: {
    github: "https://github.com/TanzimHossainSafin",
    linkedin: "https://linkedin.com/in/tanzim-hossainsafin-20a60123b",
    email: "mailto:tanzim.safin.dev@gmail.com",
    aiResume: "/tanzim-safin-ai-software-resume.pdf",
    blockchainResume: "/tanzim-safin-blockchain-resume.pdf",
  },
  stats: [
    { label: "Primary Focus", value: "Backend Engineering" },
    { label: "Secondary Focus", value: "AI Systems + Web3" },
    { label: "Education", value: "B.Sc. in CSE" },
    { label: "Academic Record", value: "CGPA 3.61 / 4.00" },
  ],
  strengths: [
    {
      title: "Production-Oriented Backend Work",
      description:
        "I design APIs and service layers with attention to validation, authentication, maintainability, and performance.",
    },
    {
      title: "Applied AI, Not Just AI Demos",
      description:
        "I use LLM and NLP tooling where it improves a product workflow, backed by structured system design and evaluation.",
    },
    {
      title: "Strong Systems Curiosity",
      description:
        "My interests include concurrency, privacy, smart contract security, and the engineering tradeoffs behind distributed software.",
    },
  ],
  recruiterSignals: [
    "Strong fit for backend-heavy early career software engineering roles",
    "Demonstrated experience across APIs, databases, auth, AI workflows, and EVM tooling",
    "Projects show implementation depth rather than surface-level UI work",
    "Research background adds rigor around privacy, evaluation, and security thinking",
  ],
  skills: {
    Languages: ["JavaScript", "TypeScript", "Python", "Solidity", "C", "C++"],
    Backend: ["Node.js", "Express", "REST APIs", "JWT", "Zod", "Socket.IO"],
    Frontend: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
    Data: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose"],
    Web3: ["Ethereum", "EVM", "Ethers.js", "Wagmi", "Hardhat", "Foundry", "IPFS"],
    "AI and Tooling": ["RAG", "LLM", "MCP SDK", "Git", "GitHub", "Turbo"],
  },
  projects: [
    {
      title: "AI-Powered Financial Intelligence Platform",
      href: "https://github.com/TanzimHossainSafin/Ai-Powered-Financial-System",
      category: "FinTech / Backend / AI",
      headline: "Backend-first finance platform with automated classification and adaptive health scoring",
      description:
        "Built a finance-focused backend system that converts raw transactions into actionable insights through categorization, scoring, alerts, and secure user access.",
      stack: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Zod", "React"],
      bullets: [
        "Designed the API and data layer for transaction ingestion, categorization, and financial health analysis.",
        "Added authentication, validation, and alerting flows to keep the system secure and useful.",
        "Focused on practical engineering concerns: reliability, schema discipline, and maintainable backend structure.",
      ],
    },
    {
      title: "Udyomix Student Productivity Platform",
      href: "https://github.com/TanzimHossainSafin/Udyomix",
      category: "EduTech / AI / Full Stack",
      headline: "AI-assisted study management platform with real-time collaboration and planning",
      description:
        "Created a student productivity platform that combines AI scheduling, study partner matching, real-time collaboration, and progress analytics in a unified product.",
      stack: ["Node.js", "TypeScript", "MongoDB", "Socket.IO", "Turbo", "React 19", "Chart.js"],
      bullets: [
        "Structured the app as a scalable monorepo and integrated real-time communication.",
        "Used AI to improve planning, study matching, and productivity insights rather than as a cosmetic feature.",
        "Balanced multiple product concerns including collaboration, analytics, and backend maintainability.",
      ],
    },
    {
      title: "DeFiDonate",
      href: "https://github.com/TanzimHossainSafin/DeFiDonate",
      category: "Web3 / Smart Contracts",
      headline: "Transparent donation infrastructure built with Solidity and wallet-connected UX",
      description:
        "Developed a decentralized donation platform that removes intermediaries and exposes fundraising activity directly on-chain with secure contract rules.",
      stack: ["Solidity", "Ethereum", "Wagmi", "React 19", "TypeScript", "Tailwind CSS"],
      bullets: [
        "Implemented smart contract logic for donations, withdrawals, access control, and contribution rules.",
        "Connected frontend wallet flows with readable donation analytics and real-time status.",
        "Used the project to demonstrate smart contract security basics and on-chain product design.",
      ],
    },
    {
      title: "MCP Server for EVM Contract Interaction",
      href: "https://github.com/TanzimHossainSafin/mcp_server_EVM_contract",
      category: "Developer Tools / AI / Web3",
      headline: "Protocol layer connecting AI systems to EVM-compatible smart contracts",
      description:
        "Built a Model Context Protocol server in TypeScript that exposes structured blockchain actions and reads to AI-capable clients in a safe, typed interface.",
      stack: ["TypeScript", "Ethers.js v6", "MCP SDK", "Zod", "EVM"],
      bullets: [
        "Bridged AI systems and blockchain tools through a clear protocol-driven backend design.",
        "Added validation and security controls around transaction-facing operations.",
        "Demonstrated systems thinking across developer tooling, AI interfaces, and Web3 execution.",
      ],
    },
  ],
  thesis: {
    title: "Security Evaluation Framework for the Decentralised RAG System",
    href: "https://github.com/TanzimHossainSafin/DRAG-Security-Evaluation-Framework",
    description:
      "A research framework for evaluating privacy-preserving LLM personalization in decentralized and federated RAG environments, including membership inference, knowledge extraction, and adversarial attack benchmarking.",
  },
  education: {
    institution: "BRAC University",
    degree: "B.Sc. in Computer Science and Engineering",
    details: "Merul Badda, Dhaka",
    score: "CGPA 3.61 / 4.00",
  },
};

export type Portfolio = typeof portfolio;
