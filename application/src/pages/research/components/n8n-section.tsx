import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";
import n8nLogo from "../../../assets/n8n-logo.png";
import notionLogo from "../../../assets/notion-logo.png";
import gmailLogo from "../../../assets/gmail-logo.png";

const particleConfigs = Array.from({ length: 40 }, () => ({
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 3 + Math.random() * 5,
  delay: Math.random() * 4,
  size: 1 + Math.random() * 2,
}));

export default function N8NAutomationSection() {
  const { setIsHovering } = useCursor();

  const steps = [
    {
      number: 1,
      title: "Scheduled Trigger",
      description: "Daily cron initiates workflow",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-rose-500 to-pink-500",
    },
    {
      number: 2,
      title: "Fetch Data",
      description: "Query MCP server for metrics",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: "from-pink-500 to-rose-500",
    },
    {
      number: 3,
      title: "AI Processing",
      description: "LLM analyzes & decides actions",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-orange-500 to-rose-500",
      highlight: true,
    },
    {
      number: 4,
      title: "Log to Notion",
      description: "Store execution records",
      icon: <img src={notionLogo} alt="Notion" className="w-6 h-6" />,
      color: "from-rose-500 to-orange-500",
    },
    {
      number: 5,
      title: "Alert System",
      description: "Email critical actions",
      icon: <img src={gmailLogo} alt="Email" className="w-6 h-6" />,
      color: "from-pink-500 to-orange-500",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 pt-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-full h-full"
          animate={{
            background: [
              'radial-gradient(circle at 30% 20%, rgba(251, 113, 133, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(251, 113, 133, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/5 w-96 h-96 rounded-full bg-gradient-to-br from-rose-200/40 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/6 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-pink-200/35 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-orange-200/30 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particleConfigs.map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-rose-400 to-pink-400"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [2, 3, 2],
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

      <motion.div
        className="absolute top-24 left-1/5 w-20 h-20 border-2 border-rose-400/30 rounded-xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-28 right-1/4 w-16 h-16 border-2 border-pink-400/30"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        animate={{
          rotate: [0, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/6 w-14 h-14 rounded-full border-2 border-orange-400/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="absolute w-full h-full">
          <motion.path
            d="M 20,50 Q 50,30 80,50"
            stroke="url(#workflowGradient1)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 10,70 Q 50,85 90,70"
            stroke="url(#workflowGradient2)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          <motion.path
            d="M 30,30 L 70,70"
            stroke="url(#workflowGradient3)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }}
          />
          <defs>
            <linearGradient id="workflowGradient1">
              <stop offset="0%" stopColor="#fb7185" stopOpacity="0" />
              <stop offset="50%" stopColor="#fb7185" stopOpacity="1" />
              <stop offset="100%" stopColor="#fb7185" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="workflowGradient2">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="workflowGradient3">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 right-24 w-32 h-32 rounded-3xl bg-gradient-to-br from-rose-50 to-pink-50 opacity-80 blur-xl animate-float"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 opacity-70 blur-xl animate-float-slower animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-block px-5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold text-sm tracking-wide shadow-lg">
            Workflow Automation
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800"
        >
          <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Intelligent Cluster Automation
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Autonomous cluster management powered by n8n and AI
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-14"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-3xl blur-2xl opacity-40 scale-110"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-10 border-2 border-rose-200">
              <img 
                src={n8nLogo} 
                alt="n8n" 
                className="w-32 h-32"
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative"
              >
                <div className="flex justify-center items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                    {step.number}
                  </div>
                  
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="absolute left-[calc(100%+0.5rem)]"
                    >
                      <svg className="w-8 h-8 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                </div>

                <div className={`${
                  step.highlight 
                    ? 'bg-gradient-to-br from-orange-50 to-rose-50 border-2 border-orange-300' 
                    : 'bg-white border-2 border-gray-200'
                } rounded-xl shadow-md p-5 hover:shadow-xl transition-all min-h-[180px] flex flex-col`}>
                  <div className={`w-10 h-10 rounded-lg ${
                    step.highlight ? 'bg-orange-100' : 'bg-gray-100'
                  } flex items-center justify-center text-gray-700 mb-3`}>
                    {step.icon}
                  </div>

                  <h3 className="text-base font-bold text-gray-800 mb-2">
                    {step.title}
                    {step.highlight && (
                      <span className="ml-2 text-xs bg-orange-200 text-orange-800 px-2 py-0.5 rounded-full font-semibold">
                        AI
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-600 leading-snug">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
