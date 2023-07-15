"use client"

import Link from "next/link";

const socials = [
  { src: "/footerIcons/facebookIcon.svg", link: "#" },
  { src: "/footerIcons/igIcon.svg", link: "#" },
  { src: "/footerIcons/youtubeIcon.svg", link: "#" },
  { src: "/footerIcons/xhsIcon.svg", link: "#" }
]

function Footer (){
  console.log('hi')
  function scrollToTop () {
    window.scrollTo(0,0)
  }
  return (
    <div className="self-stretch bg-zinc-700 flex flex-row py-3  px-6 md:py-5 md:px-9 lg:px-20 box-border items-center justify-between text-left text-xl text-white font-inter">
      <div className="flex flex-row gap-x-2 items-start justify-between">
        {socials.map((social) => (
          <img
            key={social.src}
            className="relative aspect-square h-8 md:h-12 overflow-hidden shrink-0"
            alt=""
            src={social.src}
          />
        ))}

      </div>

      <div className="text-sm md:text-base flex flex-row gap-x-4 items-center">
        <button onClick={() => {
          scrollToTop()
          console.log('clicked')
        }} className="relative">Back to Top</button>
        <Link href="/contact" className="relative">Contact Us</Link>
      </div>
    </div>
  );
};

export default Footer;
