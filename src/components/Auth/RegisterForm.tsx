"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/hooks/auth";

export default function RegisterFormClient() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_num: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { name, email, phone_num, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Konfirmasi password tidak cocok.");
      setLoading(false);
      return;
    }

    const result = await register(
      name,
      email,
      phone_num,
      password,
      confirmPassword
    );

    if (result.success) {
      router.push("/login");
    } else {
      setError(result.message || "Registrasi gagal. Silakan coba lagi.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <h2 className="mb-1.5 text-sm font-medium text-gray-700">Full Name</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Masukan nama lengkap anda"
          className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10"
        />
      </div>

      <div className="mb-5">
        <h2 className="mb-1.5 text-sm font-medium text-gray-700">
          Phone Number
        </h2>
        <input
          type="text"
          name="phone_num"
          value={formData.phone_num}
          onChange={handleChange}
          placeholder="Masukan nomor telepon anda"
          className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10"
        />
      </div>

      <div className="mb-5">
        <h2 className="mb-1.5 text-sm font-medium text-gray-700">
          Email Address
        </h2>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Masukan email anda"
          className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10"
        />
      </div>

      <div className="mb-5">
        <h2 className="mb-1.5 text-sm font-medium text-gray-700">Password</h2>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Masukan password anda"
          className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10"
        />
      </div>

      <div className="mb-5">
        <h2 className="mb-1.5 text-sm font-medium text-gray-700">
          Confirm Password
        </h2>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Tulis ulang password"
          className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10"
        />
      </div>

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <div>
        <button
          type="submit"
          className="w-full text-center bg-[var(--color-black-2)] text-white py-2 rounded-md font-semibold cursor-pointer hover:bg-[var(--color-brand-500)]"
          disabled={loading}
        >
          {loading ? "Mendaftarkan..." : "Register"}
        </button>
      </div>
    </form>
  );
}
