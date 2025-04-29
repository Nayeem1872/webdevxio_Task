"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="max-w-[1340] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-brand-blue">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={221.00010681152344}
                height={32.2773323059082}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Menu Button (Hamburger) for mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-900 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Menu for Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="relative flex items-center justify-center text-center text-gray-900 px-0 py-1 rounded-lg"
              style={{
                fontWeight: "500", // Apply font weight 500
                fontSize: "15px", // Apply font size 15px
                lineHeight: "100%", // Set line-height to 100%
                letterSpacing: "0%", // Set letter-spacing to 0%
                textShadow: "0 0 25px rgba(39, 74, 253, 0.6)", // Darker and more spread text shadow
              }}
            >
              <span className="text-center">Home</span> <Dot />
            </Link>
            <Link
              href="/services"
              className="relative flex items-center justify-center text-center text-gray-600 text-[15px] transition-colors group rounded-lg"
            >
              Services <Dot />
            </Link>
            <Link
              href="/work"
              className="relative flex items-center justify-center text-center text-gray-600 text-[15px] transition-colors group rounded-lg"
            >
              Work <Dot />
            </Link>
            <Link
              href="/about"
              className="relative flex items-center justify-center text-center text-gray-600 text-[15px] transition-colors group rounded-lg"
            >
              About Us <Dot />
            </Link>
          </div>

          {/* Contact Us Button */}
          <motion.button
            className="hidden md:flex  rounded-full  items-center"
            whileHover={{
              scale: 1.1, // Slight scaling effect on hover
            }}
            transition={{ duration: 0.3 }}
            onClick={toggleMenu} // This will toggle the mobile menu when clicked
          >
            <Image
              src="/images/pen.png"
              alt="Phone Icon"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="text-lg bg-gradient-to-r from-[#06197D] to-[#274AFD] text-transparent bg-clip-text font-[DM Sans] font-extrabold text-[22px] leading-[100%] tracking-[0%] text-center align-middle">
              Contact Us
            </span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white p-4 space-y-4 absolute top-20 left-1/2 transform -translate-x-1/2 w-full`}
      >
        <Link
          href="/"
          className="block text-gray-900 text-lg font-medium"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          href="/services"
          className="block text-gray-900 text-lg font-medium"
          onClick={toggleMenu}
        >
          Services
        </Link>
        <Link
          href="/work"
          className="block text-gray-900 text-lg font-medium"
          onClick={toggleMenu}
        >
          Work
        </Link>
        <Link
          href="/about"
          className="block text-gray-900 text-lg font-medium"
          onClick={toggleMenu}
        >
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
