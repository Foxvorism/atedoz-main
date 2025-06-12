import Navbar from "@/components/Navbar";
import Map from "@/components/Location/Map";
// import Photobox from "@/components/Services/Photobox";
// import Photostudio from "@/components/Services/Photostudio";
// import Partnership from "@/components/Services/Partnership";
import Footer from "@/components/Footer";

export default async function Location() {
  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <Map />
        <Footer />
      </div>
    </>
  );
}
