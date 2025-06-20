import { mockPlaylists } from "@/mocks/playlists"

export async function GET(_: Request, { params }: { params: { id: string } }) {
    const playlist = mockPlaylists.find((p) => p.id === params.id)
    return playlist ? Response.json(playlist) : new Response('Playlist not found', { status: 404 })
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const updates = await req.json()
    return Response.json({ message: 'Playlist updated (mock)', id: params.id, updates })
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    return Response.json({ message: 'Playlist deleted (mock)', id: params.id })
}