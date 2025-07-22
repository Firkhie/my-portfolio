"use client";

import { cn } from "@/lib/utils";
import { ExternalLink, LucideIcon } from "lucide-react";

interface RedirectLinkProps {
  icon?: LucideIcon;
  name: string;
  url: string;
}

export default function RedirectLink({
  icon: Icon,
  name,
  url,
}: RedirectLinkProps) {
  const isDisabled = url.length === 0;

  return (
    <div
      className={cn(
        "group relative flex gap-x-2",
        isDisabled
          ? "pointer-events-none cursor-default opacity-50"
          : "cursor-pointer",
      )}
      onClick={() => {
        if (!isDisabled) window.open(url);
      }}
    >
      {Icon && <Icon className="h-[14px] w-[14px] sm:h-4 sm:w-4" />}
      <p className="text-xs sm:text-sm">{name}</p>
      <ExternalLink className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px]" />
      {!isDisabled && (
        <span className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 transform bg-current transition-transform duration-300 group-hover:scale-x-100"></span>
      )}
    </div>
  );
}
