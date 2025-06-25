"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"

export default function Header() {
    const searchInputRef = useRef<HTMLInputElement>(null)
    const [searchText, setSearchText] = useState("")
    const router = useRouter()

    const focusInput = () => {
        searchInputRef.current?.focus()
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchText(value)

        if (searchText.length === 0 && value.length === 1) {
            router.push("/search")
        }
    }

    return (
        <div className="fixed h-[64px] px-[16px] py-[8px] w-full flex flex-row items-center justify-between bg-[var(--background)] top-0">
            <div className="w-[22%] xl:w-[32%] flex flex-row items-center justify-start">
                <Link href="/">
                    CAIOTEFY
                </Link>
            </div>
            <div className="w-[56%] xl:w-[36%] flex flex-row gap-[8px] items-center justify-center">
                <Link href="/">
                    <button className="flex items-center justify-center bg-[var(--middleground)] hover:bg-[var(--middlehover)] transition-all duration-300 ease-in-out size-[48px] aspect-square rounded-full cursor-pointer">
                        <svg viewBox="0 0 24 24" className="size-[28px]" fill="var(--subtext)">
                            <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732z"></path>
                        </svg>
                    </button>
                </Link>
                <form className="w-full flex flex-row items-center justify-center px-[8px] py-[10px] gap-[8px] bg-[var(--middleground)] rounded-full">
                    <button type="button" onClick={focusInput} className="size-[28px] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="size-[28px]" fill="var(--subtext)">
                            <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
                        </svg>
                    </button>
                    <input ref={searchInputRef} value={searchText} onChange={handleInputChange} autoComplete="off" data-testid="search-input" placeholder="O que você quer ouvir?" className="w-full outline-0"></input>
                    <Link href="/explore">
                        <button className="size-[28px] flex items-center justify-center mr-[4px] cursor-pointer">
                            <svg viewBox="0 0 24 24" className="size-[28px]" fill="var(--subtext)">
                                <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4z"></path>
                            </svg>
                        </button>
                    </Link>
                </form>
            </div>
            <div className="w-[22%] xl:w-[32%] flex flex-row items-center justify-end gap-[16px]">
                <Link href="/news">
                    <button className="flex items-center justify-center p-[4px] cursor-pointer">
                        <svg viewBox="0 0 16 16" fill="var(--subtext)" width={18} height={18}>
                            <path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4m-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569zm4.5 8a1 1 0 1 0 2 0z"></path>
                        </svg>
                    </button>
                </Link>
                <button className="flex items-center justify-center p-[4px] cursor-pointer">
                    <svg viewBox="0 0 16 16" fill="var(--subtext)" width={18} height={18}>
                        <path d="M3.849 10.034c-.021-.465.026-.93.139-1.381H1.669c.143-.303.375-.556.665-.724l.922-.532a1.63 1.63 0 0 0 .436-2.458 1.8 1.8 0 0 1-.474-1.081q-.014-.287.057-.563a1.12 1.12 0 0 1 .627-.7 1.2 1.2 0 0 1 .944 0q.225.1.392.281c.108.12.188.263.237.417q.074.276.057.561a1.8 1.8 0 0 1-.475 1.084 1.6 1.6 0 0 0-.124 1.9c.36-.388.792-.702 1.272-.927v-.015c.48-.546.768-1.233.821-1.958a3.2 3.2 0 0 0-.135-1.132 2.657 2.657 0 0 0-5.04 0c-.111.367-.157.75-.135 1.133.053.724.341 1.41.821 1.955A.13.13 0 0 1 2.565 6a.13.13 0 0 1-.063.091l-.922.532A3.2 3.2 0 0 0-.004 9.396v.75h3.866c.001-.033-.01-.071-.013-.112m10.568-3.4-.922-.532a.13.13 0 0 1-.064-.091.12.12 0 0 1 .028-.1c.48-.546.768-1.233.821-1.958a3.3 3.3 0 0 0-.135-1.135A2.64 2.64 0 0 0 12.7 1.233a2.67 2.67 0 0 0-3.042.64 2.65 2.65 0 0 0-.554.948c-.11.367-.156.75-.134 1.133.053.724.341 1.41.821 1.955.005.006 0 .011 0 .018.48.225.911.54 1.272.927a1.6 1.6 0 0 0-.125-1.907 1.8 1.8 0 0 1-.474-1.081q-.015-.287.057-.563a1.12 1.12 0 0 1 .627-.7 1.2 1.2 0 0 1 .944 0q.225.1.392.281.162.182.236.413c.05.184.07.375.058.565a1.8 1.8 0 0 1-.475 1.084 1.633 1.633 0 0 0 .438 2.456l.922.532c.29.169.52.421.664.724h-2.319c.113.452.16.918.139 1.383 0 .04-.013.078-.017.117h3.866v-.75a3.2 3.2 0 0 0-1.58-2.778v.004zm-3.625 6-.922-.532a.13.13 0 0 1-.061-.144.1.1 0 0 1 .025-.047 3.33 3.33 0 0 0 .821-1.958 3.2 3.2 0 0 0-.135-1.132 2.657 2.657 0 0 0-5.041 0c-.11.367-.156.75-.134 1.133.053.724.341 1.41.821 1.955a.13.13 0 0 1 .028.106.13.13 0 0 1-.063.091l-.922.532a3.2 3.2 0 0 0-1.584 2.773v.75h8.75v-.75a3.2 3.2 0 0 0-1.583-2.781zm-5.5 2.023c.143-.303.375-.556.665-.724l.922-.532a1.63 1.63 0 0 0 .436-2.458 1.8 1.8 0 0 1-.474-1.081q-.015-.287.057-.563a1.12 1.12 0 0 1 .627-.7 1.2 1.2 0 0 1 .944 0q.225.1.392.281c.108.12.188.263.237.417q.073.276.057.561a1.8 1.8 0 0 1-.475 1.084 1.632 1.632 0 0 0 .438 2.456l.922.532c.29.169.52.421.664.724z"></path>
                    </svg>
                </button>
                <Link href="/profile">
                    <button className="flex size-[40px] items-center justify-center cursor-pointer rounded-full overflow-hidden">
                        <Image className="w-full h-full object-cover"
                            alt="User Avatar"
                            src="/images/user.png"
                            width={160}
                            height={160}>
                        </Image>
                    </button>
                </Link>
            </div>
        </div>
    )
}