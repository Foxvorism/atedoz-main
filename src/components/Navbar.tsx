"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Icon untuk Hamburger Menu dan Close (X)
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setIsLoggedIn] = useState(false); // Tetap ada jika logika login akan digunakan nanti
  const pathname = usePathname();

  const navigation = [
    { id: 1, name: "Beranda", href: "/" },
    { id: 2, name: "Layanan Kami", href: "/services" },
    { id: 4, name: "Events", href: "/events" },
    { id: 5, name: "Galeri", href: "/gallery" },
    { id: 7, name: "Kontak Kami", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Menutup menu saat link di-klik di mode mobile
  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header
      className="bg-white w-full h-[100px] flex items-center justify-center fixed top-0 left-0 right-0 z-50"
      style={{
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // Shadow sedikit lebih soft
      }}
    >
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image
            width={100}
            height={40} // Atur height agar rasio gambar pas
            className="w-[100px] h-auto cursor-pointer"
            src="/img/logo-atedoz.png"
            alt="logo"
          />
        </Link>

        {/* Nav Links - Logika Responsif Utama */}
        <div
          className={`
            md:static md:w-auto md:min-h-fit md:bg-transparent
            absolute top-[100px] left-0 w-full min-h-screen bg-white 
            transition-all duration-300 ease-in-out
            ${menuOpen ? "left-0" : "left-[-100%]"}
          `}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-8 p-8 md:p-0">
            {navigation.map((item) => (
              <li
                key={item.id}
                className={`${
                  isActive(item.href)
                    ? "bg-black text-white rounded-md"
                    : "text-black"
                }`}
                onClick={handleLinkClick}
              >
                <Link
                  className="hover:text-gray-500 font-bold block px-4 py-2" // Padding di sini untuk area klik yang lebih baik
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Tombol & Hamburger Menu */}
        <div className="flex items-center gap-6">
          {/* Tombol Login/Sign up bisa di-uncomment di sini */}

          {/* Tombol Hamburger/Close, hanya muncul di mobile */}
          <button
            className="text-2xl cursor-pointer md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
