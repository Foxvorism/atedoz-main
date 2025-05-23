import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventDetail from "@/components/Events/EventDetail";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <EventDetail id={Number(id)} />
        <Footer />
      </div>
    </>
  );
}
