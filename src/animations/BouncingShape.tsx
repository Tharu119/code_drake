"use client";

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export default function BouncingShape() {
  const controls = useAnimation(); // For controlling the animation
  const [hovered, setHovered] = useState(false);

  const handleHoverStart = () => {
    setHovered(true);
    controls.start({
      scale: 1.5,
      rotate: 180,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  const handleHoverEnd = () => {
    setHovered(false);
    controls.start({
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  return (
    <motion.div
      className="absolute top-1/2 left-0 w-20 h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full shadow-xl cursor-pointer"
      animate={controls}
      initial={{
        x: "0%",
        rotate: 0,
      }}
      whileHover={{
        boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.8)",
        background: "linear-gradient(to right, #ff7eb3, #ff758c, #ff5b79)",
      }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    ></motion.div>
  );
}
