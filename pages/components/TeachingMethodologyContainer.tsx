import type { NextPage } from "next";

import BooksCarousel from "./BooksCarousel";


import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  fallback: ["serif"]
})


const TeachingMethodologyContainer: NextPage = () => {
  return (
    <section id="method-container" className="w-full flex flex-col items-center text-black">

      <div className="w-5/6 md:w-3/4 lg:w-3/5 flex flex-col items-center justify-center text-black gap-y-10">
        <p className={`${playfair.className} self-stretch lg:text-right relative font-semibold text-3xl md:text-5xl`}>Teaching methodology</p>

        <div className="w-full flex flex-col lg:flex-row-reverse lg:justify-between lg:gap-x-16 gap-y-10">
          <div className="flex flex-col items-center gap-y-3 lg:w-3/5">

            <BooksCarousel/>
            <i className="relative inline-block">
              Faber Piano Adventures Faber Adult/ABRSM/Trinity/Custom music
              arrangements
            </i>
          </div>

          <div className="relative lg:w-2/5 lg:mt-96 ">
            <p className="m-0">
              After undergoing pedagogical training at Aureus Academy Singapore
              as a teacher, I’ve decided to use the Faber Piano series of
              materials for young musicians to have engaging, fun music lessons
              for early childhood education.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              For students who are interested in grading and examination (ABRSM
              or Trinity), we will approach it with a structured curriculum that
              targets the student’s fundamentals, music theory knowledge, and
              musicality.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Utilizing my experience in music theory and composition, I wanted
              to make motivate my students to play their favorite pieces. Which
              is why I learned to arrange scores (pop songs, game/film music,
              etc) for students based on their level of playing.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">Ultimately, I believe the goal of teaching is to inspire passion in my students. Interest-based learning is essential to the process, be it through fun pieces, good challenges and progression, or engaging activities.</p>

          </div>
        </div>

      </div>
    </section>

  );
};

export default TeachingMethodologyContainer;
