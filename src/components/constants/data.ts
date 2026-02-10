// This file contains constants and data used across the portfolio template. 
// Update the values to personalize your portfolio.

export const ABOUT_ME = {
  name: "Anjali Gupta",
  title: "Aspiring Software Developer",
  location: "New Delhi, IN",
  email: "anjaliramesh14012005@gmail.com",
  description: [
    "Hey there! 👋 I’m Anjali, a Final year BTech student and aspiring software engineer who enjoys building practical, user-focused web applications. I primarily work with React and JavaScript, and I’m passionate about turning ideas into clean, functional products while continuously improving my problem-solving skills.",

    "I’ve gained hands-on experience through academic projects, hackathons, and virtual internships, where I’ve worked on real-world problem statements and collaborative development. I enjoy learning new technologies, refining my fundamentals, and iterating on projects to make them more scalable and efficient.",

    "Tech Stack: Java, JavaScript, React, Nodejs,HTML, CSS, Tailwind",
    "Focus Areas: Web Development, DSA, CS Fundamentals",
    "Tools: VS Code, GitHub, Vite",
  ],
  profileImage: "/profile.jpg", 
  profileGif: "/profile-gif.gif", 
};

export const USER_NAMES = {
  githubUsername: "AnjaliiRamesh",
  leetcodeUsername: "https://leetcode.com/u/anjaliramesh14012005/", 
};

export const SOCIAL_LINKS = {
  github: "https://github.com/AnjaliiRamesh",
  linkedin: "https://www.linkedin.com/in/anjali-gupta-496562246/",
  twitter: "https://twitter.com/your-twitter",
  leetcode: "https://leetcode.com/u/anjaliramesh14012005/",
  instagram: "https://instagram.com/your-instagram",
  email: "mailto:anjaliramesh14012005@gmail.com",
  // blog: "https://yourblog.com", 
  resume: "https://drive.google.com/file/d/1-SqbE-Ri9dKdWEYYwDFwkSQo9IPqWmED/view?usp=drivesdk",
};


export const FORM_ENDPOINT = "https://formspree.io/f/xojnvgzj";

export const SKILLS = { // Keep only the skills you want to showcase and remove the rest
  frontend: [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",  "TailwindCSS", "Bootstrap", 
  ],
  backend: [
    "Node.js", "Express.js", "NestJS",  "FastAPI"
  ],
  databases: [
    "MongoDB", "MySQL", "Firebase", "Supabase"
  ],
  languages: [
    "Java", "JavaScript", "TypeScript", 
  ],
  cloudDevOps: [
    "AWS", "Azure", 
  ],
  tools: [
    "VS Code", "Git", "GitHub", "GitLab", , "Postman", "Figma", "Vite", "Windows", 
  ],
};

export const PROJECTS = [
  {
    name: "Randomly",
    description: "A real-time video calling web application that randomly connects users for spontaneous video chats, fostering unexpected connections and conversations. Built with Next.js and TypeScript for a seamless, responsive experience, the app eliminates the need for sign-ups or complex setups—users simply click to connect and start chatting instantly. ",
    tech: ["Next.js", "TypeScript"],
    link: "https://randomly-neon.vercel.app/",
    github: "https://github.com/AnjaliiRamesh/Video-chat",
  },
  {
    name: "Talent-IQ",
    description: "alent-iQ is a real-time technical interview and collaborative coding platform built to simulate live interview environments. It features a VSCode-powered code editor, secure authentication, and isolated backend code execution with automatic test-case evaluation. The platform supports 1-on-1 video interview rooms, real-time chat messaging, and screen sharing with mic/camera controls. Users receive instant feedback with success/fail notifications and can practice coding problems in solo mode. Designed with a scalable REST API architecture and background job handling, it ensures secure, efficient, and interactive coding experiences.",
    tech: ["React.js","Express js", "MongoDB","Node.js","Tailwind.CSS"],
    link: "https://talentiq-frontend3.onrender.com/",
    github: "https://github.com/AnjaliiRamesh/Talent-IQ",
  },
  {
    name: "Taskora",
    description: "Taskora is a full-stack task management application that allows users to efficiently manage their daily tasks through complete CRUD operations. Users can add, edit, update, and delete tasks with a smooth and intuitive interface. The application is designed to improve productivity by providing a simple yet structured task tracking system.",
    tech: ["Next.js","Html", "javascript", "Tailwind.CSS"],
    link: "https://task-management-seven-ashen.vercel.app/",
    github: "https://github.com/AnjaliiRamesh/TaskManagement",
  },
  
 
];

export const EXPERIENCE = [
  {
    company: "Java Certification Program",
    companyLink: "https://www.scaler.com/topics/course/java-beginners/",
    role: "Java & OOP Trainee",
    period: "2025",
    location: "Remote",
    description:
      "Completed certification courses in Java Fundamentals and Object-Oriented Programming. Gained strong understanding of core Java concepts including data types, control flow, OOP principles (encapsulation, inheritance, polymorphism), and problem-solving using Java.",
    skills: ["Java", "OOP", "Problem Solving", "Data Structures Basics"],
  },
  {
    company: "IIIT Allahabad Hackathon",
    companyLink: "https://www.iiita.ac.in/",
    role: "Hackathon Participant (36-Hour Coding Challenge)",
    period: "2025",
    location: "On-site",
    description:
      "Participated in a 36-hour competitive hackathon focused on building innovative tech solutions under strict time constraints. Collaborated in a team, designed system logic, and implemented core features while managing performance and debugging challenges.",
    skills: ["Team Collaboration", "Rapid Prototyping", "Debugging", "Full-Stack Development"],
  },
  {
    company: "Walmart Sparkathon & AWS Certification",
    companyLink: "https://careers.walmart.com/sparkathon",
    role: "Hackathon Participant & Cloud Learner",
    period: "2025",
    location: "Online",
    description:
      "Participated in Walmart Sparkathon, solving real-world problem statements through structured coding rounds. Additionally completed AWS certification coursework, gaining foundational knowledge in cloud computing, deployment models, and core AWS services.",
    skills: ["DSA", "Cloud Computing", "AWS Basics", "Analytical Thinking"],
  }
];


export const EDUCATION = [
  {
    degree: "St. Andrew's Institute of technology and management",
    institution: "Maharshi Dayanand University, Rohtak",
    institutionLink: "https://saitm.ac.in/",
    period: "2022 - 2026",
    score: "7 cgpa",
  },
  {
    degree: "Thomas Baptista Junior College",
    institution: "Maharashtra State board of Higher Secondary schhol",
    institutionLink: "https://www.thomasbaptistajc.com/php/home.php",
    period: "2020 - 2022",
    score: "79% ",
  },{
    degree: "Mount Carmel High school",
    institution: "Maharashtra State board of Higher Secondary schho",
    institutionLink: "https://mountcarmelvasai.com/",
    period: "2020",
    score: "7 cgpa",
  },
  
];