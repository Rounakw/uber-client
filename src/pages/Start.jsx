import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
    return (
        <div className=' bg-cover bg-center  bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8  flex justify-between flex-col w-full bg-black'>
            <img className='w-20 ml-8 invert-0' src="https://freelogopng.com/images/all_img/1659768779uber-logo-white.png" alt="" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
                <Link to={"/login"} className='w-full bg-black flex items-center justify-center text-white py-3  rounded mt-5'>Continue</Link>
            </div>
        </div>
    )
}

export default Start
