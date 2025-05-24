const Maps: React.FC = () => {
  return (
    <>
      <div className="p-14 w-full text-center px-50">
        <h2 className="text-2xl font-bold mb-10">Kunjungi Kami</h2>
        <div className="bg-black p-3 rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5325956856905!2d106.76922341093227!3d-6.5805132933855495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5270314c9f3%3A0x6bf2ddef441891a8!2sAtedoz%20Space%20studio%20foto%20%7C%20G.g%20Kelor%20Bogor!5e0!3m2!1sen!2sid!4v1748050064819!5m2!1sen!2sid"
            width="100%" // Make the width 100% of its parent container
            height="500" // You can keep a fixed height or adjust as needed
            loading="lazy"
            style={{ border: 0 }} // Good practice for iframes
            //   allowFullScreen="" // Allows fullscreen mode
            className="rounded-md"
            referrerPolicy="no-referrer-when-downgrade" // Recommended for security
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Maps;
