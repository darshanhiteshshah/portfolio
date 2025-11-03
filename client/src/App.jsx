import { useState, useEffect } from 'react';
import { useScrollDirection } from './hooks/useScrollAnimation';
import { useScrollProgress } from './hooks/useScrollAnimation';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Extracurricular from './components/sections/Extracurricular';
import Contact from './components/sections/Contact';
import SuvidhaSection from './components/sections/SuvidhaSection';

// Common Components
import ScrollToTop from './components/common/ScrollToTop';
import Loader from './components/common/Loader';
import ErrorBoundary from './components/common/ErrorBoundary';

// Utilities
import { SITE_CONFIG } from './data/constants';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollProgress, setShowScrollProgress] = useState(false);
  const scrollDirection = useScrollDirection();
  const scrollProgress = useScrollProgress();

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Show scroll progress indicator
  useEffect(() => {
    setShowScrollProgress(window.scrollY > 100);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <Loader 
          size="lg" 
          variant="ring" 
          message="Loading Portfolio..."
          fullScreen={false}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-hidden">
      
      {/* Scroll Progress Bar */}
      {showScrollProgress && (
        <div 
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-orange-500 z-50 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      )}

      {/* Background Gradient Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Animated gradient blob 1 */}
        <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl opacity-20 animate-pulse" />
        
        {/* Animated gradient blob 2 */}
        <div className="absolute bottom-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Animated gradient blob 3 */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header with Fixed Position */}
        <Header />

        {/* Hero Section */}
        <section id="hero" className="pt-20">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-20">
          <Education />
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>

        {/* Extracurricular Section */}
        <section id="extracurricular" className="scroll-mt-20">
          <Extracurricular />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>

        {/* Suvidha Foundation Section */}
        <section id="suvidha" className="scroll-mt-20">
          <SuvidhaSection />
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop threshold={300} variant="button" />

      {/* Meta Tags (for SEO) */}
      <MetaTags />

      {/* Hidden accessibility elements */}
      <a href="#main-content" className="sr-only">Skip to main content</a>
    </div>
  );
}

// Meta Tags Component for SEO
function MetaTags() {
  useEffect(() => {
    // Update document title
    document.title = SITE_CONFIG.title;

    // Update meta tags
    const metaTags = [
      { name: 'description', content: SITE_CONFIG.description },
      { name: 'keywords', content: 'Full-Stack Developer, MERN Stack, Machine Learning' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: SITE_CONFIG.title },
      { property: 'og:description', content: SITE_CONFIG.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: SITE_CONFIG.siteUrl },
      { name: 'theme-color', content: '#0f1419' },
    ];

    metaTags.forEach(tag => {
      let metaElement = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
      
      if (!metaElement) {
        metaElement = document.createElement('meta');
        if (tag.name) metaElement.setAttribute('name', tag.name);
        if (tag.property) metaElement.setAttribute('property', tag.property);
        document.head.appendChild(metaElement);
      }
      
      metaElement.setAttribute('content', tag.content);
    });
  }, []);

  return null;
}

export default App;
