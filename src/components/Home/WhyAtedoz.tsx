import Image from "next/image";

const WhyAtedoz: React.FC = () => {
  const why = [
    {
      id: 1,
      icon: "/icon/home/likes.svg",
      alt: "likes",
      desc: "Memiliki banyak pengalaman",
    },
    {
      id: 2,
      icon: "/icon/home/thumb_up_off_alt.svg",
      alt: "thumb_up_off_alt",
      desc: "Menjaga Kualitas",
    },
    {
      id: 3,
      icon: "/icon/home/camera_alt.svg",
      alt: "camera_alt",
      desc: "Kru Yang Profesional",
    },
    {
      id: 4,
      icon: "/icon/home/fiber_new.svg",
      alt: "fiber_new",
      desc: "Selalu ada layanan terbaru",
    },
    {
      id: 5,
      icon: "/icon/home/money.svg",
      alt: "money",
      desc: "Harga yang bersaing",
    },
  ];

  return (
    <>
      {/* KUNCI 1: Padding utama dibuat responsif */}
      <div className="flex justify-center items-center py-14 px-6 lg:px-14">
        <div className="text-center">
          <h2 className="font-bold text-2xl md:text-3xl mb-4">
            Mengapa Atedoz Space?
          </h2>

          {/* KUNCI 2: Ganti w-[60vw] dengan max-w- untuk kontrol yang lebih baik */}
          <div className="max-w-3xl mx-auto">
            <p className="font-medium text-base md:text-lg mb-10 leading-relaxed">
              Atedoz space memiliki banyak layanan. Karena kami tahu setiap
              momen butuh sentuhan visual yang berkesan. Atedoz Space siap bantu
              wujudkan foto dan video berkualitas tinggi dengan suasana nyaman
              dan hasil profesional.
            </p>
          </div>

          {/* Grid ini sudah cukup responsif, kita hanya perlu perbaiki isinya */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-4">
            {why.map((item) => (
              // KUNCI 3: Struktur item disederhanakan dengan flex-col
              <div key={item.id} className="flex flex-col items-center gap-3">
                <Image
                  layout="intrinsic"
                  width={50}
                  height={50} // Beri nilai height agar rasio gambar benar
                  src={item.icon}
                  alt={item.alt}
                />
                {/* Hapus lebar tetap w-32 agar teks fleksibel */}
                <p className="font-semibold text-base md:text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyAtedoz;
