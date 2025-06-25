import Link from "next/link"
import PlayButton from "../PlayButton"

type ThumbProps = {
    type: "radio" | "daily" | "album" | "playlist" | "artist" | "show"
}

export default function Thumb({ type }: ThumbProps){
    return (
            <div className="flex flex-col gap-[8px] p-[4px] hover:bg-[var(--middlegroundhover)] transition-all duration-300 ease-in-out cursor-pointer">
                <Link href="/" className={`group w-[160px] min-w-[140px] max-w-[200px] aspect-square ${type === "artist" ? "rounded-full" : "rounded-[8px]"} rounded-[8px] flex p-[8px] items-end justify-end`}
                    style={{ backgroundImage: "url('/images/album-cover.jpg')", backgroundSize: "cover"}}>
                    <PlayButton/>
                </Link>
                {(type === "daily" || type === "radio") && (
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