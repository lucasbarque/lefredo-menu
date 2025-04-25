import Image from 'next/image';

import { HeaderProps } from './header.types';

export function Header({ logo, welcomeMessage }: HeaderProps) {
  return (
    <div className='px-6 pt-6'>
      <div className='flex items-center justify-between'>
        <Image
          src={
            logo
              ? process.env.NEXT_PUBLIC_BUCKET_URL + logo
              : '/icons/logo-lefredo.svg'
          }
          alt=''
          width={100}
          height={50}
          priority
          className='h-[50px] w-[100px]'
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
