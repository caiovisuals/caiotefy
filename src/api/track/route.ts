import { mockTracks } from "@/mocks/tracks"

export async function GET() {
    return Response.json(mockTracks);
}

export async function POST(req: Request) {
    const newTrack = await req.json();
    return Response.json({ message: 'Track created (mock)', track: newTrack }, { status: 201 });
}