import React from "react";
import { cn } from "@/lib/utils"; // Assuming this is a utility for classnames
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

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
  const getDescription = (cardTitle: string) => {
    if (cardTitle === "Digital Marketing Website")
      return "Comprehensive digital marketing platform with modern UI/UX design";
    if (cardTitle === "E-commerce Platform")
      return "Modern e-commerce solution with seamless user experience";
    if (cardTitle === "Brand Identity")
      return "Complete brand identity design with cohesive visual elements";
    if (cardTitle === "Mobile Application")
      return "Intuitive mobile app design with user-centered approach";

    return "Exploring innovative solutions and creative designs for this project.";
  };

  const description = getDescription(title);

  return (
    <div
      className={cn(
        "group cursor-pointer transition-all duration-700 ease-in-out hover:shadow-2xl relative overflow-hidden bg-black rounded-2xl border-0 shadow-lg",
        "h-[550px]",
        isLarge ? "w-68 hover:w-[400px]" : "w-56 hover:w-76"
      )}
      style={{
        transition:
          "width 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s ease",
      }}
    >
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
        <h3
          className={cn(
            "font-bold text-2xl text-white",
            "-mb-12 group-hover:mb-3", // Default mb-3, changes to -mb-9 on hover
            "transition-all duration-500 ease-in-out" // Smooth transition for margin change
          )}
        >
          {title}
        </h3>

        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-100">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-150">
            <p className="text-sm text-gray-200 opacity-90 mb-4 line-clamp-3 group-hover:line-clamp-none">
              {description}
            </p>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/20 text-gray-200 hover:bg-indigo-500 hover:text-white backdrop-blur-sm text-xs px-3 py-1 rounded-full transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {isLarge && (
        <div className="absolute top-5 right-5 bg-indigo-600/70 group-hover:bg-indigo-600 p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform scale-90 group-hover:scale-100 z-10">
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

      <div className="flex flex-wrap justify-center gap-6">
        <PortfolioCard
          title="Digital Marketing Website"
          image="https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1000&auto=format&fit=crop"
          isLarge={true}
          tags={["UI/UX Design", "Web Design", "Wireframe"]}
        />
        <PortfolioCard
          title="E-commerce Platform"
          isLarge={true}
          image="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1000&auto=format&fit=crop"
          tags={["E-commerce", "React", "Design"]}
        />
        <PortfolioCard
          title="Brand Identity"
          isLarge={true}
          image="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1000&auto=format&fit=crop"
          tags={["Branding", "Identity", "Logo"]}
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
