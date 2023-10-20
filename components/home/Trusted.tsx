import React from "react";
import { DM_Serif_Text } from "next/font/google";
import Image from "next/image";

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmSerifText",
  weight: "400",
});

const Trusted = () => {
  return (
    <section className="bg-[#eff3fa]">
      <div className="max-w-[70rem] p-6 sm:p-16 sm:mx-auto">
        <div className="hidden md:block">
          <h2 className="text-center text-[#afb8bf] text-sm">TRUSTED BY</h2>
          <div className="flex items-center justify-between gap-5 mt-10 mb-20 w-full">
            <div>
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/4226f733-logo-campaignmonitor_103w00e000000000000000.png"
                }
                alt={"Logo campaign monitor"}
                width={140}
                height={14}
              />
            </div>
            <div>
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/8138ba7e-logo-questback_103c00j000000000000000.png"
                }
                alt={"Logo questback"}
                width={120}
                height={19}
              />
            </div>
            <div>
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/0670c634-logo-nintex-alt_103c00v000000000000000.png"
                }
                alt={"Logo nintex"}
                width={120}
                height={31}
              />
            </div>
            <div>
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/ea70aa9d-logo-signicat_103c00e000000000000000.png"
                }
                alt={"Logo signicat"}
                width={120}
                height={14}
              />
            </div>
            <div>
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/e11041fb-logo-eiendomsmegler1_103c00l000000000000000.png"
                }
                alt={"Logo eiendomsmegler"}
                width={120}
                height={21}
              />
            </div>
          </div>
        </div>
        <div>
          <h3
            className={`text-2xl sm:text-3xl text-[#343b55] text-center ${dmSerifText.variable} font-dmSerifText mb-4`}
          >
            Supercharge your conversion rates and increase sales
          </h3>
          <p className="text-center text-base text-[#595f75] max-w-[28.0625rem] mx-auto">
            We make sure you get more leads by creating and optimizing high
            performing landing pages.
          </p>
        </div>

        <div className="max-w-[23.125rem] mx-auto sm:text-left relative">
          <div className="w-[2.25rem] h-[3rem] md:w-[3.25rem] md:h-[4.375rem] absolute -top-5 right-2 sm:-top-8 sm:-right-14">
            <Image
              src={
                "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/a10462db-arrow-1_101601k000000000000000.png"
              }
              alt="arrow"
              fill
            />
          </div>
          <button className="cursor-pointer bg-[#7357f6] text-white rounded-full font-bold text-sm sm:text-base w-full h-[3.75rem] hover:bg-[#634cca] transition delay-300 duration-75 ease-in-out mt-10">
            Get my free consult
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
