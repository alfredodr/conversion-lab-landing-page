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
    <section className="bg-[#EFF3FA]">
      <div className="max-w-[73rem] mx-auto px-10 grid grid-col-1 md:grid-col-2 ">
        <div>
          <div className="relative flex gap-2 justify-center md:justify-start items-center py-4 md:py-0 md:mt-5 md:mb-20">
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
          <div className="mb-2 md:mb-0">
            <h1
              className={`${dmSerifText.variable} font-dmSerifText opacity-90 md:leading-[3rem] mb-3 sm:mb-1 md:mb-3 text[#343b55] max-w-[34.75rem]`}
            >
              Supercharge your conversion rates and increase sales
            </h1>
            <div>
              <p className="text-[#595f75] text-lg md:text-lg md:w-3/4  mb-4 md:mb-10">
                We help you grow by designing high-converting landing pages and
                optimizing them through A/B testing to give you more signups,
                leads, and customers.
              </p>
            </div>
            <div>
              <div className="max-w-[20.1875rem] text-center sm:text-left">
                <button className="cursor-pointer bg-[#7357f6] text-white rounded-full font-bold text-base w-full h-[3.75rem] hover:bg-[#634cca] transition delay-300 duration-75 ease-in-out relative">
                  Get my free consult
                  <Image
                    src={
                      "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/a10462db-arrow-1_101601k000000000000000.png"
                    }
                    alt="arrow"
                    width={52}
                    height={70}
                    className="absolute -top-20 right-0 sm:-right-[1%] md:-right-[20%] md:-top-[70%]"
                    priority
                  />
                </button>
                <p className="text-xs text-[#595F75] text-center mb-5 sm:mb-0">
                  No tricks, just friendly advice
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative sm:col-start-2 mt-10 w-full h-[17.5625rem] sm:w-[18rem] sm:h-[36.75rem] md:w-[23.375rem]">
          {/* Desktop */}
          <Image
            src={
              "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/abe8d2af-profile-finge-shirt-shadow_10ae0gc000000000000000.jpg"
            }
            alt="Finge, founder of ConversionLab"
            fill
            className="hidden sm:block "
            priority
          />
          {/* Mobile */}
          <Image
            src={
              "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/abe8d2af-profile-finge-shirt-shadow_108w0e007w07t000000000.jpg"
            }
            alt="Finge, founder of ConversionLab"
            fill
            className="block sm:hidden"
            priority
          />

          <div className="mt-20 md:mt-0 md:absolute md:top-24 md:right-16 w-full">
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
          <div className="mt-16 md:mt-0 md:absolute md:top-52 md:right-72 bg-white w-[11.25rem] md:w-[11.875rem] h-[4.375rem] md:h-[5rem] rounded drop-shadow-lg flex items-center justify-between px-5">
            <div>
              <span className="block text-sm">Conversion Rate</span>
              <span className="block text-xs opacity-60">
                +36% vs last 6 mths
              </span>
            </div>
            <div>
              <Image
                src={"/chart-arrow.svg"}
                alt={"chart up arrow circle"}
                width={34}
                height={34}
              />
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:absolute md:top-80 md:right-52 bg-white w-[11.25rem] md:w-[11.875rem] h-[4.375rem] md:h-[5rem] rounded drop-shadow-lg invisible md:visible flex items-center justify-between px-5">
            <div>
              <span className="block text-sm">Cost per lead</span>
              <span className="block text-xs opacity-60">
                -24% vs last 6 mths
              </span>
            </div>
            <div>
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
