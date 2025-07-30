import React from "react";
import Link from "next/link";

const Partnership: React.FC = () => {
  return (
    <>
      {/* KUNCI 1: Ganti padding menjadi responsif dan valid */}
      <div className="flex flex-col items-center w-full text-center py-16 px-6 sm:py-20">
        {/* KUNCI 2: Tipografi dibuat responsif */}
        <h1 className="text-3xl font-bold mb-5 md:text-4xl">Kerja Sama</h1>

        {/* KUNCI 3: Ganti h2 ke p, hapus px-50, dan gunakan max-w untuk keterbacaan */}
        <p className="text-base font-medium mb-8 max-w-3xl leading-relaxed md:text-lg">
          Atedoz adalah penyedia layanan photobooth modern yang siap memberikan
          pengalaman berfoto yang seru, kreatif, dan berkesan. Kami membuka
          peluang kerja sama dengan berbagai mitra, mulai dari event organizer,
          venue, wedding organizer, hingga pelaku usaha di bidang hiburan dan
          hospitality.
        </p>

        <div className="mt-4">
          <Link href={`/contact`}>
            <button className="px-10 py-3 rounded-md bg-[var(--color-black-2)] text-white hover:scale-[102%] transition-transform duration-200 cursor-pointer">
              Hubungi Kami
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Partnership;
