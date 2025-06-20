export async function PATCH(req: Request) {
    const settings = await req.json()
    return Response.json({ message: "Settings updated (mock)", settings })
}