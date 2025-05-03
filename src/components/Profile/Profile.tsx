const Profile: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center p-10 px-30 bg-white">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-10 text-center">Your Profile</h2>

          <div className="border rounded-lg border-white shadow-xl/20 p-10">
            <div className="grid grid-cols-2 gap-10 mb-8">
              <div>
                <h2 className="mb-1.5 text-sm font-bold text-gray-700">
                  Full Name
                </h2>
                <input
                  readOnly
                  type="email"
                  placeholder="Nama Lengkap Anda"
                  className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10"
                />
              </div>
              <div>
                <h2 className="mb-1.5 text-sm font-bold text-gray-700">
                  Phone Number
                </h2>
                <input
                  readOnly
                  type="email"
                  placeholder="Nomor telepon anda"
                  className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10"
                />
              </div>
              <div>
                <h2 className="mb-1.5 text-sm font-bold text-gray-700">
                  Email Address
                </h2>
                <input
                  readOnly
                  type="email"
                  placeholder="Alamat email anda"
                  className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10"
                />
              </div>
              <div>
                <h2 className="mb-1.5 text-sm font-bold text-gray-700">
                  Atedoz Role
                </h2>
                <input
                  readOnly
                  type="email"
                  placeholder="Role anda di Atedoz"
                  className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10"
                />
              </div>
            </div>

            <div className="w-full mb-5">
              <button className="w-full text-center bg-[var(--color-black-2)] text-white py-2 rounded-md font-semibold cursor-pointer hover:bg-[var(--color-brand-500)]">
                Edit Data Diri
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
