import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const logoutCaptain = async () => {
            if (token) {
                try {
                    await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    localStorage.removeItem('token');
                    navigate('/captain-login');
                } catch (error) {
                    console.error('Logout failed', error);
                }
            } else {
                console.log('No token found');
                navigate('/captain-login'); 
            }
        };

        logoutCaptain();
    }, [token, navigate]);

    return (
        <div>
            Logout Successfully
        </div>
    );
};

export default CaptainLogout;
