export const SITE_CONFIG = {
  // Site Information
  title: "Darshan Shah | Full-Stack Developer Portfolio",
  description: "Full-Stack Developer specializing in MERN Stack and Machine Learning. Showcasing my projects, skills, and experience.",
  author: "Darshan Hitesh Shah",
  siteUrl: "https://darshan-shah.vercel.app",
  
  // Dark Grey + Blue + Orange Theme
  colors: {
    // Primary Dark Theme
    dark: {
      bg: "#0f1419",        // Darkest grey - main background
      bgSecondary: "#1a1f2e",     // Dark grey - sections
      bgTertiary: "#2d3748",      // Lighter grey - cards/hover
    },
    
    // Accent Colors
    accent: {
      blue: "#4f9ff0",      // Sky blue - primary accents
      orange: "#ff8c42",    // Burnt orange - CTAs & highlights
      purple: "#8b5cf6",    // Purple - gradients
      green: "#10b981",     // Green - success states
    },
    
    // Text Colors
    text: {
      primary: "#e8eef7",   // Light off-white
      secondary: "#a0aec0", // Light grey
      muted: "#718096",     // Muted grey
    },
    
    // Gradients
    gradients: {
      primary: "from-slate-900 via-slate-900 to-slate-950",
      accent: "from-blue-400 to-orange-500",
      button: "from-orange-500 to-orange-600",
      hoverCard: "from-blue-400/10 to-orange-500/10",
    }
  },
  
  // Navigation Sections
  sections: [
    "home",
    "about",
    "education",
    "skills",
    "projects",
    "extracurricular",
    "contact"
  ],
  
  // Suvidha Foundation Information
  internship: {
    organization: "Suvidha Foundation",
    program: "International Skill Development Internship",
    duration: "21 Days",
    workHours: "1 hour per day",
    note: "This portfolio was developed as part of the Suvidha Foundation International Skill Development Internship.",
    startDate: "2025-11-01",
    endDate: "2025-11-21"
  },
  
  // Deployment Information
  deployment: {
    frontend: "Vercel",
    backend: "N/A (Static Site)",
    domain: "darshan-shah.vercel.app",
    repository: "https://github.com/darshanhiteshshah/portfolio"
  },
  
  // Technologies Used
  technologies: {
    frontend: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    tools: ["Git", "GitHub", "VS Code", "Vercel"],
    libraries: ["Intersection Observer", "Custom Hooks"]
  },
  
  // SEO Configuration
  seo: {
    keywords: "Full-Stack Developer, MERN Stack, Machine Learning, Portfolio, React, Node.js, MongoDB",
    canonical: "https://darshan-shah.vercel.app",
    ogImage: "/images/darshan-profile.jpg"
  },
  
  // Contact Information
  contact: {
    email: "darshanhiteshshah@gmail.com",
    phone: "+91 7304323838",
    responseTime: "Within 24 hours"
  },
  
  // Features Enabled
  features: {
    darkMode: true,
    animations: true,
    parallaxScroll: true,
    smoothScroll: true,
    scrollToTop: true
  }
};
