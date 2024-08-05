"use client";

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
  return (
    <div
      className="group relative flex cursor-pointer gap-x-2"
      onClick={() => window.open(`${url}`)}
    >
      {Icon && <Icon className="h-[14px] w-[14px] sm:h-4 sm:w-4" />}
      <p className="text-xs sm:text-sm">{name}</p>
      <ExternalLink className="h-[14px] w-[14px] sm:h-4 sm:w-4" />
      <span className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 transform bg-current transition-transform duration-300 group-hover:scale-x-100"></span>
    </div>
  );
}
