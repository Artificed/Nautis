import { useRef } from "react";
import { useCursor } from "../../../common/shared/custom-cursor";
import { motion } from "framer-motion";
// Updated import paths

export default function SkillsSection() {
  const { setIsHovering } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);

  const hardSkills = [
    {
      title: "FullStack Development",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-orange-200 to-amber-200",
    },
    {
      title: "Artificial Intelligence Systems",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-pink-200 to-rose-200",
    },
    {
      title: "DevOps & Networking",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      gradient: "from-amber-200 to-yellow-200",
    },
    {
      title: "Algorithm & Problem Solving",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      gradient: "from-orange-200 to-amber-200",
    },
  ];

  const softSkills = [
    {
      title: "Hard Working",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-red-200 to-rose-200",
    },
    {
      title: "Teamwork",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: "from-rose-200 to-pink-200",
    },
    {
      title: "Adaptability",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      gradient: "from-orange-200 to-rose-200",
    },
    {
      title: "Leadership",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      gradient: "from-yellow-200 to-amber-200",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-32 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/30 to-rose-200/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-amber-200/25 to-orange-200/20 blur-3xl animate-float-slower animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-rose-200/20 to-amber-200/15 blur-3xl animate-pulse-slow"></div>
        
        <div className="absolute top-20 left-20 w-32 h-32 rounded-3xl bg-gradient-to-br from-orange-100/40 to-amber-100/30 opacity-80 blur-xl animate-float rotate-12"></div>
        <div className="absolute top-40 right-40 w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-100/35 to-rose-100/25 opacity-75 blur-lg animate-float-slow animation-delay-1000 -rotate-6"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 rounded-3xl bg-gradient-to-br from-amber-100/40 to-yellow-100/30 opacity-70 blur-xl animate-float-slower animation-delay-2000 rotate-45"></div>
        <div className="absolute bottom-32 left-40 w-36 h-36 rounded-3xl bg-gradient-to-br from-pink-100/35 to-rose-100/25 opacity-65 blur-xl animate-float animation-delay-3000 -rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-100/30 to-amber-100/20 opacity-60 blur-lg animate-float-slow animation-delay-4000 rotate-90"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-xl bg-gradient-to-br from-rose-100/25 to-pink-100/20 opacity-55 blur-lg animate-float-slower rotate-45"></div>
        
        <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-orange-100/20 to-amber-100/15 opacity-30 blur-md animate-float animation-delay-5000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-10 h-10 rounded-full bg-gradient-to-br from-pink-100/25 to-rose-100/15 opacity-35 blur-md animate-float-slow animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-amber-100/20 to-yellow-100/15 opacity-25 blur-sm animate-float-slower animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/5 w-14 h-14 rounded-full bg-gradient-to-br from-pink-100/20 to-rose-100/15 opacity-30 blur-md animate-float animation-delay-3500"></div>
        
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-orange-100/15 to-rose-100/10 blur-3xl animate-rotate-gradient"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-amber-100/10 to-pink-100/10 blur-3xl animate-rotate-gradient animation-delay-3000"></div>

        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 100 300 Q 300 100 500 300 T 900 300"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
            transition={{
              pathLength: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.path
            d="M 200 100 Q 400 300 600 100 T 1000 100"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
            transition={{
              pathLength: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
              opacity: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
          />
          <motion.path
            d="M 50 500 Q 250 700 450 500 T 850 500"
            fill="none"
            stroke="url(#gradient3)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
            transition={{
              pathLength: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 },
              opacity: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f472b6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          className="absolute top-1/4 right-10 w-20 h-20 border-2 border-blue-300/30 rounded-lg"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-16 h-16 border-2 border-purple-300/30"
          style={{ borderRadius: "30%" }}
          animate={{
            rotate: [0, -90, -180, -270, -360],
            scale: [1, 0.8, 1.1, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-br from-orange-200/20 to-rose-200/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-24 h-24 border-4 border-indigo-200/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 py-20">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.2 },
              scale: { duration: 0.5, delay: 0.2 },
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }
            }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-orange-300 via-amber-300 to-rose-300 bg-clip-text text-transparent animate-gradient">
              Skills
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-orange-200 to-rose-200 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            animate={{
              scaleX: [1, 1.2, 1],
            }}
            transition={{ 
              width: { duration: 0.8, delay: 0.4 },
              scaleX: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }
            }}
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 pb-3 border-b-2 border-orange-200">
              <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
                Hard Skills
              </span>
            </h3>
            <div className="space-y-6">
              {hardSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  className="group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <motion.div 
                    className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur rounded-xl shadow-md transition-shadow duration-300 cursor-pointer"
                    whileHover={{ 
                      scale: 1.02, 
                      x: 8,
                      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-br ${skill.gradient} p-2.5 rounded-xl text-white`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        y: [0, -5, 0]
                      }}
                      transition={{ 
                        rotate: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        },
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        },
                        scale: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h4 className="text-base font-bold text-gray-900 flex-1">
                      {skill.title}
                    </h4>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 pb-3 border-b-2 border-pink-200">
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Soft Skills
              </span>
            </h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  className="group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <motion.div 
                    className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur rounded-xl shadow-md transition-shadow duration-300 cursor-pointer"
                    whileHover={{ 
                      scale: 1.02, 
                      x: 8,
                      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-br ${skill.gradient} p-2.5 rounded-xl text-white`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{ 
                        rotate: [0, -5, 5, 0],
                        y: [0, -5, 0]
                      }}
                      transition={{ 
                        rotate: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3 + 0.5
                        },
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3 + 0.5
                        },
                        scale: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h4 className="text-base font-bold text-gray-900 flex-1">
                      {skill.title}
                    </h4>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
