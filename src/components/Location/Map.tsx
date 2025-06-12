import React from "react";
import Link from "next/link";

const Map: React.FC = () => {
  return (
    <>
      <div className="p-14 w-full text-center px-50">
        <h2 className="text-2xl font-bold mb-3">Lokasi</h2>
        <h2 className="text-base font-medium mb-10">
          Kunjugi photo studio dan photobox kami pada lokasi berikut
        </h2>
        <div className="p-3 w-full text-center bg-black rounded-2xl">
          <div className="flex justify-center">
            <iframe
              src="/qgis2web/index.html"
              width="2000"
              height="600"
              style={{ border: "1px solid #ccc", borderRadius: "12px" }}
              title="Peta Lokasi"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
