import { NextResponse } from "next/server"
import { PLAYER_STATE, updatePlayerState } from "@/lib/playerState"
import { mockTracks } from "@/mocks/tracks"

export async function GET() {
    return NextResponse.json({
        isPlaying: PLAYER_STATE.isPlaying,
        currentTime: PLAYER_STATE.currentTime,
        duration: PLAYER_STATE.duration,
        currentTrack: PLAYER_STATE.currentTrack,
        shuffle: PLAYER_STATE.shuffle,
        repeat: PLAYER_STATE.repeat,
        volume: PLAYER_STATE.volume
    })
}

export async function POST(request: Request) {
    const body = await request.json()
    const { trackId } = body
    
    if (trackId) {
        const track = mockTracks.find(t => t.id === trackId)
        if (track) {
        updatePlayerState({
            currentTrack: track,
            duration: track.duration_ms,
            currentTime: 0,
            isPlaying: true
        })
        return NextResponse.json({ message: `Playing ${track.name}`, track })
        }
    }
  
    updatePlayerState({ isPlaying: true })
    return NextResponse.json({ message: "Playback started", isPlaying: true })
}