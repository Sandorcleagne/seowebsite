import BannerImage from "./components/bannerImage/BannerImage";
import ClientResultSection from "./components/clientResult/ClientResultSection";
import HeroSection from "./components/hero/HeroSection";
import ReviewSection from "./components/reviewSection/ReviewSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BannerImage />
      <ReviewSection />
      <ClientResultSection />
    </>
  );
}
