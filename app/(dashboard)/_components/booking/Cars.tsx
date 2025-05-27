"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const CarsList = [
  {
  id:1,
  name:"Economy",
  image:"/carpics/carpics2.png",
  charges:1,
  },
  {
  id:2,
  name:"Luxury",
  image:"/carpics/carpics2.png",
  charges:2,
  },
  {
  id:3,
  name:"Economy",
  image:"/carpics/carpics2.png",
  charges:3,
  },
  {
  id:4,
  name:"Economy",
  image:"/carpics/carpics11.png",
  charges:4,
  },
  {
  id:5,
  name:"Economy",
  image:"/carpics/carpics11.png",
  charges:5,
  }

]

const Cars = () => {
  const [selectedCar , setSelectedCar] = useState<number>();
  return (
    <div className='mt-1 md:mt-3'>
      <h2 className='font-semibold text-[16px]'>
        Select  Car
      </h2>
      
      <div className="grid grid-cols-3 gap-1 md:gap-2 md:grid-cols-3 w-full">
      {
        CarsList.map((car, index) =>(
          <div  key={index} className={`flex flex-col border-[1px] text-center items-center justify-center rounded-md cursor-pointer hover:border-blue-950 ${selectedCar == index ? " border-blue-950 border-[2px]" : null} `}
          onClick={() => {
            setSelectedCar(index);
          }}
          >
            

            <Image
            src={car!.image!}
            height={100}
            width={100}
            alt={"car"+car.name}
            className=' md:w-[80%] md:h-full lg:h-full self-center w-[50%] h-[80%]'
            />
            <div className='flex justify-around w-full text-slate-950'>
              <h2 className=" text-[12px] text-gray-400">{car.name}</h2>
            <span >&#x20A6;{car.charges * 10}</span>
            </div>
            
          </div>
        ))
      }
      </div>
      
    </div>
  )
}

export default Cars
