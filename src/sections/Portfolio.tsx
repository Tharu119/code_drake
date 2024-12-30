"use client";

import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "E-Commerce Website",
    description:
      "A modern and responsive e-commerce platform with a seamless user experience.",
    image: "portfolio.jpg",
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
    image: "portfolio.jpg",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-white text-gray-800 flex flex-col items-center min-h-screen "
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-[#020202] mb-8"
      >
        Our Portfolio
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl px-4">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
              width="100%"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <a
                href={item.link}
                className="text-indigo-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
