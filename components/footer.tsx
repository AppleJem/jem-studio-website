"use client"

import Link from "next/link";

const socials = [
  { src: "/footerIcons/facebookIcon.svg", link: "https://www.facebook.com/profile.php?id=100093795672059" },
  { src: "/footerIcons/igIcon.svg", link: "https://www.instagram.com/jem.piano/" },
  { src: "/footerIcons/youtubeIcon.svg", link: "https://www.youtube.com/channel/UCPDlW6-as9oE-_cz4Kkhiaw" },
  { src: "/footerIcons/xhsIcon.svg", link: "https://www.xiaohongshu.com/user/profile/6175fe6400000000020277b5?xhsshare=CopyLink&appuid=6175fe6400000000020277b5&apptime=1689771888" }
]

function Footer() {
  function scrollToTop() {
    window.scrollTo(0, 0)
  }
  return (
    <div className="self-stretch bg-zinc-700 flex flex-row py-3  px-6 md:py-5 md:px-9 lg:px-20 box-border items-center justify-between text-left text-xl text-white font-inter">
      <div className="flex flex-col items-start">
        <div className="flex flex-row gap-x-2 items-start justify-between">
          {socials.map((social) => (
            <Link href={social.link} key={social.src}>
              <img
                className="relative aspect-square h-8 md:h-12 overflow-hidden shrink-0"
                alt=""
                src={social.src}
              />
            </Link>

          ))}

        </div>
        <span className="w-16 border-t border-t-stone-200 mt-4 mb-2"></span>
        <span className="text-xs">&copy;Rondo Studio</span>
      </div>


      <div className="text-sm md:text-base flex flex-col gap-y-3 items-center text-stone-200">
        <div className="flex gap-x-3">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
        <button onClick={() => {
          scrollToTop()
          console.log('clicked')
        }} className="relative ">Back to Top</button>
      </div>
    </div>
  );
};

export default Footer;
