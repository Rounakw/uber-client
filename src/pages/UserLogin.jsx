import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext';
import { toast, ToastContainer } from 'react-toastify'
import Loading from './Loading'

function UserLogin() {
  const [email, setEmal] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();
  const { user, setUser } = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    setIsLoading(true)
    e.preventDefault()

    let user = { email, password }
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, user);
      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
      setEmal("")
      setPassword("")
    } catch (error) {
      toast.error(error?.response.data.message);
    } finally {
      setIsLoading(false)
    }

  }

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
        <img className='w-16 mb-10' src="https://logodix.com/logo/54423.png" alt="" />
        <form action="" onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>

          <input
            required
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none'
            value={email}
            onChange={(e) => setEmal(e.target.value)}
            type="email"
            placeholder='email@example.com' />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            required
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='password'
          />


          <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4  py-2 w-full text-lg placeholder:text-base'>Login</button>
          <p className='text-center'>New here? <Link to={"/signup"} className='text-blue-600 '>Create new Account</Link></p>

        </form>
      </div>
      <div>
        <Link to={"/captain-login"} className='bg-[#10b461] flex items-center justify-center text-[#fff] font-semibold mb-5 rounded px-4  py-2 w-full text-lg placeholder:text-base'>Login as Captain</Link>
      </div>
      {isLoading && <Loading/>}


    </div>
  )
}

export default UserLogin
