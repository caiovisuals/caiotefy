import RecentTopMusic from "../homesections/recenttop/RecentTopMusic"
import RecomMusic from "../homesections/recommendations/RecomMusic"
import DailyMix from "../homesections/daily/DailyMix"
import Artists from "../homesections/artists/Artists"
import CardMusic from "../homesections/card/CardMusic"
import MainFooter from "@/components/MainFooter"

export default function MusicFeed() {
    return (
            <div className="w-full h-full flex flex-col gap-[16px] px-[40px] overflow-y-auto overflow-x-hidden rounded-[8px]">
                <RecentTopMusic/>
                <RecomMusic/>
                <DailyMix/>
                <Artists/>
                <CardMusic/>
                <MainFooter/>                   
            </div>
    )
}