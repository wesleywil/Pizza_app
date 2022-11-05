import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTotal } from "../../redux/customPizza/customPizza";

const price: number = 39.9;

const PizzaMakerDetails = () => {
  const ingredients = useSelector(
    (state: RootState) => state.customPizza.ingredients
  );
  const total = useSelector((state: RootState) => state.customPizza.total);
  const dispatch = useDispatch();

  useEffect(() => {
    let sum = 0.0;
    ingredients.forEach((item) => {
      sum += +item.price;
    });
    console.log("TOTAL=>  ", sum);
    dispatch(addTotal(sum));
  }, [ingredients]);

  return (
    <div className="w-11/12 xl:w-1/2 mx-auto rounded-t-xl p-2 text-[#f1f2f2] bg-black/30 backdrop-blur-sm">
      <h3 className="text-center text-2xl mb-2 border-b">ADDED</h3>
      <div className="text-xl flex flex-wrap justify-center gap-2">
        {ingredients.map((item) => (
          <span key={item.id} className="text-center py-1">
            {item.name}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 text-xl border-t pt-2">
        <span className="text-center">$ {total}</span>
        <button className="bg-[#cb0033] hover:opacity-80">Order</button>
      </div>
    </div>
  );
};

export default PizzaMakerDetails;
