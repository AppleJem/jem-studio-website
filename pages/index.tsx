import type { NextPage } from "next";
import { useRef } from "react";
import Image from "next/image";

import NavbarResponsive from "../components/NavbarResponsive";
import BioContainer from "./components/BioContainer";
import TeachingMethodologyContainer from "./components/TeachingMethodologyContainer";
import QuestionsContainer from "./components/questions-container";
import Footer from "../components/footer";
import heroImage from '../public/images/Hau Tzen freeze frame.png'

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  fallback: ["serif"]
})

const MacBookAir2: NextPage = () => {
  const mainContainerRef = useRef<HTMLDivElement>(null)



  return (
    <>
      <NavbarResponsive />
      <main onScroll={(e) => console.log('scrolling')} className="relative flex flex-col gap-12 md:gap-32 bg-white w-full overflow-hidden  text-left text-white font-kaisei-decol">
        <div className="relative w-full">
          <Image alt="banner image" className="object-cover w-full h-screen brightness-[0.6] contrast-75 " src={heroImage} />
          <div className={`${playfair.className} absolute top-0 w-full h-full text-white z-30 flex justify-center items-center`}>
            <div>
              <p className="text-[6rem]">Learn Music</p>
              <p className="text-6xl text-right -mr-10">Your Way</p>
            </div>
          </div>
        </div>
        <img
          className="absolute w-[555.32px] h-[1090.58px] z-0 hidden"
          alt=""
          src="/subtract.svg"
        />
        <BioContainer />
        <img
          className="relative w-[922.22px] h-[1632.73px] hidden"
          alt=""
          src="/subtract1.svg"
        />
        <TeachingMethodologyContainer />
        <QuestionsContainer />

      </main>
      <Footer />
    </>

  );
};

export default MacBookAir2;
