import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

function Home() {
  let [pickup, setPickup] = useState('');
  let [destination, setDestination] = useState('');
  let [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null)
  const pannelCloseRef = useRef(null)
  let [vechilePanelOpen, setVechilePanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null)

  let [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null)

  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null)

  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const waitingForDriverRef = useRef(null)


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

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [confirmRidePanel]);

  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [waitingForDriver]);



  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [vehicleFound]);

  return (
    <div className='h-screen relative '>
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

      <div ref={vehiclePanelRef} className='fixed w-full z-50 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVechilePanelOpen={setVechilePanelOpen} />
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full z-50 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className='fixed w-full z-50 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <LookingForDriver />
      </div>
      <div ref={waitingForDriverRef} className='fixed w-full z-50 bottom-0 translate-y-ful bg-white px-3 py-6 pt-12'>
        <WaitingForDriver waitingForDriver={waitingForDriver}/>
      </div>

    </div>
  )
}

export default Home
