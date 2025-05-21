import Navbar from "@/components/Navbar";
import EditProfile from "@/components/Profile/EditProfile";
import Footer from "@/components/Footer";

export default async function EditUserPage() {
  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <EditProfile />
        <Footer />
      </div>
    </>
  );
}
