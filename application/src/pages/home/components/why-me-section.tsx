import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../../common/shared/custom-cursor";

interface Strength {
  title: string;
  icon: string;
  gradient: string;
  color: string;
}

export default function WhyMeSection() {
  const { setIsHovering } = useCursor();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const animationFrameRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const lastMouseMoveTime = useRef<number>(0);
  const isHoveringRef = useRef<boolean>(false);

  const strengths: Strength[] = [
    {
      title: "Strong Work Ethic",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      gradient: "from-orange-200 to-amber-200",
      color: "#fb923c",
    },
    {
      title: "Highly Dedicated",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
      gradient: "from-pink-200 to-rose-200",
      color: "#f472b6",
    },
    {
      title: "Detail-Oriented",
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
      gradient: "from-amber-200 to-yellow-200",
      color: "#fbbf24",
    },
    {
      title: "Efficient Time Management",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      gradient: "from-orange-200 to-rose-200",
      color: "#fb923c",
    },
    {
      title: "Proactive and Punctual",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      gradient: "from-rose-200 to-pink-200",
      color: "#fb7185",
    },
    {
      title: "High Commitment",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      gradient: "from-yellow-200 to-amber-200",
      color: "#facc15",
    },
    {
      title: "Highly Adaptable",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      gradient: "from-orange-200 to-amber-200",
      color: "#fb923c",
    },
    {
      title: "Eager to Innovate and Learn",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      gradient: "from-pink-200 to-rose-200",
      color: "#f472b6",
    },
    {
      title: "Zero Procrastination",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      gradient: "from-amber-200 to-yellow-200",
      color: "#fbbf24",
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true
    });
    if (!ctx) return;

    let centerX = 0;
    let centerY = 0;
    let orbitRadius = 0;

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio;
      
      centerX = rect.width / 2;
      centerY = rect.height / 2;
      orbitRadius = Math.min(centerX, centerY) * 0.7;
      
      const newWidth = rect.width * dpr;
      const newHeight = rect.height * dpr;
      
      if (canvas.width !== newWidth || canvas.height !== newHeight) {
        canvas.width = newWidth;
        canvas.height = newHeight;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const createHexagonPath = (x: number, y: number, radius: number): Path2D => {
      const path = new Path2D();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 2 + Math.PI / 6;
        const hx = x + radius * Math.cos(angle);
        const hy = y + radius * Math.sin(angle);
        if (i === 0) {
          path.moveTo(hx, hy);
        } else {
          path.lineTo(hx, hy);
        }
      }
      path.closePath();
      return path;
    };

    const drawSVGPath = (pathData: string, x: number, y: number, size: number, color: string) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(size / 12, size / 12);
      ctx.translate(-12, -12);
      
      const path = new Path2D(pathData);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke(path);
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, centerX * 2, centerY * 2);

      // Draw orbit rings
      ctx.strokeStyle = 'rgba(251, 146, 60, 0.15)';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbitRadius, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(251, 113, 133, 0.1)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbitRadius * 1.15, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw center hexagon
      const gradient = ctx.createLinearGradient(
        centerX - 80, centerY - 80,
        centerX + 80, centerY + 80
      );
      gradient.addColorStop(0, '#fb923c');
      gradient.addColorStop(0.5, '#f43f5e');
      gradient.addColorStop(1, '#fbbf24');

      const outerHex = createHexagonPath(centerX, centerY, 84);
      ctx.fillStyle = gradient;
      ctx.fill(outerHex);

      // Inner white hexagon
      const innerHex = createHexagonPath(centerX, centerY, 76);
      ctx.fillStyle = 'white';
      ctx.fill(innerHex);

      // Draw center SVG icon (user profile icon)
      const centerIconPath = "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z";
      drawSVGPath(centerIconPath, centerX, centerY, 48, '#fb923c');

      // Draw pulsing hexagon
      const pulseRadius = 80 + Math.sin(timeRef.current * 0.03) * 8;
      const pulseAlpha = 0.3 + Math.sin(timeRef.current * 0.03) * 0.2;
      const pulseHex = createHexagonPath(centerX, centerY, pulseRadius);
      ctx.strokeStyle = `rgba(251, 146, 60, ${pulseAlpha})`;
      ctx.lineWidth = 3;
      ctx.stroke(pulseHex);

      // Draw orbiting icons
      strengths.forEach((strength, index) => {
        const angle = (index / strengths.length) * Math.PI * 2 + timeRef.current * 0.002;
        const x = centerX + Math.cos(angle) * orbitRadius;
        const y = centerY + Math.sin(angle) * orbitRadius;

        // Icon circle background
        const iconGradient = ctx.createRadialGradient(x, y, 0, x, y, 30);
        iconGradient.addColorStop(0, strength.color + 'ff');
        iconGradient.addColorStop(1, strength.color + 'aa');
        
        ctx.fillStyle = iconGradient;
        ctx.beginPath();
        ctx.arc(x, y, 56, 0, Math.PI * 2);
        ctx.fill();

        // White border
        ctx.beginPath();
        ctx.arc(x, y, 56, 0, Math.PI * 2);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Draw SVG icon
        drawSVGPath(strength.icon, x, y, 28, 'white');
      });

      timeRef.current++;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const now = performance.now();
    if (now - lastMouseMoveTime.current < 16) return;
    lastMouseMoveTime.current = now;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const orbitRadius = Math.min(centerX, centerY) * 0.7;

    let foundHover = false;
    const currentTime = timeRef.current;

    for (let index = 0; index < strengths.length; index++) {
      const angle = (index / strengths.length) * Math.PI * 2 + currentTime * 0.002;
      const iconX = centerX + Math.cos(angle) * orbitRadius;
      const iconY = centerY + Math.sin(angle) * orbitRadius;
      const distance = Math.sqrt((x - iconX) ** 2 + (y - iconY) ** 2);

      if (distance < 60) {
        foundHover = true;
        if (hoveredIndex !== index) {
          setHoveredIndex(index);
        }
        break;
      }
    }

    if (foundHover !== isHoveringRef.current) {
      isHoveringRef.current = foundHover;
      setIsHovering(foundHover);
    }

    if (!foundHover && hoveredIndex !== null) {
      setHoveredIndex(null);
    }
  };

  const handleCanvasMouseLeave = () => {
    setHoveredIndex(null);
    isHoveringRef.current = false;
    setIsHovering(false);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-32 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/30 to-rose-200/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-amber-200/25 to-orange-200/20 blur-3xl animate-float-slower animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-rose-200/20 to-amber-200/15 blur-3xl animate-pulse-slow"></div>
        
        <div className="absolute top-20 left-20 w-32 h-32 rounded-3xl bg-gradient-to-br from-orange-100/40 to-amber-100/30 opacity-80 blur-xl animate-float rotate-12"></div>
        <div className="absolute top-40 right-40 w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-100/35 to-rose-100/25 opacity-75 blur-lg animate-float-slow animation-delay-1000 -rotate-6"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 rounded-3xl bg-gradient-to-br from-amber-100/40 to-yellow-100/30 opacity-70 blur-xl animate-float-slower animation-delay-2000 rotate-45"></div>
        <div className="absolute bottom-32 left-40 w-36 h-36 rounded-3xl bg-gradient-to-br from-pink-100/35 to-rose-100/25 opacity-65 blur-xl animate-float animation-delay-3000 -rotate-12"></div>
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-between max-w-7xl mx-auto px-8 lg:px-16 translate-x-12 translate-y-4 gap-12">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 max-w-xl"
        >
          <h2 className="text-6xl font-bold mb-6 pb-2 bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
            Why Me?
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            A combination of technical excellence, unwavering dedication, and a proven track record of delivering exceptional results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full max-w-2xl aspect-square"
        >
          <canvas
            ref={canvasRef}
            onMouseMove={handleCanvasMouseMove}
            onMouseLeave={handleCanvasMouseLeave}
            className="w-full h-full"
            style={{ cursor: hoveredIndex !== null ? 'pointer' : 'default' }}
          />
          
          {hoveredIndex !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-2xl pointer-events-none whitespace-nowrap"
            >
              {strengths[hoveredIndex].title}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
