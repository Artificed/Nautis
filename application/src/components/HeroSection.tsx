import { PERSONAL_DATA } from "../lib/constants/personal-data";
import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
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

  const parallaxOffset = (speed: number) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const relativeX = mousePosition.x - rect.left;
      const relativeY = mousePosition.y - rect.top;
      return {
        transform: `translate(${relativeX * speed * 0.02}px, ${relativeY * speed * 0.02}px)`,
      };
    }
    return {};
  };

  const getRelativePosition = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      return {
        x: mousePosition.x - rect.left,
        y: mousePosition.y - rect.top,
      };
    }
    return { x: 0, y: 0 };
  };

  const relativePos = getRelativePosition();

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100"
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

      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "left 0.15s, top 0.15s",
        }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-gray-400 opacity-30" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 right-32 w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50 opacity-80 blur-xl animate-float transition-transform duration-300"
          style={parallaxOffset(2)}
        ></div>
        <div 
          className="absolute top-16 left-20 w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-50 to-rose-50 opacity-75 blur-lg animate-float-slow animation-delay-1000 transition-transform duration-300"
          style={parallaxOffset(-1.5)}
        ></div>
        <div 
          className="absolute bottom-32 left-16 w-28 h-28 rounded-3xl bg-gradient-to-br from-pink-50 to-purple-50 opacity-70 blur-xl animate-float-slower animation-delay-2000 transition-transform duration-300"
          style={parallaxOffset(1)}
        ></div>
        <div 
          className="absolute bottom-24 right-24 w-36 h-36 rounded-3xl bg-gradient-to-br from-teal-50 to-sky-50 opacity-65 blur-xl animate-float animation-delay-3000 transition-transform duration-300"
          style={parallaxOffset(-2)}
        ></div>
        <div 
          className="absolute top-1/2 right-12 w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-50 to-pink-50 opacity-60 blur-lg animate-float-slow animation-delay-4000 transition-transform duration-300"
          style={parallaxOffset(1.5)}
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/4 w-16 h-16 rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 opacity-55 blur-lg animate-float-slower transition-transform duration-300"
          style={parallaxOffset(-1)}
        ></div>
        
        <div 
          className="absolute top-1/4 left-1/3 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 opacity-30 blur-md animate-float animation-delay-5000 transition-transform duration-300"
          style={parallaxOffset(0.5)}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/3 w-10 h-10 rounded-full bg-gradient-to-br from-pink-50 to-rose-50 opacity-35 blur-md animate-float-slow animation-delay-2000 transition-transform duration-300"
          style={parallaxOffset(-0.8)}
        ></div>
        <div 
          className="absolute top-2/3 left-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 opacity-25 blur-sm animate-float-slower animation-delay-1000 transition-transform duration-300"
          style={parallaxOffset(1.2)}
        ></div>
        
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-purple-100/20 to-pink-100/20 blur-3xl animate-rotate-gradient"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-blue-100/15 to-cyan-100/15 blur-3xl animate-rotate-gradient animation-delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="w-20 h-1 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full animate-fade-in-down opacity-0"></div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight opacity-0 animate-fade-in-up animation-delay-200">
              <span className="inline-block text-gray-900">Hi I'm</span>{" "}
              <span 
                className="inline-block bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent animate-gradient hover:scale-110 transition-transform duration-300 cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {PERSONAL_DATA.name.split(' ')[0]}.
              </span>
              <br />
              <span className="inline-block text-gray-700 relative group">
                A Developer
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-gray-700 to-gray-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg font-light opacity-0 animate-fade-in-up animation-delay-400">
              I'm also a passionate programmer and{" "}
              <span 
                className="font-semibold text-gray-800 relative group cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                AI enthusiast
                <span className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 rounded"></span>
              </span>
              , bringing innovative solutions to life with a keen eye for creating engaging experiences.
            </p>
            
            <div className="flex gap-4 pt-4 opacity-0 animate-fade-in-up animation-delay-600">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="#work"
                className="group px-8 py-4 bg-white text-gray-900 rounded-full font-medium border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 relative overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative z-10">View Work</span>
                <span className="absolute inset-0 bg-gray-50 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
              </a>
            </div>
            
            <div className="flex gap-6 pt-8 opacity-0 animate-fade-in-up animation-delay-800">
              <div 
                className="group cursor-pointer relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl font-bold text-gray-900 animate-bounce-subtle group-hover:scale-110 transition-transform duration-300">2+</div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Years Experience</div>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div 
                className="group cursor-pointer relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl font-bold text-gray-900 animate-bounce-subtle animation-delay-400 group-hover:scale-110 transition-transform duration-300">10+</div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Projects Done</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end opacity-0 animate-fade-in-up animation-delay-400">
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute -inset-4">
                <div className="w-full h-full bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 blur-xl rounded-[3.5rem] opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-rotate-gradient"></div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500 shadow-2xl"></div>
              
              <div 
                className="relative bg-white p-8 rounded-[3rem] shadow-2xl transform -rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500"
                style={{
                  transform: `
                    rotate(-2deg) 
                    rotateX(${relativePos.y * 0.01}deg) 
                    rotateY(${relativePos.x * 0.01}deg)
                  `,
                }}
              >
                <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>
                
                <div 
                  className="absolute inset-0 rounded-[3rem] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${relativePos.x}px ${relativePos.y}px, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                  }}
                ></div>
                
                <img
                  src={PERSONAL_DATA.profileImage}
                  alt={PERSONAL_DATA.name}
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-[2rem] relative z-10 group-hover:brightness-110 transition-all duration-300"
                />
                
                <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-purple-200 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-150"></div>
                <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-pink-200 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-150"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up animation-delay-1000">
        <div 
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span className="text-sm font-medium group-hover:scale-110 transition-transform duration-300">Scroll Down</span>
          <div className="relative">
            <svg 
              className="w-6 h-6 animate-bounce group-hover:translate-y-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <div className="absolute inset-0 border-2 border-gray-400 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}