import pizzaimg from "../../assets/pizza.jpg";

const OrderDetailsItems = () => {
  return (
    <div className="bg-black/30 border p-2 rounded-xl flex">
      <img
        src={pizzaimg}
        alt="pizza product"
        className="w-24 h-24 self-center rounded-full"
      />
      <div className="flex flex-col items-center p-2 text-[#f1f2f2]">
        <h1 className="text-2xl font-semibold">Mussarela</h1>
        <h3 className="text-center">
          Mussarela - Black Olives - something here - another - wow wow wow{" "}
        </h3>
        <div className="flex gap-2 self-center text-xl">
          <h4>Qtd - 2</h4>
          <h4>$ 22.00</h4>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsItems;
