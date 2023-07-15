

import { Playfair_Display } from "next/font/google"
import BioCarousel from "./BioCarousel";

const playfair = Playfair_Display({
  subsets: ["latin"],
  fallback: ["serif"]
})

const achievements = [
  "1st Prize, Steinway Youth Piano Competition",
  "2nd Prize, National Piano and Violin Competition (Singapore)",
  "2nd Prize, Nanyang International Music Competition",
  "2nd Prize, Japan Piara International Piano Competition",
  "2nd Prize, Yamaha Piano Competition",
  "2nd Prize, Singapore International Festival of Music",
  "1st Prize, Symphony 924, Young Talents Project",
  "1st Prize, Singapore-Asia Piano Competition",
  "1st Prize, F J Benjamin NAFA SYT Music Competition",
]


const BioContainer = () => {



  return (
    <div id="bio-container" className="w-full flex flex-col items-center">
      <div className="w-5/6 md:w-3/4 lg:w-3/5 flex flex-col items-center justify-center text-black gap-10">
        <p className={`${playfair.className} self-stretch relative font-semibold text-3xl md:text-5xl text-left`}>Teacher Jem Zhang</p>

        <BioCarousel />
        <div className="w-5/6 md:w-[30rem] lg:w-full md:self-end md:text-lg flex flex-col lg:flex-row-reverse lg:justify-center items-start justify-start gap-12 ">
          <div className="self-stretch relative lg:w-2/3">
            <p className="m-0">
              Jem is a passionate musician with years of experience
              performing and competing extensively both locally and
              overseas. He studied at the Nanyang Academy of Fine Arts under
              Mdm Fang Yuan and has attained distinction in the Licentiate
              of Trinity College London (LTCL) in piano performance, as well
              as grade 8 music theory offered by the Associate Board of the
              Royal Schools of Music.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Jem has won several distinguished awards such as 2nd prize at
              the Japan Piara International Piano Competition, 1st prize at
              the Steinway Youth Piano Competition, 2nd prize at the Nanyang
              International Music Competition, and more.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              During his performing career, he also had the honour of
              sharing the stage with pianists such as Lang Lang and Chopin
              Piano Competition winner Seong Jin-Cho. He has also been
              invited frequently by Singapore radio station Symphony 92.4 to
              perform at various events and charity occasions.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Jem discovered his passion in teaching in his early 20s and
              had served on the faculty of Aureus Academy as a Piano Teacher
              and accompanist, tutoring pianists with ages ranging from 4
              years old to adults.
            </p>
          </div>
          <div className={`self-stretch flex flex-col items-start justify-start gap-[15px] text-17xl ${playfair.className}`}>
            <p className={`relative font-semibold ${playfair.className} text-lg lg:text-3xl lg:text-stone-400`}>Career Highlights</p>
            <ul className="m-0 pl-6 list-disc lg:text-stone-500">
              {achievements.map((achievement) => {
                return <li key={achievement} className="mb-[5px]">
                  {achievement}
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default BioContainer;
