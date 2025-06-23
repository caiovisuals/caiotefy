import Link from "next/link"
import Image from "next/image"

export default function ExploreTiles(){
    return (
            <Link href="" className="group p-[8px]">
                <div role="listitem" className="overflow-hidden bg-amber-950 size-full relative pb-[50%] pt-[8px] pl-[16px] rounded-[8px]">
                    <Image src="/images/album-cover.jpg" alt="ListItem Preview" width={200} height={200} className="aspect-square object-cover absolute w-[48%] rounded-[4px] right-0 bottom-0 rotate-[20deg] group-hover:rotate-[15deg] translate-[18%,-2%] transition-all duration-300 ease-in-out"></Image>
                    <span className="text-[20px]">Lorem</span>
                </div>
            </Link>
    )
}