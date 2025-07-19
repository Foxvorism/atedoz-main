import Navbar from "@/components/Navbar";
import Map from "@/components/Location/Map";
import Footer from "@/components/Footer";

export default async function Location() {
  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <div className="flex justify-center items-center bg-white">
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-10 text-center pt-10 px-30">
              Lokasi
            </h2>
            <Map />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
