"use client";

import HomeLeftSide from "@/components/home-left-side";
import HomeRightSide from "@/components/home-right-side";
import MobileNavbar from "@/components/mobile-navbar";
import { useObserverStore } from "@/hooks/use-observer-store";

export default function HomePage() {
  const useObserver = useObserverStore();

  return (
    <div className="relative h-full w-full p-5 sm:p-8 lg:p-0">
      <MobileNavbar currentHeading={useObserver.heading} />
      <div className="h-full lg:fixed lg:inset-y-0 lg:w-[440px] lg:px-10 lg:py-12 xl:w-[520px] xl:py-20">
        <HomeLeftSide />
      </div>
      <div className="h-full w-full lg:px-10 lg:py-12 lg:pl-[470px] xl:py-20 xl:pl-[600px]">
        <HomeRightSide />
      </div>
    </div>
  );
}
