"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [inContact, setInContact] = useState<boolean>(false);

  const navData: {
    itemName: string;
    id: number;
    dropDown: boolean;
    options: any[];
    route: any;
  }[] = [
   
{
      itemName: "About us",
      id: 1,
      dropDown: false,
      options: [],
      route: "/about-us",
    },
    {
      itemName: "Product",
      id: 2,
      dropDown: false,
      options: [],
      route: "/our-products",
    },

    
    {
      itemName: "Blogs",
      id: 3,
      dropDown: false,
      options: [],
      route: "/blog",
    },
    
  ];

  return (
    <nav className=" py-0 font-normal border-b-[1px] font-sans text-[14px] w-[100%] fixed z-24 text-[16px] leading-[24px] font-sans ">
      <div
        className={`flex w-[100%] items-center justify-between lg:px-24  px-2">
 ${
   pathname === "/" ? "text-[black]" : "text-[#000]"
 } flex justify-between items-center`}
      >
        <Link href="/">
          <Image
            src="/logo.svg"
            alt=""
            width="400"
            height="10"
            className="w-auto"
          />
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-3x1 absolute right-8 top-0 cursor-pointer lg:hidden text-black py-3"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`lg:flex   absolute lg:static lg:h-auto h-[90vh] lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-4 transition-all duration-500 ease-in font-sans font-medium  lg:flex justify-between items-center  ${
            open ? "top-12 opacity-100 bg-white text-black" : "top-[-490px] "
          }`}
        >
          {navData.map((item) => {
            return (
              <li
                key={item.id}
                className=" flex flex-col items-center justify-center "
              >
                <Link
                  href={item.route}
                  className={`${
                    pathname === item.route
                      ? " lg:border-b-2 border-[#049BAF]"
                      : " "
                  } ${
                    pathname === "/" ? "text-black" : "text-[#000]"
                  } lg:py-[20px] py-[5%] lg:px-3 `}
                >
                  {item.itemName}
                </Link>
              </li>
            );
          })}
          <p className="flex items-center justify-center">
            <Link
              className="bg-black text-[#fff] leading-[16px] px-[20px] py-[8px] rounded-[5px] text-[14px]"
              href="/"
            >
              Login
            </Link>
          </p>
        </ul>
      </div>
    </nav>
  );
};

export { NavBar };
