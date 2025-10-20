import { motion } from "framer-motion";
import { useCursor } from "../shared/custom-cursor";

export default function Footer() {
  const { setIsHovering } = useCursor();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      gradient: "from-purple-200 to-pink-200",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      gradient: "from-blue-200 to-cyan-200",
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      gradient: "from-cyan-200 to-blue-200",
    },
    {
      name: "Email",
      href: "mailto:paul@example.com",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-amber-200 to-orange-200",
    },
  ];

  return (
    <footer className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-32 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/30 to-amber-200/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-purple-200/25 to-pink-200/20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-cyan-200/20 to-blue-200/15 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 rounded-3xl bg-gradient-to-br from-orange-100/40 to-amber-100/30 opacity-80 blur-xl"
          animate={{
            rotate: [12, 24, 12],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-40 w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-100/35 to-rose-100/25 opacity-75 blur-lg"
          animate={{
            rotate: [-6, 6, -6],
            x: [0, 10, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-28 h-28 rounded-3xl bg-gradient-to-br from-cyan-100/40 to-blue-100/30 opacity-70 blur-xl"
          animate={{
            rotate: [45, 60, 45],
            x: [0, -15, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-16 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            {"Let's Connect".split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  y: -10,
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.2,
                  color: ["#ea580c", "#f59e0b", "#ea580c"],
                  transition: { duration: 0.4 }
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <motion.p 
            className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Thanks for visiting! Feel free to reach out if you'd like to collaborate or just say hi.
          </motion.p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-8 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 * index,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block p-4 rounded-2xl bg-gradient-to-br ${social.gradient} backdrop-blur-sm shadow-lg text-gray-700 overflow-hidden group`}
                aria-label={social.name}
                whileHover={{ 
                  scale: 1.15, 
                  y: -10,
                  rotate: [0, -8, 8, -8, 0],
                  transition: { duration: 0.4 }
                }}
                whileTap={{ 
                  scale: 0.9,
                  rotate: -5
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  y: {
                    duration: 2 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                }}
              >
                <motion.div>
                  {social.icon}
                </motion.div>
                
                {/* Ripple effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{
                    scale: 1.5,
                    opacity: [0, 0.3, 0],
                    transition: { duration: 0.6 }
                  }}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)`
                  }}
                />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-600 text-sm"
        >
          <p>
            {"© ".split("").map((char, i) => (
              <motion.span
                key={`copy-${i}`}
                className="inline-block"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.1
                }}
              >
                {char}
              </motion.span>
            ))}
            {currentYear}{" "}
            {"Paul Tsai Adinata. Crafted with passion".split("").map((char, i) => (
              <motion.span
                key={`text-${i}`}
                className="inline-block"
                whileHover={{
                  scale: 1.3,
                  color: "#ea580c",
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}{" "}
            <motion.span
              className="inline-block"
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              ✨
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
