import { personalInfo } from '../../data/personalInfo';
import { socialLinks } from '../../data/socialLinks';

export default function Hero() {
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
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6 inline-block md:block">
              <p className="text-blue-400 font-semibold text-lg mb-2">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent">Darshan Shah</span>
              </h1>
            </div>
            
            <p className="text-2xl text-slate-300 mb-6 font-semibold">{personalInfo.tagline}</p>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all hover:scale-105 font-semibold"
              >
                View My Projects
              </button>
              <a 
                href={personalInfo.resumeLink}
                download
                className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-all hover:shadow-lg hover:shadow-blue-400/30 font-semibold"
              >
                Download Resume
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-orange-500 hover:scale-110 transition duration-300 text-slate-300"
                  title={link.platform}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Right side - Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative group">
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-orange-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-500" />
              
              {/* Profile Image */}
              <img 
                src="/images/darshan-profile.jpg" 
                alt="Darshan Shah" 
                className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-blue-400/50 group-hover:border-orange-500 transition duration-500 relative z-10"
              />
              
              {/* GPA Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-400 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg shadow-orange-500/50 font-bold z-20">
                GPA: 8.99
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-orange-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
