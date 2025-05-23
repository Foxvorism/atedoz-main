"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderForm: React.FC = () => {
  const [packages, setPackages] = useState([]);
  const [studios, setStudios] = useState([]);
  const [userId, setUserId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    user_id: 1,
    package_id: "",
    photo_studio_id: {
      id: 1,
      nama_studio: "",
    },
    order_date: "",
    start_time: "",
    end_time: "",
  });
  
  // const packages = [
  //   { id: 1, name: "Sewa Studio 1", price: 200000, desc: "sewa studio 1" },
  //   { id: 2, name: "Sewa Studio 2", price: 200000, desc: "sewa studio 2" },
  //   { id: 3, name: "Sewa Studio 3", price: 200000, desc: "sewa studio 3" },
  // ];

  // const studios = [
  //   {
  //     id: 1,
  //     studio: "Atedoz Space Bogor Baru",
  //     latitude: "-6.591612319327254",
  //     longitude: "106.81014535373673",
  //     desc: "Cabang Bogor Baru",
  //   },
  //   {
  //     id: 2,
  //     studio: "Atedoz Space G.g Kelor",
  //     latitude: "-6.580193548718884",
  //     longitude: "106.77196462860871",
  //     desc: "Cabang G.g Kelor",
  //   },
  // ];

  const start_time = [
    { id: 1, value: "08:00", label: "08.00" },
    { id: 2, value: "09:00", label: "09.00" },
    { id: 3, value: "10:00", label: "10.00" },
    { id: 4, value: "11:00", label: "11.00" },
    { id: 5, value: "11:00", label: "11.00" },
  ];

  const end_time = [
    { id: 1, value: "08:50", label: "08.50" },
    { id: 2, value: "09:50", label: "09.50" },
    { id: 3, value: "10:50", label: "10.50" },
    { id: 4, value: "11:50", label: "11.50" },
    { id: 5, value: "11:50", label: "11.50" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
  if (token) {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setUserId(res.data.id);
      setFormData((prev) => ({
        ...prev,
        user_id: res.data.id,
      }));
    });
  }

    axios.get("http://127.0.0.1:8000/api/packages").then((res) => {
      setPackages(res.data);
    });

    axios.get("http://127.0.0.1:8000/api/studios").then((res) => {
      setStudios(res.data);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const dataToSend = { ...formData, user_id: userId };
      const res = await axios.post("http://127.0.0.1:8000/api/orders", dataToSend);
      alert("Order berhasil dibuat!");
      console.log(res.data);
    } catch (error) {
      console.error("Gagal membuat order:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center p-10 px-30 bg-white">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Photo Studio Order
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="border rounded-lg border-white shadow-xl/20 p-10">
              <div className="grid grid-cols-2 gap-10 mb-8">
                <div>
                  <h2 className="mb-1.5 text-sm font-bold text-gray-700">
                    Service Package
                  </h2>
                  <select className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10" onChange={handleChange} name="package_id" value={formData.package_id}>
                    <option value="" disabled selected>
                      Pilih paket layanan
                    </option>
                    {packages.map((packages) => (
                      <option key={packages.id} value={packages.id}>
                        {packages.nama_paket}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <h2 className="mb-1.5 text-sm font-bold text-gray-700">
                    Atedoz Studio
                  </h2>
                  <select className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10" onChange={handleChange} value={formData.photo_studio_id} name="photo_studio_id">
                    <option value="" disabled selected>
                      Pilih studio Atedoz
                    </option>
                    {studios.map((studio) => (
                      <option key={studio.id} value={studio.id}>
                        {studio.nama_studio}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <h2 className="mb-1.5 text-sm font-bold text-gray-700">Time</h2>
                  <select className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10" onChange={handleChange} value={formData.start_time} name="start_time">
                    <option value="" disabled selected>
                      Pilih waktu mulai
                    </option>
                    {start_time.map((start) => (
                      <option key={start.id} value={start.value}>
                        {start.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <h2 className="mb-1.5 text-sm font-bold text-gray-700">Time</h2>
                  <select className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10" onChange={handleChange} value={formData.end_time} name="end_time">
                    <option value="" disabled selected>
                      Pilih akhir waktu
                    </option>
                    {end_time.map((end) => (
                      <option key={end.id} value={end.value}>
                        {end.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-5">
                  <h2 className="mb-1.5 text-sm font-bold text-gray-700">Tanggal Order</h2>
                  <input
                    type="date"
                    name="order_date"
                    value={formData.order_date}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10"
                  />
                </div>
              </div>

              <div className="w-full mb-5">
                <button className="w-full text-center bg-[var(--color-black-2)] text-white py-2 rounded-md font-semibold cursor-pointer hover:bg-[var(--color-brand-500)]" type='submit'>
                  Booking Studio
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderForm;
