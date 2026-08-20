// ---------------------------------------------------------------------------
// ALL SITE CONTENT LIVES HERE.
// To update the site as your resume grows, edit this file only. Nothing in
// src/components/ needs to change — the components read from these objects.
// ---------------------------------------------------------------------------

export const meta = {
  title: "Hatem Chehade — Computer Science, University of Calgary",
  description:
    "Fourth-year CS student at the University of Calgary building systems where trust is the hard part: encryption, verification, and privacy-first design.",
  // Set this once you know your final URL, e.g. "https://hatemchehade.com"
  url: "https://hatemchehade.vercel.app",
  // Lives in public/. Regenerate with: see resume/README-resume.md
  resume: "/Hatem-Chehade-Resume.pdf",
};

export const hero = {
  name: "Hatem Chehade",
  kicker: "Computer Science · University of Calgary · Calgary, AB",
  headline: "Trust is the hard part.",
  subhead:
    "I am a fourth-year Computer Science student building at the intersection of encryption, verification, and privacy-first design — and I have spent as much time teaching and leading people as writing code.",
  availability:
    "Open to co-op and internship terms. I extended my final year specifically to make room for one.",
};

export const thesis = {
  heading: "The through-line",
  paragraphs: [
    "Three of my projects are the same project wearing different clothes. SecurePass is trust at the cryptographic layer — can this system hold a secret? Veritable is trust at the information layer — can this text be believed? Sanctum is trust at the human layer — will someone feel safe enough to show up at all? I keep landing here because it is the difficult part of software: not getting a thing to work, but making it safe to depend on.",
    "I plan in advance and in writing. Course load, shift schedule, project milestones — mapped months out and visible, rather than held in my head. When something is ad hoc, my instinct is to build structure around it. It is how I have carried a three-year job, a full course load, and multiple projects at once without things slipping.",
    "And I am the person people come to for help. I have trained pharmacy staff on systems where a mistake is a legal problem, co-managed a 25-person fundraising team, and coached ten-plus fitness clients to the point where they no longer needed me. Turning “here is how we actually do this” into something a new person can follow is a skill I have practised on purpose.",
  ],
  aside:
    "I moved to Canada from Lebanon and restarted several ladders from the bottom at once. Building things is how I caught up.",
};

