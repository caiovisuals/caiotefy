import { mockArtists } from "@/mocks/artists"

export async function GET() {
    return Response.json(mockArtists)
}