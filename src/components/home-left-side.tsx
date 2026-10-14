"use client";

import Image from "next/image";
import RedirectLink from "@/components/redirect-link";
import { Github, Linkedin } from "lucide-react";
import { useObserverStore } from "@/hooks/use-observer-store";

const links = [
  {
    name: "Linkedin",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/firdigalfalakhi/",
  },
  {
    name: "Github",
    icon: Github,
    url: "https://github.com/Firkhie",
  },
];

const navItems = [
  {
    id: "working-experience",
    label: "01 — Working Experience",
    match: "working experience",
  },
  {
    id: "tech-stack",
    label: "02 — Tech Stack",
    match: "tech stack",
  },
  {
    id: "featured-project",
    label: "03 — Featured Project",
    match: "featured project",
  },
];

export default function HomeLeftSide() {
  const { heading } = useObserverStore();
  const activeHeading = heading.toLowerCase();

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div className="flex flex-col gap-y-2 sm:gap-y-3">
        {/* Compact, elegant avatar */}
        <div className="relative mb-2 h-16 w-16 overflow-hidden rounded-full border border-zinc-800 sm:h-20 sm:w-20">
          <Image
            alt="Firdig Alfalakhi"
            src="/me.jpg"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl xl:text-5xl">
            Firdig Alfalakhi
          </h1>
          <h2 className="mt-1 text-base font-medium text-zinc-300 sm:text-lg">
            Software Engineer
          </h2>
          <p className="text-xs text-zinc-500 sm:text-sm">
            Malang, Indonesia
          </p>
        </div>

        <p className="pt-1 text-sm leading-relaxed text-zinc-400">
          Currently, I&apos;m a Software Engineer at Antara Systems, customizing
          and extending Odoo-based ERP systems for SMEs.
        </p>

        {/* Navigation - w-fit ensures hover is only active on the actual text */}
        <div className="mt-8 hidden flex-col gap-y-4 text-sm lg:flex">
          {navItems.map((item) => {
            const isActive = activeHeading.includes(item.match);
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`w-fit transition-colors duration-200 ${
                  isActive
                    ? "font-medium text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-6 flex items-center gap-x-5 sm:mt-8 sm:gap-x-7">
        {links.map((link) => (
          <RedirectLink
            key={link.name}
            name={link.name}
            icon={link.icon}
            url={link.url}
          />
        ))}
      </div>
    </div>
  );
}
