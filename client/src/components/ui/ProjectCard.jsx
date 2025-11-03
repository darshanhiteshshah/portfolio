export default function ProjectCard({ 
  title, 
  subtitle,
  description, 
  image, 
  technologies = [],
  liveDemo,
  github,
  duration,
  className = ''
}) {
  return (
    <div className={`group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg overflow-hidden hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 ${className}`}>
      {/* Project Image */}
      <div className="relative h-64 bg-gradient-to-br from-blue-400/20 to-orange-500/20 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        
        {/* Duration Badge */}
        {duration && (
          <div className="absolute top-4 right-4 bg-blue-400/90 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
            {duration}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Subtitle */}
        <div className="mb-3">
          <h3 className="text-2xl font-bold text-slate-100 group-hover:text-orange-400 transition">{title}</h3>
          {subtitle && <p className="text-orange-500 font-semibold text-sm">{subtitle}</p>}
        </div>

        {/* Description */}
        <p className="text-slate-400 mb-4 line-clamp-3">{description}</p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 4).map((tech, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-blue-400/20 text-blue-300 text-xs rounded-full border border-blue-400/30 hover:bg-blue-400/30 transition"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                +{technologies.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Action Links */}
        <div className="flex gap-3 pt-4 border-t border-slate-700">
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded text-center font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all text-sm"
            >
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-blue-400/20 text-blue-300 rounded text-center font-semibold border border-blue-400/30 hover:bg-blue-400/30 hover:border-blue-400/50 transition-all text-sm"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
