"use client"

import { useState } from "react"

import Sidebar from "@/components/Sidebar"
import ButtonTypeHome from "@/components/Ui/ButtonTypeHome"

import AllFeed from "@/components/homefeeds/AllFeed"
import MusicsFeed from "@/components/homefeeds/MusicsFeed"
import PodcastsFeed from "@/components/homefeeds/PodcastsFeed"

export default function Home() {
    const [activeFeed, setActiveFeed] = useState("All")
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const renderFeed = () => {
        switch (activeFeed) {
            case "All":
                return <AllFeed/>
            case "Musics":
                return <MusicsFeed/>
            case "Podcasts":
                return <PodcastsFeed/>
            default:
                return null
        }
    }

    return (
        <div className="flex h-full w-full flex-row gap-[8px] px-[8px]">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <div className={`transition-all duration-300 flex flex-col rounded-[8px] h-full bg-[var(--middleground)] ${isSidebarOpen ? "xl:w-[calc(100%-400px)]" : "xl:w-[calc(100%-80px)]"} w-full`}>
                <header className="w-full bg-[var(--middleground)] flex flex-row items-center px-[32px] gap-[8px] py-[16px] rounded-[8px] shadow-[0_1px_15px_rgb(21,21,21,0.25)] z-100">
                    <ButtonTypeHome onClick={() => setActiveFeed("All")} label="Tudo" active={activeFeed === "All"} />
                    <ButtonTypeHome onClick={() => setActiveFeed("Musics")} label="Músicas" active={activeFeed === "Musics"} />
                    <ButtonTypeHome onClick={() => setActiveFeed("Podcasts")} label="Podcasts" active={activeFeed === "Podcasts"} />
                </header>
                {renderFeed()}
            </div>
        </div>
    )
}