import React from "react";
import Image from "next/image";
import { DM_Serif_Text, Kalam } from "next/font/google";

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmSerifText",
  weight: "400",
});

const kalam = Kalam({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kalam",
  weight: "400",
});

const Hero = () => {
  return (
    <section className="bg-[#EFF3FA] min-w-[20rem] ">
      <div className="max-w-[70rem]  mx-[4.5625rem] md:mx-auto grid grid-col-1 md:grid-col-2 md:gap-x-28">
        <div className="relative flex gap-2 justify-center md:justify-start items-center py-4 md:py-0">
          <Image
            src={"/logo.svg"}
            alt={"conversion lab logo"}
            width={40}
            height={39}
          />
          <span className="text-sm md:text-base font-bold opacity-80">
            CONVERSIONLAB
          </span>
        </div>
        <div className="mb-2 md:mb-0 row-span-2">
          <h1
            className={`${dmSerifText.variable} font-dmSerifText opacity-90 text-4xl md:text-[42px] md:leading-[3rem] mb-3`}
          >
            <span>
              Supercharge your{" "}
              <span className="outline outline-offset-1 outline-1 outline-red-300">
                conversion rates
              </span>{" "}
              and increase sales
            </span>
          </h1>
          <div>
            <h2 className="mb-4 text-[#595f75] text-lg md:text-lg bg-[url('https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/a10462db-arrow-1_101601k000000000000000.png')] bg-no-repeat bg-right-bottom md:w-3/4">
              <span>
                We help you grow by designing high-converting landing pages and
                optimizing them through A/B testing to give you more signups,
                leads, and customers.
              </span>
            </h2>
          </div>
          <div className="mx-auto">
            <div className="max-w-[20.1875rem] = mx-auto md:mx-0">
              <button className="cursor-pointer bg-[rgba(115,87,246,1)] text-white rounded-full font-bold text-base w-full max-w-[20.1875rem] h-[3.9375rem] hover:bg-[#634cca] transition delay-300 duration-75 ease-in-out">
                Get my free consult
              </button>
              <p className="text-xs text-[#595F75] text-center mb-5 md:mb-0">
                No tricks, just friendly advice
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto md:relative md:col-start-2 md:row-start-1 md:row-span-3 bg-[url('https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/abe8d2af-profile-finge-shirt-shadow_108w0e007w07t000000000.jpg')]  md:bg-[url('https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/abe8d2af-profile-finge-shirt-shadow_10ae0gc000000000000000.jpg')] bg-no-repeat bg-contain bg-bottom w-[17.75rem] md:w-[23.375rem] h-[17.5625rem]  md:h-[38.25rem]">
          <div className="mt-20 md:mt-0 md:absolute md:top-32 md:right-6 w-full">
            <span
              className={`${kalam.variable} font-kalam text-[0.6rem] md:text-sm text-[#595f75] font-bold block`}
            >
              Hi there! I'm Finge,
            </span>
            <span
              className={`${kalam.variable} font-kalam text-[0.6rem] md:text-sm text-[#595f75] font-bold block`}
            >
              founder of ConversionLab
            </span>
          </div>
          <div className="mt-16 md:mt-0 md:absolute md:top-60 md:right-80 bg-white grid grid-cols-3 w-[11.25rem] md:w-[11.875rem] h-[4.375rem] md:h-[5rem] rounded drop-shadow-lg">
            <div className="col-span-2 m-auto">
              <span className="block text-sm">Conversion Rate</span>
              <span className="block text-xs opacity-60">
                +36% vs last 6 mths
              </span>
            </div>
            <div className="m-auto">
              <Image
                src={"/chart-arrow.svg"}
                alt={"chart up arrow circle"}
                width={34}
                height={34}
              />
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:absolute md:top-[22rem] md:right-56 bg-white grid grid-cols-3 w-[11.25rem] md:w-[11.875rem] h-[4.375rem] md:h-[5rem] rounded drop-shadow-lg invisible md:visible">
            <div className="col-span-2 m-auto">
              <span className="block text-sm">Cost per lead</span>
              <span className="block text-xs opacity-60">
                -24% vs last 6 mths
              </span>
            </div>
            <div className="m-auto">
              <Image
                src={"/chart-arrow.svg"}
                alt={"chart up arrow circle"}
                width={34}
                height={34}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
