import { useState, useEffect, createContext, useContext } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import type { ReactNode } from "react";

interface CursorContextType {
  setIsHovering: (hovering: boolean) => void;
}

const CursorContext = createContext<CursorContextType>({
  setIsHovering: () => {},
});

export const useCursor = () => useContext(CursorContext);

export default function CustomCursor({ children }: { children: ReactNode }) {
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(window.outerWidth / 2);
  const cursorY = useMotionValue(-20);

  const slowSpringConfig = { damping: 30, stiffness: 200, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, slowSpringConfig);
  const cursorYSpring = useSpring(cursorY, slowSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <CursorContext.Provider value={{ setIsHovering }}>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: isHovering ? 48 : 24,
            height: isHovering ? 48 : 24,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border-2 border-gray-400 opacity-30"
          animate={{
            width: isHovering ? 56 : 40,
            height: isHovering ? 56 : 40,
            scale: isHovering ? 1.1 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 28,
          }}
        />
      </motion.div>

      {children}
    </CursorContext.Provider>
  );
}
