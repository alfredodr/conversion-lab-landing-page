import React from "react";
import { DM_Serif_Text } from "next/font/google";
import Image from "next/image";

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmSerifText",
  weight: "400",
});

const Services = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[70rem] sm:mx-auto p-6 md:p-16">
        <div className="my-10">
          <h2
            className={`text-center text-[#343b55] text-2xl ${dmSerifText.variable} font-dmSerifText`}
          >
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-5 text-center">
          <div className="bg-[#F5F6FA] flex flex-col items-center relative px-4 py-10 rounded-md">
            <div className="absolute -top-10 right-0">
              <p className="rounded-full bg-[#6ad19e] w-16 h-16 text-white text-xs font-bold flex flex-col items-center justify-evenly p-10">
                MOST POPULAR
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Image
                  src={"/palette.svg"}
                  alt={"color palette"}
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-[#7357f6] text-2xl font-bold mx-2">+</span>
              <div>
                <Image
                  src={"/ab.svg"}
                  alt={"ab testing"}
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-[#7357f6] text-2xl font-bold mx-2">+</span>
              <div>
                <Image
                  src={"/chart-square.svg"}
                  alt={"chart square"}
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="my-5 sm:mb-14 sm:mx-16 flex-1">
              <h3 className="block text-lg my-2 font-semibold">
                Full service - growth
              </h3>
              <p className="text-[#595f75] text-sm sm:text-base">
                Serious about optimization? Outsource everything to us. We
                design, optimize, analyze and report on your results on a
                monthly retainer.
              </p>
            </div>
            <button className="cursor-pointer bg-[#7357f6] text-white text-sm sm:text-base rounded-full font-bold w-max hover:bg-[#634cca] transition delay-300 duration-75 ease-in-out relative p-4">
              I need help with growth
            </button>
          </div>
          <div className="bg-[#F5F6FA] flex flex-col items-center px-4 py-10 rounded-md">
            <div className="flex items-center justify-center">
              <div>
                <Image
                  src={"/palette.svg"}
                  alt={"color palette"}
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="my-5 sm:mb-14 sm:mx-16 flex-1">
              <h3 className="block text-lg font-semibold">Design only</h3>
              <p className="text-[#595f75] text-sm sm:text-base">
                We create your custom landing page to meet your conversion
                objective and brand, including copy and design at a fixed price.
              </p>
            </div>
            <button className="cursor-pointer bg-[#7357f6] text-white text-sm sm:text-base rounded-full font-bold w-max hover:bg-[#634cca] transition delay-300 duration-75 ease-in-out relative p-4">
              I need help with design
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
