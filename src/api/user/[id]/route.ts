import { mockUsers } from "@/mocks/users"

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const user = mockUsers.find((u) => u.id === params.id)
    return user ? Response.json(user) : new Response('User not found', { status: 404 })
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const updates = await req.json()
    return Response.json({ message: 'User updated (mock)', id: params.id, updates })
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    return Response.json({ message: 'User deleted (mock)', id: params.id })
}