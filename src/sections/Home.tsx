"use client";

import { motion } from "framer-motion";
import FloatingBalls from "@/animations/FloatingBalls";
import BounceEffect from "@/animations/BounceEffect";
import { Link } from "react-scroll";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-dark-gradient text-white overflow-hidden"
    >
      {/* Animated Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-95 blur-md animate-gradientShift"></div>

      {/* Floating Balls */}
      <FloatingBalls />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, type: "spring" }}
        className="text-center z-10"
      >
        {/* Bounce Effect on Text */}
        <BounceEffect>
          <h1 className="text-5xl md:text-7xl font-extrabold text-neon">
            Welcome to <span className="text-cyan-500">Code Drake</span>
          </h1>
        </BounceEffect>

        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl font-medium text-gray-300"
        >
          Transforming your ideas into next-gen solutions.
        </motion.p>

        {/* Link to Service Section with Bounce Effect */}
        <BounceEffect>
          <Link
            to="services"
            smooth={true}
            offset={-70}
            duration={500}
          >
            <motion.button
              whileHover={{
                scale: 1.2,
                boxShadow: "0px 0px 30px rgba(0, 255, 255, 0.8)",
              }}
              whileTap={{ scale: 0.9 }}
              className="mt-8 px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 text-white shadow-lg hover:from-blue-700 hover:to-cyan-500 transition-all"
            >
              Get Started
            </motion.button>
          </Link>
        </BounceEffect>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-900 to-blue-600 rounded-full opacity-60 blur-lg animate-float"
        animate={{
          y: [0, 30, 0],
          x: [0, 15, 0],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-900 to-purple-600 rounded-full opacity-60 blur-lg animate-float"
        animate={{
          y: [0, -20, 0],
          x: [0, -10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      ></motion.div>

      {/* Hero Action Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-full opacity-40 blur-3xl"></div>
      </motion.div>
    </section>
  );
}
