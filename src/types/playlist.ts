import { Track } from "./track"

export interface Playlist {
    id: string;
    name: string;
    description?: string;
    image: string;
    followers?: {
        total?: number;
    };
    owner?: {
        id: string;
        display_name?: string;
    };
    items?: { added_at: string; track: Track }[];
    tracks?: {
        items?: { added_at: string; track: Track }[];
        total: number;
    };
    type?: string;
    total?: number;
}
