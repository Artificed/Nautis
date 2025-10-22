import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";
import openaiLogo from "../../../assets/openai-logo.svg";

export default function LLMSection() {
  const { setIsHovering } = useCursor();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-32 w-32 h-32 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 opacity-80 blur-xl animate-float"></div>
        <div className="absolute bottom-32 left-16 w-28 h-28 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 opacity-70 blur-xl animate-float-slower animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Logo and Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            {/* Floating OpenAI Logo */}
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

            {/* Decorative elements */}
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

          {/* Right side - Content */}
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

            {/* Key Points */}
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
