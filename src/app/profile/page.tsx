import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile/Profile";
import Transaction from "@/components/Profile/Transaction";
import Footer from "@/components/Footer";

export default async function UserPage() {
  const res = await fetch("http://127.0.0.1:8000/api/orders", {
    cache: "no-store", // agar selalu ambil data terbaru
  });

  if (!res.ok) {
    throw new Error("Failed to fetch transactions");
  }

  const transactions = await res.json();

  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <Profile />
        <Transaction transactions={transactions} />
        <Footer />
      </div>
    </>
  );
}
