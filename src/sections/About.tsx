"suse client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-10 bg-gray-50 text-gray-800"
    >
      <h2 className="text-3xl font-bold text-center text-[#020202] mb-8">
        About Us
      </h2>
      <p className="text-lg text-center max-w-3xl">
        Code Drake is a cutting-edge development company specializing in
        building advanced and visually stunning web solutions. With a team of
        experienced professionals, we focus on delivering the highest quality
        services to help your business thrive.
      </p>
    </section>
  );
}
