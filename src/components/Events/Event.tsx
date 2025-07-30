import React from "react";
import Image from "next/image";
import Link from "next/link";

interface EventItem {
  id: number;
  nama_event: string;
  tanggal_event: string; // Pastikan format tanggal ini standar, misal: "YYYY-MM-DD"
  deskripsi_event: string;
  thumbnail: string;
}

interface EventProps {
  events: EventItem[];
}

const Event: React.FC<EventProps> = ({ events }) => {
  // KUNCI: Ubah logika sorting dari b.id - a.id menjadi perbandingan tanggal
  const sortedEvents = [...events].sort(
    (a, b) =>
      new Date(b.tanggal_event).getTime() - new Date(a.tanggal_event).getTime()
  );

  return (
    <div className="w-full text-center py-16 px-6 sm:px-8 lg:px-12">
      <h1 className="text-3xl font-bold mb-3 md:text-4xl">Events</h1>
      <p className="text-base font-medium text-gray-600 mb-12 max-w-xl mx-auto">
        Berikut adalah event-event yang kami selenggarakan
      </p>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {sortedEvents.map((event) => (
            <Link href={`/events/detail-event/${event.id}`} key={event.id}>
              <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-[102%] transition-all duration-300">
                <div className="relative aspect-video w-full">
                  <Image
                    fill
                    objectFit="cover"
                    src={event.thumbnail}
                    alt={event.nama_event}
                    unoptimized
                  />
                </div>
                <div className="p-5 text-left">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {event.nama_event}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {/* Anda bisa memformat tanggal di sini jika perlu */}
                    {new Date(event.tanggal_event).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
