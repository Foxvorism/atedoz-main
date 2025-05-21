import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery/Gallery";
import Footer from "@/components/Footer";

interface Photo {
  id: number;
  url: string;
  alt: string;
}

export default async function GalleryPage() {
  let photos: Photo[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/galleries`,
      {
        cache: "no-store", // penting untuk fetch fresh data setiap kali SSR
      }
    );

    if (!res.ok) {
      throw new Error("Gagal mengambil data gallery");
    }

    const data = await res.json();
    photos = data; // Pastikan API mengembalikan array foto
  } catch (error) {
    console.error("Error mengambil data gallery:", error);
  }

  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <Gallery photos={photos} />
        <Footer />
      </div>
    </>
  );
}
