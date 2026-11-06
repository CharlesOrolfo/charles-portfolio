import { Project } from '../types';

export const projects: Project[] = [
  {
    slug: "sound-ethics",
    title: "Sound Ethics",
    subtitle: "Audio wellness app (In Progress)",
    description: "Currently designing and developing a personalized audio-wellness app to support focus and relaxation through customizable soundscapes. Created interactive Figma mockups and functional prototypes exploring intuitive sound-mixing interfaces, with ongoing work integrating generative AI and curated audio.",
    thumbnail: "/images/sound-ethics-1.jpg",
    images: [
      "/images/sound-ethics-1.jpg",
      "/images/sound-ethics-2.jpg",
      "/images/sound-ethics-3.jpg"
    ],
    role: "UI/UX Designer & Developer",
    tools: ["Figma", "UX Research", "Interaction Design", "Generative AI"],
  },
  {
    slug: "cki-at-uci",
    title: "CKI at UCI",
    subtitle: "Website redesign",
    description: "A website redesign for Circle K International at UC Irvine. Redesigned 8 pages in Figma and engineered 20+ reusable UI components in Angular, Node.js, and Express with an emphasis on accessibility and member retention.",
    thumbnail: "/images/cki-uci-1.jpg",
    images: [
      "/images/cki-uci-1.jpg",
      "/images/cki-uci-2.jpg",
      "/images/cki-uci-3.jpg"
    ],
    role: "UI/UX Designer & Developer",
    tools: ["Figma", "Angular", "Node.js", "Express", "HTML/CSS"],
    links: [
      {
        label: "View Project",
        url: "https://ucicirclek.com/"
      }
    ]
  },
  {
    slug: "webreg-redesign",
    title: "WebReg",
    subtitle: "Course registration redesign",
    description: "A human-centered figma redesign of UC Irvine's course registration system to simplify navigation and schedule planning. Created personas, journey maps, interactive prototypes, and a WCAG-compliant design system evaluated through usability testing.",
    thumbnail: "/images/webreg-1.jpg",
    images: [
      "/images/webreg-1.jpg",
      "/images/webreg-2.jpg",
      "/images/webreg-3.jpg",
      "/images/webreg-4.jpg",
      "/images/webreg-5.jpg",
      "/images/webreg-6.jpg",
      "/images/webreg-7.jpg",
      "/images/webreg-8.jpg"
    ],
    role: "UI/UX Designer",
    tools: ["Figma", "User Research", "Usability Testing", "Design Systems"]
  },
  {
    slug: "shift-change",
    title: "Shift Change!",
    subtitle: "Minigame collection (Godot)",
    description: "An Overcooked-inspired 4-minigame collection built in the Godot engine. Developed 10+ modular UI components and responsive interface layouts with consistent visual clarity refined through 3 rounds of playtesting.",
    thumbnail: "/images/shift-change.jpg",
    images: [
      "/images/shift-change-1.jpg",
    ],
    role: "UI/UX Designer & Developer",
    tools: ["Godot", "GDScript", "UI Design", "Playtesting"],
    links: [
      {
        label: "View Project",
        url: "https://surfinkreeper.itch.io/shift-change"
      }
    ]
  },
  {
    slug: "wareware",
    title: "Wareware",
    subtitle: "Microgame collection (Unity)",
    description: "A fast-paced WarioWare-inspired microgame collection programmed in Unity with C#. Features custom difficulty-scaling mechanics, scene transitions, and responsive gameplay tested with 50+ participants.",
    thumbnail: "/images/wareware.jpg",
    images: [
      "/images/wareware-1.jpg",
      "/images/wareware-2.jpg",
      "/images/wareware-3.jpg"
    ],
    role: "Developer",
    tools: ["Unity", "C#", "Game Design", "User Testing"],
    links: [
      {
        label: "View Project",
        url: "https://ctnp.itch.io/wareware"
      }
    ]
  }
];