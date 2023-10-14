import React from "react";
import { DM_Serif_Text } from "next/font/google";
import Image from "next/image";

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmSerifText",
  weight: "400",
});

const Providers = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[70rem] sm:mx-auto p-6 md:p-16 text-center">
        <div className="mt-10 mb-28 max-w-[44.875rem] mx-auto">
          <p className="text-sm sm:text-lg text-[#7357f6] font-semibold">
            Full Service
          </p>
          <h2
            className={` text-[#343b55] text-2xl sm:text-3xl ${dmSerifText.variable} font-dmSerifText my-4`}
          >
            A/B testing reduced customer acquisition cost for Campaign Monitor
          </h2>
          <p className="text-[#595f75] text-lg">
            Campaign Monitor is one of the worlds leading Email Marketing
            software providers, and they partnered up with us at ConversionLab
            to get higher conversion rates. By systematically A/B testing
            landing pages we have contributed to reducing their customer
            acquisition cost by 60%.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 text-center">
          <div className="mx-auto flex flex-col items-center relative rounded-full">
            <div className="absolute -top-12 left-0 sm:-top-20 sm:left-32 z-10 bg-[#f5f6fab5] rounded-full">
              <span className="w-10 h-10 text-[#405cbf] text-3xl font-bold flex flex-col items-center justify-evenly p-8">
                A
              </span>
            </div>
            <div className="w-full h-full relative">
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/0113b042-cm-screenshot-a_10ci084000000000000000.jpg"
                }
                alt={"Elegantly simple email marketing"}
                width={450}
                height={92}
              />
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center rounded-full relative">
            <div className="absolute -top-12 left-0 sm:-top-20 sm:left-32 z-10 bg-[#405cbfb3] rounded-full">
              <span className="w-10 h-10 text-white text-3xl font-bold flex flex-col items-center justify-evenly p-8">
                B
              </span>
            </div>
            <div className="absolute -top-10 right-3 z-10 bg-[#F3F8F5] rounded-full shadow-md w-16 h-16 text-[#6AD19E] text-xs font-bold flex flex-col items-center justify-evenly p-10">
              <div>
                <Image
                  src={"cup.svg"}
                  alt={"Cup"}
                  width={30}
                  height={40}
                  className="mx-auto"
                />
                <p>Winner</p>
              </div>
            </div>
            <div className="w-full h-full relative">
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/8055ed47-cm-screenshot-b_10ci084000000000000000.jpg"
                }
                alt={"Send Emails. Fast. Easy"}
                width={450}
                height={92}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Providers;
