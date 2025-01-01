"use client";

import { motion } from "framer-motion";
import BounceEffect from "../animations/BounceEffect";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Code Drake built an amazing website for our business. The attention to detail and design quality was outstanding!",
    role: "CEO, Tech Solutions",
  },
  {
    name: "Jane Smith",
    feedback:
      "The team at Code Drake exceeded our expectations. The UI/UX design was intuitive and visually stunning.",
    role: "Marketing Manager, Creative Agency",
  },
  {
    name: "Robert Wilson",
    feedback:
      "Our SEO rankings improved drastically thanks to Code Drake. Highly recommended for web development needs!",
    role: "Founder, Startup Inc.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 flex flex-col items-center min-h-screen relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, type: "spring" }}
        className="absolute top-10 left-10 w-40 h-40 bg-indigo-300 rounded-full mix-blend-multiply blur-3xl opacity-50"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring" }}
        className="absolute top-32 right-10 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply blur-3xl opacity-50"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 1, type: "spring" }}
        className="absolute bottom-20 left-20 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply blur-3xl opacity-50"
      ></motion.div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="text-4xl font-bold text-[#020202] mb-12 relative z-10"
      >
        What Our Clients Say
      </motion.h2>

      {/* Testimonials Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl px-4 relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <BounceEffect key={index}>
            <motion.div
              className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-500 group relative overflow-hidden"
            >
              {/* Feedback */}
              <motion.p
                className="text-gray-600 italic mb-4 group-hover:text-indigo-600 transition-colors duration-300"
              >
                "{testimonial.feedback}"
              </motion.p>
              {/* Client Name */}
              <motion.h3
                className="text-lg font-semibold text-[#020202] group-hover:text-indigo-700 transition-colors duration-300"
              >
                {testimonial.name}
              </motion.h3>
              {/* Client Role */}
              <motion.p
                className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
              >
                {testimonial.role}
              </motion.p>

              {/* Animated Background Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </motion.div>
          </BounceEffect>
        ))}
      </motion.div>
    </section>
  );
}
