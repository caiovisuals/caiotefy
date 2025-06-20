import { Playlist } from "@/types/playlist"
import { mockTracks } from "./tracks"

export const mockPlaylists: Playlist[] = [
  {
    id: "1",
    name: "Clássicos Brasileiros",
    description: "As melhores músicas da MPB",
    image: "/images/mpb.jpg",
    followers: { total: 40000 },
    owner: {
      id: "user1",
      display_name: "João Vitor",
    },
    tracks: {
      items: mockTracks.map((track) => ({
        added_at: new Date().toISOString(),
        track,
      })),
      total: mockTracks.length,
    },
    type: "playlist",
  },
]
