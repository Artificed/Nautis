import { useCursor } from "../../../common/shared/custom-cursor";
import { motion } from "framer-motion";
import n8nLogo from "../../../assets/n8n-logo.png";

export default function AutomationSection() {
    const { setIsHovering } = useCursor();

    const automationFeatures = [
      {
        title: "Docs Checker",
        description: "Automated documentation validation and quality assurance system",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M9 15l2 2 4-4" />
          </svg>
        ),
        gradient: "from-blue-200 to-cyan-200",
      },
      {
        title: "Outlook Scheduler",
        description: "Intelligent email scheduling and calendar management automation",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
          </svg>
        ),
        gradient: "from-purple-200 to-pink-200",
      },
    ];
  
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
        {/* Mechanical Gears / Energy Waves Background Theme */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Glowing energy waves */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-yellow-500/15 to-amber-600/10 blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/5 w-72 h-72 rounded-full bg-gradient-to-br from-orange-400/20 to-red-500/10 blur-3xl animate-pulse-slow animation-delay-4000"></div>

          {/* Rotating Gears */}
          <motion.div
            className="absolute top-32 left-1/6"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="35" fill="none" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="3" />
              <circle cx="60" cy="60" r="20" fill="none" stroke="rgba(251, 191, 36, 0.4)" strokeWidth="2" />
              {[...Array(8)].map((_, i) => (
                <rect
                  key={i}
                  x="57"
                  y="10"
                  width="6"
                  height="20"
                  fill="rgba(251, 191, 36, 0.3)"
                  transform={`rotate(${i * 45} 60 60)`}
                />
              ))}
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-40 right-1/5"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <svg width="90" height="90" viewBox="0 0 90 90">
              <circle cx="45" cy="45" r="25" fill="none" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="2" />
              <circle cx="45" cy="45" r="15" fill="none" stroke="rgba(245, 158, 11, 0.5)" strokeWidth="2" />
              {[...Array(6)].map((_, i) => (
                <rect
                  key={i}
                  x="42"
                  y="8"
                  width="6"
                  height="15"
                  fill="rgba(245, 158, 11, 0.4)"
                  transform={`rotate(${i * 60} 45 45)`}
                />
              ))}
            </svg>
          </motion.div>

          <motion.div
            className="absolute top-2/3 right-1/4"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <svg width="70" height="70" viewBox="0 0 70 70">
              <circle cx="35" cy="35" r="20" fill="none" stroke="rgba(251, 146, 60, 0.3)" strokeWidth="2" />
              <circle cx="35" cy="35" r="12" fill="none" stroke="rgba(251, 146, 60, 0.4)" strokeWidth="1.5" />
              {[...Array(10)].map((_, i) => (
                <rect
                  key={i}
                  x="33"
                  y="5"
                  width="4"
                  height="12"
                  fill="rgba(251, 146, 60, 0.3)"
                  transform={`rotate(${i * 36} 35 35)`}
                />
              ))}
            </svg>
          </motion.div>

          {/* Mechanical cogs small */}
          <motion.div
            className="absolute top-1/3 left-1/4 opacity-20"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <svg width="50" height="50" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="15" fill="none" stroke="rgba(251, 191, 36, 0.6)" strokeWidth="2" />
              {[...Array(12)].map((_, i) => (
                <line
                  key={i}
                  x1="25"
                  y1="25"
                  x2="25"
                  y2="8"
                  stroke="rgba(251, 191, 36, 0.5)"
                  strokeWidth="1"
                  transform={`rotate(${i * 30} 25 25)`}
                />
              ))}
            </svg>
          </motion.div>

          {/* Floating mechanical parts */}
          <motion.div
            className="absolute top-1/5 right-1/6 w-12 h-12 border-4 border-amber-400/20 rounded-sm"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/5 w-8 h-8 border-3 border-orange-400/25"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            animate={{
              y: [0, 30, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Hexagonal wireframes */}
          <motion.div
            className="absolute top-20 left-1/3 opacity-20"
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg width="60" height="60" viewBox="0 0 100 100">
              <polygon
                points="50 1 95 25 95 75 50 99 5 75 5 25"
                fill="none"
                stroke="rgba(251, 191, 36, 0.4)"
                strokeWidth="2"
              />
              <polygon
                points="50 20 80 35 80 65 50 80 20 65 20 35"
                fill="none"
                stroke="rgba(251, 191, 36, 0.3)"
                strokeWidth="1.5"
              />
            </svg>
          </motion.div>
        </div>
  
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-left">
            {/* Left Side - Title & Logo */}
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
                <span className="px-4 py-2 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full text-orange-900 font-semibold text-sm">
                  Innovation #2
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                {"Automation".split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: charIndex * 0.05,
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
              </h1>
  
              {/* n8n Logo Card */}
                <motion.div
                className="relative group p-8 rounded-3xl bg-gradient-to-br white backdrop-blur-md shadow-xl border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                animate={{
                    y: [0, -15, 0],
                }}
                whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.4 }
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                >
                {/* Glow effect on hover */}
                <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 blur-lg"
                    transition={{ duration: 0.4 }}
                />

                {/* Logo inside card */}
                <motion.img
                    src={n8nLogo}
                    alt="n8n Logo"
                    className="relative z-10 w-64 h-64 object-contain mx-auto"
                    whileHover={{
                    rotate: [0, -5, 5, -5, 0],
                    scale: 1.08,
                    transition: { duration: 0.5 },
                    }}
                />
                </motion.div>
            </motion.div>
  
            {/* Right Side - Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 translate-y-20"
            >
              {automationFeatures.map((feature, index) => (
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