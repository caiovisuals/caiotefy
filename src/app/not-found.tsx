"use client"

import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex w-full h-full flex-col items-center justify-center gap-[16px] p-[32px]">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[56px] leading-[56px] font-[600]">ERRO 404</h1>
                <h2 className="text-[18px]">Não foi possivel acessar essa página. Provavelmente ela não existe.</h2>
            </div>
            <Link href="/" className="cursor-pointer">
                <button className="text-[16px] bg-[var(--foreground)] text-[var(--text)] px-[16px] py-[4px] transition-all duration-300 ease-in-out rounded-full hover:bg-[var(--action)] cursor-pointer">Voltar pra felicidade</button>
            </Link>
        </div>
    )
}
