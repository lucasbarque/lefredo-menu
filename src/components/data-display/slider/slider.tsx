'use client';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import '@/styles/slider.css';

import { SliderProps } from './slider.types';

export function Slider({ images }: SliderProps) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className='dishes-slider aspect-square'
      style={{ zIndex: '-1' }}
    >
      {images?.map((image) => (
        <SwiperSlide key={image.url}>
          <Image
            src={process.env.NEXT_PUBLIC_BUCKET_URL + image.url}
            alt={image.title}
            fill
            quality={100}
            className='w-full object-cover'
            loading='lazy'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
