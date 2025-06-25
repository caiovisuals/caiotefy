import Link from "next/link"
import Image from "next/image"
import PlayButton from "../PlayButton"

type CardProps = {
    type: "music" | "show"
}

export default function Card({ type }: CardProps){
    return (
        <Link href="/album" className="group size-full aspect-3/4 bg-[var(--foreground)] rounded-[8px] flex flex-col items-start justify-between gap-[8%] p-[24px] cursor-pointer">
            <div className="w-full flex flex-row items-center justify-start gap-[16px]">
                <div className="size-[72px] rounded-[8px] overflow-hidden">
                    <Image className="w-full h-full object-cover"
                        src="/images/album-cover.jpg"
                        alt="Album Cover"
                        width={160}
                        height={160}
                    ></Image>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h2 className="text-[20px] leading-[18px]">Nome do Álbum</h2>
                    <p className="text-[16px] text-[var(--subtext)]">{type === "music" ? "Artista" : "Podcast"}</p>
                </div>
            </div>
            <div className="w-full flex flex-row gap-[8px] items-center justify-between">
                <div className="cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
                    <button className="px-[16px] py-[2px] bg-[var(--action)] rounded-full cursor-pointer">
                        <span className="whitespace-nowrap transition-all duration-300 ease-in-out">{type === "music" ? "Ouvir prévia" : "Ouvir episódio"}</span>
                    </button>
                </div>
                <PlayButton/>
            </div>
        </Link>
    )
}