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
    <div className="flex w-full flex-col overflow-hidden rounded-md border border-zinc-800 bg-[#202022]">
      {/* Image */}
      <div className="relative h-52">
        <Image
          alt="Image"
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-y-2 p-4">
        <h3 className="text-sm font-semibold sm:text-base">{name}</h3>

        <p className="line-clamp-2 text-xs text-zinc-400 sm:text-sm">
          {description}
        </p>

        <div className="flex gap-x-3">
          {links?.map((link, index) => (
            <RedirectLink key={index} name={link.name} url={link.url} />
          ))}
        </div>
      </div>
    </div>
  );
}
