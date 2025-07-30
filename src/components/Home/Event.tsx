import React from "react";
import Image from "next/image";
import Link from "next/link";

interface EventItem {
  id: number;
  nama_event: string;
  tanggal_event: string; // Pastikan format tanggal ini standar, misal: "2025-07-30"
  deskripsi_event: string;
  thumbnail: string;
}

interface EventProps {
  events: EventItem[];
}

const Event: React.FC<EventProps> = ({ events }) => {
  // KUNCI: Ubah logika sorting dari ID ke tanggal (terbaru dulu)
  const sortedEvents = [...events].sort(
    (a, b) =>
      new Date(b.tanggal_event).getTime() - new Date(a.tanggal_event).getTime()
  );

  return (
    <>
      <div className="flex justify-center items-center py-14 px-4 sm:px-6 md:px-10 lg:px-40">
        <div className="text-center w-full">
          <h2 className="font-bold text-2xl md:text-3xl mb-10">
            Acara Terkini dari Photobooth
          </h2>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
              {sortedEvents.map((event) => (
                <Link href={`/events/detail-event/${event.id}`} key={event.id}>
                  <div
                    className="bg-gray-100 rounded-lg overflow-hidden h-full
                                  hover:scale-[102%] transition-transform duration-300"
                  >
                    <div className="relative aspect-video w-full">
                      <Image
                        fill
                        objectFit="cover"
                        src={event.thumbnail}
                        alt={event.nama_event}
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4 text-left">
                      <h2 className="text-lg font-bold mb-2">
                        {event.nama_event}
                      </h2>
                      <h3 className="text-gray-400 text-xs">
                        {/* Opsional: Format tanggal agar lebih mudah dibaca */}
                        {new Date(event.tanggal_event).toLocaleDateString(
                          "id-ID",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
