export default function EducationCard({ 
  degree, 
  institution, 
  duration, 
  score,
  index,
  total,
  className = ''
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline Line */}
      {index !== total - 1 && (
        <div className="absolute left-8 top-24 w-1 h-20 bg-gradient-to-b from-orange-500 to-blue-400" />
      )}

      {/* Main Card */}
      <div className="flex gap-6">
        {/* Timeline Dot */}
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-blue-400 to-orange-500 text-white font-bold text-lg shadow-lg shadow-orange-500/50">
            {total - index}
          </div>
        </div>

        {/* Card Content */}
        <div className="flex-grow bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-orange-500 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-slate-100 hover:text-orange-400 transition">
                {degree}
              </h3>
            </div>
            <span className="text-blue-400 font-semibold text-sm md:text-base mt-2 md:mt-0">
              {duration}
            </span>
          </div>

          {/* Institution */}
          <p className="text-orange-500 font-semibold mb-2">{institution}</p>

          {/* Score */}
          <div className="flex items-center gap-2">
            <span className="text-blue-400">★</span>
            <p className="text-slate-400 font-medium">{score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
