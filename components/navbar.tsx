"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Nav() {
    const [isMenuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    return (
      <>
        <nav className="py-5  fixed w-[100%] text-16px leading-24px font-inter">
          <div className="flex items-center justify-between md:px-24 px-2">
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
              <button
                className="text-[#808080] font-500"
                onClick={toggleMenu}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_2989_5796)">
  <path d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" fill="#0C0900"/>
  </g>
  <defs>
  <clipPath id="clip0_2989_5796">
  <rect width="24" height="24" fill="white"/>
  </clipPath>
  </defs>
  </svg>
              </button>
              {isMenuOpen && (
                <div className="lg:flex flex-col items-center">
                  <Link href="#about" className="mr-10 text-16px">
                    About us
                  </Link>
                  <Link href="#portfolio" className="mr-10 text-16px">
                    Blog
                  </Link>
                  <Link href="/about" className="text-16px mr-10">
                    Product
                  </Link>
                  <Link
                    href="/login"
                    className="bg-black text-white leading-16px px-16 py-8 rounded-5px text-11px"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
            <div className="lg:flex hidden items-center">
              <Link href="#about" className="mr-10 text-16px">
                About us
              </Link>
              <Link href="#portfolio" className="mr-10 text-16px">
                Blog
              </Link>
              <Link href="/about" className="text-16px mr-10">
                Product
              </Link>
              <Link
                href="/login"
                className="bg-black text-white  leading-16px px-5 py-1 rounded-[5px] rounded-5px text-11px"
              >
                Login
              </Link>
            </div>
            {/* <Link
              href="/login"
              className="bg-black lg:hidden flex text-white leading-16px px-16 py-8 rounded-5px text-11px"
            >
              Login
            </Link> */}
          </div>
        </nav>
      </>
    )}