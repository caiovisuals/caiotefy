import Thumb from "@/components/Ui/tiles/Thumb"

export default function DailyCast() {
    return (
        <div className="w-full flex flex-col gap-[16px]">
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-[22px] font-semibold">Seu DailyCast</h1>
                <button>Mostrar Tudo</button>
            </div>
            <div className="w-full flex flex-row items-center gap-[8px] pb-[8px] overflow-x-auto rounded-[8px]">
                <div className="flex flex-row gap-[8px]">
                    <Thumb type="show"/>
                    <Thumb type="show"/>
                    <Thumb type="show"/>
                    <Thumb type="show"/>
                    <Thumb type="show"/>
                    <Thumb type="show"/>
                    <Thumb type="show"/>
                </div>
            </div>
        </div>
)}