export const projects = [
  {
    id: "veritable",
    name: "Veritable",
    tagline: "AI propaganda detection",
    status: "Shipped",
    period: "Oct – Nov 2025",
    summary:
      "A four-layer analysis pipeline that scores text for manipulation technique rather than sorting it into true and false.",
    tags: ["Python", "NLP", "Web prototype", "Information integrity"],
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/HatemCodes/veritable-ai-propaganda-detector",
      },
    ],
    detail: [
      {
        heading: "The problem with true and false",
        body: "Fact-checking answers a question most propaganda never asks. A piece can be entirely factual and still be engineered to move you — through loaded framing, false dilemmas, appeals to fear, manufactured consensus. Veritable scores the technique rather than only the claim, so the output is a profile of how a text is working on its reader.",
      },
      {
        heading: "How it is built",
        body: "Four analysis layers run over the input and compose into a single score with a per-technique breakdown, wrapped in a web-based prototype. It began as a course project and I kept building past the deadline, because the four-layer structure turned out to be the interesting part of the problem.",
      },
      {
        heading: "What I would do next",
        body: "Evaluate against a labelled corpus rather than my own judgement, and calibrate the score so it means the same thing on a tweet as it does on a thousand-word article. Right now it is a working prototype with an untested confidence claim, and I would rather say that than overstate it.",
      },
    ],
  },
  {
    id: "securepass",
    name: "SecurePass",
    tagline: "Encrypted password vault, full stack",
    status: "Shipped",
    period: "", // TODO: add the dates you built this, e.g. "Jan – Mar 2025"
    summary:
      "RSA and SHA-256 worked from the primitives up, behind a Flask API and a React front end — cryptography, backend, and interface built end to end.",
    tags: ["Python", "Flask", "React", "RSA", "SHA-256"],
    links: [{ label: "GitHub", href: "https://github.com/HatemCodes" }],
    detail: [
      {
        heading: "Why build the cryptography",
        body: "Calling a library teaches you an interface. Implementing the scheme teaches you where the sharp edges are — key handling, what gets hashed versus what gets encrypted, what is still sitting in memory after a request ends. I built this to understand the failure modes, not because the world needed another vault.",
      },
      {
        heading: "The design question everything followed from",
        body: "Credential storage design came first: what is stored, in what form, and what an attacker holding the entire database would actually walk away with. RSA for credential encryption, SHA-256 for password hashing, a Flask REST API for storage and retrieval, React on the front. The stack fell out of that answer rather than the other way round.",
      },
    ],
  },
  {
    id: "sanctum",
    name: "Sanctum",
    tagline: "Privacy-first coaching marketplace",
    status: "In validation",
    period: "", // TODO: add when you started validation, e.g. "2026 —"
    summary:
      "A two-sided marketplace matching fitness beginners with coaches, with modesty, privacy, and comfort as first-class design axes rather than filters bolted on at the end.",
    tags: ["Product research", "Marketplace design", "React (Vite)", "Flask", "REST"],
    links: [],
    detail: [
      {
        heading: "The problem",
        body: "Coaches acquire clients through referral and Instagram. That channel quietly assumes you are already inside a fitness social network — which beginners, and modesty-conscious beginners most of all, are not. The people with the most to gain from coaching are precisely the ones the acquisition channel is worst at reaching.",
      },
      {
        heading: "The gap in the market",
        body: "Existing tools split cleanly in two. Coach-management SaaS — Trainerize, TrueCoach — serves coaches who already have a roster. Discovery apps — Fyt, Kickoff, Trainwell — do matching, but treat gender preference and privacy as edge cases or ignore them entirely. Nobody occupies the matching layer with modesty as a first-class axis.",
      },
      {
        heading: "The design decisions",
        body: "Clients enter goals, budget, gender preference, and comfort level, and receive a ranked list of coaches. Same-gender matching is the default, not a buried opt-in. Profiles are illustration-based or photo-gated by preference. Coaching runs async and text-first, with private video optional and no public progress feed anywhere. Booking and payment run through the platform on transparent commission.",
      },
      {
        heading: "Why there is no code yet",
        body: "A same-gender-default marketplace fails on day one if that supply is not real, so I am running structured beginner interviews, coach interviews, and a supply census of coaches in Calgary before writing a line of it. Planned stack is React (Vite), Flask, and a REST API. It grew directly out of my own coaching practice — the constraint came from clients, not from a brainstorm.",
      },
    ],
  },
  {
    id: "omgame",
    name: "OMGame",
    tagline: "Real-time chat and moderation inside a 25-person codebase",
    status: "Shipped",
    period: "", // TODO: add the term you built this in
    summary:
      "Built the chat and moderation system for a multiplayer game developed by a twenty-five person team.",
    tags: ["Java", "Real-time systems", "Team integration"],
    links: [],
    detail: [
      {
        heading: "The actual constraint",
        body: "The interesting part was never the feature, it was the blast radius. Every interface decision I made landed on two dozen other people, and every one of theirs landed on me. Integration discipline — small reviewable changes, stable interfaces, telling people about a change before it broke their afternoon — mattered more than how fast I could write the thing on my own.",
      },
      {
        heading: "What I took from it",
        body: "Moderation is a trust feature. Deciding what one player can say to another, and what happens when someone abuses it, sits in the same category as the rest of my work — the same problem enforced socially instead of cryptographically.",
      },
    ],
  },
  {
    id: "longevity",
    name: "Longevity",
    tagline: "Nutrition intelligence",
    status: "In progress",
    period: "Jun 2026 —",
    summary:
      "A nutrition app aimed past calorie counting, translating food intake into decisions someone can actually act on.",
    tags: ["Product design", "Health data"],
    links: [],
    detail: [
      {
        heading: "The gap it targets",
        body: "Calorie trackers are good at measurement and bad at advice. They will tell you that you ate 2,100 calories and leave you to work out what to do differently tomorrow. Longevity is aimed squarely at the distance between the number and the decision. It is early — I am scoping what actionable means concretely enough to build against.",
      },
    ],
  },
];

export const leadership = {
  heading: "Leading, coaching, teaching",
  intro:
    "The technical work is half of it. The other half is that I have spent years being the person who makes a process legible to someone else — under regulation, under quota, and one-on-one.",
  intro2:
    "HatemFit is where that is most deliberate. It is an online coaching practice I built and run myself: I write the nutrition and training programming, deliver it remotely, and run the check-in cycle that keeps someone honest between sessions. The measure of success is that a client eventually stops needing me — which is the same standard I would want applied to any documentation or onboarding I write.",
  proof: [
    {
      stat: "10+",
      label: "online coaching clients",
      note: "HatemFit: custom nutrition plans and training splits delivered remotely, with regular check-ins. Several clients have graduated to training independently.",
    },
    {
      stat: "25",
      label: "person team co-managed",
      note: "Promoted into leadership at ICM within two months, then trained the floor and held it to target.",
    },
    {
      stat: "400+",
      label: "verified donations generated",
      note: "Six months of direct door-to-door outreach.",
    },
  ],
  link: { label: "hatemfit.com", href: "https://hatemfit.com" },
};

