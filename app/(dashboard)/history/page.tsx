import React from 'react'
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
// import { useAuth } from '@clerk/nextjs';

const page = async () => {
  

  return ( 
    <>
    
    {/* <div>Your history, user {userId}</div> */}
    this is a protected page
    <div className="bg-slate-500 flex justify-center">love red</div>
    </>
  ) ;
   
}

export default page

