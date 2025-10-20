import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";

export default function StrengthsSection() {
  const { setIsHovering } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<"strengths" | "improvements">("strengths");

  const strengths = [
    {
      title: "Consistent & Systematic",
      description: "I approach tasks in an organized and structured way.",
      gradient: "from-emerald-100 to-teal-100",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: "Strong Time Management",
      description: "I plan ahead and handle deadlines effectively.",
      gradient: "from-blue-100 to-cyan-100",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Can Work Under Pressure",
      description: "I stay productive even in tight situations.",
      gradient: "from-purple-100 to-indigo-100",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Quick to Adapt",
      description: "I can adjust easily to new tools, workflows, or environments.",
      gradient: "from-amber-100 to-orange-100",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: "Dedicated",
      description: "I'm willing to put in extra hours when needed to achieve the best results.",
      gradient: "from-pink-100 to-rose-100",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Detail-Oriented",
      description: "I pay close attention to small details that ensure quality results.",
      gradient: "from-slate-100 to-gray-100",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  const improvements = [
    {
      title: "Self-Critical",
      description: "I sometimes set very high standards for myself.",
      gradient: "from-orange-100 to-amber-100",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Overthinker",
      description: "I tend to overanalyze simple problems instead of taking quick action.",
      gradient: "from-cyan-100 to-sky-100",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Tunnel Vision",
      description: "I can get too focused on one detail and lose sight of the bigger picture at times.",
      gradient: "from-violet-100 to-purple-100",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
  ];

  const currentItems = activeTab === "strengths" ? strengths : improvements;

  return (
    <section
      ref={sectionRef}
      id="strengths"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-32 w-96 h-96 rounded-full bg-gradient-to-br from-teal-100/10 to-emerald-100/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-purple-100/25 to-pink-100/20 blur-3xl animate-float-slower animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-cyan-100/20 to-blue-100/15 blur-3xl animate-pulse-slow"></div>
        
        <div className="absolute top-40 right-40 w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-200/35 to-rose-200/25 opacity-75 blur-lg animate-float-slow animation-delay-1000 -rotate-6"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 rounded-3xl bg-gradient-to-br from-cyan-200/40 to-blue-200/30 opacity-70 blur-xl animate-float-slower animation-delay-2000 rotate-45"></div>
        <div className="absolute bottom-32 left-40 w-36 h-36 rounded-3xl bg-gradient-to-br from-purple-200/35 to-indigo-100/25 opacity-65 blur-xl animate-float animation-delay-3000 -rotate-12"></div>
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
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            What Defines Me
          </motion.h2>
          <p className="text-gray-700 text-lg md:text-xl mx-auto">
            A balanced view of my strengths and areas I'm actively working to improve
          </p>
        </motion.div>

        {/* Toggle Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => setActiveTab("strengths")}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
              activeTab === "strengths"
                ? "bg-gradient-to-br from-emerald-200 to-teal-200 text-gray-900 shadow-lg scale-105"
                : "bg-white/60 backdrop-blur-sm text-gray-600 hover:bg-white/80"
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Strengths
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("improvements")}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
              activeTab === "improvements"
                ? "bg-gradient-to-br from-orange-200 to-amber-200 text-gray-900 shadow-lg scale-105"
                : "bg-white/60 backdrop-blur-sm text-gray-600 hover:bg-white/80"
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Growing In
          </motion.button>
        </motion.div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              drag
              dragElastic={0.1}
              dragMomentum={true}
              dragTransition={{ 
                power: 0.2,
                timeConstant: 200,
              }}
              whileHover={{ 
                y: -8, 
                rotate: [0, -1, 1, -1, 0],
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileDrag={{ 
                scale: 1.05,
                cursor: "grabbing",
                zIndex: 50,
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`relative p-6 rounded-3xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-grab active:cursor-grabbing`}
            >
              <div
                className="w-12 h-12 mb-4 text-gray-700 transition-transform duration-500 ease-out group-hover:rotate-[360deg]"
              >
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/50 group-hover:scale-150 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
