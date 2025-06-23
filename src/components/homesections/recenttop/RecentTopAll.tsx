import Image from "next/image"
import PlayButton from "@/components/Ui/PlayButton"

export default function RecentTopAll() {
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
                <div className="flex items-center justify-center mr-[6%]">
                    <PlayButton/>
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
                <div className="flex items-center justify-center mr-[6%]">
                    <PlayButton/>
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
                <div className="flex items-center justify-center mr-[6%]">
                    <PlayButton/>
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
                <div className="flex items-center justify-center mr-[6%]">
                    <PlayButton/>
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
                <div className="flex items-center justify-center mr-[6%]">
                    <PlayButton/>
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
                <div className="flex items-center justify-center mr-[6%]">
                    <PlayButton/>
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
                <div className="flex items-center justify-center mr-[6%]">
                    <PlayButton/>
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
                <div className="flex items-center justify-center mr-[6%]">
                    <PlayButton/>
                </div>
            </div>
        </div>
)}