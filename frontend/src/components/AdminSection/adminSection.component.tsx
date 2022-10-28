type AdminSectionProps = {
  title: string;
  buttons?: any;
  children: any;
};

const AdminSection = ({ title, buttons, children }: AdminSectionProps) => {
  return (
    <div className="">
      <h1 className="text-2xl text-[#f1f2f2] text-center mb-2">{title}</h1>
      <div className="flex gap-2 justify-center h-8">{buttons}</div>
      <div className="mt-2 xl:p-4 flex flex-col gap-4 h-96 overflow-y-auto transition duration-700 ease-in-out">
        {children}
      </div>
    </div>
  );
};
export default AdminSection;
