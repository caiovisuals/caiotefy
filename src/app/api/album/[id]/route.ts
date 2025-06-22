import { NextResponse } from "next/server"
import { mockAlbums } from "@/mocks/albums"

export async function GET(
    request: Request,
    { params }: { params: { albumId: string } }
) {
    const album = mockAlbums.find(a => a.id === params.albumId)
    
    if (!album) {
        return NextResponse.json({ error: "Album not found" }, { status: 404 })
    }
    
    return NextResponse.json(album)
}