'use client';
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [showWaPopup, setShowWaPopup] = useState(false);
  const [showIgPopup, setShowIgPopup] = useState(false);

  const mainContacts = [
    {
      id: 1,
      logo: "/icon/email.svg",
      name: "Email",
      contact: "atedozspace@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=atedozspace@gmail.com",
      type: "link",
    },
    {
      id: 2,
      logo: "/icon/wa.svg",
      name: "WhatsApp", // Nama diganti menjadi 'WhatsApp' umum
      contact: "Pilih WhatsApp", // Teks untuk memicu popup
      type: "popup wa", // Tipe baru untuk menandakan ini akan memicu popup
    },
    {
      id: 3,
      logo: "/icon/ig.svg",
      name: "Instagram",
      contact: "pilih IG",
      type: "popup ig",
    },
    {
      id: 4,
      logo: "/icon/tiktok.svg",
      name: "Tiktok",
      contact: "@atedozphotobooth",
      link: "https://www.tiktok.com/@atedozphotobooth",
      type: "link",
    },
  ];

  const waOptions = [
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

  const igOptions = [
    {
      id: 1,
      name: "IG Photobooth",
      contact: "@atedozphotobooth",
      logo: "/icon/ig.svg",
      link: "https://www.instagram.com/atedoz.space/",
    },
    {
      id: 2,
      name: "IG Photo Studio",
      contact: "@atedozphotobooth", 
      logo: "/icon/ig.svg",
      link: "https://www.instagram.com/atedoz.space/",
    },
  ];

  const handleWaClick = () => {
    setShowWaPopup(true);
  };

  const handleIgClick = () => {
    setShowIgPopup(true);
  };

  const handleClosePopup = () => {
    setShowWaPopup(false);
    setShowIgPopup(false);
  };

  return (
    <>
      <div className="p-14 w-full text-center px-50">
        <h2 className="text-2xl font-bold mb-3">Kontak Kami</h2>
        <h2 className="text-base font-medium mb-10">
          Tekan pilihan kontak dibawah untuk langsung menghubungi
        </h2>
        <div className="flex justify-center items-center">
          {/* Ubah grid-cols menjadi 4 atau sesuaikan dengan keinginan Anda */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-10">
            {mainContacts.map((contact) => (
              <React.Fragment key={contact.id}>
                {contact.type === "link" ? (
                  <Link
                    href={contact.link as string}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-[var(--color-black-2)] py-10 rounded-lg cursor-pointer hover:scale-[103%]">
                      <div className="flex justify-center">
                        <Image
                          layout="intrinsic"
                          width={60}
                          height={60}
                          src={contact.logo}
                          alt={contact.name}
                          className="h-15 mb-8"
                        />
                      </div>
                      <div className="text-center text-white">
                        <h2 className="text-xl font-bold mb-3">
                          {contact.name}
                        </h2>
                        <h2 className="text-[14px]">{contact.contact}</h2>
                      </div>
                    </div>
                  </Link>
                ) : contact.type === "popup ig" ? (
                  <div
                    className="bg-[var(--color-black-2)] py-10 rounded-lg cursor-pointer hover:scale-[103%]"
                    onClick={handleIgClick}
                  >
                    <div className="flex justify-center">
                      <Image
                        layout="intrinsic"
                        width={60}
                        height={60}
                        src={contact.logo}
                        alt={contact.name}
                        className="h-15 mb-8"
                      />
                    </div>
                    <div className="text-center text-white">
                      <h2 className="text-xl font-bold mb-3">
                        {contact.name}
                      </h2>
                      <h2 className="text-[14px]">{contact.contact}</h2>
                    </div>
                  </div>
                ) : (
                  <div
                    className="bg-[var(--color-black-2)] py-10 rounded-lg cursor-pointer hover:scale-[103%]"
                    onClick={handleWaClick}
                  >
                    <div className="flex justify-center">
                      <Image
                        layout="intrinsic"
                        width={60}
                        height={60}
                        src={contact.logo}
                        alt={contact.name}
                        className="h-15 mb-8"
                      />
                    </div>
                    <div className="text-center text-white">
                      <h2 className="text-xl font-bold mb-3">
                        {contact.name}
                      </h2>
                      <h2 className="text-[14px]">{contact.contact}</h2>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {showWaPopup && (
        <div
          className="fixed inset-0 bg-black/60 bg-opacity-70 flex justify-center items-center z-50"
          onClick={handleClosePopup} // Menutup popup saat klik di luar kotak
        >
          <div
            className="w-1/2 p-8 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam popup menutupnya
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              &times;
            </button>
            <div className="w-full grid grid-cols-2 gap-20">
              {waOptions.map((option) => (
                <Link
                  key={option.id}
                  href={option.link as string}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-[var(--color-black-2)] py-10 rounded-lg cursor-pointer hover:scale-[103%]">
                    <div className="flex justify-center">
                      <Image
                        layout="intrinsic"
                        width={60}
                        height={60}
                        src={option.logo}
                        alt={option.name}
                        className="h-15 mb-8"
                      />
                    </div>
                    <div className="text-center text-white">
                      <h2 className="text-xl font-bold mb-3">
                        {option.name}
                      </h2>
                      <h2 className="text-[14px]">{option.contact}</h2>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {showIgPopup && (
        <div
          className="fixed inset-0 bg-black/60 bg-opacity-70 flex justify-center items-center z-50"
          onClick={handleClosePopup} // Menutup popup saat klik di luar kotak
        >
          <div
            className="w-1/2 p-8 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam popup menutupnya
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              &times;
            </button>
            <div className="w-full grid grid-cols-2 gap-20">
              {igOptions.map((option) => (
                <Link
                  key={option.id}
                  href={option.link as string}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-[var(--color-black-2)] py-10 rounded-lg cursor-pointer hover:scale-[103%]">
                    <div className="flex justify-center">
                      <Image
                        layout="intrinsic"
                        width={60}
                        height={60}
                        src={option.logo}
                        alt={option.name}
                        className="h-15 mb-8"
                      />
                    </div>
                    <div className="text-center text-white">
                      <h2 className="text-xl font-bold mb-3">
                        {option.name}
                      </h2>
                      <h2 className="text-[14px]">{option.contact}</h2>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;