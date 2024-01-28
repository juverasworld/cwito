"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { fadeIn } from "../variants";

// import AOS from "aos";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { NavBar } from "@/component/Nav";
// import Reg from "../../components/reg";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className=" relative z-0 overflow-hidden">
        <div className="w-full relative bg-none lg:bg-heroLg  h-auto  bg-no-repeat bg-cover">
          <NavBar/>

          <div className="relative">
            <div className="bg-heroSm relative lg:bg-none bg-no-repeat bg-cover  relative  md:pt-52 pt-44   ">
              <div className="lg:hidden flex">
                <Image
                  src="/imgs/fixedbar.svg"
                  alt=""
                  width="500"
                  height="100"
                  className="w-full absolute top-[40px] bottom-[40px]  right-0"
                />
              </div>
              <div className=" flex items-center justify-center  flex-col ">
                <div
                  className="font-sans xl:w-[700px] lg:w-[396px] w-auto  text-center text-white text-4xl lg:text-5xl font-semibold
lg:leading-[42px] leading-[36px] flex flex-col items-center justify-center mx-auto "
                >
                  <p data-aos="fade-up" className="font-sans  ">
                    Your<span className="text-[#5DC1BD]"> one-stop</span>{" "}
                    <br className="" /> shop for crypto <br className="" /> &
                    cash
                  </p>
                </div>

                <div
                  data-aos="fade-down"
                  className=" font-sans text-[18px] leading-[28pz] lg:w-[490px] text-center p-[2px] lg:mt-16 mt-10  w-[318px] text-zinc-100 text-lg font-normal"
                >
                  At Cwito, we ensure effortless conversion of your
                  cryptocurrencies into naira instantly.
                </div>
                <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="w-[259px] h-[60px] p-6 bg-white rounded-lg my-10 justify-center items-center gap-2 inline-flex border-0 "
                >
                  <div className="justify-center items-center flex">
                    <Link
                      href="#"
                      className="text-center text-teal-950 text-lg font-medium font-sans leading-7"
                    >
                      Download Cwito
                    </Link>
                  </div>
                </motion.div>
                <Link
                  href="/"
                  className="text-stone-300 text-base  font-sans underline leading-normal font-thin"
                >
                  Create a free account
                </Link>
              </div>
              <div className="w-full heroNum backdrop-filter backdrop-blur-lg   ">
                <div className="flex justify-center items-center py-36 ">
                  <div className=" grid lg:grid-cols-4 text-center md:grid-cols-2 sm:grid-cols-1 gap-x-24 gap-y-6 p-2">
                    <div className="">
                      <p
                        data-aos="fade-right"
                        className="text-grad 200 text-[38px] font-semibold
font-sans leading-[38px]"
                      >
                        23K
                      </p>
                      <p
                        data-aos="fade-left"
                        className="font-sans text-stone-300
text-[21px] font-normal leading-[27px]"
                      >
                        Traders Like you
                      </p>
                    </div>

                    <div className="">
                      <p
                        data-aos="fade-right"
                        className="text-grad 200 text-[38px] font-semibold
font-sans leading-[38px]"
                      >
                        2X faster
                      </p>
                      <p
                        data-aos="fade-left"
                        className="font-sans text-stone-300
text-[21px] font-normal leading-[27px]"
                      >
                        Payout Time
                      </p>
                    </div>
                    <div className="">
                      <p
                        data-aos="fade-right"
                        className="text-grad 200 text-[38px] font-semibold
font-sans leading-[38px]"
                      >
                        $17 million
                      </p>
                      <p
                        data-aos="fade-left"
                        className="font-sans text-stone-300
text-[21px] font-normal leading-[27px]"
                      >
                        Payout processed
                      </p>
                    </div>
                    <div className="">
                      <p
                        data-aos="fade-right"
                        className="text-grad 200 text-[38px] font-semibold
