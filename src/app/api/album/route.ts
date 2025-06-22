import { NextResponse } from "next/server"
import { mockAlbums } from "@/mocks/albums"

export async function GET() {
    return NextResponse.json({ items: mockAlbums })
}