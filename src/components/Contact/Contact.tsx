import Link from "next/link";
import Image from "next/image";

const Contact: React.FC = () => {
  const contact = [
    {
      id: 1,
      logo: "/icon/email.svg",
      name: "Email",
      contact: "atedozspace@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=atedozspace@gmail.com",
    },
    {
      id: 2,
      logo: "/icon/wa.svg",
      name: "Whatsapp",
      contact: "+62 822-4993-8235",
      link: "https://wa.me/6282249938235",
    },
    {
      id: 3,
      logo: "/icon/ig.svg",
      name: "Instagram",
      contact: "@atedoz.space",
      link: "https://www.instagram.com/atedoz.space/",
    },
    {
      id: 4, // Fixed duplicate id
      logo: "/icon/tiktok.svg",
      name: "Tiktok",
      contact: "@atedozphotobooth",
      link: "https://www.tiktok.com/@atedozphotobooth",
    },
  ];

  return (
    <>
      <div className="p-14 w-full text-center px-50">
        <h2 className="text-2xl font-bold mb-3">Kontak Kami</h2>
        <h2 className="text-base font-medium mb-10">
          Tekan pilihan kontak dibawah untuk langsung menghubungi
        </h2>
        <div className="flex justify-center items-center">
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-10">
            {contact.map((contact) => (
              <Link
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer" // Adding rel attribute for security
                key={contact.id} // Added key directly on the <a> tag
              >
                <div className="bg-[var(--color-black-2)] py-10 rounded-lg cursor-pointer hover:scale-[103%]">
                  <div className="flex justify-center">
                    <Image
                      layout="intrinsic"
                      width={60} // Tentukan ukuran gambar
                      height={60} // Tentukan ukuran gambar
                      src={contact.logo}
                      alt={contact.name}
                      className="h-15 mb-8"
                    />
                  </div>
                  <div className="text-center text-white">
                    <h2 className="text-xl font-bold mb-3">{contact.name}</h2>
                    <h2 className="text-[14px]">{contact.contact}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
