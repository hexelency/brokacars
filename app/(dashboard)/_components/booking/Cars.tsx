"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const CarsList = [
  {
  id:1,
  name:"Budget Car",
  image:"/carpics/carpics2.png",
  charges:1,
  },
  {
  id:2,
  name:"Standard Car",
  image:"/carpics/carpics2.png",
  charges:2,
  },
  {
  id:3,
  name:"Mini Van",
  image:"/carpics/carpics2.png",
  charges:3,
  },
  {
  id:4,
  name:"Luxury",
  image:"/carpics/carpics11.png",
  charges:4,
  },
  {
  id:5,
  name:"SUV",
  image:"/carpics/carpics11.png",
  charges:5,
  }

]

const Cars = () => {
  const [selectedCar , setSelectedCar] = useState<number>();
  return (
    <div className='mt-1 md:mt-3 mb-8 sm:mb-0 md:min-w-[380px] lg:min-w-[330px] xl:min-w-[415px] 2xl:min-w-[500px] 2xl:mb-0 '>
      <h2 className='font-semibold text-center text-[12px] sm:text-[12px] sm:mt-0'>
        Select  Car
      </h2>
      
      <div className="grid grid-cols-3 gap-1 md:gap-2 md:grid-cols-3 w-full border-0 mb-8 sm:mb-0">
      {
        CarsList.map((car, index) =>(
          <div  key={index} className={`flex flex-col border-[1px] text-center items-center justify-center  gap-[0.8rem] sm:gap-[1.4rem] mb-[14px] sm:mb-[0px] rounded-md cursor-pointer hover:border-blue-950 ${selectedCar == index ? " border-blue-950 border-[2px]" : null} `}
          onClick={() => {
            setSelectedCar(index);
          }}
          >
            

            <Image
            src={car!.image!}
            height={100}
            width={100}
            alt={"car"+car.name}
            className=' md:w-[100df]  md:h-full self-center w-[80] h-[40] sm:w-[45] sm:h-[30]'
            />
            <div className='flex justify-around w-full text-slate-950'>
              <h2 className=" text-nowrap text-[11px] text-slate-600">{car.name}</h2>
            <span className='text-[12px] rounded-3xl bg-slate-200' >&#x20A6;{car.charges * 10}</span>
            </div>
            
          </div>
        ))
      }
      </div>
      
    </div>
  )
}

export default Cars
