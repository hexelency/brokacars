import React from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'
import Cars from './Cars'
import Paymentcard from './payment-card'




const Booking = () => {
  // const screenHeight = window.innerHeight;
  return (
    <div className=' p-0 mt-0 grid grid-rows-[auto_14fr] sm:grid-rows-[] scroll-on-landscape'>

      <span className='text-[12px]  md:text-[1.29rem] font-semibold text-center p-1 block mt-1'>Book a ride
      </span>

      <div className='h-[59vh] sm:h-[62vh] sm:max-w-[90vw] md:max-w-[50vw] md:h-[84vh] lg:min-h-[81.9vh]  md:grid  grid-rows-[auto_auto_auto]' >
        <AutoCompleteAddress />
        <Cars />
        <Paymentcard /> 
      </div>
    </div>
  )
}

export default Booking
