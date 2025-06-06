"use client";

import React, { useContext, useEffect, useRef } from "react";
import Map from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { UserLocationCtx } from "../../DashboardContext/UserLocationCtx";
import Markers from "./Markers";
import { DestinationCoordinatesContext } from "../../DashboardContext/DestinationCoordinatesCtx";
import { SourceCoordinatesContext } from "../../DashboardContext/SourceCoordinatesCtx";
import { DirectionDataContext } from "../../DashboardContext/DirectionDataCtx";
import MapRoutes from "./MapRoutes";

const MapSection = () => {

    const { userLocation } = useContext(UserLocationCtx);
    const {sourceCoordinates} = useContext(SourceCoordinatesContext);
    const {destinationCoordinates} = useContext(DestinationCoordinatesContext);
    const mapRef = useRef<any>(null);

    const {directionsContext, setDirectionsContext} = useContext(DirectionDataContext)



    


  // source maker flyto
  useEffect(() => {
    if(sourceCoordinates){
      mapRef.current?.flyTo({
        center:[sourceCoordinates[0] , Number(sourceCoordinates[1]) + 0.0035 ],
        duration:2500,

      })
    }
  },[sourceCoordinates])

  // destination maker flyto
  useEffect(() => {
    if(destinationCoordinates){
    //Adjust center slightly upward on small screen shifting latitude
  //     const adjustedLat = isSmallScreen
  //       ? userLocation.lat + 0.0035 // shift slightly up
  //       : userLocation.lat;
      mapRef.current?.flyTo({
        center:[destinationCoordinates[0] , Number(destinationCoordinates[1]) + 0.0035 ],
        duration:2500,

      })

    }
  },[destinationCoordinates])

  useEffect(() =>{
    if (sourceCoordinates  && destinationCoordinates  ){
      console.log(sourceCoordinates)
      console.log(destinationCoordinates)
    getDirectionRoute()
    }
  },[sourceCoordinates , destinationCoordinates])
  // const hasMoved = useRef(false); // Prevent multiple flyTo
  // useEffect(() => {
  //   if (
  //     userLocation?.lat &&
  //     userLocation?.lng &&
  //     mapRef.current &&
  //     !hasMoved.current
  //   ) {
  //     const map = mapRef.current.getMap();

  //     // Detect if it's a small screen
  //     const isSmallScreen = window.innerWidth < 768;

  //     // Adjust center slightly upward on small screens by shifting latitude
  //     const adjustedLat = isSmallScreen
  //       ? userLocation.lat + 0.0035 // shift slightly up
  //       : userLocation.lat;

  //     map.flyTo({
  //       center: [userLocation.lng, adjustedLat],
  //       zoom: 14,
  //       duration: 2500,
  //       essential: true,
  //     });

  //     hasMoved.current = true;
  //   }
  // }, [userLocation]);

  const getDirectionRoute = async () => {
    try{
      const results = await fetch(`/api/driving-points?sourcelng=${sourceCoordinates[0]}&sourcelat=${sourceCoordinates[1]}&destinationlng=${destinationCoordinates[0]}&destinationlat=${destinationCoordinates[1]}` ,{
      headers:{"Content-Type":"application/json", },});

      const routes = await results.json();
      setDirectionsContext(routes)
    }catch (err){
      console.error("observe here ", err);
    }
  }

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
              zoom: 12,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          >
            <div className="">
              <Markers />
            </div>
            {directionsContext?.routes[0] ? (
              <MapRoutes coordinates={directionsContext.routes[0].geometry.coordinates} />
            ) 
            : (
              null
            )}
          </Map>
        )}
      </div>
    </div>
  );
};

export default MapSection;
