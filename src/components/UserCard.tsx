type UserCardProps = {
    type: string;
    count: number;
  };
  
  const UserCard = ({ type, count }: UserCardProps) => {
    const formattedCount = new Intl.NumberFormat().format(count);
  
    return (
      <div className="rounded-2xl bg-white p-4 flex flex-col items-start">
        <h2 className="capitalize text-sm font-medium text-gray-400 mb-2">{type}</h2> {/* Teks di atas */}
        <h1 className="text-3xl font-semibold text-right w-full">{formattedCount}</h1> {/* Angka di bawah */}
      </div>
    );
  };
  
  export default UserCard;