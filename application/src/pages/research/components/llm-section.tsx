import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";
import openaiLogo from "../../../assets/openai-logo.svg";

const floatingParticles = Array.from({ length: 15 }, () => ({
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 4 + Math.random() * 3,
  delay: Math.random() * 4,
  size: 2 + Math.random() * 3,
}));

const brainNodes = Array.from({ length: 8 }, (_, i) => ({
  angle: (i * 360) / 8,
  duration: 3 + Math.random() * 2,
  delay: i * 0.3,
}));

export default function LLMSection() {
  const { setIsHovering } = useCursor();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <svg className="absolute w-full h-full">
          {brainNodes.map((node, i) => {
            const nextNode = brainNodes[(i + 1) % brainNodes.length];
            const x1 = 50 + 30 * Math.cos((node.angle * Math.PI) / 180);
            const y1 = 50 + 30 * Math.sin((node.angle * Math.PI) / 180);
            const x2 = 50 + 30 * Math.cos((nextNode.angle * Math.PI) / 180);
            const y2 = 50 + 30 * Math.sin((nextNode.angle * Math.PI) / 180);
            
            return (
              <motion.line
                key={`neural-${i}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="url(#neuralGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 0], opacity: [0, 0.5, 0] }}
                transition={{
                  duration: node.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: node.delay
                }}
              />
            );
          })}
          <defs>
            <linearGradient id="neuralGradient">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingParticles.map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-emerald-400 to-teal-400"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/6 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-200/30 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/6 w-96 h-96 rounded-full bg-gradient-to-br from-teal-200/25 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="absolute w-full h-full">
          <motion.path
            d="M 10,50 L 30,50 L 30,70 L 50,70"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 90,30 L 70,30 L 70,50 L 50,50"
            stroke="#14b8a6"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          <motion.path
            d="M 20,80 L 40,80 L 40,60 L 60,60"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2 }}
          />
        </svg>
      </div>

      <motion.div
        className="absolute top-20 left-1/4 w-16 h-16 border-2 border-emerald-400/30 rounded-lg"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-32 right-1/3 w-12 h-12 border-2 border-teal-400/30"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        animate={{
          rotate: [0, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-32 w-32 h-32 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 opacity-80 blur-xl animate-float"></div>
        <div className="absolute bottom-32 left-16 w-28 h-28 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 opacity-70 blur-xl animate-float-slower animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-30 scale-150"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-12">
                <img 
                  src={openaiLogo} 
                  alt="OpenAI" 
                  className="w-48 h-48"
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute w-64 h-64 border-2 border-emerald-300 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute w-80 h-80 border-2 border-teal-300 rounded-full"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-2">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 text-white font-semibold text-sm tracking-wide shadow-lg mb-4">
                Large Language Models
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                AI-Powered Decision Making
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              OpenAI's language models power the n8n automation agent, enabling it to understand cluster state, make intelligent decisions, and communicate actions in plain English. The agent combines real-time cluster data with AI reasoning for maintenance.
            </p>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Automated Cluster Analysis</h3>
                  <p className="text-gray-600 text-sm">
                    The n8n agent fetches cluster metrics daily and uses OpenAI to analyze health, performance, and potential issues
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Intelligent Action Decisions</h3>
                  <p className="text-gray-600 text-sm">
                    AI determines optimal actions like restarting unhealthy pods, scaling deployments, or cleaning up unused resources
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}   
                className="flex items-start gap-4 group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Natural Language Communication</h3>
                  <p className="text-gray-600 text-sm">
                    Chat interface allows you to query cluster status, request actions, and get insights in plain English
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Automated Logging & Alerts</h3>
                  <p className="text-gray-600 text-sm">
                    All decisions and actions are logged to Notion, with critical actions triggering email notifications
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
