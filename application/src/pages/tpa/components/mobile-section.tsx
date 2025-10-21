import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";

export default function MobileSection() {
  const { setIsHovering } = useCursor();

  const sprintActivities = [
    { 
      label: "Progress Review", 
      desc: "Discuss achievements and blockers from the past week",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    { 
      label: "Score Evaluation", 
      desc: "Assessment based on weekly goals and deliverables",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500"
    },
    { 
      label: "Revisions", 
      desc: "Feedback and improvement points for ongoing work",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: "from-orange-500 to-red-500"
    },
    { 
      label: "Next Goals", 
      desc: "Set objectives and tasks for the upcoming week",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-emerald-500 to-teal-500"
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 py-20 px-6">
      {/* Background Effects - Only floating orbs, no stripes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/6 w-80 h-80 rounded-full bg-gradient-to-br from-blue-300/20 to-purple-300/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/6 w-96 h-96 rounded-full bg-gradient-to-br from-pink-300/20 to-orange-300/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center space-y-12 ml-14">
            
            {/* TOP LEFT - Badge and Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
                  TPA MOBILE
                </div>
              </motion.div>

              <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                Total Revamp
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-xl leading-relaxed">
                A streamlined, sprint-based approach to mobile development
              </p>
            </motion.div>

          {/* BOTTOM LEFT - Project Stats with SVG icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Groups */}
              <motion.div
                whileHover={{ x: 5 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="flex items-center gap-6 group cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-4xl font-black text-gray-900">
                    <span className="bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent">7</span>
                    <span className="ml-4 text-3xl font-bold text-gray-800">Groups</span>
                  </div>
                  <div className="text-md text-gray-500 mt-1">Collaborative Teams</div>
                </div>
              </motion.div>

              {/* Phase */}
              <motion.div
                whileHover={{ x: 5 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="flex items-center gap-6 group cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="text-4xl font-black text-gray-900">
                    <span className="bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">1</span>
                    <span className="ml-6 text-3xl font-bold text-gray-800">Phase</span>
                  </div>
                  <div className="text-md text-gray-500 mt-1">Continuous Development</div>
                </div>
              </motion.div>

              {/* Weeks */}
              <motion.div
                whileHover={{ x: 5 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="flex items-center gap-6 group cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-4xl font-black text-gray-900">
                    <span className="bg-gradient-to-br from-emerald-600 to-teal-500 bg-clip-text text-transparent">4</span>
                    <span className="ml-4 text-3xl font-bold text-gray-800">Weeks</span>
                  </div>
                  <div className="text-md text-gray-500 mt-1">Sprint Duration</div>
                </div>
              </motion.div>
            </motion.div>

            </div>

          {/* RIGHT SIDE - Giant Sprint Meeting Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="relative bg-white/90 backdrop-blur-md rounded-3xl mt-6 p-10 shadow-2xl border-2 border-gray-200/50"
            >
              {/* Card Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Weekly Sprint
                  </h2>
                </div>
                <p className="text-gray-600 text-md leading-relaxed">
                  Each week follows a consistent rhythm with collaborative meetings to ensure alignment, 
                  track progress, and maintain momentum throughout the development cycle.
                </p>
              </div>

              {/* Sprint Activities - NO nested cards, just clean list */}
              <div className="space-y-6">
                {sprintActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all duration-300 flex-shrink-0`}>
                      {activity.icon}
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="font-bold text-gray-900 text-lg mb-1">{activity.label}</div>
                      <div className="text-gray-600 text-md">{activity.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Card Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-6 pt-4 border-t border-gray-200"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Repeated weekly throughout the 4-week development cycle</span>
                </div>
              </motion.div>

              {/* Decorative corner elements */}
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-500 opacity-10 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-indigo-400 to-cyan-500 opacity-10 rounded-full blur-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
