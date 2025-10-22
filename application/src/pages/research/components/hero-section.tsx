import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";

export default function ResearchHeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { setIsHovering } = useCursor();
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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50"
    >
      {/* Background floating elements */}
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
      </div>

      {/* Scattered Logo Elements with spin on hover */}
      <motion.div
        className="absolute top-1/6 left-1/6 cursor-pointer"
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img src="/src/assets/k8s-logo.png" alt="Kubernetes" className="w-20 h-20" />
      </motion.div>

      <motion.div
        className="absolute top-1/5 right-1/6 cursor-pointer"
        whileHover={{ rotate: -360, scale: 1.2 }}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img src="/src/assets/n8n-logo.png" alt="n8n" className="w-20 h-20" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/5 left-1/8 cursor-pointer"
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img src="/src/assets/mcp-logo.png" alt="MCP" className="w-24 h-24 rounded-3xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/6 right-1/6 cursor-pointer"
        whileHover={{ rotate: -360, scale: 1.2 }}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img src="/src/assets/notion-logo.png" alt="Notion" className="w-18 h-18" />
      </motion.div>

      <motion.div
        className="absolute top-5/12 right-1/8 translate-y-10 cursor-pointer"
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img src="/src/assets/openai-logo.svg" alt="OpenAI" className="w-24 h-24" />
      </motion.div>

      <motion.div
        className="absolute top-5/12 left-40 cursor-pointer"
        whileHover={{ rotate: -360, scale: 1.2 }}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img src="/src/assets/outlook-logo.png" alt="Outlook" className="w-20 h-20" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-rose-400 rounded-full blur-lg opacity-40"></div>
            <span className="relative px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-rose-400 text-white font-semibold text-sm tracking-wide shadow-lg">
              My Research
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-gray-800"
        >
          <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
            Kubernetes Cluster Management
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-4xl font-semibold mb-8 text-gray-700"
        >
          with AI-Powered Automation
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Exploring the intersection of cloud infrastructure, intelligent automation,
          and seamless integration through cutting-edge technologies
        </motion.p>
      </div>
    </section>
  );
}
