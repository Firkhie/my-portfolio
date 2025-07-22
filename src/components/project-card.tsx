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
    <div className="flex h-[350px] w-full flex-col gap-y-2 rounded-md bg-[#202022] p-4 sm:h-[400px] sm:px-6 sm:py-5">
      <div className="relative h-full w-full overflow-hidden rounded-md">
        <Image
          alt="Image"
          src={image}
          fill
          className="object-cover object-top"
        />
      </div>
      <h3 className="mt-2 text-sm font-semibold sm:mt-4 sm:text-base">
        {name}
      </h3>
      <p className="text-xs text-zinc-400 sm:text-sm">{description}</p>
      <div className="flex gap-x-3">
        {links &&
          links.map((link) => <RedirectLink name={link.name} url={link.url} />)}
      </div>
    </div>
  );
}
