import ServiceCardshere from "./ServiceCard";

const WhatWeDo = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">What We Do</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          We design and develop stunning, high-performing websites for SaaS
          products to maximize conversions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Website Design Card */}
          <ServiceCardshere
            icon={<div className="text-[#9b87f5] text-xl font-bold">Φ</div>}
            title="Website Design"
            description="Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users' choice."
          />

          {/* SaaS Website Design Card */}
          <ServiceCardshere
            icon={<div className="text-[#9b87f5] text-xl font-bold">✧</div>}
            title="SaaS Website Design"
            description="Fully functional, high-performance SaaS websites built with modern technologies."
            accentColor="#5142fc"
            // className="bg-[#5142fc] text-white"
          />

          {/* Website Development Card */}
          <ServiceCardshere
            icon={<div className="text-[#9b87f5] text-xl font-bold">Ƒ</div>}
            title="Website Development & Maintenance"
            description="Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users' choice."
          />

          {/* WordPress Website Design Card */}
          <ServiceCardshere
            icon={<div className="text-[#9b87f5] text-xl">W</div>}
            title="Wordpress website Design"
            description="Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users' choice."
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
