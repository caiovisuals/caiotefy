import { Artist } from "./artist"
import { Track } from "./track"

export interface Album {
    id: string;
    name: string;
    artists: Artist[];
    image: string;
    album_type?: string;
    release_date?: string;
    tracks?: {
        total: number;
        items: Track[];
    };
}
