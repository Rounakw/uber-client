import React from 'react'

const LookingForDriver = () => {
    return (
        <div>
            <h5 onClick={() => setConfirmRidePanel(false)} className='p-3 text-center absolute top-0 w-[93%]'>
                <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
            </h5>
            <h3 className='text-2xl font-[650] mb-5 '>Looking for a Driver</h3>

            <div className='flex gap-5 justify-between items-center flex-col'>
                <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_203,w_360/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
                <div className='w-full mt-5 '>

                    <div className='flex items-center gap-5 p-3 border-b-2 '>
                        <i className=" text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2 '>
                        <i className="text-lg ri-map-pin-4-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>$193.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default LookingForDriver
