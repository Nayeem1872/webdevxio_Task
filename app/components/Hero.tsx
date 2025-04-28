import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Circular UI Element */}
      <div className="absolute w-[1244px] h-[1184.2px] border-2 border-blue-200 rounded-full top-1/4 left-1/2 transform -translate-x-1/2">
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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-gray-900">Pixel-Perfect </span>
          <span className="text-brand-blue">UI/UX Design</span>
          <span className="text-gray-900"> for a</span>
          <br />
          <span className="text-brand-blue">Seamless</span>
          <span className="text-gray-900"> User Experience</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We design and develop stunning, high-performing websites for SaaS
          products to maximize conversions.
        </p>

        <InteractiveHoverButton>Book A Call</InteractiveHoverButton>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-20 left-0 right-0 text-center">
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-gray-900">Already </span>
          <span className="text-brand-blue">Chosen</span>
          <span className="text-gray-900"> by the </span>
          <span className="text-brand-blue">leaders</span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
