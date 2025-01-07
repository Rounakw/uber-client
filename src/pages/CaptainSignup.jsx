import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';
import { toast, ToastContainer } from 'react-toastify'
import Loading from './Loading'

function CaptainSignup() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('Car');
  const [loading, setLoading] = useState(false)

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    setLoading(true)
    e.preventDefault();

    // Prepare user data
    const captainPayload = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainPayload
      );

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
      setFirstname('');
      setLastname('');
      setEmail('');
      setPassword('');
      setVehicleColor('');
      setVehiclePlate('');
      setVehicleCapacity('');
      setVehicleType('');
    } catch (error) {
      toast.error(error?.response.data.message);
    } finally {
      setLoading(false)
    }


  };

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
      <div>
        <div className='flex gap-2'>
          <img className='w-7 mb-10' src='https://pngimg.com/uploads/uber/uber_PNG27.png' alt='' />
          <img className='w-16 mb-10 object-contain' src='https://logodix.com/logo/54423.png' alt='' />
        </div>
        <form onSubmit={submitHandler}>
          <h3 className='text-base font-medium mb-2'>What's our captain's name</h3>
          <div className='flex gap-4 mb-6'>
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base focus:outline-none'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              type='text'
              placeholder='First name'
            />
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base focus:outline-none'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type='text'
              placeholder='Last name'
            />
          </div>

          <h3 className='text-base font-medium mb-2'>What's our captain's email</h3>
          <input
            required
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none'
            value={email?.toLowerCase()}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='email@example.com'
          />

          <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input
            required
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='password'
          />

          <h3 className='text-base font-medium mb-2'>What's our captain's vehicle details</h3>
          <div className='flex gap-4 mb-6'>
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base focus:outline-none'
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              type='text'
              placeholder='Vehicle color'
            />
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base focus:outline-none'
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              type='text'
              placeholder='Plate number'
            />
          </div>

          <div className='flex gap-4 mb-6'>
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base focus:outline-none'
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              type='number'
              placeholder='Vehicle capacity'
            />
            <select
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base focus:outline-none'
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value='' disabled>
                Select vehicle type
              </option>
              <option value='Car'>Car</option>
              <option value='Auto'>Auto</option>
              <option value='Motorcycle'>Motorcycle</option>
            </select>
          </div>

          <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
            Sign up
          </button>
          <p className='text-center'>
            Already have an account?{' '}
            <Link to='/captain-login' className='text-blue-600'>
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link to='/signup' className='bg-[#d5622d] flex items-center justify-center text-[#fff] font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
          Signup as User
        </Link>
      </div>
      {
        loading && <Loading />
      }
    </div>
  );
}

export default CaptainSignup;
