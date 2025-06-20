import { mockAlbums } from "@/mocks/albums"

export async function GET() {
    return Response.json(mockAlbums)
}