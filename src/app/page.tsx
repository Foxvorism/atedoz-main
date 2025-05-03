import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import Atedoz from "@/components/Home/Atedoz";
import Photobooth from "@/components/Home/Photobooth";
import Event from "@/components/Home/Event";
import Package from "@/components/Home/Package";
import Partnership from "@/components/Home/Partnership";
import WhyAtedoz from "@/components/Home/WhyAtedoz";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <Hero />
        <Atedoz />
        <Photobooth />
        <Event />
        <Package />
        <Partnership />
        <WhyAtedoz />
        <Footer />
      </div>
    </>
  );
}
