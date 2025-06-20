import { mockTracks } from "@/mocks/tracks"

export async function GET(_: Request, { params }: { params: { id: string } }) {
    const track = mockTracks.find((t) => t.id === params.id)
    return track ? Response.json(track) : new Response('Track not found', { status: 404 })
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const updates = await req.json()
    return Response.json({ message: 'Track updated (mock)', id: params.id, updates })
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    return Response.json({ message: 'Track deleted (mock)', id: params.id })
}