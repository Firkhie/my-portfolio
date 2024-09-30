import Image from "next/image";

interface JobCardProps {
  image: string;
  position: string;
  place: string;
  period: string;
}

export default function JobCard({
  image,
  position,
  place,
  period,
}: JobCardProps) {
  return (
    <div className="flex w-full items-center justify-between rounded-md bg-[#202022] p-4 sm:p-5">
      <div className="flex items-center gap-x-7">
        <div className="relative hidden h-9 w-9 overflow-hidden rounded-full sm:flex">
          <Image alt="Image" fill src={image} />
        </div>
        <div>
          <p className="text-sm font-semibold sm:text-base">{position}</p>
          <p className="text-xs text-zinc-400 sm:text-sm">{place}</p>
        </div>
      </div>
      <div>
        <p className="text-xs sm:text-sm">{period}</p>
      </div>
    </div>
  );
}
