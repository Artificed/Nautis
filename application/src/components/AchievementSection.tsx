import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCursor } from "./CustomCursor";

interface Achievement {
  title: string;
  year: string;
  description: string;
  image: string;
  link: string;
}

export default function AchievementSection() {
  const { setIsHovering } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const achievements: Achievement[] = [
    {
      title: "Microsoft AI for Accessibility 2024",
      year: "2024",
      description: "Finalist Round",
      image: "https://picsum.photos/300?random=1",
      link: "https://github.com/Artificed",
    },
    {
      title: "Codefest Nextgen Agents Hackathon",
      year: "2024",
      description: "Competitor",
      image: "https://picsum.photos/300?random=2",
      link: "https://github.com/Artificed",
    },
    {
      title: "SLC Awards Even 2024/2025",
      year: "2024/25",
      description: "Best Assistant",
      image: "https://picsum.photos/300?random=3",
      link: "https://github.com/Artificed",
    },
    {
      title: "SLC Awards Even 2024/2025",
      year: "2024/25",
      description: "Best TPA",
      image: "https://picsum.photos/300?random=4",
      link: "https://github.com/Artificed",
    },
    {
      title: "SLC Awards Even 2024/2025",
      year: "2024/25",
      description: "Best Qualification",
      image: "https://picsum.photos/300?random=5",
      link: "https://github.com/Artificed",
    },
  ];

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex > achievements.length - 3) nextIndex = 0;
      if (nextIndex < 0) nextIndex = achievements.length - 3;
      return nextIndex;
    });
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleManualPaginate = (direction: number) => {
    setIsPaused(true);
    paginate(direction);
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 right-20 w-[500px] h-[400px] rounded-full bg-gradient-to-br from-orange-300/40 to-rose-300/30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-amber-300/35 to-pink-300/25 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-rose-300/30 to-amber-300/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-32 left-24 w-40 h-40 rounded-3xl bg-gradient-to-br from-orange-200/50 to-amber-200/40 opacity-60 blur-lg"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-48 right-32 w-28 h-28 rounded-2xl bg-gradient-to-br from-pink-200/45 to-rose-200/35 opacity-70 blur-md"
          animate={{
            y: [0, 40, 0],
            rotate: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-44 right-16 w-36 h-36 rounded-3xl bg-gradient-to-br from-amber-200/50 to-yellow-200/40 opacity-65 blur-xl"
          animate={{
            y: [0, -25, 0],
            rotate: [45, 65, 45],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-28 left-32 w-44 h-44 rounded-3xl bg-gradient-to-br from-rose-200/45 to-pink-200/35 opacity-60 blur-xl"
          animate={{
            y: [0, 35, 0],
            rotate: [-12, 8, -12],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div 
          className="absolute top-1/4 right-1/3 w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-200/40 to-orange-200/30 opacity-55 blur-lg"
          animate={{
            y: [0, -20, 0],
            rotate: [90, 110, 90],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-20 h-20 rounded-xl bg-gradient-to-br from-rose-200/35 to-pink-200/25 opacity-50 blur-md"
          animate={{
            y: [0, 30, 0],
            rotate: [45, 25, 45],
            x: [0, 25, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        
        {/* Small sparkle elements */}
        <motion.div 
          className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-orange-300/60 to-rose-300/50 opacity-70 blur-sm"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-2/3 left-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-amber-300/55 to-yellow-300/45 opacity-60 blur-sm"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center pb-4"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Awards & Recognition
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A collection of awards and achievements throughout my journey
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div 
          className="relative flex items-center justify-center gap-6 min-h-[600px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Previous Button */}
          <motion.button
            onClick={() => handleManualPaginate(-1)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex-shrink-0 p-4 rounded-full bg-white/80 backdrop-blur-sm border border-orange-200/50 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group z-10"
            aria-label="Previous achievements"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 text-orange-600 group-hover:text-rose-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Cards Container - Fixed width to show exactly 3 cards */}
          <motion.div 
            className="overflow-hidden px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="overflow-visible py-8" style={{ width: 'calc(3 * 320px + 2 * 2rem)' }}>
              <motion.div 
                className="flex gap-8"
                animate={{ 
                  x: `calc(-${currentIndex} * (320px + 2rem))` 
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={`${achievement.title}-${index}`}
                  className="relative bg-white/70 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden border border-orange-200/30 group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 flex flex-col flex-shrink-0"
                  style={{ width: '320px', height: '520px' }}
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden rounded-t-3xl" style={{ height: '280px' }}>
                    <motion.img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <span className="text-orange-600 font-bold text-sm">{achievement.year}</span>
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-3 text-gray-800 leading-tight" style={{ height: '3.5rem', overflow: 'hidden' }}>
                      {achievement.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                      {achievement.description}
                    </p>

                    {/* Link Button */}
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-400 to-rose-400 text-white rounded-full text-sm font-medium hover:from-orange-600 hover:to-rose-600 transition-all duration-300 hover:shadow-lg hover:scale-105 group w-fit mt-auto"
                    >
                      <span>View Details</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </a>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-rose-200/20 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-amber-200/20 to-pink-200/20 rounded-full blur-2xl pointer-events-none"></div>
                </motion.div>
              ))}
            </motion.div>
            </div>
          </motion.div>

          <motion.button
            onClick={() => handleManualPaginate(1)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex-shrink-0 p-4 rounded-full bg-white/80 backdrop-blur-sm border border-orange-200/50 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group z-10"
            aria-label="Next achievements"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 text-orange-600 group-hover:text-rose-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-2 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {Array.from({ length: achievements.length - 2 }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setIsPaused(true);
                setCurrentIndex(index);
                setTimeout(() => setIsPaused(false), 10000);
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-gradient-to-r from-orange-500 to-rose-500"
                  : "w-2 h-2 bg-gray-300 hover:bg-orange-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}