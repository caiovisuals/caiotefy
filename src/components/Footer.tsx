"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

type FooterProps = {
    isSidePlayerOpen: boolean
    setIsSidePlayerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Footer({ isSidePlayerOpen, setIsSidePlayerOpen }: FooterProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isShuffling, setIsShuffling] = useState(false)
    const [isRepeating, setIsRepeating] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration_ms, setDurationMs] = useState(0)

    const handlePlayPause = async () => {
        if (isPlaying) {
            await fetch("/api/player/pause", { method: "POST" })
        } else {
            await fetch("/api/player/play", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ trackId: "track1" }),
            })
        }

        setIsPlaying(!isPlaying)
    }

    const getPlayIcon = () => {
        if (isPlaying) {
            return (
            <>
                <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7z"/>
            </>
            )
        } else {
            return (
            <>
                <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z"></path>
            </>
            )
        }
    }

    function formatTime(ms: number) {
        const totalSeconds = Math.floor(ms / 1000)
        const minutes = Math.floor(totalSeconds / 60)
        const seconds = totalSeconds % 60
        return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null

        if (isPlaying) {
            interval = setInterval(() => {
            setCurrentTime(prev => {
                if (prev + 1000 >= duration_ms) {
                clearInterval(interval!)
                return duration_ms
                }
                return prev + 1000
            })
            }, 1000)
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isPlaying, duration_ms])

    useEffect(() => {
        const fetchTrack = async () => {
            const res = await fetch("/api/player")
            const data = await res.json()
            setIsPlaying(data.isPlaying)
            setCurrentTime(data.currentTime)
            setDurationMs(data.duration_ms)
        }

        fetchTrack()
    }, [])

    const handleNext = async () => {
        await fetch("/api/player/next", { method: "POST" })
    }

    const handlePrevious = async () => {
        await fetch("/api/player/previous", { method: "POST" })
    }

    const handleShuffle = async () => {
        const res = await fetch("/api/player/shuffle", { method: "POST" })
        const data = await res.json()
        setIsShuffling(data.shuffle)
        console.log(data.message)
    }

    const handleRepeat = async () => {
        const res = await fetch("/api/player/repeat", { method: "POST" })
        const data = await res.json()
        setIsRepeating(data.repeat)
        console.log(data.message)
    }

    const handleLiked = async () => {
        const res = await fetch("/api/player/like", { method: "POST" })
        const data = await res.json()
        setIsLiked(data.repeat)
        console.log(data.message)
    }

    const [volume, setVolume] = useState(1)
    const [isMuted, setIsMuted] = useState(false)
    const [lastVolume, setLastVolume] = useState(1)

    const getVolumeIcon = () => {
        if (volume === 0 || isMuted) {
            return (
            <>
                <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.64 3.64 0 0 0-1.33 4.967 3.64 3.64 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.7 4.7 0 0 1-1.5-.694v1.3L2.817 9.852a2.14 2.14 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694z"/>
                <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06"></path>
            </>
            )
        } else if (volume < 0.6) {
            return (
            <>
                <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.64 3.64 0 0 1-1.33-4.967 3.64 3.64 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.14 2.14 0 0 0 0 3.7l5.8 3.35V2.8zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a3 3 0 0 1 0 5.175z"/>
            </>
            )
        } else {
            return (
            <>
                <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.64 3.64 0 0 1-1.33-4.967 3.64 3.64 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.14 2.14 0 0 0 0 3.7l5.8 3.35V2.8zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88"/>
                <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127z"/>
            </>
            )
        }
    }

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value)
        setVolume(newVolume)
        setLastVolume(newVolume)
        setIsMuted(newVolume === 0)
    }

    const toggleMute = () => {
        if (isMuted) {
        setVolume(lastVolume)
        } else {
        setVolume(0)
        }
        setIsMuted(!isMuted)
    }

    return (
        <div className="flex flex-col">
            <div className="flex xl:hidden flex-row"></div>
            <div className="fixed w-full h-[72px] px-[16px] py-[8px] flex flex-row items-center justify-between gap-[8px] bg-[var(--background)] bottom-0">
                <div className="w-[30%] flex flex-row items-center justify-start gap-[16px]">
                    <div className="size-[56px] rounded-[8px] overflow-hidden">
                        <Image className="w-full h-full object-cover"
                            src="/images/album-cover.jpg"
                            alt="Album Cover"
                            width={160}
                            height={160}
                        ></Image>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <Link href="/track/1" className="hover:text-[var(--texthover)]">
                            <h1 className="text-[14px] leading-[14px]">Track</h1>
                        </Link>
                        <Link href="/artist/1" className="hover:text-[var(--texthover)]">
                            <h2 className="text-[12px] text-[var(--subtext)]">Artist</h2>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <button onClick={handleLiked} className="p-[8px] cursor-pointer">
                            <svg viewBox="0 0 16 16" fill={isLiked ? "var(--primary)" : "var(--subtext)"} width={16} height={16}>
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="w-[40%] flex flex-col items-center justify-center gap-[4px]">
                    <div className="flex flex-row items-center justify-center gap-[16px]">
                        <div className="flex flex-row items-center justify-end gap-[8px]">
                            <button onClick={handleShuffle} className="p-[8px] cursor-pointer"> 
                                <svg viewBox="0 0 16 16" fill={isShuffling ? "var(--primary)" : "var(--subtext)"} width={16} height={16}>
                                    <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
                                    <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
                                </svg>
                            </button>
                            <button onClick={handlePrevious} className="p-[8px] cursor-pointer">
                                <svg viewBox="0 0 16 16" fill="var(--subtext)" width={16} height={16} className="hover:fill-[var(--text)]">
                                    <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7z"></path>
                                </svg>
                            </button>
                        </div>
                        <button onClick={handlePlayPause} className="cursor-pointer bg-[var(--text)] size-[32px] rounded-full flex items-center justify-center">
                            <svg viewBox="0 0 16 16" fill="#" width={16} height={16}>
                                {getPlayIcon()}
                            </svg>
                        </button>
                        <div className="flex flex-row items-center justify-start gap-[8px]">
                            <button onClick={handleNext} className="p-[8px] cursor-pointer">
                                <svg viewBox="0 0 16 16" fill="var(--subtext)" width={16} height={16} className="hover:fill-[var(--text)]">
                                    <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7z"></path>
                                </svg>
                            </button>
                            <button onClick={handleRepeat} className="p-[8px] cursor-pointer"> 
                                <svg viewBox="0 0 16 16" fill={isRepeating ? "var(--primary)" : "var(--subtext)"} width={16} height={16}>
                                    <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex flex-row items-center justify-center gap-[8px] px-[18px]">
                        <div className="text-[12px] flex items-center">{formatTime(currentTime)}</div>
                        <div className="relative w-full group">
                            <input type="range" min="0" max={duration_ms} step="5000" aria-valuetext={`${formatTime(currentTime)} / ${formatTime(duration_ms)}`} value={currentTime} className="absolute top-0 left-0 w-full h-full opacity-0 z-50 cursor-pointer" onChange={(e) => setCurrentTime(Number(e.target.value))}></input>
                            <div className="absolute top-1/2 left-0 w-full h-[4px] bg-[var(--middleground)] rounded-full -translate-y-1/2 z-10 overflow-hidden">
                                <div
                                    className="h-full bg-[var(--text)] group-hover:bg-[var(--primary)] transition-colors duration-300 ease-in-out rounded-full"
                                    style={{ width: `${(currentTime / duration_ms) * 100}%` }}
                                />
                            </div>
                            <div
                                className="hidden absolute size-[12px] group-hover:flex rounded-full bg-[var(--text)] shadow-md top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-10"
                                style={{ left: `${(currentTime / duration_ms) * 100}%` }}
                            />
                        </div>
                        <div className="text-[12px] flex items-center">{formatTime(duration_ms)}</div>
                    </div>
                </div>
                <div className="w-[30%] flex flex-row items-center justify-end gap-[16px]">
                    <button onClick={() => setIsSidePlayerOpen(prev => !prev)} className="flex items-center justify-center cursor-pointer">
                        <svg viewBox="0 0 16 16" fill={isSidePlayerOpen ? "var(--primary)" : "var(--subtext)"} width={16} height={16}>
                            <path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25z"></path>
                            <path d="M11.196 8 6 5v6z"></path>
                        </svg>
                    </button>
                    <button className="flex items-center justify-center cursor-pointer">
                        <svg viewBox="0 0 16 16" fill="var(--subtext)" width={16} height={16}>
                            <path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797M10.5 8.118l-2.619-2.62L4.74 9.075 2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045z"></path>
                        </svg>
                    </button>
                    <button className="flex items-center justify-center cursor-pointer">
                        <svg viewBox="0 0 16 16" fill="var(--subtext)" width={16} height={16}>
                            <path d="M15 15H1v-1.5h14zm0-4.5H1V9h14zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5m2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2z"></path>
                        </svg>
                    </button>
                    <button className="flex items-center justify-center cursor-pointer">
                        <svg viewBox="0 0 16 16" fill="var(--subtext)" width={16} height={16}>
                            <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5zM4 15H2v-1.5h2z"></path>
                            <path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                        </svg>
                    </button>
                    <div className="flex flex-row items-center justify-center gap-[16px]">
                        <button onClick={toggleMute} className="flex items-center justify-center cursor-pointer" aria-label={isMuted ? "Unmute" : "Mute"}>
                            <svg viewBox="0 0 16 16" fill="var(--subtext)" width={16} height={16}>
                                {getVolumeIcon()}
                            </svg>
                        </button>
                        <div className="relative h-[12px] w-[112px] group">
                            <input
                                type="range"
                                id="volume-slider"
                                min="0"
                                max="1"
                                step="0.01"
                                value={isMuted ? 0 : volume}
                                onChange={handleVolumeChange}
                                className="absolute top-0 left-0 w-full h-full opacity-0 z-50 cursor-pointer"
                            />
                            <div className="absolute top-1/2 left-0 w-full h-[4px] bg-[var(--middleground)] rounded-full -translate-y-1/2 z-10 overflow-hidden">
                                <div
                                    className="h-full bg-[var(--text)] group-hover:bg-[var(--primary)] transition-colors duration-300 ease-in-out rounded-full"
                                    style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                                />
                            </div>
                            <div
                                className="hidden absolute size-[12px] group-hover:flex rounded-full bg-[var(--text)] shadow-md top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-10"
                                style={{ left: `${isMuted ? 0 : volume * 100}%` }}
                            />
                        </div>
                    </div>
                    <button className="flex items-center justify-center cursor-pointer">
                        <svg viewBox="0 0 16 16" fill="var(--subtext)" width={16} height={16}>
                            <path d="M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16z"></path>
                            <path d="M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75z"></path>
                        </svg>
                    </button>
                    <button className="flex items-center justify-center cursor-pointer">
                        <svg viewBox="0 0 16 16" fill="var(--subtext)" width={16} height={16}>
                            <path d="M0.25 3C0.25 2.0335 1.0335 1.25 2 1.25H5.375V2.75H2C1.86193 2.75 1.75 2.86193 1.75 3V5.42857H0.25V3ZM14 2.75H10.625V1.25H14C14.9665 1.25 15.75 2.0335 15.75 3V5.42857H14.25V3C14.25 2.86193 14.1381 2.75 14 2.75ZM1.75 10.5714V13C1.75 13.1381 1.86193 13.25 2 13.25H5.375V14.75H2C1.0335 14.75 0.25 13.9665 0.25 13V10.5714H1.75ZM14.25 13V10.5714H15.75V13C15.75 13.9665 14.9665 14.75 14 14.75H10.625V13.25H14C14.1381 13.25 14.25 13.1381 14.25 13Z"></path>
                        </svg>
                    </button>
                </div>
            </div>     
        </div>
    )
}