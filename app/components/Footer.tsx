import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-6 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={1440}
          height={104}
          className="h-10 w-auto"
        />

        {/* Footer Navigation */}
        <div className="flex space-x-6 text-gray-600">
          <a href="/contact" className="hover:text-indigo-600">
            Contact
          </a>
          <a href="/work" className="hover:text-indigo-600">
            Work
          </a>
          <a href="/about" className="hover:text-indigo-600">
            About Us
          </a>
          <a href="/privacy-policy" className="hover:text-indigo-600">
            Privacy & Policy
          </a>
          <a href="/terms-condition" className="hover:text-indigo-600">
            Terms & Condition
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-600 text-sm">
          <p>2025 @webdevxio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
