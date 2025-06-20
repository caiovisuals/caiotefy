import Link from "next/link"
import Image from "next/image"

export default function Home() {
    return (
        <div className="w-full h-full bg-[var(--middleground)] flex flex-col gap-[16px] ml-[72px] px-[40px] overflow-y-auto overflow-x-hidden rounded-[8px]">
            <div className="flex flex-col gap-[16px]">
                <header className="fixed w-full bg-[var(--middleground)] flex flex-row items-center gap-[8px] py-[16px]">
                    <button className="px-[4px] rounded-full cursor-pointer">Tudo</button>
                    <button className="px-[4px] rounded-full cursor-pointer">Música</button>
                    <button className="px-[4px] rounded-full cursor-pointer">Podcasts</button>
                </header>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-[8px] w-full mt-[56px]">
                    <div className="w-full max-h-full-[160px] aspect-5/1 bg-gray-300 rounded-[8px] flex flex-row items-center justify-between gap-[10%]">
                        <div className="h-full aspect-square rounded-[8px] overflow-hidden">
                            <Image className="w-full h-full object-cover"
                                src="/images/album-cover.jpg"
                                alt="Album Cover"
                                width={160}
                                height={160}
                            ></Image>
                        </div>
                        <div className="w-full h-full flex items-center justify-start">
                            <h1 className="16px">Album</h1>
                        </div>
                    </div>
                    <div className="w-full max-h-full-[160px] aspect-5/1 bg-gray-300 rounded-[8px]"></div>
                    <div className="w-full max-h-full-[160px] aspect-5/1 bg-gray-300 rounded-[8px]"></div>
                    <div className="w-full max-h-full-[160px] aspect-5/1 bg-gray-300 rounded-[8px]"></div>
                    <div className="w-full max-h-full-[160px] aspect-5/1 bg-gray-300 rounded-[8px]"></div>
                    <div className="w-full max-h-full-[160px] aspect-5/1 bg-gray-300 rounded-[8px]"></div>
                    <div className="w-full max-h-full-[160px] aspect-5/1 bg-gray-300 rounded-[8px]"></div>
                    <div className="w-full max-h-full-[160px] aspect-5/1 bg-gray-300 rounded-[8px]"></div>
                </div>
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="flex flex-row items-center justify-between">
                    <h1>Feito para user</h1>
                    <button>Mostrar Tudo</button>
                </div>
                <div className="flex flex-row items-center gap-[8px] pb-[8px] overflow-x-auto rounded-[8px]">
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 1</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 2</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 3</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 4</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 5</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 6</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 7</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 8</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 9</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 10</div>
                </div>
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="flex flex-row items-center justify-between">
                    <h1>Feito para user</h1>
                    <button>Mostrar Tudo</button>
                </div>
                <div className="flex flex-row items-center gap-[8px] pb-[8px] overflow-x-auto rounded-[8px]">
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 1</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 2</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 3</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 4</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 5</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 6</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 7</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 8</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 9</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 10</div>
                </div>
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="flex flex-row items-center justify-between">
                    <h1>Feito para user</h1>
                    <button>Mostrar Tudo</button>
                </div>
                <div className="flex flex-row items-center gap-[8px] pb-[8px] overflow-x-auto rounded-[8px]">
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 1</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 2</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 3</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 4</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 5</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 6</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 7</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 8</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 9</div>
                    <div className="p-[8px] w-[200px] min-h-[150px] max-h-[300px] aspect-square bg-gray-300 rounded-[8px]">Card 10</div>
                </div>
            </div>
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
