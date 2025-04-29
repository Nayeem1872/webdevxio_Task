import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-md">
      <div className="max-w-[1340] mx-auto px-4 sm:px-6 lg:px-8">
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
              className="relative flex items-center justify-center text-center text-gray-600 text-[15px] transition-colors group  rounded-lg"
            >
              Services <Dot />
            </Link>
            <Link
              href="/work"
              className="relative flex items-center justify-center text-center text-gray-600 text-[15px]  transition-colors group  rounded-lg"
            >
              Work <Dot />
            </Link>
            <Link
              href="/about"
              className="relative flex items-center justify-center text-center text-gray-600  text-[15px] transition-colors group  rounded-lg"
            >
              About Us <Dot />
            </Link>
          </div>

          <button className="rounded-full flex items-center">
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
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
