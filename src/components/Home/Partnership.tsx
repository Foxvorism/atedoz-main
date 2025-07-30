import Image from "next/image";

const Partnership: React.FC = () => {
  return (
    <>
      {/* KUNCI 1: Padding dibuat responsif */}
      <div className="flex justify-center items-center py-14 px-6 lg:px-14">
        {/* Hapus div dengan px-[10vw] yang tidak perlu */}
        <div className="w-full max-w-6xl">
          {/* KUNCI 2: Grid dibuat 1 kolom di mobile, 2 kolom di layar besar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Kolom Teks */}
            {/* Dibuat order ke-2 di mobile (di bawah gambar) */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Hapus lebar tetap 'w-[22rem]', biarkan fleksibel */}
              <h2 className="text-3xl font-bold mb-5">Kerja Sama</h2>
              <p className="text-lg leading-relaxed">
                Atedoz memiliki layanan photobooth yang terbuka untuk melakukan
                kerja sama dengan event, rental dan berkolaborasi.
              </p>
            </div>

            {/* Kolom Gambar */}
            {/* KUNCI 3: Dibuat order ke-1 di mobile (di atas teks) */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <Image
                width={500} // Ukuran dasar untuk rasio
                height={400} // Ukuran dasar untuk rasio
                src="/img/home/partnership3.jpg"
                alt="partnership"
                className="rounded-lg object-cover w-full max-w-md h-75 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partnership;
