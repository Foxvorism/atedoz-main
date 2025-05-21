import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile/Profile";
import TransactionComp from "@/components/Profile/Transaction";
import Footer from "@/components/Footer";

interface Transaction {
  id: number;
  user_id: number;
  package_id: number;
  photo_studio_id: number;
  order_date: string; // ex: "2025-04-30"
  start_time: string; // ex: "10:00:00"
  end_time: string; // ex: "12:00:00"
  status: string; // ex: "pending"
  admin_confirmed: number;
  package: object;
  photo_studio: object;
}

export default async function UserPage() {
  function formatTanggalIndo(dateString: string): string {
    if (!dateString) return "-";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "-";

    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  let transactions: Transaction[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/orders`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Gagal fetch data: ${res.status}`);
    }

    const data: Transaction[] = await res.json();

    // Mapping sesuai struktur komponen Transaction
    transactions = data.map((order) => ({
      id: order.id,
      user_id: order.user_id,
      package_id: order.package_id,
      photo_studio_id: order.photo_studio_id,
      order_date: formatTanggalIndo(order.order_date),
      start_time: order.start_time, // ex: "10:00:00"
      end_time: order.end_time, // ex: "12:00:00"
      status: order.status, // ex: "pending"
      admin_confirmed: order.admin_confirmed,
      package: order.package,
      photo_studio: order.photo_studio,
    }));
  } catch (error) {
    console.error("❌ Gagal mengambil data order:", error);
  }

  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <Profile />
        <TransactionComp transaction_data={transactions} />
        <Footer />
      </div>
    </>
  );
}
