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
      <div className="flex justify-center items-center py-14 px-40">
        <div className="text-center">
          <h2 className="font-bold text-3xl mb-10">
            Acara Terkini dari Photobooth
          </h2>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
              {sortedEvents.map((event) => (
                <Link href={`/events/detail-event/${event.id}`} key={event.id}>
                  <div
                    className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden hover:scale-[102%]"
                  >
                    <Image
                      layout="responsive"
                      width={500}
                      height={0}
                      src={event.thumbnail}
                      alt={event.nama_event}
                      unoptimized
                      className="aspect-video w-full object-cover cursor-pointer"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-bold mb-3">{event.nama_event}</h2>
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
      </div>
    </>
  );
};

export default Event;
