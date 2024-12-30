"use client";

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
      <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-32 right-10 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="text-4xl font-bold text-[#020202] mb-12 relative z-10"
      >
        Our Portfolio
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-lg text-center max-w-3xl text-gray-600 mb-12 relative z-10"
      >
        Take a look at some of our recent projects showcasing our expertise and
        commitment to excellence.
      </motion.p>

      {/* Portfolio Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4 relative z-10">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-[#020202] group-hover:text-indigo-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a
                href={item.link}
                className="inline-block text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
