import { useRef, useState } from "react";
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
      title: "SLC Awards Event 24/25",
      year: "2024/25",
      description: "Best Assistant",
      image: "https://picsum.photos/300?random=3",
      link: "https://github.com/Artificed",
    },
    {
      title: "SLC Awards Event 24/25",
      year: "2024/25",
      description: "Best TPA",
      image: "https://picsum.photos/300?random=4",
      link: "https://github.com/Artificed",
    },
    {
      title: "SLC Awards Event 24/25",
      year: "2024/25",
      description: "Best Qualification",
      image: "https://picsum.photos/300?random=5",
      link: "https://github.com/Artificed",
    },
  ];

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = 0;
      if (nextIndex > achievements.length - 3) nextIndex = achievements.length - 3;
      return nextIndex;
    });
  };

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-32 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/30 to-rose-200/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-amber-200/25 to-pink-200/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-rose-200/20 to-amber-200/15 blur-3xl animate-pulse"></div>
        
        <div className="absolute top-20 left-20 w-32 h-32 rounded-3xl bg-gradient-to-br from-orange-100/40 to-amber-100/30 opacity-80 blur-xl animate-bounce rotate-12"></div>
        <div className="absolute top-40 right-40 w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-100/35 to-rose-100/25 opacity-75 blur-lg animate-bounce -rotate-6" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 rounded-3xl bg-gradient-to-br from-amber-100/40 to-yellow-100/30 opacity-70 blur-xl animate-bounce rotate-45" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-40 w-36 h-36 rounded-3xl bg-gradient-to-br from-rose-100/35 to-pink-100/25 opacity-65 blur-xl animate-bounce -rotate-12" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-100/30 to-orange-100/20 opacity-60 blur-lg animate-bounce rotate-90" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-xl bg-gradient-to-br from-rose-100/25 to-pink-100/20 opacity-55 blur-lg animate-pulse rotate-45"></div>
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
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Awards & Recognition
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of awards and achievements throughout my journey
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center gap-6 min-h-[600px]">
          {/* Previous Button */}
          <button
            onClick={() => paginate(-1)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            disabled={currentIndex === 0}
            className="flex-shrink-0 p-4 rounded-full bg-white/80 backdrop-blur-sm border border-orange-200/50 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 z-10"
            aria-label="Previous achievements"
          >
            <svg className="w-6 h-6 text-orange-600 group-hover:text-rose-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Container - Fixed width to show exactly 3 cards */}
          <div className="overflow-hidden px-4" >
            <div className="overflow-visible py-8" style={{ width: 'calc(3 * 320px + 2 * 2rem)' }}>
              <motion.div 
                className="flex gap-8"
                animate={{ 
                  x: `calc(-${currentIndex} * (320px + 2rem))` 
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={`${achievement.title}-${index}`}
                  className="relative bg-white/70 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden border border-orange-200/30 group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 flex flex-col flex-shrink-0"
                  style={{ width: '320px', height: '520px' }}
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden rounded-t-3xl" style={{ height: '240px' }}>
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
          </div>

          {/* Next Button */}
          <button
            onClick={() => paginate(1)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            disabled={currentIndex >= achievements.length - 3}
            className="flex-shrink-0 p-4 rounded-full bg-white/80 backdrop-blur-sm border border-orange-200/50 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 z-10"
            aria-label="Next achievements"
          >
            <svg className="w-6 h-6 text-orange-600 group-hover:text-rose-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: achievements.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-gradient-to-r from-orange-500 to-rose-500"
                  : "w-2 h-2 bg-gray-300 hover:bg-orange-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}