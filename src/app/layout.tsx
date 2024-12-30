"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { navStyle } from "@/styles/stylesConstants";

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
        <header className="bg-[#020202] text-white">
          <nav
            className={`${
              isScrolled
                ? "fixed top-0 left-0 w-full bg-[#020202] shadow-lg"
                : ""
            } flex flex-col items-center gap-4 py-4 transition-all duration-300`}
          >
            {!isScrolled && (
              <div className="">
                <img src="logo.png" alt="logo" className="w-40" />
              </div>
            )}
            <div className="flex gap-10">
              <Link to="services" className={`${navStyle}`}>
                Services
              </Link>
              <Link to="about" className={`${navStyle}`}>
                About Us
              </Link>
              <Link to="portfolio" className={`${navStyle}`}>
                Portfolio
              </Link>
              <Link to="testimonials" className={`${navStyle}`}>
                Testimonials
              </Link>
              <Link to="contact" className={`${navStyle}`}>
                Contact
              </Link>
            </div>
          </nav>
        </header>

        <main className={`container mx-auto ${isScrolled ? "mt-40" : ""}`}>
          {children}
        </main>

        <footer className="p-8 bg-gray-800 text-white">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; {year} Code Drake. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
            >
              Scroll to Top
            </button>
          </div>
        </footer>
      </body>
    </html>
  );
}
