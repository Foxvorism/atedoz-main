const WhyAtedoz: React.FC = () => {
  const why = [
    {
      id: 1,
      icon: "icon/home/likes.svg",
      alt: "likes",
      desc: "Memiliki banyak pengalaman",
    },
    {
      id: 2,
      icon: "icon/home/thumb_up_off_alt.svg",
      alt: "thumb_up_off_alt",
      desc: "Menjaga Kualitas",
    },
    {
      id: 3,
      icon: "icon/home/camera_alt.svg",
      alt: "camera_alt",
      desc: "Kru Yang Profesional",
    },
    {
      id: 4,
      icon: "icon/home/fiber_new.svg",
      alt: "fiber_new",
      desc: "Selalu ada layanan terbaru",
    },
    {
      id: 5,
      icon: "icon/home/money.svg",
      alt: "money",
      desc: "Harga yang bersaing",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center p-14">
        <div className="text-center">
          <h2 className="font-bold text-3xl mb-10">Atedoz Space</h2>
          <p className="font-medium text-lg w-[60vw]">
            Atedoz space memiliki banyak layanan.
          </p>
          <p className="font-medium text-lg w-[60vw] mb-10">
            Layanan yang kami unggulkan adalah Photobooth yang sekarang sudah
            banyak variasi yang bisa digunakan.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            {why.map((why) => (
              <div key={why.id}>
                <div className="flex justify-center items-center">
                  <Image src={why.icon} alt={why.alt} className="mb-3" />
                </div>
                <div className="flex justify-center items-center">
                  <p className="font-semibold text-lg w-32">{why.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyAtedoz;
