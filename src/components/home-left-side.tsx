"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import RedirectLink from "@/components/redirect-link";
import { Github, Linkedin } from "lucide-react";

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

export default function HomeLeftSide() {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div className="flex flex-col gap-y-2 sm:gap-y-3">
        <div className="relative mb-3 h-40 w-40 overflow-hidden rounded-3xl sm:h-44 sm:w-44 xl:h-52 xl:w-52">
          <Image alt="Image" src="/me.jpg" fill className="object-cover" />
        </div>
        <h1 className="text-3xl font-bold sm:text-5xl">Firdig Alfalakhi</h1>
        <h3 className="text-base text-zinc-300 sm:text-lg">
          Malang, Indonesia
        </h3>
        <p className="text-sm text-zinc-500">
          Currently, I&apos;m a Software Engineer at Antara Systems, customizing
          and extending Odoo-based ERP systems for SMEs.
        </p>
        <div className="mt-8 hidden flex-col gap-y-5 text-sm text-zinc-400 lg:flex">
          <a href="#working-experience" className="transition hover:text-white">
            01 — Working Experience
          </a>

          <a href="#tech-stack" className="transition hover:text-white">
            02 — Tech Stack
          </a>

          <a href="#latest-projects" className="transition hover:text-white">
            03 — Latest Projects
          </a>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-x-5 sm:mt-8 sm:gap-x-7">
        <Avatar>
          <AvatarImage src="/me.jpg" className="object-cover" />
        </Avatar>
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
