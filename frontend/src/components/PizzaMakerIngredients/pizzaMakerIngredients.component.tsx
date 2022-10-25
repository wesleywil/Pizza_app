const ingredients: Array<{ name: string; price: number }> = Array(
  { name: "Extra Cheese", price: 5.0 },
  { name: "Mushroom", price: 8.5 },
  { name: "Green Pepper", price: 0.8 },
  { name: "Pepperoni", price: 6.2 },
  { name: "Fresh garlic", price: 1.25 }
);

const PizzaMakerIngredients = () => {
  return (
    <div className="w-11/12 xl:w-1/2 mx-auto rounded-b-xl p-2 text-[#f1f2f2] bg-green-600/30 backdrop-blur-sm h-72 xl:h-96 overflow-y-auto">
      <h3 className="text-center text-2xl mb-2 border-b">INGREDIENTS</h3>
      <div className="text-xl flex flex-col gap-2 pb-2">
        {ingredients.map((item, i) => (
          <div key={i} className="flex items-stretch">
            <span className="self-auto grow">{item.name}</span>
            <span className=" self-center w-24 text-center">
              $ {item.price}
            </span>
            <button className="bg-[#cb0033] hover:opacity-80 px-4 self-end ">
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaMakerIngredients;
