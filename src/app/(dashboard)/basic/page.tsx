"use client";

import { useState, useEffect } from "react";
import UserCard from "@/components/UserCard";
import { provinces, districts, cardData } from "@/lib/data-basic";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";

const BasicPage = () => {
  const [selectedProvince, setSelectedProvince] = useState("14"); // Riau
  const [selectedDistrict, setSelectedDistrict] = useState("1400"); // All District
  const [currentCardData, setCurrentCardData] = useState<CardData[]>([]);

  // Define the CardData type
  type CardData = {
    type: string;
    count: number;
  };

  useEffect(() => {
    if (selectedDistrict === "1400") {
      // Jika district "All District", maka jumlahkan semua data dari distrik dalam Riau
      const totalData: CardData[] = [];
      const districtsInRiau = districts[selectedProvince];

      districtsInRiau.forEach((district) => {
        const districtData = cardData[district.code];
        districtData?.forEach((data) => {
          const existing = totalData.find((item) => item.type === data.type);
          if (existing) {
            existing.count += data.count; // Menjumlahkan count untuk type yang sama
          } else {
            totalData.push({ ...data }); // Menambahkan data baru
          }
        });
      });

      setCurrentCardData(totalData);
    } else {
      // Jika district selain "All District", ambil data untuk district yang dipilih
      setCurrentCardData(cardData[selectedDistrict] || []);
    }
  }, [selectedProvince, selectedDistrict]);

  // Fungsi untuk mengubah provinsi
  const handleProvinceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const province = event.target.value;
    setSelectedProvince(province);
    setSelectedDistrict("1400"); // Reset district ke "All District"
  };

  // Fungsi untuk mengubah district
  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-3/4 flex flex-col gap-4">
        {/* Select Box Container */}
        <div className="flex gap-4 mb-4">
          {/* Province Select */}
          <div className="w-1/2">
            <label
              htmlFor="province"
              className="block text-sm font-medium text-gray-700"
            >
              Province:
            </label>
            <select
              id="province"
              value={selectedProvince}
              onChange={handleProvinceChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              {provinces.map((province) => (
                <option key={province.code} value={province.code}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>

          {/* District Select */}
          <div className="w-1/2">
            <label
              htmlFor="district"
              className="block text-sm font-medium text-gray-700"
            >
              District:
            </label>
            <select
              id="district"
              value={selectedDistrict}
              onChange={handleDistrictChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              {districts[selectedProvince].map((district) => (
                <option key={district.code} value={district.code}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* User Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentCardData.length > 0 ? (
            currentCardData.map((data, index) => (
              <UserCard key={index} type={data.type} count={data.count} />
            ))
          ) : (
            <p className="text-center text-gray-500">
              No data available for the selected province and district.
            </p>
          )}
        </div>
        {/* Middle Chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* CountChart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* Production Chart */}
          <div className="w-full lg:w-2/3 h-[450px]"></div>
        </div>
        {/* Bottom Chart */}
        <div></div>
      </div>

      {/* Right Sidebar or Other Content */}
      <div className="w-full lg:w-1/4 flex flex-col gap-8">
        <EventCalendar />
        <Announcements/>
      </div>
    </div>
  );
};

export default BasicPage;
