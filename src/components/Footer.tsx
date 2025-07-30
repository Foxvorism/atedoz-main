import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="px-6 pt-16 pb-8 bg-[var(--color-black-2)] text-white lg:px-20 lg:pt-20">
        {/* KUNCI 1: Grid dibuat responsif & text-align diatur.
          - text-center: Default untuk mobile/tablet.
          - lg:text-left: Rata kiri untuk desktop (layar besar).
        */}
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2 lg:grid-cols-4 lg:text-left lg:gap-12">
          {/* Kolom 1: Logo & Tagline */}
          <div>
            <Image
              width={100}
              height={40}
              src="/img/logo-atedoz.png"
              alt="logo atedoz"
              className="w-24 h-auto mb-5 mx-auto lg:mx-0" // Dibuat auto-center di mobile/tablet
            />
            <p className="text-base text-gray-300 max-w-xs mx-auto lg:mx-0">
              Capturing Life’s Moments, Turning Memories into Timeless Visual
              Masterpieces
            </p>
          </div>

          {/* Kolom 2: Layanan Kami */}
          <div>
            <h3 className="text-xl font-medium mb-4">Layanan Kami</h3>
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <p className="text-lg font-bold">Photobooth</p>
              <p className="text-lg font-bold">Partnership</p>
              <p className="text-lg font-bold">Photo Studio</p>
            </div>
          </div>

          {/* Kolom 3: Social Media */}
          <div>
            <h3 className="text-xl font-medium mb-4">Social</h3>
            {/* KUNCI 3: Menggunakan flexbox untuk alignment yang presisi */}
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <SocialLink
                href="https://www.instagram.com/atedoz.space/"
                icon="/icon/ig.svg"
                text="Instagram"
              />
              <SocialLink
                href="https://www.tiktok.com/@atedozphotobooth"
                icon="/icon/tiktok.svg"
                text="Tiktok"
              />
              <SocialLink
                href="https://wa.me/6282249938235"
                icon="/icon/wa.svg"
                text="Whatsapp Photobooth"
              />
              <SocialLink
                href="https://wa.me/6285219805200"
                icon="/icon/wa.svg"
                text="Whatsapp Photo Studio"
              />
            </div>
          </div>

          {/* Kolom 4: About */}
          <div>
            <h3 className="text-xl font-medium mb-4">About</h3>
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <FooterLink href="/">Atedoz Space</FooterLink>
              <FooterLink href="/services">Layanan Kami</FooterLink>
              <FooterLink href="/events">Events</FooterLink>
              <FooterLink href="/gallery">Galeri</FooterLink>
              <FooterLink href="/contact">Kontak Kami</FooterLink>
            </div>
          </div>
        </div>

        {/* KUNCI 2: Copyright tanpa garis pemisah */}
        <div className="mt-16 flex justify-center items-center text-sm text-gray-400">
          <Image
            width={16}
            height={16}
            src="/icon/copyright.svg"
            alt="copyright"
            className="w-4 h-4 mr-2"
          />
          <p>2025 ATEDOZ SPACE, All right reserved</p>
        </div>
      </footer>
    </>
  );
};

// Komponen helper untuk merapikan kode (tidak perlu diubah)
const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <Link
    href={href}
    className="text-lg font-bold hover:text-gray-400 transition-colors"
  >
    {children}
  </Link>
);

const SocialLink: React.FC<{ href: string; icon: string; text: string }> = ({
  href,
  icon,
  text,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 text-lg font-bold hover:text-gray-400 transition-colors"
  >
    <Image width={24} height={24} src={icon} alt={text} className="w-6 h-6" />
    <span>{text}</span>
  </a>
);

export default Footer;
