import WeOffer from "@/components/layout/home/WeOffer";
import HomeBanner from "@/components/layout/home/HomeBanner";
import HeroSection from "@/components/layout/home/HeroSection";
import Testimonial from "@/components/layout/home/Testimonial";
import CategoriesYouMayLike from "@/components/layout/home/CategoriesYouMayLike";
import MostBookedProduct from "@/components/layout/home/MostBookedProduct";
import CartDrawer from "@/components/drawer/CartDrawer";

export default function Home() {
  return (
    <>
      <CartDrawer />
      <HeroSection />
      <CategoriesYouMayLike />
      <MostBookedProduct />
      <WeOffer />
      <HomeBanner />
      <Testimonial />
    </>
  );
}
