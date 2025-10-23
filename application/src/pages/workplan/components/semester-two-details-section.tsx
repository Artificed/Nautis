import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";

export default function SemesterTwoDetailsSection() {
  const { setIsHovering } = useCursor();

  const monthlyBreakdown = [
    {
      month: "September - October 2026",
      activities: [
        "Execute TPA Network 26-1 and TPA Game 26-2",
        "Deploy Outlook Scheduler integration",
        "Analyze semester-1 performance data",
        "Refine processes based on lessons learned"
      ]
    },
    {
      month: "November - December 2026",
      activities: [
        "Support TPA Mobile 26-1 and TPA Web 26-2",
        "Implement Presentation Schedule Checker",
        "End-of-year team retrospective",
        "Plan scalability improvements for 2027"
      ]
    },
    {
      month: "January - February 2027",
      activities: [
        "Oversee TPA Desktop 26-2",
        "Conduct comprehensive year-end review",
        "Document best practices and playbooks",
        "Prepare transition materials for successors"
      ]
    }
  ];

  const strategicInitiatives = [
    {
      initiative: "Process Optimization",
      actions: [
        "Analyze automation impact metrics",
        "Identify bottlenecks in TPA execution",
        "Implement process improvements",
        "Reduce manual intervention by 40%"
      ],
      timeline: "September - November 2026"
    },
    {
      initiative: "Scalability Planning",
      actions: [
        "Stress-test scheduling system with concurrent TPAs",
        "Build knowledge base for common issues",
        "Create self-service documentation",
        "Establish assistant mentorship program"
      ],
      timeline: "October - December 2026"
    },
    {
      initiative: "Integration & Automation",
      actions: [
        "Integrate Outlook Scheduler with existing tools",
        "Automate presentation schedule conflict detection",
        "Create unified dashboard for all metrics",
        "Enable real-time notifications system"
      ],
      timeline: "September - January 2027"
    },
    {
      initiative: "Knowledge Transfer",
      actions: [
        "Document all systems and processes",
        "Create video tutorials for key workflows",
        "Build onboarding materials for new assistants",
        "Establish feedback loop for improvements"
      ],
      timeline: "December 2026 - February 2027"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Unique gradient spheres - completely different placement */}
        <div className="absolute top-32 left-16 w-[34rem] h-[34rem] rounded-full bg-gradient-to-br from-violet-200/23 to-purple-200/18 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-16 right-32 w-[38rem] h-[38rem] rounded-full bg-gradient-to-br from-fuchsia-200/20 to-pink-200/16 blur-3xl animate-pulse-slow animation-delay-2500"></div>
        <div className="absolute top-2/3 right-1/4 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-indigo-200/19 to-violet-200/14 blur-3xl animate-pulse-slow animation-delay-4500"></div>

        {/* Circular orbit particles */}
        <motion.div
          className="absolute top-1/4 left-1/3"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="w-4 h-4 rounded-full bg-violet-500/60"
            style={{ transform: "translateX(150px)" }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/3"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="w-3.5 h-3.5 rounded-full bg-fuchsia-500/65"
            style={{ transform: "translateX(-180px)" }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>

        {/* Bezier curve paths */}
        <svg className="absolute inset-0 w-full h-full opacity-32">
          <motion.path
            d="M 100,100 C 300,50 500,150 700,100 S 1100,50 1300,100"
            stroke="url(#curveGrad1)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.85, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 200,500 C 400,450 600,550 800,500 S 1200,450 1400,500"
            stroke="url(#curveGrad2)"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.75, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Pulsing stars */}
          <motion.path
            d="M 300,200 L 310,220 L 330,225 L 310,235 L 305,255 L 295,235 L 275,230 L 295,220 Z"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            opacity="0.5"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 900,350 L 908,368 L 926,372 L 908,380 L 904,398 L 896,380 L 878,376 L 896,368 Z"
            fill="none"
            stroke="#d946ef"
            strokeWidth="1.5"
            opacity="0.5"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.9, 0.4],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />

          {/* Growing/shrinking rectangles */}
          <motion.rect
            x="40%"
            y="20%"
            width="8"
            height="8"
            fill="none"
            stroke="#a855f7"
            strokeWidth="2"
            opacity="0.4"
            animate={{
              width: [8, 20, 8],
              height: [8, 20, 8],
              rotate: [0, 45, 90, 135, 180],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <defs>
            <linearGradient id="curveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="curveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d946ef" stopOpacity="0" />
              <stop offset="50%" stopColor="#d946ef" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Spiraling squares */}
        <motion.div
          className="absolute top-1/5 left-1/6 w-16 h-16 border-2 border-violet-400/45"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
            x: [0, 60, 0],
            y: [0, -60, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Radiating glow dots */}
        <motion.div
          className="absolute top-2/5 right-1/5 w-7 h-7 bg-violet-500/50 rounded-full"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.6, 0, 0.6],
            boxShadow: [
              "0 0 25px rgba(139, 92, 246, 0.6)",
              "0 0 70px rgba(139, 92, 246, 0)",
              "0 0 25px rgba(139, 92, 246, 0.6)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute bottom-2/5 left-2/5 w-6 h-6 bg-fuchsia-500/55 rounded-full"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.65, 0, 0.65],
            boxShadow: [
              "0 0 22px rgba(217, 70, 239, 0.65)",
              "0 0 65px rgba(217, 70, 239, 0)",
              "0 0 22px rgba(217, 70, 239, 0.65)",
            ],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent mb-4">
            Odd Semester - Detailed Breakdown
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advanced execution with optimization, scalability planning, and knowledge transfer focus
          </p>
        </motion.div>

        {/* Strategic Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Strategic Initiatives</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {strategicInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-orange-100/80 to-rose-100/80 backdrop-blur-sm shadow-lg"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-2">{initiative.initiative}</h4>
                <div className="text-xs font-semibold text-orange-600 mb-3">
                  Timeline: {initiative.timeline}
                </div>
                <ul className="space-y-2">
                  {initiative.actions.map((action, actionIndex) => (
                    <li key={actionIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-orange-500 mt-1">→</span>
                      <span className="text-gray-700">{action}</span>
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
