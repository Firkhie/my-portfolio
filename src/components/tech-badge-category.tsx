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
    <div className="flex flex-col gap-4 rounded-md border border-zinc-800 bg-[#202022] p-4">
      <div className="flex items-center gap-2">
        <div className="rounded-lg bg-zinc-700 p-2 text-xs font-medium text-zinc-200">
          <Icon size={15} />
        </div>
        <h3 className="text-base font-medium">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <span
            key={tech.name}
            className="flex items-center gap-1.5 rounded-md bg-zinc-700 px-3 py-1 text-xs font-medium text-zinc-200"
          >
            <div className="flex h-3 w-3 items-center justify-center">
              <StackIcon name={tech.icon} variant="dark" />
            </div>
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}
