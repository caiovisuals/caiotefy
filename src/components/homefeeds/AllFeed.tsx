import Link from "next/link"
import RecentTopAll from "../homesections/recenttop/RecentTopAll"
import CardAll from "../homesections/card/CardAll"
import Artists from "@/components/homesections/artists/Artists"
import TileButton from "@/components/Ui/tiles/TileButton"

export default function AllFeed() {
    return (
            <div className="w-full h-full flex flex-col gap-[16px] px-[40px] overflow-y-auto overflow-x-hidden rounded-[8px]">
                <RecentTopAll/>
                <div className="w-full flex flex-col gap-[16px]">
                    <div className="flex flex-row items-center justify-between">
                        <h1>Feito para user</h1>
                        <button>Mostrar Tudo</button>
                    </div>
                    <div className="w-full flex flex-row items-center gap-[8px] pb-[8px] overflow-x-auto rounded-[8px]">
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
                <div className="w-full flex flex-col gap-[16px]">
                    <div className="flex flex-row items-center justify-between">
                        <h1>Feito para user</h1>
                        <button>Mostrar Tudo</button>
                    </div>
                    <div className="w-full flex flex-row items-center gap-[8px] pb-[8px] overflow-x-auto rounded-[8px]">
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
                <div className="w-full flex flex-col gap-[16px]">
                    <div className="flex flex-row items-center justify-between">
                        <h1>Feito para user</h1>
                        <button>Mostrar Tudo</button>
                    </div>
                    <div className="w-full flex flex-row items-center gap-[8px] pb-[8px] overflow-x-auto rounded-[8px]">
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
                <CardAll/>
                <footer className="w-full flex flex-col gap-[32px] mt-[8px] mb-[52px]">
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