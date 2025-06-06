"use client";

import React, { useEffect} from "react";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

interface Suggestion {
    full_address: string;
    mapbox_id:string;
}

// interface LocationCoordinates{
//     coordinates: [number , number]
// }

interface AddressInputProps {
    label: string;
    value: string;
    setValue: (value: string) => void;
    suggestions: Suggestion[];
    setSuggestions: (value: Suggestion[]) => void;
    loading: boolean;
    setLoading: (value: boolean) => void;
    manualSelected: boolean;
    setManualSelected: (value: boolean) => void;
    locationLoading: boolean;
    setLocationLoading: (value:boolean) => void;
    locationCoordinates: [number, number] | null;
    setLocationCoordinates: (value: [number, number] | null) => void;
}

export const AddressInput: React.FC<AddressInputProps> = ({
    label,
    value,
    setValue,
    suggestions,
    setSuggestions,
    loading,
    setLoading,
    manualSelected,
    setManualSelected,
    locationLoading,
    setLocationLoading,
    locationCoordinates,
    setLocationCoordinates,
}) => {
    useEffect(() => {
        if (manualSelected) {
            setManualSelected(false);
            return;
        }

        if (!value.trim()) {
            setSuggestions([]);
            return;
        }

        const delayDebounce = setTimeout(() => {
            fetchSuggestions(value);
        }, 1000);

        return () => clearTimeout(delayDebounce);
    }, [value]);

    const fetchSuggestions = async (query: string) => {
        setLoading(true);
        try {
            const response = await fetch(`/api/search-address?q=${encodeURIComponent(query)}`, {
                headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            setSuggestions(data?.suggestions || []);
        } catch (err) {
            console.error("Error fetching suggestions:", err); 
        } finally {
            setLoading(false);
        }
    };

    const retrieveSuggestion = async (suggestion: string) => {
    try {
      setLocationLoading(true);
      console.log("retrieveing location");
      const res = await fetch(`/api/retrieve-address?id=${suggestion}`);
      const data = await res.json();
      console.log("retrieved location");

    //   console.log(data)


      if (data?.features?.length ) {
        const feature = data.features[0];
        const [lng, lat] = feature.geometry.coordinates;
        setLocationCoordinates([
            feature.geometry.coordinates[0],
            feature.geometry.coordinates[1]
        ])
        


        // console.log("Retrieved coordinates:", locationCoordinates);

        // TODO: Set to state or context if needed
        // setUserLocation({ lat, lng });
      }else{
        console.log("no exact");
      }
    } catch (error) {
      console.error("Error retrieving location:", error);
    } finally {
      setLocationLoading(false);
    }
  };

    const onInputClick =async(item:Suggestion)  => {
        setValue(item.full_address);
        setSuggestions([]);
        setManualSelected(true);
        retrieveSuggestion(item.mapbox_id)
    }

    return (
        <div className="relative mt-0 sm:mt-4 w-full px-2 pb-1 sm:pb-1 sm:pr-2">
            {locationLoading && value ? (
                        <div className="absolute h-4 w-4 rounded-[50%] border-2 border-blue-950 border-r-0 animate-spin right-4  top-[31px]"></div>
                    ) 
                    
                    : (
                        null
                    ) }
            <label className="text-[11px] sm:text-[12px] text-slate-800">{label}</label>
            <div className="flex justify-between ">
                
                {label == "Where From?" ? (
                    <>
                    <div className="relative ">
                     <svg
                                viewBox="0 0 24 24"
                                fill="#120b0b"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[20px] h-[25px]"
                            >
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                            </svg>
                        
                         <div className="w-[10px] h-[10px] bg-gray-200 border-2 border-slate-900 rounded-full absolute top-[5px] left-[50%] -translate-x-1/2" />
                    </div>
                    </>
                )
                :(
                    <>
                    <div className="relative  ">
                     <svg
                                viewBox="0 0 24 24"
                                fill="#120b0b"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[20px] h-[25px]"
                            >
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                            </svg>
                            <div className="w-[10px] h-[10px] bg-gray-400 border-2 border-slate-900 rounded-[2px] absolute top-[5px] left-[50%] -translate-x-1/2" />

                            
                           

                        </div>

                    </>
                )}
                <Input
                type="text"
                className="mt-0 md:mt-1 text-[11px] border-1 border-slate-900/90"
                value={value}
                onChange={(e) => {
                    setManualSelected(false);
                    setValue(e.target.value);
                }}
            />
            </div>
            
            <div className="relative">
                {loading && value.trim() && (
                    <>
                    <div className="flex justify-between bg-gray-200">
                        <Skeleton className="mt-[2px] md:mt-2 h-[14px] sm:h-4 w-[30%] rounded bg-gray-300" />
                        <Skeleton className="mt-[2px] md:mt-2 h-[14px] sm:h-4 w-[20%] rounded bg-gray-300" />
                        <Skeleton className="mt-[2px] md:mt-2 h-[14px] sm:h-4 w-[25%] rounded bg-gray-300" />
                        <Skeleton className="mt-[2px] md:mt-2 h-[14px] sm:h-4 w-[10%] rounded bg-gray-300" />
                    </div>
                    </>
                )}

                {!loading && suggestions.length > 0 && (
                    <>
                    <div className="flex justify-between">

                    <div className=" mt-0 md:mt-2 text-[12px] sm:text-[18px] bg-transparent border rounded shadow-sm">
                        {suggestions
                            .filter(item => item.full_address && item.full_address.trim() !== "")
                            .map((item, index) => (
                                <div
                                    key={index}
                                    className="p-2 hover:bg-blue-200 cursor-pointer"
                                    onClick={() => {
                                        onInputClick(item)
                                    }}
                                >
                                    {item.full_address}
                                </div>
                                
                            ))}
                    </div>

                    

                    </div>
                    </>

                )}
            </div>
        </div>
    );
};