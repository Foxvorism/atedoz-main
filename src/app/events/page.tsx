import Navbar from "@/components/Navbar";
import Event from "@/components/Events/Event";
import Footer from "@/components/Footer";

export default function Events() {
  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <Event />
        <Footer />
      </div>
    </>
  );
}
