// ---------------------------------------------------------------------------
// ALL SITE CONTENT LIVES HERE.
// Edit this file to update the site. Nothing in src/pages/ or src/components/
// needs to change when you add a project, a job, or a course.
//
// "tone" values used on cards: indigo | coral | green | amber | pink
// ---------------------------------------------------------------------------

export const meta = {
  title: "Hatem Chehade — Computer Science Student & Builder",
  description:
    "Fourth-year CS student at the University of Calgary. Security, privacy, and products built for people the internet usually ignores.",
  url: "https://hatemchehade.vercel.app",
  resume: "/Hatem-Chehade-Resume.pdf",

  // Drop a photo at public/hatem.jpg and it appears automatically.
  // Portrait orientation works best (roughly 4:5). If the file is missing,
  // the site falls back to a coloured placeholder — nothing breaks.
  photo: "/hatem.jpg",
};

export const hero = {
  greeting: "Hi, I'm Hatem.",
  headline: "I build software people can actually trust.",
  sub: "Fourth-year Computer Science at the University of Calgary. I work on security, privacy, and products built for the people the internet usually ignores.",
  location: "Calgary, Canada",
  availability: "Looking for a co-op or internship term",
};

export const stats = [
  { n: "3.5", l: "GPA" },
  { n: "4", l: "projects shipped" },
  { n: "10+", l: "people coached" },
  { n: "3 yrs", l: "working while studying" },
];

// Three cards on the home page.
export const pillars = [
  {
    tone: "indigo",
    title: "Security",
    line: "Encryption I wrote myself, not imported.",
    link: "/projects",
  },
  {
    tone: "coral",
    title: "Verification",
    line: "Tools that ask whether something deserves your belief.",
    link: "/projects",
  },
  {
    tone: "green",
    title: "Privacy by design",
    line: "Products that protect people before they think to ask.",
    link: "/projects",
  },
];

export const projects = [
  {
    id: "veritable",
    tone: "coral",
    name: "Veritable",
    punch: "Catches propaganda, not just lies.",
    status: "Shipped",
    period: "Oct – Nov 2025",
    short:
      "Most fact-checkers ask whether something is true. Veritable asks how it is trying to move you.",
    tags: ["Python", "NLP", "Web app"],
    links: [
      {
        label: "See the code",
        href: "https://github.com/HatemCodes/veritable-ai-propaganda-detector",
      },
    ],
    more: [
      "A piece of writing can be completely factual and still be built to manipulate you — loaded framing, false choices, fear, fake consensus. Fact-checking misses all of that.",
      "So I built a four-layer pipeline that scores the technique instead of the claim. You get a breakdown of how a text is working on its reader, not a true-or-false stamp.",
      "It started as a class project. I kept building it after the deadline because the structure turned out to be the interesting part. Next step is testing it against a properly labelled dataset — right now the confidence score is my judgement, and I would rather say that than oversell it.",
    ],
  },
  {
    id: "securepass",
    tone: "indigo",
    name: "SecurePass",
    punch: "A password vault, built from the crypto up.",
    status: "Shipped",
    period: "",
    short:
      "I wrote the RSA and SHA-256 myself instead of importing them, because I wanted to find the sharp edges.",
    tags: ["Python", "Flask", "React", "RSA", "SHA-256"],
    links: [{ label: "GitHub", href: "https://github.com/HatemCodes" }],
    more: [
      "Calling a crypto library teaches you an interface. Building the scheme teaches you where things actually break — key handling, what gets hashed versus encrypted, what is still sitting in memory after a request finishes.",
      "The first question was not which framework to use. It was: if someone stole the entire database tomorrow, what would they walk away with? Everything else followed from that answer.",
      "Full stack, end to end: the crypto layer, a Flask REST API, and a React front end.",
    ],
  },
  {
    id: "sanctum",
    tone: "green",
    name: "Sanctum",
    punch: "Coaching for people who don't want to be seen.",
    status: "In validation",
    period: "",
    short:
      "A fitness marketplace where privacy and modesty are the default setting, not a filter buried in the menu.",
    tags: ["Product research", "React", "Flask"],
    links: [],
    more: [
      "Coaches find clients through Instagram and referrals. That quietly assumes you are already inside a fitness social circle — which beginners, and modest beginners especially, are not. The people who would benefit most are the hardest for the industry to reach.",
      "The tools that exist split in two. Trainerize and TrueCoach serve coaches who already have clients. Fyt and Trainwell do matching but treat gender preference and privacy as an afterthought. Nobody sits in the middle.",
      "So: same-gender matching on by default. Illustrated or photo-gated profiles. Text-first coaching, private video only if you want it, no public progress feed anywhere.",
      "There is no code yet, on purpose. A same-gender-default marketplace collapses if the supply is not real, so I am interviewing beginners and coaches and counting who actually exists in Calgary first. This one came straight out of my own coaching work.",
    ],
  },
  {
    id: "omgame",
    tone: "amber",
    name: "OMGame",
    punch: "Chat and moderation inside a 25-person game.",
    status: "Shipped",
    period: "",
    short:
      "The hard part was never the feature. It was shipping into a codebase two dozen people depended on.",
    tags: ["Java", "Real-time", "Team of 25"],
    links: [],
    more: [
      "Every interface decision I made landed on two dozen other people, and every one of theirs landed on me. Small reviewable changes, stable interfaces, and telling people before something broke mattered far more than how fast I could write it alone.",
      "It also taught me that moderation is a trust feature. Deciding what one player can say to another is the same problem as the rest of my work — just enforced socially instead of mathematically.",
    ],
  },
  {
    id: "longevity",
    tone: "pink",
    name: "Longevity",
    punch: "Nutrition advice, not just numbers.",
    status: "In progress",
    period: "Jun 2026 —",
    short:
      "Calorie apps tell you what you ate. This one is meant to tell you what to do about it.",
    tags: ["Product design", "Health data"],
    links: [],
    more: [
      "Trackers are good at measuring and bad at advising. They will tell you that you hit 2,100 calories and leave you to work out tomorrow on your own.",
      "Longevity aims at the gap between the number and the decision. Early days — I am still working out what actionable means concretely enough to build.",
    ],
  },
];

