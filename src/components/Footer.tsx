import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <div className="px-20 pt-20 pb-5 bg-[var(--color-black-2)] text-white">
        <div className="grid grid-cols-4 gap-20 mb-5">
          <div className="px-10">
            <div className="flex justify-center items-center">
              <Image
                src="img/logo-atedoz.png"
                alt="logo atedoz"
                className="w-32 mb-7"
              />
            </div>
            <p className="text-lg">
              Capturing Life’s Moments, Turning Memories into Timeless Visual
              Masterpieces
            </p>
          </div>
          <div className="px-10">
            <h2 className="text-xl font-medium mb-3">Layanan Kami</h2>
            <h2 className="text-lg font-bold mb-3">Photobooth</h2>
            <h2 className="text-lg font-bold mb-3">Partnership</h2>
            <h2 className="text-lg font-bold mb-3">Photo Studio</h2>
          </div>
          <div className="px-10">
            <h2 className="text-xl font-medium mb-3">Social</h2>
            <Link
              href="https://www.instagram.com/atedoz.space/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center mb-3 cursor-pointer hover:text-gray-500">
                <Image className="mr-2 w-5" src="icon/ig.svg" alt="ig" />
                <h2 className="text-lg font-bold">Instagram</h2>
              </div>
            </Link>
            <Link
              href="https://www.tiktok.com/@atedozphotobooth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center mb-3 cursor-pointer hover:text-gray-500">
                <Image className="mr-2 w-5" src="icon/tiktok.svg" alt="ig" />
                <h2 className="text-lg font-bold">Tiktok</h2>
              </div>
            </Link>
            <Link
              href="https://wa.me/6282249938235"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center mb-3 cursor-pointer hover:text-gray-500">
                <Image className="mr-2 w-5" src="icon/wa.svg" alt="ig" />
                <h2 className="text-lg font-bold">Whatsapp</h2>
              </div>
            </Link>
          </div>
          <div className="px-10">
            <h2 className="text-xl font-medium mb-3">About</h2>
            <Link href="/">
              <h2 className="text-lg font-bold mb-3 hover:text-gray-500 cursor-pointer">
                Atedoz Space
              </h2>
            </Link>
            <Link href="/service">
              <h2 className="text-lg font-bold mb-3 hover:text-gray-500 cursor-pointer">
                layanan Kami
              </h2>
            </Link>
            <Link href="/partnership">
              <h2 className="text-lg font-bold mb-3 hover:text-gray-500 cursor-pointer">
                Partnership
              </h2>
            </Link>
            <Link href="/event">
              <h2 className="text-lg font-bold mb-3 hover:text-gray-500 cursor-pointer">
                Event
              </h2>
            </Link>
            <Link href="/gallery">
              <h2 className="text-lg font-bold mb-3 hover:text-gray-500 cursor-pointer">
                Galeri
              </h2>
            </Link>
            <Link href="/contact">
              <h2 className="text-lg font-bold mb-3 hover:text-gray-500 cursor-pointer">
                Kontak Kami
              </h2>
            </Link>
          </div>
        </div>
        <div className="py-2 flex justify-center text-sm">
          <Image
            src="icon/copyright.svg"
            alt="copyright"
            className="w-4 mr-2"
          />
          2025 ATEDOZ SPACE, All right reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
