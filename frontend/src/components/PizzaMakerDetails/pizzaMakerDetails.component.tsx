const ingredients: Array<string> = ["extra cheese", "mushroom", "green pepper"];
const price: number = 39.9;

const PizzaMakerDetails = () => {
  return (
    <div className="w-11/12 xl:w-1/2 mx-auto rounded-t-xl p-2 text-[#f1f2f2] bg-green-600/30 backdrop-blur-sm">
      <h3 className="text-center text-2xl mb-2 border-b">ADDED</h3>
      <div className="text-xl flex flex-wrap justify-center gap-2">
        {ingredients.map((item, i) => (
          <span key={i} className="text-center py-1">
            {item}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 text-xl border-t pt-2">
        <span className="text-center">$ {price}</span>
        <button className="bg-[#cb0033] hover:opacity-80">Order</button>
      </div>
    </div>
  );
};

export default PizzaMakerDetails;
