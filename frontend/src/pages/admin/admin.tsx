import ButtonAdminSection from "../../components/ButtonAdminSection/buttonAdminSection.component";
import AdminSection from "../../components/AdminSection/adminSection.component";

const Admin = () => {
  return (
    <div className="bg_pizza">
      <div className="bg-pink-900/40 flex flex-col gap-4 items-center h-screen">
        <h1 className="text-5xl uppercase font-bold text-[#f1f2f2] mt-12 self-center">
          ADMIN
        </h1>
        <div className="w-11/12 flex gap-2 justify-center">
          <ButtonAdminSection sectionName="Products" />
          <ButtonAdminSection sectionName="Ingredients" />
          <ButtonAdminSection sectionName="Orders" />
        </div>
        <div className="w-11/12 xl:w-1/2 p-2 mx-2 border rounded-xl">
          <AdminSection />
        </div>
      </div>
    </div>
  );
};
export default Admin;
