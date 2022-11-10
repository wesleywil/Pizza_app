import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import OrderCard from "../../components/OrderCard/orderCard.component";
import { useEffect } from "react";
const Order = () => {
  const orderItems = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);

  useEffect(() => {
    console.log("ITEMS => ", orderItems);
    localStorage.setItem("cart", JSON.stringify({ items: orderItems }));
  }, [orderItems]);

  return (
    <div className="bg_pizza">
      <div className="bg-pink-900/40 flex flex-col gap-4 items-center size_screen_2">
        <h1 className="text-5xl uppercase font-bold text-[#f1f2f2] mt-12 self-center">
          Order
        </h1>
        <div className="w-11/12 xl:w-1/2 flex md:flex-col gap-2 overflow-x-auto">
          {orderItems.length
            ? orderItems.map((item) => (
                <OrderCard
                  key={item.product.id}
                  id={item.product.id}
                  name={item.product.name}
                  img={item.product.picture}
                  description={item.product.description}
                  price={item.product.price}
                  quantity={item.quantity}
                />
              ))
            : ""}
        </div>
        <div className="w-11/12 xl:w-1/2 mb-2  text-center text-3xl text-[#f1f2f2] rounded-xl bg-black/30 backdrop-blur-sm pb-2">
          <h1 className="font-bold">TOTAL</h1>
          <h2>$ {total}</h2>
          <button className="mt-2 mb-2 font-bold rounded-full uppercase px-4 bg-[#cb0033] hover:bg-[#ef90a9] text-[#f1f2f2] hover:text-black/70">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
