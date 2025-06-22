import { NextResponse } from "next/server"
import { mockTracks } from "@/mocks/tracks"

export async function GET() {
    const recommendedTracks = mockTracks.slice(0, 3);
    
    return NextResponse.json({
        tracks: recommendedTracks,
        message: "Recommended tracks based on your listening history"
    });
}