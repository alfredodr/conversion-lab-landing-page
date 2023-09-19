import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll === 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <>
      <header>
        <nav
          className={`bg-white z-10 fixed left-0 right-0 top-0 border border-solid border-b-slate-200 opacity-95  ${
            isVisible
              ? "transition-opacity ease-in delay-150"
              : "opacity-0 transition-opacity ease-out delay-150"
          }`}
        >
          <ul className="flex flex-col md:flex-row  m-0 p-0 list-none gap-1 md:gap-16 justify-center md:justify-center items-center h-48 md:h-20">
            <li className="flex justify-center gap-2 items-center w-full md:w-3/12">
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/conversionlab.no/44b07cdf-logo-icon.svg"
                }
                alt={"conversion lab logo"}
                width={40}
                height={39}
              />
              <span className="text-base font-bold opacity-80">
                CONVERSIONLAB
              </span>
            </li>
            <li className="text-xs font-bold text-[#595F75] hidden md:block">
              <Link href={"#"}>OUR SERVICES</Link>
            </li>
            <li className="text-xs font-bold text-[#595F75] hidden md:block">
              <Link href={"#"}>OUR PROCESS</Link>
            </li>
            <li className="cursor-pointer bg-[rgba(115,87,246,1)] text-white rounded-full font-bold text-sm px-12 py-3 hover:bg-[#634cca] transition delay-300 duration-75 ease-in-out">
              Get my free consult
            </li>
            <li className="visible  md:hidden">
              <span className="text-xs text-[#595F75]">
                No tricks, just friendly advice
              </span>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
