"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="hidden w-[80px] xl:flex flex-col items-center justify-start bg-[var(--middleground)] p-[8px] left-0 mx-[8px] rounded-[8px]">
            <div className="flex flex-col">
                <button><Link href="/" className="text-[var(--text)] text-[14px] font-semibold">Biblfdfdio</Link></button>
            </div>
            <div className="flex flex-col">
                <button><Link href="/" className="text-[var(--text)] text-[14px] font-semibold">+</Link></button>
            </div>
            <nav className="w-full flex flex-col">
                <div className="flex flex-col gap-[8px]">

                </div>
                <div className="flex flex-col gap-[8px]">
                    
                </div>
            </nav>
        </div>
    )
}