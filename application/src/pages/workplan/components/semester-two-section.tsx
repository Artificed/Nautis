import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";

export default function SemesterTwoSection() {
  const { setIsHovering } = useCursor();

  const innovations = [
    "Outlook Scheduler",
    "Presentation Schedule Checker"
  ];

  const tpaSchedule = [
    { name: "TPA Network 26-1", period: "September - October" },
    { name: "TPA Mobile 26-1", period: "November - December" },
    { name: "TPA Game 26-2", period: "September - October" },
    { name: "TPA Web 26-2", period: "November - December" },
    { name: "TPA Desktop 26-2", period: "January - February" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background blurs - positioned differently from Semester 1 */}
        <div className="absolute top-1/2 right-1/6 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-orange-200/22 to-amber-200/18 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[35rem] h-[35rem] rounded-full bg-gradient-to-br from-yellow-200/20 to-orange-200/16 blur-3xl animate-pulse-slow animation-delay-3000"></div>
        <div className="absolute top-1/6 left-1/2 w-[26rem] h-[26rem] rounded-full bg-gradient-to-br from-amber-200/18 to-yellow-200/14 blur-3xl animate-pulse-slow animation-delay-5000"></div>

        {/* Zigzag moving particles */}
        <motion.div
          className="absolute top-16 left-1/3 w-3 h-3 rounded-full bg-orange-400/65"
          animate={{
            x: [0, 100, -50, 150, -100, 200],
            y: [0, -80, 40, -120, 80, -160],
            opacity: [0, 0.7, 1, 0.8, 0.6, 0],
            scale: [0.5, 1.3, 0.9, 1.5, 1.1, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-4 h-4 rounded-full bg-amber-400/70"
          animate={{
            x: [0, -120, 80, -160, 100, -200],
            y: [0, 90, -60, 130, -90, 170],
            opacity: [0, 0.8, 0.9, 1, 0.7, 0],
            scale: [0.7, 1.4, 1, 1.6, 1.2, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.9,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-3.5 h-3.5 rounded-full bg-yellow-400/75"
          animate={{
            x: [0, 140, -90, 180, -130, 220],
            y: [0, -100, 70, -140, 100, -180],
            opacity: [0, 0.9, 1, 0.85, 0.65, 0],
            scale: [0.6, 1.5, 1.1, 1.7, 1.3, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
          }}
        />

        {/* Infinity loop SVG paths */}
        <svg className="absolute inset-0 w-full h-full opacity-28">
          <motion.path
            d="M 100,300 C 200,100 400,500 600,300 C 800,100 1000,500 1100,300"
            stroke="url(#loopGrad1)"
            strokeWidth="2.8"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.75, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 900,200 C 700,400 500,50 300,250 C 100,450 -100,100 -200,300"
            stroke="url(#loopGrad2)"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.path
            d="M 400,600 C 550,400 650,700 800,550 C 950,400 1050,700 1200,600"
            stroke="url(#loopGrad3)"
            strokeWidth="2.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.7, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />

          {/* Morphing ellipses */}
          <motion.ellipse
            cx="35%"
            cy="40%"
            rx="8"
            ry="4"
            fill="#f97316"
            opacity="0.4"
            animate={{
              rx: [6, 12, 6],
              ry: [3, 8, 3],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.ellipse
            cx="68%"
            cy="55%"
            rx="7"
            ry="5"
            fill="#f59e0b"
            opacity="0.45"
            animate={{
              rx: [5, 11, 5],
              ry: [4, 9, 4],
              opacity: [0.35, 0.85, 0.35],
              rotate: [360, 270, 180, 90, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
          />
          <motion.ellipse
            cx="42%"
            cy="72%"
            rx="6.5"
            ry="4.5"
            fill="#eab308"
            opacity="0.5"
            animate={{
              rx: [5, 10, 5],
              ry: [3, 7, 3],
              opacity: [0.4, 0.9, 0.4],
              rotate: [0, 120, 240, 360]
            }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
          />
          
          <defs>
            <linearGradient id="loopGrad1" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="loopGrad2" x1="100%" y1="50%" x2="0%" y2="50%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="loopGrad3" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#eab308" stopOpacity="0" />
              <stop offset="50%" stopColor="#eab308" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Bouncing pentagons */}
        <motion.div
          className="absolute top-1/5 right-1/3 w-32 h-32"
          animate={{
            y: [0, -80, 0],
            rotate: [0, 72, 144, 216, 288, 360],
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 100 100">
            <polygon
              points="50 5, 95 35, 79 85, 21 85, 5 35"
              fill="none"
              stroke="rgba(249, 115, 22, 0.38)"
              strokeWidth="2.2"
            />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/5 w-28 h-28"
          animate={{
            y: [0, 70, 0],
            rotate: [360, 288, 216, 144, 72, 0],
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 100 100">
            <polygon
              points="50 5, 95 35, 79 85, 21 85, 5 35"
              fill="none"
              stroke="rgba(245, 158, 11, 0.42)"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {/* Pulsating rings */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-7 h-7 bg-orange-500/55 rounded-full"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.6, 0, 0.6],
            boxShadow: [
              "0 0 20px rgba(249, 115, 22, 0.5)",
              "0 0 60px rgba(249, 115, 22, 0)",
              "0 0 20px rgba(249, 115, 22, 0.5)",
            ],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-amber-500/60 rounded-full"
          animate={{
            scale: [1, 2.8, 1],
            opacity: [0.65, 0, 0.65],
            boxShadow: [
              "0 0 18px rgba(245, 158, 11, 0.55)",
              "0 0 55px rgba(245, 158, 11, 0)",
              "0 0 18px rgba(245, 158, 11, 0.55)",
            ],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute top-2/3 right-2/5 w-6.5 h-6.5 bg-yellow-500/58 rounded-full"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.6, 0, 0.6],
            boxShadow: [
              "0 0 22px rgba(234, 179, 8, 0.52)",
              "0 0 58px rgba(234, 179, 8, 0)",
              "0 0 22px rgba(234, 179, 8, 0.52)",
            ],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 2.8,
          }}
        />

        {/* Spinning crescents */}
        <motion.div
          className="absolute top-3/5 left-1/6"
          animate={{
            x: [0, 50, 0],
            rotate: [0, 360],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="60" height="60" viewBox="0 0 100 100">
            <path
              d="M 50,10 A 40,40 0 1,0 50,90 A 30,30 0 1,1 50,10"
              fill="none"
              stroke="rgba(249, 115, 22, 0.4)"
              strokeWidth="2.5"
            />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-1/5 right-1/6"
          animate={{
            x: [0, -45, 0],
            rotate: [360, 0],
            opacity: [0.45, 0.75, 0.45],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="55" height="55" viewBox="0 0 100 100">
            <path
              d="M 50,10 A 40,40 0 1,0 50,90 A 30,30 0 1,1 50,10"
              fill="none"
              stroke="rgba(245, 158, 11, 0.45)"
              strokeWidth="2.2"
            />
          </svg>
        </motion.div>

        {/* Octagon spiraling */}
        <motion.div
          className="absolute top-1/3 right-1/5"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1],
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="68" height="68" viewBox="0 0 100 100">
            <polygon
              points="30 10, 70 10, 90 30, 90 70, 70 90, 30 90, 10 70, 10 30"
              fill="none"
              stroke="rgba(234, 179, 8, 0.38)"
              strokeWidth="1.8"
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
            {"Odd 2026/2027".split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    className="inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent pb-2"
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
          {/* Left Card - TPA Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="relative p-8 rounded-3xl bg-gradient-to-br from-violet-200/80 to-purple-200/80 backdrop-blur-sm shadow-xl overflow-hidden group h-full"
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

          {/* Right Card - Innovations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-200/80 to-blue-200/80 backdrop-blur-sm shadow-xl overflow-hidden group h-full"
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
