import { mockArtists } from "@/mocks/artists"

export async function GET(_: Request, { params }: { params: { id: string } }) {
    const artist = mockArtists.find((a) => a.id === params.id)
    return artist ? Response.json(artist) : new Response('Artist not found', { status: 404 })
}