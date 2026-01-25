// This file contains constants and data used across the portfolio template. 
// Update the values to personalize your portfolio.

export const ABOUT_ME = {
  name: "Anjali Gupta",
  title: "Software Developer",
  location: "New Delhi, IN",
  email: "anjaliramesh14012005@gmail.com",
  description: [
    "Hey there! 👋 I’m Anjali, a third-year BTech student and aspiring software engineer who enjoys building practical, user-focused web applications. I primarily work with React and JavaScript, and I’m passionate about turning ideas into clean, functional products while continuously improving my problem-solving skills.",

    "I’ve gained hands-on experience through academic projects, hackathons, and virtual internships, where I’ve worked on real-world problem statements and collaborative development. I enjoy learning new technologies, refining my fundamentals, and iterating on projects to make them more scalable and efficient.",

    "Tech Stack: JavaScript, React, HTML, CSS, Tailwind",
    "Focus Areas: Web Development, DSA, CS Fundamentals",
    "Tools: VS Code, GitHub, Vite",
  ],
  profileImage: "/profile.jpg", // Replace with your profile image
  profileGif: "/profile-gif.gif", // Replace with your personalised gif
};

export const USER_NAMES = {
  githubUsername: "https://github.com/AnjaliiRamesh",
  leetcodeUsername: "https://leetcode.com/u/anjaliramesh14012005/", // remove or keep blank if you don't have a LeetCode profile
  hashnodeUsername: "your-hashnode-username", // remove or keep blank if you don't have a Hashnode profile
};

export const SOCIAL_LINKS = {
  github: "https://github.com/AnjaliiRamesh",
  linkedin: "https://www.linkedin.com/in/anjali-gupta-496562246/",
  twitter: "https://twitter.com/your-twitter",
  leetcode: "https://leetcode.com/u/anjaliramesh14012005/",
  // peerlist: "https://peerlist.io/your-peerlist", // remove or keep blank if you don't have a Peerlist profile
  instagram: "https://instagram.com/your-instagram",
  email: "mailto:anjaliramesh14012005@gmail.com",
  // blog: "https://yourblog.com", // remove if you don't have a blog
  resume: "href=https://drive.google.com/file/d/1j6xmVUppn8PkFz5wADlURM-FMNfJyucZ/view?usp=drivesdk",
};

// Contact form endpoint (update with your own Formspree endpoint)
export const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

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
    name: "Project 2",
    description: "Describe your project 2 here. Example: An e-commerce site for books.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://yourproject2-link.com",
    github: "https://github.com/yourusername/project2",
  },
  // Add more projects as needed
];

export const EXPERIENCE = [
  {
    company: "Company Name",
    companyLink: "https://companyname.com/",
    role: "Software Developer",
    period: "Jan 2025 - Present",
    location: "Remote/Location",
    description: "Describe your responsibilities and achievements.",
    skills: ["React", "Node.js", "XXXX"],
  },
  // Add more experience as needed
];

export const EDUCATION = [
  {
    degree: "Your Degree (e.g., B.Tech. in Computer Science)",
    institution: "Your University",
    institutionLink: "https://youruniversity.com/",
    period: "2020 - 2024",
    score: "XX % or GPA",
  },
  // Add more education as needed
];