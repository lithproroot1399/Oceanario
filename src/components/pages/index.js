// pages/index.js
import SwiperCarousel from "../components/SwiperCarousel";

export default function HomePage() {
	const dummyImages = [
		{ src: "/images/slide1.jpg", alt: "Slide 1 - Demo" },
		{ src: "/images/slide2.jpg", alt: "Slide 2 - Demo" },
		{ src: "/images/slide3.jpg", alt: "Slide 3 - Demo" },
	];

	return (
		<div>
			<h1>Meu Projeto Next.js com Swiper.js</h1>
			<p>
				O carrossel abaixo é renderizado no servidor e no cliente sem problemas.
			</p>

			<SwiperCarousel images={dummyImages} />
		</div>
	);
}
