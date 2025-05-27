import React from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'
import Cars from './Cars'
import Paymentcard from './payment-card'

const Booking = () => {
  // const screenHeight = window.innerHeight;
  return (
    <div className=' p-0 mt-0 flex flex-col justify-center items-center'>
      <span className='text-[12px] md:text-2xl font-semibold mt-1'>Book a ride</span>

      <div className=' w-full min-h-[50vh] sm:min-h-[82vh] grid grid-rows-[auto_auto_auto] ' >
        <AutoCompleteAddress /> 
        <Cars />
        <Paymentcard />
      </div>
    </div>
  )
}

export default Booking
