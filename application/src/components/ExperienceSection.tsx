import { useRef } from "react";
import { motion } from "framer-motion";
import { useCursor } from "./CustomCursor";

export default function ExperienceSection() {
  const { setIsHovering } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      organization: "Binus BNEC, BNCC, HIMTI",
      role: "Member",
      period: "2022 - 2023",
      year: "2022",
      gradient: "from-orange-300 to-amber-400",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      organization: "Binus SASC",
      role: "Scholarship Mentor",
      period: "2024",
      year: "2024",
      gradient: "from-amber-300 to-orange-400",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      organization: "Software Laboratory Center",
      role: "Junior Laboratory Assistant",
      period: "2024 - 2025",
      year: "2024",
      gradient: "from-amber-300 to-orange-400",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      organization: "Software Laboratory Center",
      role: "Subject Coordinator Staff",
      period: "2025 - Present",
      year: "2025",
      gradient: "from-orange-300 to-amber-400",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
  ];

  const timelineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50 to-orange-50"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-32 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/30 to-amber-200/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-amber-200/25 to-orange-200/20 blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-stone-200/20 to-amber-200/15 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
            <motion.div 
            className="text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            >
            <div className="inline-block">
                <motion.h2 
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ 
                    y: [0, -8, 0],
                }}
                transition={{
                    opacity: { duration: 0.5, delay: 0.2 },
                    scale: { duration: 0.5, delay: 0.2 },
                    y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                    }
                }}
                >
                <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent animate-gradient">
                    Experience
                </span>
                </motion.h2>

                <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                animate={{
                    scaleX: [1, 1.3, 1],
                }}
                transition={{ 
                    width: { duration: 0.8, delay: 0.4 },
                    scaleX: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                    }
                }}
                ></motion.div>
            </div>
            </motion.div>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            My journey through various organizations and roles
          </p>
        </motion.div>

        <div className="relative overflow-x-auto pb-8 hide-scrollbar">
          <div className="min-w-max px-4">
            <div className="relative mb-12">
              <div className="relative flex justify-center items-center gap-28">
                <div className="absolute top-1/2 left-[14%] right-[14%] h-1 bg-gray-200 rounded-full -translate-y-1/2"></div>
                <motion.div
                  variants={timelineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute top-1/2 left-[14%] right-[14%] h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 rounded-full -translate-y-1/2 origin-left"
                ></motion.div>

                {experiences.map((experience, index) => (
                  <div key={index} className="relative flex flex-col items-center">
                    <motion.div
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: index * 0.3 + 0.5, duration: 0.6 }}
                      className={`${index % 2 === 0 ? 'mb-32' : 'mt-32'} relative`}
                    >
                      <div
                        className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 group w-64"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                      >
                        <div className="flex justify-center mb-4">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${experience.gradient} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <div className="text-white">
                              {experience.icon}
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="mb-3">
                            <div className="text-sm font-bold text-transparent bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text mb-2">
                              {experience.period}
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 mb-1">
                              {experience.organization}
                            </h3>
                            <p className="text-sm font-medium text-gray-600">
                              {experience.role}
                            </p>
                          </div>
                        </div>

                        <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}