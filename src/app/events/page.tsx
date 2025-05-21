import Event from "@/components/Events/Event";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Events {
  id: number;
  nama_event: string;
  tanggal_event: string;
  deskripsi_event: string;
  thumbnail: string;
}

export default async function EventsPage() {
  function formatTanggalIndo(dateString: string): string {
    if (!dateString) return "-";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "-";

    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  let events: Events[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/events`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Gagal mengambil data event");

    const data: Events[] = await res.json();

    // ✅ Transform ke format yang dibutuhkan komponen Event.tsx
    events = data.map((event) => ({
      id: event.id,
      nama_event: event.nama_event,
      tanggal_event: formatTanggalIndo(event.tanggal_event),
      thumbnail: `${process.env.NEXT_PUBLIC_BACKEND_HOST}/photos/${event.thumbnail}`, // jika thumbnail disimpan di storage
      alt: event.nama_event,
      deskripsi_event: event.deskripsi_event,
    }));
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }

  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <Event events={events} />
        <Footer />
      </div>
    </>
  );
}
