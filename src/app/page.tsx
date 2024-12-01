import Hero from "@/components/Hero";
import TabNav from '@/components/TabNav';
import FeaturedBrokers from "@/components/Featured Brokers";
import CarouselCard from "@/components/CarouselCard";
import LatestPosts from "@/components/LatestPosts";
import SectionContent from "@/components/SectionGrid";
import Strategies from "@/components/strategies";
import TopButton from "@/components/TopButton";
// import TabContent from  "@/components/TabContent";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <div className="flex space-x-6">
        <div className="w-3/4">
          <TabNav />
          <CarouselCard tag="fundamental analysis" />
          <div className="flex gap-3">
            <div className="w-1/2">
              <LatestPosts tag="technical analysis" />
            </div>
            <div className="w-1/2">
              <Strategies />
            </div>
          </div>
          <SectionContent category="Technical analysis" />
        </div>
        <div className="w-1/4 flex flex-col">
          <FeaturedBrokers />
          <div className="calendar h-[550px] w-[100%] bg-orange"></div>
          <div className='mt-auto'><TopButton /></div>
        </div>
      </div>
    </div>
  )
}
