"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home(){
  const [isMenuOpen, setMenuOpen] = useState(false);
  const imageUrls = ['/img/sophia.svg', 'img/godson.svg', 'img/sophia.svg', '/img/godson.svg', 'img/sophia.svg',]; // Replace with your image URLs

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
    < nav className="py-5 border-b-[1px] w-[100%] fixed z-24 text-[16px] leading-[24px] font-inter  ">
      
        <div className="flex w-[100%] items-center justify-between md:px-24 px-2">
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
  <button className="text-[#808080]  font-500  font-500  font-500" onClick={toggleMenu}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
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
    
  
      <Link className="bg-black text-[#fff] leading-[16px] px-[16px] py-[8px] rounded-[5px] text-[11px]" href="/">Login</Link>
    
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
          
        
            <Link className="bg-black text-[#fff] leading-[16px] px-[16px] py-[8px] rounded-[5px] text-[11px]" href="/">Login</Link>
          
          </div>
    <Link className="bg-black lg:hidden flex text-[#fff] leading-[16px] px-[16px] py-[8px] rounded-[5px] text-[11px]" href="/">Login</Link>

        </div>
        
      </nav>
   
    </>
  );
}
