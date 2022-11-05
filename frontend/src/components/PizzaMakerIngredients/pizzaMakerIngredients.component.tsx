import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchIngredients } from "../../redux/ingredients/ingredients";
import { addIngredient } from "../../redux/customPizza/customPizza";
import { useEffect } from "react";

const PizzaMakerIngredients = () => {
  const ingreStatus = useSelector(
    (state: RootState) => state.ingredients.status
  );
  const ingredients = useSelector(
    (state: RootState) => state.ingredients.ingredients
  );
  const dispatch = useDispatch<any>();

  useEffect(() => {
    console.log("USE EFFECT INGREDIENTS!");
    if (ingreStatus === "idle") {
      dispatch(fetchIngredients());
    }
  }, [ingreStatus, ingredients]);

  return (
    <div className="w-11/12 xl:w-1/2 mx-auto rounded-b-xl p-2 text-[#f1f2f2] bg-black/30 backdrop-blur-sm h-72 xl:h-96 overflow-y-auto">
      <h3 className="text-center text-2xl mb-2 border-b">INGREDIENTS</h3>
      <div className="text-xl flex flex-col gap-2 pb-2">
        {ingredients.length
          ? ingredients.map((item) => (
              <div key={item.id} className="flex items-stretch">
                <span className="self-auto grow">{item.name}</span>
                <span className=" self-center w-24 text-center">
                  $ {item.price}
                </span>
                <button
                  onClick={() => dispatch(addIngredient(item))}
                  className="bg-[#cb0033] hover:opacity-80 px-4 self-end "
                >
                  +
                </button>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default PizzaMakerIngredients;
