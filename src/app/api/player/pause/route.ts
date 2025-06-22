import { NextResponse } from "next/server"
import { updatePlayerState } from "@/lib/playerState"

export async function POST() {
    updatePlayerState({ isPlaying: false })
    return NextResponse.json({ message: 'Playback paused' })
}