import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";

export default function WebSection() {
  const { setIsHovering } = useCursor();

  const modernAIFeatures = [
    {
      title: "Agent Integration",
      subtitle: "Workflow Automation",
      description: "Connect AI agents with hundreds of services using n8n. Build complex AI pipelines with visual workflow automation and no-code interfaces.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6" />
          <path d="M1 12h6m6 0h6" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      tags: ["n8n", "Agents", "No-Code"],
    },
    {
      title: "Model Context Protocol",
      subtitle: "MCP Standard",
      description: "Implement standardized context sharing between AI models and tools, enabling seamless integration and improved accuracy across different AI systems.",
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
      tags: ["Context Sharing", "Standardized", "Interoperability"],
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
      tags: ["Knowledge Base", "Real-Time", "Accuracy"],
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 py-20">
      {/* Background Effects - Network Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated network nodes */}
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

        {/* Connecting lines */}
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

        {/* Gradient orbs */}
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

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
              TPA WEB
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Modern AI Features
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge AI technologies for next-generation web applications
          </p>
        </motion.div>

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modernAIFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: 1, 
                y: [0, -10, 0],
              }}
              transition={{ 
                opacity: { duration: 0.6, delay: index * 0.08 },
                y: {
                  duration: 3.5 + (index % 3) * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="relative group"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 h-full overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                />

                {/* Icon */}
                <div
                  className="w-16 h-16 mb-4 relative z-10 text-white transition-transform duration-500 ease-out group-hover:rotate-[360deg]"
                >
                  <div className={`w-full h-full rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-1 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.08 + tagIndex * 0.05 }}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <motion.div
                  className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
