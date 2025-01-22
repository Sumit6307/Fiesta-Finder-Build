import {BrowserRouter as Router ,Routes , Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Page404 from "./pages/Page404"
import HomePage from './pages/HomePage'
import Card from "./components/Card"
import Option from "./components/Option"
import ReserveYourSpot from "./components/ReserveYourSpot"

import AdminPage from "./pages/AdminPage"
import Venue from "./pages/Venue"
import Home from "./pages/Home"
import AboutPage from "./pages/AboutPage"

export default function App () {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/register" element={<Signup />} />
                    <Route path="/login" element={<Signin />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="*" element={<Page404 />} />
                    <Route path="/card" element={<Card />} />
                    <Route path="/option" element={<Option />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/venue" element={<Venue />} />
                    <Route path='/homecom' element={<Home/>}/>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/reserve" element={<ReserveYourSpot />} />

                </Routes>
            </Router>
        </>
    )
}
