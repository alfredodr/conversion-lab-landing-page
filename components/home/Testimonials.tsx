import React from "react";
import { Gravitas_One, DM_Serif_Text } from "next/font/google";
import Image from "next/image";

const gravitasOne = Gravitas_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gravitasOne",
  weight: "400",
});

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmSerifText",
  weight: "400",
});

const Testimonials = () => {
  return (
    <section className="bg-white my-10">
      <div className="max-w-[70rem] sm:mx-auto p-6 md:p-16 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 text-center">
          <div className="flex flex-col items-center justify-center bg-[#fdf2e4] px-4 py-5 sm:px-14">
            <span className={`text-[1.75rem] text-center md:text-start mt-8`}>
              <span
                className={`text-[#FACD76] text-[3rem] ${gravitasOne.variable} font-gravitasOne`}
              >
                “
              </span>
            </span>
            <div className="flex-1">
              <h3 className="-mt-6 md:-mt-5 mb-4 font-medium">
                A World-Class agency
              </h3>
              <p className="text-[#343b55] text-sm sm:text-base">
                ConversionLab has a knack for drawing out new and inventive
                tactics from tried-and-true methods that deliver real results.
                Their reputation for optimizing is only matched by their
                friendliness, and that's incredibly rare.
              </p>
            </div>
            <div className="mb-5 flex flex-col items-center justify-center">
              <p className="text-xs my-5">
                <span className="font-semibold">JESSICA BURNHAM</span>
                <br />
                <span className="text-[#53606d]">
                  Advocacy & Community Manager
                </span>
                <br />
                <span className="font-semibold">Unbounce</span>
              </p>
              <div className="relative w-[3.0625rem] h-[3.0625rem] sm:w-[3.75rem] sm:h-[3.75rem] m-0 sm:m-auto">
                <Image
                  src={
                    "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/2dc819f9-62215920-jess-burnham-106y06y000000000000000_101o01o01o01n000000000.jpg"
                  }
                  alt={
                    "JESSICA BURNHAM Advocacy and Community Manager, Unbounce"
                  }
                  fill
                  className="object-contain rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between bg-[#fdf2e4] px-4 py-5 sm:px-14">
            <span className={`text-[1.75rem] text-center md:text-start mt-8`}>
              <span
                className={`text-[#FACD76] text-[3rem] ${gravitasOne.variable} font-gravitasOne`}
              >
                “
              </span>
            </span>
            <div className="flex-1">
              <h3 className="-mt-6 md:-mt-5 mb-4 font-medium">
                Record low cost per lead
              </h3>
              <p className="text-[#343b55] text-sm sm:text-base">
                ConversionLab helped Nintex implement a conversion optimization
                strategy to grow our lead generation. They designed and
                optimized high-performing landing pages where conversion rates
                skyrocketed and cost per lead dropped to record lows!
              </p>
            </div>
            <div className="mb-5 flex flex-col items-center justify-center">
              <p className="text-xs my-5">
                <span className="font-semibold">MENILIK HENRY DYER</span>
                <br />
                <span className="text-[#53606d] text-sm">
                  Marketing Manager
                </span>
                <br />
                <span className="font-semibold text-sm">
                  Nintex & Promapp Solutions
                </span>
              </p>
              <div className="relative w-[3.0625rem] h-[3.0625rem] sm:w-[3.75rem] sm:h-[3.75rem] m-0 sm:m-auto">
                <Image
                  src={
                    "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/614af18b-1526676280241_101t01t01o01n000005000.jpeg"
                  }
                  alt={
                    "MENILIK HENRY DYER Marketing Manager Nintex and Promapp Solutions"
                  }
                  fill
                  className="object-contain rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
