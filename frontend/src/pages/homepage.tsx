import Logo from "../assets/CherryPizzaLogo.svg";

const Homepage = () => {
  return (
    <div className="bg_pizza">
      <div className=" bg-pink-900/40 flex flex-col justify-center size_screen">
        <img
          src={Logo}
          alt=""
          className="w-32 xl:w-64 md:w-64 hover:opacity-60 backdrop-blur-sm self-center transition duration-700 ease-in-out"
        />
        <h1 className="text-[#f1f2f2] font-bold text-5xl xl:text-8xl md:text-8xl text-center p-2 self-center">
          Cherry Pizzas
        </h1>
        <h2 className="text-gray-200 font-semibold text-xl xl:text-4xl md:text-4xl self-center">
          The best pizzas in the world!
        </h2>
        <button className="mt-4 bg-[#d50145] hover:bg-[#ea6387] font-bold text-[#f1f2f2]  py-2 rounded-xl w-1/2 xl:w-36 md:w-36 self-center transition duration-700 ease-in-out">
          MENU
        </button>
      </div>
    </div>
  );
};

export default Homepage;
