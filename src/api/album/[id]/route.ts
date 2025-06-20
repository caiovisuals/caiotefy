import { mockAlbums } from "@/mocks/albums"

export async function GET(_: Request, { params }: { params: { id: string } }) {
    const album = mockAlbums.find((a) => a.id === params.id)
    return album ? Response.json(album) : new Response('Album not found', { status: 404 })
}