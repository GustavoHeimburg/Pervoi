import Header from "./components/Header";
import Hero from "./components/Hero";
import Stores from "./components/Stores";
import CTA from "./components/CTA";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Menu from "./components/Menu";

export default function Page() {
    return (
        <>
            <Header />
            <Hero />
            <Stores />
            <Reviews />
            <CTA />
            <Footer />
            <WhatsAppButton />
        </>
    );
}