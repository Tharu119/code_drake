"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { navStyle } from "@/styles/stylesConstants";
import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  const [isScrolled, setIsScrolled] = useState(false);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setShowScrollTop(window.scrollY > 300); // Show button after 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Header */}


        <Header />









        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`container mx-auto ${isScrolled ? "mt-40" : ""}`}
        >
          {children}
        </motion.main>

        {/* Footer */}
        <footer className="relative p-8 bg-dark-gradient text-white overflow-hidden">
  {/* Decorative Background */}
  <div className="absolute inset-0 bg-dark-gradient opacity-20 blur-xl animate-pulse"></div>

  {/* Footer Content */}
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
    {/* Footer Text */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center md:text-left mb-4 md:mb-0"
    >
      <p className="text-sm md:text-base font-light">
        &copy; {year} <span className="font-bold">Code Drake</span>. All rights reserved.
      </p>
    </motion.div>

    {/* Social Icons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex gap-6"
    >
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group text-white hover:text-cyan-300 transition-colors duration-300"
      >
        <FaFacebook size={28} />
        <span className="absolute top-0 left-0 w-full h-full bg-cyan-500 opacity-0 rounded-full group-hover:opacity-30 transition-opacity duration-300"></span>
      </a>
      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group text-white hover:text-cyan-300 transition-colors duration-300"
      >
        <FaTwitter size={28} />
        <span className="absolute top-0 left-0 w-full h-full bg-cyan-500 opacity-0 rounded-full group-hover:opacity-30 transition-opacity duration-300"></span>
      </a>
      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group text-white hover:text-cyan-300 transition-colors duration-300"
      >
        <FaInstagram size={28} />
        <span className="absolute top-0 left-0 w-full h-full bg-cyan-500 opacity-0 rounded-full group-hover:opacity-30 transition-opacity duration-300"></span>
      </a>
      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group text-white hover:text-cyan-300 transition-colors duration-300"
      >
        <FaLinkedin size={28} />
        <span className="absolute top-0 left-0 w-full h-full bg-cyan-500 opacity-0 rounded-full group-hover:opacity-30 transition-opacity duration-300"></span>
      </a>
    </motion.div>
  </div>

 {/* Scroll to Top Button */}
 {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center group transition-transform duration-500 hover:scale-110 active:scale-95"
            >
              {/* Rotating Circular Border */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-indigo-600 animate-spin-slow"></div>

              {/* Icon */}
              <span className="relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </span>

              {/* Glowing Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 opacity-10 rounded-full blur-md group-hover:opacity-30 transition-opacity duration-500"></span>
            </button>
          </motion.div>
        )}

</footer>


      </body>
    </html>
  );
}
  