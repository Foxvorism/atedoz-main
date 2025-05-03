import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery/Gallery";
import Footer from "@/components/Footer";

// Mengambil data foto secara server-side
export default async function GalleryPage() {
  // Simulasi pengambilan data (bisa diubah dengan API call atau query database)
  const photos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1744566917536-792e7f28c4c8?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Photo 1",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1736796312243-e1510b8b5c3a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Photo 2",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1744278955687-2a0216448268?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Photo 3",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1744762561513-4388d8326a74?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Photo 4",
    },
    {
      id: 5,
      url: "https://plus.unsplash.com/premium_photo-1669223464660-08f06bffabc0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Photo 5",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <Gallery photos={photos} />;
        <Footer />
      </div>
    </>
  );
}
