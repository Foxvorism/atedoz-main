import Navbar from "@/components/Navbar";
import Photobooth from "@/components/Services/Photobooth";
import Photostudio from "@/components/Services/Photostudio";
import Partnership from "@/components/Services/Partnership";
import Footer from "@/components/Footer";

export default async function Services() {
  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <div className="flex justify-center items-center bg-white">
          <div className="w-full">
            <h2 className="text-2xl font-bold text-center pt-10 px-30">
              Layanan Kami
            </h2>

            <Photobooth />
            <Photostudio />
            <Partnership />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
