const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">

        <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 border-t-wriTertiaryCream">
          <h2 className="font-medium">
            Kadis Perkebunan Kampar Serahkan 1.500 STDB kepada Petani Sawit
          </h2>
          <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
            Sabtu, 09 November 2024
          </span>
          <p className="text-sm text-gray-400 mt-1">
            Sebanyak 1.500 Surat Tanda Daftar Usaha Pekebun untuk Budidaya
            (STDB) diserahkan oleh Kepala Dinas Perkebunan, Peternakan, dan
            Kesehatan Hewan Kabupaten Kampar kepada para petani sawit di
            Kabupaten Kampar ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
