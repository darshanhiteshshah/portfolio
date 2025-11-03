import { extracurricular } from '../../data/extracurricularData';

export default function Extracurricular() {
  return (
    <section id="extracurricular" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Achievements & <span className="text-orange-500">Activities</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-orange-500 mx-auto rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {extracurricular.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-orange-500 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100 mb-1">{item.role}</h3>
                  <p className="text-orange-500 font-semibold text-sm mb-2">{item.organization}</p>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-400/10 backdrop-blur border border-blue-400/30 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span>🏅</span> Recognitions
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">→</span> Dean's List - Academic Excellence
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">→</span> Organizer, Spoorthi'23 Sports Fest
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">→</span> Sports Subcommittee Member, SPIT
              </li>
            </ul>
          </div>

          <div className="bg-orange-500/10 backdrop-blur border border-orange-500/30 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span>🎯</span> Interests
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-orange-400">→</span> Open-Source Contribution
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">→</span> Technical Mentoring
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">→</span> Competitive Programming
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
