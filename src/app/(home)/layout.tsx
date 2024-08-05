interface Props {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return (
    <div className="min-h-full w-full bg-[#151415] text-[#ffffff]">
      <div className="mx-auto h-full max-w-screen-xl">{children}</div>
    </div>
  );
}
