import React, { useState, useEffect } from 'react';
import { Sacramento } from "next/font/google";
import { useRouter } from 'next/router';

const sacra = Sacramento({
  subsets: ['latin'],
  weight: "400"
})

function NavbarResponsive() {

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
      console.log(scrollPosition);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const router = useRouter();
  console.log(router.pathname)

  return <nav className={`${navbarTransparent? "bg-transparent": "bg-yellow-200"} transition-colors duration-300 border-gray-200 w-full fixed top-0 z-50`}>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex flex-row justify-center items-center">
        <img src="/Logo_white border_no bg_no text.png" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className={`self-center text-3xl whitespace-nowrap text-black ${sacra.className}`}>Jem Studio</span>
      </div>

      <button onClick={(e) => setMobileMenuShowing(!mobileMenuShowing)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div className={`hidden  w-full md:block md:w-auto`} id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:border-gray-700">
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current={router.pathname == "/" ? "page" : "false"}>Home</a>
          </li>

          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ">Pricing</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default NavbarResponsive