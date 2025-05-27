import React from "react";
import Link from "next/link";

const Map: React.FC = () => {
  return (
    <>
      <div className="p-10 w-full text-center px-50">
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
    </>
  );
};

export default Map;
