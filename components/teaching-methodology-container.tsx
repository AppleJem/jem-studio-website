import type { NextPage } from "next";

const TeachingMethodologyContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col py-0 px-20 items-center justify-start gap-[48px] text-center text-45xl text-black font-inter">
      <div className="self-stretch relative font-semibold">
        Teaching methodology
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-end justify-between text-left text-lg">
        <div className="relative flex items-end w-[373px] shrink-0">
          <span className="[line-break:anywhere] w-full">
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
            <p className="m-0">{`Ultimately, I believe the goal of teaching is to inspire passion in my students. Interest-based learning is essential to the process, be it through fun pieces, good challenges and progression, or engaging activities. `}</p>
          </span>
        </div>
        <div className="w-[630px] h-[798px] flex flex-col items-center justify-start gap-[15px] text-center text-xl font-times-new-roman">
          <div className="self-stretch bg-silver h-[496px] flex flex-col py-[21px] px-[22px] box-border items-center justify-between">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/basicpaall2-1@2x.png"
            />
          </div>
          <i className="relative inline-block w-[442px]">
            Faber Piano Adventures Faber Adult/ABRSM/Trinity/Custom music
            arrangements
          </i>
        </div>
      </div>
    </div>
  );
};

export default TeachingMethodologyContainer;
