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

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-white my-10">
      <div className="max-w-[70rem] sm:mx-auto p-6 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 text-left">
          <div className="px-4 py-5 sm:px-14">
            <div>
              <p className="font-medium text-sm mb-4">Location</p>
              <ul className="text-[#343b55] text-xs">
                <li>DIGS coworking space</li>
                <br />
                <li>Krambugata 2</li>
                <br />
                <li>7011 Trondheim </li>
                <br />
                <li>Norway</li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-5 sm:px-14">
            <div>
              <p className="font-medium text-sm mb-4">Privacy</p>
              <span className="text-[#343b55] text-xs">Privacy Policy</span>
            </div>
          </div>
          <div className="px-4 py-5 sm:px-14">
            <div>
              <p className="font-medium text-sm mb-4">About ConversionLab</p>
              <p className="text-[#343b55] text-xs">
                ConversionLab is a small team of dedicated marketers based in
                Trondheim, Norway - serving the world.
              </p>
              <br />
              <span className="text-xs">&#169; {year} ConversionLab</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
