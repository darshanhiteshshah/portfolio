import { socialLinks } from '../../data/socialLinks';
import { personalInfo } from '../../data/personalInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

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
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 border-t border-slate-800">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-blue-400 via-orange-500 to-blue-400" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              <span className="text-orange-500">Darshan</span>
              <span className="text-blue-400 ml-2">Shah</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Full-Stack Developer specializing in MERN Stack and Machine Learning. 
              Currently pursuing B.Tech in Computer Science at SPIT Mumbai.
            </p>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-orange-500 font-bold">★</span>
              <span><span className="font-semibold">GPA:</span> 8.99/10</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
              <span className="text-blue-400">━</span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-slate-400 hover:text-orange-500 transition duration-200 flex items-center gap-2"
                  >
                    <span className="text-orange-500">→</span>
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={personalInfo.resumeLink}
                  download
                  className="text-slate-400 hover:text-orange-500 transition duration-200 flex items-center gap-2"
                >
                  <span className="text-orange-500">→</span>
                  Download Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
              <span className="text-blue-400">━</span>
              Get In Touch
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition duration-200"
              >
                <span className="text-blue-400">✉</span>
                <span className="break-all text-sm">{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition duration-200"
              >
                <span className="text-blue-400">☎</span>
                <span>{personalInfo.phone}</span>
              </a>
              <p className="flex items-center gap-2 text-slate-400">
                <span className="text-blue-400">📍</span>
                <span>{personalInfo.location}</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-orange-500 transition hover:scale-110 duration-200"
                  title={link.platform}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-center md:text-left">
            © {currentYear} <span className="text-orange-500 font-semibold">Darshan Shah</span>. All rights reserved.
          </p>
          
          <p className="text-slate-500 text-sm text-center md:text-right">
            Built with <span className="text-blue-400">React</span>, 
            <span className="text-orange-500"> Vite</span> & 
            <span className="text-blue-400"> Tailwind CSS</span>
          </p>
        </div>
        
        {/* Suvidha Foundation Credit */}
        <div className="mt-6 text-center border-t border-slate-800 pt-6">
          <p className="text-slate-500 text-sm">
            This portfolio was developed as part of the{' '}
            <span className="text-orange-500 font-semibold bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent">
              Suvidha Foundation International Skill Development Internship
            </span>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-400 to-orange-500 text-white p-3 rounded-full shadow-lg shadow-orange-500/50 hover:shadow-xl transition-all hover:scale-110 z-40"
        aria-label="Scroll to top"
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
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}
