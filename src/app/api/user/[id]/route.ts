import { NextResponse } from "next/server"
import { mockUsers } from "@/mocks/users"

export async function GET(
    request: Request,
    { params }: { params: { userId: string } }
) {
    const user = mockUsers.find(u => u.id === params.userId)
    
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 })
    }
    
    return NextResponse.json(user)
}