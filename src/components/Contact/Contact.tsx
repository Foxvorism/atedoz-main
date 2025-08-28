"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// --- Tipe Data ---
interface ContactOption {
  id: number;
  name: string;
  contact?: string;
  logo: string;
  link?: string;
  type?: "link" | "popup";
  popupType?: "wa" | "ig" | "tiktok";
}

interface PopupOption {
  id: number;
  name: string;
  contact: string;
  logo: string;
  link: string;
}

// --- Komponen Popup ---
const PopupModal: React.FC<{
  options: PopupOption[];
  onClose: () => void;
}> = ({ options, onClose }) => (
  <div
    className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
    onClick={onClose}
  >
    <div
      className="bg-white text-black w-full max-w-lg p-6 rounded-lg shadow-xl relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-800"
        aria-label="Tutup"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h3 className="text-xl font-bold text-center mb-6">Pilih Opsi Kontak</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((option) => (
          <a
            key={option.id}
            href={option.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[var(--color-black-2)] text-white p-5 rounded-lg text-center hover:scale-105 transition-colors"
          >
            <Image
              width={40}
              height={40}
              src={option.logo}
              alt={option.name}
              className="w-10 h-10 mx-auto mb-3"
            />
            <p className="font-bold text-base mb-1">{option.name}</p>
            <p className="text-sm ">{option.contact}</p>
          </a>
        ))}
      </div>
    </div>
  </div>
);

// --- Komponen Kartu Kontak ---
const ContactCard: React.FC<{ contact: ContactOption }> = ({ contact }) => (
  // KUNCI 1: Mengembalikan warna background ke variabel asli Anda
  <div className="bg-[var(--color-black-2)] text-white p-6 rounded-lg cursor-pointer h-full flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <Image
      width={50}
      height={50}
      src={contact.logo}
      alt={contact.name}
      className="w-12 h-12 mb-4"
    />
    <h3 className="text-lg font-bold">{contact.name}</h3>
    <p className="text-sm text-gray-300">{contact.contact}</p>
  </div>
);

// --- Komponen Utama ---
const Contact: React.FC = () => {
  const [activePopup, setActivePopup] = useState<"wa" | "ig" | "tiktok" | null>(
    null
  );

  const mainContacts: ContactOption[] = [
    {
      id: 1,
      logo: "/icon/email.svg",
      name: "Email",
      contact: "atedozspace@gmail.com",
      link: "mailto:atedozspace@gmail.com",
      type: "link",
    },
    {
      id: 2,
      logo: "/icon/wa.svg",
      name: "WhatsApp",
      contact: "Pilih Opsi",
      type: "popup",
      popupType: "wa",
    },
    {
      id: 3,
      logo: "/icon/ig.svg",
      name: "Instagram",
      contact: "Pilih Akun",
      type: "popup",
      popupType: "ig",
    },
    {
      id: 4,
      logo: "/icon/tiktok.svg",
      name: "Tiktok",
      contact: "Pilih Akun",
      type: "popup",
      popupType: "tiktok",
    },
  ];

  const waOptions: PopupOption[] = [
    {
      id: 1,
      name: "WA Photobooth",
      contact: "+62 822-4993-8235",
      logo: "/icon/wa.svg",
      link: "https://wa.me/6282249938235",
    },
    {
      id: 2,
      name: "WA Photo Studio",
      contact: "+62 852-1980-5200",
      logo: "/icon/wa.svg",
      link: "https://wa.me/6285219805200",
    },
  ];

  const igOptions: PopupOption[] = [
    {
      id: 1,
      name: "IG Photobooth",
      contact: "@atedoz.space",
      logo: "/icon/ig.svg",
      link: "https://www.instagram.com/atedoz.photobooth?igsh=dzdoMDg0bGMyMjA2",
    },
    {
      id: 2,
      name: "IG Photo Studio",
      contact: "@atedoz.studio",
      logo: "/icon/ig.svg",
      link: "https://www.instagram.com/atedoz.space?igsh=M3hucXhkN24xODNy",
    },
  ];

  const tiktokOptions: PopupOption[] = [
    {
      id: 1,
      name: "Tiktok Photobooth",
      contact: "@atedoz.space",
      logo: "/icon/tiktok.svg",
      link: "https://www.tiktok.com/@atedoz.space?_t=ZS-8zAP3yER9jr&_r=1",
    },
    {
      id: 2,
      name: "Tiktok Photo Studio",
      contact: "@atedoz.studio",
      logo: "/icon/tiktok.svg",
      link: "https://www.tiktok.com/@atedoz.space?_t=ZS-8zAP3yER9jr&_r=1",
    },
  ];

  const handleContactClick = (contact: ContactOption) => {
    if (contact.type === "popup" && contact.popupType) {
      setActivePopup(contact.popupType);
    }
  };

  return (
    <>
      <div className="w-full text-center py-16 px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-3 md:text-4xl">Kontak Kami</h1>
        <p className="text-base text-gray-600 mb-12 max-w-xl mx-auto">
          Tekan pilihan kontak di bawah untuk langsung menghubungi kami melalui
          platform favorit Anda.
        </p>
        <div className="flex justify-center items-center">
          {/* KUNCI 2: Grid diubah agar 1 kolom di mobile */}
          <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {mainContacts.map((contact) => (
              <div key={contact.id} onClick={() => handleContactClick(contact)}>
                {contact.type === "link" ? (
                  <Link
                    href={contact.link as string}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ContactCard contact={contact} />
                  </Link>
                ) : (
                  <ContactCard contact={contact} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {activePopup === "wa" && (
        <PopupModal options={waOptions} onClose={() => setActivePopup(null)} />
      )}
      {activePopup === "ig" && (
        <PopupModal options={igOptions} onClose={() => setActivePopup(null)} />
      )}
      {activePopup === "tiktok" && (
        <PopupModal
          options={tiktokOptions}
          onClose={() => setActivePopup(null)}
        />
      )}
    </>
  );
};

export default Contact;
