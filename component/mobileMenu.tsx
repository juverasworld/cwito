"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IoIosCloseCircleOutline } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

type MobileType = {
  onclick(): any;
};
const MobileMenu = ({ onclick }: MobileType): JSX.Element => {
  const pathname = usePathname();
  const [options] = useState<any[]>([
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Invest",
      link: "invest",
    },
    {
      title: "Our Services",
      link: "our_services",
    },
    {
      title: "About us",
      link: "about_us",
    },
    {
      title: "Contact",
      link: "contact",
    },
  ]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      className={`relative w-full bg-[#003366]`}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="4000"
    >
      <div className={`relative h-screen flex flex-col w-full mx-[5px]`}>
        {options.map((option, index) => {
          const activeItem = pathname === option.link;
          return (
            <>
              <Link key={index} href={`/${option.link}`}>
                <p
                  className={`${
                    activeItem ? "border-b border-[#FFD700] " : " "
                  } text-[18px] text-white mx-3 py-[22px] border-b font-nunito`}
                >
                  {option.title}
                </p>
              </Link>
            </>
          );
        })}
        <button
          className={`absolute top-3/4 left-1/2 transform -translate-x-1/2 text-white cursor-pointer`}
          onClick={onclick}
        >
          <IoIosCloseCircleOutline size={50} />
        </button>
      </div>
    </section>
  );
};

export default MobileMenu;
