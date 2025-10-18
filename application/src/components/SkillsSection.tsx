import { useRef } from "react";
import { useCursor } from "./CustomCursor";

export default function SkillsSection() {
  const { setIsHovering } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);

  const hardSkills = [
    {
      title: "FullStack Development",
      icon: "💻",
      gradient: "from-blue-200 to-cyan-200",
    },
    {
      title: "Artificial Intelligence Systems",
      icon: "🤖",
      gradient: "from-purple-200 to-pink-200",
    },
    {
      title: "DevOps & Networking",
      icon: "🔧",
      gradient: "from-green-200 to-emerald-200",
    },
    {
      title: "Algorithm & Problem Solving",
      icon: "🧩",
      gradient: "from-orange-200 to-amber-200",
    },
  ];

  const softSkills = [
    {
      title: "Hard Working",
      icon: "💪",
      gradient: "from-red-200 to-rose-200",
    },
    {
      title: "Teamwork",
      icon: "🤝",
      gradient: "from-indigo-200 to-blue-200",
    },
    {
      title: "Adaptability",
      icon: "🌱",
      gradient: "from-teal-200 to-cyan-200",
    },
    {
      title: "Leadership",
      icon: "👑",
      gradient: "from-yellow-200 to-amber-200",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-32 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/30 to-cyan-200/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-indigo-200/25 to-purple-200/20 blur-3xl animate-float-slower animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-teal-200/20 to-emerald-200/15 blur-3xl animate-pulse-slow"></div>
        
        <div className="absolute top-20 left-20 w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-100/40 to-cyan-100/30 opacity-80 blur-xl animate-float rotate-12"></div>
        <div className="absolute top-40 right-40 w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-100/35 to-indigo-100/25 opacity-75 blur-lg animate-float-slow animation-delay-1000 -rotate-6"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 rounded-3xl bg-gradient-to-br from-green-100/40 to-emerald-100/30 opacity-70 blur-xl animate-float-slower animation-delay-2000 rotate-45"></div>
        <div className="absolute bottom-32 left-40 w-36 h-36 rounded-3xl bg-gradient-to-br from-pink-100/35 to-rose-100/25 opacity-65 blur-xl animate-float animation-delay-3000 -rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-100/30 to-amber-100/20 opacity-60 blur-lg animate-float-slow animation-delay-4000 rotate-90"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-100/25 to-blue-100/20 opacity-55 blur-lg animate-float-slower rotate-45"></div>
        
        <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100/20 to-purple-100/15 opacity-30 blur-md animate-float animation-delay-5000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-10 h-10 rounded-full bg-gradient-to-br from-teal-100/25 to-green-100/15 opacity-35 blur-md animate-float-slow animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-100/20 to-cyan-100/15 opacity-25 blur-sm animate-float-slower animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/5 w-14 h-14 rounded-full bg-gradient-to-br from-pink-100/20 to-rose-100/15 opacity-30 blur-md animate-float animation-delay-3500"></div>
        
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-blue-100/15 to-indigo-100/10 blur-3xl animate-rotate-gradient"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-purple-100/10 to-pink-100/10 blur-3xl animate-rotate-gradient animation-delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 py-20">
        <div className="text-center mb-20 opacity-0 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent animate-gradient">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            <h3 className="text-2xl font-bold mb-8 pb-3 border-b-2 border-blue-200">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Hard Skills
              </span>
            </h3>
            <div className="space-y-6">
              {hardSkills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="group opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:translate-x-2">
                    <div className={`text-4xl bg-gradient-to-br ${skill.gradient} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-base font-bold text-gray-900 flex-1">
                      {skill.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up animation-delay-400">
            <h3 className="text-2xl font-bold mb-8 pb-3 border-b-2 border-purple-200">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Soft Skills
              </span>
            </h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="group opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 7) * 100}ms` }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:translate-x-2">
                    <div className={`text-4xl bg-gradient-to-br ${skill.gradient} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-base font-bold text-gray-900 flex-1">
                      {skill.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
