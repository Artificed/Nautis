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
      
      {/* Simple clean background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient blobs */}
        <motion.div
          className="absolute top-1/4 right-1/5 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-200/20 blur-3xl"
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
          className="absolute bottom-1/4 left-1/5 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-emerald-200/25 to-teal-200/15 blur-3xl"
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
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-purple-200/20 to-indigo-200/50 blur-xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-purple-300/10 to-indigo-300/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-100/40 to-indigo-100/30 opacity-80 blur-xl rotate-12"
          animate={{
            y: [0, -30, 0],
            rotate: [12, 25, 12],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-100/35 to-teal-100/25 opacity-75 blur-lg"
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-28 h-28 rounded-xl bg-gradient-to-br from-purple-100/40 to-indigo-100/30 opacity-70 blur-xl rotate-45"
          animate={{
            y: [0, -25, 0],
            rotate: [45, 60, 45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-40 w-36 h-36 rounded-3xl bg-gradient-to-br from-cyan-100/35 to-blue-100/25 opacity-65 blur-xl -rotate-12"
          animate={{
            y: [0, 35, 0],
            rotate: [-12, 3, -12],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg mb-4 inline-block">
            TPA NETWORK
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r pb-2 from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Infrastructure & Deployment
          </h1>
          <p className="text-xl text-gray-700">
            Modern network architecture & Strategic deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {networkConcepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: 1, 
                y: 0,
              }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2,
              }}
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              dragElastic={0.1}
              whileHover={{ scale: 1.02, y: -5 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="cursor-grab active:cursor-grabbing"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 h-full overflow-hidden group">
                
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${concept.gradient}`} />
                
                <div className="flex items-start gap-4 mb-8">
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${concept.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-white">{concept.icon}</div>
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {concept.title}
                    </h3>
                    <p className={`text-md font-semibold bg-gradient-to-r ${concept.gradient} bg-clip-text text-transparent`}>
                      {concept.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-md text-gray-600 leading-relaxed mt-2 mb-6">
                  {concept.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {concept.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${concept.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
