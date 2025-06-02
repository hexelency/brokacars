import { NextResponse } from "next/server";

const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN!;
const MAPBOX_RETRIEVE_URL = "https://api.mapbox.com/search/searchbox/v1/retrieve/";
const session_token = "0e549ad2-63f6-4328-8196-f8e6d51701bb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }

//   const params = new URLSearchParams({
//     id:id+"?",
//     session_token:session_token,
//     access_token: MAPBOX_ACCESS_TOKEN,
//   });

  const res = await fetch(`https://api.mapbox.com/search/searchbox/v1/retrieve/${id}?session_token=${session_token}&access_token=${MAPBOX_ACCESS_TOKEN}`);

  const data = await res.json();

  return NextResponse.json(data);
}
