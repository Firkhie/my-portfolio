import Image from "next/image";

interface JobCardProps {
  image: string;
  position: string;
  place: string;
  period: string;
  link: string;
}

export default function JobCard({ data }: { data: JobCardProps }) {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noreferrer"
      className="flex w-full items-center justify-between rounded-xl border border-zinc-800 bg-[#202022] p-4 transition duration-200 hover:border-zinc-700 hover:bg-[#252528] sm:p-5"
    >
      <div className="flex items-center gap-x-4 sm:gap-x-6">
        <div className="relative hidden h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-zinc-700/50 sm:flex">
          <Image alt={data.place} src={data.image} fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-100 sm:text-base">
            {data.place}
          </p>
          <p className="text-xs text-zinc-400 sm:text-sm">{data.position}</p>
        </div>
      </div>
      <div>
        <p className="text-xs text-zinc-400 sm:text-sm">{data.period}</p>
      </div>
    </a>
  );
}
