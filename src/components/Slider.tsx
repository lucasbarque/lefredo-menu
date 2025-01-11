'use client';

import Image from 'next/image';

import '../app/styles/slider.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface Image {
  title: string;
  url: string;
}

interface SliderProps {
  images?: Image[];
}

export function Slider({ images }: SliderProps) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={images && images.length > 1}
      className="dishes-slider h-72"
    >
      {images?.map((image) => (
        <SwiperSlide key={image.url}>
          <Image
            src={image.url}
            alt={image.title}
            fill
            quality={100}
            className="w-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
