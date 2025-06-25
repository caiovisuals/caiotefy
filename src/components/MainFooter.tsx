import Link from "next/link"

export default function MainFooter() {
    return (
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
    )
}