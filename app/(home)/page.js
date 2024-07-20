import WeOffer from "@/components/layout/home/WeOffer";
import HomeBanner from "@/components/layout/home/HomeBanner";
import HeroSection from "@/components/layout/home/HeroSection";
import Testimonial from "@/components/layout/home/Testimonial";
import ProductCarousel from "@/components/layout/products/ProductCarousel";
import ProductSetCarousel from "@/components/layout/products/ProductSetCarousel";
import CategoriesYouMayLike from "@/components/layout/home/CategoriesYouMayLike";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesYouMayLike />
      <ProductCarousel />
      <ProductSetCarousel />
      <WeOffer />
      <HomeBanner />
      <Testimonial />
    </>
  );
}