export const experience = [
  {
    role: "Pharmacy Assistant",
    org: "Shoppers Drug Mart",
    type: "Permanent part-time",
    period: "Jun 2023 — Present",
    location: "Calgary · On-site",
    bullets: [
      "Work extensively in pharmacy management software to process prescriptions, manage insurance claims, and maintain accurate digital patient records.",
      "Operate in an environment where accuracy is non-negotiable and privacy obligations are legal rather than aspirational.",
      "Trained new staff on systems and procedures.",
      "Three-plus years with one employer while carrying a full-time course load.",
    ],
    note: "This is where privacy stopped being an abstraction for me.",
  },
  {
    role: "Founder & Fitness Coach",
    org: "HatemFit",
    type: "Self-employed",
    period: "Ongoing",
    location: "Calgary · Hybrid",
    bullets: [
      "Independent coaching practice built on a sustainable philosophy: no starvation, no dirty bulking, no chasing validation.",
      "Coached 10+ clients with custom nutrition plans and training splits built around each person's goals, schedule, and real constraints, plus regular check-ins and in-person training.",
      "Multiple clients have moved off structured coaching and kept training on their own. Teaching someone to run their own program is the goal; creating dependency is the failure mode.",
    ],
    links: [{ label: "hatemfit.com", href: "https://hatemfit.com" }],
  },
  {
    role: "Technical Operations & Digital Systems Assistant",
    org: "Xperts Auto Sales",
    type: "Contract part-time",
    period: "Dec 2024 — Aug 2025",
    location: "Calgary · On-site",
    bullets: [
      "Coordinated shop operations and the company's digital presence in the same role — hands-on automotive support (vehicle movement, detailing, yard coordination) alongside the technical and online-facing work.",
    ],
  },
  {
    role: "Sales Leader",
    org: "ICM Inner Circle Marketing",
    type: "Contract full-time",
    period: "Apr 2024 — Sep 2024",
    location: "Calgary · On-site",
    bullets: [
      "Generated 400+ verified donations through direct door-to-door outreach.",
      "Promoted into leadership within two months.",
      "Trained and co-managed a 25-person team — onboarding people quickly, holding a group to targets without micromanaging, and keeping morale up through slow stretches.",
    ],
    note: "Six months of talking to strangers who did not want to be talked to. Nothing has made me better at explaining something clearly.",
  },
];

export const education = {
  degree: "BSc, Computer Science",
  school: "University of Calgary — Faculty of Science",
  period: "Expected 2027",
  gpa: "GPA 3.5",
  note: "I am deliberately extending my final year to make room for a co-op or internship term.",
  courseworkHeading: "Relevant coursework",
  coursework: [
    {
      group: "Security, data & privacy",
      items: [
        { name: "Information Security & Privacy", grade: "A+" },
        { name: "Network Systems Security" },
        { name: "Thinking with Data", grade: "A" },
      ],
    },
    {
      group: "Software & systems",
      items: [
        { name: "Intro to Software Engineering", grade: "A-" },
        { name: "Data Structures & Algorithm Analysis" },
        { name: "Web-Based Systems" },
        { name: "Software Analysis" },
        { name: "Principles of Operating Systems" },
        { name: "Computing Machinery" },
        { name: "Theoretical Foundations of CS I & II" },
      ],
    },
    {
      group: "Communication & ethics",
      items: [
        { name: "Professional Technical Communication", grade: "A" },
        { name: "Information Technology Ethics", grade: "A" },
      ],
    },
    {
      group: "Mathematics & economics",
      items: [
        { name: "Linear Methods", grade: "A+" },
        { name: "Introductory Calculus", grade: "A+" },
        { name: "Calculus II", grade: "A-" },
        { name: "Principles of Microeconomics" },
      ],
    },
  ],
};

export const skills = [
  { group: "Languages", items: ["Python", "Java", "JavaScript", "C", "C++", "SQL", "Assembly"] },
  { group: "Frontend", items: ["React (Vite)", "HTML / CSS"] },
  { group: "Backend", items: ["Flask", "REST / CORS APIs", "JSON persistence"] },
  {
    group: "Security",
    items: ["RSA encryption", "SHA-256 hashing", "Credential storage design"],
  },
  { group: "Tooling", items: ["Git & branching workflows", "Unix / Linux shell scripting"] },
];

export const contact = {
  heading: "Get in touch",
  line: "Best reached by email. I reply to everything.",
  email: "hatem.chehade@ucalgary.ca",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hatem-chehade/", handle: "hatem-chehade" },
    { label: "GitHub", href: "https://github.com/HatemCodes", handle: "HatemCodes" },
  ],
  location: "Calgary, Alberta",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Leading", href: "#leading" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
