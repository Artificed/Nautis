import { useRef } from "react";
import { motion } from "framer-motion";
import { useCursor } from "./CustomCursor";

export default function AboutSection() {
  const { setIsHovering } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);

  const aboutInfo = [
    {
      label: "Birthdate & Place",
      value: "Jakarta, 30 November 2003",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-purple-200 to-pink-200",
    },
    {
      label: "Nationality",
      value: "Indonesian",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-blue-200 to-cyan-200",
    },
    {
      label: "Gender",
      value: "Male",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      gradient: "from-amber-200 to-orange-200",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-32 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/30 to-amber-200/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-purple-200/25 to-pink-200/20 blur-3xl animate-float-slower animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-cyan-200/20 to-blue-200/15 blur-3xl animate-pulse-slow"></div>
        
        <div className="absolute top-20 left-20 w-32 h-32 rounded-3xl bg-gradient-to-br from-orange-100/40 to-amber-100/30 opacity-80 blur-xl animate-float rotate-12"></div>
        <div className="absolute top-40 right-40 w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-100/35 to-rose-100/25 opacity-75 blur-lg animate-float-slow animation-delay-1000 -rotate-6"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 rounded-3xl bg-gradient-to-br from-cyan-100/40 to-blue-100/30 opacity-70 blur-xl animate-float-slower animation-delay-2000 rotate-45"></div>
        <div className="absolute bottom-32 left-40 w-36 h-36 rounded-3xl bg-gradient-to-br from-purple-100/35 to-indigo-100/25 opacity-65 blur-xl animate-float animation-delay-3000 -rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-100/30 to-orange-100/20 opacity-60 blur-lg animate-float-slow animation-delay-4000 rotate-90"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-xl bg-gradient-to-br from-teal-100/25 to-cyan-100/20 opacity-55 blur-lg animate-float-slower rotate-45"></div>
        
        <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-100/20 to-amber-100/15 opacity-30 blur-md animate-float animation-delay-5000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-10 h-10 rounded-full bg-gradient-to-br from-pink-100/25 to-rose-100/15 opacity-35 blur-md animate-float-slow animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100/20 to-blue-100/15 opacity-25 blur-sm animate-float-slower animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/5 w-14 h-14 rounded-full bg-gradient-to-br from-purple-100/20 to-indigo-100/15 opacity-30 blur-md animate-float animation-delay-3500"></div>
        
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-orange-100/15 to-pink-100/10 blur-3xl animate-rotate-gradient"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-100/10 to-purple-100/10 blur-3xl animate-rotate-gradient animation-delay-3000"></div>

        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 400 300 Q 450 250, 500 300 T 600 300 Q 650 350, 700 300"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.3"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              pathOffset: [0, 0, 0.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fb923c" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          className="absolute top-24 left-1/5 w-24 h-24 bg-gradient-to-br from-amber-300/20 to-orange-300/20"
          style={{ 
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            filter: "blur(8px)"
          }}
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "50% 50% 30% 70% / 30% 70% 70% 30%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-1/5 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-purple-300/20"
          style={{ 
            borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%",
            filter: "blur(10px)"
          }}
          animate={{
            borderRadius: [
              "50% 50% 50% 50% / 50% 50% 50% 50%",
              "70% 30% 50% 50% / 30% 70% 50% 50%",
              "50% 70% 30% 50% / 50% 30% 70% 50%",
              "50% 50% 50% 50% / 50% 50% 50% 50%",
            ],
            x: [0, -50, 30, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.1, 1.3, 1],
            rotate: [0, -90, -180, -360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute top-1/3 right-12"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 0.9, 1],
            y: [0, -15, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30">
            <path
              d="M15 2 L18 12 L28 12 L20 18 L23 28 L15 22 L7 28 L10 18 L2 12 L12 12 Z"
              fill="#fbbf24"
              opacity="0.4"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-12"
          animate={{
            rotate: [0, -15, 15, 0],
            scale: [1, 0.8, 1.3, 1],
            x: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <svg width="25" height="25" viewBox="0 0 30 30">
            <path
              d="M15 2 L18 12 L28 12 L20 18 L23 28 L15 22 L7 28 L10 18 L2 12 L12 12 Z"
              fill="#ec4899"
              opacity="0.4"
            />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
        <motion.div 
          className="text-center mb-20"
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
              About{" "}
              <span className="bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300 bg-clip-text text-transparent animate-gradient">
                Me
              </span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full mx-auto"
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {aboutInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg transition-shadow duration-500 cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${info.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`}
                ></div>

                <div className="relative bg-white rounded-3xl h-full flex flex-col items-center text-center p-4">
                  <motion.div 
                    className="w-16 h-16 text-gray-700 mb-4"
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4
                      },
                      rotate: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4
                      },
                      scale: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    {info.icon}
                  </motion.div>

                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 min-h-[2.5rem] flex items-center justify-center">
                    {info.label}
                  </h3>

                  <p className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300 min-h-[3.5rem] flex items-center justify-center">
                    {info.value}
                  </p>

                  <motion.div 
                    className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-gray-200 group-hover:border-gray-400 transition-colors opacity-0 group-hover:opacity-100 rounded-tr-lg"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-gray-200 group-hover:border-gray-400 transition-colors opacity-0 group-hover:opacity-100 rounded-bl-lg"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5 + 0.3
                    }}
                  />

                  <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
