import React from "react";

const Maps: React.FC = () => {
  return (
    <>
      <div className="w-full text-center py-16 px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl font-bold mb-8 md:text-4xl">Kunjungi Kami</h1>

        {/* KUNCI: Div ini berfungsi sebagai bingkai hitam */}
        <div className="w-full max-w-5xl mx-auto bg-black p-2 rounded-lg shadow-xl">
          {/* Div di dalamnya menjaga agar peta tetap responsif (aspect-ratio) */}
          <div className="relative aspect-video overflow-hidden rounded-md">
            <iframe
              // Ganti 'src' ini dengan link embed Google Maps Anda yang benar
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.555519839423!2d106.80004247587784!3d-6.450701163045585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c3a6451a5a79%3A0xeab80126a117d667!2sAtedoz%20Space%20studio%20foto%20%7C%20G.g%20Kelor!5e0!3m2!1sen!2sid!4v1722343026364!5m2!1sen!2sid"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Atedoz Space"
              className="absolute inset-0 w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maps;
