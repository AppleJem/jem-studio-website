import type { NextPage } from "next";
import { Sacramento } from "next/font/google";

const sacra = Sacramento({
  subsets: ['latin'],
  weight: "400"
})

const Navbar: NextPage = () => {
  return (
    <div className="self-stretch bg-white flex flex-row py-0 px-14 items-center justify-between text-center text-xl text-darkslategray-200 font-inter">
      <div className="flex flex-row justify-center items-center">
        <img
          className="relative w-[122px] h-[125px] object-cover"
          alt=""
          src="/Logo_white border_no bg_no text.png"
        />
        <span className={`${sacra.className} text-black text-2xl`}>Jem Studio</span>
      </div>

      <div className="w-[388px] overflow-hidden shrink-0 flex flex-row items-center justify-between sm:flex-row sm:gap-[0px] sm:items-start sm:justify-start">
        <img className="relative w-9 h-6 hidden" alt="" src="/vector.svg" />
        <div className="relative font-semibold inline-block w-[88px] h-7 shrink-0">
          Home
        </div>
        <div className="relative font-semibold inline-block w-[88px] h-7 shrink-0">
          About
        </div>
      </div>
    </div>
  );
};

export default Navbar;
