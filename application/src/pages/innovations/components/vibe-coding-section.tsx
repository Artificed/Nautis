import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";
import { useMemo, useState } from "react";
import vibeCodingImage from "../../../assets/vibe-coding.jpeg";

export default function VibeCodingSection() {
  const { setIsHovering } = useCursor();
  const [isSpinning, setIsSpinning] = useState(false);

  // Memoize random values to prevent re-calculation on re-render
  const animationConfig = useMemo(() => ({
    codeLines: Array.from({ length: 8 }, () => ({
      duration: 8 + Math.random() * 4,
    })),
    binaryRain: Array.from({ length: 6 }, () => ({
      duration: 12 + Math.random() * 6,
      bits: Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0'),
    })),
    errorDots: Array.from({ length: 15 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 4,
    })),
  }), []);

  const features = [
    {
      title: "Code Quality Analysis",
      description: "Automated detection of rushed, unstructured, or poorly documented code",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12h6" />
          <path d="M9 16h6" />
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M12 18v-6" />
        </svg>
      ),
      gradient: "from-red-200 to-rose-200",
    },
    {
      title: "Pattern Recognition",
      description: "Identifies rushed coding patterns, inconsistent naming, and lack of best practices",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
          <polyline points="7.5 19.79 7.5 14.6 3 12" />
          <polyline points="21 12 16.5 14.6 16.5 19.79" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      gradient: "from-orange-200 to-amber-200",
    },
    {
      title: "Feedback Generation",
      description: "Provides constructive feedback and suggestions for code improvement",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h.01" />
          <path d="M12 10h.01" />
          <path d="M16 10h.01" />
        </svg>
      ),
      gradient: "from-blue-200 to-cyan-200",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
      {/* Code Matrix / Binary Background Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-red-200/30 to-orange-200/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/5 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-rose-200/25 to-pink-200/20 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-amber-200/20 to-yellow-200/15 blur-3xl animate-pulse-slow animation-delay-4000"></div>

        {/* Falling code lines */}
        {animationConfig.codeLines.map((config, i) => (
          <motion.div
            key={`code-line-${i}`}
            className="absolute text-xs font-mono text-orange-400/30"
            style={{
              left: `${10 + i * 12}%`,
              top: '-20px',
            }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: config.duration,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.2,
            }}
          >
            {`{code}`}
            <br />
            {`function()`}
            <br />
            {`const x = 0`}
            <br />
            {`if (true) {`}
          </motion.div>
        ))}

        {/* Warning symbols */}
        <motion.div
          className="absolute top-1/4 right-1/5"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </motion.div>

        {/* Binary rain effect */}
        {animationConfig.binaryRain.map((config, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-2xl font-mono text-red-400/20 font-bold"
            style={{
              left: `${15 + i * 15}%`,
              top: '-30px',
            }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [0, 0.3, 0.3, 0],
            }}
            transition={{
              duration: config.duration,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          >
            {config.bits.map((bit, idx) => (
              <div key={idx}>{bit}</div>
            ))}
          </motion.div>
        ))}

        {/* Floating brackets */}
        <motion.div
          className="absolute bottom-1/3 left-1/4 text-6xl font-mono text-orange-400/20"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {'{ }'}
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/3 text-5xl font-mono text-red-400/20"
          animate={{
            y: [0, 40, 0],
            rotate: [0, -20, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {'< />'}
        </motion.div>

        {/* Pulsing error dots */}
        {animationConfig.errorDots.map((config, i) => (
          <motion.div
            key={`error-dot-${i}`}
            className="absolute w-2 h-2 bg-red-400/40 rounded-full"
            style={{
              top: `${config.top}%`,
              left: `${config.left}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: config.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: config.delay,
            }}
          />
        ))}
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
              <span className="px-4 py-2 bg-gradient-to-r from-red-200 to-orange-200 rounded-full text-red-900 font-semibold text-sm">
                Innovation #4
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold pb-8 text-center leading-tight">
              {"Vibe Coding Prevention".split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-3 pb-2">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${wordIndex}-${charIndex}`}
                      className="inline-block bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 bg-clip-text text-transparent"
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
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-300/30 to-orange-300/20 opacity-0 group-hover:opacity-100 blur-lg"
                transition={{ duration: 0.4 }}
              />

              <motion.img
                src={vibeCodingImage}
                alt="Vibe Coding Prevention"
                className="relative z-10 w-full h-64 object-cover rounded-2xl"
                style={{ backfaceVisibility: "hidden" }}
              />
            </motion.div>
          </motion.div>

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

