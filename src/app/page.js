import BannerImage from "./components/bannerImage/BannerImage";
import HeroSection from "./components/hero/HeroSection";
import ReviewSection from "./components/reviewSection/ReviewSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BannerImage />
      <ReviewSection />
    </>
  );
}
