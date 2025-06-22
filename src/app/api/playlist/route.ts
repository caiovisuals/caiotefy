import { NextResponse } from "next/server"
import { mockPlaylists } from "@/mocks/playlists"

export async function GET() {
    return NextResponse.json({ items: mockPlaylists })
}