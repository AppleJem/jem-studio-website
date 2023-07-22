import Image from "next/image"
import keyboardImg from "../../public/images/keyboard stock.webp"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
    subsets: ["latin"],
    fallback: ["serif"]
})

function Charges() {
    return <section className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10">
        <div className="flex justify-center items-start lg:justify-start aspect-[4/3] w-5/6 md:w-1/2 lg:w-1/3 h-auto">
            <div className="flex flex-col justify-center">
                <h2 className={`${playfair.className} text-2xl lg:text-4xl text-black`}>Lesson Charges</h2>
                <span className="w-16 border-t-2 border-t-stone-500 h-1 mt-8 mb-2"></span>
                <div className="flex flex-row text-black text-sm gap-x-10 lg:gap-x-20 lg:text-lg ">
                    <p>
                        Grade 3 and below <br />
                        Grade 4-5 <br />
                        Grade 6-7 <br />
                        Grade 8 <br />
                        DipABRSM/ATCL <br />
                    </p>
                    <p className="text-right">
                        $45/45mins or $60/hr <br />
                        $70/hr <br />
                        $80/hr <br />
                        $90/hr <br />
                        $100/hr <br />
                    </p>
                </div>
            </div>

        </div>
        <Image src={keyboardImg} alt="decorative image of a keyboard" className="aspect-[4/3] w-5/6 object-cover lg:w-1/3 h-auto"></Image>


    </section>
}

export default Charges