type AdminOrderCardProps = {
  btnStatus: string;
  btnColor: string;
  price: number;
};

const AdminOrderCard = ({
  btnStatus,
  btnColor,
  price,
}: AdminOrderCardProps) => {
  return (
    <div className="bg-white/40 backdrop-blur-sm rounded p-2 flex gap-2 justify-between">
      <span className={btnColor + "  font-bold text-2   xl "}>{btnStatus}</span>
      <span className="text-black font-bold text-center">$ {price}</span>
      <button className="bg-[#cb0033] hover:bg-[#ea6387] text-[#f1f2f2] hover:text-gray-700 font-semibold px-2  transition duration-700 ease-in-out">
        Details
      </button>
    </div>
  );
};
export default AdminOrderCard;
