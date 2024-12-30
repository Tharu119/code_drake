'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="p-4 bg-indigo-600 text-white">
          <nav className="container mx-auto flex justify-between">
            <a href="/" className="text-xl font-bold">
              Code Drake
            </a>
            <div className="flex gap-4">
              <Link
                to="services"
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:underline"
              >
                Services
              </Link>
              <Link
                to="about"
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:underline"
              >
                About Us
              </Link>
              <Link
                to="portfolio"
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:underline"
              >
                Portfolio
              </Link>
              <Link
                to="testimonials"
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:underline"
              >
                Testimonials
              </Link>
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:underline"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto py-8">{children}</main>
        <footer className="p-8 bg-gray-800 text-white">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Code Drake. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
            >
              Scroll to Top
            </button>
          </div>
        </footer>
      </body>
    </html>
  );
}
