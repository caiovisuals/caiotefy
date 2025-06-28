"use client"

import { useRef } from "react"
import Link from "next/link"
import Thumb from "@/components/Ui/tiles/Thumb"

export default function DailyMix() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const handleScroll = (direction: "left" | "right") => {
        const container = scrollRef.current
        if (!container) return

        const scrollAmount = container.firstElementChild?.clientWidth || 100
        container.scrollBy({
            left: direction === "right" ? scrollAmount : -scrollAmount,
            behavior: "smooth"
        })
    }

    return (
        <div className="w-full flex flex-col gap-[16px]">
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-[22px] font-semibold">Seu DailyMix</h1>
                <Link href="/">
                    <button className="cursor-pointer">Mostrar Tudo</button>
                </Link>
            </div>
            <div className="relative scroll-container">
                <button onClick={() => handleScroll("left")} className="flex opacity-0 absolute aspect-square size-[32px] scroll-button items-center justify-center left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black rounded-full cursor-pointer transition-all duration-300 ease-in-out">
                    <svg viewBox="0 0 16 16" fill="var(--text)" width={16} height={16}>
                        <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0"></path>
                    </svg>
                </button>
                <div ref={scrollRef} className="w-full flex flex-row gap-[8px] pb-[8px] overflow-hidden scroll-smooth scroll-pl-4 pr-[40px] snap-x snap-mandatory">
                    <Thumb type="dailymix"/>
                    <Thumb type="dailymix"/>
                    <Thumb type="dailymix"/>
                    <Thumb type="dailymix"/>
                    <Thumb type="dailymix"/>
                    <Thumb type="dailymix"/>
                    <Thumb type="dailymix"/>
                </div>
                <button onClick={() => handleScroll("right")} className="flex opacity-0 absolute aspect-square size-[32px] scroll-button items-center justify-center right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black rounded-full cursor-pointer transition-all duration-300 ease-in-out">
                    <svg viewBox="0 0 16 16" fill="var(--text)" width={16} height={16}>
                        <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0"></path>
                    </svg>
                </button>
            </div>
        </div>
)}