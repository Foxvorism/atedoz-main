"use client";
import Link from "next/link";
// import React, { useState } from "react";
// import { Modal } from "../modal"; // Mengimpor Modal
// import { useModal } from "@/hooks/useModal"; // Menggunakan hook untuk mengelola modal

interface Transactions {
  id: number;
  user: {
    id: number;
    name: string;
  };
  package: {
    id: number;
    name: string;
  };
  schedule: {
    id: number;
    date: string;
    time: string;
    studio: {
      id: number;
      name: string;
    };
  };
  status: string;
}

interface TransactionProps {
  transactions: Transactions[];
}

const Transaction: React.FC<TransactionProps> = ({ transactions }) => {
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
                    {transaction.package.name}
                  </div>
                  <div className="mr-1.5">di</div>
                  <div className="font-bold mr-2">
                    {transaction.schedule.studio.name}
                  </div>
                  <div className="mr-2">-</div>
                  <div>
                    {transaction.schedule.date} | {transaction.schedule.time}
                  </div>
                </div>
                <div>
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

export default Transaction;
