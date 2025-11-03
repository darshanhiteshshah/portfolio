import { skills } from '../../data/skillsData';

export default function Skills() {
  // Safely render skill groups with fallback
  const renderSkillGroup = (groupTitle, skillList) => {
    // Add safety check for undefined or empty arrays
    if (!skillList || !Array.isArray(skillList) || skillList.length === 0) {
      return null;
    }

    return (
      <div key={groupTitle} className="mb-10">
        <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
          <span className="text-orange-500">▸</span> {groupTitle}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillList.map((skill, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-orange-500 p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <p className="text-slate-100 font-semibold text-sm mb-2">{skill.name}</p>
              <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-orange-500 transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-blue-400 text-xs mt-1">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Technical <span className="text-orange-500">Skills</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-orange-500 mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {renderSkillGroup('Languages', skills?.languages || [])}
            {renderSkillGroup('Web Development', skills?.webDevelopment || [])}
          </div>
          <div>
            {renderSkillGroup('Data Science & ML', skills?.dataScienceAndML || [])}
            {renderSkillGroup('Databases', skills?.databases || [])}
            {renderSkillGroup('Tools & Platforms', skills?.tools || [])}
          </div>
        </div>

        {/* Core Concepts */}
        {skills?.concepts && skills.concepts.length > 0 && (
          <div className="mt-12 bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
              <span className="text-blue-400">★</span> Core Concepts & Expertise
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {skills.concepts.map((concept, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  <span className="text-slate-300">{concept.name || concept}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Soft Skills */}
        {skills?.softSkills && skills.softSkills.length > 0 && (
          <div className="mt-8 bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
              <span className="text-blue-400">💪</span> Soft Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.softSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 font-medium flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-orange-400 text-sm font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-orange-500 transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
