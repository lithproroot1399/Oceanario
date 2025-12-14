// antes: import Image from "next/image";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import SwiperCarousel from "@/src/components/ImageCarousel";
import Product from "@/src/components/product";

export default function Home() {
	const carouselImages = [
		{ src: "/pinguin.jpg", alt: "Pinguim" },
		{ src: "/pinguin_1.jpg", alt: "Pinguim 2" },
		{ src: "/palhaco.jpg", alt: "Palhaco" },
	];

	return (
		<div className="flex flex-col w-screen h-screen">
			<Header />
			<div className="w-full flex-1">
				<SwiperCarousel images={carouselImages} />
			</div>
			<div className="flex items-center m-4 w-full justify-center">
				<Product />
			</div>
			<Footer />
		</div>
	);
}
