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
  let [vechilePanelOpen, setVechilePanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null)



  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hh");
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        display: 'block',
        height: '70%',
        padding: '20px',
      })
      gsap.to(pannelCloseRef.current, {
        opacity: 1
      })
    }

    if (!panelOpen) {
      gsap.to(panelRef.current, {
        display: 'none',
        height: '0%',
        padding: '0',
      })
      gsap.to(pannelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(function () {
    if (vechilePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [vechilePanelOpen]);


  return (
    <div className='h-screen relative bg-red-500'>
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
        <div ref={panelRef} className='bg-white hidden'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVechilePanelOpen={setVechilePanelOpen} />
        </div>

      </div>


      <div ref={vehiclePanelRef} className='fixed w-full z-50 bottom-0 translate-y-full bg-white px-3 py-8'>

        <h3 className='text-2xl font-[650] mb-5 '>Choose a Vehicle</h3>
        {/* vehicle 1 */}
        <div className='flex w-full border-[3px] active:border-black border-black  rounded-xl mb-2 p-3 items-center  justify-between '>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_203,w_360/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹193.20</h2>
        </div>

        {/* vehicle 2 */}
        <div className='flex w-full border-[3px] active:border-black rounded-xl mb-2 p-3 items-center  justify-between '>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1649230978/assets/a2/553a18-2f77-4722-a4ba-f736f4cb405e/original/Uber_Moto_Orange_558x372_pixels_Desktop.png" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹65.17</h2>
        </div>

        {/* vehicle 3 */}
        <div className='flex w-full border-[3px] active:border-black rounded-xl mb-2 p-3 items-center  justify-between '>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹118.21</h2>
        </div>

      </div>
    </div>
  )
}

export default Home
