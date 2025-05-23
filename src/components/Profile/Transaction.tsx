"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

interface Transaction {
  id: number;
  user_id: number;
  package_id: number;
  photo_studio_id: number;
  order_date: string;
  start_time: string;
  end_time: string;
  status: string;
  admin_confirmed: number;
  package: any;
  photo_studio: any;
}

const TransactionComp: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleDelete = async (orderId: number) => {
    const confirmDelete = confirm("Yakin ingin menghapus transaksi ini?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/orders/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Hapus dari state lokal agar langsung hilang dari UI
      setTransactions((prev) =>
        prev.filter((transaction) => transaction.id !== orderId)
      );

      alert("Transaksi berhasil dihapus.");
    } catch (error) {
      console.error("Gagal menghapus transaksi:", error);
      alert("Terjadi kesalahan saat menghapus transaksi.");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute(
      "data-client-key",
      process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!
    );
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const userRes = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const userId = userRes.data.id;

        const trxRes = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/orders/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // ✅ Urutkan berdasarkan tanggal terdekat
        const sorted = trxRes.data.sort((a: Transaction, b: Transaction) => {
          const dateA = new Date(a.order_date).getTime();
          const dateB = new Date(b.order_date).getTime();
          return dateA - dateB;
        });

        setTransactions(sorted);
      } catch (error) {
        console.error("Gagal mengambil data transaksi:", error);
      }
    };

    fetchTransactions();
  }, []);

  const handlePay = async (orderId: number) => {
    try {
      const response = await axios.get(`/api/payment/token/${orderId}`);
      const token = response.data.snap_token;

      if (window.snap) {
        window.snap.pay(token, {
          onSuccess: function (result: any) {
            alert("Pembayaran berhasil!");
            console.log(result);
          },
          onPending: function (result: any) {
            alert("Menunggu pembayaran...");
            console.log(result);
          },
          onError: function (result: any) {
            alert("Pembayaran gagal!");
            console.log(result);
          },
          onClose: function () {
            alert("Kamu menutup popup tanpa menyelesaikan pembayaran.");
          },
        });
      } else {
        alert("Midtrans belum siap.");
      }
    } catch (error) {
      alert("Gagal mengambil token pembayaran.");
      console.error(error);
    }
  };

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

  return (
    <>
      <div className="flex justify-center items-center p-10 px-30 mb-5 bg-white">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Your Transaction
          </h2>

          <div className="border rounded-lg border-white shadow-xl/20 p-10 text-[14px]">
            <div className="w-full mb-5">
              <Link href="/order">
                <button className="w-full text-center bg-white text-[var(--color-black-2)] border-2 py-2 rounded-md font-semibold hover:bg-[var(--color-black-2)] hover:text-white cursor-pointer">
                  Reservasi Photo Studio
                </button>
              </Link>
            </div>

            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="bg-[var(--color-black-2)] text-white p-5 mb-5 rounded-lg flex justify-between items-center"
              >
                <div className="flex">
                  <div className="font-bold mr-1.5">
                    {transaction.package?.nama_paket}
                  </div>
                  <div className="mr-1.5">di</div>
                  <div className="font-bold mr-2">
                    {transaction.photo_studio?.nama_studio}
                  </div>
                  <div className="mr-2">-</div>
                  <div>
                    {formatTanggalIndo(transaction.order_date)} |{" "}
                    {transaction.start_time.slice(0, 5)} -{" "}
                    {transaction.end_time.slice(0, 5)}
                  </div>
                </div>
                <div>
                  <button
                    className="w-20 mx-4 h-7 text-center text-black bg-white rounded-sm font-semibold hover:bg-[var(--color-black-1)] hover:text-white cursor-pointer"
                    onClick={() => handlePay(transaction.id)}
                  >
                    Bayar
                  </button>
                  <button
                    onClick={() => handleDelete(transaction.id)}
                    className="w-7 h-7 text-center text-white bg-red-500 rounded-sm font-semibold hover:bg-red-600 cursor-pointer"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionComp;
