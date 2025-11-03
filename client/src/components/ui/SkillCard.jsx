export default function SkillCard({ 
  name, 
  icon, 
  level = 80,
  category = 'default',
  className = ''
}) {
  const categoryColors = {
    language: 'bg-blue-400/20 border-blue-400/30 text-blue-300',
    web: 'bg-orange-500/20 border-orange-500/30 text-orange-300',
    data: 'bg-purple-500/20 border-purple-500/30 text-purple-300',
    database: 'bg-green-500/20 border-green-500/30 text-green-300',
    tools: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300',
    default: 'bg-slate-700/30 border-slate-600/50 text-slate-300',
  };

  const gradientColors = {
    language: 'from-blue-400 to-blue-500',
    web: 'from-orange-400 to-orange-500',
    data: 'from-purple-400 to-purple-500',
    database: 'from-green-400 to-green-500',
    tools: 'from-indigo-400 to-indigo-500',
    default: 'from-slate-400 to-slate-500',
  };

  return (
    <div
      className={`group bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-orange-500 p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 ${className}`}
    >
      {/* Icon */}
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Name */}
      <p className="text-slate-100 font-semibold text-sm mb-3">{name}</p>

      {/* Progress Bar Container */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${categoryColors[category]}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
          <span className="text-blue-400 text-xs font-bold">{level}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${gradientColors[category]} transition-all duration-500 ease-out`}
            style={{ width: `${level}%` }}
          />
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-blue-500/0 group-hover:from-orange-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300 pointer-events-none" />
    </div>
  );
}
