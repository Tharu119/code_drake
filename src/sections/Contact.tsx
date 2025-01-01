"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import BounceEffect from "../animations/BounceEffect";
import RotateEffect from "../animations/RotateEffect";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_1elk2bs",
        "template_6rmnjxe",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "qW0fnRutllSOymCQz"
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" });
          setError("");
        },
        (err) => {
          console.error("Failed to send email:", err);
          setError("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800"
    >
      {/* Section Title */}
      <RotateEffect>
        <h2 className="text-4xl font-bold text-center text-[#020202] mb-8">
          Get in Touch
        </h2>
      </RotateEffect>

      {/* Description */}
      <BounceEffect>
        <p className="text-lg text-center max-w-3xl text-gray-600 mb-12">
          Have a project in mind or just want to say hello? Fill out the form below, and we'll get back to you promptly!
        </p>
      </BounceEffect>

      {/* Contact Form */}
      <BounceEffect>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl w-full mx-auto space-y-6 bg-white p-8 rounded-lg shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-shadow duration-500"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 border rounded-lg border-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-500 hover:bg-indigo-50 transition duration-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 border rounded-lg border-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-500 hover:bg-indigo-50 transition duration-300"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-4 border rounded-lg border-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-500 hover:bg-indigo-50 transition duration-300"
          />

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </BounceEffect>

      {/* Success/Error Messages */}
      {isSent && <p className="text-green-600 mt-4">Your message has been sent successfully!</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </section>
  );
}
