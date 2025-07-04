import RecentTopAll from "../homesections/recenttop/RecentTopAll"
import RecomAll from "../homesections/recommendations/RecomAll"
import DailyMix from "../homesections/daily/DailyMix"
import Artists from "../homesections/artists/Artists"
import CardAll from "../homesections/card/CardAll"
import MainFooter from "@/components/MainFooter"

export default function AllFeed() {
    return (
            <div className="w-full h-full flex flex-col gap-[16px] px-[40px] overflow-y-auto overflow-x-hidden rounded-[8px]">
                <RecentTopAll/>
                <RecomAll/>
                <DailyMix/>
                <Artists/>
                <CardAll/>
                <MainFooter/>                   
            </div>
    )
}