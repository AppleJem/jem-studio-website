
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
    subsets: ["latin"],
    fallback: ["serif"]
})
const carouselImages = [
    "/images/home_carousel/carousel-1.png",
    "https://images.unsplash.com/photo-1688933887296-2452acf991dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
]

function Carousel() {
    return <div id="default-carousel" className="relative w-full bg-black" data-carousel="slide">
        <div className="relative h-screen overflow-hidden rounded-lg">

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={carouselImages[0]} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={carouselImages[1]} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
        </div>

        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button type="button" className=" w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className=" w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className=" w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" className=" w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" className=" w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>

        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
        <div className={`${playfair.className} absolute top-0 w-full h-full text-white z-30 flex justify-center items-center`}>
            <div className="">
                <p className="text-6xl">Learn Music</p>
                <p className="text-3xl text-right -mr-10">Your Way</p>
            </div>

        </div>
    </div>

}

export default Carousel