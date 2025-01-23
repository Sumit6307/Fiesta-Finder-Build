import {BrowserRouter as Router ,Routes , Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Page404 from "./pages/Page404"
import HomePage from './pages/HomePage'
// import ReserveYourSpot from "./components/ReserveYourSpot"
import AdminPage from "./pages/AdminPage"
import Venue from "./pages/Venue"
import Home from "./pages/Home"
import AboutPage from "./pages/AboutPage"
import Profile from './pages/Profile';
import { AuthProvider } from "./context/AuthContext"
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import PolicyPage from "./pages/PolicyPage"
import TeamPage from "./pages/TeamPage"
import BlogPage from "./pages/BlogPage"
import BlogCard from "./components/BlogCard"

export default function App () {
    return (
        <>
         <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/register" element={<Signup />} />
                    <Route path="/login" element={<Signin />} />
                    <Route path="/homecom" element={<HomePage />} />
                    <Route path="*" element={<Page404 />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/venue" element={<Venue />} />
                    <Route path='/home' element={<Home/>}/>
                    <Route path="/about" element={<AboutPage />} />
                    {/* <Route path="/hotel/:id" element={<ReserveYourSpot />} /> */}
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/forgot-password" element={<ForgetPassword />} />
                    <Route path="/policy" element={<PolicyPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/reset-password/:token" element={<ResetPassword />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blogcard" element={<BlogCard />} />


                </Routes>
            </Router>
            </AuthProvider>
        </>
    )
}
