import Link from "next/link"
import Image from "next/image"
import PlayButtonPlaylist from "@/components/Ui/PlayButtonPlaylist"

export default function Playlist() {
    return (
        <div className="flex h-full w-full flex-col p-[40px]">
            <div className="flex flex-row w-full gap-[32px]">
                <div className="size-[300px] rounded-[4px] overflow-hidden aspect-square">
                    <Image src="/images/album-cover.jpg" className="aspect-square object-cover" alt="Album Cover" width="300" height="300"></Image>
                </div>
                <div className="flex flex-col items-start justify-end">
                    <span className="text-[14px]">Playlist particular</span>
                    <span className="text-[72px] font-semibold leading-[72px]">exemplo de playlist</span>
                    <div className="flex flex-row items-center gap-[8px] py-[8px]">
                        <Link href="/profile" className="group flex flex-row items-center gap-[8px]">
                            <div className="size-[30px] rounded-full overflow-hidden aspect-square group-hover:brightness-75 transition-all duration-300 ease-in-out">
                                <Image src="/images/album-cover.jpg" className="aspect-square object-cover" alt="Album Cover" width="50" height="50"></Image>
                            </div>
                            <span className="group-hover:text-[var(--subtext)] transition-all duration-300 ease-in-out">caioba</span>
                        </Link>
                        <span>•</span>
                        <span className="text-[var(--subtext)]">x musicas, cerca de x minutos</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-[32px]">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-[16px]">
                        <PlayButtonPlaylist/>
                        <button className="p-[8px] rounded-full cursor-pointer bg-transparent hover:bg-[var(--middlehover)] transition-all duration-300 ease-in-out">
                            <svg viewBox="0 0 24 24" fill="var(--subtext)" width={32} height={32}>
                                <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-row items-center justify-end">
                        <button className="group flex flex-row gap-[8px] items-center cursor-pointer">
                            <span className="text-[var(--subtext)] group-hover:text-[var(--text)] transition-all duration-300 ease-in-out">Lista</span>
                            <svg viewBox="0 0 16 16" width={16} height={16} className="fill-[var(--subtext)] group-hover:fill-[var(--text)] transition-all duration-300 ease-in-out">
                                <path d="M15 14.5H5V13h10zm0-5.75H5v-1.5h10zM15 3H5V1.5h10zM3 3H1V1.5h2zm0 11.5H1V13h2zm0-5.75H1v-1.5h2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col py-[16px] mt-[16px]">
                    <div className="grid items-center text-[var(--subtext)] pb-[6px] border-b-[1px] border-solid border-[var(--action)]" style={{gridTemplateColumns: `[index] var(--tracklist-index-column-width, 48px) [first] minmax(120px, var(--col1, 6fr)) [var1] minmax(120px, var(--col2, 4fr)) [var2] minmax(120px, var(--col3, 3fr)) [last] minmax(120px, var(--col4, 1fr))`}}>
                        <div className="ml-[16px]">#</div>
                        <div>Título</div>
                        <div>Álbum</div>
                        <div>Adicionada em</div>
                        <div className="flex items-center justify-center">
                            <svg viewBox="0 0 16 16" fill="var(--subtext)" width={16} height={16}>
                                <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path>
                                <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25"></path>
                            </svg>
                        </div>
                    </div> 
                    <div className="flex flex-col">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}