import React from "react";
import { DM_Serif_Text } from "next/font/google";
import Image from "next/image";

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmSerifText",
  weight: "400",
});

const Optimization = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[70rem] sm:mx-auto p-6 md:p-16 relative">
        <div className="my-10">
          <h2
            className={`text-center text-[#343b55] text-2xl ${dmSerifText.variable} font-dmSerifText`}
          >
            Our optimization process
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 text-center relative overflow-hidden">
          <span className="w-9/12 h-[0.16rem] absolute top-24 left-0 right-0 mx-auto bg-[#7357f6] hidden sm:block"></span>
          <div className="mx-auto flex flex-col items-center p-4 rounded-md ">
            <div className="relative ">
              <div className="absolute -top-3 right-12 sm:top-16 sm:right-2">
                <span className="rounded-full bg-[#7357f6] w-7 h-7 text-white text-xs font-bold flex flex-col items-center justify-evenly sm:border-4 sm:border-white sm:w-9 sm:h-9">
                  1
                </span>
              </div>
              <Image
                src={"/target.svg"}
                alt={"target goal"}
                width={50}
                height={50}
              />
            </div>
            <div className="my-7 flex-1">
              <h3 className="block text-lg mb-6 sm:mt-10 font-semibold">
                Define goals
              </h3>
              <p className="text-[#595f75] text-sm sm:text-base">
                First we establish your landing page goal. Do you need more
                leads, increase signups or drive sales?
              </p>
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center p-4 rounded-md">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -top-3 right-12 sm:top-16 sm:right-2">
                  <span className="rounded-full bg-[#7357f6] w-7 h-7 text-white text-xs font-bold flex flex-col items-center justify-evenly sm:border-4 sm:border-white sm:w-9 sm:h-9">
                    2
                  </span>
                </div>
                <Image
                  src={"/search.svg"}
                  alt={"search loop"}
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="my-7 flex-1">
              <h3 className="block text-lg mb-6 sm:mt-10 font-semibold">
                Insight & hypothesis
              </h3>
              <p className="text-[#595f75] text-sm sm:text-base">
                Based on insight, experience and analysis we create our
                hypothesis for testing "If we implement X we expect outcome Y".
              </p>
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center p-4 rounded-md">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -top-3 right-12 sm:top-16 sm:right-2">
                  <span className="rounded-full bg-[#7357f6] w-7 h-7 text-white text-xs font-bold flex flex-col items-center justify-evenly sm:border-4 sm:border-white sm:w-9 sm:h-9">
                    3
                  </span>
                </div>
                <Image
                  src={"/palette.svg"}
                  alt={"color palette"}
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="my-7 flex-1">
              <h3 className="block text-lg mb-6 sm:mt-10 font-semibold">
                Design & implement
              </h3>
              <p className="text-[#595f75] text-sm sm:text-base">
                We design your page, write the copy, code and implement using
                Unbounce and integrate with your current leads-flow.
              </p>
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center p-4 rounded-md">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -top-3 right-12 sm:top-16 sm:right-2">
                  <span className="rounded-full bg-[#7357f6] w-7 h-7 text-white text-xs font-bold flex flex-col items-center justify-evenly sm:border-4 sm:border-white sm:w-9 sm:h-9">
                    4
                  </span>
                </div>
                <Image
                  src={"/ab.svg"}
                  alt={"ab testing"}
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="my-7 flex-1">
              <h3 className="block text-lg mb-6 sm:mt-10 font-semibold">
                Test & report
              </h3>
              <p className="text-[#595f75] text-sm sm:text-base">
                To validate our hypothesis for improvement we run A/B split
                tests and report to you on the progress on a weekly basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Optimization;
