import Navbar from "@/components/Navbar";
import OrderForm from "@/components/Order/Order";
import Footer from "@/components/Footer";

export default async function Order() {
  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <OrderForm />
        <Footer />
      </div>
    </>
  );
}
