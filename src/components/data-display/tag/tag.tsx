import { TagProps } from './tag.types';

export function Tag({ title }: TagProps) {
  return (
    <div className='bg-brand-primary/20 bg-opacity-20 text-brand-primary flex h-[1.375rem] w-fit shrink-0 items-center justify-center rounded-xl px-[0.625rem] text-[0.625rem]'>
      {title}
    </div>
  );
}
