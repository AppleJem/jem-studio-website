import type { NextPage } from "next";

import NavbarPopup from "../components/NavbarPopup";
import Navbar from "../components/navbar";
import NavbarResponsive from "../components/NavbarResponsive";
import BioContainer from "../components/bio-container";
import TeachingMethodologyContainer from "../components/teaching-methodology-container";
import QuestionsContainer from "../components/questions-container";
import Footer from "../components/footer";
import Carousel from "./Carousel";

const MacBookAir2: NextPage = () => {
  return (
    <main className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start gap-[163px] text-left text-white font-kaisei-decol">
      <NavbarResponsive />
      <Carousel/>
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-col py-[326px] px-[142px] items-center justify-center bg-[url(/carousel-1@3x.png)] bg-cover bg-no-repeat bg-[top]">
          <div className="w-[705px] h-[155px] flex flex-col items-center justify-between">
            <b className="self-stretch relative leading-[99.8%]">Learn Music</b>
            <div className="self-stretch relative text-[40px] text-right">
              Your Way
            </div>
          </div>
        </div>
      </div>
      <img
        className="relative w-[555.32px] h-[1090.58px] hidden"
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
      <Footer />
    </main>
  );
};

export default MacBookAir2;
