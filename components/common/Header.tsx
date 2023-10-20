import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
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

    if (winScroll > 360) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <header
      className={cn(
        "bg-white z-20 fixed left-0 right-0 top-0 border border-solid border-b-slate-200 easy-out opacity-0 transition-opacity delay-150 invisible",
        {
          "ease-in opacity-95 visible": isVisible,
        }
      )}
    >
      <div className="max-w-[60rem] mx-auto block md:flex md:flex-row md:justify-between items-center">
        <div className="flex gap-2 justify-center items-center w-full md:w-3/12 my-4 md:my-0">
          <Image
            src={"/logo.svg"}
            alt={"conversion lab logo"}
            width={40}
            height={39}
          />
          <span className="text-sm md:text-base font-bold opacity-80">
            CONVERSIONLAB
          </span>
        </div>
        <nav>
          <ul className="flex flex-col md:flex-row  m-0 p-0 list-none gap-0 md:gap-16 justify-center md:justify-center items-center md:min-h-[5.44rem]">
            <li className="text-xs font-bold text-[#595F75] hidden md:block lg:block">
              <Link href={"#"}>OUR SERVICES</Link>
            </li>
            <li className="text-xs font-bold text-[#595F75] hidden md:block lg:block">
              <Link href={"#"}>OUR PROCESS</Link>
            </li>
            <li>
              <button className="cursor-pointer bg-[rgba(115,87,246,1)] text-white rounded-full font-bold text-sm px-16 md:px-12 py-3 hover:bg-[#634cca] transition delay-300 duration-75 ease-in-out">
                Get my free consult
              </button>
            </li>
          </ul>
        </nav>
        <p className="md:hidden text-xs text-[#595F75] text-center mb-5 md:mb-0">
          No tricks, just friendly advice
        </p>
      </div>
    </header>
  );
};

export default Header;
