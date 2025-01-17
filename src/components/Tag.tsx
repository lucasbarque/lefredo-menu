interface TagProps {
  title: string;
}

export function Tag({ title }: TagProps) {
  return (
    <div className="bg-brand-primary px-[0.625rem] text-[0.625rem] bg-opacity-20 text-brand-primary h-[1.375rem] rounded-xl w-fit flex items-center justify-center ">
      {title}
    </div>
  );
}
