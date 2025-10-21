import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";

export default function NetworkSection() {
  const { setIsHovering } = useCursor();

  const networkConcepts = [
    {
      title: "Service Mesh",
      subtitle: "Microservices Communication",
      description: "Implement service-to-service communication with built-in observability, security, and reliability. Manage traffic routing, load balancing, and failure recovery across distributed systems.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="5" r="3" />
          <circle cx="12" cy="19" r="3" />
          <circle cx="5" cy="12" r="3" />
          <circle cx="19" cy="12" r="3" />
          <path d="M12 8v8M8.5 10l7 4M8.5 14l7-4" />
        </svg>
      ),
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      tags: ["Traffic Control", "Observability", "Security"],
    },
    {
      title: "Deployment Types",
      subtitle: "Strategic Rollouts",
      description: "Leverage various deployment strategies including blue-green, canary, and A/B testing. Minimize downtime and risk while delivering new features safely to production.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      tags: ["Blue-Green", "Canary", "Rolling Updates"],
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 py-20">
      {/* Background Effects - Network/Mesh Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mesh grid pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>

        {/* Hexagon pattern overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <defs>
            <pattern id="hexagons" width="100" height="87" patternUnits="userSpaceOnUse">
              <path d="M50 0 L93.3 25 L93.3 62 L50 87 L6.7 62 L6.7 25 Z" fill="none" stroke="url(#hexGradient)" strokeWidth="1"/>
            </pattern>
            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>

        {/* Animated connection nodes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-400/50"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-purple-400/50"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-3 h-3 rounded-full bg-cyan-400/50"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/3 right-1/5 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-blue-300/15 to-indigo-300/10 blur-3xl"
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
          className="absolute bottom-1/3 left-1/5 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-emerald-300/15 to-teal-300/10 blur-3xl"
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

        {/* Flowing data lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
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
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
              TPA NETWORK
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Infrastructure & Deployment
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Modern network architecture and strategic deployment methodologies
          </p>
        </motion.div>

        {/* Network Concepts Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {networkConcepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: 1, 
                y: [0, -12, 0],
              }}
              transition={{ 
                opacity: { duration: 0.6, delay: index * 0.2 },
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="relative group"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 h-full overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${concept.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                />

                {/* Icon */}
                <div
                  className="w-20 h-20 mb-6 relative z-10 text-white transition-transform duration-500 ease-out group-hover:rotate-[360deg]"
                >
                  <div className={`w-full h-full rounded-xl bg-gradient-to-br ${concept.gradient} flex items-center justify-center shadow-lg`}>
                    {concept.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900">
                    {concept.title}
                  </h3>
                  <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${concept.gradient} bg-clip-text text-transparent`}>
                    {concept.subtitle}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {concept.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {concept.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + tagIndex * 0.05 }}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <motion.div
                  className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${concept.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
