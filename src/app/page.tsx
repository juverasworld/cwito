"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/navbar";

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full relative bg-none lg:bg-heroLg  h-screen  bg-no-repeat bg-cover">
        <nav className="py-3 border-b-[1px] w-[100%]  z-24 text-[16px] leading-[24px] font-inter  ">
          <div className="flex w-[100%] items-center justify-between md:px-24  px-2">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt=""
                width="400"
                height="10"
                className="w-auto"
              />
            </Link>
            <div className="xl:hidden">
              {/* Hamburger icon for small and medium screens */}
              <button
                className="text-[#808080]  font-500  font-500  font-500"
                onClick={toggleMenu}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2989_5796)">
                    <path
                      d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
                      fill="#0C0900"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2989_5796">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              {isMenuOpen && (
                <div className="lg:flex  flex-col hidden items-center   ">
                  <Link className=" mr-10 [16px] text-[11px]" href="#pricing">
                    About us
                  </Link>
                  <Link className=" mr-10 [16px] text-[11px]" href="#Portfolio">
                    Blog
                  </Link>
                  <Link className=" [16px] text-[11px]  mr-10" href="/about">
                    Product
                  </Link>

                  <Link
                    className="bg-black text-[#fff] leading-[16px] px-[16px] py-[8px] rounded-[5px] text-[11px]"
                    href="/"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
            <div className="lg:flex hidden items-center   ">
              <Link className=" mr-10 [16px] text-[11px]" href="#pricing">
                About us
              </Link>
              <Link className=" mr-10 [16px] text-[11px]" href="#Portfolio">
                Blog
              </Link>
              <Link className=" [16px] text-[11px]  mr-10" href="/about">
                Product
              </Link>

              <Link
                className="bg-black text-[#fff] leading-[16px] px-[16px] py-[8px] rounded-[5px] text-[11px]"
                href="/"
              >
                Login
              </Link>
            </div>
            {/* <Link className="bg-black lg:hidden flex text-[#fff] leading-[16px] px-[16px] py-[8px] rounded-[5px] text-[11px]" href="/">Login</Link> */}
          </div>
        </nav>
        <div className="">
          <div className="bg-heroSm lg:bg-none bg-no-repeat bg-cover  lg:h-screen py-32 flex items-center justify-center  flex-col ">
            <div
              className="font-sans xl:w-[700px] lg:w-[396px]  text-center text-white text-5xl font-semibold
leading-[42px] flex flex-col items-center justify-center mx-auto "
            >
              <p className="font-sans hero">
                Your<span className="text-[#5DC1BD]"> one-stop</span>{" "}
                <br className="" /> shop for crypto <br className="" /> & cash
              </p>
            </div>
            <div className=" font-sans text-[18px] leading-[28pz] lg:w-[490px] text-center p-[2px] my-10  w-[318px] text-zinc-100 text-lg font-normal">
              At Cwito, we ensure effortless conversion of your cryptocurrencies
              into naira instantly.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
