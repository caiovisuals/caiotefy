import { mockPlaylists } from "@/mocks/playlists"

export async function GET() {
    return Response.json(mockPlaylists);
}

export async function POST(req: Request) {
    const newPlaylist = await req.json();
    return Response.json({ message: 'Playlist created (mock)', playlist: newPlaylist }, { status: 201 });
}