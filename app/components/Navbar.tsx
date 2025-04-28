import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
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

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="relative text-gray-900 transition-colors group px-2 py-1 rounded-lg"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="relative text-gray-600 hover:text-white transition-colors group px-2 py-1 rounded-lg"
            >
              Services
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all rounded-lg"></span>
            </Link>
            <Link
              href="/work"
              className="relative text-gray-600 hover:text-white transition-colors group px-2 py-1 rounded-lg"
            >
              Work
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all rounded-lg"></span>
            </Link>
            <Link
              href="/about"
              className="relative text-gray-600 hover:text-white transition-colors group px-2 py-1 rounded-lg"
            >
              About Us
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all rounded-lg"></span>
            </Link>
          </div>

          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full flex items-center space-x-2 px-6 py-2">
            <span className="text-lg">Contact Us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
