import React from 'react'

const VehiclePanel = ({ setVechilePanelOpen, setConfirmRidePanel }) => {
    return (
        <div>
            <h5 onClick={() => setVechilePanelOpen(false)} className='p-3 text-center absolute top-0 w-[93%]'>
                <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
            </h5>
            <h3 className='text-2xl font-[650] mb-5 '>Choose a Vehicle</h3>
            {/* vehicle 1 */}
            <div onClick={()=>setConfirmRidePanel(true)} className='flex w-full border-[3px] active:border-black rounded-xl mb-2 p-3 items-center  justify-between '>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_203,w_360/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
                <div className=' w-1/2'>
                    <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹193.20</h2>
            </div>

            {/* vehicle 2 */}
            <div  onClick={()=>setConfirmRidePanel(true)} className='flex w-full border-[3px] active:border-black rounded-xl mb-2 p-3 items-center  justify-between '>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1649230978/assets/a2/553a18-2f77-4722-a4ba-f736f4cb405e/original/Uber_Moto_Orange_558x372_pixels_Desktop.png" alt="" />
                <div className=' w-1/2'>
                    <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹65.17</h2>
            </div>

            {/* vehicle 3 */}
            <div  onClick={()=>setConfirmRidePanel(true)} className='flex w-full border-[3px] active:border-black rounded-xl mb-2 p-3 items-center  justify-between '>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className=' w-1/2'>
                    <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, auto rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹118.21</h2>
            </div>
        </div>
    )
}

export default VehiclePanel
