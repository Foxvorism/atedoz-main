import React from "react";

const Client: React.FC = () => {
  const clients = [
    { id: 1, img: "/img/partnership/klien1.png", alt: "client1" },
    { id: 2, img: "/img/partnership/klien2.png", alt: "client2" },
    { id: 3, img: "/img/partnership/klien3.png", alt: "client3" },
    { id: 4, img: "/img/partnership/klien4.png", alt: "client4" },
  ];

  return (
    <>
      <div className="p-10 w-full text-center px-50">
        <h2 className="text-2xl font-bold mb-10">Klien Terbaru</h2>
        <div className="grid grid-cols-4 gap-5">
          {clients.map((clinet) => (
            <div
              key={clinet.id}
              className="relative w-full bg-gray-100 rounded-lg overflow-hidden hover:scale-[102%]"
            >
              <Image
                src={clinet.img}
                alt={clinet.alt}
                className="aspect-square w-full h-full object-cover scale-[104%] bg-center cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Client;
