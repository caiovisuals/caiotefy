import { mockTracks } from "@/mocks/tracks"

export async function GET(_: Request, { params }: { params: { id: string } }) {
    return Response.json(mockTracks)
}

export async function POST(req: Request, { params }: { params: { id: string } }) {
    const { trackId } = await req.json()
    return Response.json({ message: 'Track added to playlist (mock)', playlistId: params.id, trackId })
}