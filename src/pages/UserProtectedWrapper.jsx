import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userDataContext } from '../context/UserContext';
import axios from 'axios';
import Loading from './Loading';

const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { user, setUser } = useContext(userDataContext)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            if (response.status === 200) {
                setUser(response.data);
                setIsLoading(false);
            }
        }).catch(err => {
            localStorage.removeItem('token'); // Remove invalid token
            navigate('/login'); // Redirect to login
        })
    }, [token, navigate, setUser])

    if (isLoading) {
        return <Loading />
    }

    return <>{children}</>;

}

export default UserProtectedWrapper
