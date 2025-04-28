import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt="Team working"
                  className="rounded-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                  alt="Team collaboration"
                  className="rounded-2xl"
                />
              </div>
              <div className="mt-8">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  alt="Development"
                  className="rounded-2xl"
                />
              </div>
            </div>
            {/* Blue circle decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand-blue rounded-full opacity-10 blur-2xl" />
          </div>

          {/* Right side - Content */}
          <div>
            <span className="text-brand-blue font-medium">About Us</span>
            <h2 className="mt-2 text-4xl font-bold">
              Who We Are &{" "}
              <span className="text-brand-blue">Why Choose Us</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At UX Recharge, we specialize in creating modern, user-friendly
              websites tailored for SaaS companies. Our designs are
              conversion-focused, fast, and fully optimized for mobile and SEO.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-brand-blue">2k+</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Best Projects Delivered
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-brand-blue">10k+</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Happy Users Worldwide
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-brand-blue">10+</h3>
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

export default AboutSection;
