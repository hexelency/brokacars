import { NextResponse } from "next/server";

// const GOOGLE_PLACES_URL = "https://maps.googleapis.com/maps/api/place/autocomplete/json";
const GOOGLE_DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json";
const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY!;


export async function POST(request: Request) {
  const { place_id } = await request.json();

  const params = new URLSearchParams({
    place_id,
    key: GOOGLE_API_KEY,
    fields: "geometry",
  });

  const result = await fetch(`${GOOGLE_DETAILS_URL}?${params.toString()}`);
  const data = await result.json();

  const location = data.result?.geometry?.location;

  return NextResponse.json(location ?? {});
};