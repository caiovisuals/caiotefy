"use client"

import { Geologica } from "next/font/google"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"
import SidePlayer from "@/components/SidePlayer"
import "./globals.css"


const geologica = Geologica({
    subsets: ["latin"],
    display: "swap",
})

export default function Layout({children,}: Readonly<{children: React.ReactNode}>) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSidePlayerOpen, setIsSidePlayerOpen] = useState(false)

    return (
        <html lang="pt-br">
            <body className={`${geologica.className} flex flex-col w-screen h-screen`}>
                <Header/>
                <div className="flex flex-1 overflow-hidden flex-row w-full mt-[64px] mb-[72px] gap-[8px]">
                    <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>
                    <main className="flex-1 overflow-hidden rounded-[8px] bg-[var(--middleground)]">
                        {children}
                    </main>
                    <SidePlayer isSidePlayerOpen={isSidePlayerOpen} setIsSidePlayerOpen={setIsSidePlayerOpen}/>
                </div>
                <Footer isSidePlayerOpen={isSidePlayerOpen} setIsSidePlayerOpen={setIsSidePlayerOpen}/>
            </body>
        </html>
    )
}