import { NextResponse } from "next/server"
import { mockArtists } from "@/mocks/artists"

export async function GET(
    request: Request,
    { params }: { params: { artistId: string } }
) {
    const artist = mockArtists.find(a => a.id === params.artistId)
    
    if (!artist) {
        return NextResponse.json({ error: "Artist not found" }, { status: 404 })
    }
    
    return NextResponse.json(artist)
}