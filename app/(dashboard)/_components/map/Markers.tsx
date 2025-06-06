"use client";

import { useUser } from '@clerk/nextjs';
import React, { useContext } from 'react'
import { Marker } from 'react-map-gl/mapbox'
import { UserLocationCtx } from '../../DashboardContext/UserLocationCtx';
import { SourceCoordinatesContext } from '../../DashboardContext/SourceCoordinatesCtx';
import { DestinationCoordinatesContext } from '../../DashboardContext/DestinationCoordinatesCtx';

const Markers = () => {
    const { user } = useUser();
    const { userLocation } = useContext(UserLocationCtx);
    const {sourceCoordinates} = useContext(SourceCoordinatesContext);
    const {destinationCoordinates} = useContext(DestinationCoordinatesContext);
    return (
        <div>
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
                            <div className="animate-ping absolute top-[7px] left-[50%] -translate-x-1/2 w-[30px] h-[30px] rounded-full overflow-hidden border-2 border-slate-900/20 shadow-md">
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

            {/* source marker  */}

            {sourceCoordinates ? (
                <div className="">
                <Marker
                    longitude={sourceCoordinates[0]}
                    latitude={sourceCoordinates[1]}
                    anchor="bottom"
                >
                    <div className="relative w-[50px] h-[60px]">
                        <div className="absolute inset-0 flex items-end justify-center">
                            <svg
                                viewBox="0 0 24 24"
                                fill="#120b0b"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[50px] h-[60px]"
                            >
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                            </svg>
                        </div>
                         <div className="w-[30px] h-[30px] bg-gray-200 animate-pulse border-8 border-slate-900 rounded-full absolute top-[7px] left-[50%] -translate-x-1/2" />
                    </div>
                </Marker>
            </div>
            ) 
            : (
                null
            )}

            

            {/* destinationCoordinates  */}

            {destinationCoordinates ? (
                <div className="">
                <Marker
                    longitude={destinationCoordinates?.[0]}
                    latitude={destinationCoordinates?.[1]}
                    anchor="bottom"
                >
                    <div className="relative w-[50px] h-[60px]">
                        <div className="absolute inset-0 flex items-end justify-center">
                            <svg
                                viewBox="0 0 24 24"
                                fill="#120b0b"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[50px] h-[60px]"
                            >
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                            </svg>
                        </div>
                         <div className="w-[16px] h-[16px] bg-slate-900 animate-pulse rounded-2xs border-[3px] border-slate-350  absolute top-[15px] left-[50%] -translate-x-1/2" />
                    </div>
                </Marker>
            </div>
            ) 
            : (
                null
            )}

            

        </div>
    )
}

export default Markers
