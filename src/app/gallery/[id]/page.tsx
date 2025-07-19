import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryDetail from "@/components/Gallery/GalleryDetail";

interface Photo {
  id: number;
  foto: string;
  deskripsi: string;
}

interface Gallery {
  id: number;
  judul: string;
  photos: Photo[];
}

// Ini tipe params yang dikirim oleh App Router
interface GalleryDetailPageProps {
  params: {
    id: string;
  };
}

// Gunakan function biasa (bukan NextPage) dan langsung menerima props
export default async function GalleryDetailPage({ params }: GalleryDetailPageProps) {
  const { id } = params;
  let galleries: Gallery[] = [];
  let photos: Photo[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/categories/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Gagal mengambil data gallery");

    const data: Gallery = await res.json();

    photos = data.photos.map((photo) => ({
      id: photo.id,
      foto: photo.foto
        ? `${process.env.NEXT_PUBLIC_BACKEND_HOST}/photos/${photo.foto}`
        : "/img/default-image.jpg",
      deskripsi: photo.deskripsi,
    }));

    galleries = [
      {
        id: data.id,
        judul: data.judul,
        photos: photos,
      },
    ];
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }

  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <GalleryDetail galleries={galleries} />
        <Footer />
      </div>
    </>
  );
}