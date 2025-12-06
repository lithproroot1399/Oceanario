// src/components/ImageCarousel.jsx

// Remova 'use client' se estiver a usar o Pages Router (src/pages)
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function SwiperCarousel({ images }) {
  // Verificação crucial:
  if (!images || !Array.isArray(images) || images.length === 0) {
    return <p>Nenhuma imagem disponível para exibir no carrossel.</p>;
  }
  
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Swiper
        // ... suas configurações de Swiper ...
      >
        {/* A verificação acima garante que podemos chamar .map() aqui */}
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={500}
              layout="responsive"
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
