import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import k8sLogo from "../../../assets/k8s-logo.png";
import n8nLogo from "../../../assets/n8n-logo.png";
import mcpLogo from "../../../assets/mcp-logo.png";
import notionLogo from "../../../assets/notion-logo.png";
import openaiLogo from "../../../assets/openai-logo.svg";
import outlookLogo from "../../../assets/outlook-logo.png";

export default function ResearchHeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/30 to-rose-200/30 blur-3xl animate-rotate-gradient"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-200/25 to-blue-200/25 blur-3xl animate-rotate-gradient animation-delay-3000"></div>
        <div className="absolute top-1/3 left-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-amber-200/20 to-yellow-200/20 blur-3xl animate-pulse-slow"></div>
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
          className="absolute top-1/3 right-1/6 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-50 to-teal-50 opacity-60 blur-md animate-float animation-delay-5000 transition-transform duration-300"
          style={parallaxOffset(1.8)}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 opacity-50 blur-lg animate-float-slower animation-delay-4000 transition-transform duration-300"
          style={parallaxOffset(-1.2)}
        ></div>
      </div>

      <motion.div
        className="absolute top-1/5 left-1/3 w-24 h-24"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <motion.circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="#fb923c"
            strokeWidth="2"
            opacity="0.4"
            strokeDasharray="220"
            animate={{
              strokeDashoffset: [0, 440, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
            opacity="0.3"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/6 w-28 h-28"
        animate={{
          rotate: [0, -360],
          x: [0, 15, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M50 10 L75 35 L75 65 L50 90 L25 65 L25 35 Z"
            fill="none"
            stroke="#ec4899"
            strokeWidth="2"
            opacity="0.35"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-2/3 left-1/4 w-20 h-20"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <motion.polygon
            points="50,15 90,85 10,85"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
            opacity="0.35"
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/4 w-16 h-16"
        animate={{
          rotate: [0, 360],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M50 5 L61 35 L95 35 L68 57 L79 91 L50 70 L21 91 L32 57 L5 35 L39 35 Z"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="2"
            opacity="0.3"
            animate={{
              pathLength: [0, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </svg>
      </motion.div>

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-br from-orange-400 to-rose-400 rounded-full opacity-40"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <motion.line
          x1="20%"
          y1="25%"
          x2="35%"
          y2="30%"
          stroke="#fb923c"
          strokeWidth="1"
          animate={{
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.line
          x1="50%"
          y1="40%"
          x2="65%"
          y2="50%"
          stroke="#f97316"
          strokeWidth="1"
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.line
          x1="75%"
          y1="35%"
          x2="85%"
          y2="55%"
          stroke="#ec4899"
          strokeWidth="1"
          animate={{
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </svg>

      <motion.div
        className="absolute top-1/6 left-1/6 cursor-pointer"
        style={{ rotate: 12 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ 
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="bg-white rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-90">
          <img src={k8sLogo} alt="Kubernetes" className="w-20 h-20" style={{ transform: 'rotate(-12deg)' }} />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/5 right-1/6 cursor-pointer"
        style={{ rotate: -6 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ 
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
        }}
      >
        <div className="bg-white rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-90">
          <img src={n8nLogo} alt="n8n" className="w-20 h-20" style={{ transform: 'rotate(6deg)' }} />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/6 left-1/8 cursor-pointer"
        style={{ rotate: 6 }}
        animate={{ y: [0, -18, 0] }}
        transition={{ 
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
      >
        <div className="bg-white rounded-2xl shadow-lg p-3 backdrop-blur-sm bg-opacity-90">
          <img src={mcpLogo} alt="MCP" className="w-24 h-24 rounded-xl" style={{ transform: 'rotate(-6deg)' }} />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/8 right-1/6 cursor-pointer"
        style={{ rotate: -12 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ 
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
        }}
      >
        <div className="bg-white rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-90">
          <img src={notionLogo} alt="Notion" className="w-18 h-18" style={{ transform: 'rotate(12deg)' }} />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-5/12 right-1/8 translate-y-10 cursor-pointer"
        style={{ rotate: 3 }}
        animate={{ y: [0, -22, 0] }}
        transition={{ 
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }
        }}
      >
        <div className="bg-white rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-90">
          <img src={openaiLogo} alt="OpenAI" className="w-24 h-24" style={{ transform: 'rotate(-3deg)' }} />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-5/12 left-40 cursor-pointer"
        style={{ rotate: -3 }}
        animate={{ y: [0, -16, 0] }}
        transition={{ 
          y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }
        }}
      >
        <div className="bg-white rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-90">
          <img src={outlookLogo} alt="Outlook" className="w-20 h-20" style={{ transform: 'rotate(3deg)' }} />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-orange-400 to-rose-400 rounded-full blur-lg"
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <span className="relative px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-rose-400 text-white font-semibold text-sm tracking-wide shadow-lg">
              My Research
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 relative"
        >
          <span className="bg-gradient-to-r pb-2 from-orange-600 via-rose-600 to-purple-600 bg-clip-text text-transparent relative inline-block">
            Kubernetes Cluster Management
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              animate={{
                opacity: [0, 0.3, 0],
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut"
              }}
              style={{
                maskImage: 'linear-gradient(to right, transparent, black, transparent)',
              }}
            />
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
