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



        <header
                  className={`${
                    isScrolled
                      ? "fixed top-0 left-0 w-full bg-dark-gradient bg-opacity-90 backdrop-blur-lg animate-navbarBlur transition-all duration-700 ease-in-out z-50"
                      : "relative bg-dark-gradient bg-opacity-100 transition-all duration-700 ease-in-out z-50"
                  } shadow-lg`}
                >
                {/* Animated Background */}
                  {/* Animated Background */}
                  <div className="absolute inset-0 opacity-10 blur-lg"></div>

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
                  </motion.div>

                  {/* Animated Divider */}
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "20%" }}
                    transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut" }}
                    className="relative mx-4 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 opacity-80 animate-gradientMove"></div>
                  </motion.div>

                  {/* Navigation Links */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex gap-10"
                  >
                    {["Services", "About Us", "Portfolio", "Testimonials", "Contact"].map(
                      (link, index) => (
                        <Link
                          key={index}
                          to={link.toLowerCase().replace(" ", "")}
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
                  </motion.div>
                </motion.div>
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
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  className="text-center mt-6 relative z-10"
>
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="relative bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white py-3 px-5 rounded-full shadow-lg transition-all duration-500 ease-in-out transform group hover:scale-110 hover:shadow-2xl active:scale-95"
  >
    {/* Animated Background */}
    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-teal-500 to-cyan-400 opacity-10 rounded-full blur-md animate-pulse"></span>

    {/* Button Content */}
    <span className="relative z-10 flex items-center justify-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
      <span className="font-semibold uppercase">Scroll to Top</span>
    </span>

    {/* Animated Glow */}
    <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500 blur-lg"></span>
  </button>
</motion.div>

</footer>


      </body>
    </html>
  );
}
  