import { NextResponse } from "next/server"
import { mockTracks } from "@/mocks/tracks"

export async function GET() {
    return NextResponse.json({ items: mockTracks })
}