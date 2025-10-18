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

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent animate-gradient">
                Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mx-auto"></div>
          </div>
        </div>

        <div className="space-y-16">
          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-200 to-cyan-200 px-6 py-2 rounded-full">
                Hard Skills
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hardSkills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-full"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${skill.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`}
                    ></div>

                    <div className="relative bg-white rounded-2xl p-6 h-full flex flex-col items-center text-center">
                      <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        {skill.icon}
                      </div>

                      <h4 className="text-base font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                        {skill.title}
                      </h4>

                      <div className="absolute top-3 right-3 w-2 h-2 border-t-2 border-r-2 border-gray-200 group-hover:border-gray-400 transition-colors opacity-0 group-hover:opacity-100 rounded-tr-lg"></div>
                      <div className="absolute bottom-3 left-3 w-2 h-2 border-b-2 border-l-2 border-gray-200 group-hover:border-gray-400 transition-colors opacity-0 group-hover:opacity-100 rounded-bl-lg"></div>

                      <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up animation-delay-400">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-200 to-pink-200 px-6 py-2 rounded-full">
                Soft Skills
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 7) * 100}ms` }}
                >
                  <div
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-full"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${skill.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`}
                    ></div>

                    <div className="relative bg-white rounded-2xl p-6 h-full flex flex-col items-center text-center">
                      <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        {skill.icon}
                      </div>

                      <h4 className="text-base font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                        {skill.title}
                      </h4>

                      <div className="absolute top-3 right-3 w-2 h-2 border-t-2 border-r-2 border-gray-200 group-hover:border-gray-400 transition-colors opacity-0 group-hover:opacity-100 rounded-tr-lg"></div>
                      <div className="absolute bottom-3 left-3 w-2 h-2 border-b-2 border-l-2 border-gray-200 group-hover:border-gray-400 transition-colors opacity-0 group-hover:opacity-100 rounded-bl-lg"></div>

                      <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                      </div>
                    </div>
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
