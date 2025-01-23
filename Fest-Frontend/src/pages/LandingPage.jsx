import NavBar from "../components/Navbar"
import Hero from "../components/Hero"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import Features from "../components/Features"
import Contact from "../components/Contact"

export default function LandingPage () {
    return (
        <>
            <NavBar />
            <Hero />
            <Features />
            <FAQ />
            <Contact />
            <Footer />
        </>
    )
}