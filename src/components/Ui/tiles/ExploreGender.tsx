import { useMemo } from "react"
import Link from "next/link"
import Image from "next/image"

const bgColors = [
    "bg-red-800",
    "bg-orange-800",
    "bg-amber-800",
    "bg-yellow-800",
    "bg-lime-800",
    "bg-green-800",
    "bg-emerald-800",
    "bg-teal-800",
    "bg-cyan-800",
    "bg-blue-800",
    "bg-indigo-800",
    "bg-violet-800",
    "bg-purple-800",
    "bg-fuchsia-800",
    "bg-pink-800",
    "bg-rose-800",
]

export default function ExploreTiles(){
    const randomBg = useMemo(() => {
        const index = Math.floor(Math.random() * bgColors.length)
        return bgColors[index]
    }, [])

    return (
            <Link href="/album" role="listitem" className="group p-[8px]">
                <div role="listitem" className={`overflow-hidden ${randomBg} size-full relative pb-[50%] pt-[8px] pl-[16px] rounded-[8px]`}>
                    <Image src="/images/album-cover.jpg" alt="ListItem Preview" width={200} height={200} className="aspect-square object-cover absolute w-[48%] rounded-[4px] right-0 bottom-0 rotate-[20deg] group-hover:rotate-[15deg] translate-[18%,-2%] transition-all duration-300 ease-in-out"></Image>
                    <span className="text-[20px] font-semibold">Lorem</span>
                </div>
            </Link>
    )
}