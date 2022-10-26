const MenuCard = () => {
  return (
    <div className="w-full  flex gap-2 p-2 bg-black/30 backdrop-blur-sm odd">
      <div className="ml-1 flex-none self-center">
        <img
          src="https://dummyimage.com/100x100"
          alt="pizza image"
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col text-xl text-[#f1f2f2]">
        <h4 className="text-2xl">Mussarela</h4>
        <p>Mussarela and tomato slices</p>
        <div className="flex gap-2">
          <span className="self-center">$ 12.00</span>
          <button className="bg-[#d50145] hover:bg-[#ea6387] font-bold text-[#f1f2f2] w-24 h-8 px-2 transition duration-700 ease-in-out">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
