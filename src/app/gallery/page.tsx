import Navbar from "@/components/Navbar";
import Galleries from "@/components/Gallery/Galleries";
import Footer from "@/components/Footer";

interface Gallery {
  id: number;
  foto: string;
  deskripsi: string;
}

export default async function GalleryPage() {
  let galleries: Gallery[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/galleries`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Gagal mengambil data article");

    const data: Gallery[] = await res.json();

    // ✅ Transform ke format yang dibutuhkan komponen Article.tsx
    galleries = data.map((gallery) => ({
      id: gallery.id,
      foto: gallery.foto
        ? `${process.env.NEXT_PUBLIC_BACKEND_HOST}/photos/${gallery.foto}`
        : "/img/default-image.jpg",
      deskripsi: gallery.deskripsi,
    }));
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }

  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <Galleries galleries={galleries} />
        <Footer />
      </div>
    </>
  );
}
