
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
    subsets: ["latin"],
    fallback: ["serif"]
})
const carouselImages = [
    "/images/home_carousel/studio image.webp",
    "/images/home_carousel/SIPC 2019 - 2.webp",
    "/images/home_carousel/Steinway Comp 2018 - 1.webp",
    "/images/home_carousel/ytp 2017 - 3.webp",
    "/images/home_carousel/ytp 2017 -1.webp",
    "/images/home_carousel/Steinway Comp 2018 - 2.webp"
]

function BioCarousel() {
    return <div id="default-carousel" className="relative w-full md:aspect-auto bg-black" data-carousel="slide">
        <div className="relative lg:aspect-auto h-72 lg:h-[32rem] overflow-hidden rounded-lg">
            {carouselImages.map((image) => {
                return <div key={image} className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
            })}

        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            {carouselImages.map((image, index) => {
                return <button type="button" key={image} className="w-2 h-2 md:w-3 md:h-3 rounded-full" aria-current="true" aria-label={`Slide ${index +1}`} data-carousel-slide-to={index}></button>
            })}
            
        </div>
    </div>

}

export default BioCarousel;