import PizzaImage from "../../assets/pizza.jpg";

const OrderCardItems = () => {
  return (
    <li className="w-full border p-2 my-1 flex justify-between">
      <img src={PizzaImage} alt="pizza icon" className="w-12 rounded-full" />
      <span className="self-center ml-2 text-xl">1</span>
      <select className="select">
        <option disabled selected>
          Qtd
        </option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <span className="self-center text-xl">$ 22.00</span>
    </li>
  );
};

export default OrderCardItems;
