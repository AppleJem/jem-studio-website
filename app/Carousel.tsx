
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
    subsets: ["latin"],
    fallback: ["serif"]
})
const carouselImages = [
    "/images/home_carousel/carousel-1.png",
    "/images/home_carousel/SIPC 2019 - 2.JPG",
    "/images/home_carousel/Steinway Comp 2018 - 1.jpg",
    "/images/home_carousel/ytp 2017 - 3.jpg",
    "/images/home_carousel/ytp 2017 -1.jpg",
    "/images/home_carousel/Steinway Comp 2018 - 2.jpg"
]

function Carousel() {
    return <div id="default-carousel" className="relative w-full bg-black" data-carousel="slide">
        <div className="relative h-screen overflow-hidden rounded-lg">
            {carouselImages.map((image) => {
                return <div key={image} className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
            })}

        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            {carouselImages.map((image, index) => {
                return <button type="button" key={image} className="w-3 h-3 rounded-full" aria-current="true" aria-label={`Slide ${index +1}`} data-carousel-slide-to={index}></button>
            })}
            
        </div>
        <div className={`${playfair.className} absolute top-0 w-full h-full text-white z-30 flex justify-center items-center`}>
            <div className="">
                <p className="text-6xl">Learn Music</p>
                <p className="text-3xl text-right -mr-10">Your Way</p>
            </div>

        </div>
    </div>

}

export default Carousel