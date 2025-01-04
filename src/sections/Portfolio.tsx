/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import BounceEffect from "../animations/BounceEffect";
import { motion } from "framer-motion";
import { projectsData } from "@/projectsData";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiLocationArrow1 } from "react-icons/ci";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (projectId: string) => {
    const project = projectsData.find((item) => item.id === projectId);
    setSelectedProject(project || null);
  };

  const closePrompt = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 flex flex-col items-center min-h-screen relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-300 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-32 right-10 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse"></div>

      {/* Section Title */}
      <h2 className="text-5xl font-bold text-center text-[#1A202C] mb-12 relative z-10">
        Our Portfolio
      </h2>

      {/* Description with Hover Animation */}
      <motion.p
        whileHover={{
          scale: 1.05, // Slight zoom effect
          color: "#2C5282", // Premium blue color
          backgroundColor: "#EDF2F7", // Light gray-blue background
          boxShadow: "0 4px 15px rgba(44, 82, 130, 0.2)", // Subtle shadow
        }}
        transition={{ duration: 0.3 }}
        className="text-lg text-center max-w-3xl text-gray-600 mb-12 relative z-10 px-4 py-2 rounded-lg shadow-sm transition-all"
      >
        Take a look at some of our recent projects showcasing our expertise and
        commitment to excellence.
      </motion.p>

      {/* Portfolio Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4 relative z-10">
        {projectsData.map((item, index) => (
          <BounceEffect key={index}>
            <div
              onClick={() => handleCardClick(item.id)}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-transform bg-gradient-to-r from-gray-200 via-white to-gray-200 hover:cursor-pointer"
            >
              {/* Image with Hover Effect */}
              <img
                src={item.systemImage}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:translate-y-0 translate-y-full transition-transform duration-500">
                <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {item.cardIntro}
                </p>
              </div>
            </div>
          </BounceEffect>
        ))}
      </div>

      {selectedProject && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-white z-50 overflow-auto"
        >
          {/* Close Button */}
          <IoIosCloseCircleOutline
            size={45}
            onClick={closePrompt}
            className="absolute top-4 right-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
          />

          {/* Project Details */}
          <div className="p-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-3 text-center underline">
              {selectedProject.title}
            </h3>

            <p className="text-xl text-center">{selectedProject.cardIntro}</p>

            <img
              src={selectedProject.systemImage}
              alt={selectedProject.title}
              className="px-4 py-4 max-w-5xl mx-auto"
            />

            <br />
            <br />
            {selectedProject.introduction.admin.length > 0 && (
              <FeaturesList
                title="Admin Features"
                features={selectedProject.introduction.admin}
              />
            )}
            <br />
            <br />
            {selectedProject.introduction.client.length > 0 && (
              <FeaturesList
                title="Client Features"
                features={selectedProject.introduction.client}
              />
            )}
            <br />
            <br />
            {selectedProject.introduction.backend.length > 0 && (
              <FeaturesList
                title="Backend Features"
                features={selectedProject.introduction.backend}
              />
            )}
            <br />
            <br />
            {selectedProject.pages.admin.length > 0 && (
              <PagesList
                title={"Admin Pages"}
                pages={selectedProject.pages.admin}
              />
            )}
            <br />
            <br />
            {selectedProject.pages.client.length > 0 && (
              <PagesList
                title={"Client Pages"}
                pages={selectedProject.pages.client}
              />
            )}
            <br />
            <br />
            {selectedProject.pages.backend.length > 0 && (
              <PagesList
                title={"Backend Details"}
                pages={selectedProject.pages.backend}
              />
            )}
            <br />
          </div>
        </motion.div>
      )}
    </section>
  );
}

type Project = {
  id: string;
  title: string;
  cardIntro: string;
  systemImage: string;
  introduction: {
    description: string;
    admin: string[];
    client: string[];
    backend: string[];
  };
  pages: {
    admin: {
      title: string;
      images: {
        url: string;
        description: string;
      }[];
    }[];
    client: {
      title: string;
      images: {
        alt: string;
        url: string;
        description: string;
      }[];
    }[];
    backend: {
      title: string;
      images: {
        url: string;
        description: string;
      }[];
    }[];
  };
};

type FeaturesListProps = {
  title: string;
  features: string[];
};

type Page = {
  title: string;
  images: {
    alt: string;
    url: string;
    description: string;
  }[];
};

type PagesListProps = {
  title: string;
  pages: Page[];
};

const FeaturesList: React.FC<FeaturesListProps> = ({ title, features }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl">{title}</h1>
      {features.map((feature, index) => (
        <ul
          key={index}
          className="flex items-center gap-2 leading-7 hover:scale-110 duration-300 cursor-pointer hover:font-semibold"
        >
          <CiLocationArrow1 size={20} />
          <li
            dangerouslySetInnerHTML={{
              __html: feature,
            }}
            className=""
          />
        </ul>
      ))}
    </div>
  );
};

const PagesList: React.FC<PagesListProps> = ({ title, pages }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeBackdrop = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <h1 className="text-center text-3xl">{title}</h1>

      {pages.length > 0 &&
        pages.map((page, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-start justify-between ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Title Section */}
            <div className="md:w-1/2 p-4 text-center md:text-left">
              <h2 className="text-2xl">{page.title}</h2>
              {page.images.map((image, imgIndex) => (
                <div key={imgIndex} className="mb-4">
                  <p
                    className="text-gray-600 text-sm mt-2"
                    dangerouslySetInnerHTML={{
                      __html: image.description,
                    }}
                  ></p>
                </div>
              ))}
            </div>

            {/* Images Section */}
            <div className="md:w-1/2 p-4">
              {page.images.map((image, imgIndex) => (
                <div key={imgIndex} className="mb-4">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="h-80 w-full object-cover rounded-lg shadow-lg border border-black p-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                    onClick={() => handleImageClick(image.url)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

      {/* Backdrop for Image Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-auto">
          <div className="relative flex justify-center items-center min-h-screen">
            {/* Close Button */}
            <IoIosCloseCircleOutline
              size={45}
              onClick={closeBackdrop}
              className="absolute top-4 right-4 rounded-full bg-white transition-all duration-300 cursor-pointer"
            />
            {/* Image Container */}
            <img
              src={selectedImage}
              alt="Selected"
              className="rounded-lg max-w-4xl max-h-full m-4"
            />
          </div>
        </div>
      )}
    </div>
  );
};
