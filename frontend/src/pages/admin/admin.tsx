import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  products,
  ingredients,
  orders,
} from "../../redux/adminSection/adminSectionSlice";
import { fetchPizzas } from "../../redux/pizzas/pizzas";
import { fetchIngredients } from "../../redux/ingredients/ingredients";

import ButtonAdminSection from "../../components/ButtonAdminSection/buttonAdminSection.component";
import GeneralCard from "../../components/GeneralCard/generalCard.component";
import AdminSection from "../../components/AdminSection/adminSection.component";
import AdminOrderCard from "../../components/AdminOrderCard/adminOrderCard.component";
import OrderDetails from "../../components/OrderDetails/orderDetails.component";
import { useEffect } from "react";

const Admin = () => {
  const action = useSelector((state: RootState) => state.sectionChange.value);
  const pizzas = useSelector((state: RootState) => state.pizza.pizzas);
  const ing = useSelector((state: RootState) => state.ingredients.ingredients);
  const pizzaStatus = useSelector((state: RootState) => state.pizza.status);
  const ingredientsStatus = useSelector(
    (state: RootState) => state.ingredients.status
  );
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (pizzaStatus === "idle") {
      dispatch(fetchPizzas());
    }
    if (ingredientsStatus === "idle") {
      dispatch(fetchIngredients());
    }
  });

  return (
    <div className="bg_pizza">
      <div className="bg-pink-900/40 flex flex-col gap-4 items-center h-screen">
        <h1 className="text-5xl uppercase font-bold text-[#f1f2f2] mt-12 self-center">
          ADMIN
        </h1>
        <div className="w-11/12 flex gap-2 justify-center">
          <ButtonAdminSection
            sectionName="Products"
            onPress={() => dispatch(products())}
          />
          <ButtonAdminSection
            sectionName="Ingredients"
            onPress={() => dispatch(ingredients())}
          />
          <ButtonAdminSection
            sectionName="Orders"
            onPress={() => dispatch(orders())}
          />
        </div>
        <div className="w-11/12 xl:w-1/2 p-2 mx-2 border rounded-xl">
          {action === 0 ? (
            <AdminSection
              title="Products"
              buttons={
                <>
                  <ButtonAdminSection sectionName="Pizzas" />{" "}
                  <ButtonAdminSection sectionName="Drinks" />
                </>
              }
            >
              {pizzas.length
                ? pizzas.map((item) => (
                    <GeneralCard
                      key={item.id}
                      title={item.name}
                      subTitle={item.description}
                      price={item.price}
                      btnName="Edit"
                    />
                  ))
                : ""}
            </AdminSection>
          ) : action === 1 ? (
            <AdminSection title="Ingredients">
              {ing.length
                ? ing.map((item) => (
                    <GeneralCard
                      key={item.id}
                      title={item.name}
                      subTitle=""
                      price={item.price}
                      btnName="Edit"
                    />
                  ))
                : ""}
            </AdminSection>
          ) : (
            <AdminSection
              title="Orders"
              buttons={
                <>
                  <ButtonAdminSection sectionName="Open" />{" "}
                  <ButtonAdminSection sectionName="In Progress" />
                  <ButtonAdminSection sectionName="Closed" />
                </>
              }
            >
              <AdminOrderCard
                btnStatus="open"
                btnColor="text-[#cb0033]"
                price={22.5}
              />
              <AdminOrderCard
                btnStatus="closed"
                btnColor="text-black"
                price={15.5}
              />
              <AdminOrderCard
                btnStatus="open"
                btnColor="text-green-700"
                price={18}
              />
            </AdminSection>
          )}
        </div>
      </div>
      <OrderDetails />
    </div>
  );
};
export default Admin;
