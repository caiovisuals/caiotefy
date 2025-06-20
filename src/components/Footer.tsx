"use client"

import { useState, useEffect  } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isShuffling, setIsShuffling] = useState(false)
    const [isRepeating, setIsRepeating] = useState(false)

    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    const handlePlayPause = async () => {
        if (isPlaying) {
        await fetch("/api/player/pause", { method: "POST" })
        } else {
        await fetch("/api/player", {
            method: "POST",
            body: JSON.stringify({ trackId: "track1" }),
        })
        }
        setIsPlaying(!isPlaying)
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
                if (prev + 1000 >= duration) {
                clearInterval(interval!)
                return duration
                }
                return prev + 1000
            })
            }, 1000)
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isPlaying, duration])

    useEffect(() => {
        const fetchTrack = async () => {
            const res = await fetch("/api/player")
            const data = await res.json()
            setIsPlaying(data.isPlaying)
            setCurrentTime(data.currentTime)
            setDuration(data.duration)
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


    const [volume, setVolume] = useState(1)
    const [isMuted, setIsMuted] = useState(false)
    const [lastVolume, setLastVolume] = useState(1)

    const getVolumeIcon = () => {
        if (volume === 0 || isMuted) {
        return "🔇"
        } else if (volume < 0.3) {
        return "🔈"
        } else {
        return "🔊"
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
            <div className="fixed w-full h-[72px] p-[8px] flex flex-row items-center justify-between gap-[8px] bg-[var(--background)] bottom-0">
                <div className="w-[30%] flex flex-row items-center justify-start gap-[16px]">
                    <div className="w-[56px] h-[56px] rounded-[8px] overflow-hidden">
                        <Image className="w-full h-full object-cover"
                            src="/images/album-cover.jpg"
                            alt="Album Cover"
                            width={160}
                            height={160}
                            ></Image>
                    </div>
                    <div className="flex flex-col">
                        <Link href="/track/1" className="hover:underline">
                            <h1 className="text-[14px]">Track</h1>
                        </Link>
                        <Link href="/artist/1" className="hover:underline">
                            <h2 className="text-[12px]">Artist</h2>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="flex items-center justify-center">
                            <Image src="" alt="Liked" width={24} height={24}></Image>
                        </button>
                    </div>
                </div>
                <div className="w-[40%] flex flex-col items-center justify-center gap-[8px]">
                    <div className="flex flex-row items-center justify-center gap-[16px]">
                        <div className="flex flex-row items-center justify-end gap-[16px]">
                            <button onClick={handleShuffle}>{isShuffling ? "🔀 (on)" : "🔀"}</button>
                            <button onClick={handlePrevious}></button>
                        </div>
                        <button onClick={handlePlayPause}>{isPlaying ? "⏸" : "▶️"}</button>
                        <div className="flex flex-row items-center justify-start gap-[16px]">
                            <button onClick={handleNext}></button>
                            <button onClick={handleRepeat}>{isRepeating ? "🔁 (on)" : "🔁"}</button>
                        </div>
                    </div>
                    <div className="w-full flex flex-row items-center justify-center gap-[16px] px-[18px]">
                        <div className="text-[14px]">{formatTime(currentTime)}</div>
                        <div className="relative flex w-full">
                            <label className="overflow-hidden w-full">
                                <input type="range" min="0" max={duration} step="5000" aria-valuetext={`${formatTime(currentTime)} / ${formatTime(duration)}`} value={currentTime} className="w-full" onChange={(e) => setCurrentTime(Number(e.target.value))}></input>
                            </label>
                        </div>
                        <div className="text-[14px]">{formatTime(duration)}</div>
                    </div>
                </div>
                <div className="w-[30%] flex flex-row items-center justify-end gap-[16px]">
                    <button className="flex items-center justify-center">
                        <Image src="" alt="Previous" width={24} height={24}></Image>
                    </button>
                    <button className="flex items-center justify-center">
                        <Image src="" alt="Previous" width={24} height={24}></Image>
                    </button>
                    <button className="flex items-center justify-center">
                        <Image src="" alt="Previous" width={24} height={24}></Image>
                    </button>
                    <button className="flex items-center justify-center">
                        <Image src="" alt="Previous" width={24} height={24}></Image>
                    </button>
                    <div className="flex flex-row items-center justify-center gap-[8px]">
                        <button onClick={toggleMute} className="flex items-center justify-center" aria-label={isMuted ? "Unmute" : "Mute"}>
                            {getVolumeIcon()}
                        </button>   
                        <label className="overflow-hidden w-full">
                            <input type="range" min="0" max="1" step="0.01" value={isMuted ? 0 : volume} onChange={handleVolumeChange}></input>
                        </label>
                    </div>
                    <button className="flex items-center justify-center">
                        <Image src="" alt="Play" width={24} height={24}></Image>
                    </button>
                    <button className="flex items-center justify-center">
                        <Image src="" alt="Next" width={24} height={24}></Image>
                    </button>
                </div>
            </div>     
        </div>
    )
}