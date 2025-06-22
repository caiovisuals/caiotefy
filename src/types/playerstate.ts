import { Track } from "./track"

export interface PlayerState {
    isPlaying: boolean;
    currentTime: number;
    duration_ms: number;
    currentTrack: Track;
    shuffle: boolean;
    repeat: boolean;
    liked: boolean;
    volume: number;
    queue: Track[];
    currentIndex: number;
}