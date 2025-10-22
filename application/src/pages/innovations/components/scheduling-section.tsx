import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";

export default function SchedulingSection() {
  const { setIsHovering } = useCursor();

  const schedulingFeatures = [
    {
      title: "Presentation Schedule Checker",
      description: "Real-time presentation schedule validation and conflict detection system",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M8 14h.01M12 14h.01M16 14h.01" />
          <circle cx="12" cy="18" r="2" />
        </svg>
      ),
      gradient: "from-green-200 to-emerald-200",
    },
    {
      title: "Scheduling Priority",
      description: "Intelligent priority management system for optimal presentation scheduling",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
          <path d="M12 12v5" strokeDasharray="2 2" />
        </svg>
      ),
      gradient: "from-violet-200 to-purple-200",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/30 to-amber-200/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/5 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-purple-200/25 to-pink-200/20 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-200/20 to-blue-200/15 blur-3xl animate-pulse-slow animation-delay-4000"></div>

        <motion.div
          className="absolute top-1/4 left-1/6 w-1 h-24 bg-gradient-to-b from-transparent via-orange-400/60 to-transparent origin-bottom"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-1 h-32 bg-gradient-to-b from-transparent via-amber-400/60 to-transparent origin-bottom"
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-400/30 rounded-full"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-200px)`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          />
        ))}

        <motion.div
          className="absolute top-1/5 right-1/4 w-3 h-3 rounded-full bg-orange-400/50"
          animate={{
            x: [0, 100, 50, -50, 0],
            y: [0, -80, -40, -100, 0],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-amber-400/60"
          animate={{
            x: [0, -120, -60, 80, 0],
            y: [0, 90, 45, 110, 0],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/5 w-2.5 h-2.5 rounded-full bg-pink-400/50"
          animate={{
            x: [0, 150, -100, 50, 0],
            y: [0, -70, 60, -30, 0],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />

        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="none" stroke="rgba(251, 146, 60, 0.2)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <motion.div
          className="absolute top-1/3 right-1/5 w-8 h-8 border-2 border-orange-400/40 rounded-full"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-6 h-6 border-2 border-amber-400/40"
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-orange-400/10"
          animate={{
            scale: [1, 1.3, 1.6, 2],
            opacity: [0.3, 0.2, 0.1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-amber-400/10"
          animate={{
            scale: [1, 1.3, 1.6, 2],
            opacity: [0.3, 0.2, 0.1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeOut",
            delay: 3,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full text-orange-900 font-semibold text-sm">
                Innovation #3
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold">
              {"Scheduling System".split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-4">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${wordIndex}-${charIndex}`}
                      className="inline-block bg-gradient-to-r pb-2 from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (wordIndex * 0.3) + (charIndex * 0.05),
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.2,
                      transition: { duration: 0.3 }
                    }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {schedulingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${feature.gradient} backdrop-blur-sm shadow-lg overflow-hidden group h-full`}
                whileHover={{ 
                  scale: 1.03, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <motion.div 
                    className="text-gray-700 mb-6"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-700 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{
                    scale: 1.5,
                    opacity: [0, 0.3, 0],
                    transition: { duration: 0.6 }
                  }}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)`
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

