import React from "react";
import { Gravitas_One } from "next/font/google";
import Image from "next/image";

const gravitasOne = Gravitas_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gravitasOne",
  weight: "400",
});

const Stats = () => {
  return (
    <section className="bg-[#FDF2E4]">
      <div className="max-w-[70rem] sm:mx-auto p-6 md:p-16">
        <div className="flex flex-col sm:flex-row justify-between gap-8 mb-8">
          <div className="col-span-2 ">
            <span className={`text-[1.75rem] block text-center md:text-start`}>
              <span
                className={`text-[#FACD76] text-6xl md:text-[6.375rem] ${gravitasOne.variable} font-gravitasOne`}
              >
                “
              </span>
            </span>
            <p className="text-lg text-[#2f353e] md:text-2xl md:leading-9 -mt-6 md:-mt-10">
              ConversionLab has helped Campaign Monitor grow our business by
              optimizing our landing pages. We’ve increased conversion rates by
              260% and seen a significant reduction in customer acquisition
              cost. We are very happy with the results!
            </p>
          </div>
          <div className="flex flex-row sm:flex-col justify-start gap-8 sm:gap-4">
            <div className="relative w-[5.25rem] h-[5.1875rem] md:w-[8.875rem] md:h-[8.875rem] m-0 sm:m-auto">
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/6f4a786d-shamita-crop_104t04j03y03y00j000000.jpg"
                }
                alt={"Shamita Jayakumar. Senior Marketing Manager"}
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div className="my-auto text-start sm:text-center w-max">
              <span className="block font-semibold text-sm">
                Shamita Jayakumar
              </span>
              <span className="block text-[#2f353e] text-sm">
                Senior Marketing Manager
              </span>
              <div className="relative w-[8.0625rem] h-[0.8125rem] sm:w-[8.75rem] sm:h-[0.875rem] mx-0 sm:mx-auto mt-2 ">
                <Image
                  src={
                    "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/c99b4c6d-cm-full-dark-dark_103l00d000000000000000.png"
                  }
                  alt={"Campaign Monitor"}
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="block">
            <span className="font-semibold text-3xl md:text-4xl block">
              1187%
            </span>
            <h3 className="block text-base my-2 font-semibold">
              UPLIFT IN CVR
            </h3>
            <p className="text-[#2f353e]">
              The total uplift combined at an average 36% uplift per test.
            </p>
          </div>
          <div className="hidden md:block ">
            <span className="font-semibold text-3xl md:text-4xl block">33</span>
            <h3 className="block text-base my-2 font-semibold">
              A/B TESTS PERFORMED
            </h3>
            <p className="text-[#2f353e]">
              Based on solid hypothesis and across several pages.
            </p>
          </div>
          <div className="block ">
            <span className="font-semibold text-3xl md:text-4xl block">
              64%
            </span>
            <h3 className="block text-base my-2 font-semibold">
              REDUCTION IN CAC
            </h3>
            <p className="text-[#2f353e]">
              Increased conversion rates means reduced customer acquisition
              cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
