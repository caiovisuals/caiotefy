import { mockTracks } from "@/mocks/tracks"

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get('userId')
    return Response.json({ userId, recommendations: mockTracks.slice(0, 5) })
}
