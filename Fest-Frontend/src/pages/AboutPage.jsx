import { Link } from "react-router-dom";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MySignature from '../assets/signature.png';

export default function AboutPage() {
    return (
        <div className="bg-gray-50">
            <NavBar />
            <div className="container mt-16 mx-auto max-w-3xl p-10 text-gray-700">
                <div>
                    <h1 className='text-5xl font-bold text-blue-700 transform hover:scale-105 transition-all duration-300'>About Us</h1>
                </div>

                <div className="mt-10 text-lg">
                    <p className="leading-relaxed hover:text-blue-800 transition-colors duration-300">
                        Weddings are more than events; they are milestones, celebrations of love, and the beginning of a new chapter. Yet, planning such a significant day often feels overwhelming—from finding the right venues and vendors to coordinating the smallest details. That’s where we come in.
                    </p>

                    <p className="mt-4 leading-relaxed hover:text-blue-800 transition-colors duration-300">
                        Fiesta was created with a simple vision: to transform wedding planning from a stressful chore into an effortless and enjoyable experience. We understand how precious your time and energy are during this journey, and our mission is to help you focus on what truly matters—celebrating your love.
                    </p>
                </div>

                <div className="mt-6">
                    <h2 className='text-2xl font-semibold text-blue-900 mb-2 transition-all transform hover:scale-105 duration-300'>Our Mission</h2>
                    <p className='text-blue-900 leading-relaxed'>
                        At Fiesta, our mission is to be the ultimate resource for couples planning their dream wedding. We’ve curated a trusted network of the finest venues, caterers, photographers, and other professionals to bring your vision to life. Our goal is simple: to ensure that every couple enjoys a smooth, stress-free, and personalized planning experience.
                    </p>

                    <p className="mt-2 leading-relaxed">
                        Whether you dream of a grand celebration or an intimate gathering, we’re here to provide the tools, expertise, and inspiration you need to make it happen.
                    </p>
                </div>

                <div className="mt-6">
                    <h2 className='text-2xl font-semibold text-blue-900 mb-2 transition-all transform hover:scale-105 duration-300'>What Makes Us Unique</h2>
                    <p>
                        Fiesta is not just a wedding planning platform—it’s a promise. A promise to bring you the best, to stand by you, and to guide you every step of the way. What sets us apart is our commitment to excellence, our passion for creating unforgettable moments, and our belief that every wedding should be as unique as the couple it celebrates.
                    </p>

                    <p className="mt-2">
                        Our team is dedicated to offering personalized recommendations tailored to your needs, ensuring that you don’t just plan a wedding but create a story that reflects your love, style, and personality.
                    </p>
                </div>

                <div className="mt-6">
                    <h2 className='text-2xl font-semibold text-blue-900 mb-2 transition-all transform hover:scale-105 duration-300'>Our Commitment</h2>
                    <p>
                        Planning a wedding is a journey, and every journey is easier with a trusted companion. At Fiesta, we are committed to being that companion—offering guidance, expertise, and unwavering support from your first idea to your final dance.
                    </p>

                    <p className="mt-2">
                        Whether it’s helping you find the perfect location, managing your timeline, or connecting you with talented professionals, we are here to ensure every aspect of your wedding is seamless and special.
                    </p>
                </div>

                <div className="mt-6">
                    <h2 className='text-2xl font-semibold text-blue-900 mb-2 transition-all transform hover:scale-105 duration-300'>Why Choose Fiesta</h2>
                    <p>
                        Because we care. Because we listen. Because we know how important this day is to you. When you choose Fiesta, you choose more than a platform; you choose a partner who genuinely wants your wedding to be as magical and memorable as you’ve always dreamed.
                    </p>

                    <p className="mt-2">
                        Let’s make your wedding a celebration of love, joy, and cherished moments. With Fiesta, you’re in safe hands.
                    </p>
                </div>

                <div className='mt-10 text-center'>
                    <img src={MySignature} alt="Signature" className='w-52 mx-auto transform hover:scale-105 transition-all duration-300' />
                    <div className='flex flex-row gap-2 justify-center mt-4'>
                        <p className='text-blue-900 text-xl'>John Doe - </p>
                        <p className='text-blue-900 text-xl'>Founder, Fiesta</p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}
