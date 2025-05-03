import Image from "next/image";

const Package: React.FC = () => {
  const packages = [
    {
      id: 1,
      name: "package 1",
      price: "200k/hour",
      img: "/img/home/package1.png",
      alt: "homepackage1",
    },
    {
      id: 2,
      name: "package 2",
      price: "200k/hour",
      img: "/img/home/package2.png",
      alt: "homepackage2",
    },
    {
      id: 3,
      name: "package 3",
      price: "200k/hour",
      img: "/img/home/package3.png",
      alt: "homepackage3",
    },
    {
      id: 4,
      name: "package 4",
      price: "200k/hour",
      img: "/img/home/package4.png",
      alt: "homepackage4",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center p-14">
        <div className="text-center w-full">
          <h2 className="font-bold text-3xl mb-10">Paket Unggulan Kami</h2>

          <div className="px-[20vw] mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {packages.map((packages) => (
                <div
                  key={packages.id}
                  className="relative w-full rounded-xl overflow-hidden bg-[var(--color-gray-1)]"
                  // onClick={() => handlePhotoClick(photo)} // Handle click event for first modal
                >
                  <Image
                    layout="responsive"
                    width={400} // Tentukan ukuran gambar
                    height={0} // Tentukan ukuran gambar
                    src={packages.img}
                    alt={packages.alt}
                    className="aspect-[4/3] w-full object-cover"
                  />

                  <div className="p-8 text-left truncate">
                    <h2 className="font-bold text-2xl mb-3">{packages.name}</h2>
                    <h2 className="font-semibold text-xl">{packages.price}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <button className="px-10 py-3 rounded-md text-white bg-[var(--color-black-2)] hover:scale-[102%] cursor-pointer">
              Kontak Kami
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
