import type { NextPage } from "next";

const BioContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col py-0 px-[102px] items-center justify-center text-left text-45xl text-black font-inter">
      <div className="w-[978px] flex flex-col items-center justify-center">
        <div className="self-stretch flex flex-col items-end justify-start gap-[46px]">
          <div className="self-stretch flex flex-col items-start justify-center gap-[46px]">
            <div className="self-stretch relative font-semibold">Jem Zhang</div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[562px] shrink-0 object-cover"
              alt=""
              src="/steinway-comp-2018--2-1@2x.png"
            />
          </div>
          <div className="w-[629px] flex flex-col items-start justify-start gap-[46px] text-lg">
            <div className="self-stretch overflow-hidden flex flex-col items-end justify-center">
              <div className="self-stretch relative">
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
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-17xl">
              <div className="relative font-semibold">Career Highlights</div>
              <div className="self-stretch relative text-[inherit] font-inherit">
                <ul className="m-0 pl-6">
                  <li className="mb-[5px]">
                    1st Prize, Steinway Youth Piano Competition
                  </li>
                  <li className="mb-[5px]">
                    2nd Prize, National Piano and Violin Competition (Singapore)
                  </li>
                  <li className="mb-[5px]">
                    2nd Prize, Nanyang International Music Competition
                  </li>
                  <li className="mb-[5px]">
                    2nd Prize, Japan Piara International Piano Competition
                  </li>
                  <li className="mb-[5px]">
                    2nd Prize, Yamaha Piano Competition
                  </li>
                  <li className="mb-[5px]">
                    2nd Prize, Singapore International Festival of Music
                  </li>
                  <li className="mb-[5px]">
                    1st Prize, Symphony 924, Young Talents Project
                  </li>
                  <li className="mb-[5px]">
                    1st Prize, Singapore-Asia Piano Competition
                  </li>
                  <li>1st Prize, F J Benjamin NAFA SYT Music Competition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioContainer;
