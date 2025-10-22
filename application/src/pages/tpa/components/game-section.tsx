import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";
import puzzlePiece from "../../../assets/puzzle-piece.svg";

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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 right-1/2 text-purple-400/15"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-1/8 left-1/3 w-32 h-32 border-4 border-amber-300/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 opacity-30"
          animate={{
            rotate: [0, 360],
            scale: [2, 2.2, 2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <img src={puzzlePiece} alt="" className="w-full h-full" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 max-w-2xl pl-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 mt-16"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
              TPA GAME
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
            New Ideas
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Core principles for creating innovative and unique game experiences
          </p>
        </motion.div>

        <div className="relative" style={{ minHeight: '300px' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="absolute top-0 left-1/4 -translate-x-1/2 w-full md:w-[480px] group cursor-grab active:cursor-grabbing"
          >
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 h-full overflow-hidden">
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${designPrinciples[0].gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
              />

              <div className="relative z-10 flex items-start gap-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${designPrinciples[0].gradient} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {designPrinciples[0].icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {designPrinciples[0].title}
                  </h3>
                  <p className="text-md text-gray-600 leading-relaxed">
                    {designPrinciples[0].description}
                  </p>
                </div>
              </div>

              <motion.div
                className={`absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r ${designPrinciples[0].gradient}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="absolute top-8 right-1/4 translate-x-1/2 w-full md:w-[470px] group cursor-grab active:cursor-grabbing"
          >
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 h-full overflow-hidden">
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${designPrinciples[1].gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
              />

              <div className="relative z-10 flex items-start gap-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${designPrinciples[1].gradient} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {designPrinciples[1].icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {designPrinciples[1].title}
                  </h3>
                  <p className="text-md text-gray-600 leading-relaxed">
                    {designPrinciples[1].description}
                  </p>
                </div>
              </div>

              <motion.div
                className={`absolute top-0 right-0 w-2 h-full bg-gradient-to-b ${designPrinciples[1].gradient}`}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
