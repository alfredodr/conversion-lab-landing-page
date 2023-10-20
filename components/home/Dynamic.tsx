import React from "react";
import { DM_Serif_Text, Roboto } from "next/font/google";
import Image from "next/image";
import TypingAnimation from "@/components/home/TypingAnimation";

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmSerifText",
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: "400",
});

const Dynamic = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[70rem] sm:mx-auto p-6 md:p-16 text-center">
        <div className="my-10 max-w-[44.875rem] mx-auto">
          <h2
            className={` text-[#343b55] text-2xl sm:text-3xl ${dmSerifText.variable} font-dmSerifText my-4`}
          >
            Dynamic page content for 100% relevancy
          </h2>
          <p className="text-[#595f75] text-lg">
            By using dynamic text replacement we can tailor the content to match
            each and every ad on Google Ads without having to create multiple
            pages. The tight message match ensures higher relevancy for the user
            - and Google rewards you with higher quality score as they too will
            see the message match. The below example gave a 58% uplift in
            conversion rates using dynamic text replacement.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-16 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-full relative flex flex-col items-center justify-evenly mb-10 sm:mb-0">
              <div className="border-2 border-opacity-50 hidden sm:block">
                {/* Desktop */}
                <Image
                  src={
                    "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/2843d7f9-ad-elegantly-simple_10bo02d000000000000000.png"
                  }
                  alt={"ad elegantly simple"}
                  width={420}
                  height={85}
                />
              </div>
              <div className="border-2 border-opacity-50 hidden sm:block">
                {/* Desktop */}
                <Image
                  src={
                    "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/68e307b5-ad-professional-software_10bo02g0bo02d000001000.png"
                  }
                  alt={"ad professional software"}
                  width={420}
                  height={85}
                />
              </div>
              <div className="border-2 border-opacity-50 mb-5 sm:mb-0 block sm:hidden">
                {/* Mobile */}
                <Image
                  src={
                    "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/2843d7f9-ad-elegantly-simple_108w01t000000000000000.png"
                  }
                  alt={"ad elegantly simple"}
                  width={420}
                  height={85}
                />
              </div>
              <div className="border-2 border-opacity-50 block sm:hidden">
                {/* Mobile */}
                <Image
                  src={
                    "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/68e307b5-ad-professional-software_10bo02g0bo02d000001000.png"
                  }
                  alt={"ad professional software"}
                  width={420}
                  height={85}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center">
            <div>
              <div className="w-full h-full relative">
                {/* Desktop */}
                <Image
                  src={
                    "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/4d838d0c-lp-cm-dynamic-canvas_10do0bl0do09e000002000.jpg"
                  }
                  alt={"landing page cm dynamic canvas"}
                  width={492}
                  height={338}
                  className="hidden sm:block"
                />
                {/* Mobile */}
                <Image
                  src={
                    "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/4d838d0c-lp-cm-dynamic-canvas_10do0bl0do09e000002000.jpg"
                  }
                  alt={"landing page cm dynamic canvas"}
                  width={401}
                  height={65}
                  className="block sm:hidden"
                />
                <div
                  className={`z-10 font-medium flex flex-row ${roboto.variable} font-roboto text-base sm:text-xs md:text-lg lg:text-xl xl:text-2xl text-opacity-50 text-left absolute top-10 left-10 sm:top-[19%] sm:left-[12%] md:top-[20%] md:left-[12%] max-w-[9rem] sm:max-w-[17rem] sm:max-h-[3.625rem`}
                >
                  <TypingAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dynamic;
