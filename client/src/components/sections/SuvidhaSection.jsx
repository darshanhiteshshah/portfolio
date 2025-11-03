import { SITE_CONFIG } from '../../data/constants';

export default function SuvidhaSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Badge */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50">
              <div className="w-30 h-30 bg-slate-900 rounded-full flex items-center justify-center text-center p-4">
                <p className="text-white font-bold text-center text-sm">SUVIDHA FOUNDATION</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">
              Developed as Part of <span className="text-orange-500">Suvidha Foundation</span>
            </h3>
            <p className="text-slate-300 mb-4 text-lg leading-relaxed">
              {SITE_CONFIG.internship.note}
            </p>
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-orange-500 rounded-full" />
              <p className="text-slate-400 font-semibold">
                {SITE_CONFIG.internship.program} • {SITE_CONFIG.internship.organization}
              </p>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-400/10 border border-blue-400/30 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-blue-400">21</p>
              <p className="text-xs text-slate-400">Days</p>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-orange-500">1hr</p>
              <p className="text-xs text-slate-400">Daily</p>
            </div>
            <div className="bg-slate-700 border border-slate-600 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-slate-100">100%</p>
              <p className="text-xs text-slate-400">Complete</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
