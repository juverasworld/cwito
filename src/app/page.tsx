"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/navbar";
// import Reg from "../../components/reg";

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full relative bg-none lg:bg-heroLg  h-auto  bg-no-repeat bg-cover">
        <nav className="py-3  border-b-[1px] w-[100%]  z-24 text-[16px] leading-[24px] font-sans ">
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
                    className="bg-black text-[#fff] leading-[16px] px-[20px] py-[5px] rounded-[5px] text-[11px]"
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
              <Link className=" [16px] text-[11px]  mr-10" href="/about">
                Product
              </Link>
              <Link className=" mr-10 [16px] text-[11px]" href="#Portfolio">
                Blog
              </Link>

              <Link
                className="bg-black text-[#fff] leading-[16px] px-[20px] py-[6px] rounded-[5px] text-[11px]"
                href="/"
              >
                Login
              </Link>
            </div>
            {/* <Link className="bg-black lg:hidden flex text-[#fff] leading-[16px] px-[16px] py-[8px] rounded-[5px] text-[11px]" href="/">Login</Link> */}
          </div>
        </nav>
<div className="absolute top-36 bottom-11 right-1" >
  <img src="/imgs/chatbox" alt="" />
</div>
        <div className="relative">
          <div className="bg-heroSm lg:bg-none bg-no-repeat bg-cover  relative  md:pt-52 pt-44   ">
            <div className=" flex items-center justify-center  flex-col ">
              <div
                className="font-sans xl:w-[700px] lg:w-[396px] w-auto  text-center text-white text-5xl font-semibold
leading-[42px] flex flex-col items-center justify-center mx-auto "
              >
                <p className="font-sans  ">
                  Your<span className="text-[#5DC1BD]"> one-stop</span>{" "}
                  <br className="" /> shop for crypto <br className="" /> & cash
                </p>
              </div>

              <div className=" font-sans text-[18px] leading-[28pz] lg:w-[490px] text-center p-[2px] my-10  w-[318px] text-zinc-100 text-lg font-normal">
                At Cwito, we ensure effortless conversion of your
                cryptocurrencies into naira instantly.
              </div>
              <div className="w-[259px] h-[60px] p-6 bg-white rounded-lg my-4 justify-center items-center gap-2 inline-flex border-0 ">
                <div className="justify-center items-center flex">
                  <Link
                    href="#"
                    className="text-center text-teal-950 text-lg font-medium font-sans leading-7"
                  >
                    Download Cwito
                  </Link>
                </div>
              </div>
              <Link
                href="/"
                className="text-stone-300 text-base  font-sans underline leading-normal font-thin"
              >
                Create a free account
              </Link>
            </div>
            <div className="w-full bg-[#023436] backdrop-filter backdrop-blur-lg   ">
              <div className="flex justify-center items-center py-36 ">
                <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-24 gap-y-6 p-2">
                  <div className="">
                    <p
                      className="text-grad 200 text-[38px] font-semibold
font-sans leading-[38px]"
                    >
                      23K
                    </p>
                    <p
                      className="font-sans text-stone-300
text-[21px] font-normal leading-[27px]"
                    >
                      Traders Like you
                    </p>
                  </div>

                  <div className="">
                    <p
                      className="text-grad 200 text-[38px] font-semibold
font-sans leading-[38px]"
                    >
                      2X faster
                    </p>
                    <p
                      className="font-sans text-stone-300
text-[21px] font-normal leading-[27px]"
                    >
                      Payout Time
                    </p>
                  </div>
                  <div className="">
                    <p
                      className="text-grad 200 text-[38px] font-semibold
font-sans leading-[38px]"
                    >
                      $17 million
                    </p>
                    <p
                      className="font-sans text-stone-300
text-[21px] font-normal leading-[27px]"
                    >
                      Payout processed
                    </p>
                  </div>
                  <div className="">
                    <p
                      className="text-grad 200 text-[38px] font-semibold
font-sans leading-[38px]"
                    >
                      24/7
                    </p>
                    <p
                      className="font-sans text-stone-300
