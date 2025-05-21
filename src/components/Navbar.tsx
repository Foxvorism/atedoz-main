"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname untuk mendeteksi path aktif
import Image from "next/image";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { id: 1, name: "Beranda", href: "/" },
    { id: 2, name: "Layanan Kami", href: "/services" },
    { id: 3, name: "Partnership", href: "/partnership" },
    { id: 4, name: "Events", href: "/events" },
    { id: 5, name: "Galeri", href: "/gallery" },
    { id: 6, name: "Kontak Kami", href: "/contact" },
    ...(isLoggedIn ? [{ id: 7, name: "Profile", href: "/profile" }] : []),
  ];

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Apakah kamu yakin ingin logout?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      window.location.href = "/";
    }
  };

  const isActive = (href: string) => pathname === href; // Fungsi untuk mengecek apakah href sama dengan path aktif

  useEffect(() => {
    // Cek apakah token ada di localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div>
      {/* Header */}
      <header
        className="bg-white w-full h-[100px] flex justify-center item-center fixed top-0 left-0 right-0 z-10"
        style={{
          boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
        }}
      >
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <Image
              layout="intrinsic"
              width={100} // Tentukan ukuran gambar
              height={0} // Tentukan ukuran gambar
              className="lg:w-[100px] cursor-pointer"
              src="/img/logo-atedoz.png"
              alt="logo"
            />
          </div>
          <div
            className={`${
              menuOpen ? "top-[50%]" : "top-[-100%]"
            } nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 flex items-center px-5 md:w-auto w-full`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-4">
              {navigation.map((item) => (
                <li
                  key={item.id}
                  className={`${
                    isActive(item.href) // Cek apakah href item sama dengan path aktif
                      ? "text-white bg-black px-5 py-2 rounded-md"
                      : ""
                  }`} // Menambahkan class active ketika item aktif
                >
                  <Link
                    className="hover:text-gray-500 font-bold"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-6">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-black text-white border-2 font-bold px-8 py-2 rounded-md cursor-pointer hover:bg-[var(--color-black-1)]"
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button className="bg-white border-2 font-bold px-8 py-2 rounded-md cursor-pointer hover:bg-black hover:text-white">
                  Sign Up
                </button>
              </Link>
            )}

            <button
              className="bg-white border-2 font-bold px-8 py-2 rounded-md hover:bg-black hover:text-white cursor-pointer md:hidden"
              onClick={onToggleMenu}
            >
              Menu
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
