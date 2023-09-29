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
      <div className="min-w-[20rem] max-w-[60rem] mx-[4.5625rem] md:mx-auto grid p-6 md:p-16 gap-16 ">
        <div className="col-span-2 ">
          <span className={`text-[1.75rem] block text-center md:text-start`}>
            <span
              className={`text-[#FACD76] text-6xl md:text-[6.375rem] ${gravitasOne.variable} font-gravitasOne`}
            >
              “
            </span>
          </span>
          <p className="text-xl md:text-2xl md:leading-9 -mt-6 md:-mt-10">
            ConversionLab has helped Campaign Monitor grow our business by
            optimizing our landing pages. We’ve increased conversion rates by
            260% and seen a significant reduction in customer acquisition cost.
            We are very happy with the results!
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 grid grid-cols-3 md:grid-cols-1 md:col-start-3 ">
          <div className="relative w-[5.25rem] h-[5.1875rem] md:w-[8.875rem] md:h-[8.875rem] m-auto">
            <Image
              src={
                "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/6f4a786d-shamita-crop_104t04j03y03y00j000000.jpg"
              }
              alt={"Shamita Jayakumar. Senior Marketing Manager"}
              fill
              quality={100}
              className="object-contain rounded-full"
            />
          </div>
          <div className="col-span-2 my-auto md:my-0 md:mx-auto ">
            <span className="block font-bold">Shamita Jayakumar</span>
            <span className="block">Senior Marketing Manager</span>
            <div className="relative w-[8.0625rem] h-[0.8125rem] overflow-hidden">
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
        <div className="block">
          <span className="font-semibold text-4xl block">1187%</span>
          <h3 className="block text-base my-2">UPLIFT IN CVR</h3>
          <p>The total uplift combined at an average 36% uplift per test.</p>
        </div>
        <div className="hidden md:block ">
          <span className="font-semibold text-4xl block my-2">33</span>
          <h3 className="block text-base">A/B TESTS PERFORMED</h3>
          <p>Based on solid hypothesis and across several pages.</p>
        </div>
        <div className="block ">
          <span className="font-semibold text-4xl block">64%</span>
          <h3 className="block text-base my-2">REDUCTION IN CAC</h3>
          <p>
            Increased conversion rates means reduced customer acquisition cost.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
