import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userDataContext } from '../context/UserContext'
import { toast, ToastContainer } from 'react-toastify'
import Loading from './Loading'

function UserSignup() {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();
  const { user, setUser } = React.useContext(userDataContext);

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname,
        lastname
      },
      email,
      password
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
      if (response.status === 201) {
        setUser(response.data.user);
        navigate('/login');
      }
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(error?.response.data.message);
    } finally {
      setLoading(false);
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

          <h3 className='text-base font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-6'>
            <input
              required
              className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base focus:outline-none'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              type="text"
              placeholder='First name' />

            <input
              required
              className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base focus:outline-none'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              placeholder='Last name' />
          </div>

          <h3 className='text-base font-medium mb-2'>What's your email</h3>
          <input
            required
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none'
            value={email?.toLowerCase()}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder='email@example.com' />
          <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input
            required
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='password'
          />


          <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4  py-2 w-full text-lg placeholder:text-base'>Sign up</button>
          <p className='text-center'>Already have an account? <Link to={"/login"} className='text-blue-600 '>Login here</Link></p>

        </form>
      </div>
      <div>
        <Link to={"/captain-signup"} className='bg-[#10b461] flex items-center justify-center text-[#fff] font-semibold mb-5 rounded px-4  py-2 w-full text-lg placeholder:text-base'>Signup as Captain</Link>
      </div>
      {
        loading && <Loading />
      }

    </div>
  )
}

export default UserSignup
