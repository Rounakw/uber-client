import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

function Home() {
  let [pickup, setPickup] = useState('');
  let [destination, setDestination] = useState('');
  let [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null)
  const pannelCloseRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hh");
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: '20px',
      })
      gsap.to(pannelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: '0',
      })
      gsap.to(pannelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute  left-5 top-5' src="https://logodix.com/logo/54423.png" alt="" />
      <div className='h-screen w-screen'>
        {/* image for temporary use */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={pannelCloseRef} onClick={() => setPanelOpen(false)} className='absolute top-6 right-6 text-2xl opacity-0'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 left-10 top-[45%] bg-gray-900 rounded-full "></div>
            <input
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5 focus:outline-none'
              value={pickup}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setPickup(e.target.value)}
              type="text"
              placeholder='Add a pick-up location'
            />
            <input
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3 focus:outline-none'
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              type="text"
              placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel />
        </div>
      </div>



    </div>
  )
}

export default Home
