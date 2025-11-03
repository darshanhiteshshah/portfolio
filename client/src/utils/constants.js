// Theme Constants
export const THEME_COLORS = {
  dark: {
    bg: '#0f1419',
    bgSecondary: '#1a1f2e',
    bgTertiary: '#2d3748',
    text: '#e8eef7',
    textSecondary: '#a0aec0',
    textMuted: '#718096',
  },
  accent: {
    blue: '#4f9ff0',
    orange: '#ff8c42',
    purple: '#8b5cf6',
    green: '#10b981',
  }
};

// Breakpoints for Responsive Design
export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// Animation Timings
export const ANIMATION_TIMINGS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.7,
  slowest: 1
};

// Routes/Sections
export const ROUTES = {
  home: '/',
  about: '#about',
  education: '#education',
  skills: '#skills',
  projects: '#projects',
  extracurricular: '#extracurricular',
  contact: '#contact'
};

// Skill Categories
export const SKILL_CATEGORIES = {
  languages: 'Programming Languages',
  webDevelopment: 'Web Development',
  dataScienceAndML: 'Data Science & ML',
  databases: 'Databases',
  tools: 'Tools & Platforms',
  concepts: 'Core Concepts',
  softSkills: 'Soft Skills'
};

// Project Categories
export const PROJECT_CATEGORIES = {
  fullStack: 'Full-Stack',
  frontend: 'Frontend',
  backend: 'Backend',
  machinelearning: 'Machine Learning',
  mobile: 'Mobile'
};

// Project Status
export const PROJECT_STATUS = {
  completed: 'Completed',
  inProgress: 'In Progress',
  planning: 'Planning'
};

// API Endpoints
export const API_ENDPOINTS = {
  projects: '/api/projects',
  skills: '/api/skills',
  contact: '/api/contact'
};

// Local Storage Keys
export const LOCAL_STORAGE_KEYS = {
  theme: 'app_theme',
  accentColor: 'app_accent_color',
  userPreferences: 'app_user_preferences',
  viewedProjects: 'app_viewed_projects'
};

// Notification Types
export const NOTIFICATION_TYPES = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info'
};

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeUp: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  fadeDown: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  fadeLeft: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
  rotate: { hidden: { opacity: 0, rotate: -10 }, visible: { opacity: 1, rotate: 0 } }
};

// Suvidha Foundation Config
export const SUVIDHA_CONFIG = {
  organization: 'Suvidha Foundation',
  program: 'International Skill Development Internship',
  duration: '21 Days',
  workHours: '1 hour per day',
  startDate: '2025-11-01',
  endDate: '2025-11-21'
};

// Default Meta Tags
export const META_TAGS = {
  title: 'Darshan Shah | Full-Stack Developer Portfolio',
  description: 'Full-Stack Developer specializing in MERN Stack and Machine Learning',
  keywords: 'Full-Stack Developer, MERN Stack, Machine Learning, Portfolio, React, Node.js',
  author: 'Darshan Hitesh Shah'
};
