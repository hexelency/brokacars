import { NextResponse } from "next/server";

const MAPBOX_BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest";
const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN!;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchText = searchParams.get("q") ?? "";

  // Early return if the query is empty or only whitespace
  if (!searchText.trim()) {
    return NextResponse.json({ suggestions: [] });
  }

  const session_token = "0e549ad2-63f6-4328-8196-f8e6d51701bb";

  const params = new URLSearchParams({
    q: searchText,
    language: "en",
    limit: "8",
    // session_token,
    access_token: MAPBOX_ACCESS_TOKEN,
  });

  const result = await fetch(`${MAPBOX_BASE_URL}?${params.toString()}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const searchResult = await result.json();
  return NextResponse.json(searchResult);
}
