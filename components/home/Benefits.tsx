import React from "react";
import { DM_Serif_Text } from "next/font/google";
import Image from "next/image";

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmSerifText",
  weight: "400",
});

const Benefits = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[70rem] p-6 sm:p-16 sm:mx-auto grid grid-col-1 md:grid-col-3 gap-10">
        <div className="col-span-1 md:col-span-3">
          <h2
            className={`text-2xl text-[#343b55] text-center ${dmSerifText.variable} font-dmSerifText mb-4`}
          >
            Don&apos;t waste money on more traffic
            <br />- fix your landing pages first
          </h2>
          <p className="text-center text-lg text-[#595f75]">
            Benefit from our expertise in designing and managing
            conversion-centered landing pages for your paid traffic. Once
            we&apos;ve designed, completed copy, and built your landing page, we
            optimize it to perform even better over time.
          </p>
        </div>
        <div>
          <div>
            <div>
              <Image
                src={"/rocket.svg"}
                alt={"rocket"}
                width={40}
                height={40}
              />
            </div>
          </div>
          <h3 className="font-bold text-lg my-3">Increase conversion rates</h3>
          <p className="text-[#595f75]">
            Highly targeted landing pages will increase your conversion rates,
            and optimization with A/B testing takes you to the next level.
          </p>
        </div>
        <div>
          <div>
            <div>
              <Image
                src={"/thumbs-up.svg"}
                alt={"thumbs up"}
                width={40}
                height={40}
              />
            </div>
          </div>
          <h3 className="font-bold text-lg my-3">Improve your RO</h3>
          <p className="text-[#595f75]">
            Stop wasting money on more traffic. Get more leads on your existing
            traffic instead. At the end, this skyrockets your ROI.
          </p>
        </div>
        <div>
          <div>
            <div>
              <Image
                src={"/chart-square.svg"}
                alt={"chart square"}
                width={40}
                height={40}
              />
            </div>
          </div>
          <h3 className="font-bold text-lg my-3">
            Reduce cost per acquisition
          </h3>
          <p className="text-[#595f75]">
            Higher conversion rates means you get more business from your
            current traffic, and reduce cost per acquisition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
