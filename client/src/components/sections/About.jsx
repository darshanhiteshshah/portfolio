export default function About() {
  const highlights = [
    { icon: '🎓', title: 'SPIT Student', desc: '3rd Year B.Tech CSE' },
    { icon: '⭐', title: 'GPA: 8.99', desc: 'Consistent Academic Excellence' },
    { icon: '💻', title: 'MERN Stack', desc: 'Full-Stack Development Expert' },
    { icon: '🤖', title: 'ML Enthusiast', desc: 'AI & Machine Learning Integration' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            About <span className="text-orange-500">Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-orange-500 mx-auto rounded-full" />
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left - Description */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate full-stack developer currently in my third year of B.Tech in Computer Science and Engineering at Sardar Patel Institute of Technology, Mumbai. With a stellar GPA of 8.99/10, I've consistently excelled in academics while pursuing real-world development projects.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My journey in tech has been driven by a desire to build impactful applications that solve real problems. I specialize in the MERN stack and have hands-on experience integrating machine learning models into production applications.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Beyond coding, I'm passionate about continuous learning, contributing to open-source projects, and mentoring junior developers. I believe in writing clean, scalable code and maintaining best practices across all projects.
            </p>
          </div>

          {/* Right - Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-orange-500 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-2"
              >
                <p className="text-4xl mb-3">{item.icon}</p>
                <h3 className="text-slate-100 font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Overview */}
        <div className="bg-slate-800/30 backdrop-blur border border-slate-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <span className="text-blue-400">⚡</span> What I Do
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-orange-500 font-semibold mb-2">Frontend Development</p>
              <p className="text-slate-400">Building responsive, interactive UIs with React, Vite, and Tailwind CSS</p>
            </div>
            <div>
              <p className="text-blue-400 font-semibold mb-2">Backend Development</p>
              <p className="text-slate-400">Creating scalable APIs with Node.js, Express, and MongoDB</p>
            </div>
            <div>
              <p className="text-orange-500 font-semibold mb-2">ML Integration</p>
              <p className="text-slate-400">Implementing machine learning models using Python and TensorFlow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
