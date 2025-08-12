'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

type Star = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

type BackgroundProps = {
  speed?: number; 
}

const AppBackground = ({ 
  speed = 0.2 
}: BackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme();

  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const scatteredPatterns = [
    { seed: 42 },    
    { seed: 127 },   
    { seed: 256 },   
    { seed: 512 },   
    { seed: 768 },   
    { seed: 1024 },
  ];

  // Select a random pattern on component mount
  const selectedPattern = useRef(
    scatteredPatterns[Math.floor(Math.random() * scatteredPatterns.length)]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const initStars = () => {
      const baseWidth = 1920; 
      const baseHeight = 1080; 
      const baseDensity = 220; 
      
      // Scale star count based on current screen size
      const screenRatio = (canvas.width * canvas.height) / (baseWidth * baseHeight);
      const starCount = Math.max(120, Math.floor(baseDensity * screenRatio));
      
      starsRef.current = [];
      const pattern = selectedPattern.current;
      let seed = pattern.seed; 

      for (let i = 0; i < starCount; i++) {
        // Generate completely scattered positions using seeded random
        const normalizedX = seededRandom(seed++);
        const normalizedY = seededRandom(seed++);
        
        // Ensure even distribution across the entire screen
        const finalX = normalizedX * 0.92 + 0.04;
        const finalY = normalizedY * 0.92 + 0.04;

        // Scale to actual screen dimensions
        const actualX = finalX * canvas.width;
        const actualY = finalY * canvas.height;

        const radiusSeed = seededRandom(seed++);
        const opacitySeed = seededRandom(seed++);
        const vxSeed = seededRandom(seed++);
        const vySeed = seededRandom(seed++);

        starsRef.current.push({
          x: actualX,
          y: actualY,
          vx: (vxSeed - 0.5) * 0.1 * speed,
          vy: (vySeed - 0.5) * 0.1 * speed, 
          radius: radiusSeed * 2 + 0.5,
          opacity: opacitySeed * 0.8 + 0.2,
        });
      }
    };
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(window.innerHeight, document.documentElement.scrollHeight);
      initStars();
    };
    resizeCanvas();

    // Separate resize handler that doesn't recreate initStars
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(window.innerHeight, document.documentElement.scrollHeight);
      initStars();
    };
    window.addEventListener('resize', handleResize);
   
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const stars = starsRef.current;
      const isDark = resolvedTheme === 'dark';
      const connectionDistance = Math.min(150, Math.max(80, canvas.width / 12));
      const mouseDistance = Math.min(180, Math.max(100, canvas.width / 10));

      // Update and draw stars
      stars.forEach((star, i) => {
        // Update position
        star.x += star.vx;
        star.y += star.vy;

        const padding = 20;
        if (star.x < padding || star.x > canvas.width - padding) star.vx *= -1;
        if (star.y < padding || star.y > canvas.height - padding) star.vy *= -1;

        // Keep stars within bounds
        star.x = Math.max(padding, Math.min(canvas.width - padding, star.x));
        star.y = Math.max(padding, Math.min(canvas.height - padding, star.y));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        if (isDark) {
          ctx.fillStyle = `rgba(156, 163, 175, ${star.opacity * 0.9})`;
        } else {
          ctx.fillStyle = `rgba(31, 41, 55, ${star.opacity * 0.8})`;
        }
        ctx.fill();

        stars.slice(i + 1).forEach((otherStar) => {
          const dx = star.x - otherStar.x;
          const dy = star.y - otherStar.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.4;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            if (isDark) {
              ctx.strokeStyle = `rgba(107, 114, 128, ${opacity})`;
            } else {
              ctx.strokeStyle = `rgba(17, 24, 39, ${opacity})`;
            }
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });

        // Draw connection to mouse (if close enough) - DARKER MOUSE LINES
        const mouseDx = star.x - mouseRef.current.x;
        const mouseDy = star.y - mouseRef.current.y;
        const mouseDistanceActual = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (mouseDistanceActual < mouseDistance) {
          const opacity = (1 - mouseDistanceActual / mouseDistance) * 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          if (isDark) {
           ctx.strokeStyle = `rgba(156, 163, 175, ${opacity})`;
          } else {
            ctx.strokeStyle = `rgba(17, 24, 39, ${opacity})`;
          }
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [speed, resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full transition-opacity duration-300"
      style={{
        background: 'transparent',
        minHeight: '100vh',
      }}
    />
  );
};

export default AppBackground;