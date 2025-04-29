import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Circular UI Element */}
      <div className="absolute w-[1244px] h-[592.1px] border-t-2 border-blue-200 rounded-t-full top-1/5 left-1/2 transform -translate-x-1/2 shadow-[0_-4px_5px_-4px_rgba(39,74,253,0.4),_-4px_0_0px_-4px_rgba(39,74,253,0.4),_4px_0_0px_-4px_rgba(39,74,253,0.4)]">
        <div className="absolute left-1/2 -top-28 -translate-x-1/2 translate-y-[6rem] bg-blue-100 px-4 py-2 rounded-full text-sm text-brand-blue">
          UI/UX Design
        </div>
        <div className="absolute left-0 top-1/2 -translate-x-4 bg-blue-100 px-4 py-2 rounded-full text-sm text-brand-blue">
          SaaS Website
        </div>
        <div className="absolute right-0 top-1/2 translate-x-4 bg-blue-100 px-4 py-2 rounded-full text-sm text-brand-blue">
          WordPress Website
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-[876px] mx-auto px-4">
        <h1 className=" font-bold mb-[20px] text-center align-middle bg-gradient-to-r from-[#1E1E1E] via-[#274AFF] to-[#1E1E1E] bg-clip-text text-transparent font-[DM Sans] font-semibold text-[48px] leading-[100%] tracking-[0%]">
          <span className="text-gray-900">Pixel-Perfect </span>
          <span className="text-brand-blue">UI/UX Design</span>
          <span className="text-gray-900"> for a</span>
          <br />
          <span className="text-brand-blue">Seamless User</span>
          <span className="text-gray-900"> Experience</span>
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
