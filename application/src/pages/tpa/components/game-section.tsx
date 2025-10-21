import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";
import { useState } from "react";

export default function GameSection() {
  const { setIsHovering } = useCursor();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const gameIdeas = [
    {
      title: "Puzzle Platformer",
      subtitle: "Mind-Bending Mechanics",
      description: "A physics-based puzzle game where players manipulate time and gravity to solve environmental challenges. Each level introduces unique mechanics that build upon previous concepts.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      features: ["Time manipulation", "Gravity shifts", "Portal mechanics", "Multi-dimensional puzzles"],
    },
    {
      title: "Rhythm Combat",
      subtitle: "Musical Warfare",
      description: "An action game where combat is synchronized with dynamic music. Players must attack, dodge, and counter in rhythm to defeat enemies and bosses with escalating difficulty.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      ),
      gradient: "from-pink-500 via-rose-500 to-red-500",
      features: ["Beat-matching combat", "Dynamic soundtracks", "Boss choreography", "Combo systems"],
    },
    {
      title: "Stealth Detective",
      subtitle: "Investigation & Infiltration",
      description: "A noir-inspired detective game combining stealth mechanics with investigation. Players gather clues while avoiding detection, piecing together mysteries through evidence and deduction.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
          <path d="M11 8v6l4 2" />
        </svg>
      ),
      gradient: "from-slate-600 via-gray-700 to-zinc-800",
      features: ["Evidence collection", "Shadow mechanics", "Dialogue trees", "Multiple endings"],
    },
    {
      title: "Card-Based RPG",
      subtitle: "Tactical Deck Building",
      description: "A strategic RPG where abilities are cards in your deck. Players build unique decks, manage resources, and make tactical decisions in turn-based encounters with permanent consequences.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      ),
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      features: ["Deck customization", "Resource management", "Permadeath mode", "Branching narratives"],
    },
    {
      title: "Cooperative Horror",
      subtitle: "Asymmetric Survival",
      description: "A multiplayer horror game with asymmetric gameplay. One player controls the environment and threats while others must cooperate to survive, communicate, and escape.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      gradient: "from-red-700 via-orange-600 to-amber-600",
      features: ["Voice proximity", "Limited resources", "Dynamic AI", "Role specialization"],
    },
    {
      title: "Tower Defense RTS",
      subtitle: "Strategic Construction",
      description: "A hybrid tower defense and real-time strategy game. Players build defensive structures while managing economy, research tech trees, and deploy units to counter evolving threats.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      features: ["Tech tree progression", "Wave customization", "Unit upgrades", "Map editor"],
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

        {/* Diagonal moving lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(168, 85, 247, 0.08) 48%, rgba(168, 85, 247, 0.08) 52%, transparent 52%)',
            backgroundSize: '100px 100px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
              TPA PROJECT
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Game Design Concepts
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Distinct case ideas showcasing unique gameplay mechanics and innovative design approaches
          </p>
        </motion.div>

        {/* Game Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {gameIdeas.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => {
                setIsHovering(true);
                setHoveredCard(index);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                setHoveredCard(null);
              }}
              className="relative group"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 h-full overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                />

                {/* Icon */}
                <motion.div
                  className={`mb-6 text-gray-700 group-hover:text-white transition-colors duration-300 relative z-10`}
                  animate={hoveredCard === index ? { rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${game.gradient} flex items-center justify-center shadow-lg`}>
                    {game.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-gray-900 transition-colors">
                    {game.title}
                  </h3>
                  <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${game.gradient} bg-clip-text text-transparent`}>
                    {game.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {game.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Key Features
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {game.features.map((feature, featureIndex) => (
                        <motion.span
                          key={featureIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                          className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${game.gradient} text-white font-medium shadow-sm`}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <motion.div
                  className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${game.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
