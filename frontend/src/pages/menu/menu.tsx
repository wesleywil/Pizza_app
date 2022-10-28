import GeneralCard from "../../components/GeneralCard/generalCard.component";
import ButtonFilter from "../../components/ButtonFilter/buttonFilter.component";
import SearchBar from "../../components/SearchBar/searchBar.component";

const Menu = () => {
  return (
    <div className="bg_pizza">
      <div className="bg-pink-900/40 flex flex-col items-center size_screen">
        <h1 className="text-3xl text-[#f1f2f2] mt-12 self-center">MENU</h1>
        <div className="mt-2 flex w-3/4	xl:w-1/3">
          <SearchBar />
        </div>
        <div className="flex flex-wrap justify-center gap-2 my-2">
          <ButtonFilter filterBy="Sweets" />
          <ButtonFilter filterBy="Vegans" />
          <ButtonFilter filterBy="Classics" />
          <ButtonFilter filterBy="Specials" />
        </div>
        <div className="flex flex-col gap-4 h-96 xl:h-1/4 md:h-1/4 w-11/12 xl:w-1/2 rounded-xl overflow-x-hidden transition duration-700 ease-in-out">
          <GeneralCard
            title="Mussarela"
            subTitle="mussarela black olives"
            price={22}
            btnName="Order"
          />
          <GeneralCard
            title="Pepperoni"
            subTitle="mussarela black olives pepperoni"
            price={18}
            btnName="Order"
          />
          <GeneralCard
            title="Calabresa"
            subTitle="mussarela black olives calabresa"
            price={20}
            btnName="Order"
          />
          <GeneralCard
            title="Duo Cheese"
            subTitle="mussarela cheese2 black olives"
            price={24}
            btnName="Order"
          />
          <GeneralCard
            title="Margarita"
            subTitle="mussarela idk black olives"
            price={28}
            btnName="Order"
          />
          <GeneralCard
            title="Four Seasons"
            subTitle="mussarela idk idk another black olives"
            price={32.5}
            btnName="Order"
          />
        </div>
      </div>
    </div>
  );
};
export default Menu;
