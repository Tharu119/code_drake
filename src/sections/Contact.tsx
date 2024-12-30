"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800"
    >
      {/* Section Title with Advanced Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
        className="text-4xl font-bold text-center text-[#020202] mb-8"
      >
        Get in Touch
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-lg text-center max-w-3xl text-gray-600 mb-12"
      >
        Have a project in mind or just want to say hello? Fill out the form
        below, and we'll get back to you promptly!
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 120 }}
        className="max-w-xl w-full mx-auto space-y-6 bg-white p-8 rounded-lg shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-shadow duration-500"
      >
        {/* Name Field */}
        <motion.input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 border rounded-lg border-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-500 hover:bg-indigo-50 transition duration-300"
          whileHover={{ scale: 1.03 }}
        />

        {/* Email Field */}
        <motion.input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 border rounded-lg border-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-500 hover:bg-indigo-50 transition duration-300"
          whileHover={{ scale: 1.03 }}
        />

        {/* Message Field */}
        <motion.textarea
          placeholder="Your Message"
          className="w-full p-4 border rounded-lg border-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-500 hover:bg-indigo-50 transition duration-300"
          rows={4}
          whileHover={{ scale: 1.03 }}
        />

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#1E3A8A",
            color: "#ffffff",
          }}
          transition={{ duration: 0.3 }}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 transition-all duration-300"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-20 right-10 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-300 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>
    </section>
  );
}
