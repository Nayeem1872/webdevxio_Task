"use client";
import { useEffect } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const Hero = () => {
  const variants = {
    pos1: { left: "50%", top: "-105px", x: "-50%", y: "6rem" },
    pos2: { left: "6%", top: "52%", x: "-100%", y: "0%" },
    pos3: { left: "94%", top: "52%", x: "0%", y: "0%" },
  };

  // Only cycle the dot
  const [dotPos, cycleDot] = useCycle("pos1", "pos2", "pos3");

  useEffect(() => {
    const id = setInterval(cycleDot, 4000);
    return () => clearInterval(id);
  }, [cycleDot]);

  const slides = [
    // Slide 1
    <>
      Pixel-Perfect UI/UX Design for a<br />
      Seamless User Experience
    </>,
    // Slide 2
    <>Custom WordPress Website, Flexible, Scalable & SEO Friendly</>,

    // Slide 3
    <>
      SaaS Website Design & Development
      <br />
      for Maximum Conversions
    </>,
  ];

  const [current, cycle] = useCycle(0, 1);

  // 3. Every 3s, advance
  useEffect(() => {
    const id = setInterval(() => cycle(), 4000);
    return () => clearInterval(id);
  }, [cycle]);
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Circular UI Element */}
      <div
        className="absolute w-[1244px] h-[592.1px]
                   border-t-2 border-blue-200 rounded-t-full
                   top-1/5 left-1/2 transform -translate-x-1/2
                   shadow-[0_-4px_5px_-4px_rgba(39,74,253,0.4),
                           _-4px_0_0px_-4px_rgba(39,74,253,0.4),
                           _4px_0_0px_-4px_rgba(39,74,253,0.4)]"
      >
        {/* Animated dot */}
        <motion.div
          className="absolute w-4 h-4 bg-[#6E70F2] rounded-full shadow-lg"
          variants={variants}
          initial="pos1"
          animate={dotPos}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Static labels */}
        <div>
          <span className="absolute left-[49.5%] -top-2  w-3 h-3 bg-[#274AFD] rounded-full shadow-lg" />
          <div className="absolute left-1/2 -top-38 -translate-x-1/2 translate-y-[6rem] bg-blue-100 px-4 py-2 rounded-full text-sm text-brand-blue">
            UI/UX Design
          </div>
        </div>
        <div>
          <span className="absolute  left-15 top-[52.5%]  w-3 h-3 bg-[#274AFD] rounded-full shadow-lg" />
          <div className="absolute -left-14 top-1/2 -translate-x-4 bg-blue-100 px-4 py-2 rounded-full text-sm text-brand-blue">
            SaaS Website
          </div>
        </div>
        <div>
          <span className="absolute   right-15 top-[52.5%]  w-3 h-3 bg-[#274AFD] rounded-full shadow-lg" />
          <div className="absolute -right-22 top-1/2 translate-x-4 bg-blue-100 px-4 py-2 rounded-full text-sm text-brand-blue">
            WordPress Website
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-[876px] mx-auto px-4">
        <h1
          className="
            font-[DM Sans] font-bold text-[48px] leading-[1.1] tracking-tight
            mb-6 text-center
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current} // <- re-render on index change
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="
        inline-block
        bg-gradient-to-r from-[#1E1E1E] via-[#274AFF] to-[#1E1E1E]
        bg-clip-text text-transparent
      "
            >
              {slides[current]}
            </motion.div>
          </AnimatePresence>
        </h1>

        <p className="text-[22px] text-[#222222] mb-8 max-w-[698px] mx-auto">
          We design and develop stunning, high-performing websites for SaaS
          products to maximize conversions.
        </p>

        <InteractiveHoverButton>Book A Call</InteractiveHoverButton>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-20 left-0 right-0 text-center">
        <h2 className="text-[36px] font-normal mb-2">
          <span className="text-gray-900">Already </span>
          <span className="text-[#274AFF]">Chosen</span>
          <span className="text-gray-900"> by the </span>
          <span className="text-[#274AFF]">leaders</span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
