import { NextResponse } from "next/server"
import { mockPlaylists } from "@/mocks/playlists"

export async function GET(
    request: Request,
    { params }: { params: { playlistId: string } }
) {
    const playlist = mockPlaylists.find(p => p.id === params.playlistId)
    
    if (!playlist) {
        return NextResponse.json({ error: "Playlist not found" }, { status: 404 })
    }
    
    return NextResponse.json(playlist)
}