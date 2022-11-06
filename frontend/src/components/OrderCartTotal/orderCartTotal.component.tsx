import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { sumTotal } from "../../redux/cart/cart";

const OrderCartTotal = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch();

  useEffect(() => {
    let sum = 0.0;
    items.forEach((item) => {
      sum += +item.product.price;
    });
    dispatch(sumTotal(sum));
  }, [items]);

  return (
    <li className="w-full border p-2 my-1 text-2xl flex justify-between">
      <span>TOTAL</span>
      <span>-</span>
      <span>$ {total} </span>
    </li>
  );
};
export default OrderCartTotal;
