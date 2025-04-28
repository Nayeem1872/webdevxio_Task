import React from "react";
import { Pen, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FAQItemProps {
  number: string;
  question: string;
  answer: string;
}

const FAQItem = ({ number, question, answer }: FAQItemProps) => {
  return (
    <div className="relative p-6 rounded-2xl  transition-colors group cursor-pointer mb-4">
      <div className="flex items-start gap-4">
        <span className="text-2xl font-bold text-indigo-600">{number}</span>
        <div className="flex-1">
          <h3 className="text-xl font-medium mb-2">{question}</h3>
          <p className="text-gray-600">{answer}</p>
        </div>
        <div className="bg-indigo-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
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
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ">
      <div className="mb-2">
        <p className="text-indigo-600 font-medium">FAQ</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Got <span className="text-indigo-600">question?</span> We've got{" "}
            <span className="text-indigo-600">answer.</span>
          </h2>

          <div className="space-y-4">
            <FAQItem
              number="01"
              question="What services does UX Recharge offer?"
              answer="We specialize in designing and developing high-converting websites for SaaS companies."
            />
            <FAQItem
              number="02"
              question="Do you only work with SaaS companies?"
              answer="Yes, we focus exclusively on SaaS companies to deliver specialized solutions."
            />
            <FAQItem
              number="03"
              question="How long does it take to build a SaaS website?"
              answer="Our typical timeline ranges from 4-8 weeks depending on project scope."
            />
            <FAQItem
              number="04"
              question="What tools do you use for development?"
              answer="We use modern tech stack including React, Next.js, and Tailwind CSS."
            />
          </div>
        </div>

        <div className="lg:pl-8">
          <div className="bg-[#1A1F2C] text-white p-8 rounded-3xl mb-6">
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-600/20 p-4 rounded-full">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H15L12 19L9 16ZM8 10C8 10.2761 7.77614 10.5 7.5 10.5C7.22386 10.5 7 10.2761 7 10C7 9.72386 7.22386 9.5 7.5 9.5C7.77614 9.5 8 9.72386 8 10ZM12 10C12 10.2761 11.7761 10.5 11.5 10.5C11.2239 10.5 11 10.2761 11 10C11 9.72386 11.2239 9.5 11.5 9.5C11.7761 9.5 12 9.72386 12 10ZM16 10C16 10.2761 15.7761 10.5 15.5 10.5C15.2239 10.5 15 10.2761 15 10C15 9.72386 15.2239 9.5 15.5 9.5C15.7761 9.5 16 9.72386 16 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">
              You have different question?
            </h3>
            <p className="text-center text-gray-400 mb-6">
              Our team will answer all your questions, we ensure a quick
              response
            </p>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 gap-2">
              <Pen className="w-4 h-4" />
              Contact Us
            </Button>
          </div>

          <div className="bg-white p-6 rounded-3xl">
            <p className="text-gray-600 text-sm mb-2">
              Your comfort our priority
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-2xl">
                <Phone className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold">24/7 Service</h3>
                <p className="text-gray-600">+(000)000000000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
