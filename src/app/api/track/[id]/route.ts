import { NextResponse } from "next/server"
import { mockTracks } from "@/mocks/tracks"

export async function GET(
    request: Request,
    { params }: { params: { trackId: string } }
) {
    const track = mockTracks.find(t => t.id === params.trackId)
    
    if (!track) {
        return NextResponse.json({ error: "Track not found" }, { status: 404 })
    }
    
    return NextResponse.json(track)
}