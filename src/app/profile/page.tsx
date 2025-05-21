import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile/Profile";
import Transaction from "@/components/Profile/Transaction";
import Footer from "@/components/Footer";

export default async function UserPage() {
  const transactions = [
    {
      id: 1,
      user: {
        id: 1,
        name: "Velis",
      },
      package: {
        id: 1,
        name: "Photo Studio",
      },
      schedule: {
        id: 1,
        date: "5 May 2025",
        time: "10.00 - 11.00",
        studio: {
          id: 1,
          name: "Atedoz Space Bogor Baru Branch",
        },
      },
      status: "Pending",
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "Rahma",
      },
      package: {
        id: 1,
        name: "Photo Studio",
      },
      schedule: {
        id: 1,
        date: "5 May 2025",
        time: "12.00 - 13.00",
        studio: {
          id: 1,
          name: "Atedoz Space Bogor Baru Branch",
        },
      },
      status: "Paid",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        <Profile />
        <Transaction transactions={transactions} />
        <Footer />
      </div>
    </>
  );
}
