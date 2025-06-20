"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <div className="fixed w-full h-[72px] p-[8px] flex flex-row items-center justify-between bg-[var(--background)] bottom-0">
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
            </div>
            <div className="w-[40%] flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center gap-[16px]">
                    <div className="flex flex-row items-center justify-end gap-[16px]">
                        <button></button>
                        <button></button>
                    </div>
                    <button></button>
                    <div className="flex flex-row items-center justify-start gap-[16px]">
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div className="w-full flex flex-row items-center justify-center gap-[16px] px-[18px]">
                    <div>0:00</div>
                    <div className="relative flex w-full">
                        <label className="overflow-hidden w-full">
                            <input type="range" min="0" max="126798" step="5000" aria-valuetext="1:05/2:06" value="65510" className="w-full"></input>
                        </label>
                    </div>
                    <div>0:00</div>
                </div>
            </div>
            <div className="w-[30%] flex flex-row items-center justify-end gap-[16px]">
                <button>
                    <Image src="" alt="Previous" width={24} height={24}></Image>
                </button>
                <button>
                    <Image src="" alt="Previous" width={24} height={24}></Image>
                </button>
                <button>
                    <Image src="" alt="Previous" width={24} height={24}></Image>
                </button>
                <button>
                    <Image src="" alt="Previous" width={24} height={24}></Image>
                </button>
                <div className="flex flex-row items-center justify-center gap-[8px]">
                    <button>
                        <Image src="" alt="Previous" width={24} height={24}></Image>
                    </button>
                    <label className="overflow-hidden w-full">
                        <input type="range" min="0" max="1" step="0.1" value="1"></input>
                    </label>
                </div>
                <button>
                    <Image src="" alt="Play" width={24} height={24}></Image>
                </button>
                <button>
                    <Image src="" alt="Next" width={24} height={24}></Image>
                </button>
            </div>
        </div>
    )
}