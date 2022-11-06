import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchPizzas } from "../../redux/pizzas/pizzas";
import { addToCart } from "../../redux/cart/cart";

import GeneralCard from "../../components/GeneralCard/generalCard.component";
import ButtonFilter from "../../components/ButtonFilter/buttonFilter.component";
import SearchBar from "../../components/SearchBar/searchBar.component";
import { useEffect } from "react";

const Menu = () => {
  const pizzaStatus = useSelector((state: RootState) => state.pizza.status);
  const pizzas = useSelector((state: RootState) => {
    const all = state.pizza.pizzas;
    const filterName = state.pizza.filter;
    if (filterName === "") {
      return all;
    } else {
      return all.filter((item) => {
        return item.name.toLowerCase().includes(filterName.toLowerCase());
      });
    }
  });
  const dispatch = useDispatch<any>();

  useEffect(() => {
    console.log("USE EFFECT MENU PAGE!");
    if (pizzaStatus === "idle") {
      dispatch(fetchPizzas());
    }
  }, [pizzas, pizzaStatus]);

  return (
    <div className="bg_pizza">
      <div className="bg-pink-900/40 flex flex-col items-center size_screen">
        <h1 className="text-3xl text-[#f1f2f2] mt-12 self-center">MENU</h1>
        <div className="mt-2 flex w-3/4	xl:w-1/3">
          <SearchBar />
        </div>
        <div className="flex flex-wrap justify-center gap-2 my-2">
          <ButtonFilter filterBy="Sweets" />
          <ButtonFilter filterBy="Vegans" />
          <ButtonFilter filterBy="Classics" />
          <ButtonFilter filterBy="Specials" />
        </div>
        <div className="flex flex-col gap-4 h-96 xl:h-1/4 md:h-1/4 w-11/12 xl:w-1/2 rounded-xl overflow-x-hidden transition duration-700 ease-in-out">
          {pizzas.length
            ? pizzas.map((item) => (
                <GeneralCard
                  key={item.id}
                  title={item.name}
                  subTitle={item.description}
                  price={item.price}
                  btnName="Order"
                  btnAction={() =>
                    dispatch(
                      addToCart({ product: item, quantity: 2, total: 0 })
                    )
                  }
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};
export default Menu;
