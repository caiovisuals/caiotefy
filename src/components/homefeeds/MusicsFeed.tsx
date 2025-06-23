import Link from "next/link"
import RecentTopMusic from "../homesections/recenttop/RecentTopMusic"
import CardMusic from "../homesections/card/CardMusic"
import Artists from "@/components/homesections/artists/Artists"
import TileButton from "@/components/Ui/tiles/TileButton"

export default function MusicsFeed() {
    return (
            <div className="w-full h-full flex flex-col gap-[16px] px-[40px] overflow-y-auto overflow-x-hidden rounded-[8px]">
                <RecentTopMusic/>
                <div className="flex flex-col gap-[16px]">
                    <div className="flex flex-row items-center justify-between">
                        <h1>Feito para user</h1>
                        <button>Mostrar Tudo</button>
                    </div>
                    <div className="flex flex-row items-center gap-[8px] pb-[8px] overflow-x-auto rounded-[8px]">
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                    </div>
                </div>
                <Artists/>
                <div className="flex flex-col gap-[16px]">
                    <div className="flex flex-row items-center justify-between">
                        <h1>Feito para user</h1>
                        <button>Mostrar Tudo</button>
                    </div>
                    <div className="flex flex-row items-center gap-[8px] pb-[8px] overflow-x-auto rounded-[8px]">
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                    </div>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <div className="flex flex-row items-center justify-between">
                        <h1>Feito para user</h1>
                        <button>Mostrar Tudo</button>
                    </div>
                    <div className="flex flex-row items-center gap-[8px] pb-[8px] overflow-x-auto rounded-[8px]">
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                        <TileButton/>
                    </div>
                </div>
                <CardMusic/>
                <footer className="flex flex-col gap-[32px] mt-[8px] mb-[52px]">
                    <div className="w-full h-[2px] bg-[var(--foreground)]"/>
                    <div className="flex flex-row items-center justify-between gap-[16px]">
                        <nav className="flex flex-row items-center justify-start gap-[16px]">
                            <Link href="/">Legal</Link>
                            <Link href="/">Política de Privacidade</Link>
                            <Link href="/">Cookies</Link>
                        </nav>
                        <p>© 2025 Caiotefy</p>
                    </div>
                </footer>                     
            </div>
    )
}