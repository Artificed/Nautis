import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "./CustomCursor";

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

  const strengths: Strength[] = [
    {
      title: "Strong Work Ethic",
      icon: "✓",
      gradient: "from-orange-200 to-amber-200",
      color: "#fb923c",
    },
    {
      title: "Highly Dedicated",
      icon: "★",
      gradient: "from-pink-200 to-rose-200",
      color: "#f472b6",
    },
    {
      title: "Detail-Oriented",
      icon: "◉",
      gradient: "from-amber-200 to-yellow-200",
      color: "#fbbf24",
    },
    {
      title: "Efficient Time Management",
      icon: "⏱",
      gradient: "from-orange-200 to-rose-200",
      color: "#fb923c",
    },
    {
      title: "Proactive and Punctual",
      icon: "↗",
      gradient: "from-rose-200 to-pink-200",
      color: "#fb7185",
    },
    {
      title: "High Commitment",
      icon: "◆",
      gradient: "from-yellow-200 to-amber-200",
      color: "#facc15",
    },
    {
      title: "Highly Adaptable",
      icon: "↻",
      gradient: "from-orange-200 to-amber-200",
      color: "#fb923c",
    },
    {
      title: "Eager to Innovate and Learn",
      icon: "💡",
      gradient: "from-pink-200 to-rose-200",
      color: "#f472b6",
    },
    {
      title: "Zero Procrastination",
      icon: "⚡",
      gradient: "from-amber-200 to-yellow-200",
      color: "#fbbf24",
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const centerX = canvas.width / (2 * window.devicePixelRatio);
    const centerY = canvas.height / (2 * window.devicePixelRatio);
    const orbitRadius = Math.min(centerX, centerY) * 0.7;
    let time = 0;

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

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

      // Draw center circle
      const gradient = ctx.createLinearGradient(
        centerX - 80, centerY - 80,
        centerX + 80, centerY + 80
      );
      gradient.addColorStop(0, '#fb923c');
      gradient.addColorStop(0.5, '#f43f5e');
      gradient.addColorStop(1, '#fbbf24');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 84, 0, Math.PI * 2);
      ctx.fill();

      // Inner white circle
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 76, 0, Math.PI * 2);
      ctx.fill();

      // Draw "Why PL?" text
      ctx.fillStyle = '#fb923c';
      ctx.font = 'bold 28px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Why', centerX, centerY - 15);   
      ctx.fillText('PL?', centerX, centerY + 15);

      // Draw pulsing ring
      const pulseRadius = 80 + Math.sin(time * 0.05) * 10;
      const pulseAlpha = 0.3 + Math.sin(time * 0.05) * 0.2;
      ctx.strokeStyle = `rgba(251, 146, 60, ${pulseAlpha})`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw orbiting icons
      strengths.forEach((strength, index) => {
        const angle = (index / strengths.length) * Math.PI * 2 + time * 0.01;
        const x = centerX + Math.cos(angle) * orbitRadius;
        const y = centerY + Math.sin(angle) * orbitRadius;

        // Icon circle background
        const iconGradient = ctx.createRadialGradient(x, y, 0, x, y, 30);
        iconGradient.addColorStop(0, strength.color + 'ff');
        iconGradient.addColorStop(1, strength.color + 'aa');
        
        ctx.fillStyle = iconGradient;
        ctx.beginPath();
        ctx.arc(x, y, 64, 0, Math.PI * 2);
        ctx.fill();

        // White border
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Glow effect on hover
        if (hoveredIndex === index) {
          ctx.shadowColor = strength.color;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(x, y, 35, 0, Math.PI * 2);
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        // Draw icon
        ctx.fillStyle = 'white';
        ctx.font = 'bold 24px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(strength.icon, x, y);
      });

      time++;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [strengths, hoveredIndex]);

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const orbitRadius = Math.min(centerX, centerY);

    let foundHover = false;
    const time = performance.now() * 0.01;

    strengths.forEach((_, index) => {
      const angle = (index / strengths.length) * Math.PI * 2 + time;
      const iconX = centerX + Math.cos(angle) * orbitRadius;
      const iconY = centerY + Math.sin(angle) * orbitRadius;
      const distance = Math.sqrt((x - iconX) ** 2 + (y - iconY) ** 2);

      if (distance < 30) {
        setHoveredIndex(index);
        setIsHovering(true);
        foundHover = true;
      }
    });

    if (!foundHover) {
      setHoveredIndex(null);
      setIsHovering(false);
    }
  };

  const handleCanvasMouseLeave = () => {
    setHoveredIndex(null);
    setIsHovering(false);
  };

  return (
    <section
      id="why-me"
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

      {/* Canvas Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-full max-w-2xl aspect-square"
        >
          <canvas
            ref={canvasRef}
            onMouseMove={handleCanvasMouseMove}
            onMouseLeave={handleCanvasMouseLeave}
            className="w-full h-full"
            style={{ cursor: hoveredIndex !== null ? 'pointer' : 'default' }}
          />
          
          {/* Tooltip */}
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
