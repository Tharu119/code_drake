"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { navStyle } from "@/styles/stylesConstants";
import { motion } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Header */}
        <header className="relative bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-600 text-white shadow-lg">
          {/* Animated Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300 opacity-10 blur-lg animate-pulse"></div>

          {/* Navigation Bar */}
          <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className={`${
              isScrolled
                ? "fixed top-0 left-0 w-full bg-opacity-90 z-50 backdrop-blur-sm"
                : ""
            } flex items-center justify-between container mx-auto py-4 px-6`}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center"
            >
              <img
                src="logo.png"
                alt="Logo"
                className="w-16 h-16 rounded-full shadow-lg transform hover:scale-110 transition duration-500"
              />
              <span className="ml-3 text-xl font-bold">Code Drake</span>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex gap-6"
            >
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="highlight text-sm uppercase hover:text-pink-400 transition-colors"
              >
                Services
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="highlight text-sm uppercase hover:text-pink-400 transition-colors"
              >
                About Us
              </Link>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="highlight text-sm uppercase hover:text-pink-400 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="highlight text-sm uppercase hover:text-pink-400 transition-colors"
              >
                Testimonials
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="highlight text-sm uppercase hover:text-pink-400 transition-colors"
              >
                Contact
              </Link>
            </motion.div>
          </motion.nav>
        </header>

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
                  <footer className="relative p-8 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-800 via-purple-600 to-pink-600 opacity-20 blur-xl animate-pulse"></div>

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
                  &copy; {year} <span className="font-bold">Code Drake</span>. All rights
                  reserved.
                </p>
              </motion.div>

              {/* Advanced Social Icons */}
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
                  className="relative group text-white hover:text-indigo-400 transition-colors duration-300"
                >
                  <FaFacebook size={28} />
                  <span className="absolute top-0 left-0 w-full h-full bg-indigo-500 opacity-0 rounded-full group-hover:opacity-30 transition-opacity duration-300"></span>
                </a>
                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group text-white hover:text-blue-400 transition-colors duration-300"
                >
                  <FaTwitter size={28} />
                  <span className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-0 rounded-full group-hover:opacity-30 transition-opacity duration-300"></span>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group text-white hover:text-pink-400 transition-colors duration-300"
                >
                  <FaInstagram size={28} />
                  <span className="absolute top-0 left-0 w-full h-full bg-pink-500 opacity-0 rounded-full group-hover:opacity-30 transition-opacity duration-300"></span>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group text-white hover:text-blue-600 transition-colors duration-300"
                >
                  <FaLinkedin size={28} />
                  <span className="absolute top-0 left-0 w-full h-full bg-blue-700 opacity-0 rounded-full group-hover:opacity-30 transition-opacity duration-300"></span>
                </a>
              </motion.div>
            </div>

            {/* Scroll to Top Button */}
            {/* Scroll to Top Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-center mt-6 relative z-10"
            >
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="relative bg-indigo-600 text-white py-3 px-5 rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-2xl transition-all duration-300 group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  Scroll to Top
                </span>
              </button>
            </motion.div>

          </footer>

      </body>
    </html>
  );
}
  