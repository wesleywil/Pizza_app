import ButtonAdminSection from "../ButtonAdminSection/buttonAdminSection.component";
import MenuCard from "../MenuCard/menuCard.component";

const AdminSection = () => {
  return (
    <div className="">
      <h1 className="text-2xl text-[#f1f2f2] text-center mb-2">Products</h1>
      <div className="flex gap-2 justify-center">
        <ButtonAdminSection sectionName="Pizzas" />
        <ButtonAdminSection sectionName="Drinks" />
      </div>
      <div className="mt-2 xl:p-4 flex flex-col gap-4 h-96 overflow-y-auto transition duration-700 ease-in-out">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </div>
  );
};
export default AdminSection;
