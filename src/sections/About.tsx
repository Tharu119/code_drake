"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="aboutus"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-300 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-32 right-10 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
        className="text-4xl font-bold text-center text-[#1A1A1A] mb-8 relative z-10"
      >
        About Us
      </motion.h2>

      {/* Paragraph with Enhanced Hover Effect */}
      <motion.p
        whileHover={{
          scale: 1.1, // Slight zoom on hover
          color: "#1F2937", // Darker premium text
          backgroundColor: "#F8FAFC", // Soft and smooth light blue-gray background
          boxShadow: "0px 8px 20px rgba(31, 41, 55, 0.1)", // Subtle but sharp shadow
        }}
        transition={{ duration: 0.3 }}
        className="text-lg text-center max-w-2xl leading-relaxed text-gray-700 relative z-10 px-6 py-4 rounded-lg shadow-md transition-all duration-300 border border-gray-200" // Added border for smooth edges
      >
        Code Drake is a cutting-edge development company specializing in
        building advanced and visually stunning web solutions. With a team of
        experienced professionals, we focus on delivering the highest quality
        services to help your business thrive. From innovative web development
        to intuitive UI/UX design, we bring your vision to life with precision
        and creativity.
      </motion.p>

      {/* Team Photo with Hover Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-10 w-full max-w-4xl relative z-10 group"
      >
        <img
          src="team-photo.jpg"
          alt="Our Team"
          className="rounded-lg shadow-lg w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      </motion.div>

      {/* Highlights Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl px-6 relative z-10"
      >
        {/* Highlight 1 */}
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: -2,
            transition: { duration: 0.5, type: "spring" },
          }}
          className="flex flex-col items-center group"
        >
          <div className="bg-blue-600 text-white text-4xl p-4 rounded-full shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-blue-700">
            🚀
          </div>
          <h3 className="mt-4 text-xl font-bold text-[#020202] group-hover:text-blue-700 transition-colors duration-300">
            Innovation
          </h3>
          <p className="text-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            We bring innovative ideas to the forefront of every project.
          </p>
        </motion.div>

        {/* Highlight 2 */}
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 2,
            transition: { duration: 0.5, type: "spring" },
          }}
          className="flex flex-col items-center group"
        >
          <div className="bg-purple-600 text-white text-4xl p-4 rounded-full shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-purple-700">
            🎨
          </div>
          <h3 className="mt-4 text-xl font-bold text-[#020202] group-hover:text-purple-700 transition-colors duration-300">
            Creativity
          </h3>
          <p className="text-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            Delivering creative and visually stunning solutions.
          </p>
        </motion.div>

        {/* Highlight 3 */}
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: -2,
            transition: { duration: 0.5, type: "spring" },
          }}
          className="flex flex-col items-center group"
        >
          <div className="bg-teal-500 text-white text-4xl p-4 rounded-full shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-teal-600">
            🌍
          </div>
          <h3 className="mt-4 text-xl font-bold text-[#020202] group-hover:text-teal-600 transition-colors duration-300">
            Global Reach
          </h3>
          <p className="text-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            Our solutions empower businesses worldwide.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
