"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

type SidePlayerProps = {
    isSidePlayerOpen?: boolean
    setIsSidePlayerOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SidePlayer({ isSidePlayerOpen, setIsSidePlayerOpen }: SidePlayerProps) {
    const [isLiked, setIsLiked] = useState(false)

    const handleLiked = async () => {
        const res = await fetch("/api/player/like", { method: "POST" })
        const data = await res.json()
        setIsLiked(data.repeat)
        console.log(data.message)
    }

    return (
        <aside className={`${isSidePlayerOpen ? 'flex' : 'hidden'} w-[416px] flex-col gap-[8px] h-full py-[8px] px-[16px] isolate rounded-[8px] bg-[var(--middleground)]`}>
            <header className="w-full flex flex-row items-center justify-between py-[8px]">
                <Link href="/track">
                    <span className="font-semibold">trackname</span>
                </Link>
                <button className="p-[4px] cursor-pointer rounded-full" onClick={() => setIsSidePlayerOpen?.(false)}>
                    <svg viewBox="0 0 16 16" fill="var(--text)" width={16} height={16}>
                        <path d="M10.03 10.53a.75.75 0 1 1-1.06-1.06L10.44 8 8.97 6.53a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06z"></path>
                        <path d="M15 16a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm-8.5-1.5v-13h8v13zm-1.5 0H1.5v-13H5z"></path>
                    </svg>
                </button>
            </header>
            <div className="flex flex-col">
                <div className="aspect-square rounded-[8px] overflow-hidden">
                    <Image src="/images/album-cover.jpg" className="aspect-square object-cover" alt="Album Cover" width="400" height="400"></Image>
                </div>
                <div className="flex flex-row py-[16px] gap-[8px] items-center justify-between">
                    <div className="flex flex-col">
                        <Link href="" className="hover:text-[v ar(--texthover)]">
                            <h1 className="text-[24px] leading-[24px] font-semibold">Track</h1>
                        </Link>
                        <Link href="" className="hover:text-[var(--texthover)]">
                            <h2 className="text-[16px] text-[var(--subtext)]">Artist</h2>
                        </Link>
                    </div>
                    <button onClick={handleLiked} className="p-[8px] cursor-pointer">
                        <svg viewBox="0 0 16 16" fill={isLiked ? "var(--primary)" : "var(--subtext)"} width={20} height={20}>
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </aside>
    )
}
