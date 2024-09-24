import Image from 'next/image';

interface HeaderParams {
  title: string | undefined;
}

export function Header({ title }: HeaderParams) {
  return (
    <div className="relative px-8 pt-8">
      <Image
        src='/bg-white.png'
        alt=""
        width={834}
        height={536}
        className="absolute top-0 right-0 z-[1] w-4/5 opacity-10"
      />
      <div className="align-center flex">
        <h2 className="flex-1 text-3xl font-bold leading-[130%] text-black transition-colors">
          {title}
        </h2>
      </div>
    </div>
  );
}
