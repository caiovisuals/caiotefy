import Link from "next/link"
import PlayButton from "../PlayButton"

type ThumbProps = {
    type: "radio" | "dailymix" | "dailycast" | "album" | "playlist" | "artist" | "show"
}

export default function Thumb({ type }: ThumbProps){
    return (
            <div className="flex-shrink-0 w-auto max-w-full snap-start flex flex-col gap-[8px] p-[4px] hover:bg-[var(--middlegroundhover)] transition-all duration-300 ease-in-out cursor-pointer">
                <Link href="/" className={`group aspect-square relative ${type === "artist" ? "rounded-full" : "rounded-[8px]"} rounded-[8px] flex p-[8px] items-end justify-end`}
                    style={{
                        backgroundImage: "url('/images/album-cover.jpg')",
                        backgroundSize: "cover",
                        width: type === "artist" ? "140px" : "100%",
                        maxWidth: "240px"
                    }}>
                    {(type === "dailymix") && (
                        <div className="absolute inset-0 z-20 p-[8px] flex items-end justify-between">
                            <div className="px-[2px] py-[1,5px] bg-amber-50">
                                <span className="text-[black] font-bold">Daily Mix</span>
                            </div>
                            <div className="px-[2px] py-[1,5px] bg-amber-50">
                                <span className="text-[black] font-bold">00</span>
                            </div>
                        </div>
                    )}
                    {(type === "dailycast") && (
                        <div className="absolute inset-0 z-20 p-[8px] flex items-end justify-between">
                            <div className="px-[2px] py-[1,5px] bg-amber-50">
                                <span className="text-[black] font-bold">Daily Cast</span>
                            </div>
                            <div className="px-[2px] py-[1,5px] bg-amber-50">
                                <span className="text-[black] font-bold">00</span>
                            </div>
                        </div>
                    )}
                    <PlayButton/>
                </Link>
                {(type === "dailymix" || type === "dailycast" || type === "radio") && (
                <span className="text-[var(--subtext)]">daily text e radio text</span>
                )}
                {(type === "artist") && (
                    <span className="text-[var(--text)]">artistas</span>
                )}
                {(type === "album" || type === "show" || type === "playlist") && (
                    <span className="text-[var(--text)]">artist, playlist e show</span>
                )}
            </div>
    )
}