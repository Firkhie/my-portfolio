"use client";

import { Button } from "@/components/ui/button";
import ProjectCard from "./project-card";
import JobCard from "./job-card";
import TechCategory from "./tech-category";
import ContactDialog from "./contact-dialog";
import { useModalStore } from "@/hooks/use-modal-store";
import { useEffect, useState } from "react";
import ScrollObserver from "./scroll-observer";
import { useObserverStore } from "@/hooks/use-observer-store";

import jobs from "@/data/jobs.json";
import projects from "@/data/projects.json";
import techStack from "@/data/tech-stack.json";
import { Code, Layout, Server, Database, Cloud } from "lucide-react";
import TechBadgeCategory from "./tech-badge-category";

type TechCategoryKey = keyof typeof techStack;

type TechCategory = {
  key: TechCategoryKey;
  title: string;
  icon: React.ElementType;
};

const techCategories: TechCategory[] = [
  {
    key: "languages",
    title: "Languages",
    icon: Code,
  },
  {
    key: "frontend",
    title: "Frontend",
    icon: Layout,
  },
  {
    key: "backend",
    title: "Backend",
    icon: Server,
  },
  {
    key: "database",
    title: "Database",
    icon: Database,
  },
  {
    key: "devops",
    title: "DevOps",
    icon: Cloud,
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
      {/* Header */}
      <div className="flex flex-col gap-4 sm:gap-7">
        <h1 className="text-2xl font-extralight sm:text-4xl">
          Open for collaboration and new opportunities
        </h1>
        <div className="flex gap-x-3">
          <ContactDialog />
          <Button size="custom" variant="custom" onClick={useModal.onOpen}>
            Contact Me
          </Button>
          <a
            href="https://drive.google.com/file/d/1HOxWB6UIrA2ZJy3YVgImINlVSW_36RBW/view?usp=sharing"
            target="_blank"
          >
            <Button size="custom" variant="custom">
              Download CV
            </Button>
          </a>
        </div>
      </div>
      {/* Working Experience */}
      <div className="flex flex-col gap-4">
        <hr className="border-zinc-600" />
        <h2
          id="working-experience"
          className="text-lg font-semibold sm:text-xl"
        >
          Working Experience
        </h2>
        {jobs.map((job) => (
          <JobCard key={job.place} data={job} />
        ))}
      </div>
      {/* Tech Stack */}
      <div id="tech-stack" className="flex flex-col gap-4">
        <hr className="border-zinc-600" />
        <h2 id="tech-stack-3" className="text-lg font-semibold sm:text-xl">
          Tech Stack
        </h2>

        {techCategories.map((category) => (
          <TechBadgeCategory
            key={category.key}
            title={category.title}
            icon={category.icon}
            items={techStack[category.key]}
          />
        ))}
      </div>
      {/* Latest Projects */}
      <div className="flex flex-col gap-4">
        <hr className="border-zinc-600" />
        <h2 id="latest-projects" className="text-lg font-semibold sm:text-xl">
          Latest Projects
        </h2>

        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            image={project.image}
            links={project.links}
          />
        ))}
      </div>
      {/* Footer */}
      <div className="mt-4 space-y-2 lg:mt-0">
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
        <p className="text-center text-xs text-zinc-500">
          © 2026 Firdig Alfalakhi. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
