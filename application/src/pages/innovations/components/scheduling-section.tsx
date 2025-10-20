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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-32 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/30 to-amber-200/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-purple-200/25 to-pink-200/20 blur-3xl animate-float-slower animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-cyan-200/20 to-blue-200/15 blur-3xl animate-pulse-slow"></div>
        
        <div className="absolute top-20 left-20 w-32 h-32 rounded-3xl bg-gradient-to-br from-orange-100/40 to-amber-100/30 opacity-80 blur-xl animate-float rotate-12"></div>
        <div className="absolute top-40 right-40 w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-100/35 to-rose-100/25 opacity-75 blur-lg animate-float-slow animation-delay-1000 -rotate-6"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 rounded-3xl bg-gradient-to-br from-cyan-100/40 to-blue-100/30 opacity-70 blur-xl animate-float-slower animation-delay-2000 rotate-45"></div>
        <div className="absolute bottom-32 left-40 w-36 h-36 rounded-3xl bg-gradient-to-br from-purple-100/35 to-indigo-100/25 opacity-65 blur-xl animate-float animation-delay-3000 -rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-100/30 to-orange-100/20 opacity-60 blur-lg animate-float-slow animation-delay-4000 rotate-90"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-xl bg-gradient-to-br from-teal-100/25 to-cyan-100/20 opacity-55 blur-lg animate-float-slower rotate-45"></div>
        
        <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-100/20 to-amber-100/15 opacity-30 blur-md animate-float animation-delay-5000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-10 h-10 rounded-full bg-gradient-to-br from-pink-100/25 to-rose-100/15 opacity-35 blur-md animate-float-slow animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100/20 to-blue-100/15 opacity-25 blur-sm animate-float-slower animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/5 w-14 h-14 rounded-full bg-gradient-to-br from-purple-100/20 to-indigo-100/15 opacity-30 blur-md animate-float animation-delay-3500"></div>
        
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-orange-100/15 to-pink-100/10 blur-3xl animate-rotate-gradient"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-100/10 to-purple-100/10 blur-3xl animate-rotate-gradient animation-delay-3000"></div>

        <motion.div
          className="absolute top-24 left-1/5 w-24 h-24 bg-gradient-to-br from-amber-300/20 to-orange-300/20"
          style={{ 
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            filter: "blur(8px)"
          }}
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "50% 50% 30% 70% / 30% 70% 70% 30%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-1/5 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-purple-300/20"
          style={{ 
            borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%",
            filter: "blur(10px)"
          }}
          animate={{
            borderRadius: [
              "50% 50% 50% 50% / 50% 50% 50% 50%",
              "70% 30% 50% 50% / 30% 70% 50% 50%",
              "50% 70% 30% 50% / 50% 30% 70% 50%",
              "50% 50% 50% 50% / 50% 50% 50% 50%",
            ],
            x: [0, -50, 30, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.1, 1.3, 1],
            rotate: [0, -90, -180, -360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
        {/* Header */}
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

        {/* Features Grid */}
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

                {/* Ripple effect */}
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

