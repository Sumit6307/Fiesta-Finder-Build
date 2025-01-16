import { Link } from 'react-router-dom';

export default function Page404() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 bg-gradient-to-b from-blue-50 to-gray-100 text-center">
            <img
                src="/src/assets/img404.svg"
                alt="404 illustration"
                className="w-6/6 md:w-1/2 h-auto mb-8 md:mb-0"  
            />

            <div className='space-y-4 md:ml-8'>
                <h1 className="text-6xl md:text-8xl font-extrabold text-gray-700">404</h1>
                <h2 className="text-xl md:text-2xl font-sans text-gray-600">
                    Oops! The page you&apos;re looking for doesn&apos;t exist.
                </h2>
                <Link
                    to="/"
                    className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 text-lg font-medium transition-all"
                >
                    Go back to Home
                </Link>
            </div>
        </div>
    );
}
