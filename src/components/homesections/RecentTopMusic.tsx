import Link from "next/link"
import Image from "next/image"

export default function RecentTopMusic() {
    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-[8px] mb-[8px]">
            <div className="group w-full max-h-full-[160px] aspect-5/1 bg-[var(--foreground)] rounded-[8px] flex flex-row items-center justify-between gap-[8%] cursor-pointer">
                <div className="h-full aspect-square rounded-l-[8px]">
                    <Image className="size-full object-cover rounded-l-[8px]"
                        src="/images/album-cover.jpg"
                        alt="Album Cover"
                        width={160}
                        height={160}
                    ></Image>
                </div>
                <div className="w-full h-full flex items-center justify-start">
                    <h1 className="16px">Album</h1>
                </div>
                <div className="flex items-center justify-center mr-[6%] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <button aria-label="Play" className="w-[48px] h-[48px] rounded-full bg-[var(--primary)] flex items-center justify-center cursor-pointer">
                        <svg viewBox="0 0 16 16" fill="#" height={22} width={22}>
                            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="group w-full max-h-full-[160px] aspect-5/1 bg-[var(--foreground)] rounded-[8px] flex flex-row items-center justify-between gap-[8%] cursor-pointer">
                <div className="h-full aspect-square rounded-l-[8px]">
                    <Image className="size-full object-cover rounded-l-[8px]"
                        src="/images/album-cover.jpg"
                        alt="Album Cover"
                        width={160}
                        height={160}
                    ></Image>
                </div>
                <div className="w-full h-full flex items-center justify-start">
                    <h1 className="16px">Album</h1>
                </div>
                <div className="flex items-center justify-center mr-[6%] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <button aria-label="Play" className="w-[48px] h-[48px] rounded-full bg-[var(--primary)] flex items-center justify-center cursor-pointer">
                        <svg viewBox="0 0 16 16" fill="#" height={22} width={22}>
                            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="group w-full max-h-full-[160px] aspect-5/1 bg-[var(--foreground)] rounded-[8px] flex flex-row items-center justify-between gap-[8%] cursor-pointer">
                <div className="h-full aspect-square rounded-l-[8px]">
                    <Image className="size-full object-cover rounded-l-[8px]"
                        src="/images/album-cover.jpg"
                        alt="Album Cover"
                        width={160}
                        height={160}
                    ></Image>
                </div>
                <div className="w-full h-full flex items-center justify-start">
                    <h1 className="16px">Album</h1>
                </div>
                <div className="flex items-center justify-center mr-[6%] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <button aria-label="Play" className="w-[48px] h-[48px] rounded-full bg-[var(--primary)] flex items-center justify-center cursor-pointer">
                        <svg viewBox="0 0 16 16" fill="#" height={22} width={22}>
                            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="group w-full max-h-full-[160px] aspect-5/1 bg-[var(--foreground)] rounded-[8px] flex flex-row items-center justify-between gap-[8%] cursor-pointer">
                <div className="h-full aspect-square rounded-l-[8px]">
                    <Image className="size-full object-cover rounded-l-[8px]"
                        src="/images/album-cover.jpg"
                        alt="Album Cover"
                        width={160}
                        height={160}
                    ></Image>
                </div>
                <div className="w-full h-full flex items-center justify-start">
                    <h1 className="16px">Album</h1>
                </div>
                <div className="flex items-center justify-center mr-[6%] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <button aria-label="Play" className="w-[48px] h-[48px] rounded-full bg-[var(--primary)] flex items-center justify-center cursor-pointer">
                        <svg viewBox="0 0 16 16" fill="#" height={22} width={22}>
                            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="group w-full max-h-full-[160px] aspect-5/1 bg-[var(--foreground)] rounded-[8px] flex flex-row items-center justify-between gap-[8%] cursor-pointer">
                <div className="h-full aspect-square rounded-l-[8px]">
                    <Image className="size-full object-cover rounded-l-[8px]"
                        src="/images/album-cover.jpg"
                        alt="Album Cover"
                        width={160}
                        height={160}
                    ></Image>
                </div>
                <div className="w-full h-full flex items-center justify-start">
                    <h1 className="16px">Album</h1>
                </div>
                <div className="flex items-center justify-center mr-[6%] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <button aria-label="Play" className="w-[48px] h-[48px] rounded-full bg-[var(--primary)] flex items-center justify-center cursor-pointer">
                        <svg viewBox="0 0 16 16" fill="#" height={22} width={22}>
                            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="group w-full max-h-full-[160px] aspect-5/1 bg-[var(--foreground)] rounded-[8px] flex flex-row items-center justify-between gap-[8%] cursor-pointer">
                <div className="h-full aspect-square rounded-l-[8px]">
                    <Image className="size-full object-cover rounded-l-[8px]"
                        src="/images/album-cover.jpg"
                        alt="Album Cover"
                        width={160}
                        height={160}
                    ></Image>
                </div>
                <div className="w-full h-full flex items-center justify-start">
                    <h1 className="16px">Album</h1>
                </div>
                <div className="flex items-center justify-center mr-[6%] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <button aria-label="Play" className="w-[48px] h-[48px] rounded-full bg-[var(--primary)] flex items-center justify-center cursor-pointer">
                        <svg viewBox="0 0 16 16" fill="#" height={22} width={22}>
                            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="group w-full max-h-full-[160px] aspect-5/1 bg-[var(--foreground)] rounded-[8px] flex flex-row items-center justify-between gap-[8%] cursor-pointer">
                <div className="h-full aspect-square rounded-l-[8px]">
                    <Image className="size-full object-cover rounded-l-[8px]"
                        src="/images/album-cover.jpg"
                        alt="Album Cover"
                        width={160}
                        height={160}
                    ></Image>
                </div>
                <div className="w-full h-full flex items-center justify-start">
                    <h1 className="16px">Album</h1>
                </div>
                <div className="flex items-center justify-center mr-[6%] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <button aria-label="Play" className="w-[48px] h-[48px] rounded-full bg-[var(--primary)] flex items-center justify-center cursor-pointer">
                        <svg viewBox="0 0 16 16" fill="#" height={22} width={22}>
                            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="group w-full max-h-full-[160px] aspect-5/1 bg-[var(--foreground)] rounded-[8px] flex flex-row items-center justify-between gap-[8%] cursor-pointer">
                <div className="h-full aspect-square rounded-l-[8px]">
                    <Image className="size-full object-cover rounded-l-[8px]"
                        src="/images/album-cover.jpg"
                        alt="Album Cover"
                        width={160}
                        height={160}
                    ></Image>
                </div>
                <div className="w-full h-full flex items-center justify-start">
                    <h1 className="16px">Album</h1>
                </div>
                <div className="flex items-center justify-center mr-[6%] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <button aria-label="Play" className="w-[48px] h-[48px] rounded-full bg-[var(--primary)] flex items-center justify-center cursor-pointer">
                        <svg viewBox="0 0 16 16" fill="#" height={22} width={22}>
                            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
)}