import React from "react";
import { DM_Serif_Text } from "next/font/google";
import Image from "next/image";

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmSerifText",
  weight: "400",
});

const Acquisition = () => {
  return (
    <section className="bg-[#f2f8f6]">
      <div className="max-w-[70rem] h-full sm:mx-auto px-6 sm:px-0 sm:pt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-32">
          <div className="sm:order-last w-full ">
            <h2
              className={`text-[#343b55] text-2xl ${dmSerifText.variable} font-dmSerifText my-5`}
            >
              Expect increase in conversion rates with targeted landing pages
            </h2>

            <p className="text-[#595f75] text-sm sm:text-base mb-4">
              Relevant messaging is key to getting more leads, sales, and
              sign-ups—so give your visitors exactly what they’re looking for
              with custom-built landing pages.
            </p>
            <p className="text-[#595f75] text-sm sm:text-base">
              With targeted landing pages you will experience more leads from
              the same amount of traffic due to higher conversion rates. In
              turn, this will reduce your cost per lead or cost per acquisition.
            </p>
          </div>
          <div className="flex">
            <div className="relative">
              {/* Desktop */}
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/d58c7c96-finge-point-right-t_10hw0p80hw0p6000000000.png"
                }
                alt={"Finge point right"}
                width={322}
                height={453}
                className="relative z-10 hidden sm:block"
              />
              {/* Mobile */}
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/d58c7c96-finge-point-right-t_106i09706i096000000000.png"
                }
                alt={"Finge point right"}
                width={234}
                height={330}
                className="relative z-10 block sm:hidden"
              />

              <div className="bg-white p-2 sm:p-3 absolute -top-6 -right-10 sm:-right-24 sm:-top-12">
                <span className="text-xs font-bold absolute top-2 left-24 sm:top-10 sm:left-16">
                  +34% CVR
                </span>
                {/* Desktop */}
                <Image
                  src={
                    "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/1813618f-67cd8e60-trusy-chart-purple-10oc0ai000000000000000_108903k05z03k000000000.png"
                  }
                  alt="trusy chart purple"
                  width={215}
                  height={128}
                  className="hidden sm:block"
                />
                {/* Mobile */}
                <Image
                  src={
                    "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/1813618f-67cd8e60-trusy-chart-purple-10oc0ai000000000000000_106x02z05002z000000000.png"
                  }
                  alt="trusy chart purple"
                  width={180}
                  height={107}
                  className="block sm:hidden"
                />
              </div>

              <div className="absolute top-28 -right-20 sm:-right-36 sm:top-36">
                {/* Desktop */}
                <Image
                  src={
                    "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/0529256e-lp-example-2_105u07205u05k000000000.jpg"
                  }
                  alt="landing page example 2"
                  width={210}
                  height={200}
                  className="hidden sm:block"
                />
                {/* Mobile */}
                <Image
                  src={
                    "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/0529256e-lp-example-2_103o04g03o03i000000000.jpg"
                  }
                  alt="landing page example 2"
                  width={132}
                  height={126}
                  className="block sm:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acquisition;
