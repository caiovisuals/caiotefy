import RecentTopPodcast from "../homesections/recenttop/RecentTopPodcast"
import RecomShow from "../homesections/recommendations/RecomShow"
import DailyCast from "../homesections/daily/DailyCast"
import CardPodcast from "../homesections/card/CardPodcast"
import MainFooter from "@/components/MainFooter"

export default function PodcastFeed() {
    return (
            <div className="w-full h-full flex flex-col gap-[16px] px-[40px] overflow-y-auto overflow-x-hidden rounded-[8px]">
                <RecentTopPodcast/>
                <RecomShow/>
                <DailyCast/>
                <CardPodcast/>
                <MainFooter/>                   
            </div>
    )
}