export const about = {
  lead: "I'm a fourth-year CS student in Calgary who likes building things that hold up.",
  paragraphs: [
    "I moved here from Lebanon and started most things over from the bottom. Building things became how I caught up.",
    "I plan everything. Courses, shifts, project milestones — mapped months ahead and written down rather than held in my head. It is how I hold a three-year job, a full course load, and several projects at once without dropping any of them.",
    "And I'm usually the person people come to for help. I've trained pharmacy staff on systems where mistakes are a legal problem, co-managed a 25-person team, and coached more than ten people through their own training.",
  ],
  values: [
    {
      tone: "indigo",
      title: "Trust is the hard part",
      line: "Anyone can make software work. Making it safe to depend on is the actual job.",
    },
    {
      tone: "coral",
      title: "Plan it, then build it",
      line: "Everything I run is written down before it starts. Structure is what lets me carry more than one thing.",
    },
    {
      tone: "green",
      title: "Teach it away",
      line: "The goal is that people stop needing me. That's true of my coaching clients and of anything I document.",
    },
  ],
  coaching: {
    title: "I coach people, too.",
    body: "HatemFit is an online coaching practice I built and run myself — nutrition and training programming for 10+ clients, delivered remotely with a real check-in cycle. No starvation, no dirty bulking, no chasing validation. Several clients have finished structured coaching and kept training on their own, which is the entire point.",
    link: { label: "hatemfit.com", href: "https://hatemfit.com" },
  },
};

export const experience = [
  {
    tone: "indigo",
    role: "Pharmacy Assistant",
    org: "Shoppers Drug Mart",
    period: "Jun 2023 — Present",
    meta: "Permanent part-time · Calgary",
    bullets: [
      "Process prescriptions, insurance claims, and digital patient records in pharmacy management software.",
      "Privacy here is a legal obligation, not a preference. It's where the idea stopped being abstract for me.",
      "Trained new staff. Three-plus years at one employer while carrying a full course load.",
    ],
  },
  {
    tone: "green",
    role: "Founder & Fitness Coach",
    org: "HatemFit",
    period: "Ongoing",
    meta: "Self-employed · Calgary",
    bullets: [
      "Run an online coaching practice: custom nutrition and training programming for 10+ clients.",
      "Several clients have moved off structured coaching and kept training independently.",
    ],
    links: [{ label: "hatemfit.com", href: "https://hatemfit.com" }],
  },
  {
    tone: "coral",
    role: "Sales Leader",
    org: "ICM Inner Circle Marketing",
    period: "Apr — Sep 2024",
    meta: "Contract full-time · Calgary",
    bullets: [
      "400+ verified donations through door-to-door outreach. Promoted into leadership in two months.",
      "Trained and co-managed a 25-person team — onboarding fast, holding targets without micromanaging.",
    ],
  },
  {
    tone: "amber",
    role: "Technical Operations & Digital Systems Assistant",
    org: "Xperts Auto Sales",
    period: "Dec 2024 — Aug 2025",
    meta: "Contract part-time · Calgary",
    bullets: [
      "Ran shop operations and the company's digital presence side by side — hands-on work and technical work in the same job.",
    ],
  },
];

export const education = {
  degree: "BSc Computer Science",
  school: "University of Calgary, Faculty of Science",
  period: "Expected 2027",
  gpa: "GPA 3.5",
  note: "I'm extending my final year on purpose, to make room for a co-op or internship term.",
  highlights: [
    { name: "Information Security & Privacy", grade: "A+" },
    { name: "Linear Methods", grade: "A+" },
    { name: "Introductory Calculus", grade: "A+" },
    { name: "Professional Technical Communication", grade: "A" },
    { name: "Thinking with Data", grade: "A" },
    { name: "Information Technology Ethics", grade: "A" },
    { name: "Intro to Software Engineering", grade: "A-" },
  ],
  rest: [
    "Network Systems Security",
    "Data Structures & Algorithm Analysis",
    "Web-Based Systems",
    "Software Analysis",
    "Principles of Operating Systems",
    "Computing Machinery",
    "Theoretical Foundations of CS I & II",
    "Calculus II",
    "Principles of Microeconomics",
  ],
};

export const skills = [
  { group: "Languages", items: ["Python", "Java", "JavaScript", "C", "C++", "SQL", "Assembly"] },
  { group: "Frontend", items: ["React (Vite)", "HTML / CSS"] },
  { group: "Backend", items: ["Flask", "REST / CORS APIs", "JSON persistence"] },
  { group: "Security", items: ["RSA", "SHA-256", "Credential storage design"] },
  { group: "Tools", items: ["Git", "Unix / Linux shell"] },
];

export const contact = {
  headline: "Let's talk.",
  line: "I reply to everything. Email is the fastest way to reach me.",
  email: "hatem.chehade@ucalgary.ca",
  location: "Calgary, Alberta",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hatem-chehade/", tone: "indigo" },
    { label: "GitHub", href: "https://github.com/HatemCodes", tone: "coral" },
    { label: "HatemFit", href: "https://hatemfit.com", tone: "green" },
  ],
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];
