import Link from "next/link"
import PlayButton from "../PlayButton"

export default function TileButton(){
    return (
            <div className="flex flex-col gap-[8px]">
                <Link href="/" className="group w-[160px] min-w-[140px] max-w-[200px] aspect-square rounded-[8px] flex p-[8px] items-end justify-end"
                    style={{ backgroundImage: "url('/images/album-cover.jpg')", backgroundSize: "cover"}}>
                    <PlayButton/>
                </Link>
                <h1>lorem</h1>
            </div>
    )
}