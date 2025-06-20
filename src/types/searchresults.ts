import { Album } from "./album"
import { Artist } from "./artist"
import { Playlist } from "./playlist"
import { Track } from "./track"
import { User } from "./user"

export interface SearchResults {
    albums?: {
        items: Album[];
    };
    artists?: {
        items: Artist[];
    };
    playlists?: {
        items: Playlist[];
    };
    tracks?: {
        items: Track[];
    };
    users?: {
        items: User[];
    };
}
