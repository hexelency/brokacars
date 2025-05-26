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
    <div className="container p-[5px] md:p-4 overflow-hidden overflow-y-clip mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="bg-slate-950/5 p-2">
          <Booking />
        </div>
        {/* map section  */}
        <div className="col-span-2 bg-blue-950/10 order-first md:order-last h-[30vh] md:h-full ">
         <MapSection />
        </div>
      </div>
    </div>
    </>
  );
}
