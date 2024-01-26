import Link from "next/link"
export default function Footer() {
   return(
    <div className="font-sans mx-10 w-full flex lg:flex-row flex-col items-center r">
    <div className="lg:w-auto c  w-full">
        <form action="" className="lg:flex-row flex-col relative w-fit fit lg:flex hidden rounded-[5px]  px-5">
            <input type="text" placeholder="Your E-mail " className="input placeholder:font-sans placeholder:p-3 "  />

            <button className="font-sans font-[16px] leading-[24px]  absolute right-0 input-button bg-white ">Subscribe</button>
        </form>
        <form action="" className="lg:hidden flex flex-col w-full items-start">
        <input type="text" placeholder="your email " className=" inputSm w-full  block placeholder:font-sans placeholder:p-3"  />

<button className="font-sans w-full  font-[16px] leading-[24px] bg-white">
    <Link href="/" className="">

    Subscribe
    </Link>
    </button>  
        </form>
    </div>
    <div className="flex lg:flex-row text-[16px] leading-[24px] text-[#E5E5E5]   flex-col dd lg:w-[600px] justify-evenly w-full -2 container mx-auto ">
        <p className="pr-4 -2 mx-3">

        <Link className="text-[16px] leading-[24px] text-[#E5E5E5] " href={"/"}>

        About
        </Link>
        </p>
        <p className="text-[16px] leading-[24px] text-[#E5E5E5] ">

        <Link className="pr-4 -2 mx-3" href={"/"}>
       Careers
        </Link>
        </p>
        <p className="text-[16px] leading-[24px] text-[#E5E5E5] ">

        <Link className="text-[16px] leading-[24px] text-[#E5E5E5] " href={"/"}>
   Blogs
        </Link>
        </p>
        <Link className="text-[16px] leading-[24px] text-[#E5E5E5] " href={"/"}>
   Privacy Policy
        </Link>
        <Link className="text-[16px] leading-[24px] text-[#E5E5E5] " href={"/"}>
   Terms and Condition
        </Link>
    </div>
    <div className="">
        <img src="imgs/socials.svg" alt="" />
    </div>
</div>
   )
}