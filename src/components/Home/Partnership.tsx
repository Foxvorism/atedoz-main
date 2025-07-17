import Image from "next/image";

const Partnership: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center p-14">
        <div className="px-[10vw] w-full">
          <div className="grid grid-cols-2 gap-15">
            <div className="flex justify-center items-center">
              <div className="text-left w-[22rem]">
                <h2 className="text-2xl font-bold mb-5">Kerja Sama</h2>

                <p className="mb-5 text-lg">
                  Atedoz memiliki layanan photobooth yang terbuka untuk
                  melakukan kerja sama dengan event, rental dan berkolaborasi.
                </p>

                {/* <div className="mb-8">
                  <button className="px-10 py-3 rounded-md text-white bg-[var(--color-black-2)] hover:scale-[102%] cursor-pointer">
                    Pelajari Lebih Lanjut
                  </button>
                </div> */}
              </div>
            </div>
            <div className="">
              <Image
                width={400} // Tentukan ukuran gambar
                height={0} // Tentukan ukuran gambar
                src="/img/home/partnership3.jpg"
                alt="partnership"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partnership;
