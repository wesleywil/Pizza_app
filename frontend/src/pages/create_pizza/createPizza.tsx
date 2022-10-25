import PizzaMakerDetails from "../../components/PizzaMakerDetails/pizzaMakerDetails.component";
import PizzaMakerIngredients from "../../components/PizzaMakerIngredients/pizzaMakerIngredients.component";

import PizzaMaker from "../../assets/Pizza_maker.svg";

const CreatePizza = () => {
  return (
    <div className="bg_pizza">
      <div className=" bg-pink-900/40 flex flex-col justify-center size_screen_2">
        <h1 className="text-3xl xl:text-5xl text-[#f1f2f2] mt-12 self-center">
          CUSTOM PIZZA
        </h1>
        <div className="flex flex-col xl:flex-row xl:justify-center  gap-2 mt-2">
          <div className="xl:w-full flex gap-2 flex-col">
            <PizzaMakerDetails />
            <PizzaMakerIngredients />
          </div>
          <img
            src={PizzaMaker}
            alt="making pizza"
            className="w-64 md:w-1/3 xl:w-1/3 self-center"
          />
        </div>
      </div>
    </div>
  );
};
export default CreatePizza;
