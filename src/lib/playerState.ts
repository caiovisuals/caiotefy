import { PlayerState } from "@/types/playerstate"
import { mockTracks } from "@/mocks/tracks"

export let PLAYER_STATE: PlayerState = {
    isPlaying: false,
    currentTime: 0,
    duration_ms: mockTracks[0].duration_ms,
    currentTrack: mockTracks[0],
    shuffle: false,
    repeat: false,
    liked: false,
    volume: 1.0,
    queue: mockTracks,
    currentIndex: 0
}

export const updatePlayerState = (updates: Partial<PlayerState>) => {
    PLAYER_STATE = { ...PLAYER_STATE, ...updates }
}