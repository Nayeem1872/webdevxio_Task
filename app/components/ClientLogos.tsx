import Image from "next/image";

const ClientLogos = () => {
  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 opacity-60">
          <Image
            src="/images/c1.png"
            alt="Client Logo 1"
            width={150}
            height={50}
            className="h-10 w-auto"
          />
          <Image
            src="/images/c2.png"
            alt="Client Logo 2"
            width={150}
            height={50}
            className="h-10 w-auto"
          />
          <Image
            src="/images/c3.png"
            alt="Client Logo 3"
            width={150}
            height={50}
            className="h-10 w-auto"
          />
          <Image
            src="/images/c4.png"
            alt="Client Logo 4"
            width={150}
            height={50}
            className="h-10 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
