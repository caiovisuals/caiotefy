export default function PlayButton(){
    return (
            <div className="flex items-center justify-center mr-[6%] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <button aria-label="Play" className="w-[48px] h-[48px] rounded-full bg-[var(--primary)] flex items-center justify-center cursor-pointer">
                    <svg viewBox="0 0 16 16" fill="#" height={22} width={22}>
                        <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z"></path>
                    </svg>
                </button>
            </div>
    )
}
