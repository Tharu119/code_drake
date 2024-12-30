"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-white text-gray-800"
    >
      <h2 className="text-3xl font-bold text-center text-[#020202] mb-8">
        Contact Us
      </h2>
      <form className="max-w-xl w-full mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 border rounded-lg border-[#020202] placeholder:text-[#020202]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 border rounded-lg border-[#020202] placeholder:text-[#020202]"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-4 border rounded-lg border-[#020202] placeholder:text-[#020202]"
          rows={4}
        />
        <button
          type="submit"
          className="w-full py-3 bg-[#020202] text-white rounded-lg hover:bg-[#020202]/90 transition duration-500"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
