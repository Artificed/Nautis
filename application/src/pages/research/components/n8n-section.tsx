import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";
import n8nLogo from "../../../assets/n8n-logo.png";
import notionLogo from "../../../assets/notion-logo.png";
import outlookLogo from "../../../assets/outlook-logo.png";

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
      icon: <img src={outlookLogo} alt="Email" className="w-6 h-6" />,
      color: "from-pink-500 to-orange-500",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 py-20">
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 right-24 w-32 h-32 rounded-3xl bg-gradient-to-br from-rose-50 to-pink-50 opacity-80 blur-xl animate-float"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 opacity-70 blur-xl animate-float-slower animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold text-sm tracking-wide shadow-lg">
            Workflow Automation
          </span>
        </motion.div>

        {/* Main Title */}
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
          className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Autonomous cluster management powered by n8n and AI
        </motion.p>

        {/* Centered n8n Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
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

        {/* Horizontal Workflow Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Steps Grid */}
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
                {/* Step Number Badge with Arrow */}
                <div className="flex justify-center items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                    {step.number}
                  </div>
                  
                  {/* Arrow to next step */}
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

                {/* Card */}
                <div className={`${
                  step.highlight 
                    ? 'bg-gradient-to-br from-orange-50 to-rose-50 border-2 border-orange-300' 
                    : 'bg-white border-2 border-gray-200'
                } rounded-xl shadow-md p-5 hover:shadow-xl transition-all min-h-[180px] flex flex-col`}>
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-lg ${
                    step.highlight ? 'bg-orange-100' : 'bg-gray-100'
                  } flex items-center justify-center text-gray-700 mb-3`}>
                    {step.icon}
                  </div>

                  {/* Content */}
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
