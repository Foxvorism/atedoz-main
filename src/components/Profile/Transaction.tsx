"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
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
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

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

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handlePay = async (orderId: number) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/payment/token/${orderId}`);
      const token = response.data.snap_token;

      if (window.snap) {
        window.snap.pay(token, {
          onSuccess: async function (result: any) {
            alert("Pembayaran berhasil!");
            // console.log(result);
            try {
            await axios.post(
              `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/orders/confirm/${orderId}`,
              { status: "paid" },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
            // Refresh transaksi tanpa reload seluruh web
            fetchTransactions();
          } catch (err) {
            alert("Gagal update status transaksi.");
            console.error(err);
          }
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
      {showModal && selectedTransaction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-8 min-w-[320px] max-w-[90vw]">
            <h3 className="text-xl font-bold mb-4">Detail Transaksi</h3>
            <div className="mb-2">
              <span className="font-semibold">Paket:</span> {selectedTransaction.package?.nama_paket}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Studio:</span> {selectedTransaction.photo_studio?.nama_studio}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Tanggal:</span> {formatTanggalIndo(selectedTransaction.order_date)}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Jam:</span> {selectedTransaction.start_time.slice(0, 5)} - {selectedTransaction.end_time.slice(0, 5)}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Status:</span> {selectedTransaction.status}
            </div>
            {/* Tambahkan detail lain jika perlu */}
            <div className="flex gap-2 mt-6">
              {selectedTransaction.status !== "paid" && (
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => {
                    handlePay(selectedTransaction.id);
                    setShowModal(false);
                  }}
                >
                  Bayar
                </button>
              )}
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center p-10 px-30 mb-5 bg-white">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Reservasi Kamu
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
                    onClick={() => {
                      setSelectedTransaction(transaction);
                      setShowModal(true);
                    }}
                  >
                    Detail
                  </button>
                  {/* <button
                    className="w-20 mx-4 h-7 text-center text-black bg-white rounded-sm font-semibold hover:bg-[var(--color-black-1)] hover:text-white cursor-pointer"
                    onClick={() => handlePay(transaction.id)}
                  >
                    Bayar
                  </button> */}
                  {transaction.status !== "paid" && (
                    <button
                      onClick={() => handleDelete(transaction.id)}
                      className="w-7 h-7 text-center text-white bg-red-500 rounded-sm font-semibold hover:bg-red-600 cursor-pointer"
                    >
                      X
                    </button>
                  )}
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
