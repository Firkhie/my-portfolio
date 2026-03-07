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
      className="flex w-full items-center justify-between rounded-md border border-zinc-800 bg-[#202022] p-4 hover:bg-[#202022]/65 sm:p-5"
    >
      <div className="flex items-center gap-x-7">
        <div className="relative hidden h-9 w-9 overflow-hidden rounded-full sm:flex">
          <Image alt="Image" src={data.image} fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold sm:text-base">{data.place}</p>
          <p className="text-xs text-zinc-400 sm:text-sm">{data.position}</p>
        </div>
      </div>
      <div>
        <p className="text-xs sm:text-sm">{data.period}</p>
      </div>
    </a>
  );
}
