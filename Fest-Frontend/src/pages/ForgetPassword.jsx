import { useState } from 'react';
import axios from '../api/axiosInstance';

export default function ForgetPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/forgot-password', { email });
            console.log('Password reset email sent:', response.data);
            alert("Reset Password Link Sended to the User Email")
        } catch (error) {
            console.error('Error occurred:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border rounded"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <button type="submit" className="p-2 bg-blue-500 text-white rounded">Submit</button>
            </form>
        </div>
    );
}