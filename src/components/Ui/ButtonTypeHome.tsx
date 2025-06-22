export default function ButtonTypeHome({ onClick, label, active, }: {
    onClick: () => void
    label: string
    active: boolean
}) { return (
            <button onClick={onClick} className={`px-[16px] py-[2px] rounded-full cursor-pointer ${active ? "bg-[var(--action)]" : "bg-[var(--foreground)]"} transition-all duration-300 ease-in-out`}>
                {label}
            </button>
    )
}
