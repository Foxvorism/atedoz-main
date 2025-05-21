"use client";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
// import React, { useState } from "react";
// import { Modal } from "../modal"; // Mengimpor Modal
// import { useModal } from "@/hooks/useModal"; // Menggunakan hook untuk mengelola modal

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

interface TransactionProps {
  transaction_data: Transaction[];
}

const TransactionComp: React.FC<TransactionProps> = ({ transaction_data }) => {
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

  const handlePay = async (orderId: number) => {
    try {
      const response = await axios.get(`/api/payment/token/${orderId}`);
      console.log(response);
      const token = response.snap_token;

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

  console.log(transaction_data);

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

            {transaction_data.map((transaction) => (
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
                    {transaction.order_date} |{" "}
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
                  <button className="w-7 h-7 text-center text-white bg-red-500 rounded-sm font-semibold hover:bg-red-600 cursor-pointer">
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
