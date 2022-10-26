import PizzaImage from "../../assets/pizza.jpg";

const OrderCard = () => {
  return (
    <div className="w-full text-xl text-[#f1f2f2] p-2 border rounded-xl flex flex-col md:flex-row  gap-2 items-center md:items-start bg-black/30 backdrop-blur-sm flex-none">
      <img src={PizzaImage} alt="pizza" className="rounded-full md:w-40" />
      <div className="flex flex-col md:w-full items-center md:self-center">
        <h1 className="text-3xl font-semibold">Pepperoni</h1>
        <h2 className="text-lg flex gap-2 md:grow">
          <span>Mussarela</span>
          <span>Pepperoni</span>
          <span>Black Olives</span>
        </h2>
        <h2 className="text-2xl mt-2">$ 20.00</h2>
      </div>
      <div className="flex flex-col items-center border-t md:border-0 w-full md:self-center">
        <h1 className="text-lg mb-2">Quantity</h1>
        <div className="flex justify-center border">
          <button className="bg-[#cb0033] hover:bg-[#ef90a9] px-2 font-bold transition duration-700 ease-in-out">
            -
          </button>
          <span className="p-2 font-bold">1</span>
          <button className="bg-[#cb0033] hover:bg-[#ef90a9] px-2 font-bold transition duration-700 ease-in-out">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
