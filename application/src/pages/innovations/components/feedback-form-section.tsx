import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";

export default function FeedbackFormSection() {
    const { setIsHovering } = useCursor();
      
    const formFeatures = [
      {
        title: "Participation",
        description: "Whether the person wants to casemake",
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
          </svg>
        ),
        gradient: "from-purple-200 to-pink-200",
      },
      {
        title: "Recognition",
        description: "Most deserving person to casemake",
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
          </svg>
        ),
        gradient: "from-blue-200 to-cyan-200",
      },
      {
        title: "Improvements",
        description: "Improvements and suggestion",
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
        ),
        gradient: "from-amber-200 to-orange-200",
      },
      {
        title: "Challenges",
        description: "Difficulties throughout the TPA",
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
        ),
        gradient: "from-green-200 to-emerald-200",
      },
    ];
  
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/30 to-amber-200/20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/5 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-purple-200/25 to-pink-200/20 blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-200/20 to-blue-200/15 blur-3xl animate-pulse-slow animation-delay-4000"></div>

          <motion.div
            className="absolute top-32 left-1/4 w-3 h-3 rounded-full bg-orange-400/60"
            animate={{
              x: [0, 300, 600, 900],
              y: [0, -100, 50, -50],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-48 right-1/3 w-2 h-2 rounded-full bg-amber-400/70"
            animate={{
              x: [0, -250, -500, -800],
              y: [0, 80, -60, 100],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/5 w-2.5 h-2.5 rounded-full bg-pink-300/60"
            animate={{
              x: [0, 400, 200, 700],
              y: [0, -120, -60, -180],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-teal-400/70"
            animate={{
              x: [0, -350, -100, -600],
              y: [0, 90, 180, 50],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear",
              delay: 3,
            }}
          />

          <svg className="absolute inset-0 w-full h-full opacity-20">
            <motion.line
              x1="10%"
              y1="20%"
              x2="90%"
              y2="20%"
              stroke="url(#gradient1)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            <motion.line
              x1="15%"
              y1="50%"
              x2="85%"
              y2="50%"
              stroke="url(#gradient2)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
            />
            <motion.line
              x1="20%"
              y1="80%"
              x2="80%"
              y2="80%"
              stroke="url(#gradient3)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2 }}
            />
            <motion.circle
              cx="20%"
              cy="30%"
              r="4"
              fill="#fb923c"
              opacity="0.4"
              animate={{
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="80%"
              cy="70%"
              r="3"
              fill="#a855f7"
              opacity="0.4"
              animate={{
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fb923c" stopOpacity="0" />
                <stop offset="50%" stopColor="#fb923c" stopOpacity="1" />
                <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
                <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f472b6" stopOpacity="0" />
                <stop offset="50%" stopColor="#f472b6" stopOpacity="1" />
                <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            className="absolute top-1/4 left-1/6 w-20 h-20 border-2 border-orange-400/30"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/6 w-16 h-16 border-2 border-purple-400/30 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute top-1/3 left-1/3 w-4 h-4 bg-orange-400/50 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              boxShadow: [
                "0 0 10px rgba(251, 146, 60, 0.3)",
                "0 0 30px rgba(251, 146, 60, 0.8)",
                "0 0 10px rgba(251, 146, 60, 0.3)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-amber-400/50 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              boxShadow: [
                "0 0 10px rgba(251, 191, 36, 0.3)",
                "0 0 30px rgba(251, 191, 36, 0.8)",
                "0 0 10px rgba(251, 191, 36, 0.3)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <motion.div
            className="absolute top-20 right-1/5"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 120, 240, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg width="60" height="60" viewBox="0 0 100 100">
              <polygon
                points="50 1 95 25 95 75 50 99 5 75 5 25"
                fill="none"
                stroke="rgba(251, 146, 60, 0.3)"
                strokeWidth="2"
              />
            </svg>
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-1/4"
            animate={{
              y: [0, 40, 0],
              rotate: [0, -120, -240, -360],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg width="50" height="50" viewBox="0 0 100 100">
              <polygon
                points="50 1 95 25 95 75 50 99 5 75 5 25"
                fill="none"
                stroke="rgba(251, 191, 36, 0.4)"
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        </div>
  
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-8"
              >
                <span className="px-4 py-2 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full text-orange-900 font-semibold text-sm">
                  Innovation #1
                </span>
              </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold pb-6">
              {"Feedback Form System".split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-4">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${wordIndex}-${charIndex}`}
                      className="inline-block bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent pb-2"
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
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {formFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div
                  className={`relative p-6 rounded-3xl bg-gradient-to-br ${feature.gradient} backdrop-blur-sm shadow-lg overflow-hidden group h-full`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="text-5xl mb-4"
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
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-700 text-sm">
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
  
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="inline-block p-8 rounded-3xl bg-white/50 backdrop-blur-sm shadow-xl border border-orange-100">
              <motion.p 
                className="text-gray-700 text-lg max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                This system streamlines the feedback collection process, making it easy to gather actionable insights 
                while recognizing outstanding contributions and identifying areas for improvement.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    );
}