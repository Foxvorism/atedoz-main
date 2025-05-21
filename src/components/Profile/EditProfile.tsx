"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
}

const EditProfile: React.FC = () => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data);
    } catch (err) {
      console.error("Gagal mengambil data user:", err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!user) return;

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    if (!user) return;
    const token = localStorage.getItem("token");
    if (!token) return;

    setLoading(true);
    setMessage(null);

    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/user/update-profile`,
        {
          name: user.name,
          phone: user.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Profil berhasil diperbarui.");
      router.push("/profile"); // ✅ redirect setelah sukses
    } catch (err: any) {
      console.error("Gagal update:", err);
      setMessage("Gagal memperbarui profil.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="flex justify-center items-center p-10 px-30 bg-white">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Edit Your Profile
        </h2>

        <div className="border rounded-lg border-white shadow-xl/20 p-10">
          <div className="grid grid-cols-2 gap-10 mb-8">
            <div>
              <h2 className="mb-1.5 text-sm font-bold text-gray-700">
                Full Name
              </h2>
              <input
                type="text"
                name="name"
                value={user?.name || ""}
                onChange={handleChange}
                placeholder="Nama Lengkap Anda"
                className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300"
              />
            </div>
            <div>
              <h2 className="mb-1.5 text-sm font-bold text-gray-700">
                Phone Number
              </h2>
              <input
                type="text"
                name="phone"
                value={user?.phone || ""}
                onChange={handleChange}
                placeholder="Nomor telepon anda"
                className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300"
              />
            </div>
          </div>

          {message && (
            <p
              className={`text-sm mb-5 ${
                message.includes("berhasil") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <div className="w-full mb-5">
            <button
              onClick={handleUpdate}
              disabled={loading}
              className="w-full text-center bg-[var(--color-black-2)] text-white py-2 rounded-md font-semibold cursor-pointer hover:bg-[var(--color-brand-500)]"
            >
              {loading ? "Menyimpan..." : "Edit Data Diri"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
