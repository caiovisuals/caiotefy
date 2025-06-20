import type { Metadata } from "next"
import { Geologica } from "next/font/google"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import "./globals.css"

const geologica = Geologica({
    subsets: ["latin"],
    display: "swap",
})

export const metadata: Metadata = {
    title: "CAIOTEFY",
    description: "CAIOTEFY",
}

export default function Layout({children,}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="pt-br">
            <body className={geologica.className="flex flex-col w-screen h-screen"}>
                <Header/>
                <div className="flex flex-row w-full mt-[64px] mb-[72px] overflow-x-hidden">
                    <Sidebar/>
                    {children}
                </div>
                <Footer/>
            </body>
        </html>
    )
}
