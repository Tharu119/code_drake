'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-20 bg-white text-gray-800">
  <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Contact Us</h2>
  <form className="max-w-xl w-full mx-auto space-y-4">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-4 border rounded-lg"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-4 border rounded-lg"
    />
    <textarea
      placeholder="Your Message"
      className="w-full p-4 border rounded-lg"
      rows={4}
    />
    <button
      type="submit"
      className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
    >
      Send Message
    </button>
  </form>
</section>

  );
}
