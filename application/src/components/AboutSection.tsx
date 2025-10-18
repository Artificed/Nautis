import { useState, useEffect, useRef } from "react";

export default function AboutSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const aboutInfo = [
    {
      label: "Birthdate & Place",
      value: "Jakarta, 30 November 2003",
      icon: "🎂",
      gradient: "from-purple-200 to-pink-200",
    },
    {
      label: "Nationality",
      value: "Indonesian",
      icon: "🌏",
      gradient: "from-blue-200 to-cyan-200",
    },
    {
      label: "Gender",
      value: "Male",
      icon: "👤",
      gradient: "from-amber-200 to-orange-200",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100"
    >
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s, height 0.3s",
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-300 ${
            isHovering ? "w-12 h-12" : "w-6 h-6"
          }`}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-32 w-32 h-32 rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 opacity-80 blur-xl animate-float"></div>
        <div className="absolute top-16 left-20 w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 opacity-75 blur-lg animate-float-slow animation-delay-1000"></div>
        <div className="absolute bottom-32 right-16 w-28 h-28 rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 opacity-70 blur-xl animate-float-slower animation-delay-2000"></div>
        <div className="absolute bottom-24 left-24 w-36 h-36 rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-50 opacity-65 blur-xl animate-float animation-delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300 bg-clip-text text-transparent animate-gradient">
                Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full mx-auto"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {aboutInfo.map((info, index) => (
            <div
              key={info.label}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              <div
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${info.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`}
                ></div>

                <div className="relative bg-white rounded-3xl p-8 h-full flex flex-col items-center text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {info.icon}
                  </div>

                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 min-h-[2.5rem] flex items-center justify-center">
                    {info.label}
                  </h3>

                  <p className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300 min-h-[3.5rem] flex items-center justify-center">
                    {info.value}
                  </p>

                  <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-gray-200 group-hover:border-gray-400 transition-colors opacity-0 group-hover:opacity-100 rounded-tr-lg"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-gray-200 group-hover:border-gray-400 transition-colors opacity-0 group-hover:opacity-100 rounded-bl-lg"></div>

                  <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center opacity-0 animate-fade-in-up animation-delay-800">
          <div
            className="group max-w-3xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative">
              <svg
                className="w-10 h-10 text-amber-200 mx-auto mb-4 opacity-50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-gray-700 font-light italic leading-relaxed">
                Passionate about creating innovative solutions and bringing
                ideas to life through code. Every project is an opportunity to
                learn, grow, and make a meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
