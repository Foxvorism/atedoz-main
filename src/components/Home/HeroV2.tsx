import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      {/* 1. Kontainer Utama */}
      {/* - relative: Agar elemen di dalamnya bisa di-position absolute. */}
      {/* - flex, justify-center, items-center: Untuk menengahkan konten teks. */}
      <div
        className="relative flex justify-center items-center h-[calc(100vh-100px)] bg-cover bg-center"
        style={{
          backgroundImage: `url(/img/home/hero2.jpg)`,
        }}
      >
        {/* 2. Layer Hitam (Overlay) */}
        {/* - absolute inset-0: Membuat div ini menutupi seluruh parent. */}
        {/* - bg-black/60: Memberi warna hitam dengan opacity 60%. Anda bisa ubah (e.g., bg-black/50). */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* 3. Konten Teks */}
        {/* - relative: Agar posisinya di atas layer overlay. */}
        {/* - text-white, text-center: Mengatur warna dan perataan teks. */}
        <div className="relative text-white text-center p-4">
          <h1 className="font-bold text-4xl md:text-6xl mb-8">Atedoz Space</h1>
          {/* Mengganti w-[60vw] dengan max-w-2xl agar responsif dan mudah dibaca */}
          <p className="font-medium text-base md:text-lg leading-relaxed max-w-2xl">
            Atedoz adalah sebuah layanan yang bergerak di jasa photo terbesar di
            Kota Bogor. Layanan kami memiliki banyak jenis dan yang paling
            terkenal adalah Photobooth yang telah melayani banyak pelanggan
            serta menjadi yang terbaik.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
