"use client";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  const images = [
    {
      url: "/images/about1.png",
      alt: "Team working",
      className: "rounded-tl-[2rem] pl-5 pt-5",
    },
    {
      url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      alt: "Team collaboration",
      className: "rounded-bl-[2rem] pl-4 pb-4",
    },
    {
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Development",
      className: "rounded-tr-[2rem] pr-4 pt-4",
    },
    {
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Development",
      className: "rounded-br-[2rem] pr-4 pb-4",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1340] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className=" space-y-4">
                <ImageCard image={images[0]} />
                <ImageCard image={images[1]} />
              </div>
              <div className="mt-8 space-y-4">
                <ImageCard image={images[2]} />
                <ImageCard image={images[3]} />
              </div>
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  {/* Gear-like shape with text */}
                  <img
                    src="/images/circle.png"
                    alt="Gear-like shape"
                    className="w-[100px] h-[100px] "
                  />
                </div>
              </motion.div>
            </div>

            {/* Blue circle decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#274AFF] rounded-full opacity-10 blur-2xl" />
          </div>

          {/* Right side - Content */}
          <div className="max-w-[876px]">
            <span className="text-[#274AFF] font-medium">About Us</span>
            <h2 className="mt-2 text-[38px] font-bold">
              Who We Are & <span className="text-[#274AFF]">Why Choose Us</span>
            </h2>
            <p className="mt-4 text-gray-600 text-[22px] text-normal leading-relaxed">
              At UX Recharge, we specialize in creating modern, user-friendly
              websites tailored for SaaS companies. Our designs are
              conversion-focused, fast, and fully optimized for mobile and SEO.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-[#274AFF]">
                  <NumberTicker value={2} />
                  k+
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Best Projects Delivered
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#274AFF]">
                  <NumberTicker value={10} />
                  k+
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Happy Users Worldwide
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#274AFF]">
                  <NumberTicker value={10} />+
                </h3>
                <p className="text-sm text-gray-600 mt-1">Industry Awards</p>
              </div>
            </div>
            <InteractiveHoverButton className="mt-8">
              Book A Call
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    </section>
  );
};

type ImageProps = {
  url: string;
  alt: string;
  className: string;
};

function ImageCard({ image }: { image: ImageProps }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl cursor-pointer ${image.className}`}
      whileHover={{
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        // paddingLeft: "20px",
        backgroundColor: "#274AFF",
        // paddingTop: "20px",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="w-full h-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image.url}
          alt={image.alt}
          className="object-cover w-full h-48 rounded-2xl"
        />
      </motion.div>
    </motion.div>
  );
}

export default AboutSection;
