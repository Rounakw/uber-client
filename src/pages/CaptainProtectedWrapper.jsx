import React, { useContext, useEffect, useState } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate('/captain-login');
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data); // Set captain data in context
          setIsLoading(false); // Loading complete
        }
      })
      .catch((err) => {
        localStorage.removeItem('token'); // Remove invalid token
        navigate('/captain-login'); // Redirect to login
      });
  }, [token, navigate, setCaptain]);

  if (isLoading) {
        return <Loading />
    }

  return <>{children}</>; // Render children after validation
};

export default CaptainProtectedWrapper;
