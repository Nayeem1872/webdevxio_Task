import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  title: string;
  image: string;
  isLarge?: boolean;
  tags?: string[];
}

const PortfolioCard = ({
  title,
  image,
  isLarge = false,
  tags = [],
}: PortfolioCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden bg-white",
        isLarge ? "col-span-2 row-span-1 h-96" : "h-96"
      )}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-medium text-white mb-1">{title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/20 text-white text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {isLarge && (
        <div className="absolute top-8 right-8 bg-indigo-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ">
      <div className="mb-2">
        <p className="text-indigo-600 font-medium">Portfolio</p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-indigo-600">Featured</span> Work
        </h2>
        <Button
          variant="default"
          className="hidden md:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6"
        >
          <Search className="h-5 w-5" />
          <span>See More</span>
        </Button>
      </div>
      <p className="text-gray-600 text-lg mb-10 max-w-2xl">
        We design and develop stunning, high-performing websites for SaaS
        products to maximize conversions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <PortfolioCard
          title="Digital Marketing Website"
          image="/lovable-uploads/6efac166-7862-4035-9022-fa40363384cf.png"
          isLarge={true}
          tags={["UI/UX Design", "Web Design", "Wireframe"]}
        />
        <PortfolioCard
          title="E-commerce Platform"
          image="https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1000&auto=format&fit=crop"
        />
        <PortfolioCard
          title="Brand Identity"
          image="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1000&auto=format&fit=crop"
        />
        <PortfolioCard
          title="Mobile Application"
          image="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1000&auto=format&fit=crop"
        />
      </div>

      <div className="mt-10 flex justify-center md:hidden">
        <Button
          variant="default"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6"
        >
          <Search className="h-5 w-5" />
          <span>See More</span>
        </Button>
      </div>
    </section>
  );
};

export default PortfolioSection;
