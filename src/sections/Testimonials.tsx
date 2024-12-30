"use client";

import { motion } from "framer-motion";

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
      className="py-20 bg-gray-50 text-gray-800 flex flex-col items-center min-h-screen"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-[#020202] mb-8"
      >
        What Our Clients Say
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl px-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition"
          >
            <p className="text-gray-600 italic mb-4">
              "{testimonial.feedback}"
            </p>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
