import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialCardProps {
  stars: number;
  title: string;
  content: string;
  author: string;
  role: string;
}

const TestimonialCard = ({
  stars,
  title,
  content,
  author,
  role,
}: TestimonialCardProps) => {
  return (
    <div className="bg-[#1A1F2C] p-8 rounded-2xl space-y-4 max-w-7xl ">
      <div className="flex gap-1">
        {[...Array(stars)].map((_, i) => (
          <svg
            key={i}
            className="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <h3 className="text-xl text-white font-medium">{title}</h3>
      <p className="text-gray-400 text-sm">{content}</p>
      <div className="flex items-center gap-3 pt-2">
        <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center">
          <span className="text-white font-medium">{author[0]}</span>
        </div>
        <div>
          <p className="text-white font-medium">{author}</p>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      stars: 5,
      title: "A wonderful Experience!",
      content:
        "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users' choice.",
      author: "Heftiba",
      role: "CEO, Law firm",
    },
    {
      stars: 5,
      title: "Wordpress website Design",
      content:
        "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users' choice.",
      author: "Heftiba",
      role: "CEO, Law firm",
    },
    {
      stars: 5,
      title: "A wonderful Experience!",
      content:
        "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users' choice.",
      author: "Heftiba",
      role: "CEO, Law firm",
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#1A1F2C] overflow-hidden mx-auto">
      <div className="text-center mb-12">
        <p className="text-indigo-600 mb-2">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Testimonials: <span className="text-indigo-600">Trusted</span>
          <br /> by Our Clients
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          At UX Recharge, we specialize in creating modern, user-friendly
          websites tailored for SaaS companies. Our designs are
          conversion-focused, fast, and fully optimized for mobile and SEO.
        </p>
      </div>

      <div className="mt-12 max-w-7xl mx-auto flex justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="flex justify-center">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
