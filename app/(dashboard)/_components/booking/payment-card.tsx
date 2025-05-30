import { Button } from '@/components/ui/button'
import React from 'react'

const Paymentcard = () => {
  return (
    
      <div className="flex  justify-between mt-4 mb-2 sm:mb-0 md:mb-0  md:mt-4 border-1 p-2 pt-0 md:p-4">
        <div className="min-w-[100px] md:max-w-[100px]  shrink  text-nowrap text-center pt-2 text-[14px] md:p-[8px] md:ml-0 md:text-[12px] font-medium md:font-black md:w-full">
        Book The Ride
        </div>
        <div className="">
             <Button className='min-w-[100px] md:max-w-[150px] shrink md:text-[12px] bg-blue-950 w-[full] grow cursor-pointer'>
                Continue To Payment
             </Button>
        </div>  
      </div>
  )
}

export default Paymentcard;
