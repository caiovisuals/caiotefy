"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="fixed w-[72px] p-[8px] flex flex-col bg-[var(--background)] left-0 mt-[72px]">
            <div className="flex flex-col"></div>
            <div className="flex flex-col"></div>
            <nav className="w-full flex flex-col">oi</nav>
        </div>
    )
}