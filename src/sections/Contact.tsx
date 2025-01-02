"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import BounceEffect from "../animations/BounceEffect";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
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
          contact_number: formData.contactNumber,
          message: formData.message,
        },
        "qW0fnRutllSOymCQz"
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ name: "", email: "", contactNumber: "", message: "" });
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
    className="min-h-screen flex items-center justify-center py-20 bg-dark-gradient relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-30 blur-lg"></div>
    <div className="flex flex-wrap lg:flex-nowrap gap-16 w-full max-w-[1200px] relative z-10">
      {/* Contact Information Card */}
      <BounceEffect>
  <div className="w-full lg:w-[100%] min-h-[750px] bg-opacity-80 backdrop-blur-lg bg-white/10 p-16 rounded-3xl shadow-2xl border border-white/20 hover:shadow-[0_10px_30px_rgba(147,51,234,0.8)] transition-shadow duration-500 flex flex-col justify-between">
    <div className="mb-8 text-center">
      <h3 className="text-5xl font-extrabold text-white header-glow mb-6">
        Let’s <span className="text-purple-400">Connect</span>
      </h3>
      <p className="text-lg leading-relaxed text-gray-300 max-w-[85%] mx-auto">
        We deliver innovative software solutions. Reach out today to bring your ideas to life!
      </p>
    </div>
    <div className="w-full lg:w-[100%] min-h-[300px] bg-opacity-80 backdrop-blur-lg bg-white/10 p-12 rounded-2xl shadow-2xl border border-white/20 hover:shadow-[0_10px_30px_rgba(147,51,234,0.8)] transition-shadow duration-500 flex flex-col justify-center items-start space-y-6">
  <div className="flex items-center space-x-6 pl-4">
    <span className="text-3xl neon-glow-red">📞</span>
    <a
      href="tel:+94717609444"
      className="text-white text-lg font-medium hover:underline"
    >
      +94 71 760 9444
    </a>
  </div>
  <div className="flex items-center space-x-6 pl-4">
    <span className="text-3xl neon-glow-blue">📧</span>
    <a
      href="mailto:codedrake.t@gmail.com"
      className="text-white text-lg font-medium hover:underline"
    >
      codedrake.t@gmail.com
    </a>
  </div>
</div>

  </div>
</BounceEffect>

  
      {/* Get in Touch Form */}
      <BounceEffect>
  <div className="w-full lg:w-[100%]  bg-opacity-80 backdrop-blur-lg bg-white/10 p-16 rounded-3xl shadow-2xl border border-white/20 hover:shadow-[0_10px_30px_rgba(147,51,234,0.8)] transition-shadow duration-500">
    <div className="mb-8 text-center">
      <h2 className="text-5xl font-extrabold text-white header-glow mb-6">
        Get in <span className="text-purple-400">Touch</span>
      </h2>
      <p className="text-lg leading-relaxed text-gray-300 max-w-[85%] mx-auto">
        Drop us a message, and we’ll get back to you shortly!
      </p>
    </div>
    <form onSubmit={handleSubmit} className="space-y-8">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full input-glow"
      />
      <input
        type="text"
        name="contactNumber"
        placeholder="Contact Number"
        value={formData.contactNumber}
        onChange={handleChange}
        required
        className="w-full input-glow"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full input-glow"
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={4}
        className="w-full input-glow"
      />
      <div className="flex justify-between items-center">
        <button
          type="reset"
          className="btn-premium  text-lg px-8 py-4"
          onClick={() => setFormData({ name: "", email: "", contactNumber: "", message: "" })}
        >
          Reset
        </button>
        <button
          type="submit"
          className="btn-premium text-lg px-8 py-4"
        >
          Send Message
        </button>
      </div>
    </form>
    {/* Success/Error Messages */}
    {isSent && <p className="text-green-300 mt-4">Your message has been sent successfully!</p>}
    {error && <p className="text-red-400 mt-4">{error}</p>}
  </div>
</BounceEffect>

    </div>
  </section>
  
  );
}
