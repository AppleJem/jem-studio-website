import Image from "next/image"
import keyboardImg from "../../public/images/keyboard stock.webp"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
    subsets: ["latin"],
    fallback: ["serif"]
})

function Address() {
    return <section className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">

        <iframe className="aspect-[4/3] w-5/6 object-cover lg:w-1/3 h-auto" loading="lazy" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJwf6r38IX2jERHmVxmBQFHZU&key=AIzaSyCZUygOzVi4VndXok5wwLGGedze-gx2KJI"></iframe>
        <div className="flex justify-center items-center aspect-[4/3] w-5/6 md:w-1/2 lg:w-1/3 h-auto">
            <div className="flex flex-col justify-center items-start">
                <h2 className={`${playfair.className} text-2xl lg:text-4xl text-black`}>Our Studio</h2>
                <span className="w-16 border-t-2 border-t-stone-500 h-1 mt-8 mb-2"></span>
                <div className="flex flex-row  text-black text-sm lg:gap-x-10 lg:text-lg">
                    <p>
                        zhangjem2002@gmail.com <br />
                        +65 8885 2577 <br />
                        <br />
                        Blk 10 Ubi Crescent, Ubi Techpark <br />
                        Lobby B, #04-28 <br />
                        Singapore 408564 <br />
                    </p>
                </div>
            </div>

        </div>
    </section>
}

export default Address