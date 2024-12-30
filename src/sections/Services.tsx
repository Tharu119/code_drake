"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gray-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#020202] mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6 bg-white rounded-lg shadow-md hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p>Build modern and responsive websites tailored to your needs.</p>
          </div>
          <div className="card p-6 bg-white rounded-lg shadow-md hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p>Design stunning user interfaces with a seamless experience.</p>
          </div>
          <div className="card p-6 bg-white rounded-lg shadow-md hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
            <p>Enhance your site’s visibility and search engine ranking.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
