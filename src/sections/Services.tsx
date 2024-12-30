"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Build modern, responsive, and high-performing websites tailored to your business needs.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description:
      "Create feature-rich, user-friendly mobile applications for iOS and Android platforms.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description:
      "Design intuitive and visually appealing interfaces that provide a seamless user experience.",
    icon: "🎨",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your website's visibility and rankings on search engines with advanced optimization techniques.",
    icon: "🚀",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 py-20 text-gray-800 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl font-bold text-[#020202]">Our Services</h2>
        <p className="text-gray-600 mt-4">
          Explore the wide range of services we offer to help your business
          thrive.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
            className="group bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 relative overflow-hidden"
          >
            {/* Icon */}
            <div className="text-5xl mb-4 text-indigo-600 transition-transform duration-500 group-hover:scale-110">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#020202] mb-2 group-hover:text-indigo-700 transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              {service.description}
            </p>

            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
