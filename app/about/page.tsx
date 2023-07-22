
import { NextPage } from "next";
import NavbarResponsive from "../../components/NavbarResponsive";
import Footer from "../../components/footer";
import Charges from "./Charges";
import Address from "./Address";

const ChargesPage: NextPage = () => {
    return <>
        <NavbarResponsive fixedColor={true} bgColor="backdrop-contrast-50 bg-amber-400 bg-opacity-50" />
        <main className="min-h-screen py-32 lg:py-44 relative flex flex-col gap-16 lg:gap-32 backdrop-contrast-50 bg-amber-50 w-full overflow-hidden  text-left text-white font-kaisei-decol pb-12">
            <Address />
            <Charges />
        </main>
        <Footer />
    </>
}

export default ChargesPage