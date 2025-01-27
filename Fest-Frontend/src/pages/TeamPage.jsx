import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import TeamSection from "../components/TeamSection";
import { motion } from "framer-motion"; // For animation

export default function TeamPage() {
    return (
        <>
            <NavBar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <TeamSection />
            </motion.div>
            <Footer />
        </>
    );
}
