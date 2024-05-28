import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useAuth = () => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            history.push('/login'); // Redirect to login if no token is found
        } else {
            // Optional: Verify token with the server to ensure it's still valid
            const verifyToken = async () => {
                try {
                    const response = await fetch('http://localhost:3000/auth/verify-token', {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (!response.ok) {
                        throw new Error('Token verification failed');
                    }
                } catch (error) {
                    console.error('Token verification error:', error);
                    localStorage.removeItem('token');
                    history.push('/login'); // Redirect to login if token is invalid
                }
            };

            verifyToken();
        }
    }, [history]);
};

export default useAuth;
