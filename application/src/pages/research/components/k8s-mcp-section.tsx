import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";
import k8sLogo from "../../../assets/k8s-logo.png";
import mcpLogo from "../../../assets/mcp-logo.png";

const particleConfigs = Array.from({ length: 30 }, () => ({
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 3 + Math.random() * 4,
  delay: Math.random() * 5,
}));

export default function KubernetesMCPSection() {
  const { setIsHovering } = useCursor();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative">
            <div className="w-4 h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-500/50" />
            <div className="absolute inset-0 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-75" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4"
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-500/50" />
            <div className="absolute inset-0 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-75" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/3"
          animate={{
            y: [0, -35, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="relative">
            <div className="w-3.5 h-3.5 bg-indigo-400 rounded-full shadow-lg shadow-indigo-500/50" />
            <div className="absolute inset-0 w-3.5 h-3.5 bg-indigo-400 rounded-full animate-ping opacity-75" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/3"
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-500/50" />
            <div className="absolute inset-0 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75" />
          </div>
        </motion.div>

        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          <motion.line
            x1="25%"
            y1="20%"
            x2="75%"
            y2="33%"
            stroke="url(#lineGradient1)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="75%"
            y1="33%"
            x2="66%"
            y2="66%"
            stroke="url(#lineGradient2)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          />
          <motion.line
            x1="33%"
            y1="75%"
            x2="66%"
            y2="66%"
            stroke="url(#lineGradient3)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
          <defs>
            <linearGradient id="lineGradient1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="lineGradient2">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="lineGradient3">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particleConfigs.map((config, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-blue-200 rounded-full"
            style={{
              left: `${config.left}%`,
              top: `${config.top}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0.5],
            }}
            transition={{
              duration: config.duration,
              repeat: Infinity,
              delay: config.delay,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-blue-200/30 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-20 w-72 h-72 rounded-full bg-gradient-to-br from-purple-200/30 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-orange-200/25 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm tracking-wide shadow-lg">
            Core Infrastructure
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
        >
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Kubernetes MCP Integration
          </span>
        </motion.h2>

        <div className="relative mb-16">
          <div className="flex items-center justify-center gap-16 md:gap-32">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-2xl opacity-40 scale-110"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-10">
                  <img 
                    src={k8sLogo} 
                    alt="Kubernetes" 
                    className="w-32 h-32"
                  />
                </div>
              </motion.div>
            </motion.div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
              <motion.div
                animate={{ x: [-20, 20, -20] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex gap-2"
              >
                <div className="w-2 h-2 bg-blue-50 rounded-full"></div>
                <div className="w-2 h-2 bg-indigo-50 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-50 rounded-full"></div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  y: [0, -18, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 rounded-3xl blur-2xl opacity-40 scale-110"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-10">
                  <img 
                    src={mcpLogo} 
                    alt="MCP" 
                    className="w-32 h-32 rounded-2xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
            style={{ zIndex: -1 }}
          ></motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          A powerful Model Context Protocol server providing intelligent tools for seamless Kubernetes cluster management and automation
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="bg-white rounded-2xl shadow-lg p-8 border-2 border-transparent hover:border-blue-200 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Extract Cluster Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Query pod status, health, and resource utilization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Retrieve deployment configurations and service endpoints</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="bg-white rounded-2xl shadow-lg p-8 border-2 border-transparent hover:border-purple-200 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Cluster Control Operations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span>Restart deployments and rolling updates with zero downtime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span>Clean up unused pods and optimize resource allocation</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
