import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Card from "@/components/Ui/tiles/Card"

export default function CardMusic() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [cols, setCols] = useState("grid-cols-2")
    
    useEffect(() => {
    if (!containerRef.current) return

    const updateCols = (width: number) => {
        if (width > 1200) setCols("grid-cols-4")
        else if (width > 900) setCols("grid-cols-3")
        else setCols("grid-cols-2")
    }

    updateCols(containerRef.current.offsetWidth)

    const ro = new ResizeObserver((entries: ResizeObserverEntry[]) => {
        for (const entry of entries) {
        const width = entry.contentRect.width
        updateCols(width)
        }
    })

    ro.observe(containerRef.current)

    return () => ro.disconnect()
    }, [])

    return (
        <div className="flex flex-col gap-[16px]">
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-[22px] font-semibold">Novidades</h1>
                <Link href="/">
                    <button className="cursor-pointer">Mostrar Tudo</button>
                </Link>
            </div>
            <div ref={containerRef} className={`w-full gap-[16px] grid ${cols}`}>
                <Card type="music"/>
                <Card type="music"/>
                <Card type="music"/>
                <Card type="music"/>
                <Card type="music"/>
                <Card type="music"/>
                <Card type="music"/>
                <Card type="music"/>
            </div>
        </div>
    )
}
