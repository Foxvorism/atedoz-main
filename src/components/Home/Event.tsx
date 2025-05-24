import React from "react";
import Image from "next/image";
import Link from "next/link";

interface EventItem {
  id: number;
  nama_event: string;
  tanggal_event: string;
  deskripsi_event: string;
  thumbnail: string;
}

interface EventProps {
  events: EventItem[];
}

const Event: React.FC<EventProps> = ({ events }) => {
  const sortedEvents = [...events].sort((a, b) => b.id - a.id);

  return (
    <>
      <div className="flex justify-center items-center p-14">
        <div className="text-center">
          <h2 className="font-bold text-3xl mb-10">
            Acara Terkini dari Photobooth
          </h2>

          {/* Horizontal Scrollable Image Section */}
          {/* Tambahkan `flex-nowrap` untuk mencegah wrapping dan memaksa scroll horizontal */}
          <div className="w-[60vw] flex flex-nowrap overflow-x-auto space-x-5 py-4">
            {sortedEvents.map((event) => (
              <Link href={`/events/detail-event/${event.id}`} key={event.id}>
                {/* Beri lebar dan tinggi tetap pada container setiap event item */}
                {/* Tambahkan `flex-shrink-0` agar item tidak menyusut dan mempertahankan lebar tetap */}
                <div className="w-[300px] h-[350px] flex-shrink-0 bg-gray-100 rounded-lg hover:scale-[102%] cursor-pointer">
                  <div className="relative w-full h-[200px]">
                    {" "}
                    {/* Wrapper untuk gambar dengan tinggi tetap */}
                    <Image
                      width={100}
                      height={100}
                      src={event.thumbnail}
                      alt={event.nama_event}
                      className="object-cover rounded-t-lg w-full" // Pastikan `object-cover` dan `rounded-t-lg` untuk konsistensi
                    />
                  </div>
                  <div className="p-4 text-center">
                    {" "}
                    {/* Tambahkan text-left untuk konsistensi */}
                    <h2 className="text-xl font-bold mb-3">
                      {" "}
                      {/* Tambahkan truncate jika nama_event terlalu panjang */}
                      {event.nama_event}
                    </h2>
                    <h3 className="text-gray-400 text-xs">
                      {event.tanggal_event}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
            {sortedEvents.map((event) => (
              <Link href={`/events/detail-event/${event.id}`} key={event.id}>
                {/* Beri lebar dan tinggi tetap pada container setiap event item */}
                {/* Tambahkan `flex-shrink-0` agar item tidak menyusut dan mempertahankan lebar tetap */}
                <div className="w-[300px] h-[350px] flex-shrink-0 bg-gray-100 rounded-lg hover:scale-[102%] cursor-pointer">
                  <div className="relative w-full h-[200px]">
                    {" "}
                    {/* Wrapper untuk gambar dengan tinggi tetap */}
                    <Image
                      width={100}
                      height={100}
                      src={event.thumbnail}
                      alt={event.nama_event}
                      className="object-cover rounded-t-lg w-full" // Pastikan `object-cover` dan `rounded-t-lg` untuk konsistensi
                    />
                  </div>
                  <div className="p-4 text-center">
                    {" "}
                    {/* Tambahkan text-left untuk konsistensi */}
                    <h2 className="text-xl font-bold mb-3">
                      {" "}
                      {/* Tambahkan truncate jika nama_event terlalu panjang */}
                      {event.nama_event}
                    </h2>
                    <h3 className="text-gray-400 text-xs">
                      {event.tanggal_event}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
