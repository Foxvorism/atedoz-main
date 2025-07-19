import Navbar from "@/components/Navbar";
import Galleries from "@/components/Gallery/Galleries";
import Footer from "@/components/Footer";

interface Category {
  id: number;
  judul: string;
  thumbnail: string;
}

export default async function GalleryPage() {
  let categories: Category[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/categories`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Gagal mengambil data Kategori");

    const data: Category[] = await res.json();

    // ✅ Transform ke format yang dibutuhkan komponen Article.tsx
    categories = data.map((category) => ({
      id: category.id,
      thumbnail: category.thumbnail
        ? `${process.env.NEXT_PUBLIC_BACKEND_HOST}/photos/${category.thumbnail}`
        : "/img/default-image.jpg",
      judul: category.judul,
    }));
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }

  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <Galleries categories={categories} />
        <Footer />
      </div>
    </>
  );
}