text-[21px] font-normal leading-[27px]"
                    >
                      Support System
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 bg-opacity-25 ">
        <div className="flex lg:flex-row flex-col items-center justify-center container mx-auto">
          <div className="bg-white lg:w-[699px] flex  flex-col h-[720px] w-full mx-5  rounded-[18px] shadow border p-5">
            <Image
              src="/imgs/reg.svg"
              width="5"
              height="5"
              alt=""
              className="w-[454.97px] h-[376.39px] "
            />
            <div className=" text-black text-[50px] font-semibold font-sans leading-[40px] tracking-[-6%] my-3">
              Simple and secure <br className="lg:flex hidden" /> registration
              process
            </div>
            <div className="lg:w-[480px] w-full text-neutral-600 text-[18px] font-normal font-sans my-3 leading-[27px]">
              Palette is an enshrined protocol on the network level that enables
              permissionless creation of marketplaces while enforcing royalties.
            </div>
          </div>
          <div className="">
            <div className=" bg-white my-5 p-5 relative rounded-[18px] shadow border border-gray-200 lg:w-[386.50px] w-auto lg:p-5 ">
              <div className="right-[1px] top-0 absolute">
                <Image
                  src="/imgs/payout.svg"
                  width="5"
                  height="5"
                  alt=""
                  className="lg:w-[250px] w-[120px] rounded-r-md"
                />
              </div>
              <div className=" pt-32">
                <p className=" w-full lg:w-[341px]  text-black text-[28px] font-semibold my-5 font-sans leading-[22px]">
                  Payout is faster than normal
                </p>

                <div className="text-neutral-600 text-[18px] mt-5 font-normal font-sans leading-[27px]">
                  Palette is an enshrined protocol on the network level that
                  enables permissionless creation of marketplaces while
                  enforcing royalties.
                </div>
              </div>
            </div>
            <div className=" bg-white my-5 p-5 relative rounded-[18px] shadow border border-gray-200 lg:w-[386.50px] w-auto lg:p-5 ">
              <div className="right-[1px] top-0 absolute">
                <Image
                  src="/imgs/justTrade.svg"
                  width="5"
                  height="5"
                  alt=""
                  className="lg:w-[250px] w-[120px] rounded-r-md"
                />
              </div>
              <div className=" pt-32">
                <p className=" w-full lg:w-[341px]  text-black text-[28px] font-semibold my-5 font-sans leading-[22px]">
                  No hodling, Just trade!
                </p>

                <div className="text-neutral-600 text-[18px] mt-5 font-normal font-sans leading-[27px]">
                  Palette is an enshrined protocol on the network level that
                  enables permissionless creation of marketplaces while
                  enforcing royalties.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="items-center justify-center container flex md:flex-row flex-col ">
          <div className="flex md:flex-row flex-col  w-fit  justify-center items-center mx-auto container bg-emerald-50 bg-opacity-25  ">
            <div className="  md:m-6 m-0 w-full md:w-auto ">
              <div className=" py-[66px] bg-white rounded-xl border border-slate-900 border-opacity-20 justify-start items-start lg:flex-row flex-col p-10  flex">
                <div className="flex-col justify-start items-start gap-[60px] inline-flex">
                  <div className="md:w-[230.64px] w-full h-[27px] text-black text-[32px] font-semibold font-['Work Sans'] leading-[33px]">
                    Cwito in 60 seconds
                  </div>
                  <div className="md:w-[282px] w-full text-neutral-600 text-lg font-normal font-['Work Sans'] leading-7">
                    Learn about Steep and how it can change the way your
                    organization works with data.
                  </div>
                </div>
                <div className="w-[200px] h-[138px] relative">
                  <img
                    className="w-[200px] h-[138px] left-0 top-0 absolute"
                    src="imgs/steep.svg"
                  />
                  <div className="w-12 h-12 pl-[18px] pr-3.5 py-[14.50px] left-[76px] top-[45px] absolute rounded-full border-2 border-white justify-end items-center inline-flex">
                    <div className="w-4 h-[19px] relative flex-col justify-start items-start flex">
                      {" "}
                      <img className="" src="imgs/play.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="   md:m-6 m-0 w-full md:w-auto">
              <div className="lg:w-auto w-full  h-[275.55px] px-[25px] py-[35px] bg-white rounded-2xl border border-slate-900 border-opacity-20 flex-col gap-3 justify-start items-start  inline-flex">
                <div className="md:w-[140px] h-[35.55px] justify-center items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                    <div className="w-[140px] h-[35.55px] relative flex-col justify-start items-start flex">
                      <div className="w-[28.49px] h-[33.54px] relative"></div>
                      <div className="relative">
                        <div className="">
                          <img src="imgs/sematic.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-2 flex-col justify-center items-start gap-2 flex">
                  <div className="text-black text-[32px] font-semibold font-['Work Sans'] leading-[33px]">
                    Supported Assets
                  </div>
                  <div className="md:w-[347px] w-full text-neutral-600 text-lg font-normal font-['Work Sans'] leading-7">
                    Steep supports the latest semantic API:s from dbt and Cube.
                  </div>
                </div>
                <div className="h-[33px] px-[29px] py-3 rounded-lg border border-stone-500 justify-center items-center gap-2 inline-flex">
                  <div className="justify-center items-center flex">
                    <div className="text-center text-neutral-600 text-sm font-medium font-['Work Sans'] leading-tight">
                      Learn More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
