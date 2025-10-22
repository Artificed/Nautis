import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";

export default function HeroSection() {
  const { setIsHovering } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 right-32 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/30 to-amber-200/20 blur-3xl animate-float"
          style={parallaxOffset(2)}
        ></div>
        <div 
          className="absolute bottom-32 left-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-purple-200/25 to-pink-200/20 blur-3xl animate-float-slower animation-delay-2000"
          style={parallaxOffset(-1.5)}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-cyan-200/20 to-blue-200/15 blur-3xl animate-pulse-slow"
          style={parallaxOffset(1)}
        ></div>
        
        <div className="absolute top-20 left-20 w-32 h-32 rounded-3xl bg-gradient-to-br from-orange-100/40 to-amber-100/30 opacity-80 blur-xl animate-float rotate-12"></div>
        <div className="absolute top-40 right-40 w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-100/35 to-rose-100/25 opacity-75 blur-lg animate-float-slow animation-delay-1000 -rotate-6"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 rounded-3xl bg-gradient-to-br from-cyan-100/40 to-blue-100/30 opacity-70 blur-xl animate-float-slower animation-delay-2000 rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className="px-4 py-2 bg-gradient-to-r from-orange-400 to-amber-400 text-white rounded-full text-sm font-semibold shadow-lg">
              Work Plan
            </span>
          </motion.div>

          <h1 className="text-6xl pb-3 font-bold mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
            My Roadmap
          </h1>

          <p className="text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
            A comprehensive timeline detailing my approach to delivering exceptional results
            over the next 30 days as Software Engineer at AstDev
          </p>

          <motion.div
            className=""
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-8 h-8 mx-auto text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <p className="text-sm text-gray-600 mt-2">Scroll to explore timeline</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
