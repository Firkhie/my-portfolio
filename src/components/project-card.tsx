import Image from "next/image";
import RedirectLink from "./redirect-link";

interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
  links: {
    name: string;
    url: string;
  }[];
}

export default function ProjectCard({
  image,
  name,
  description,
  links,
}: ProjectCardProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-[#202022]">
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden bg-zinc-900 sm:h-52 lg:h-64">
        <Image
          alt={name}
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-y-2.5 p-4 sm:p-5">
        <h3 className="text-base font-semibold text-zinc-100 sm:text-lg">
          {name}
        </h3>

        <p className="text-xs leading-relaxed text-zinc-400 sm:text-sm">
          {description}
        </p>

        <div className="flex gap-x-4 pt-1">
          {links?.map((link, index) => (
            <RedirectLink key={index} name={link.name} url={link.url} />
          ))}
        </div>
      </div>
    </div>
  );
}
