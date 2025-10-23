import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";

export default function WebSection() {
  const { setIsHovering } = useCursor();

  const modernAIFeatures = [
    {
      title: "Agent Integration",
      subtitle: "Workflow Automation",
      description: "Utilize tools like n8n to build modern AI pipelines with visual workflow automation and no-code interfaces.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6" />
          <path d="M1 12h6m6 0h6" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      gradient: "from-purple-500 via-pink-500 to-rose-500",
    },
    {
      title: "Model Context Protocol",
      subtitle: "MCP Standard",
      description: "Implement standardized context sharing between AI models and tools, enabling integration across different AI systems.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <path d="M10 6h4M10 18h4M6 10v4M18 10v4" />
        </svg>
      ),
      gradient: "from-emerald-500 via-green-500 to-teal-500",
    },
    {
      title: "RAG Systems",
      subtitle: "Retrieval-Augmented Generation",
      description: "Enhance AI responses with real-time data retrieval from knowledge bases, ensuring accurate and up-to-date information in every interaction.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <circle cx="10" cy="12" r="2" />
          <path d="M14 12h4" />
        </svg>
      ),
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-4 h-4 rounded-full bg-blue-400/40"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-purple-400/40"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-cyan-400/40"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
          <motion.line
            x1="25%"
            y1="20%"
            x2="75%"
            y2="33%"
            stroke="url(#gradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="33%"
            y1="66%"
            x2="75%"
            y2="33%"
            stroke="url(#gradient2)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          className="absolute top-1/4 right-1/6 w-96 h-96 rounded-full bg-gradient-to-br from-blue-300/20 to-purple-300/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/6 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-300/20 to-emerald-300/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start gap-60">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="left-1/5 lg:w-2/5 lg:sticky lg:top-36"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
                TPA WEB
              </div>
            </motion.div>

            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Modern AI Features
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Cutting-edge AI technologies for next-generation web applications
            </p>
          </motion.div>

          <div className="lg:w-3/5 relative" style={{ minHeight: '630px' }}>
            {modernAIFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100, y: 50 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: 0,
                }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                drag
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                whileHover={{
                  scale: 1.03,
                  rotate: 0,
                  transition: { duration: 0.3 }
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="absolute group cursor-grab active:cursor-grabbing"
                style={{
                  top: `${index * 210 - 20}px`,
                  left: index % 2 === 0 ? '0' : '5%',
                  width: 'min(600px, 95%)',
                  rotate: index % 2 === 0 ? '-1deg' : '1deg',
                }}
              >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 h-full overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                />

                <div className="relative z-10 flex items-start gap-4">
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className={`text-md font-semibold mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                      {feature.subtitle}
                    </p>
                    <p className="text-gray-600 text-md leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-300`}
                />

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100/80 backdrop-blur-sm flex items-center justify-center border border-gray-200/50">
                  <span className="text-sm font-bold text-gray-400">
                    {index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
