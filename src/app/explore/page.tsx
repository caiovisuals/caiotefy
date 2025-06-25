import ExploreGender from "@/components/Ui/tiles/ExploreGender"

export default function Explore() {
    return (
        <div className="flex h-full w-full flex-col gap-[8px] p-[16px]">
            <div className="flex items-center justify-between p-[8px] pt-[32px]">
                <h1 className="text-[24px] font-semibold">Navegar por todas as seções</h1>
                <button></button>
            </div>
            <div role="list" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[8px]">
                <ExploreGender/>
                <ExploreGender/>
                <ExploreGender/>
                <ExploreGender/>
                <ExploreGender/>
                <ExploreGender/>
                <ExploreGender/>
                <ExploreGender/>
                <ExploreGender/>
                <ExploreGender/>
                <ExploreGender/>
                <ExploreGender/>
                <ExploreGender/>
                <ExploreGender/>
                <ExploreGender/>
                <ExploreGender/>
            </div>
        </div>
    )
}