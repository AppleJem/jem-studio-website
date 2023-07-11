import type { NextPage } from "next";

import NavbarPopup from "../components/NavbarPopup";
import Navbar from "../components/navbar";
import NavbarResponsive from "../components/NavbarResponsive";
import BioContainer from "./components/BioContainer";
import TeachingMethodologyContainer from "./components/TeachingMethodologyContainer";
import QuestionsContainer from "./components/questions-container";
import Footer from "../components/footer";
import Carousel from "./Carousel";

const MacBookAir2: NextPage = () => {
  return (
    <>
      <NavbarResponsive />
      <main className="relative flex flex-col gap-12 md:gap-32 bg-white w-full overflow-hidden  text-left text-white font-kaisei-decol">

        <Carousel />
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

      </main>
      <Footer />
    </>

  );
};

export default MacBookAir2;
