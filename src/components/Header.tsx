"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setDarkMode(savedTheme === "dark");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const newTheme = darkMode ? "light" : "dark";

    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
        backgroundColor: isScrolled
          ? "rgba(0, 0, 0, 0.8)"
          : "rgba(0, 0, 0, 0.3)",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full transition-all duration-700 ease-in-out z-50 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      {/* Navigation Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        className="flex items-center justify-between container mx-auto py-4 px-8"
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
            alt="Code Drake Logo"
            className="w-14 h-14 rounded-full shadow-lg transform hover:scale-110 transition duration-500 animate-techGlow"
          />
          <h1 className="ml-4 text-xl font-bold neon-glow">Code Drake</h1>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex gap-8 text-white"
        >
          {["Home", "Services", "Aboutus", "Portfolio", "Testimonials", "Contact"].map(
            (link, index) => (
              <Link
                key={index}
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link text-base font-semibold uppercase hover:text-cyan-300 transition-all duration-500 hover:cursor-pointer"
              >
                {link}
              </Link>
            )
          )}
        </motion.nav>

        {/* Dark Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button
            onClick={toggleDarkMode}
            className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-700 dark:text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c.132 0 .263.005.394.015C7.403 3.309 4 7.014 4 11.5 4 16.194 7.806 20 12.5 20c4.486 0 8.191-3.403 8.485-7.606A9 9 0 0112 3z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-700 dark:text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v3m0 12v3m9-9h-3m-12 0H3m15.364-6.364l-2.121 2.121M6.757 6.757L4.636 4.636m12.728 12.728l-2.121-2.121M6.757 17.243l-2.121 2.121"
                />
              </svg>
            )}
          </button>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
