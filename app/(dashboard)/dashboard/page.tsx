"use client";

// import { Metadata } from "next";
// import { UserButton } from "@clerk/nextjs";
// import Image from "next/image";
import Booking from "../_components/booking/Booking";
import MapSection from "../_components/map/MapSection";
// import {  useEffect, useState } from "react";


// export const generateMetadata = (): Metadata => {
//   return {
//     title: "Brokacars Dashboard",
//     description: "Best Prices and Comfortable rides with Brokacars. dashboard",
//     openGraph: {
//       title: "Brokacars Dashboard",
//       description: "Best Prices and Comfortable rides with Brokacars.",
//       url: "https://brokacars.vercel.app/dashboard",
//       siteName: "Brokacars",
//       images: [
//         {
//           url: "https://brokacars.vercel.app/og-image1.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Brokacars dashboard preview",
//         },
//       ],
//       locale: "en_US",
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: "Brokacars Dashboard",
//       description: "Comfortable rides with Brokacars.",
//       images: ["https://brokacars.vercel.app/og-image1.jpg"],
//     },
//   }
// }


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
      <div className="  container grid grid-cols-1 lg:h-[90vh] md:h-[90vh]  h-[92.99vh] overflow-hidden mx-auto
     bg-slate-900/5  ">
        <div className=" grid  md:grid-cols-4 grid-rows-[28.5vh_auto] sm:grid-rows-[29vh_auto] lg:grid-cols-3">
          <div className=" p-[10px] md:p-0 md:col-span-2 md:h-[89vh] h-[60vh] sm:h-[61vh] lg:col-span-1 overflow-hidden scroll-on-landscape">
            <Booking />
          </div>
          {/* map section  */}
          <div className=" md:col-span-2 lg:col-span-2 bg-slate-900/5   order-first md:order-last lg:min-h-[90vh] md:h-[89vh]">
            <MapSection />
          </div>
        </div>
      </div>
    </>
  );
}
