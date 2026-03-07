import StackIcon from "tech-stack-icons";

type Tech = {
  name: string;
  icon: string;
};

export default function TechCategory({
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
        <h3 className="text-base font-medium">{title}</h3>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,100px))] gap-3">
        {items.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center rounded-md bg-[#2a2a2c] p-4"
          >
            <div className="mb-2 flex h-7 w-7 items-center justify-center">
              <StackIcon name={tech.icon} variant="dark" />
            </div>
            <span className="text-center text-xs text-zinc-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
