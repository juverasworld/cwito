import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="my-16 border-0 flex w-full items-center  justify-center">
    <div className="flex xl:flex-row w-full  flex-col justify-center items-center">
      <div className="my-2 mx-10 lg:mx-5 xl:w-auto w-full ">
        <Link
          href="/"
          className="text-[#808080] mx-5 font-500  font-500  font-500 text-lg font-bold"
        >
          <Image src="/img/logo.svg" alt="img" width="100" height="100" />
        </Link>
        <p className="my-2 mx-5">
          DSNUNNSummit is a comprehensive event
          <br className="xl:flex lg:hidden flex" /> spotlighting diverse
          careers in Africa&apos;s data space
        </p>
        <p className="flex my-2 items-center">
          <Image
            src="/img/twitter.svg"
            alt="img"
            width="100"
            height="100"
            className="w-auto mx-3"
          />
          <Image
            src="/img/linkedin.svg"
            alt="img"
            width="100"
            height="100"
            className="w-auto mx-3"
          />
        </p>
      </div>
      <div className="flex mx-10 lg:mx-2 md:flex-row flex-col w-full xl:w-auto  mx-0  items-start md:items-center">
        <div className="flex mx-5 my-3 lg:my-0 flex-row">
          <div className="flex  flex-col">
            <Link className="lg:mx-1 mx-2  my-2" href="#about">
              About
            </Link>
            <Link className="lg:mx-1 mx-2  my-2" href="#speakers">
              Speakers
            </Link>
            <Link className="lg:mx-1 mx-2  my-2" href="#partners">
              Partners & Sponsors
            </Link>
          </div>
          <div className="flex  flex-col">
            <Link className="lg:mx-1 mx-2  my-2" href="#panelist">
              Panelist
            </Link>
            <Link className="lg:mx-1 mx-2  my-2" href="#organizers">
              Organizers
            </Link>
            <Link className="lg:mx-1 mx-2  my-2" href="/">
              Our Blog
            </Link>
          </div>
        </div>
        <div className="flex mx-0 md:mx-5 my-2 ">
          <p className="ml-5">
            <button className="flex items-center justify-center whitespace-nowrap text-[#fff] bg-[#009933] rounded-3xl   px-[16px] py-[8px] text-[16px]">
              Join Our Community
              <Image
                src="/img/arrow.svg"
                width="10"
                height="10"
                alt=""
                className="w-auto px-2"
              />
            </button>
          </p>
        </div>
      </div>
    </div>
  </footer>
     
  );
};

export default Footer;
