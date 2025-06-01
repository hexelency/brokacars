"use client";

import React, { useContext, useEffect, useRef } from "react";
import Map, { Marker, MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useUser } from "@clerk/nextjs";
import { UserLocationCtx } from "../../DashboardContext/UserLocationCtx";

const MapSection = () => {
  const { user } = useUser();
  const { userLocation } = useContext(UserLocationCtx);

  const mapRef = useRef<MapRef>(null);
  const hasMoved = useRef(false); // Prevent multiple flyTo

  useEffect(() => {
    if (
      userLocation?.lat &&
      userLocation?.lng &&
      mapRef.current &&
      !hasMoved.current
    ) {
      const map = mapRef.current.getMap();

      // Detect if it's a small screen
      const isSmallScreen = window.innerWidth < 768;

      // Adjust center slightly upward on small screens by shifting latitude
      const adjustedLat = isSmallScreen
        ? userLocation.lat + 0.0035 // shift slightly up
        : userLocation.lat;

      map.flyTo({
        center: [userLocation.lng, adjustedLat],
        zoom: 14,
        duration: 2500,
        essential: true,
      });

      hasMoved.current = true;
    }
  }, [userLocation]);

  return (
    <div className="mx-auto p-0 md:p-5 md:pt-[8px] flex flex-col md:max-w-[100vw] max-w-[100vw] md:max-h-[90vh] max-h-[29vh] pb-0 px-0 border-[2px] border-slate-700 md:border-0">
      <h2 className="font-semibold text-center text-[12px] md:text-2xl">Map Guide</h2>
      <div className="rounded-lg overflow-hidden h-[350px] md:h-[650px]">
        {userLocation?.lat && userLocation?.lng && (
          <Map
            ref={mapRef}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: userLocation.lng,
              latitude: userLocation.lat,
              zoom: 14,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          >
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
                  {user?.imageUrl ? (
                    <div className="animate-pulse absolute top-[7px] left-[50%] -translate-x-1/2 w-[30px] h-[30px] rounded-full overflow-hidden border-2 border-slate-900/20 shadow-md">
                      <img
                        src={user.imageUrl}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-[30px] h-[30px] bg-gray-300 animate-pulse rounded-full absolute top-[7px] left-[50%] -translate-x-1/2" />
                  )}
                </div>
              </Marker>
            </div>
          </Map>
        )}
      </div>
    </div>
  );
};

export default MapSection;
