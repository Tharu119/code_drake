"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function FloatingStars() {
  // Generate random stars
  const stars = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 15, // Star size: 15px to 35px
      x: Math.random() * 100, // Initial x position (percentage)
      y: Math.random() * 100, // Initial y position (percentage)
      duration: Math.random() * 8 + 6, // Animation duration: 6-14 seconds
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute star-shape shadow-lg"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}%`,
            left: `${star.x}%`,
            background: "linear-gradient(to right, #1e293b, #64748b)", // Default dark gradient
          }}
          animate={{
            x: ["0%", "40%", "-40%", "0%"], // Move left and right smoothly
            y: ["0%", "-30%", "30%", "0%"], // Move up and down smoothly
            scale: [1, 1.2, 1], // Subtle scaling
            background: [
              "linear-gradient(to right, #1e293b, #64748b)", // Dark gradient
              "linear-gradient(to right, #ff6d6d, #42d392)", // Highlight gradient 1
              "linear-gradient(to right, #64748b, #1e293b)", // Dark gradient again
              "linear-gradient(to right, #42d392, #7a6df3)", // Highlight gradient 2
            ], // Smooth color transitions
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        ></motion.div>
      ))}
    </div>
  );
}
