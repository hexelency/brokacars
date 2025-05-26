import { Button } from '@/components/ui/button'
import React from 'react'

const Paymentcard = () => {
  return (
    <div>
      <div className="flex justify-between mt-[10px] mb-2 md:mb-0 md:mt-4 border-1 p-2 md:p-4">
        <div className="w-[80%] font-medium md:font-black md:w-full">
        Book The Ride
        </div>
        <div className="text-[] w-full">
             <Button className='bg-blue-950 w-full cursor-pointer'>
                Continue To Payment
             </Button>
        </div>  
      </div>
    </div>
  )
}

export default Paymentcard;
