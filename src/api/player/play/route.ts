export async function POST(req: Request) {
    const { trackId } = await req.json();
    return Response.json({ message: 'Playback started (mock)', trackId })
}