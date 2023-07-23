"use client"

import Link from "next/link";

const socials = [
  { src: "/footerIcons/facebookIcon.svg", link: "https://www.facebook.com/profile.php?id=100093795672059" },
  { src: "/footerIcons/igIcon.svg", link: "https://www.instagram.com/jem.piano/" },
  { src: "/footerIcons/youtubeIcon.svg", link: "https://www.youtube.com/channel/UCPDlW6-as9oE-_cz4Kkhiaw" },
  { src: "/footerIcons/xhsIcon.svg", link: "https://www.xiaohongshu.com/user/profile/6175fe6400000000020277b5?xhsshare=CopyLink&appuid=6175fe6400000000020277b5&apptime=1689771888" }
]

const links = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
]

function Footer() {
  function scrollToTop() {
    window.scrollTo(0, 0)
  }
  return (
    <footer className="self-stretch bg-zinc-700 flex flex-col lg:flex-row items-center lg:px-20 box-border text-left text-xl text-white font-inter">
      <div className="text-sm md:text-base flex flex-col lg:flex-row lg:gap-x-8 items-center text-stone-200 w-full">
        {links.map((link) => {
          return <>
            <Link key={link.href} className="h-12 md:h-16 flex justify-center items-center" href={link.href}>{link.text}</Link>
            <hr className="border-t border-t-stone-500 h-1 w-full lg:hidden" />
          </>
        })}
        <button onClick={() => {
          scrollToTop()
          console.log('clicked')
        }} className="h-12 flex justify-center items-center">Back to Top</button>
        <hr className="border-t border-t-stone-500 h-1 w-full lg:hidden" />
      </div>
      <div className="my-6 flex flex-row gap-x-6 items-start justify-between">
        {socials.map((social) => (
          <Link href={social.link} key={social.src}>
            <img
              className="relative aspect-square h-12 md:h-12 overflow-hidden shrink-0"
              alt=""
              src={social.src}
            />
          </Link>
        ))}
      </div>
      <span className="text-xs text-stone-400 mb-8 lg:mb-0 lg:ml-8 lg:w-44">&copy;2023 Rondo Studio</span>
    </footer>
  );
};

export default Footer;


