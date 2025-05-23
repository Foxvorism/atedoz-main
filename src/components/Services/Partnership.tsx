import React from "react";
import Link from "next/link";

const Partnership: React.FC = () => {
  return (
    <>
      <div className="p-10 w-full text-center px-50">
        <h2 className="text-2xl font-bold mb-10">Kerja Sama</h2>
        <h2 className="text-base font-medium mb-5 px-50">
          Atedoz adalah penyedia layanan photobooth modern yang siap memberikan
          pengalaman berfoto yang seru, kreatif, dan berkesan. Kami membuka
          peluang kerja sama dengan berbagai mitra, mulai dari event organizer,
          venue, wedding organizer, hingga pelaku usaha di bidang hiburan dan
          hospitality.
        </h2>
        <div className="mt-10">
          <Link href={`/contact`}>
            <button className="px-10 py-3 rounded-md bg-[var(--color-black-2)] text-white hover:scale-[102%] cursor-pointer">
              Hubungi Kami
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Partnership;
