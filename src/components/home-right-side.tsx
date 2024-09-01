"use client";

import { Button } from "@/components/ui/button";
import ProjectCard from "./project-card";
import WorkCard from "./work-card";
import ContactDialog from "./contact-dialog";
import { useModalStore } from "@/hooks/use-modal-store";
import { useEffect, useState } from "react";
import ScrollObserver from "./scroll-observer";
import { useObserverStore } from "@/hooks/use-observer-store";

const works = [
  {
    image: "/feedloop.jpeg",
    position: "Fullstack Engineer",
    place: "Feedloop AI",
    period: "Sep 2023 - Mar 2024",
  },
];

const projects = [
  {
    image: "/vox-ai.png",
    name: "VoxAI",
    description:
      "A SaaS AI platform offering conversation, code, music, image, and video generation, with subscription features.",
    link1: {
      name: "Github",
      url: "https://github.com/Firkhie/vox-ai",
    },
    link2: {
      name: "Website",
      url: "https://vox-ai-pi.vercel.app/",
    },
  },
  {
    image: "/nekomics.png",
    name: "Nekomics",
    description:
      "Responsive web based application for comics reading website by using Mangadex API",
    link1: {
      name: "Github",
      url: "https://github.com/Firkhie/nekomics-app",
    },
    link2: {
      name: "Website",
      url: "https://nekomics-app.web.app/",
    },
  },
  {
    image: "/snack-whiz.png",
    name: "SnackWhiz",
    description:
      "AI-Powered Snack Recipe Generator, automatically generates a new snack recipe every week",
    link1: {
      name: "Github",
      url: "https://github.com/Firkhie/snack-whiz",
    },
    link2: {
      name: "Website",
      url: "https://snack-whiz.vercel.app/",
    },
  },
  {
    image: "/pokedex.png",
    name: "Pokedex",
    description:
      "Comprehensive and interactive encyclopedia of Pokémon using PokeAPI",
    link1: {
      name: "Github",
      url: "https://github.com/Firkhie/pokedex",
    },
    link2: {
      name: "Website",
      url: "https://pokedex-omega-woad.vercel.app/",
    },
  },
];

export default function HomeRightSide() {
  const useModal = useModalStore();
  const useObserver = useObserverStore();
  const [currentHeading, setCurrentHeading] = useState<string>("");

  useEffect(() => {
    if (useObserver.heading !== currentHeading) {
      useObserver.setHeading(currentHeading);
    }
  }, [useObserver, currentHeading]);

  return (
    <div className="mt-10 flex h-full w-full flex-col gap-y-8 sm:mt-14 sm:gap-y-14 lg:mt-0">
      <ScrollObserver onChange={setCurrentHeading} />
      <div className="flex flex-col gap-4 sm:gap-7">
        <h1 className="text-2xl font-extralight sm:text-4xl">
          Passionate about building apps and websites
        </h1>
        <div className="flex gap-x-3">
          <ContactDialog />
          <Button size="custom" variant="custom" onClick={useModal.onOpen}>
            Contact Me
          </Button>
          <a
            href="https://drive.google.com/file/d/13OPg8P_tFRNaiHKGI-t3U6iBy59epwwt/view?usp=sharing"
            target="_blank"
          >
            <Button size="custom" variant="custom">
              Download CV
            </Button>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <hr className="border-zinc-500" />
        <h2 className="text-lg font-semibold sm:text-xl">About Me</h2>
        <p className="text-sm font-light text-zinc-300 lg:text-base">
          I&apos;m a Fullstack Engineer with basic skills in frontend
          technologies like React, Vue, and Next.js. On the backend, I am
          proficient in technologies such as Node.js, TypeScript, Express, etc.
          I also have experience with AI technologies, having worked as a
          Fullstack Engineer primarily on the backend, focusing on AI agent
          training and AI prompting at a Gen-AI platform startup in Indonesia.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <hr className="border-zinc-500" />
        <h2 className="text-lg font-semibold sm:text-xl">Working Experience</h2>
        {works.map((work) => (
          <WorkCard
            key={work.place}
            image={work.image}
            position={work.position}
            place={work.place}
            period={work.period}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <hr className="border-zinc-500" />
        <h2 className="text-lg font-semibold sm:text-xl">Latest Projects</h2>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            image={project.image}
            link1={project.link1!}
            link2={project.link2!}
          />
        ))}
      </div>
      <p className="text-center text-xs text-zinc-500">
        Design inspired by{" "}
        <a
          href="https://dribbble.com/syahrulfalah"
          target="_blank"
          className="text-zinc-400"
        >
          Syahrul Falah
        </a>{" "}
        and{" "}
        <a
          href="https://dribbble.com/NicolasMzrd"
          target="_blank"
          className="text-zinc-400"
        >
          Nicolas Meuzard
        </a>
      </p>
    </div>
  );
}
