import { Track } from "@/types/track"
import { mockArtists } from "./artists"
import { mockAlbums } from "./albums"

export const mockTracks: Track[] = [
  {
    id: "1",
    name: "Alegria, Alegria",
    album: mockAlbums[0],
    artists: [mockArtists[0]],
    duration_ms: 210000,
  },
  {
    id: "2",
    name: "Show das Poderosas",
    album: mockAlbums[0],
    artists: [mockArtists[1]],
    duration_ms: 180000,
  },
  {
    id: "3",
    name: "Show das Poderosas",
    album: mockAlbums[0],
    artists: [mockArtists[1]],
    duration_ms: 180000,
  },
  {
    id: "4",
    name: "Show das Poderosas",
    album: mockAlbums[0],
    artists: [mockArtists[1]],
    duration_ms: 180000,
  },
  {
    id: "5",
    name: "Show das Poderosas",
    album: mockAlbums[0],
    artists: [mockArtists[1]],
    duration_ms: 180000,
  },
  {
    id: "6",
    name: "Show das Poderosas",
    album: mockAlbums[0],
    artists: [mockArtists[1]],
    duration_ms: 180000,
  },
]
