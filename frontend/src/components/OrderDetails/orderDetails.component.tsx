import type { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";

import { hidden } from "../../redux/orderDetails/orderDetails";

import OrderDetailsItems from "../OrderDetailsItems/orderDetailsItems.component";

const OrderDetails = (): any => {
  const hide = useSelector((state: RootState) => state.order.value);
  const dispatch = useDispatch();
  if (!hide) {
    return (
      <div className="flex flex-col justify-between bg-black/30 backdrop-blur-sm rounded-xl py-2 px-1 w-11/12 md:w-2/3 xl:w-1/3 h-1/2 center">
        <div className="w-full text-2xl">
          <button
            onClick={() => dispatch(hidden())}
            className="float-right text-[#f1f2f2] hover:text-[#ea6387]"
          >
            <AiFillCloseCircle />
          </button>
        </div>
        <div className="mt-2">
          <select
            defaultValue={0}
            className="w-full py-1 text-xl text-center font-semibold text-[#f1f2f2] bg-[#cb0033]/60 rounded"
          >
            <option value="0">Open</option>
            <option value="1">Closed</option>
            <option value="2">In Progress</option>
          </select>
        </div>
        <h1 className="text-[#f1f2f2] text-2xl text-center font-semibold underline">
          Order Details
        </h1>
        <div className="flex flex-col gap-2 h-full p-2 overflow-y-auto">
          <OrderDetailsItems />
          <OrderDetailsItems />
        </div>
        <div className="flex justify-center w-full text-3xl text-[#f1f2f2] font-bold bg-[#cb0033]/50 h-12 self-end">
          <span>TOTAL - $44.00</span>
        </div>
      </div>
    );
  }
  <></>;
};

export default OrderDetails;
