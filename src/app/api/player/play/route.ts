import { NextResponse } from "next/server"
import { updatePlayerState } from "@/lib/playerState"

export async function POST(req: Request) {
    const { trackId } = await req.json()

    updatePlayerState({
        isPlaying: true,
        ...(trackId ? { currentTime: 0, currentIndex: 0 } : {}),
    })

    return NextResponse.json({ message: 'Playback started', trackId })
}