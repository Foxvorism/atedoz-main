import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <Contact />
        <Footer />
      </div>
    </>
  );
}
