"use client"

import { useState } from "react"

import ButtonTypeHome from "@/components/Ui/ButtonTypeHome"

import AllFeed from "@/components/homefeeds/AllFeed"
import MusicFeed from "@/components/homefeeds/MusicFeed"
import PodcastFeed from "@/components/homefeeds/PodcastFeed"

export default function Home() {
    const [activeFeed, setActiveFeed] = useState("All")

    const renderFeed = () => {
        switch (activeFeed) {
            case "All":
                return <AllFeed/>
            case "Musics":
                return <MusicFeed/>
            case "Podcasts":
                return <PodcastFeed/>
            default:
                return null
        }
    }

    return (
        <div className="flex flex-col h-full bg-[var(--middleground)] rounded-[8px] transition-all duration-300 ease-in-out">
            <header className="w-full bg-[var(--middleground)] flex flex-row items-center px-[40px] gap-[8px] py-[16px] rounded-[8px] shadow-[0_1px_15px_rgb(21,21,21,0.25)] z-100">
                <ButtonTypeHome onClick={() => setActiveFeed("All")} label="Tudo" active={activeFeed === "All"} />
                <ButtonTypeHome onClick={() => setActiveFeed("Musics")} label="Músicas" active={activeFeed === "Musics"} />
                <ButtonTypeHome onClick={() => setActiveFeed("Podcasts")} label="Podcasts" active={activeFeed === "Podcasts"} />
            </header>
            {renderFeed()}
        </div>
    )
}