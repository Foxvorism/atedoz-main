import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile/Profile";
import TransactionComp from "@/components/Profile/Transaction";
import Footer from "@/components/Footer";

export default async function UserPage() {
  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <Profile />
        <TransactionComp />
        <Footer />
      </div>
    </>
  );
}
