import { NextResponse } from "next/server";

const  MAP_BOX_DRIVING_ENDPOINT = "https://api.mapbox.com/directions/v5/mapbox/driving/";

const session_token = "057893e6-4bbf-41f8-8197-302b4af20809";
const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN!;


// https://api.mapbox.com/directions/v5/mapbox/driving/-74.240701%2C40.743731%3B-72.240701%2C40.743731?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoiaGV4bmV0IiwiYSI6ImNtYXpneGh4bTBsZ3Yya3F6NXNxYXQwaG4ifQ.IfKQrCzKJzsgibGjGacptA 

// GET /api/driving-points?sourcecoordinates=[object%20Object]&?destinationcoordinates=[object%20Object]


export const GET =  async (request:Request)=>{

    const {searchParams} = new URL(request.url);

    const source_lng = searchParams.get("sourcelng") ?? null;
    const source_lat = searchParams.get("sourcelat") ?? null;

    const destination_lng = searchParams.get("destinationlng") ?? null;
    const destination_lat = searchParams.get("destinationlat") ?? null;

    if (!source_lng || !source_lat ||  !destination_lng || !destination_lat){
        return NextResponse.json({"nothing":"yeahs"});
    }


    // https://api.mapbox.com/directions/v5/mapbox/driving/-74.240701%2C40.743731%3B-72.240701%2C40.743731?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoiaGV4bmV0IiwiYSI6ImNtYXpneGh4bTBsZ3Yya3F6NXNxYXQwaG4ifQ.IfKQrCzKJzsgibGjGacptA

    const results = await fetch(`${MAP_BOX_DRIVING_ENDPOINT}${source_lng},${source_lat};${destination_lng},${destination_lat}?alternatives=false&geometries=geojson&language=en&overview=full&steps=true&access_token=${MAPBOX_ACCESS_TOKEN}`,{
        headers:{
            "Content-Type": "application/json",
        },
        
    });

    const searchResult = await results.json();
    return NextResponse.json(searchResult);
} 

