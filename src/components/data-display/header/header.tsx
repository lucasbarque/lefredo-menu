import Image from 'next/image';

import { HeaderProps } from './header.types';

export function Header({ logo, welcomeMessage }: HeaderProps) {
  return (
    <div className='px-6 pt-6'>
      <div className='flex items-center justify-between'>
        <Image
          src={process.env.NEXT_PUBLIC_BUCKET_URL + logo}
          alt=''
          width={104}
          height={46}
          priority
          className='h-[46px] w-[104px]'
        />
        {
          <Image
            src='/icons/icon-location.svg'
            alt=''
            width={44}
            height={44}
            priority
            className='h-11 w-11'
          />
        }
      </div>
      {welcomeMessage && (
        <div
          className='text-title-default pt-3 text-[1.063rem] leading-6'
          dangerouslySetInnerHTML={{ __html: welcomeMessage }}
        />
      )}
    </div>
  );
}
