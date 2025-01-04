"use client";

import BounceEffect from "../animations/BounceEffect";
import FadeIn from "../animations/FadeIn";
import SlideIn from "../animations/SlideIn";

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
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-300 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-400 to-pink-300 rounded-full blur-[150px] opacity-30"></div>

      {/* Section Title */}
      <FadeIn>
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-4xl font-bold text-[#020202] tracking-wide">
            Our Services
          </h2>

          {/* Apply BounceEffect to Description */}
          <BounceEffect>
            <p className="text-gray-600 mt-4">
              Explore the wide range of services we offer to help your business thrive.
            </p>
          </BounceEffect>
        </div>
      </FadeIn>

      {/* Service Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 relative z-10">
        {services.map((service, index) => (
          <SlideIn
            key={index}
            direction={index % 2 === 0 ? "left" : "right"} // Alternate slide direction
          >
            <BounceEffect>
              <div className="group bg-white rounded-lg shadow-lg p-6 relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
                {/* Icon */}
                <div className="text-5xl mb-4 text-indigo-600 group-hover:scale-125 transition-transform duration-500">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#020202] mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Floating Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>

                {/* Border Animation */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500 rounded-lg transition-all duration-500"></div>
              </div>
            </BounceEffect>
          </SlideIn>
        ))}
      </div>
    </section>
  );
}
