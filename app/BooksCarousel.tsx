
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
    subsets: ["latin"],
    fallback: ["serif"]
})
const carouselImages = [
    "/images/books_carousel/abrsm_books.png",
    "/images/books_carousel/faber books.png",
    "/images/books_carousel/Trinity books.jpg"
]

function BooksCarousel() {
    return <div id="default-carousel" className="relative w-full rounded-lg" data-carousel="slide">
        <div className="relative overflow-hidden h-64 md:h-96 rounded-lg">
            {carouselImages.map((image, index) => {
                return <div key={image} className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={image} className={`${index===0 && "z-50"} absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`} alt={`photo: {image}`} />
                </div>
            })}

        </div>
        {/* Slider Indicators */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            {carouselImages.map((image, index) => {
                return <button key={image} type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label={`slide ${index + 1}`} data-carousel-slide-to={index}></button>
            })}

        </div>
    </div>

}

export default BooksCarousel