import { useEffect, useState } from "react";

interface MobileNavbarProps {
  currentHeading: string;
}

export default function MobileNavbar({ currentHeading }: MobileNavbarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (currentHeading) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [currentHeading]);

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex h-16 w-full items-center bg-[#1f1f21] p-5 text-xs font-bold uppercase tracking-widest text-[#ffffff] shadow-2xl transition-transform duration-300 ease-in-out sm:p-8 lg:hidden ${isVisible ? "translate-y-0" : "translate-y-[-100%]"}`}
    >
      {currentHeading}
    </div>
  );
}
