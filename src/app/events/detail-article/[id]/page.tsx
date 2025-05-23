import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleDetail from "@/components/Events/ArticleDetail";

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <ArticleDetail id={Number(id)} />
        <Footer />
      </div>
    </>
  );
}
