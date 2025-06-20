"use client"

import { useState } from "react"

import ButtonTypeHome from "@/components/Ui/ButtonTypeHome"

import AllFeed from "@/components/homefeeds/AllFeed"
import MusicsFeed from "@/components/homefeeds/MusicsFeed"
import PodcastsFeed from "@/components/homefeeds/PodcastsFeed"

export default function Home() {
    const [activeFeed, setActiveFeed] = useState("All")

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
        <div className="w-[calc(100%-16px)] xl:w-[calc(100%-104px)] h-full bg-[var(--middleground)] flex flex-col rounded-[8px] ml-[8px] mr-[8px] xl:ml-[0px]">
            <header className="w-full bg-[var(--middleground)] flex flex-row items-center px-[40px] gap-[4px] py-[16px] rounded-[8px] shadow-[0_1px_15px_rgb(21,21,21,0.25)] z-100">
                <ButtonTypeHome onClick={() => setActiveFeed("All")} label="Tudo" active={activeFeed === "All"}/>
                <ButtonTypeHome onClick={() => setActiveFeed("Musics")} label="Músicas" active={activeFeed === "Musics"}/>
                <ButtonTypeHome onClick={() => setActiveFeed("Podcasts")} label="Podcasts" active={activeFeed === "Podcasts"}/>
            </header>
            {renderFeed()}
        </div>
    )
}
