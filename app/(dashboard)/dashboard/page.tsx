"use client";

// import { UserButton } from "@clerk/nextjs";
// import Image from "next/image";
import Booking from "../_components/booking/Booking";
import MapSection from "../_components/map/MapSection";
// import {  useEffect, useState } from "react";

export default function Dashboard() {
  // const [userLocation , setUserLocation] = useState<any>() ;
    // useEffect(
    //   () => {
    //     getUserLocation();
    //   },
    //   []
    // );
  
    // const getUserLocation = ()=> {
    //   navigator.geolocation.getCurrentPosition(
    //     (pos) =>{
    //       console.log(pos);
    //     }
    //   )
    // };

//   const getPreciseUserLocation = () => {
//   if (!navigator.geolocation) {
//     console.warn("Geolocation is not supported by this browser.");
//     fetchFallbackLocation(); // fallback to IP
//     return;
//   }

//   const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 10000,
//   };

//   const watchId = navigator.geolocation.watchPosition(
//     (position) => {
//       console.log("Real-time position:", position.coords);
//       setUserLocation({
//         lat: position.coords.latitude,
//         lng: position.coords.longitude,
//       });
//     },
//     (error) => {
//       console.error("Geolocation error:", error);
//       fetchFallbackLocation(); // fallback on error
//     },
//     options
//   );

//   // Cleanup function for stopping the watcher when component unmounts
//   return () => navigator.geolocation.clearWatch(watchId);
// };

// const fetchFallbackLocation = async () => {
//   try {
//     const res = await fetch("https://ipapi.co/json/");
//     const data = await res.json();
//     setUserLocation({
//       lat: data.latitude,
//       lng: data.longitude,
//     });
//     console.log("Fallback IP location:", data);
//   } catch (err) {
//     console.error("IP-based location fetch failed:", err);
//   }
// };

  return (
    <>
    <div className="  container grid grid-cols-1 lg:h-[90vh] md:h-[90vh]  h-[92.99vh] overflow-hidden overflow-y-visible  mx-auto
     ">
      <div className=" grid sm:grid-rows-[30vh_57.9vh] md:grid-cols-4 grid-rows-[30vh_57.5vh] lg:grid-cols-3">
        <div className=" bg-slate-500/5 p-[10px] md:p-0 md:col-span-2 md:h-[89vh] h-[60vh] sm:h-[61vh] lg:col-span-1 ">
          <Booking />
        </div>
        {/* map section  */}
        <div className=" md:col-span-2 lg:col-span-2 bg-blue-900/5 order-first md:order-last  md:h-[89vh]">
         <MapSection />
        </div>
      </div>
    </div>
    </>
  );
}
