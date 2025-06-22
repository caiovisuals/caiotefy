import { NextResponse } from "next/server"
import { mockTracks } from "@/mocks/tracks"
import { mockAlbums } from "@/mocks/albums"
import { mockArtists } from "@/mocks/artists"
import { mockPlaylists } from "@/mocks/playlists"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q') || ''
    
    if (!query) {
        return NextResponse.json({
        albums: { items: [] },
        artists: { items: [] },
        tracks: { items: [] },
        playlists: { items: [] }
        })
    }
    
    const qLower = query.toLowerCase()
    
    const matchingTracks = mockTracks.filter(t => 
        t.name.toLowerCase().includes(qLower) || 
        t.artists.some(a => a.name.toLowerCase().includes(qLower))
    )
    
    const matchingArtists = mockArtists.filter(a => 
        a.name.toLowerCase().includes(qLower)
    )
    
    const matchingAlbums = mockAlbums.filter(a => 
        a.name.toLowerCase().includes(qLower) ||
        a.artists.some(artist => artist.name.toLowerCase().includes(qLower))
    )
    
    const matchingPlaylists = mockPlaylists.filter(p => 
        p.name.toLowerCase().includes(qLower)
    )
    
    return NextResponse.json({
        tracks: { items: matchingTracks },
        artists: { items: matchingArtists },
        albums: { items: matchingAlbums },
        playlists: { items: matchingPlaylists }
    })
}