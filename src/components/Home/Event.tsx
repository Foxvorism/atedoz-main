import React from "react";
import Image from "next/image";

const Event: React.FC = () => {
  const event = [
    { id: 1, img: "img/home/event1.png", alt: "event 1" },
    { id: 2, img: "img/home/event2.png", alt: "event 2" },
    { id: 3, img: "img/home/event3.png", alt: "event 3" },
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
                  src={event.img}
                  alt={event.alt}
                  className="h-[30rem] object-cover rounded-lg"
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
