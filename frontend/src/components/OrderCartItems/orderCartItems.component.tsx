type CardItems = {
  picture: string;
  price: number;
  qtd?: number;
};

const OrderCardItems = ({ picture, price, qtd }: CardItems) => {
  return (
    <li className="w-full border p-2 my-1 flex justify-between">
      <img
        src={`http://localhost:8000${picture}`}
        alt="pizza icon"
        className="w-12 rounded-full"
      />

      <select className="select" defaultValue={qtd}>
        <option value={0} disabled>
          Qtd
        </option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
      </select>
      <span className="self-center text-xl">$ {price}</span>
    </li>
  );
};

export default OrderCardItems;
