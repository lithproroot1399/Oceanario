"use client";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperCarousel({ images }) {
	if (!images || !Array.isArray(images) || images.length === 0) {
		return <p>Nenhuma imagem disponível para exibir no carrossel.</p>;
	}

	return (
		<div className="w-full h-full">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 5000 }}
				loop
				className="w-full h-full"
			>
				{images.map((image, index) => (
					<SwiperSlide key={image.src} className="w-full h-full">
						<div className="relative w-full h-full">
							<Image
								src={image.src}
								alt={image.alt}
								fill
								className="object-cover"
								priority={index === 0}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
