import { education } from '../../data/educationData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            <span className="text-blue-400">Education</span> & Learning
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-orange-500 mx-auto rounded-full" />
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={edu.id}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-20 bg-gradient-to-b from-orange-500 to-blue-400" />
              )}

              {/* Card */}
              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-blue-400 to-orange-500 text-white font-bold text-lg">
                    {education.length - index}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-orange-500 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
                    <span className="text-blue-400 font-semibold text-sm md:text-base">{edu.duration}</span>
                  </div>
                  <p className="text-orange-500 font-semibold mb-2">{edu.institution}</p>
                  <p className="text-slate-400">{edu.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
