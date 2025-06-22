import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({
        genres: ["pop", "hip-hop", "alternative", "rock", "electronic", "indie", "country", "r&b"]
    })
}