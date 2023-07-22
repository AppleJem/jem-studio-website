'use client'
import React, { useState, useEffect } from 'react';
import { Sacramento } from "next/font/google";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const sacra = Sacramento({
  subsets: ['latin'],
  weight: "400"
})

const navLinks = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" }
]

function NavbarResponsive(props: {fixedColor:boolean, bgColor ?:string}) {

  const [mobileMenuShowing, setMobileMenuShowing] = useState(false);
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // => scroll position
      if (scrollPosition !== 0) {
        setNavbarTransparent(false)
      } else {
        setNavbarTransparent(true)
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const pathname = usePathname();

  return <nav className={`${navbarTransparent && !props.fixedColor ? "bg-transparent text-stone-200" : "backdrop-blur-2xl backdrop-contrast-50 bg-amber-400 bg-opacity-50 text-stone-50"} transition-colors duration-300 border-gray-200 w-full fixed top-0 z-50`}>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex flex-row justify-center items-center">
        <img src="/Logo_white border_no bg_no text.png" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className={`self-center text-3xl whitespace-nowrap ${sacra.className}`}>Rondo Studio</span>
      </div>

      <button onClick={(e) => setMobileMenuShowing(!mobileMenuShowing)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div className={`hidden  w-full md:block md:w-auto`} id="navbar-default">
        <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:items-center md:space-x-8 md:mt-0 md:border-0  dark:border-gray-700">
          {navLinks.map((link) => (
            <li key={link.link} className="flex justify-center align-center">
              <Link href={link.link} className={`${link.link === pathname ? "border-b-stone-50" : ""} ${navbarTransparent ? "md:hover:text-yellow-200" : "md:hover:border-b hover:border-stone-600"} transition-colors ease-out duration-300 border-b border-transparent block py-2 hover:bg-gray-100 md:hover:bg-transparent md:p-0`}>{link.text}</Link>
            </li>
          ))}
          <li className={`py-2 flex justify-center align-center ${navbarTransparent && !props.fixedColor ? "md:bg-yellow-200 border-transparent" : " md:text-stone-700 md:bg-yellow-200 "} md:text-stone-700 md:font-semibold md:px-6 md:rounded-full`}>
            <a href="/contact" className={`transition-colors ease-out duration-300 block hover:bg-gray-100 md:hover:bg-transparent md:p-0`}>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default NavbarResponsive