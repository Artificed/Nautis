import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";

export default function SemesterOneDetailsSection() {
  const { setIsHovering } = useCursor();

  const responsibilities = [
    {
      month: "February 2026",
      activities: [
        "Analyze feedback from previous semester",
        "Adjusting to new tasks",
        "Finishing TPA Network 25-2",
      ]
    },
    {
      month: "March - April 2026",
      activities: [
        "Conduct TPA Desktop 25-2 and TPA Game 26-1",
        "Implementing the new feedback form system",
        "Testing new scheduling system for presentation",
      ]
    },
    {
      month: "May - June 2026",
      activities: [
        "Oversee TPA Mobile 25-2 and TPA Web 26-1",
        "Implement Vibe Coding Prevention measures",
        "Testing out automated Docs checker",
      ]
    },
    {
      month: "July - August 2026",
      activities: [
        "Execute TPA Desktop 26-1",
        "Conduct semester-end retrospective",
        "Plan innovations for next semester"
      ]
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-cyan-200/25 to-blue-200/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-teal-200/22 to-emerald-200/18 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-[26rem] h-[26rem] rounded-full bg-gradient-to-br from-sky-200/20 to-cyan-200/15 blur-3xl animate-pulse-slow animation-delay-4000"></div>

        <motion.div
          className="absolute top-10 left-10 w-5 h-5 rounded-full bg-cyan-500/60"
          animate={{
            x: [0, 400, 800, 1200],
            y: [0, 200, 400, 600],
            opacity: [0, 0.9, 0.7, 0],
            scale: [0.8, 1.4, 1.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-4 h-4 rounded-full bg-teal-500/65"
          animate={{
            x: [0, -300, -600, -900],
            y: [0, -150, -300, -450],
            opacity: [0, 1, 0.8, 0],
            scale: [1, 1.6, 1.2, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />

        {/* Wave-like SVG paths */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <motion.path
            d="M 0,200 Q 200,100 400,200 T 800,200 T 1200,200"
            stroke="url(#waveGrad1)"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 0,400 Q 250,300 500,400 T 1000,400 T 1500,400"
            stroke="url(#waveGrad2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.7, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.path
            d="M 0,600 Q 300,500 600,600 T 1200,600"
            stroke="url(#waveGrad3)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />

          {/* Expanding circles */}
          <motion.circle
            cx="25%"
            cy="30%"
            r="6"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2"
            opacity="0.4"
            animate={{
              r: [4, 15, 4],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.circle
            cx="75%"
            cy="70%"
            r="5"
            fill="none"
            stroke="#14b8a6"
            strokeWidth="1.5"
            opacity="0.5"
            animate={{
              r: [3, 12, 3],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeOut", delay: 1 }}
          />

          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0" />
              <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating hexagons */}
        <motion.div
          className="absolute top-1/4 right-1/5"
          animate={{
            y: [0, -60, 20, -40, 0],
            rotate: [0, 60, 120, 180, 240, 300, 360],
            opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="55" height="55" viewBox="0 0 100 100">
            <polygon
              points="50 5, 90 27, 90 73, 50 95, 10 73, 10 27"
              fill="none"
              stroke="rgba(6, 182, 212, 0.4)"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {/* Orbiting small dots */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-6 h-6 bg-cyan-400/50 rounded-full"
          animate={{
            x: [0, 100, 0, -100, 0],
            y: [0, -100, 0, 100, 0],
            scale: [1, 1.5, 1, 1.5, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-teal-400/55 rounded-full"
          animate={{
            x: [0, -80, 0, 80, 0],
            y: [0, 80, 0, -80, 0],
            scale: [1, 1.6, 1, 1.6, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />

        {/* Additional dancing particles */}
        <motion.div
          className="absolute top-1/6 left-2/3 w-3 h-3 rounded-full bg-sky-400/60"
          animate={{
            x: [0, 50, -30, 70, -50, 0],
            y: [0, -40, 30, -60, 40, 0],
            opacity: [0.4, 0.8, 0.6, 1, 0.5, 0.4],
            scale: [1, 1.3, 0.9, 1.5, 1.1, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/6 left-1/5 w-4 h-4 rounded-full bg-blue-400/55"
          animate={{
            x: [0, -60, 40, -80, 50, 0],
            y: [0, 50, -40, 70, -50, 0],
            opacity: [0.5, 0.9, 0.7, 0.85, 0.6, 0.5],
            scale: [1, 1.4, 1, 1.6, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Spinning triangles */}
        <motion.div
          className="absolute top-2/5 right-1/4"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="48" height="48" viewBox="0 0 100 100">
            <polygon
              points="50 10, 90 90, 10 90"
              fill="none"
              stroke="rgba(6, 182, 212, 0.45)"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-2/5 left-1/3"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="42" height="42" viewBox="0 0 100 100">
            <polygon
              points="50 10, 90 90, 10 90"
              fill="none"
              stroke="rgba(20, 184, 166, 0.5)"
              strokeWidth="2.5"
            />
          </svg>
        </motion.div>

        {/* Pulsing diamond shapes */}
        <motion.div
          className="absolute top-1/2 right-1/6 w-8 h-8 bg-cyan-500/40 rotate-45"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.8, 0.4],
            rotate: [45, 225, 45],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/5 right-2/5 w-7 h-7 bg-teal-500/45 rotate-45"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.45, 0.85, 0.45],
            rotate: [45, 405, 45],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        />

        {/* Glowing rings with expanding effect */}
        <motion.div
          className="absolute top-3/5 left-1/6 w-9 h-9 bg-blue-500/45 rounded-full"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.5, 0, 0.5],
            boxShadow: [
              "0 0 20px rgba(6, 182, 212, 0.5)",
              "0 0 65px rgba(6, 182, 212, 0)",
              "0 0 20px rgba(6, 182, 212, 0.5)",
            ],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute top-1/5 right-2/5 w-8 h-8 bg-cyan-500/50 rounded-full"
          animate={{
            scale: [1, 2.8, 1],
            opacity: [0.55, 0, 0.55],
            boxShadow: [
              "0 0 18px rgba(20, 184, 166, 0.55)",
              "0 0 60px rgba(20, 184, 166, 0)",
              "0 0 18px rgba(20, 184, 166, 0.55)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeOut",
            delay: 2.5,
          }}
        />

        {/* Crossed lines animation */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-20 h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Even Semester - Breakdown
          </h2>
          <p className="text-lg text-gray-600 mx-auto">
            My execution plan for the next semester
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Core Activities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {responsibilities.map((resp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-indigo-100/80 to-purple-100/80 backdrop-blur-sm shadow-lg"
              >
                <div className="mb-4 text-lg font-semibold text-indigo-600">
                  {resp.month}
                </div>
                <ul className="space-y-2">
                  {resp.activities.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span className="text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
