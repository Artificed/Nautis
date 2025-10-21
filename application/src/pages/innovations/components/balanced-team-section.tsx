import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";
import { useMemo, useState } from "react";

export default function BalancedTeamSection() {
  const { setIsHovering } = useCursor();
  const [isSpinning, setIsSpinning] = useState(false);

  // Memoize random values to prevent re-calculation on re-render
  const animationConfig = useMemo(() => ({
    nodes: Array.from({ length: 12 }, () => ({
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 3.6,
    })),
    userIcons: Array.from({ length: 6 }, (_, i) => ({
      duration: 6 + i,
      delay: i * 0.8,
    })),
  }), []);

  const features = [
    {
      title: "Performance Analysis",
      description: "Evaluates individual performance metrics and contribution history",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      gradient: "from-indigo-200 to-blue-200",
    },
    {
      title: "Smart Distribution",
      description: "Intelligently distributes high, medium, and low performers across all teams",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      gradient: "from-teal-200 to-emerald-200",
    },
    {
      title: "Fair Grouping",
      description: "Ensures balanced skill distribution for equitable learning opportunities",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0-5-3-9-9-9S3 5 3 10v4c0 5 3 9 9 9s9-4 9-9v-4z" />
          <path d="M12 2v20" />
          <path d="M2 12h20" />
        </svg>
      ),
      gradient: "from-purple-200 to-pink-200",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
      {/* Network / Connection Background Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-200/30 to-blue-200/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/5 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-teal-200/25 to-emerald-200/20 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-purple-200/20 to-pink-200/15 blur-3xl animate-pulse-slow animation-delay-4000"></div>

        {/* Network nodes */}
        {(() => {
          const positions = [
            { x: '15%', y: '20%' },
            { x: '85%', y: '25%' },
            { x: '25%', y: '40%' },
            { x: '75%', y: '45%' },
            { x: '50%', y: '30%' },
            { x: '40%', y: '60%' },
            { x: '60%', y: '65%' },
            { x: '30%', y: '75%' },
            { x: '70%', y: '80%' },
            { x: '50%', y: '85%' },
            { x: '20%', y: '55%' },
            { x: '80%', y: '60%' },
          ];
          
          return animationConfig.nodes.map((config, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute w-4 h-4 bg-indigo-400/50 rounded-full"
              style={{
                left: positions[i].x,
                top: positions[i].y,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: config.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: config.delay,
              }}
            />
          ));
        })()}

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.line
            x1="15%"
            y1="20%"
            x2="85%"
            y2="25%"
            stroke="url(#gradientLine1)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="25%"
            y1="40%"
            x2="75%"
            y2="45%"
            stroke="url(#gradientLine2)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          <motion.line
            x1="50%"
            y1="30%"
            x2="40%"
            y2="60%"
            stroke="url(#gradientLine3)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: 2 }}
          />
          <motion.line
            x1="60%"
            y1="65%"
            x2="30%"
            y2="75%"
            stroke="url(#gradientLine4)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "linear", delay: 3 }}
          />
          <motion.line
            x1="70%"
            y1="80%"
            x2="50%"
            y2="85%"
            stroke="url(#gradientLine5)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 4 }}
          />

          <defs>
            <linearGradient id="gradientLine1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradientLine2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0" />
              <stop offset="50%" stopColor="#2dd4bf" stopOpacity="1" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradientLine3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="1" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradientLine4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="1" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradientLine5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f472b6" stopOpacity="0" />
              <stop offset="50%" stopColor="#f472b6" stopOpacity="1" />
              <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating user icons */}
        {animationConfig.userIcons.map((config, i) => (
          <motion.div
            key={`user-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: config.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: config.delay,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </motion.div>
        ))}

        {/* Balance scales */}
        <motion.div
          className="absolute top-1/4 left-1/6"
          animate={{
            rotate: [0, -15, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2">
            <path d="M12 3v18" />
            <path d="M5 21h14" />
            <path d="M7 6l-4 5 4 5h2l4-5-4-5z" />
            <path d="M17 6l4 5-4 5h-2l-4-5 4-5z" />
          </svg>
        </motion.div>

        {/* Geometric shapes representing groups */}
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-20 h-20 border-2 border-teal-400/30 rounded-lg"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title & Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-8"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-200 to-teal-200 rounded-full text-indigo-900 font-semibold text-sm">
                Innovation #5
              </span>
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center leading-tight">
              {"Balanced Team Distribution".split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-3 pb-2">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${wordIndex}-${charIndex}`}
                      className="inline-block bg-gradient-to-r from-indigo-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent"
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

            {/* Image Card */}
            <motion.div
              className="relative group p-6 rounded-3xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md shadow-xl border border-white/30 overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -15, 0],
                rotateY: isSpinning ? 360 : 0,
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                rotateY: { duration: 1.2, ease: "easeInOut" }
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              onMouseEnter={() => {
                setIsHovering(true);
                setIsSpinning(true);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                // Let the animation complete before resetting
                setTimeout(() => setIsSpinning(false), 1200);
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-300/30 to-teal-300/20 opacity-0 group-hover:opacity-100 blur-lg"
                transition={{ duration: 0.4 }}
              />

              {/* Project image */}
              <motion.img
                src="/src/assets/project.jpg"
                alt="Balanced Team Distribution"
                className="relative z-10 w-full h-64 object-cover rounded-2xl"
                style={{ backfaceVisibility: "hidden" }}
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
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
                  className={`relative p-8 rounded-3xl bg-gradient-to-br ${feature.gradient} backdrop-blur-sm shadow-lg overflow-hidden group`}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10 flex items-start gap-6">
                    <motion.div 
                      className="flex-shrink-0 text-gray-700"
                      animate={{
                        y: [0, -8, 0],
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
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-700 text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

