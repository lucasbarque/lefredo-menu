'use client';

import Image from 'next/image';

import { SliderProps } from './slider.types';
import '@/app/styles/slider.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
      className="dishes-slider aspect-square"
      style={{ zIndex: '-1' }}
    >
      {images?.map((image) => (
        <SwiperSlide key={image.url}>
          <Image
            src={image.url}
            alt={image.title}
            fill
            quality={100}
            className="w-full object-cover"
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
