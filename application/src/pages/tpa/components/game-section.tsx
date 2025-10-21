import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";

export default function GameSection() {
  const { setIsHovering } = useCursor();

  const designPrinciples = [
    {
      title: "Distinct Case Ideas",
      description: "Each game concept explores unique mechanics and genres, ensuring no overlap in core gameplay loops or player experiences.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
    },
    {
      title: "Avoid Repetition",
      description: "Moving beyond generic categories like 'open world' or 'survival' to focus on innovative combinations of mechanics that define truly unique experiences.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
      gradient: "from-amber-500 via-orange-500 to-red-500",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 py-20">
      {/* Unique Background Effects - Grid Pattern with Animated Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated grid lines */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(251, 191, 36, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(251, 191, 36, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        {/* Pulsing corner accents */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-purple-300/20 to-pink-300/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-300/20 to-blue-300/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-20 h-20 border-2 border-amber-400/30"
          animate={{
            rotate: [0, 180, 360],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-16 h-16 border-2 border-purple-400/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4"
          animate={{
            rotate: [0, 360],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-14 h-14 border-2 border-pink-400/30" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
            TPA Game Approach
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Core principles for creating innovative and unique game experiences
          </p>
        </motion.div>

        {/* Design Principles Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {designPrinciples.map((principle, index) => (
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
                  duration: 3,
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
                  className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                />

                {/* Icon */}
                <div
                  className="w-20 h-20 mb-6 relative z-10 text-white transition-transform duration-500 ease-out group-hover:rotate-[360deg]"
                >
                  <div className={`w-full h-full rounded-xl bg-gradient-to-br ${principle.gradient} flex items-center justify-center shadow-lg`}>
                    {principle.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">
                    {principle.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                {/* Corner accent */}
                <motion.div
                  className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
