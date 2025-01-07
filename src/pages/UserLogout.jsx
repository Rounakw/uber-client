import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            if (token) {
                try {
                    await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    localStorage.removeItem('token');
                    navigate('/login');
                } catch (error) {
                    console.error('Logout failed', error);
                }
            } else {
                console.log('No token found');
                navigate('/login'); 
            }
        };

        logoutUser();
    }, [token, navigate]);

    return (
        <div>
            Logout Successfully
        </div>
    );
};

export default UserLogout;
