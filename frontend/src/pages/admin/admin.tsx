import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  products,
  ingredients,
  orders,
} from "../../redux/adminSection/adminSectionSlice";

import ButtonAdminSection from "../../components/ButtonAdminSection/buttonAdminSection.component";
import GeneralCard from "../../components/GeneralCard/generalCard.component";
import AdminSection from "../../components/AdminSection/adminSection.component";
import AdminOrderCard from "../../components/AdminOrderCard/adminOrderCard.component";

const Admin = () => {
  const action = useSelector((state: RootState) => state.sectionChange.value);
  const dispatch = useDispatch();

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
              <GeneralCard
                title="Mussarela"
                subTitle="mussarela black olives"
                price={22}
                btnName="Edit"
              />
              <GeneralCard
                title="Pepperoni"
                subTitle="mussarela black olives pepperoni"
                price={18}
                btnName="Edit"
              />
              <GeneralCard
                title="Calabresa"
                subTitle="mussarela black olives calabresa"
                price={20}
                btnName="Edit"
              />
              <GeneralCard
                title="Duo Cheese"
                subTitle="mussarela cheese2 black olives"
                price={24}
                btnName="Edit"
              />
              <GeneralCard
                title="Margarita"
                subTitle="mussarela idk black olives"
                price={28}
                btnName="Edit"
              />
              <GeneralCard
                title="Four Seasons"
                subTitle="mussarela idk idk another black olives"
                price={32.5}
                btnName="Edit"
              />
            </AdminSection>
          ) : action === 1 ? (
            <AdminSection title="Ingredients">
              <GeneralCard
                title="Extra Cheese"
                subTitle="Mussarela"
                price={5}
                btnName="Edit"
              />
              <GeneralCard
                title="Mushroom"
                subTitle="Shitake mushrooms"
                price={8.5}
                btnName="Edit"
              />
              <GeneralCard
                title="Green Pepper"
                subTitle="Green Pepper slices"
                price={0.8}
                btnName="Edit"
              />
              <GeneralCard
                title="Pepperoni"
                subTitle="Pepperoni Slices"
                price={6.2}
                btnName="Edit"
              />
              <GeneralCard
                title="Fresh Garlic"
                subTitle="Fresh Garlic Slices"
                price={1.25}
                btnName="Edit"
              />
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
    </div>
  );
};
export default Admin;
