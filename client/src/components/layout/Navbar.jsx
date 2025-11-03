import { useState, useEffect } from 'react';
import { socialLinks } from '../../data/socialLinks';
import { personalInfo } from '../../data/personalInfo';

export default function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'extracurricular', label: 'Activities' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo with Orange Accent */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold transition-colors duration-300 text-slate-100 hover:text-orange-500"
        >
          <span className="text-orange-500">Darshan</span> 
          <span className="text-blue-400 ml-1">Shah</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`font-medium transition-all duration-200 relative ${
                activeSection === link.id
                  ? 'text-orange-500'
                  : 'text-slate-300 hover:text-blue-400'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-orange-500 rounded-full" />
              )}
            </button>
          ))}
          
          {/* Resume Download Button - Orange CTA */}
          <a
            href={personalInfo.resumeLink}
            download
            className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all hover:scale-105 font-semibold"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden z-50 text-slate-100 hover:text-orange-500 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-gradient-to-b from-slate-900 to-slate-950 z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-2xl font-medium transition-colors duration-200 ${
                activeSection === link.id
                  ? 'text-orange-500'
                  : 'text-slate-300 hover:text-blue-400'
              }`}
            >
              {link.label}
            </button>
          ))}
          
          {/* Mobile Resume Button */}
          <a
            href={personalInfo.resumeLink}
            download
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all text-xl font-semibold"
          >
            Download Resume
          </a>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:scale-110 hover:text-orange-500 transition"
                title={link.platform}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
