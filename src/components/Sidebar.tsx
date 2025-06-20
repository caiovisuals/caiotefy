"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => setIsOpen(prev => !prev)
    const pathname = usePathname()

    return (
        <div className={`hidden xl:flex flex-col items-center justify-start gap-[16px] bg-[var(--middleground)] p-[8px] left-0 mx-[8px] rounded-[8px] transition-all duration-300 ${isOpen ? 'w-[400px]' : 'w-[80px]'}`}>
            <div className="flex flex-col items-center gap-[8px] mt-[8px]">
                <button onClick={toggleDropdown} className="flex flex-col size-[40px] items-center justify-center rounded-full">
                    <div className="text-[var(--text)] text-[14px] font-semibold cursor-pointer">
                        <svg viewBox="0 0 24 24" fill="var(--subtext)" className="w-[24px] h-[24px]">
                            <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866M16 4.732V20h4V7.041zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1"></path>
                        </svg>
                    </div>
                </button>
                <button className="flex flex-col size-[40px] items-center justify-center rounded-full bg-[var(--middlehover)] hover:bg-[var(--foreground)]">
                    <Link href="/" className="text-[var(--text)] text-[14px] font-semibold">
                        <svg viewBox="0 0 16 16" fill="var(--subtext)" className="w-[24px] h-[24px]">
                            <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75"></path>
                        </svg>
                    </Link>
                </button>   
            </div>
            <nav className="w-full flex flex-col gap-[8px] overflow-y-auto overflow-x-hidden">
                <div className="flex flex-col gap-[8px]">
                    <button className="flex items-center justify-center p-[4px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover"
                            src="/likedoptions/liked-songs.png" 
                            alt="Musicas Curtidas"
                            width={160}
                            height={160}
                        ></Image>
                    </button>
                    <button className="flex items-center justify-center p-[4px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover"
                            src="/likedoptions/saved-episodes.png" 
                            alt="Episódios Salvos"
                            width={160}
                            height={160}
                        ></Image>
                    </button>
                </div>
                <div className="flex flex-col gap-[8px]">
                    <button className="flex items-center justify-center p-[4px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover"
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                    </button>
                    <button className="flex items-center justify-center p-[4px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover"
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                    </button>
                    <button className="flex items-center justify-center p-[4px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover"
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                    </button>
                    <button className="flex items-center justify-center p-[4px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover"
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                    </button>
                    <button className="flex items-center justify-center p-[4px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover"
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                    </button>
                    <button className="flex items-center justify-center p-[4px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover"
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                    </button>
                    <button className="flex items-center justify-center p-[4px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover"
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                    </button>
                    <button className="flex items-center justify-center p-[4px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover"
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                    </button>
                    <button className="flex items-center justify-center p-[4px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover"
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                    </button>
                    <button className="flex items-center justify-center p-[4px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover"
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                    </button>
                </div>
            </nav>
        </div>
    )
}