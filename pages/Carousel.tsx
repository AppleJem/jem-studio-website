
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
    subsets: ["latin"],
    fallback: ["serif"]
})
const carouselImages = [
    "/images/home_carousel/carousel-1.png",
    "https://images.unsplash.com/photo-1688933887296-2452acf991dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1688989680825-0790dc6488fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1688976694262-89230d6133ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1674997637853-d237a8fc0795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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