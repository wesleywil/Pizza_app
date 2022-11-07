import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { addQuantity, subQuantity } from "../../redux/cart/cart";

import { FaPlus, FaMinus } from "react-icons/fa";

type CardItems = {
  picture: string;
  price: number;
  id: number;
};

const OrderCardItems = ({ picture, price, id }: CardItems) => {
  const product = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.product.id === id)
  );
  const dispatch = useDispatch<any>();

  return (
    <li className="w-full border p-2 my-1 flex justify-between">
      <img
        src={`http://localhost:8000${picture}`}
        alt="pizza icon"
        className="w-12 rounded-full"
      />
      <div className="self-center flex justify-center w-1/2">
        <button
          onClick={() => dispatch(subQuantity(id))}
          className=" bg-[#cb0033] hover:bg-[#ea6387] text-[#f1f2f2] px-2 py-2 rounded-l-xl transition duration-700 ease-in-out"
        >
          <FaMinus />
        </button>
        <span className="text-black text-xl py-2 w-1/3 text-center">
          {product?.quantity}
        </span>
        <button
          onClick={() => dispatch(addQuantity(id))}
          className="bg-[#cb0033] hover:bg-[#ea6387] text-[#f1f2f2] px-2 py-2 rounded-r-xl transition duration-700 ease-in-out"
        >
          <FaPlus />
        </button>
      </div>
      {/* <select className="select" defaultValue={qtd}>
        <option value={0} disabled>
          Qtd
        </option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
      </select> */}
      <span className="self-center text-xl">$ {price}</span>
    </li>
  );
};

export default OrderCardItems;
