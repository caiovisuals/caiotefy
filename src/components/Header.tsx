import Link from "next/link"

export default function Header() {
    return (
        <div className="fixed h-[64px] p-[8px] w-full flex flex-row items-center justify-between bg-[var(--background)] top-0">
            <div className="w-[32%] flex flex-row items-center justify-start">
                <Link href="/">
                    CAIOTEFY
                </Link>
            </div>
            <div className="w-[36%] flex flex-row gap-[8px] items-center justify-center">
                <button className="flex items-center justify-center bg-[var(--middleground)] size-[48px] rounded-full">
                    <svg viewBox="0 0 24 24" className="size-[28px]">
                        <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732z"></path>
                    </svg>
                </button>
                <form className="w-full flex flex-row items-center justify-center px-[8px] py-[10px] gap-[8px] bg-[var(--middleground)] rounded-full">
                    <button className="size-[28px] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="size-[28px]">
                            <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
                        </svg>
                    </button>
                    <input data-testid="search-input" placeholder="O que você quer ouvir?" className="w-full outline-0"></input>
                    <button className="size-[28px] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="size-[28px]">
                            <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4z"></path>
                        </svg>
                    </button>
                </form>
            </div>
            <div className="w-[32%] flex flex-row items-center justify-end gap-[16px]">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}