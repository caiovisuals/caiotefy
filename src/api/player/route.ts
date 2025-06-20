export async function GET() {
    return Response.json({ isPlaying: true, currentTrackId: 'track1' })
}