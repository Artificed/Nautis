import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";

export default function SemesterOneSection() {
  const { setIsHovering } = useCursor();

  const innovations = [
    "Feedback Form System",
    "Scheduling System",
    "Vibe Coding Prevention",
    "Docs Checker Automation",
    "Balanced Group Distribution"
  ];

  const tpaSchedule = [
    { name: "TPA Desktop 25-2", period: "March - April" },
    { name: "TPA Mobile 25-2", period: "May - June" },
    { name: "TPA Game 26-1", period: "March - April" },
    { name: "TPA Web 26-1", period: "May - June" },
    { name: "TPA Desktop 26-1", period: "July - August" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-1/3 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-indigo-200/25 to-purple-200/15 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-1/4 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-rose-200/20 to-orange-200/15 blur-3xl animate-pulse-slow animation-delay-3000"></div>
        <div className="absolute top-1/3 right-1/5 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-200/20 to-teal-200/10 blur-3xl animate-pulse-slow animation-delay-5000"></div>

        <motion.div
          className="absolute top-20 left-20 w-4 h-4 rounded-full bg-indigo-400/70"
          animate={{
            x: [0, 200, 400, 600, 800],
            y: [0, 150, 300, 450, 600],
            opacity: [0, 0.8, 1, 0.8, 0],
            scale: [1, 1.5, 1, 0.5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-10 w-3 h-3 rounded-full bg-rose-400/80"
          animate={{
            x: [0, -150, -300, -450, -600],
            y: [0, 100, 200, 300, 400],
            opacity: [0, 1, 0.9, 0.5, 0],
            scale: [0.5, 1.2, 1.5, 1, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-3.5 h-3.5 rounded-full bg-emerald-400/70"
          animate={{
            x: [0, 300, 600, 300, 0],
            y: [0, -200, -100, -250, -400],
            opacity: [0, 1, 1, 0.7, 0],
            scale: [0.8, 1.3, 1, 1.2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-amber-400/80"
          animate={{
            x: [0, -200, -400, -200, 0],
            y: [0, -150, 0, 150, 0],
            opacity: [0, 0.9, 1, 0.9, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        <svg className="absolute inset-0 w-full h-full opacity-25">
          <motion.path
            d="M 50,50 Q 150,50 200,150 T 350,250 T 500,350"
            stroke="url(#spiralGrad1)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 500,100 Q 400,200 300,250 T 150,350 T 50,450"
            stroke="url(#spiralGrad2)"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.7, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.path
            d="M 100,500 Q 250,400 400,350 T 600,250 T 800,150"
            stroke="url(#spiralGrad3)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          <motion.circle
            cx="30%"
            cy="25%"
            r="5"
            fill="#818cf8"
            opacity="0.5"
            animate={{
              r: [3, 8, 3],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="70%"
            cy="60%"
            r="4"
            fill="#fb7185"
            opacity="0.5"
            animate={{
              r: [2, 7, 2],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          />
          <motion.circle
            cx="45%"
            cy="80%"
            r="4.5"
            fill="#34d399"
            opacity="0.5"
            animate={{
              r: [3, 9, 3],
              opacity: [0.4, 0.95, 0.4],
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          />
          
          <defs>
            <linearGradient id="spiralGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="spiralGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fb7185" stopOpacity="0" />
              <stop offset="50%" stopColor="#fb7185" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fb7185" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="spiralGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          className="absolute top-1/5 right-1/4 w-24 h-24 border-2 border-indigo-400/40 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/5 left-1/5 w-20 h-20 border-2 border-rose-400/35 rotate-45"
          animate={{
            rotate: [45, -315],
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-1/4 left-1/5 w-5 h-5 bg-indigo-500/60 rounded-full"
          animate={{
            scale: [1, 2, 1],
            boxShadow: [
              "0 0 15px rgba(129, 140, 248, 0.4)",
              "0 0 40px rgba(129, 140, 248, 0.9)",
              "0 0 15px rgba(129, 140, 248, 0.4)",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-rose-500/60 rounded-full"
          animate={{
            scale: [1, 2.2, 1],
            boxShadow: [
              "0 0 12px rgba(251, 113, 133, 0.3)",
              "0 0 35px rgba(251, 113, 133, 0.85)",
              "0 0 12px rgba(251, 113, 133, 0.3)",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-4.5 h-4.5 bg-emerald-500/60 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            boxShadow: [
              "0 0 14px rgba(52, 211, 153, 0.35)",
              "0 0 38px rgba(52, 211, 153, 0.9)",
              "0 0 14px rgba(52, 211, 153, 0.35)",
            ],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.6,
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/6"
          animate={{
            y: [0, -40, -10, -50, 0],
            rotate: [0, 180, 270, 360],
            opacity: [0.3, 0.7, 0.5, 0.8, 0.3],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="50" height="50" viewBox="0 0 100 100">
            <polygon
              points="50 15, 90 85, 10 85"
              fill="none"
              stroke="rgba(129, 140, 248, 0.4)"
              strokeWidth="2.5"
            />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/6"
          animate={{
            y: [0, 50, 20, 60, 0],
            rotate: [0, -90, -180, -270, -360],
            opacity: [0.4, 0.8, 0.6, 0.7, 0.4],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="45" height="45" viewBox="0 0 100 100">
            <polygon
              points="50 15, 90 85, 10 85"
              fill="none"
              stroke="rgba(251, 113, 133, 0.45)"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/4"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="70" height="70" viewBox="0 0 100 100">
            <path
              d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z"
              fill="none"
              stroke="rgba(245, 158, 11, 0.35)"
              strokeWidth="1.5"
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
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold pb-6">
            {"Even 2025/2026".split(" ").map((word, wordIndex) => (
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

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-200/80 to-cyan-200/80 backdrop-blur-sm shadow-xl overflow-hidden group h-full"
              whileHover={{
                scale: 1.02,
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

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">TPA Schedule</h2>
                <div className="space-y-4">
                  {tpaSchedule.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-10 justify-between items-center p-4 rounded-xl bg-white/60 backdrop-blur-sm"
                    >
                      <span className="font-semibold text-gray-800">{item.name}</span>
                      <span className="text-sm text-gray-600">{item.period}</span>
                    </motion.div>
                  ))}
                </div>
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-200/80 to-pink-200/80 backdrop-blur-sm shadow-xl overflow-hidden group h-full"
              whileHover={{
                scale: 1.02,
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

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Innovations</h2>
                <div className="space-y-4">
                  {innovations.map((innovation, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center p-4 rounded-xl bg-white/60 backdrop-blur-sm"
                    >
                      <span className="font-semibold text-gray-800">{innovation}</span>
                    </motion.div>
                  ))}
                </div>
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
        </div>
      </div>
    </section>
  );
}
