import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="self-stretch bg-zinc-700 h-[110px] flex flex-row py-0 px-[57px] box-border items-center justify-between text-left text-xl text-white font-inter">
      <div className="w-[364px] flex flex-row items-start justify-between">
        <img
          className="relative w-[57px] h-[57px] overflow-hidden shrink-0"
          alt=""
          src="/facebook-1.svg"
        />
        <img
          className="relative w-[58px] h-[58px] overflow-hidden shrink-0"
          alt=""
          src="/iconmonstrinstagram14-1.svg"
        />
        <img
          className="relative w-[57px] h-[57px] overflow-hidden shrink-0"
          alt=""
          src="/iconmonstryoutube9-1.svg"
        />
        <img
          className="relative w-[58px] h-[57px] overflow-hidden shrink-0"
          alt=""
          src="/xiaohongshuoqlb1y4he-brandlogosnet-1.svg"
        />
      </div>
      <div className="w-[241px] flex flex-row items-center justify-between">
        <div className="relative">Return to Top</div>
        <div className="relative">Contact</div>
      </div>
    </div>
  );
};

export default Footer;
