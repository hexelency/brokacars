import React from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'
import Cars from './Cars'
import Paymentcard from './payment-card'

const Booking = () => {
  // const screenHeight = window.innerHeight;
  return (
    <div className=' p-0 mt-0 grid grid-rows-[1fr_14fr] '>

      <span className='text-[10px] md:text-[1.29rem] font-semibold text-center p-1 block mt-1'>Book a ride
      </span>

      <div className='overflow-hidden h-full sm:h-fit md:h-full  w-full sm:w-full sm:min-w-0 sm:min-h-0 md:w-full lg:min-h-[81.9vh] sm:flex sm:flex-col justify-around  md:grid  grid-rows-[auto_auto_auto_auto_100px] 2xl:grid-rows-[auto_auto_auto_auto_auto_2000px]' >
        <AutoCompleteAddress />
        <Cars />
        <Paymentcard />
      </div>
    </div>
  )
}

export default Booking