font-sans leading-[38px]"
                      >
                        24/7
                      </p>
                      <p
                        data-aos="fade-left"
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
        <div className="fixed top-[80%] bottom-[50%] right-[3%] fix md:flex hidden">
          <Image
            src="/imgs/chatbox.svg"
            alt=""
            width="10"
            height="10"
            className="w-auto"
          />
        </div>
        <div className="bg-emerald-50 bg-opacity-25 pt-44 pb-16 px-5  bg">
          <div className="flex lg:flex-row flex-col items-center justify-center container mx-auto">
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white lg:w-[699px] flex  flex-col lg:h-[720px] w-full mx-5  rounded-[18px] shadow border p-5"
            >
              <Image
                data-aos="zoom-in"
                src="/imgs/reg.svg"
                width="5"
                height="5"
                alt=""
                className="lg:w-[454.97px] lg:h-[376.39px] w-[150px] h-[150px]"
              />
              <div
                data-aos="zoom-out"
                className=" text-black lg:text-[50px] font-semibold font-sans text-[28px] leading-[30px] lg:leading-[40px]  tracking-[-6%] my-3"
              >
                Simple and secure <br className="lg:flex hidden" /> registration
                process
              </div>
              <div className="lg:w-[480px] w-full text-neutral-600 text-[14px] lg:text-[18px] font-normal font-sans my-3 leading-[27px]">
                Palette is an enshrined protocol on the network level that
                enables permissionless creation of marketplaces while enforcing
                royalties.
              </div>
            </motion.div>
            <div className="">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className=" bg-white my-5 p-8 relative rounded-[18px] shadow border border-gray-200 lg:w-[386.50px] w-auto lg:p-5 "
              >
                <div className="right-[1px]  top-0 absolute">
                  <Image
                    data-aos="fade-right"
                    src="/imgs/payout.svg"
                    width="5"
                    height="5"
                    alt=""
                    className="lg:w-[200px] w-[120px] rounded-r-lg"
                  />
                </div>
                <div className=" pt-32">
                  <p
                    data-aos="fade-out"
                    className=" w-full lg:w-[341px]  text-black text-[28px] font-semibold my-5 font-sans leading-[22px]"
                  >
                    Payout is faster than normal
                  </p>

                  <div className="text-neutral-600 text-[14px] lg:text-[18px] mt-5 font-normal font-sans leading-[27px]">
                    Palette is an enshrined protocol on the network level that
                    enables permissionless creation of marketplaces while
                    enforcing royalties.
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className=" bg-white my-5 p-8 relative rounded-[18px] shadow border border-gray-200 lg:w-[386.50px] w-auto lg:p-5 "
              >
                <div className="right-[1px] top-0 absolute">
                  <Image
                    data-aos="fade-left"
                    src="/imgs/justTrade.svg"
                    width="5"
                    height="5"
                    alt=""
                    className="lg:w-[200px] w-[120px] rounded-r-lg"
                  />
                </div>
                <div className=" pt-32">
                  <p
                    data-aos="zoom-out"
                    className=" w-full lg:w-[341px]  text-black text-[28px] font-semibold my-5 font-sans leading-[22px]"
                  >
                    No hodling, Just trade!
                  </p>

                  <div className="text-neutral-600 text-[14px] lg:text-[18px] mt-5 font-normal font-sans leading-[27px]">
                    Palette is an enshrined protocol on the network level that
                    enables permissionless creation of marketplaces while
                    enforcing royalties.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="items-center justify-center container my-16 flex lg:flex-row flex-col ">
            <div className="flex lg:flex-row flex-col  w-fit  justify-center items-center mx-auto container bg-emerald-50 bg-opacity-25 p-0  lg:p-10">
              <div className=" my-5 lg:m-6 m-0 w-full lg:w-auto ">
                <motion.div
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="  bg-white rounded-xl border border-slate-900 border-opacity-20 justify-start items-start lg:flex-row flex-col lg:p-10 p-4  flex"
                >
                  <div className="flex-col lg:justify-start justify-center items-center lg:items-start gap-[45px] lg:gap-[60px] inline-flex">
                    <div className="lg:w-[230.64px] w-full h-auto lg:h-[27px] text-black text-[24px] lg:text-[32px] font-semibold font-sans leading-[33px]">
                      Cwito in 60 seconds
                    </div>
                    <div className="lg:w-[282px] w-full text-neutral-600 text-[14px] lg:text-[18px] font-normal font-sans leading-7">
                      Learn about Steep and how it can change the way your
                      organization works with data.
                    </div>
                  </div>
                  <div className="w-[200px] h-[138px] lg:my-0 my-16 relative flex items-center justify-center lg:mx-0 mx-auto ">
                    <Image
                      alt=""
                      width="10"
                      height="10"
                      className="w-[200px] h-[138px] left-0 top-0 absolute"
                      src="imgs/steep.svg"
                    />
                    <div className="w-12 h-12 pl-[18px] pr-3.5 py-[14.50px] left-[76px] top-[45px] absolute rounded-full border-2 border-white justify-end items-center inline-flex">
                      <div className="w-4 h-[19px] relative flex-col justify-start items-start flex">
                        {" "}
                        <Image
                          className="w-auto"
                          width="10"
                          height="10"
                          alt=""
                          src="imgs/play.svg"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className=" my-5  lg:m-6 m-0 w-full lg:w-auto">
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="lg:w-auto w-full  h-auto px-[25px] py-[32px] bg-white rounded-2xl border border-slate-900 border-opacity-20 flex-col gap-1 justify-start items-start  inline-flex"
                >
                  <div className="lg:w-[140px] h-[35.55px] justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                      <div className="w-[140px] h-[35.55px] relative flex-col justify-start items-start flex">
                        <div className="w-[28.49px] h-[33.54px] relative"></div>
                        <div className="relative w-[140px]">
                          <div className="">
                            <Image
                              src="imgs/sematic.svg"
                              width="10"
                              height="10"
                              alt=""
                              className="w-[140px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 flex-col justify-center items-start gap-2 flex">
                    <div className="text-black   text-[24px] lg:text-[32px]  font-semibold font-sans leading-[33px]">
                      Supported Assets
                    </div>
                    <div className="lg:w-[347px] w-full text-neutral-600 text-[14px] lg:text-[18px] font-normal font-sans leading-7">
                      Steep supports the latest semantic API:s from dbt and
                      Cube.
                    </div>
                  </div>
                  <div className="h-[33px] px-[29px] py-3 rounded-lg border border-stone-500 justify-center items-center gap-2 inline-flex">
                    <div className="justify-center items-center flex">
                      <div className="text-center text-neutral-600 text-sm font-medium font-sans leading-tight">
                        Learn More
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#023436] font-sans">
          <div className=" py-16 lg:mx-10 mx-5 ">
            <footer className=" border-0 font-sans flex items-center lg:mx-10 mx-0  justify-center container  w-[100%]">
              <div className="flex xl:flex-row w-full  flex-col justify-center items-center">
                <div data-aos="zoom-in" className="lg:w-auto c  w-full ">
                  <form
                    action=""
                    className="lg:flex-row flex-col relative w-fit fit lg:flex hidden rounded-[5px]  px-5 items-center"
                  >
                    <input
                      type="text"
                      placeholder="Your E-mail "
                      className="input placeholder:font-sans  outline-none placeholder:p-3 "
                    />

                    <button className="font-sans text-[#023436] font-[16px] leading-[24px]  absolute right-0 input-button bg-white ">
                      Subscribe
                    </button>
                  </form>
                  <form
                    action=""
                    className="lg:hidden flex  flex-col w-[100%] items-start  "
                  >
                    <input
                      type="text"
                      placeholder="your email "
                      className=" inputSm w-full outline-none   rounded-[8px]  placeholder:font-sans placeholder:p-3"
                    />

                    <button className="font-sans rounded-[5px] w-full my-5 py-3  text-[#023436] font-[16px] leading-[24px] bg-white">
                      <Link href="/" className="">
                        Subscribe
                      </Link>
                    </button>
                  </form>
                </div>
                <div className="flex font-sans  md:flex-row flex-col w-full xl:w-auto container mx-auto text-[#E5E5E5]   items-start md:items-center">
                  <div className="flex font-sans mx-5 my-3 lg:my-0 flex-row">
                    <motion.div
                      variants={fadeIn("up", 0.3)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex lg:flex-row flex-col"
                    >
                      <Link
                        className="lg:mx-1 lg:hidden flex mx-0  my-4"
                        href="/"
                      >
                        <Image
                          data-aos="fade-up"
                          src="/imgs/logoSm.svg"
                          width={200}
                          height={150}
                          alt="Image 1"
                          className=" h-[75px] w-[64px]"
                        />
                      </Link>
                      <Link
                        className="lg:pr-10 pr-0  text-[#E5E5E5]  my-4"
                        href=""
                      >
                        About
                      </Link>
                      <Link
                        className="lg:pr-10 pr-0  text-[#E5E5E5]  my-4"
                        href="#speakers"
                      >
                        Careers
                      </Link>
                      <Link
                        className="lg:pr-10 pr-0  text-[#E5E5E5]  my-4"
                        href="#partners"
                      >
                        Blog
                      </Link>
                      <Link
                        className="lg:pr-10 pr-0  text-[#E5E5E5]  my-4"
                        href="#partners"
                      >
                        Terms and Condition
                      </Link>
                    </motion.div>
                  </div>
                  <div className="flex mx-0 md:mx-5 my-4 ">
                    <p className="lg:ml-5">
                      <div className="">
                        <Image
                          src="imgs/socials.svg"
                          alt=""
                          width="10"
                          height="10"
                          className="w-auto"
                        />
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </footer>

            <div
              data-aos="fade-down"
              className="flex items-center justify-between mx-0 mt-5 lg:mx-7"
            >
              <p className="">
                <Link className="lg:mx-3 lg:flex hidden  mx-0  my-4" href="/">
                  <Image
                    src="/imgs/logoSm.svg"
                    width={200}
                    height={150}
                    alt="logo"
                    className=" h-[75px] w-[64px]"
                  />
                </Link>
              </p>
              <p className="w-auto lg:w-[700px] lg:text-justify text-align font-sans text-[16px] leading-[28px] text-[#E5E5E5]">
                Parthean is educational, and is not an offer to sell or a
                solicitation of an offer to buy any security. Parthean is not a
                financial advisor, portfolio manager, or accountant, nor is your
                dedicated Parthean Coach. The sole purpose of your Parthean
                Coach is to guide your education — this is not financial advice,
                investing advice, or tax advice. None of the information
                conveyed through this app is a recommendation to buy, hold, or
                sell an investment or financial product, or take any action.
                None of the information conveyed through this app should serve
                as the basis for any investment decision. All investments
                involve risk, including the possible loss of capital. Past
                performance does not guarantee future results or returns.
              </p>
            </div>
            <div className="pt-16 text-[#fff] leading-[14px] text-[18px]">
              © Cwito 2023
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
