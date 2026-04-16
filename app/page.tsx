import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import SwiperCarousel from "@/src/components/ImageCarousel";
import Product from "@/src/components/product";

export default function Home() {
	const carouselImages = [
		{ src: "/pinguin.jpg", alt: "Pinguim" },
		{ src: "/pinguin_1.jpg", alt: "Pinguim 2" },
		{ src: "/palhaco.jpg", alt: "Palhaco" },
		{ src: "/fish.jpg", alt: "Palhaco" },
		{ src: "/fish_1.jpg", alt: "Palhaco" },
	];

	return (
		<div className="flex flex-col w-screen">
			<Header />

			{/* Carousel ocupa toda a viewport */}
			<section className="w-full h-screen">
				<SwiperCarousel images={carouselImages} />
			</section>

			{/* Conteúdo abaixo do carousel */}
			<section className="w-full">
				<div className="m-4 w-full flex items-center justify-center">
					<Product />
				</div>
			</section>
			<Footer />
		</div>
	);
}
