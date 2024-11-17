import UserCard from "@/components/UserCard";

const BasicPage = () => {
  type CardData = {
    type: string;
    count: number;
  };

  const cardData: CardData[] = [
    { type: "farmers", count: 7724 },
    { type: "plots", count: 12085 },
    { type: "trained farmers", count: 5000 }ß,
    { type: "certified farmers", count: 0 },
    { type: "farmer groups", count: 36 },
    { type: "ICS", count: 10 },
    { type: "sme", count: 50 },
    { type: "mills", count: 20 },
  ];

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardData.map((data, index) => (
            <UserCard key={index} type={data.type} count={data.count} />
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/3">Right</div>
    </div>
  );
};

export default BasicPage;
