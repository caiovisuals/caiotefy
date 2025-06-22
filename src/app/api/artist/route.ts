import { NextResponse } from "next/server"
import { mockArtists } from "@/mocks/artists"

export async function GET() {
    return NextResponse.json({ items: mockArtists })
}