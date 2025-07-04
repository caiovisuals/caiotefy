"use client"

import Link from "next/link"
import Image from "next/image"

type SidebarProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
    const toggleDropdown = () => setIsOpen(prev => !prev)

    return (
        <div className={`hidden xl:flex flex-col items-start justify-start gap-[16px] bg-[var(--middleground)] p-[8px] left-0 rounded-[8px] transition-all duration-300
                ${isOpen ? 'w-[400px]' : 'w-[80px]'}`}>
            <div className="w-full flex flex-col items-start gap-[8px] mt-[8px] shadow-[0_1px_15px_rgb(21,21,21,0.25)] z-100 ml-[9px]">
                <button onClick={toggleDropdown} className={`flex flex-col size-[40px] items-center justify-center rounded-full transition-all duration-300 ease-in-out cursor-pointer ${isOpen ? 'bg-[var(--middlehover)]' : 'bg-transparent'}`}>
                    <div className="text-[var(--text)] text-[14px] font-semibold">
                        <svg viewBox="0 0 24 24" fill="var(--subtext)" className="w-[24px] h-[24px]">
                            <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866M16 4.732V20h4V7.041zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1"></path>
                        </svg>
                    </div>
                </button>
                <button className="flex flex-col size-[40px] items-center justify-center rounded-full bg-[var(--middlehover)] hover:bg-[var(--foreground)] transition-all duration-300 ease-in-out cursor-pointer">
                    <Link href="/" className="text-[var(--text)] text-[14px] font-semibold">
                        <svg viewBox="0 0 16 16" fill="var(--subtext)" className="w-[24px] h-[24px]">
                            <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75"></path>
                        </svg>
                    </Link>
                </button>   
            </div>
            <nav className="w-full flex flex-col items-center gap-[8px] overflow-y-auto overflow-x-hidden hide-scrollbar">
                <div className="w-full flex flex-col gap-[8px]">
                    <Link href="/liked-musics">
                        <button className="w-full flex flex-row items-center justify-start p-[4px] gap-[16px] cursor-pointer">
                            <Image className="rounded-[4px] size-full aspect-square object-cover max-w-[48px]"
                                src="/collections/liked-songs.png" 
                                alt="Musicas Curtidas"
                                width={160}
                                height={160}
                                ></Image>
                            <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-start justify-center`}>
                                <span className="text-[var(--text)] text-[16px] whitespace-nowrap">Músicas Curtidas</span>
                                <span className="text-[var(--subtext)] text-[14px] whitespace-nowrap">Playlist</span>
                            </div>
                        </button>
                    </Link>
                    <Link href="/saved-episodes">
                        <button className="w-full flex flex-row items-center justify-start p-[4px] gap-[16px] cursor-pointer">
                            <Image className="rounded-[4px] size-full aspect-square object-cover max-w-[48px]"
                                src="/collections/saved-episodes.png" 
                                alt="Episódios Salvos"
                                width={160}
                                height={160}
                            ></Image>
                            <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-start justify-center`}>
                                <span className="text-[var(--text)] text-[16px] whitespace-nowrap">Episódios Salvos</span>
                                <span className="text-[var(--subtext)] text-[14px] whitespace-nowrap">Playlist</span>
                            </div>
                        </button>
                    </Link>
                </div>
                <div className="w-full flex flex-col items-start gap-[8px]">
                    <button className="flex flex-row items-center justify-start p-[4px] gap-[16px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover max-w-[48px]" 
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-start justify-center`}>
                            <span className="text-[var(--text)] text-[16px] whitespace-nowrap">Album 1</span>
                            <span className="text-[var(--subtext)] text-[14px] whitespace-nowrap">Playlist</span>
                        </div>
                    </button>
                    <button className="flex flex-row items-center justify-start p-[4px] gap-[16px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover max-w-[48px]" 
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-start justify-center`}>
                            <span className="text-[var(--text)] text-[16px] whitespace-nowrap">Album 1</span>
                            <span className="text-[var(--subtext)] text-[14px] whitespace-nowrap">Playlist</span>
                        </div>
                    </button>
                    <button className="flex flex-row items-center justify-start p-[4px] gap-[16px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover max-w-[48px]" 
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-start justify-center`}>
                            <span className="text-[var(--text)] text-[16px] whitespace-nowrap">Album 1</span>
                            <span className="text-[var(--subtext)] text-[14px] whitespace-nowrap">Playlist</span>
                        </div>
                    </button>
                    <button className="flex flex-row items-center justify-start p-[4px] gap-[16px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover max-w-[48px]" 
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-start justify-center`}>
                            <span className="text-[var(--text)] text-[16px] whitespace-nowrap">Album 1</span>
                            <span className="text-[var(--subtext)] text-[14px] whitespace-nowrap">Playlist</span>
                        </div>
                    </button>
                    <button className="flex flex-row items-center justify-start p-[4px] gap-[16px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover max-w-[48px]" 
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-start justify-center`}>
                            <span className="text-[var(--text)] text-[16px] whitespace-nowrap">Album 1</span>
                            <span className="text-[var(--subtext)] text-[14px] whitespace-nowrap">Playlist</span>
                        </div>
                    </button>
                    <button className="flex flex-row items-center justify-start p-[4px] gap-[16px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover max-w-[48px]" 
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-start justify-center`}>
                            <span className="text-[var(--text)] text-[16px] whitespace-nowrap">Album 1</span>
                            <span className="text-[var(--subtext)] text-[14px] whitespace-nowrap">Playlist</span>
                        </div>
                    </button>
                    <button className="flex flex-row items-center justify-start p-[4px] gap-[16px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover max-w-[48px]" 
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-start justify-center`}>
                            <span className="text-[var(--text)] text-[16px] whitespace-nowrap">Album 1</span>
                            <span className="text-[var(--subtext)] text-[14px] whitespace-nowrap">Playlist</span>
                        </div>
                    </button>
                    <button className="flex flex-row items-center justify-start p-[4px] gap-[16px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover max-w-[48px]" 
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-start justify-center`}>
                            <span className="text-[var(--text)] text-[16px] whitespace-nowrap">Album 1</span>
                            <span className="text-[var(--subtext)] text-[14px] whitespace-nowrap">Playlist</span>
                        </div>
                    </button>
                    <button className="flex flex-row items-center justify-start p-[4px] gap-[16px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover max-w-[48px]" 
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-start justify-center`}>
                            <span className="text-[var(--text)] text-[16px] whitespace-nowrap">Album 1</span>
                            <span className="text-[var(--subtext)] text-[14px] whitespace-nowrap">Playlist</span>
                        </div>
                    </button>
                    <button className="flex flex-row items-center justify-start p-[4px] gap-[16px] cursor-pointer">
                        <Image className="rounded-[4px] size-full aspect-square object-cover max-w-[48px]" 
                            src="/images/album-cover.jpg" 
                            alt=""
                            width={160}
                            height={160}
                        ></Image>
                        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-start justify-center`}>
                            <span className="text-[var(--text)] text-[16px] whitespace-nowrap">Album 1</span>
                            <span className="text-[var(--subtext)] text-[14px] whitespace-nowrap">Playlist</span>
                        </div>
                    </button>
                </div>
            </nav>
        </div>
    )
}