import { useEffect } from 'react';
import axios from '../api/axiosInstance';
import { useParams, useNavigate } from 'react-router-dom';

export default function VerifyEmail() {
    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Verification Token:', token); // Log the token
        const verifyEmail = async () => {
            try {
                const response = await axios.get(`/users/verify/${token}`);
                alert(response.data.message);
                navigate('/login'); // Redirect to login after verification
            } catch (error) {
                console.error('Error verifying email:', error);
                alert(error.response?.data?.message || 'Verification failed!');
            }
        };

        verifyEmail();
    }, [token, navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <h2 className="text-lg">Verifying your email...</h2>
        </div>
    );
}