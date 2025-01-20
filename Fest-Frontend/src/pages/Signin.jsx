import { Link } from 'react-router-dom';


export default function Signin() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  px-4">
            <div className="w-full max-w-md p-8  rounded-lg ">
                <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Log in to your account</h1>
                <p className="text-base text-gray-500 mb-8 text-center">
                    Don&apos;t have an account? 
                    <Link
                        to={"/register"} 
                        className="text-blue-600 font-semibold hover:text-blue-800 ml-2">
                        Sign up
                    </Link>
                </p>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="username" className="text-sm font-medium text-gray-700">
                            username
                        </label>
                        <input 
                            type="username"
                            name="username"
                            id="username"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input 
                            type="password"
                            name="password"
                            id="password"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-4">
                        Sign in
                    </button>
                </form>
                <p className="text-center mt-4">
                    <button className="text-blue-600 hover:text-blue-800">
                        Forgot password?
                    </button>
                </p>
            </div>
        </div>
    )
}