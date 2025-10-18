import { useState, useEffect, createContext, useContext } from "react";
import type { ReactNode } from "react";

interface CursorContextType {
  setIsHovering: (hovering: boolean) => void;
}

const CursorContext = createContext<CursorContextType>({
  setIsHovering: () => {},
});

export const useCursor = () => useContext(CursorContext);

export default function CustomCursor({ children }: { children: ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <CursorContext.Provider value={{ setIsHovering }}>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s, height 0.3s",
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-300 ${
            isHovering ? "w-12 h-12" : "w-6 h-6"
          }`}
        />
      </div>

      {/* Outer cursor ring */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "left 0.15s, top 0.15s",
        }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-gray-400 opacity-30" />
      </div>

      {children}
    </CursorContext.Provider>
  );
}
