import { ReactNode } from "react";

interface ServiceCardshereProps {
  icon: ReactNode;
  title: string;
  description: string;
  accentColor?: string;
  className?: string;
}

const ServiceCardshere = ({
  icon,
  title,
  description,
  accentColor = "#9b87f5",
  className = "",
}: ServiceCardshereProps) => {
  const isWhiteCard = !className.includes("bg-[#5142fc]");

  return (
    <div className={`relative bg-white rounded-2xl p-8 shadow-sm ${className}`}>
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full bg-opacity-30"
        style={{
          backgroundColor: accentColor,
          filter: "blur(60px)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="relative z-10">
        <div
          className={`${
            isWhiteCard ? "bg-[#f4f3fe]" : "bg-white bg-opacity-20"
          } w-12 h-12 rounded-xl flex items-center justify-center mb-5`}
        >
          {icon}
        </div>

        <h3
          className={`text-xl font-bold mb-3 ${
            isWhiteCard ? "text-black" : "text-white"
          }`}
        >
          {title}
        </h3>
        <p
          className={`${
            isWhiteCard ? "text-gray-600" : "text-white text-opacity-80"
          } text-sm leading-relaxed`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCardshere;
