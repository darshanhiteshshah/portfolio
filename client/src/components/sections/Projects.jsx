import { projects } from '../../data/projectsData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A collection of my best work showcasing full-stack development, ML integration, and modern UI/UX
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-orange-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg overflow-hidden hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-400/20 to-orange-500/20 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100">{project.title}</h3>
                    <p className="text-orange-500 font-semibold text-sm">{project.subtitle}</p>
                  </div>
                  <span className="text-blue-400 font-semibold text-xs whitespace-nowrap ml-2">{project.duration}</span>
                </div>

                <p className="text-slate-400 mb-4 line-clamp-3">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-blue-400/20 text-blue-300 text-xs rounded-full border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-700">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded text-center font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-blue-400/20 text-blue-300 rounded text-center font-semibold border border-blue-400/30 hover:bg-blue-400/30 transition-all text-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
