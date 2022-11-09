import {
  addQuantity,
  subQuantity,
  removeFromCart,
} from "../../redux/cart/cart";
import { useDispatch } from "react-redux";

import { FaTrash } from "react-icons/fa";

type OrderItems = {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
  quantity: number;
};

const OrderCard = ({
  id,
  name,
  img,
  description,
  price,
  quantity,
}: OrderItems) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full text-xl text-[#f1f2f2] p-2 border rounded-xl flex flex-col md:flex-row  gap-2 items-center md:items-start bg-black/30 backdrop-blur-sm flex-none">
      <img
        src={`http://localhost:8000${img}`}
        alt="pizza"
        className="rounded-full md:w-40"
      />
      <div className="flex flex-col md:w-full items-center md:self-center">
        <h1 className="text-3xl font-semibold">{name}</h1>
        <h2 className="text-lg flex gap-2 md:grow">{description}</h2>
        <h2 className="text-2xl mt-2">$ {price}</h2>
      </div>
      <div className="flex flex-col items-center border-t md:border-0 w-full md:self-center">
        <h1 className="text-lg mb-2">Quantity</h1>
        <div className="flex justify-between gap-4">
          <div className="flex justify-center border">
            <button
              onClick={() => dispatch(subQuantity(id))}
              className="bg-[#cb0033] hover:bg-[#ef90a9] px-2 font-bold transition duration-700 ease-in-out"
            >
              -
            </button>
            <span className="p-2 font-bold">{quantity}</span>
            <button
              onClick={() => dispatch(addQuantity(id))}
              className="bg-[#cb0033] hover:bg-[#ef90a9] px-2 font-bold transition duration-700 ease-in-out"
            >
              +
            </button>
          </div>
          <button
            onClick={() => dispatch(removeFromCart(id))}
            className="rounded self-center bg-[#cb0033] hover:bg-[#ef90a9] hover:text-gray-600 p-3 border transition duration-700 ease-in-out"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
