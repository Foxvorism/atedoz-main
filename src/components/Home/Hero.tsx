const Hero: React.FC = () => {
  return (
    <>
      <div
        className="flex bg-black h-[calc(100vh-100px)] bg-cover"
        style={{
          backgroundImage: `url(/img/home/hero2.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
};

export default Hero;
