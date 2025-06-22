import { NextResponse } from "next/server"
import { mockUsers } from "@/mocks/users"

export async function GET() {
    return NextResponse.json({ items: mockUsers })
}