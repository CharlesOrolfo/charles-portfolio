import { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: "Charles Orolfo",
  greeting: "HELLO, I'M CHARLES",
  headlinePrefix: "Designing human-centered ",
  headlineHighlight: "experiences.",
  tagline: "Informatics student at UC Irvine focused on UI/UX design, human-computer interaction, and front-end development.",

  aboutIntro: "I'm an Informatics student at UC Irvine with a passion for UI/UX design, human-computer interaction, and software development. I enjoy the creative process of building software, from exploring ideas and prototyping interfaces to turning concepts into functional applications. What interests me most is understanding how people interact with technology and finding ways to make those experiences more intuitive, accessible, and enjoyable.",

  // Local assets in /public/images/
  portraitImage: "/images/portrait.jpg",
  contactImage: "/images/contact-mountains.jpg",
  resumePdfPath: "/resume.pdf",

  // About Me Section Badges
  focus: "UI/UX design, product design, accessibility, and user-centered web applications.",
  toolsSummary: "Figma, React, Angular, TypeScript/JavaScript, Node.js, and Godot/Unity.",
  interests: "Human-Computer Interaction, game UI design, accessibility (WCAG), and usability testing.",

  contactSubtitle: "I'm open to opportunities, collaborations, or just a chat about design, development, or games.",

  // Contact Info directly from your resume
  socials: {
    email: "orolfocharlie@gmail.com",
    linkedin: "https://linkedin.com/in/charlesorolfo",
    github: "https://github.com/CharlesOrolfo",
  },

  // Structured Resume Content
  resumeData: {
    education: [
      {
        degree: "Bachelor of Science in Informatics",
        institution: "University of California, Irvine (Irvine, CA)",
        period: "September 2023 — Expected June 2027",
        details: [
          "Relevant Coursework: Human Computer Interaction, User Interaction Software, Application Design, Advanced Topics in UI, Information Visualization, Requirement Analysis & Engineering"
        ]
      }
    ],
    experience: [
      {
        role: "UI/UX Designer & Developer",
        company: "Sound Ethics Audio Wellness App (Irvine, CA)",
        period: "Sep. 2026 — Present",
        description: "Designing and developing a personalized audio-wellness app for focus and relaxation through customizable soundscapes. Prototyping sound-mixing interfaces in Figma and collaborating in a 5-person team to integrate curated audio and generative AI."
      },
      {
        role: "UI/UX Designer & Developer",
        company: "CKI at UCI Website Redesign (Remote)",
        period: "June 2025 - Sep 2025 & June 2026 - Sep 2026",
        description: "Redesigned 8 pages in Figma and built 20+ reusable UI components. Conducted stakeholder interviews, rebuilt 3+ responsive pages using Angular, Node.js, and Express, and collaborated in a 6-person Agile team."
      },
      {
        role: "UI/UX Designer",
        company: "UCI WebReg Redesign (Irvine, CA)",
        period: "April 2026 — June 2026",
        description: "Redesigned UCI's course registration system. Mapped registration workflows, developed interactive Figma prototypes with WCAG-compliant palettes, and evaluated designs through usability testing with 3 users."
      },
      {
        role: "UI/UX Designer & Developer",
        company: "Shift Change! (Irvine, CA)",
        period: "April 2025 — June 2025",
        description: "Developed 10+ modular UI components in Godot to support consistent interfaces across 4 rotating minigames. Refined gameplay interfaces through 3 rounds of playtesting."
      },
      {
        role: "Developer",
        company: "Wareware (Irvine, CA)",
        period: "January 2024 — March 2024",
        description: "Programmed 3 WarioWare-inspired microgames in Unity using C#. Developed difficulty-scaling systems, transitions, animations, and iterated on gameplay based on feedback from 50+ playtest participants."
      }
    ],
    skills: [
      {
        category: "Design & Development",
        items: ["UI/UX Design", "Front-End Development", "Prototyping", "User Research", "Usability Testing", "Accessibility (WCAG)"]
      },
      {
        category: "Frameworks & Tech",
        items: ["React", "Angular", "Node.js", "Express", "HTML5", "CSS3", "Git", "GitHub"]
      },
      {
        category: "Programming & Tools",
        items: ["JavaScript", "Python", "C#", "C/C++", "Java", "R", "Figma", "Unity", "Godot", "Trello"]
      }
    ]
  }
};