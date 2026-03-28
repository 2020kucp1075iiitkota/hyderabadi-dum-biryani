import Navbar from "@/components/Navbar";
import HeroCanvas from "@/components/HeroCanvas";
import OurStory from "@/components/OurStory";
import Menu from "@/components/Menu";
import TheProcess from "@/components/TheProcess";
import Ingredients from "@/components/Ingredients";
import CelebrityReviews from "@/components/CelebrityReviews";
import OrderReserve from "@/components/OrderReserve";
import Footer from "@/components/Footer";
import NizamiBackground from "@/components/NizamiBackground";

export default function Home() {
  return (
    <main className="relative">
      <NizamiBackground />
      <Navbar />
      <HeroCanvas />
      <OurStory />
      <Menu />
      <TheProcess />
      <Ingredients />
      <CelebrityReviews />
      <OrderReserve />
      <Footer />
    </main>
  );
}
