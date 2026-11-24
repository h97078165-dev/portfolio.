export const site = {
  name: "Sheeza Ahsan",
  firstName: "Sheeza",
  lastName: "Ahsan",
  initials: "SA",
  role: "Full-Stack Developer",
  secondaryRole: "IT Undergraduate",
  location: "Multan, Punjab, Pakistan",
  locationShort: "Multan, PK",
  email: "sheezaahsan2045@gmail.com",
  phone: "0334 8551212",
  phoneHref: "+923348551212",
  github: "https://github.com/sheezaahsan-sa/",
  linkedin: "https://www.linkedin.com/in/shiza-r-422242343",
  cvPath: "/Sheeza-Ahsan-CV.pdf",
  availability: {
    enabled: true,
    label: "Open to opportunities",
  },
  intro:
    "I build modern, responsive web experiences — turning ideas into clean interfaces, solid components, and full-stack products that feel effortless to use.",
  about: [
    "I'm an Information Technology undergraduate at Muhammad Nawaz Sharif Agriculture University, Multan, currently in my seventh semester. Most of what I know has come from building: front ends that feel effortless, layouts that hold up on every screen, and full-stack applications that connect a polished interface to a real data layer.",
    "My focus is the modern web — React and Next.js on the front end, Node and Express behind it, with SQL, PostgreSQL, MongoDB, and Supabase powering the data. I enjoy the part of the work where a messy idea gets organized into components, state, and flow.",
    "I'm looking for a team where I can contribute to real products, learn from experienced engineers, and keep growing into a developer who ships thoughtful, dependable software.",
  ],
  aboutNotes: [
    "Building with React, Next.js, and the MERN stack.",
    "Exploring frontend craft, clean architecture, and product thinking.",
  ],
  highlights: [
    {
      icon: "layers",
      title: "Modern web stack",
      text: "React, Next.js, and Node — the tools I reach for first when an idea needs to become real.",
    },
    {
      icon: "code",
      title: "Hands-on builder",
      text: "Three shipped projects, each designed and built end to end rather than followed from a tutorial.",
    },
    {
      icon: "target",
      title: "Analytical mindset",
      text: "I break problems into smaller, testable pieces before writing a line of code.",
    },
    {
      icon: "spark",
      title: "Always learning",
      text: "New frameworks, better patterns, stronger fundamentals — progress compounds.",
    },
  ],
  stats: [
    { value: "03", label: "Projects" },
    { value: "07", label: "Semester" },
    { value: "03", label: "Certificates" },
    { value: "2027", label: "Graduating" },
  ],
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const marqueeItems = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "Node.js", icon: "node" },
  { name: "Express", icon: "express" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Supabase", icon: "supabase" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Python", icon: "python" },
  { name: "C++", icon: "cpp" },
  { name: "MERN Stack", icon: "mern" },
];

export const skillGroups = [
  {
    id: "languages",
    title: "Programming Languages",
    note: "The languages I use to solve problems and build logic.",
    icon: "terminal",
    span: 2,
    items: [
      { name: "C++", icon: "cpp" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    note: "Interfaces, layouts, and interactions that hold up everywhere.",
    icon: "layout",
    span: 2,
    items: [
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "React.js", icon: "react" },
      { name: "Vite", icon: "vite" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    note: "APIs, server logic, and the layer users never see.",
    icon: "server",
    span: 2,
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "Next.js", icon: "next" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    note: "Storing, querying, and shaping the data behind a product.",
    icon: "database",
    span: 3,
    items: [
      { name: "SQL", icon: "sql" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack",
    note: "End-to-end applications with a JavaScript-first stack.",
    icon: "stack",
    span: 3,
    items: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "Express.js", icon: "express" },
      { name: "React.js", icon: "react" },
      { name: "Node.js", icon: "node" },
    ],
  },
];

export const projects = [
  {
    index: "01",
    title: "Dribbble Clone",
    category: "Full-Stack Web Application",
    description:
      "A collaborative full-stack web application inspired by Dribbble, designed to showcase a modern creative platform experience.",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL"],
    live: "https://dribbble-clone-fawn.vercel.app/",
    domain: "dribbble-clone-fawn.vercel.app",
    art: "dribbble",
  },
  {
    index: "02",
    title: "Roast Co.",
    category: "Frontend Website Clone",
    description:
      "A responsive frontend website inspired by Roast Co., built to deliver an attractive and modern website experience.",
    tech: ["React.js", "Tailwind CSS", "Vite"],
    live: "https://roastco.vercel.app/",
    domain: "roastco.vercel.app",
    art: "roast",
  },
  {
    index: "03",
    title: "Shah Wear",
    category: "Online Shopping Website",
    description:
      "An online shopping website frontend featuring a user-friendly interface and a modern shopping experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://shahwear.vercel.app/",
    domain: "shahwear.vercel.app",
    art: "wear",
  },
];

export const education = {
  university: "Muhammad Nawaz Sharif Agriculture University Multan",
  degree: "Bachelor of Science in Information Technology",
  duration: "2023 – 2027",
  status: "In Progress",
  semester: "7th semester",
  note: "Coursework spans programming, software development, database systems, and modern web technologies, with a consistent focus on building practical projects alongside theory.",
  points: [
    "Programming and software development fundamentals",
    "Modern web technologies and database systems",
    "Analytical thinking and structured problem-solving",
  ],
};

export const certifications = [
  {
    title: "Foundation of Cybersecurity",
    issuer: "MNSUAM",
    type: "Certification",
    icon: "shield",
  },
  {
    title: "Network Essentials",
    issuer: "MNSUAM",
    type: "Certification",
    icon: "network",
  },
  {
    title: "Full-Stack Web Development with AI",
    issuer: "PNY Trainings, Multan",
    type: "Training",
    icon: "spark",
  },
];

export const softSkills = [
  { label: "Communication Skills", icon: "message" },
  { label: "Problem-Solving", icon: "target" },
  { label: "Time Management", icon: "clock" },
  { label: "Punctuality and Reliability", icon: "check" },
];
