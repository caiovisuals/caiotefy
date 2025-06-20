import { mockUsers } from "@/mocks/users"

export async function GET() {
    return Response.json(mockUsers)
}

export async function POST(req: Request) {
    const newUser = await req.json()
    return Response.json({ message: 'User created (mock)', user: newUser }, { status: 201 })
}