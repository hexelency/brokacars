"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import Map, { Marker, MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useUser } from "@clerk/nextjs";
import { UserLocationCtx } from "../../DashboardContext/UserLocationCtx";

const MapSection = () => {
  const { user } = useUser();
  const { userLocation } = useContext(UserLocationCtx);

  const mapRef = useRef<MapRef>(null);

  const [viewport, setViewport] = useState({
    longitude: 3.3488896,
    latitude: 6.5568768,
    zoom: 14,
    bearing: 0,
    pitch: 0,
    // width: 0,  // optional for `viewState`, can be excluded
    // height: 0, // optional for `viewState`, can be excluded
  });


  useEffect(() => {
    if (userLocation && userLocation.lat && userLocation.lng) {
      setViewport({
        longitude: userLocation.lng,
        latitude: userLocation.lat,
        zoom: 14,
        bearing: 0,
        pitch: 0,
        // width: 0,  // optional for `viewState`, can be excluded
        // height: 0,
        // padding: { top: 0, bottom: 0, left: 0, right: 0 }

      });

      if (mapRef.current) {
        mapRef.current.flyTo({
          center: [userLocation.lng, userLocation.lat],
          zoom: 14,
          duration: 1500, // smooth fly
        });
      }
    }
  }, [userLocation]);

  return (
    <div className="mx-auto p-[0px] md:p-5 md:pt-[8px] flex flex-col md:max-w-[100vw] max-w-[100vw] md:max-h-[90vh] max-h-[29vh] pb-0 px-0 border-[2px] border-slate-700 md:border-0">
      <h2 className="font-semibold text-center text-[12px] md:text-2xl">Map Guide</h2>
      <div className="rounded-lg overflow-hidden">
        <Map
          ref={mapRef}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          // viewState={viewport}
          onMove={(evt) => setViewport(evt.viewState)}
          style={{ width: "100%", height: 650, borderRadius: 10 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {userLocation?.lat && userLocation?.lng && (
            <div className="animate-bounce">
              <Marker
                longitude={userLocation.lng}
                latitude={userLocation.lat}
                anchor="bottom"
              >
                <div className="relative w-[50px] h-[60px]">
                  <div className="absolute inset-0 flex items-end justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="red"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[50px] h-[60px]"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    </svg>
                  </div>
                  <div className="animate-pulse absolute top-[7px] left-[50%] -translate-x-1/2 w-[30px] h-[30px] rounded-full overflow-hidden border-2 border-slate-900/20 shadow-md">
                    <img
                      src={user?.imageUrl}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Marker>
            </div>
          )}
        </Map>
      </div>
    </div>
  );
};

export default MapSection;
