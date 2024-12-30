"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-32 right-10 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>

      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        className="text-4xl font-bold text-center text-[#020202] mb-8 relative z-10"
      >
        About Us
      </motion.h2>

      {/* Content Animation */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-lg text-center max-w-3xl leading-relaxed text-gray-600 relative z-10"
      >
        Code Drake is a cutting-edge development company specializing in
        building advanced and visually stunning web solutions. With a team of
        experienced professionals, we focus on delivering the highest quality
        services to help your business thrive. From innovative web development
        to intuitive UI/UX design, we bring your vision to life with precision
        and creativity.
      </motion.p>

      {/* Team Photo or Illustration */}
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
      </motion.div>

      {/* Highlights Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl px-6 relative z-10"
      >
        {/* Highlight 1 */}
        <div className="flex flex-col items-center group">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-indigo-600 text-white text-4xl p-4 rounded-full shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-indigo-700"
          >
            🚀
          </motion.div>
          <h3 className="mt-4 text-xl font-bold text-[#020202] group-hover:text-indigo-700 transition-colors duration-300">
            Innovation
          </h3>
          <p className="text-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            We bring innovative ideas to the forefront of every project.
          </p>
        </div>

        {/* Highlight 2 */}
        <div className="flex flex-col items-center group">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-pink-600 text-white text-4xl p-4 rounded-full shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-pink-700"
          >
            🎨
          </motion.div>
          <h3 className="mt-4 text-xl font-bold text-[#020202] group-hover:text-pink-700 transition-colors duration-300">
            Creativity
          </h3>
          <p className="text-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            Delivering creative and visually stunning solutions.
          </p>
        </div>

        {/* Highlight 3 */}
        <div className="flex flex-col items-center group">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-yellow-500 text-white text-4xl p-4 rounded-full shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-yellow-600"
          >
            🌍
          </motion.div>
          <h3 className="mt-4 text-xl font-bold text-[#020202] group-hover:text-yellow-600 transition-colors duration-300">
            Global Reach
          </h3>
          <p className="text-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            Our solutions empower businesses worldwide.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
