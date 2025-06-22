import Link from "next/link"
import Image from "next/image"

export default function CardAll() {
    return (
        <div className="flex flex-col gap-[16px]">
            <div className="flex flex-row items-center justify-between">
                <h1>Novidades</h1>
                <button>Mostrar Tudo</button>
            </div>
            <div className="w-full grid grid-cols-4 gap-[16px] mb-[8px]">
                <div className="group size-full aspect-3/4 bg-[var(--foreground)] rounded-[8px] flex flex-col items-start justify-between gap-[8%] p-[24px] cursor-pointer">
                    <div className="flex flex-row items-center justify-start gap-[16px]">
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
                            <p className="text-[16px] text-[var(--subtext)]">Artista</p>
                        </div>
                    </div>
                    <div>
                        play
                    </div>
                </div>
                <div className="group size-full aspect-3/4 bg-[var(--foreground)] rounded-[8px] flex flex-col items-start justify-between gap-[8%] p-[24px] cursor-pointer">
                    <div className="flex flex-row items-center justify-start gap-[16px]">
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
                            <p className="text-[16px] text-[var(--subtext)]">Artista</p>
                        </div>
                    </div>
                    <div>
                        play
                    </div>
                </div>
                <div className="group size-full aspect-3/4 bg-[var(--foreground)] rounded-[8px] flex flex-col items-start justify-between gap-[8%] p-[24px] cursor-pointer">
                    <div className="flex flex-row items-center justify-start gap-[16px]">
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
                            <p className="text-[16px] text-[var(--subtext)]">Artista</p>
                        </div>
                    </div>
                    <div>
                        play
                    </div>
                </div>
                <div className="group size-full aspect-3/4 bg-[var(--foreground)] rounded-[8px] flex flex-col items-start justify-between gap-[8%] p-[24px] cursor-pointer">
                    <div className="flex flex-row items-center justify-start gap-[16px]">
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
                            <p className="text-[16px] text-[var(--subtext)]">Artista</p>
                        </div>
                    </div>
                    <div>
                        play
                    </div>
                </div>
            </div>
        </div>
)}