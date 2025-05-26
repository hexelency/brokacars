import { NextResponse } from "next/server";

const GOOGLE_PLACES_URL = "https://maps.googleapis.com/maps/api/place/autocomplete/json";
const GOOGLE_DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json";
const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY!;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const input = searchParams.get("q") ?? "";

  if (!input.trim()) {
    return NextResponse.json({ suggestions: [] });
  }

  const params = new URLSearchParams({
    input,
    key: GOOGLE_API_KEY,
    types: "geocode",
    language: "en",
    components: "country:ng", // Nigeria only
    region: "ng",
  });

  const result = await fetch(`${GOOGLE_PLACES_URL}?${params.toString()}`);
  const data = await result.json();

  // Filter results to Delta State only
  const deltaSuggestions = data.predictions.filter((item: any) =>
    item.description.toLowerCase().includes("delta")
  );

  const formatted = deltaSuggestions.map((item: any) => ({
    full_address: item.description,
    place_id: item.place_id,
  }));

  return NextResponse.json({ suggestions: formatted });
};



// export async function POST(request: Request) {
//   const { place_id } = await request.json();

//   const params = new URLSearchParams({
//     place_id,
//     key: GOOGLE_API_KEY,
//     fields: "geometry",
//   });

//   const result = await fetch(`${GOOGLE_DETAILS_URL}?${params.toString()}`);
//   const data = await result.json();

//   const location = data.result?.geometry?.location;

//   return NextResponse.json(location ?? {});
// };