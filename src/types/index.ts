export interface ProjectLink {
    label: string;
    url: string;
  }
  
  export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    thumbnail: string;
    images: string[];
    role: string;
    tools: string[];
    links?: ProjectLink[];
  }
  
  export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description: string;
  }
  
  export interface EducationItem {
    degree: string;
    institution: string;
    period: string;
    details?: string[];
  }
  
  export interface SiteConfig {
    name: string;
    greeting: string;
    headlinePrefix: string;
    headlineHighlight: string;
    tagline: string;
    aboutIntro: string;
    portraitImage: string;
    contactImage: string;
    resumePdfPath: string;
    focus: string;
    toolsSummary: string;
    interests: string;
    contactSubtitle: string;
    socials: {
      email?: string;
      linkedin?: string;
      github?: string;
    };
    resumeData: {
      education: EducationItem[];
      experience: ExperienceItem[];
      skills: {
        category: string;
        items: string[];
      }[];
    };
  }