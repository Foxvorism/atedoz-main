import React from "react";
import Image from "next/image";

const Event: React.FC = () => {
  const event = [
    { id: 1, img: "/img/home/event1.png", alt: "event 1" },
    { id: 2, img: "/img/home/event2.png", alt: "event 2" },
    { id: 3, img: "/img/home/event3.png", alt: "event 3" },
  ];

  return (
    <>
      <div className="flex justify-center items-center p-14">
        <div className="text-center">
          <h2 className="font-bold text-3xl mb-10">
            Acara Terkini dari Photobooth
          </h2>

          {/* Horizontal Scrollable Image Section */}
          <div className="w-[60vw] flex overflow-x-auto space-x-5 py-4">
            {event.map((event) => (
              <div className="flex-shrink-0" key={event.id}>
                <Image
                  layout="intrinsic" // Menggunakan layout intrinsic agar width menyesuaikan dengan height
                  width={600} // Tentukan lebar gambar sebagai referensi rasio
                  height={325} // Tentukan tinggi gambar, width akan menyesuaikan
                  src={event.img}
                  alt={event.alt}
                  className="w-full h-auto object-cover rounded-lg" // Lebar 100% dan tinggi otomatis
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
