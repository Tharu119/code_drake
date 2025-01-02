"use client";

import BounceEffect from "../animations/BounceEffect";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "E-Commerce Website",
    description:
      "A modern and responsive e-commerce platform with a seamless user experience.",
    image: "ecommerce.jpg",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing skills and projects with a stunning design.",
    image: "portfolio.jpg",
    link: "#",
  },
  {
    title: "SEO Optimization",
    description:
      "Improved SEO rankings for multiple clients through advanced optimization techniques.",
    image: "seo.jpg",
    link: "#",
  },
  {
    title: "Mobile App",
    description:
      "A feature-rich mobile application designed for an enhanced user experience.",
    image: "mobile.jpg",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 flex flex-col items-center min-h-screen relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-300 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-32 right-10 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>

      {/* Section Title */}
      <h2 className="text-5xl font-bold text-center text-[#1A202C] mb-12 relative z-10">
        Our Portfolio
      </h2>

      {/* Description with Hover Animation */}
      <motion.p
        whileHover={{
          scale: 1.05, // Slight zoom effect
          color: "#2C5282", // Premium blue color
          backgroundColor: "#EDF2F7", // Light gray-blue background
          boxShadow: "0 4px 15px rgba(44, 82, 130, 0.2)", // Subtle shadow
        }}
        transition={{ duration: 0.3 }}
        className="text-lg text-center max-w-3xl text-gray-600 mb-12 relative z-10 px-4 py-2 rounded-lg shadow-sm transition-all"
      >
        Take a look at some of our recent projects showcasing our expertise and
        commitment to excellence.
      </motion.p>

      {/* Portfolio Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4 relative z-10">
        {portfolioItems.map((item, index) => (
          <BounceEffect key={index}>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-transform bg-gradient-to-r from-gray-200 via-white to-gray-200">
              {/* Image with Hover Effect */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:translate-y-0 translate-y-full transition-transform duration-500">
                <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="inline-block text-indigo-400 font-medium hover:text-indigo-200 transition-colors duration-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </BounceEffect>
        ))}
      </div>
    </section>
  );
}