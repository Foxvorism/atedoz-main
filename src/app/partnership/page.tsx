import Navbar from "@/components/Navbar";
import Partnership from "@/components/Partnership/Partnership";
import Client from "@/components/Partnership/Client";
import Event from "@/components/Partnership/Event";
import Footer from "@/components/Footer";

export default function Partnerships() {
  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <Partnership />
        <Client />
        <Event />
        <Footer />
      </div>
    </>
  );
}
