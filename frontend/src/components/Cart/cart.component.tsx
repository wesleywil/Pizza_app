import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import OrderCardItems from "../OrderCartItems/orderCartItems.component";
import OrderCartTotal from "../OrderCartTotal/orderCartTotal.component";
import { useEffect } from "react";

const Cart = () => {
  let activeClassName = "underline";

  const orderItems = useSelector((state: RootState) => state.cart.items);
  useEffect(() => {
    console.log("ITEMS==> ", orderItems);
  }, [orderItems]);
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost rounded-btn text-xl">
        <FaShoppingCart />
      </label>
      <ul
        tabIndex={0}
        className=" dropdown-content p-2 shadow bg-base-100 rounded-xl w-72 mt-4"
      >
        {orderItems.length
          ? orderItems.map((item) => (
              <OrderCardItems
                key={item.product.id}
                picture={item.product.picture}
                price={item.product.price}
              />
            ))
          : ""}

        <OrderCartTotal />
        <li className="w-full bg-[#cb0033] hover:bg-[#ef90a9] text-[#f1f2f2] p-2 font-bold text-xl text-center rounded transition duration-700 ease-in-out">
          <NavLink
            to="/order"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            ORDER
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
