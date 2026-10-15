import Image from "next/image";
import StackIcon from "tech-stack-icons";

type Tech = {
  name: string;
  icon: string;
};

export default function TechBadgeCategory({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: React.ElementType;
  items: Tech[];
}) {
  return (
    <div className="flex flex-col gap-3.5 rounded-xl border border-zinc-800 bg-[#202022] p-4 sm:p-5">
      <div className="flex items-center gap-2">
        <div className="rounded-lg border border-zinc-700/50 bg-zinc-800 p-2 text-xs font-medium text-zinc-300">
          <Icon size={15} />
        </div>
        <h3 className="text-sm font-medium text-zinc-200 sm:text-base">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <span
            key={tech.name}
            className="flex items-center gap-1.5 rounded-md border border-zinc-700/40 bg-zinc-800/80 px-2.5 py-1 text-xs font-medium text-zinc-300"
          >
            <div className="flex h-3 w-3 items-center justify-center overflow-hidden">
              {tech.icon === "jenkins" ? (
                <Image
                  src="/jenkins.svg"
                  alt="Jenkins"
                  width={12}
                  height={12}
                  className="h-full w-full object-contain"
                />
              ) : (
                <StackIcon name={tech.icon} variant="dark" />
              )}
              </div>
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}
