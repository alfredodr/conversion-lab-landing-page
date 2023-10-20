import React from "react";
import { DM_Serif_Text } from "next/font/google";
import Image from "next/image";

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmSerifText",
  weight: "400",
});

const Design = () => {
  return (
    <section className="bg-white my-10 hidden sm:hidden md:block">
      <div className="max-w-[70rem] h-full sm:mx-auto p-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/0529256e-lp-example-2_105u07205u05z000000000.jpg"
                }
                alt={"Landing page example 2"}
                width={210}
                height={215}
                className="shadow-lg"
              />
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/ae4a8cc6-lp-example-1_105u06505u05k000009000.jpg"
                }
                alt="landing page example 3"
                width={210}
                height={200}
                className="shadow-lg mt-8"
              />
            </div>
            <div>
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/5fb560ba-lp-campaignmonitor_105u06n000000000000000.jpg"
                }
                alt={"Landing page campaign monitor"}
                width={210}
                height={239}
                className="shadow-lg mt-10"
              />
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/4201e0a3-lp-example-3_105u08p05u06d000000000.jpg"
                }
                alt="landing page example 3"
                width={210}
                height={229}
                className="shadow-lg mt-10"
              />
            </div>
          </div>
          <div className="w-full">
            <p className="text-sm text-[#7357f6] font-semibold">DESIGN ONLY</p>
            <h2
              className={`text-[#343b55] text-3xl ${dmSerifText.variable} font-dmSerifText mt-2 mb-4`}
            >
              Conversion centered landing pages
            </h2>

            <p className="text-[#595f75] text-sm sm:text-base">
              We have designed high-performing landing pages for the past 8
              years - for large enterprises and small businesses alike.
            </p>
            <h3 className="text-[#343b55] font-semibold mt-5 mb-4">
              Fast delivery
            </h3>
            <p className="text-[#595f75] text-sm sm:text-base">
              Get a high converting landing page in 5 business days. We know how
              critical time to market is.
            </p>
            <h3 className="text-[#343b55] font-semibold mt-5 mb-4">On brand</h3>
            <p className="text-[#595f75] text-sm sm:text-base">
              We create custom landing pages tailored to your brand making sure
              it fits with all your marketing material.
            </p>
            <h3 className="text-[#343b55] font-semibold mt-5 mb-4">
              Easy to implement
            </h3>
            <p className="text-[#595f75] text-sm sm:text-base">
              Your landing page will be delivered as a live URL and you can use
              the code to implement on your platform of choice. Or better yet -
              get a 20% discounted Unbounce account where we set up the page for
              you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
